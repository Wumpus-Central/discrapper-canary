let r, i, a;
n.d(t, {
    D: () => c,
    E: () => d,
    P: () => ee,
    S: () => u,
    a: () => S,
    b: () => g,
    c: () => Y,
    d: () => en,
    e: () => O,
    f: () => R,
    g: () => B,
    h: () => I,
    i: () => $,
    j: () => er,
    k: () => z,
    l: () => A,
    m: () => N,
    n: () => U,
    o: () => G,
    p: () => H,
    q: () => v,
    r: () => et,
    s: () => F,
    v: () => m,
});
var o = Object.defineProperty,
    s = (e, t, n) =>
        t in e
            ? o(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    l = (e, t, n) => s(e, "symbol" != typeof t ? t + "" : t, n),
    c =
        (((i = c || {}).Closed = "close.click"),
        (i.Complete = "survey.completed"),
        (i.FeedbackClosed = "feedback.closed"),
        (i.PageChange = "page.change"),
        (i.API = "api"),
        (i.Override = "override"),
        i),
    u =
        (((a = u || {}).ReplayCapture = "replay.capture"),
        (a.ReplayPaused = "replay.paused"),
        (a.ReplayResumed = "replay.resumed"),
        (a.FeedbackButtonLoaded = "feedback.button.loaded"),
        (a.SDKReady = "sdk.ready"),
        (a.SurveyAppeared = "survey.appeared"),
        (a.SurveyCloseRequested = "survey.closeRequested"),
        (a.SurveyClosed = "survey.closed"),
        (a.SurveyDimensions = "survey.dimensions"),
        (a.SurveyFadingOut = "survey.fadingOut"),
        (a.SurveyHeight = "survey.height"),
        (a.SurveyPresented = "survey.presented"),
        (a.SurveyLifeCycle = "survey.lifeCycle"),
        (a.SurveyWidth = "survey.width"),
        (a.SurveyWillClose = "survey.willClose"),
        (a.SurveyWillPresent = "survey.will.present"),
        (a.CloseSurveyOnOverlayClick = "close.survey.overlayClick"),
        (a.VisitorIDUpdated = "visitor.id.updated"),
        (a.QuestionAnswered = "question.answered"),
        a);
let d = {
        FEEDBACK_BUTTON_LOADED: "feedback.button.loaded",
        SDK_READY: "sdk.ready",
        SURVEY_APPEARED: "survey.appeared",
        SURVEY_CLOSED: "survey.closed",
        SURVEY_DIMENSIONS: "survey.dimensions",
        SURVEY_FADING_OUT: "survey.fadingOut",
        SURVEY_HEIGHT: "survey.height",
        SURVEY_WIDTH: "survey.width",
        SURVEY_PRESENTED: "survey.presented",
        SURVEY_LIFE_CYCLE: "survey.lifeCycle",
        SURVEY_WILL_CLOSE: "survey.willClose",
        SURVEY_WILL_PRESENT: "survey.will.present",
        QUESTION_ANSWERED: "question.answered",
        REPLAY_CAPTURE: "replay.capture",
        CLOSE_SURVEY_ON_OVERLAY_CLICK: "close.survey.overlayClick",
        VISITOR_ID_UPDATED: "visitor.id.updated",
        DATA: {
            DISMISS_REASONS: {
                API: "api",
                CLOSED: "close.click",
                COMPLETE: "survey.completed",
                PAGE_CHANGE: "page.change",
                OVERRIDE: "override",
            },
            SURVEY_ID: "survey.id",
        },
    },
    f = new Uint8Array(16);
function _() {
    if (!r && !(r = "u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
        throw Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
        );
    return r(f);
}
let p = [];
for (let e = 0; e < 256; ++e) p.push((e + 256).toString(16).slice(1));
let h = { randomUUID: "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function m(e, t, n) {
    if (h.randomUUID && !e) return h.randomUUID();
    let r = (e = e || {}).random || (e.rng || _)();
    return (
        (r[6] = (15 & r[6]) | 64),
        (r[8] = (63 & r[8]) | 128),
        (function (e, t = 0) {
            return (
                p[e[t + 0]] +
                p[e[t + 1]] +
                p[e[t + 2]] +
                p[e[t + 3]] +
                "-" +
                p[e[t + 4]] +
                p[e[t + 5]] +
                "-" +
                p[e[t + 6]] +
                p[e[t + 7]] +
                "-" +
                p[e[t + 8]] +
                p[e[t + 9]] +
                "-" +
                p[e[t + 10]] +
                p[e[t + 11]] +
                p[e[t + 12]] +
                p[e[t + 13]] +
                p[e[t + 14]] +
                p[e[t + 15]]
            );
        })(r)
    );
}
let g = new (class {
    constructor() {
        l(this, "breadcrumbs", []);
    }
    getTimeStamp() {
        return new Date().toISOString();
    }
    addBreadcrumb(e) {
        this.breadcrumbs.push(e), this.breadcrumbs.length > 300 && this.breadcrumbs.shift();
    }
    debug(e, t = "debug") {
        this.addBreadcrumb({
            category: t,
            level: "info",
            message: e,
            timestamp: this.getTimeStamp(),
            type: "debug",
        });
    }
    error(e, t = {}) {
        this.addBreadcrumb({
            category: "error",
            data: t,
            level: "error",
            message: e,
            timestamp: this.getTimeStamp(),
            type: "error",
        });
    }
    http(e, t) {
        this.addBreadcrumb({
            category: "xhr",
            data: t,
            message: e,
            timestamp: this.getTimeStamp(),
            type: "http",
        });
    }
    info(e, t = {}) {
        this.addBreadcrumb({
            category: "info",
            data: t,
            level: "info",
            message: e,
            timestamp: this.getTimeStamp(),
            type: "info",
        });
    }
    navigation(e, t) {
        this.addBreadcrumb({
            category: "navigation",
            data: t,
            message: e,
            timestamp: this.getTimeStamp(),
            type: "navigation",
        });
    }
})();
var E = class extends Error {
        constructor(e, t, n) {
            super(
                `Possible EventEmitter memory leak detected. ${n} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`,
            ),
                (this.emitter = e),
                (this.type = t),
                (this.count = n),
                (this.name = "MaxListenersExceededWarning");
        }
    },
    b = class {
        static listenerCount(e, t) {
            return e.listenerCount(t);
        }
        constructor() {
            (this.events = new Map()),
                (this.maxListeners = b.defaultMaxListeners),
                (this.hasWarnedAboutPotentialMemoryLeak = !1);
        }
        _emitInternalEvent(e, t, n) {
            this.emit(e, t, n);
        }
        _getListeners(e) {
            return Array.prototype.concat.apply([], this.events.get(e)) || [];
        }
        _removeListener(e, t) {
            let n = e.indexOf(t);
            return n > -1 && e.splice(n, 1), [];
        }
        _wrapOnceListener(e, t) {
            let n = (...r) => (this.removeListener(e, n), t.apply(this, r));
            return Object.defineProperty(n, "name", { value: t.name }), n;
        }
        setMaxListeners(e) {
            return (this.maxListeners = e), this;
        }
        getMaxListeners() {
            return this.maxListeners;
        }
        eventNames() {
            return Array.from(this.events.keys());
        }
        emit(e, ...t) {
            let n = this._getListeners(e);
            return (
                n.forEach((e) => {
                    e.apply(this, t);
                }),
                n.length > 0
            );
        }
        addListener(e, t) {
            this._emitInternalEvent("newListener", e, t);
            let n = this._getListeners(e).concat(t);
            return (
                this.events.set(e, n),
                this.maxListeners > 0 &&
                    this.listenerCount(e) > this.maxListeners &&
                    !this.hasWarnedAboutPotentialMemoryLeak &&
                    ((this.hasWarnedAboutPotentialMemoryLeak = !0),
                    console.warn(new E(this, e, this.listenerCount(e)))),
                this
            );
        }
        on(e, t) {
            return this.addListener(e, t);
        }
        once(e, t) {
            return this.addListener(e, this._wrapOnceListener(e, t));
        }
        prependListener(e, t) {
            let n = this._getListeners(e);
            if (n.length > 0) {
                let r = [t].concat(n);
                this.events.set(e, r);
            } else this.events.set(e, n.concat(t));
            return this;
        }
        prependOnceListener(e, t) {
            return this.prependListener(e, this._wrapOnceListener(e, t));
        }
        removeListener(e, t) {
            let n = this._getListeners(e);
            return (
                n.length > 0 &&
                    (this._removeListener(n, t),
                    this.events.set(e, n),
                    this._emitInternalEvent("removeListener", e, t)),
                this
            );
        }
        off(e, t) {
            return this.removeListener(e, t);
        }
        removeAllListeners(e) {
            return e ? this.events.delete(e) : this.events.clear(), this;
        }
        listeners(e) {
            return Array.from(this._getListeners(e));
        }
        listenerCount(e) {
            return this._getListeners(e).length;
        }
        rawListeners(e) {
            return this.listeners(e);
        }
    },
    y = b;
y.defaultMaxListeners = 10;
let O = new y(),
    v = async (e) => {
        await new Promise((t) => {
            setTimeout(t, e);
        });
    },
    I = ({ "userleap-platform": e }) => {
        var t;
        return (null == (t = window.UserLeap) ? void 0 : t.forceDirectEmbed) || "web" !== e;
    };
class T {
    constructor(e) {
        l(this, "storage"), l(this, "tempStorage", {}), l(this, "isStorageAvailable");
        try {
            this.storage = window[e];
            let t = "__storage_test__";
            this.storage.setItem(t, t), this.storage.removeItem(t), (this.isStorageAvailable = !0);
        } catch {
            this.isStorageAvailable = !1;
        }
    }
    setItem(e, t) {
        this.isStorageAvailable && this.storage ? this.storage.setItem(e, t) : (this.tempStorage[e] = t);
    }
    setItemObject(e, t) {
        try {
            this.setItem(e, JSON.stringify(t));
        } catch (n) {
            n instanceof Error &&
                ((n.stack = e + ": " + t), window.UserLeap.reportError("Failed to save to local storage", n));
        }
    }
    getItem(e) {
        return this.isStorageAvailable && this.storage ? this.storage.getItem(e) : this.tempStorage[e];
    }
    getItemObject(e) {
        let t = this.getItem(e);
        if (t)
            try {
                return JSON.parse(t);
            } catch (n) {
                n instanceof Error &&
                    ((n.stack = e + ": " + t), window.UserLeap.reportError("Failed to parse local storage", n));
            }
        return {};
    }
    removeItem(e) {
        this.isStorageAvailable && this.storage ? this.storage.removeItem(e) : delete this.tempStorage[e];
    }
    clear() {
        this.isStorageAvailable && this.storage ? this.storage.clear() : (this.tempStorage = {});
    }
}
let S = new T("sessionStorage"),
    A = new T("localStorage");
class C {
    constructor(e) {
        l(this, "payload"),
            l(this, "promise"),
            l(this, "reject", () => {}),
            l(this, "resolve", () => {}),
            (this.payload = e),
            (this.promise = new Promise((e, t) => {
                (this.reject = t), (this.resolve = e);
            }));
    }
    resolveRequest(e) {
        this.resolve(e);
    }
}
let N = { replay: null },
    R = (e) => {
        N.replay = e;
    },
    P = () => {
        let e = [];
        return N.replay && e.push("replay"), e.join(",");
    },
    D = 10,
    w = !1,
    L = "",
    x = !1,
    M = !1,
    k = [],
    j = (e) =>
        e._config && e._config.installationMethod
            ? e._config.installationMethod
            : e._gtm
              ? "web-gtm"
              : e._segment
                ? "web-segment"
                : "web-snippet",
    U = (e) => {
        var t;
        null != (t = null == e ? void 0 : e.blockedURI) &&
            t.includes(window.UserLeap._API_URL) &&
            ((M = !0), console.warn(`[Sprig] ${e.blockedURI} is blocked by Content-Security-Policy`));
    },
    G = (e = "") => {
        (w = !0), (L = e);
    };
function B(e = {}) {
    let t = {
        "Content-Type": "application/json",
        "userleap-platform": "web",
        "x-ul-sdk-version": "2.34.0",
        "x-ul-installation-method": j(e),
        "sprig-modules": P(),
    };
    return (
        e.envId && (t["x-ul-environment-id"] = e.envId),
        e.token && (t.Authorization = "Bearer " + e.token),
        e.userId && (t["x-ul-user-id"] = e.userId),
        e.visitorId && (t["x-ul-visitor-id"] = e.visitorId),
        e.partnerAnonymousId && (t["x-ul-anonymous-id"] = e.partnerAnonymousId),
        e.mobileHeadersJSON && Object.assign(t, JSON.parse(e.mobileHeadersJSON)),
        e.locale && (t["accept-language"] = e.locale),
        window.previewMode && (t["x-ul-preview-mode"] = "1"),
        t
    );
}
let Z = async ({ shouldDropOnRateLimit: e, ...t }) => {
        if (e) return { status: 429 };
        {
            let e = new C(t);
            return k.push(e), e.promise;
        }
    },
    F = async (e, t) => {
        let { retries: n = 0, shouldDropOnRateLimit: r = !1, shouldRetryRequest: i = !1, ...a } = t,
            o = {
                url: e,
                options: a,
                retries: n,
                shouldDropOnRateLimit: r,
            };
        if (x && !i) return Z(o);
        let s = {
            ok: !1,
            reportError: !1,
        };
        if (w) return console.info(`UserLeap - ${L}`), s;
        try {
            let t = await fetch(e, a);
            if (429 === t.status) {
                if ((!x && !r) || i) {
                    x = !0;
                    let n = t.headers.has("ratelimit-reset") ? Number(t.headers.get("ratelimit-reset")) : D;
                    return (
                        await v(1000 * n),
                        F(e, {
                            ...a,
                            shouldDropOnRateLimit: r,
                            shouldRetryRequest: !0,
                        })
                    );
                }
                return Z(o);
            }
            if (
                ((x = !1),
                k.length &&
                    (k.map((e) => {
                        let t = e.payload;
                        F(t.url, {
                            ...t.options,
                            retries: t.retries,
                            shouldDropOnRateLimit: t.shouldDropOnRateLimit,
                        }).then((t) => {
                            e.resolveRequest(t);
                        });
                    }),
                    (k = [])),
                t.ok)
            ) {
                if (249 === t.status) return G(), s;
                let n = await t.text();
                try {
                    return n && "OK" !== n && (t.json = JSON.parse(n)), t;
                } catch {
                    return {
                        ok: !1,
                        reportError: !1,
                        error: Error(`failed parsing response json for ${e} - ${n}`),
                    };
                }
            }
            return t;
        } catch (r) {
            let t = n + 1;
            return t > 5 || M
                ? {
                      ok: !1,
                      reportError: !1,
                      error: r,
                  }
                : (await v(1000 * Math.pow(2, n)),
                  F(e, {
                      ...a,
                      retries: t,
                  }));
        }
    },
    V = Object.freeze({
        contains: (e, t) => t.includes(e),
        notContains: (e, t) => !t.includes(e),
        exactly: (e, t) => t === e,
        notExactly: (e, t) => t !== e,
        startsWith: (e, t) => t.startsWith(e),
        endsWith: (e, t) => t.endsWith(e),
        regex: (e, t) => new RegExp(e).test(t),
        legacy: (e, t) => RegExp(e, "i").test(t),
    });
function H(e, t) {
    let { matchType: n, pattern: r } = e,
        i = n ? V[n] : V.legacy,
        a = !1;
    try {
        a = i(r, t);
    } catch (n) {
        let t = `[Sprig] (ERR-445) Failed to check url match with pattern ${r}`;
        n instanceof Error && (console.warn(t, n), (n.stack = JSON.stringify(e)), window.UserLeap.reportError(t, n));
    }
    return a;
}
let Y = (e) => {
        let { pageUrlEvents: t } = window.UserLeap._config,
            n = null == t ? void 0 : t.find((t) => t.id === e);
        return !!n && H(n, window.location.href);
    },
    W = !0,
    K = !1,
    z = () => (K = !0),
    q = [
        "sdk_event_queue_latency_seconds",
        "sdk_replay_add_event_batch_seconds",
        "sdk_replay_cleanup_seconds",
        "sdk_replay_compression_seconds",
        "sdk_replay_get_events_between_seconds",
        "sdk_replay_snapshot_seconds",
        "sdk_mutations_nodes_added",
        "sdk_mutations_nodes_removed",
        "sdk_mutations_attributes_changed",
        "sdk_mutations_character_data",
        "sdk_dom_nodes_count",
        "sdk_page_html_characters",
    ],
    X,
    Q = {};
class J {
    constructor(e) {
        l(this, "_values", []), l(this, "_isWebMetric"), (this.name = e), (this._isWebMetric = q.includes(this.name));
    }
    report(e) {
        if (
            (W &&
                this._values.push({
                    time: Date.now(),
                    value: e,
                }),
            K || !this._isWebMetric)
        )
            return;
        let t = this.findExceededThreshold(e);
        t && X && X(e, t);
    }
    collect() {
        let e = this._values;
        return (this._values = []), e;
    }
    findExceededThreshold(e) {
        let t = Q[this.name];
        if (t) return t.find((t) => this.valueExceedsThreshold(e, t));
    }
    valueExceedsThreshold(e, t) {
        return "max" === t.type ? e > t.value : "min" === t.type && e < t.value;
    }
}
let $ = (e, t) => {
        (Q = {}),
            (K = !1),
            null == e ||
                e.forEach((e) => {
                    var t;
                    e.metric in Q || (Q[e.metric] = []), null == (t = Q[e.metric]) || t.push(e);
                }),
            (X = t);
    },
    ee = {},
    et = (e) => {
        let t = new J(e);
        return (ee[e] = t), t;
    },
    en = (e, t) => {
        let n = ee[e];
        return n || (n = et(e)), n.report(t);
    },
    er = ({ reportingIntervalSeconds: e, postMetrics: t }) => {
        e
            ? setInterval(() => {
                  (async (e) => {
                      let t = Object.values(ee).map((e) => ({
                          name: e.name,
                          values: e.collect(),
                      }));
                      if (t.some((e) => e.values.length))
                          try {
                              await e(JSON.stringify(t));
                          } catch (e) {
                              e instanceof Error &&
                                  g.error("MetricsErr", {
                                      error: {
                                          message: e.message,
                                          name: e.name,
                                      },
                                  });
                          }
                  })(t);
              }, 1000 * e)
            : (W = !1);
    };
