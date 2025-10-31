let r, i, a, o;
var s,
    l = n(555256),
    c = Object.defineProperty,
    u = (e, t, n) =>
        t in e
            ? c(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    d = (e, t, n) => u(e, "symbol" != typeof t ? t + "" : t, n),
    f =
        (((a = f || {})[(a.DomContentLoaded = 0)] = "DomContentLoaded"),
        (a[(a.Load = 1)] = "Load"),
        (a[(a.FullSnapshot = 2)] = "FullSnapshot"),
        (a[(a.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
        (a[(a.Meta = 4)] = "Meta"),
        (a[(a.Custom = 5)] = "Custom"),
        (a[(a.Plugin = 6)] = "Plugin"),
        a),
    _ =
        (((o = _ || {})[(o.Mutation = 0)] = "Mutation"),
        (o[(o.MouseMove = 1)] = "MouseMove"),
        (o[(o.MouseInteraction = 2)] = "MouseInteraction"),
        (o[(o.Scroll = 3)] = "Scroll"),
        (o[(o.ViewportResize = 4)] = "ViewportResize"),
        (o[(o.Input = 5)] = "Input"),
        (o[(o.TouchMove = 6)] = "TouchMove"),
        (o[(o.MediaInteraction = 7)] = "MediaInteraction"),
        (o[(o.StyleSheetRule = 8)] = "StyleSheetRule"),
        (o[(o.CanvasMutation = 9)] = "CanvasMutation"),
        (o[(o.Font = 10)] = "Font"),
        (o[(o.Log = 11)] = "Log"),
        (o[(o.Drag = 12)] = "Drag"),
        (o[(o.StyleDeclaration = 13)] = "StyleDeclaration"),
        (o[(o.Selection = 14)] = "Selection"),
        (o[(o.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
        (o[(o.CustomElement = 16)] = "CustomElement"),
        o);
let p = (e, t) => t.some((t) => e instanceof t),
    h = new WeakMap(),
    m = new WeakMap(),
    g = new WeakMap(),
    E = {
        get(e, t, n) {
            if (e instanceof IDBTransaction) {
                if ("done" === t) return h.get(e);
                if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
            }
            return v(e[t]);
        },
        set: (e, t, n) => ((e[t] = n), !0),
        has: (e, t) => (e instanceof IDBTransaction && ("done" === t || "store" === t)) || t in e,
    };
function b(e) {
    E = e(E);
}
function y(e) {
    return (
        i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
    ).includes(e)
        ? function (...t) {
              return e.apply(I(this), t), v(this.request);
          }
        : function (...t) {
              return v(e.apply(I(this), t));
          };
}
function O(e) {
    return "function" == typeof e
        ? y(e)
        : (e instanceof IDBTransaction &&
              (function (e) {
                  if (h.has(e)) return;
                  let t = new Promise((t, n) => {
                      let r = () => {
                          n(e.error || new DOMException("AbortError", "AbortError"));
                      };
                      (e.oncomplete = () => {
                          t();
                      }),
                          (e.onerror = r),
                          (e.onabort = r);
                  });
                  h.set(e, t);
              })(e),
          p(e, r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e, E) : e);
}
function v(e) {
    if (e instanceof IDBRequest)
        return (function (e) {
            let t = new Promise((t, n) => {
                (e.onsuccess = () => {
                    t(v(e.result));
                }),
                    (e.onerror = () => {
                        n(e.error);
                    });
            });
            return g.set(t, e), t;
        })(e);
    if (m.has(e)) return m.get(e);
    let t = O(e);
    return t !== e && (m.set(e, t), g.set(t, e)), t;
}
let I = (e) => g.get(e);
function T(e, { blocked: t } = {}) {
    let n = indexedDB.deleteDatabase(e);
    return t && (n.onblocked = (e) => t(e.oldVersion, e)), v(n).then(() => {});
}
let S = ["get", "getKey", "getAll", "getAllKeys", "count"],
    A = ["put", "add", "delete", "clear"],
    C = new Map();
function N(e, t) {
    if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
    if (C.get(t)) return C.get(t);
    let n = t.replace(/FromIndex$/, ""),
        r = t !== n,
        i = A.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || (!i && !S.includes(n))) return;
    let a = async function (e, ...t) {
        let a = this.transaction(e, i ? "readwrite" : "readonly"),
            o = a.store;
        return r && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && a.done]))[0];
    };
    return C.set(t, a), a;
}
b((e) => ({
    ...e,
    get: (t, n, r) => N(t, n) || e.get(t, n, r),
    has: (t, n) => !!N(t, n) || e.has(t, n),
}));
let R = ["continue", "continuePrimaryKey", "advance"],
    P = {},
    w = new WeakMap(),
    D = new WeakMap(),
    x = {
        get(e, t) {
            if (!R.includes(t)) return e[t];
            let n = P[t];
            return (
                n ||
                    (n = P[t] =
                        function (...e) {
                            w.set(this, D.get(this)[t](...e));
                        }),
                n
            );
        },
    };
async function* L(...e) {
    let t = this;
    if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t)) return;
    let n = new Proxy(t, x);
    for (D.set(n, t), g.set(n, I(t)); t; ) yield n, (t = await (w.get(n) || t.continue())), w.delete(n);
}
function M(e, t) {
    return (
        (t === Symbol.asyncIterator && p(e, [IDBIndex, IDBObjectStore, IDBCursor])) ||
        ("iterate" === t && p(e, [IDBIndex, IDBObjectStore]))
    );
}
b((e) => ({
    ...e,
    get: (t, n, r) => (M(t, n) ? L : e.get(t, n, r)),
    has: (t, n) => M(t, n) || e.has(t, n),
}));
let j = "sprigReplayIframeLoaded",
    k = "sprigReplayIframeSettings",
    U = "sprigReplayIframeTakeFullSnapshot",
    G = "sprigReplayTeardown",
    B = [],
    Z = new (class {
        constructor(e) {
            d(this, "awaitingResolvers", []), d(this, "activeCount", 0), (this.capacity = e);
        }
        async acquire() {
            if (!(this.activeCount < this.capacity))
                return new Promise((e) => {
                    this.awaitingResolvers.push(e);
                });
            this.activeCount++;
        }
        release() {
            let e = this.awaitingResolvers.shift();
            e && this.activeCount <= this.capacity ? e() : this.activeCount--;
        }
        async execute(e) {
            try {
                return await this.acquire(), await e();
            } finally {
                this.release();
            }
        }
        setLimit(e) {
            this.capacity = e;
        }
    })(2),
    F = async (
        {
            apiUrl: e,
            surveyId: t,
            uploadId: n,
            etags: r,
            headers: i,
            responseGroupUuid: a,
            replayDuration: o,
            eventDigest: s,
        },
        c = !1,
    ) => {
        var u;
        if (!c && !n && !r)
            return void l.b.error("UploadErr", {
                isMobile: c,
                uploadId: n,
                etags: r,
            });
        l.b.info("MarkUploadComplete", { surveyId: t });
        let d = await (0, l.s)(`${e}/sdk/1/completeSessionReplay`, {
            method: "POST",
            body: JSON.stringify({
                etags: r,
                uploadId: n,
                responseGroupUuid: a,
                surveyId: t,
                replayDuration: o,
                eventDigest: s,
                userAgent: null == (u = null == window ? void 0 : window.navigator) ? void 0 : u.userAgent,
            }),
            headers: i,
            shouldRetryRequest: !0,
        });
        return l.b.info("MarkUploadDone", { surveyId: t }), d;
    },
    V = (e) => {
        if (e instanceof Attr) return null;
        let t = 1;
        for (let n = e.previousSibling; n; n = n.previousSibling) n.nodeName === e.nodeName && ++t;
        return t;
    },
    H = (e) => {
        if (null === e) return "";
        let t = [];
        if (e instanceof Document) return "/";
        for (
            let n = e;
            n && !(n instanceof Document) && null !== n;
            n = n instanceof Attr ? n.ownerElement : n.parentElement
        ) {
            let e = (t[t.length] = {
                name: void 0,
                position: null,
            });
            switch (n.nodeType) {
                case Node.TEXT_NODE:
                    e.name = "text()";
                    break;
                case Node.ATTRIBUTE_NODE:
                    e.name = "@" + n.nodeName;
                    break;
                case Node.PROCESSING_INSTRUCTION_NODE:
                    e.name = "processing-instruction()";
                    break;
                case Node.COMMENT_NODE:
                    e.name = "comment()";
                    break;
                case Node.ELEMENT_NODE:
                    e.name = n.nodeName;
            }
            e.position = V(n);
        }
        return (
            "/" +
            t
                .reverse()
                .map((e) => (null !== e.position ? `/${e.name}[${e.position}]` : `/${e.name}`))
                .join("")
        );
    },
    Y = (e) =>
        e &&
        e
            .trim()
            .substring(0, 500)
            .replace(/\s\s+/g, " ")
            .replace(/\r?\n|\r/g, " ")
            .substring(0, 250),
    W = {
        capture: !0,
        passive: !0,
    },
    K = ["a", "button", "input", "option", "li", "link"],
    z = ["Escape", "Enter", "Backspace", "F5", "Tab"],
    q = !1,
    X = null,
    Q = null,
    J = (e) => {
        var t;
        if ((null == (t = e.tagName) ? void 0 : t.toLowerCase()) === "html") return { element: "html" };
        let n = {};
        return (
            (n.element = ((e) => {
                if (!e.tagName) return "No tagName";
                let t = e.getAttribute("type");
                return t ? `${t} ${e.tagName.toLowerCase()}` : e.tagName.toLowerCase();
            })(e)),
            n
        );
    },
    $ = (e) => {
        var t;
        if (!e) return {};
        let n = { ...J(e) },
            r = e.parentElement;
        return r && K.includes(null == (t = r.tagName) ? void 0 : t.toLowerCase()) && Object.assign(n, J(r)), n;
    },
    ee = (e, t) => {
        var n, r, i;
        let a = t.target;
        t.target === (null == (n = window.document) ? void 0 : n.body) &&
            window.Sprig.pointerDownTarget &&
            (a = window.Sprig.pointerDownTarget),
            null !=
                (r = (i = {
                    x: t.x,
                    y: t.y,
                    type: e,
                    elementAttributes: $(a),
                    windowHeight: window.innerHeight,
                    windowWidth: window.innerWidth,
                    ...(a instanceof HTMLElement
                        ? {
                              rect: null == a ? void 0 : a.getBoundingClientRect(),
                              xPath: H(a),
                          }
                        : {}),
                }).elementAttributes) &&
                r.text &&
                (i.elementAttributes.text = Y(i.elementAttributes.text)),
            null == X || X("Sprig_Click", i);
    },
    et = (e) => {
        var t;
        z.includes(e.key) && ((t = { key: e.key }), null == X || X("Sprig_Keystroke", t));
    },
    en = () => {
        var e;
        window.performance
            .getEntriesByType("navigation")
            .map((e) => e.type)
            .includes("reload") &&
            ((e = {
                url: window.location.href,
                currentPageTitle: document.title,
            }),
            null == X || X("Sprig_Refresh", e));
    },
    er = () => {
        var e;
        window.performance
            .getEntriesByType("navigation")
            .map((e) => e.type)
            .includes("back_forward") &&
            ((e = {
                curUrl: window.location.href,
                fromUrl: document.referrer,
                currentPageTitle: document.title,
            }).currentPageTitle && (e.currentPageTitle = Y(e.currentPageTitle)),
            null == X || X("Sprig_BackForward", e));
    },
    ei = ((e, t) => {
        let n;
        return (r) => {
            clearTimeout(n), (n = window.setTimeout(() => e(r), t));
        };
    })((e) => {
        if (!(e.target instanceof HTMLElement || e.target instanceof Document)) return;
        let t = e.target;
        "scrollTop" in t || (t = t.documentElement),
            null == Q ||
                Q({
                    xPath: H(t),
                    x: t.scrollLeft,
                    y: t.scrollTop,
                    elementAttributes: {
                        targetScrollWidth: t.scrollWidth,
                        targetClientWidth: t.clientWidth,
                        targetScrollHeight: t.scrollHeight,
                        targetClientHeight: t.clientHeight,
                    },
                });
    }, 750),
    ea = ((s = "left_click"), (e) => ee(s, e)),
    eo = (e) => {
        2 === e.button && ee("right_click", e);
    },
    es = (e) => {
        window.Sprig && (window.Sprig.pointerDownTarget = e.target);
    },
    el = {
        isRecording: !1,
        scrollEventUuids: {},
        stopRecording: () => {},
    },
    ec = () => window.indexedDB && window.IDBKeyRange && window.CompressionStream,
    eu = (() => {
        let e = l.a.getItem("sprig.sessionId");
        if (e) return l.b.info("SessionIDFound", { savedSessionId: e }), l.a.removeItem("sprig.sessionId"), e;
        let t = (0, l.v)();
        return l.b.info("GeneratedSessionID", { uuid: t }), t;
    })(),
    ed = () => {
        l.a.setItem("sprig.disableReplayRecording", "disabled");
    },
    ef = () => !!l.a.getItem("sprig.disableReplayRecording"),
    e_ = () => !!l.a.getItem("sprig.isReplayPaused");
window.addEventListener("beforeunload", () => {
    l.b.info("BeforeUnload", { sessionId: eu }), l.a.setItem("sprig.sessionId", eu);
});
let ep = (e, t) => {
        var n, r;
        if (!ef() && el.isRecording && !e_())
            try {
                null == (r = null == (n = window.rrwebRecord) ? void 0 : n.addCustomEvent) || r.call(n, e, t);
            } catch (e) {
                eb("Error recording custom event", e);
            }
    },
    eh = async (e) => {
        let { x: t, xPath: n, y: r } = e,
            i = el.scrollEventUuids[n];
        if (i)
            return ey(async () => {
                var n, a, o, s;
                let l = await ev.openDB(),
                    c = await l.get("events", i);
                if (null != c && c.event) {
                    let i = JSON.parse(c.event),
                        u = t > (null == (a = null == (n = i.data) ? void 0 : n.payload) ? void 0 : a.x),
                        d = r > (null == (s = null == (o = i.data) ? void 0 : o.payload) ? void 0 : s.y);
                    if (!u && !d) return null;
                    u && (i.data.payload.x = t),
                        d && (i.data.payload.y = r),
                        (i.data.payload.elementAttributes = e.elementAttributes),
                        (c.event = JSON.stringify(i)),
                        await l.put("events", c);
                } else ep("Sprig_Scroll", e);
            }, "Error updating scroll event");
        ep("Sprig_Scroll", e);
    },
    em = () => {
        el.stopRecording && (el.stopRecording(), (el.stopRecording = void 0)),
            (el.isRecording = !1),
            ["cleanupInterval", "inactivityInterval", "pendingCheckInterval"].forEach((e) => {
                el[e] && (clearInterval(el[e]), (el[e] = void 0));
            }),
            q &&
                (window.removeEventListener("click", ea, W),
                window.removeEventListener("pointerdown", es, W),
                window.removeEventListener("mousedown", eo, W),
                window.removeEventListener("keydown", et, W),
                window.removeEventListener("scroll", ei, W),
                (q = !1)),
            B.forEach((e) => {
                var t;
                null == (t = e.source) || t.postMessage({ type: G }, { targetOrigin: e.origin });
            });
    },
    eg = ["did not allow mutations", "called in an invalid security context"],
    eE = (e, t, { reportError: n = !0, extraInfo: r = {} }) => {
        if (!ef() && t instanceof Error) {
            if ((ed(), "VersionError" === t.name)) return l.b.error("VersionErr", { message: e }), void ev.deleteDB();
            ((e) => {
                if (!e) return !0;
                for (let t of eg) if (e.toLowerCase().includes(t)) return !1;
                return !0;
            })(null == t ? void 0 : t.message) && (n && window.UserLeap.reportError(e, t, r), ev.clearAll());
        }
    },
    eb = (e, t, { reportError: n } = { reportError: !0 }) => {
        em(),
            l.b.error("ReplayErr", {
                code: t.code,
                name: t.name,
            }),
            eE(e, t, { reportError: n });
    },
    ey = async (e, t) => {
        try {
            return await e();
        } catch (e) {
            eb(t, e);
        }
    },
    eO = () => {
        el.isRecording &&
            (ey(() => {
                var e, t;
                return null == (t = null == (e = window.rrwebRecord) ? void 0 : e.takeFullSnapshot)
                    ? void 0
                    : t.call(e, !0);
            }, "Error recording full snapshot"),
            B.forEach((e) => {
                var t;
                null == (t = e.source) || t.postMessage({ type: U }, { targetOrigin: e.origin });
            }));
    };
(async () => ec() && Promise.allSettled([T("replayStorage"), T("sprig.replay")]))();
let ev = new (class {
        openDB() {
            return (function (e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
                let o = indexedDB.open(e, 1),
                    s = v(o);
                return (
                    r &&
                        (o.onupgradeneeded = (e) => {
                            r(v(o.result), e.oldVersion, e.newVersion, v(o.transaction), e);
                        }),
                    n && (o.onblocked = (e) => n(e.oldVersion, e.newVersion, e)),
                    s
                        .then((e) => {
                            a && (e.onclose = () => a()),
                                i && (e.onversionchange = (e) => i(e.oldVersion, e.newVersion, e));
                        })
                        .catch(() => {}),
                    s
                );
            })("sprigReplay", 0, {
                upgrade: (e, t, n) => {
                    if ((0 === n && l.a.setItem("sprig.pendingCount", "0"), !e.objectStoreNames.contains("events"))) {
                        let t = e.createObjectStore("events", { keyPath: "uuid" });
                        t.createIndex("sessionId", "sessionId"),
                            t.createIndex("timestamp", "timestamp"),
                            t.createIndex("[sessionId+timestamp]", ["sessionId", "timestamp"]);
                    }
                    if (!e.objectStoreNames.contains("chunkUploads")) {
                        let t = e.createObjectStore("chunkUploads", { keyPath: "uuid" });
                        t.createIndex("sessionId", "sessionId"),
                            t.createIndex("timestamp", "timestamp"),
                            t.createIndex("[sessionId+status]", ["sessionId", "status"]),
                            t.createIndex("[uploadId+status]", ["uploadId", "status"]),
                            t.createIndex("[sessionId+status+uploadId]", ["sessionId", "status", "uploadId"]);
                    }
                    if (!e.objectStoreNames.contains("pendingCaptures")) {
                        let t = e.createObjectStore("pendingCaptures", { keyPath: "uuid" });
                        t.createIndex("sessionId", "sessionId"),
                            t.createIndex("timestamp", "timestamp"),
                            t.createIndex("[sessionId+targetTimestamp]", ["sessionId", "targetTimestamp"]);
                    }
                },
            });
        }
        async deleteDB() {
            try {
                await T("sprigReplay");
            } catch {}
        }
        async bulkAdd(e, t) {
            let n = (await this.openDB()).transaction(e, "readwrite");
            return Promise.all([...t.map((e) => n.store.add(e)), n.done]);
        }
        async clearAll() {
            let e = (await this.openDB()).transaction(["events", "chunkUploads", "pendingCaptures"], "readwrite");
            return Promise.all([
                e.objectStore("events").clear(),
                e.objectStore("chunkUploads").clear(),
                e.objectStore("pendingCaptures").clear(),
            ]);
        }
        async deleteBySessionId(e, t) {
            let n = IDBKeyRange.only(t),
                r = (await this.openDB()).transaction(e, "readwrite");
            for await (let e of r.store.index("sessionId").iterate(n)) await e.delete();
            await r.done;
        }
        async updatePartial(e, t, n) {
            let r = (await this.openDB()).transaction(e, "readwrite"),
                i = await r.store.get(t);
            i &&
                (await r.store.put({
                    ...i,
                    ...n,
                })),
                await r.done;
        }
        async deleteRowsBefore(e, t, n = () => !0) {
            let r = IDBKeyRange.upperBound(t, !0),
                i = (await this.openDB()).transaction(e, "readwrite");
            for await (let e of i.store.index("timestamp").iterate(r)) n(e.value) && (await e.delete());
            await i.done;
        }
        async getEventsBetween(e, t = Date.now()) {
            if (e >= t) return Promise.resolve([]);
            let n = IDBKeyRange.bound([eu, e], [eu, t], !1, !0);
            return (await this.openDB()).getAllFromIndex("events", "[sessionId+timestamp]", n);
        }
        async updateEventsExpiredAt(e, t, n = 30) {
            let r = new Date(),
                i = r.setMinutes(r.getMinutes() + (n ?? 30)),
                a = (await this.openDB()).transaction("events", "readwrite"),
                o = a.store.index("[sessionId+timestamp]"),
                s = IDBKeyRange.bound([eu, e], [eu, t], !1, !0);
            for await (let e of o.iterate(s))
                await e.update({
                    ...e.value,
                    expiredAt: i,
                });
            await a.done;
        }
        async deleteChunkUploads(e, t) {
            let n = IDBKeyRange.only([t, e]),
                r = (await this.openDB()).transaction("chunkUploads", "readwrite"),
                i = await r.store.index("[uploadId+status]").openCursor(n);
            for (; i; ) i.delete(), (i = await i.continue());
            await r.done;
        }
        async getChunkUploadsByStatus({ sessionId: e, status: t, uploadId: n }) {
            let r = (await this.openDB()).transaction("chunkUploads", "readonly"),
                i = n ? r.store.index("[uploadId+status]") : r.store.index("[sessionId+status]"),
                a = n ? IDBKeyRange.only([n, t]) : IDBKeyRange.only([e, t]);
            return i.getAll(a);
        }
        async getPendingCaptures(e = {}) {
            return (await (await this.openDB()).getAllFromIndex("pendingCaptures", "sessionId", eu))
                .filter((t) => !e.beforePresent || t.targetTimestamp < Date.now())
                .filter((t) => !e.isBeforeType || "before" === t.captureParams.replayParams.replayDurationType)
                .filter((t) => !e.isHeatmap || (t.captureParams.isHeatmap ?? !1));
        }
        async markPendingCaptureToCanUpload(e) {
            let t = (await this.openDB()).transaction("pendingCaptures", "readwrite");
            for await (let n of t.store.index("sessionId").iterate(eu)) {
                let t = n.value;
                t.captureParams.responseGroupId === e &&
                    (await n.update({
                        ...t,
                        canUpload: !0,
                    }));
            }
            await t.done;
        }
        async markPendingHeatmapsReady(e) {
            if (0 === parseInt(l.a.getItem("sprig.pendingCount") ?? "0")) return null;
            let t = Date.now(),
                n = (await this.openDB()).transaction("pendingCaptures", "readwrite");
            for await (let r of n.store.index("sessionId").iterate(eu)) {
                let n = r.value;
                n.captureParams.isHeatmap &&
                    (!e || e.includes(n.uuid)) &&
                    (await r.update({
                        ...n,
                        targetTimestamp: t,
                        captureParams: {
                            ...n.captureParams,
                            triggerTimestamp: t,
                            replayParams: {
                                ...n.captureParams.replayParams,
                                replayDurationSeconds: Math.floor((t - n.timestamp) / 1000),
                            },
                        },
                    }));
            }
            await n.done;
        }
    })(),
    eI = [],
    eT,
    eS,
    eA,
    eC,
    eN,
    eR,
    eP = [],
    ew = !1,
    eD = 0,
    ex = !1,
    eL = !1,
    eM = [],
    ej = !1,
    ek = () => ex && !ew && Date.now() <= eA,
    eU = ({ apiUrl: e, config: t, triggerSnapshot: n, forceInit: r = !1 }) => {
        (ex && !r) ||
            (l.a.isStorageAvailable
                ? ((eP = []),
                  eM.splice(0),
                  eI.splice(0),
                  (eD = 0),
                  (eN = n),
                  (eS = e),
                  (eT = {
                      responseGroupUuid: t.responseGroupUuid,
                      surveyId: t.surveyId,
                      userAgent: t.userAgent,
                      sdkVersion: t.sdkVersion,
                  }),
                  (eC = t.maxDurationSeconds),
                  eH(),
                  ex || (eR = window.setInterval(eF, 500)),
                  (ex = !0))
                : (ew = !0));
    },
    eG = [_.Drag, _.Input, _.MediaInteraction, _.MouseInteraction, _.MouseMove, _.Scroll, _.Selection, _.TouchMove],
    eB = (e) => e.type === f.Custom || (e.type === f.IncrementalSnapshot && eG.includes(e.data.source)),
    eZ = (e) => e.some(eB),
    eF = async () => {
        if (!ek()) return void window.clearInterval(eR);
        if ((eV(), !eZ(eI))) return;
        let e = eI[0].timestamp;
        Date.now() - e > 35000 && (null == eN || eN());
    },
    eV = async () => {
        if (eP.length || ej) return;
        ej = !0;
        let e = await ez();
        if (!e) return void (ew = !0);
        eM.splice(0, e.length).forEach((t) => t(e.shift())), e.forEach((e) => eP.push(e)), (ej = !1);
    },
    eH = () => {
        let e = l.a.getItem("sprig.alwayson.info");
        if (e) {
            l.b.info("Read stored session state", e);
            let t = JSON.parse(e);
            (ew = t.disabled),
                (eT = t.metadata),
                (eP = t.uploadUrls),
                (eD = t.currentIndex),
                (eA = t.expirationTimestamp),
                t.pendingEventTimestamp &&
                    (l.b.info(`Uploading with pending timestamp: ${t.pendingEventTimestamp}`),
                    eY(t.pendingEventTimestamp));
        } else eA = 1000 * eC + Date.now();
    },
    eY = async (e) => {
        let t = Date.now(),
            n = (await ev.getEventsBetween(e, t)).map((e) => JSON.parse(e.event));
        if (!eZ(n)) return;
        eX(n);
        let r = await eq();
        r && (await eK(r, n));
    },
    eW = async (e, t) => {
        try {
            let n = await e();
            if (!n.ok) throw Error(`Error ${t}`);
            return n;
        } catch {
            ew = !0;
        }
    },
    eK = async (e, t) => {
        if (!ek() || !e) return;
        let n = await (async (e) => {
            let t = new TextEncoder(),
                n = new CompressionStream("gzip"),
                r = n.writable.getWriter(),
                i = t.encode(JSON.stringify(e));
            return r.write(i), r.close(), new Uint8Array(await new Response(n.readable).arrayBuffer());
        })(t);
        l.b.info("Uploading always-on events with presigned url"),
            await eW(
                () =>
                    (0, l.s)(e, {
                        body: n,
                        method: "PUT",
                    }),
                "uploading always-on with presigned url",
            );
    },
    ez = async () => {
        if (!ek()) return;
        let { surveyId: e, responseGroupUuid: t } = eT,
            n = {
                responseGroupUuid: t,
                surveyId: e,
                index: eD + 1,
            };
        l.b.info("Fetching always-on upload urls", n);
        let r = await eW(
            () =>
                (0, l.s)(`${eS}/sdk/1/replayUrls`, {
                    method: "POST",
                    body: JSON.stringify(n),
                    headers: (0, l.g)(window.UserLeap),
                }),
            "fetching always-on signed urls",
        );
        if (!r) return;
        let i = r.json.signedUrls;
        return (
            l.b.info("Fetched more always-on upload urls", {
                body: n,
                urls: i,
            }),
            i
        );
    },
    eq = async () => {
        if (eP.length) return eP.shift();
        let e = new Promise((e) => {
            eM.push(e);
        });
        return eV(), e;
    },
    eX = (e) => {
        var t, n, r;
        let i = e.length ? e[e.length - 1].timestamp : Date.now(),
            a = eD,
            o =
                (null == (n = null == (t = window.UserLeap) ? void 0 : t.config) ? void 0 : n.customMetadata) ??
                (null == (r = window.__cfg) ? void 0 : r.customMetadata);
        eD++,
            e.push({
                timestamp: i,
                type: f.Custom,
                data: {
                    tag: "Sprig_Meta",
                    payload: {
                        ...eT,
                        index: a,
                        visitorId: window.UserLeap.visitorId ?? "",
                        timestamp: i,
                        customMetadata: o,
                    },
                },
            });
    },
    eQ = (e, t) => {
        ek() &&
            !eL &&
            (e || eI.length) &&
            (e &&
                eI.length &&
                (async () => {
                    let e = eI.splice(0);
                    if (!eZ(e)) return;
                    l.b.info("Capturing always-on event array to upload"), eX(e);
                    let t = await eq();
                    t && (await eK(t, e));
                })(),
            eI.push(t));
    };
window.addEventListener("beforeunload", async () => {
    (eL = !0),
        ek() &&
            (l.b.info("Always On handle page unload"),
            (() => {
                let e;
                eI.length && (e = eI[0].timestamp);
                let t = {
                    disabled: ew,
                    metadata: eT,
                    uploadUrls: eP,
                    currentIndex: eD,
                    pendingEventTimestamp: e,
                    expirationTimestamp: eA,
                };
                l.b.info("Storing session state on unload", t), l.a.setItem("sprig.alwayson.info", JSON.stringify(t));
            })());
});
let eJ = async (e, t) => {
        let n,
            r = performance.now();
        try {
            n = await e();
        } finally {
            let e = performance.now() - r,
                n = l.P[t];
            n || (n = (0, l.r)(t)), n.report(e / 1000);
        }
        return n;
    },
    e$ = (e, t) => {
        let n = performance.now();
        try {
            e();
        } finally {
            let e = performance.now() - n,
                r = l.P[t];
            r || (r = (0, l.r)(t)), r.report(e / 1000);
        }
    },
    e0 = 5000,
    e1 = 60000,
    e3 = 0,
    e2,
    e4 = !1,
    e8 = [],
    e5 = (e) => {
        var t, n, r, i;
        if (null != (t = e.event) && t.includes("Sprig_Scroll")) {
            let t =
                null == (i = null == (r = null == (n = JSON.parse(e.event)) ? void 0 : n.data) ? void 0 : r.payload)
                    ? void 0
                    : i.xPath;
            if (!t) return;
            el.scrollEventUuids[t] = e.uuid;
        }
        e8.push(e), e4 || e6();
    },
    e6 = () => {
        (e4 = !0),
            setTimeout(async () => {
                if (ef() || e_()) return;
                let e = e8;
                (e8 = []),
                    (e4 = !1),
                    e$(async () => {
                        await (async (e) => {
                            let t = e.map((e) => ({
                                ...e,
                                sessionId: e.sessionId ?? eu,
                            }));
                            if (0 !== t.length) return ey(() => ev.bulkAdd("events", t), "Error storing replay events");
                        })(e);
                    }, "sdk_replay_add_event_batch_seconds");
            }, 500);
    },
    e7 = (e, t, n) => {
        el.cleanupInterval = window.setInterval(() => {
            let r = Date.now();
            eJ(
                () =>
                    ey(async () => {
                        ef() ||
                            (await Promise.all([
                                ev.deleteRowsBefore(
                                    "events",
                                    r - 1000 * e,
                                    (t) => void 0 === t.expiredAt || t.expiredAt < r - 1000 * e,
                                ),
                                ev.deleteRowsBefore("chunkUploads", r - 1000 * t),
                                ev.deleteRowsBefore("pendingCaptures", r - 1000 * n, (e) => !e.canUpload),
                            ]));
                    }, "Error deleting table rows"),
                "sdk_replay_cleanup_seconds",
            ),
                l.b.debug("CleanupComplete");
        }, 30000);
    },
    e9 = () => {
        el.pendingCheckInterval = window.setInterval(async () => {
            ey(async () => {
                await tt();
            }, "Error initiating pending captures");
        }, 5000);
    },
    te = !1,
    tt = async (e = !1) => {
        if (!te)
            try {
                te = !0;
                let t = parseInt(e2 ?? "0");
                if (0 === t) return;
                let n = await ev.getPendingCaptures({
                        beforePresent: !0,
                        isBeforeType: e,
                    }),
                    r = await ev.openDB();
                await Promise.all(
                    n.map(async (e) => (await r.delete("pendingCaptures", e.uuid), tl(e.captureParams, e.canUpload))),
                ),
                    (e2 = (t - n.length).toString()),
                    l.a.setItem("sprig.pendingCount", e2);
            } finally {
                te = !1;
            }
    },
    tn = async (e, t, n, r, i) => {
        let a = Math.min(e + i, n),
            o = await eJ(() => ev.getEventsBetween(e, a), "sdk_replay_get_events_between_seconds");
        if (!(null != o && o.length))
            return (
                l.b.debug("NoEventsFound"),
                {
                    validStartFound: r,
                    events: [],
                }
            );
        if (!r) {
            l.b.debug("ValidStartSearch");
            let e = -1;
            return (
                null == o ||
                    o.forEach((n, r) => {
                        if (!n.isValidStart) return;
                        let i = n.timestamp <= t;
                        (e < 0 || i) && (e = r);
                    }),
                e < 0
                    ? (l.b.debug("ValidStartNotFound"),
                      {
                          validStartFound: r,
                          events: [],
                      })
                    : {
                          validStartFound: !0,
                          events: null == o ? void 0 : o.slice(e),
                      }
            );
        }
        return {
            validStartFound: r,
            events: o,
        };
    },
    tr = (e) =>
        Promise.all(
            e.map(async (e) => {
                let t = await (async (e) =>
                    Z.execute(async () => {
                        var t;
                        l.b.info("UploadChunkStart", {
                            chunkIndex: e.chunkIndex,
                            surveyId: e.surveyId,
                        });
                        let n = await (0, l.s)(e.uploadUrl, {
                            body: e.data,
                            method: "PUT",
                        });
                        l.b.http("UploadChunkEnd", {
                            url: e.uploadUrl,
                            method: "PUT",
                            status_code: n.status,
                            reason: n.statusText ?? "OK",
                            chunkIndex: e.chunkIndex,
                            surveyId: e.surveyId,
                        });
                        let r = null == (t = n.headers) ? void 0 : t.get("ETag");
                        if (!r)
                            throw Error(
                                `Upload response did not include etag for upload ${e.uploadId}, part ${e.chunkIndex}`,
                            );
                        return r;
                    }))(e);
                return (
                    await ev.updatePartial("chunkUploads", e.uuid, {
                        data: null,
                        etag: t,
                        status: "UploadComplete",
                    }),
                    e.uploadId
                );
            }),
        ),
    ti = async (e) => {
        let t = await ev.getChunkUploadsByStatus({
            status: "UploadComplete",
            uploadId: e,
        });
        if (!(null != t && t.length)) return void l.b.info("NoChunksForUpload", { uploadId: e });
        let n = t.reduce((e, t) => (e.find((e) => e.chunkIndex === t.chunkIndex) || e.push(t), e), []);
        n.sort((e, t) => e.chunkIndex - t.chunkIndex);
        let r = n
                .map((e) => ({
                    ETag: e.etag,
                    PartNumber: e.chunkIndex,
                }))
                .filter((e) => null !== e.ETag),
            i = n[0];
        await F({
            apiUrl: i.apiUrl,
            surveyId: i.surveyId,
            uploadId: e,
            responseGroupUuid: i.responseGroupId,
            etags: r,
            headers: i.completeUploadHeaders,
            replayDuration: i.replayDuration,
        }),
            await ev.deleteChunkUploads("UploadComplete", e);
    },
    ta = () => {
        ey(async () => {
            let e = await ev.getChunkUploadsByStatus({
                sessionId: eu,
                status: "ReadyForUpload",
            });
            if (!(null != e && e.length)) return;
            let t = await tr(e);
            null != t &&
                t.length &&
                (await Promise.all(
                    t.map((e) => {
                        if (e) return ti(e);
                    }),
                ));
        }, "Error uploading unfinished chunks");
    },
    to = async (e, t) => {
        let n = t ?? Date.now();
        return (async (e, t) => {
            let n = new TextEncoder(),
                r = null,
                i = new CompressionStream("gzip"),
                a = i.writable.getWriter(),
                o = !1,
                s = !1,
                [c, u] = [0, 0],
                d = [];
            for (let r = e - 35000; r < t; r += e1) {
                if ((({ validStartFound: s, events: d } = await tn(r, e, t, s, e1)), !(null != d && d.length))) {
                    l.b.debug("NoEventsFound");
                    continue;
                }
                0 === c && (c = d[0].timestamp), (u = d[d.length - 1].timestamp);
                let i = d.map((e) => e.event);
                i.push(`{"timestamp":${t}}`);
                let f = `${o ? "," : "["}${i}`,
                    _ = n.encode(f);
                e$(() => {
                    a.write(_);
                }, "sdk_replay_compression_seconds"),
                    (o = !0);
            }
            if (u - c < e0) return l.b.debug("ReplayTooShort"), null;
            let f = n.encode("]");
            return a.write(f), a.close(), (r = new Uint8Array(await new Response(i.readable).arrayBuffer()));
        })(n - e, n);
    },
    ts = async (e) => {
        let {
                surveyId: t,
                responseGroupId: n,
                visitorId: r,
                apiUrl: i,
                completeUploadHeaders: a,
                replayParams: o,
                triggerTimestamp: s,
            } = e,
            c = await to(1000 * o.replayDurationSeconds, s);
        if (!(null != c && c.length)) return void l.b.info("FileDataEmpty", { surveyId: t });
        let u = ((e, t, n) => {
                let r = e.length,
                    i = Math.max(1024 * t * 1024, Math.ceil(r / n)),
                    a = [],
                    o = 0;
                for (; o < r; ) a.push(e.slice(o, o + i)), (o += i);
                return a;
            })(c, o.minimumChunkSizeMb, o.signedUrls.length),
            d = await Promise.all(
                u.map(async (e, c) => {
                    let d = (0, l.v)(),
                        f = {
                            apiUrl: i,
                            chunkIndex: c + 1,
                            completeUploadHeaders: a,
                            etag: null,
                            responseGroupId: n,
                            status: "ReadyForUpload",
                            surveyId: t,
                            timestamp: s,
                            totalChunks: u.length,
                            data: e,
                            uploadId: o.uploadId,
                            uploadUrl: o.signedUrls[c].url,
                            uuid: d,
                            visitorId: r,
                        };
                    return (
                        await (await ev.openDB()).add("chunkUploads", {
                            ...f,
                            sessionId: f.sessionId ?? eu,
                        }),
                        f
                    );
                }),
            );
        await (async (e, t) => {
            await tr(t), await Promise.all(e.map((e) => ti(e)));
        })([o.uploadId], d);
    },
    tl = async (e, t) => {
        if (ef()) return l.b.debug("ReplayDisabled-ScheduleOrCapture");
        let { isHeatmap: n, isStandalone: r, replayParams: i, triggerTimestamp: a, responseGroupId: o } = e,
            s = async () => {
                setTimeout(() => l.e.removeListener(l.S.QuestionAnswered, s), 0),
                    ey(async () => {
                        "before" === i.replayDurationType ? await ts(e) : await ev.markPendingCaptureToCanUpload(o);
                    }, "Error in schedule/capture callback");
            };
        ey(async () => {
            if ("after" === i.replayDurationType || "beforeAndAfter" === i.replayDurationType)
                return r || n || l.e.on(l.S.QuestionAnswered, s), void (await td(e));
            if (r || n || t) await ts(e), n && tc();
            else {
                let e = a - 1000 * (35 + i.replayDurationSeconds),
                    t = a;
                await ev.updateEventsExpiredAt(e, t, i.expirationTimeLimitMinutes), l.e.on(l.S.QuestionAnswered, s);
            }
        }, "Error in scheduling/capturing replay");
    },
    tc = async () => {
        parseInt(e2 ?? "0") || l.a.removeItem("sprig.isCapturingHeatmap"),
            l.a.getItem("sprig.teardownAfterCapture") && (em(), tu(), l.a.removeItem("sprig.teardownAfterCapture"));
    },
    tu = async () =>
        ef()
            ? l.b.debug("ReplayDisabled-ClearData")
            : Promise.all([ev.deleteBySessionId("events", eu), ev.deleteBySessionId("pendingCaptures", eu)]).catch(
                  (e) => {
                      eb("Error clearing user replay data", e);
                  },
              ),
    td = async (e) => {
        if (ef()) return;
        let { isHeatmap: t, surveyId: n } = e,
            r = await ev.getPendingCaptures(),
            i = null == r ? void 0 : r.filter((e) => e.captureParams.surveyId === n);
        if (null != i && i.length) return void l.b.info("PendingCaptureExists", { surveyId: n });
        t &&
            (eO(),
            l.a.setItem("sprig.isCapturingHeatmap", "true"),
            (e3 = Date.now()),
            el.inactivityInterval ||
                (el.inactivityInterval = window.setInterval(() => {
                    var e;
                    (e = e3),
                        Date.now() - e >= 30000 &&
                            ey(() => ev.markPendingHeatmapsReady(), "Error in heatmap inactivity");
                }, 1000)));
        let a = {
            ...e,
            replayParams: { ...e.replayParams },
        };
        "beforeAndAfter" === e.replayParams.replayDurationType && (a.replayParams.replayDurationSeconds *= 2),
            (a.replayParams.replayDurationType = "before");
        let o = e.triggerTimestamp + 1000 * e.replayParams.replayDurationSeconds;
        (a.triggerTimestamp = o),
            (e2 = (parseInt(e2 ?? "0") + 1).toString()),
            l.a.setItem("sprig.pendingCount", e2),
            await (await ev.openDB()).add("pendingCaptures", {
                canUpload: !1,
                captureParams: a,
                sessionId: eu,
                targetTimestamp: o,
                timestamp: Date.now(),
                uuid: (0, l.v)(),
            });
    },
    tf = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                RecordEvent: (e) => {
                    ep("Sprig_TrackEvent", e);
                },
                RecordPageView: (e) => {
                    e.description && (e.description = Y(e.description)), ep("Sprig_PageView", e);
                },
                RecordSurveyShown: (e) => {
                    ep("Sprig_ShowSurvey", e);
                },
                _completeSessionReplay: async ({ surveyId: e, responseGroupUuid: t, eventDigest: n, headers: r }) => {
                    if (!e || !t) return !1;
                    let i = window.UserLeap._API_URL,
                        a = await F(
                            {
                                surveyId: e,
                                responseGroupUuid: t,
                                eventDigest: n,
                                apiUrl: i,
                                headers: r,
                            },
                            !0,
                        );
                    return !(null != a && a.error);
                },
                checkPendingHeatmapsUrl: () =>
                    ef()
                        ? l.b.debug("ReplayDisabled-PendingHeatmaps")
                        : ey(async () => {
                              let e = (await ev.getPendingCaptures({ isHeatmap: !0 }))
                                  .map((e) => ({
                                      eventId: e.captureParams.eventId,
                                      uuid: e.uuid,
                                  }))
                                  .filter(({ eventId: e }) => !(0, l.c)(e))
                                  .map(({ uuid: e }) => e);
                              return (
                                  l.b.info("PendingHeatmapsToComplete", { count: e.length }),
                                  e.length &&
                                      (await ev.markPendingHeatmapsReady(e), l.b.info("MarkedPendingHeatmapsReady")),
                                  e.length
                              );
                          }, "Error marking pending heatmaps ready"),
                clearUserReplayData: tu,
                disableRecording: eb,
                initializeReplay: async ({
                    maxReplayDurationSeconds: e,
                    maxInflightRequests: t = 2,
                    replaySettings: n,
                    teardownAfter: r = !1,
                    apiUrl: i,
                    alwaysOnConfig: a,
                }) => {
                    if (
                        (a &&
                            eU({
                                apiUrl: i,
                                config: a,
                                triggerSnapshot: () => {
                                    eO();
                                },
                            }),
                        (e2 = l.a.getItem("sprig.pendingCount")),
                        el.isRecording)
                    )
                        return;
                    if ((r && l.a.setItem("sprig.teardownAfterCapture", "true"), ef()))
                        return l.b.debug("ReplayDisabled");
                    if (
                        await (async () => {
                            var e;
                            if (!ec()) return !0;
                            if (null != (e = window.navigator.storage) && e.estimate)
                                try {
                                    let { quota: e = 0, usage: t = 0 } = await window.navigator.storage.estimate(),
                                        n = (e - t) / 1073741824;
                                    return l.b.info("Storage", { availableGb: n }), n < 0.5;
                                } catch {
                                    return !0;
                                }
                            return !1;
                        })()
                    )
                        return l.b.debug("IDBNotSupported"), ed();
                    try {
                        let e = await ev.openDB();
                        l.b.info("DBVersion", { version: e.version });
                    } catch (e) {
                        return (
                            l.b.error("ReplayOpenErr", { name: e.name }),
                            "VersionError" === e.name && ev.deleteDB(),
                            ed()
                        );
                    }
                    ey(async () => {
                        await tt(!0);
                    }, "Error uploading ready pending captures");
                    let o = Math.max(e ?? 0, 30 * !!ek());
                    if (!o) return l.b.debug("MissingDuration");
                    l.b.debug("ReplayInit"),
                        await ey(async () => {
                            var e, r, i;
                            null != n && n.minDuration && (e0 = n.minDuration),
                                null != n && n.batchDuration && (e1 = n.batchDuration),
                                (e = t),
                                Z.setLimit(e),
                                ta(),
                                e7(o + 35, 1800, o + 35),
                                e9();
                            let a =
                                window.UserLeap.replayLibraryURL ??
                                "https://cdn.sprig.com/dependencies/record-2.0.0-alpha.17.min.js";
                            if (!window.rrwebRecord) {
                                let { record: e } = await import(a);
                                window.rrwebRecord = e;
                            }
                            let s = window.rrwebRecord;
                            if (!s) return l.b.error("RecordScriptFailed");
                            let c = !0,
                                u = 0,
                                d = {
                                    checkoutEveryNms: 30000,
                                    sampling: {
                                        input: "last",
                                        scroll: 250,
                                        media: 800,
                                    },
                                    ...n,
                                };
                            (el.stopRecording = s({
                                emit: (e, t) => {
                                    if ((e.type === f.Custom && (e3 = Date.now()), ef() || e_())) return;
                                    if (t && e.type === f.Meta) u = performance.now();
                                    else if (t && u && e.type === f.FullSnapshot) {
                                        let e = performance.now() - u;
                                        (0, l.d)("sdk_replay_snapshot_seconds", e / 1000);
                                    }
                                    let n = c || (!!t && e.type === f.Meta);
                                    (c = !1),
                                        eQ(n, e),
                                        e5({
                                            uuid: (0, l.v)(),
                                            event: JSON.stringify(e),
                                            isValidStart: n,
                                            timestamp: Date.now(),
                                        });
                                },
                                ...d,
                            })),
                                (el.isRecording = !!el.stopRecording),
                                el.isRecording &&
                                    (((e, t) => {
                                        window.addEventListener("message", (n) => {
                                            var r;
                                            n.data.type === j &&
                                                (B.push({
                                                    source: n.source,
                                                    origin: n.origin,
                                                }),
                                                null == (r = n.source) ||
                                                    r.postMessage(
                                                        {
                                                            type: k,
                                                            settings: e,
                                                            replayLibraryUrl: t,
                                                        },
                                                        { targetOrigin: n.origin },
                                                    ));
                                        });
                                    })(d, a),
                                    l.e.on("survey.complete", (e) => {
                                        ep("Sprig_SubmitSurvey", {
                                            id: e,
                                            userAgent: window.navigator.userAgent,
                                        });
                                    }),
                                    (r = ep),
                                    (i = eh),
                                    q ||
                                        ((X = r),
                                        (Q = i),
                                        window.addEventListener("click", ea, W),
                                        window.addEventListener("pointerdown", es, W),
                                        window.addEventListener("mousedown", eo, W),
                                        window.addEventListener("keydown", et, W),
                                        window.addEventListener("scroll", ei, W),
                                        (q = !0),
                                        en(),
                                        er()));
                        }, "Error initializing replay");
                },
                isReplayPaused: e_,
                isReplayRecording: () => el.isRecording,
                recordFullSnapshot: eO,
                recordReplayPaused: () => {
                    ep("Sprig_ReplayPaused", { timestamp: Date.now() }), l.a.setItem("sprig.isReplayPaused", "true");
                },
                recordReplayResumed: () => {
                    l.a.removeItem("sprig.isReplayPaused"), ep("Sprig_ReplayResumed", { timestamp: Date.now() });
                },
                scheduleCapture: td,
                scheduleOrCaptureReplay: tl,
                tryReplayAction: ey,
                uploadReadyPendingCaptures: tt,
            },
            Symbol.toStringTag,
            { value: "Module" },
        ),
    );
(0, l.f)(tf);
