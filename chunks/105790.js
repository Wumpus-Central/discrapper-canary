(n.d(t, { Ay: () => X, zN: () => x, Ww: () => k, U: () => G }), n(321073));
var i,
    r = n(73153),
    a = n(439372),
    s = n(730602),
    l = n(964167),
    o = n(41234),
    d = n(587895),
    c = n(982844),
    u = n(976860),
    _ = n(91242),
    E = n(218583),
    A = n(855986);
let f = [],
    h = [];
class I extends A.Ay.Store {
    getRecords() {
        return f;
    }
    getUnlaunched() {
        return h;
    }
    getRecord(e) {
        let t = f.find((t) => t.launchId === e);
        return null != t ? t : (h.find((t) => t.launchId === e) ?? null);
    }
    getRecordsForFrame(e) {
        return f.filter((t) => t.frameId === e);
    }
}
new I(r.h, {
    FRAME_LAUNCH_TIMING_CLOSED: function (e) {
        let { record: t } = e;
        null != t.launchStartedMs ? (f = [...f, t].slice(-20)) : (h = [...h, t].slice(-20));
    },
    LOGOUT: function () {
        if (0 === f.length && 0 === h.length) return !1;
        ((f = []), (h = []));
    },
});
var p = n(115560),
    m = n(744230),
    g = n(113267),
    T = n(182025);
function S(e) {
    try {
        let t = new URL(e, location.href);
        return t.origin + t.pathname;
    } catch {
        return null;
    }
}
function N(e, t) {
    return e <= 0 || t < e ? 0 : C(t - e);
}
function C(e) {
    return Math.round(10 * e) / 10;
}
(n(323874), n(14289), n(35956));
var O = n(700224);
let R = new Set([T.xo.CACHED, T.xo.SKIPPED, T.xo.PREFETCHED, T.xo.IN_FLIGHT]),
    L = {
        [T.Vj.SETTLED]: T.nW.READY,
        [T.Vj.CAPPED]: T.nW.READY,
        [T.Vj.FAILED]: T.nW.FAILED,
        [T.Vj.TIMEOUT]: T.nW.TIMEOUT,
        [T.Vj.SUPERSEDED]: T.nW.SUPERSEDED,
        [T.Vj.STOPPED]: T.nW.STOPPED,
        [T.Vj.REUSED]: T.nW.REUSED,
        [T.Vj.ABANDONED]: T.nW.ABANDONED,
    };
var y = (((i = {}).STARTED = "started"), (i.LAUNCHED = "launched"), (i.CLOSED = "closed"), i);
class D {
    launchId = (0, p.A)();
    frameId;
    startTime = performance.now();
    startedAt = Date.now();
    options;
    steps = [];
    iframeIds = [];
    launchRequestId = null;
    launchStartedAt = null;
    readyAt = null;
    loadAt = null;
    sdkVersion = null;
    timer;
    currentPhase = "started";
    constructor(e) {
        ((this.options = e),
            (this.frameId = e.frameId),
            (this.timer = setTimeout(() => this.finish({ type: T.Vj.ABANDONED }), 6e4)));
    }
    get phase() {
        return this.currentPhase;
    }
    get trigger() {
        return this.options.trigger;
    }
    isLaunch(e) {
        return null != e && e === this.launchRequestId;
    }
    hasStep(e) {
        return this.steps.some((t) => t.step === e);
    }
    span(e, t) {
        if ("closed" === this.currentPhase) return t(O.U);
        let n = this.startSpan(e);
        return this.runSpan(n, t);
    }
    event(e) {
        if ("closed" !== this.currentPhase)
            switch (e.step) {
                case T.aY.IFRAME_CREATED:
                    this.recordIframeCreated(e.iframeId, e.url);
                    return;
                case T.aY.IFRAME_LOAD:
                    this.recordIframeLoad();
                    return;
                case T.aY.HANDSHAKE:
                    this.recordHandshake(e.sdkVersion);
                    return;
                case T.aY.READY:
                    this.recordReady();
                    return;
            }
    }
    markLaunchStarted(e) {
        if ("started" !== this.currentPhase) return;
        ((this.currentPhase = "launched"), (this.launchRequestId = e ?? null));
        let t = this.addStep(T.aY.LAUNCH_STARTED, T.xo.OK);
        ((this.launchStartedAt = t.start), this.setTimer(3e4, T.Vj.TIMEOUT));
    }
    markDispatched() {
        "closed" !== this.currentPhase && this.addStep(T.aY.DISPATCHED, T.xo.OK);
    }
    finish(e) {
        if ("closed" === this.currentPhase || (e.type === T.Vj.REUSED && "launched" === this.currentPhase)) return;
        ((this.currentPhase = "closed"), clearTimeout(this.timer));
        let t = performance.now();
        this.options.resourceMatcher.flush();
        let n = this.buildRecord(e, t);
        (this.options.onClose(this, n), this.releaseClaims());
    }
    drop() {
        "closed" !== this.currentPhase &&
            ((this.currentPhase = "closed"), clearTimeout(this.timer), this.releaseClaims());
    }
    startSpan(e) {
        let t = this.addStep(e, null);
        for (let { kind: n, key: i } of this.options.resources[e] ?? []) this.claim(t, n, i);
        return t;
    }
    async runSpan(e, t) {
        let n;
        try {
            n = await t({
                setStatus: (t) => {
                    e.status = t;
                },
            });
        } catch (t) {
            throw (this.endStep(e, T.xo.FAILED), t);
        }
        return (this.endStep(e, T.xo.OK), n);
    }
    recordIframeCreated(e, t) {
        this.iframeIds.push(e);
        let n = this.addStep(T.aY.IFRAME_CREATED, T.xo.OK),
            i = (function (e) {
                try {
                    return new URL(e, location.href).href;
                } catch {
                    return null;
                }
            })(t);
        null != i && this.claim(n, T.tP.IFRAME, i, this.startTime);
    }
    recordIframeLoad() {
        if (null != this.loadAt) return;
        let e = this.addStep(T.aY.IFRAME_LOAD, T.xo.OK);
        ((this.loadAt = e.start), null != this.readyAt && this.finish({ type: T.Vj.SETTLED }));
    }
    recordHandshake(e) {
        this.hasStep(T.aY.HANDSHAKE) || ((this.sdkVersion = e), this.addStep(T.aY.HANDSHAKE, T.xo.OK));
    }
    recordReady() {
        if (null != this.readyAt) return;
        let e = this.addStep(T.aY.READY, T.xo.OK);
        ((this.readyAt = e.start),
            null != this.loadAt ? this.finish({ type: T.Vj.SETTLED }) : this.setTimer(3e4, T.Vj.CAPPED));
    }
    releaseClaims() {
        for (let e of this.steps) this.releaseStepClaims(e);
    }
    releaseStepClaims(e) {
        for (let t of e.claims) this.options.resourceMatcher.removeClaim(t);
        e.claims = [];
    }
    buildRecord(e, t) {
        let n,
            { applicationId: i, surface: r, trigger: a, detailCollected: s } = this.options;
        n = null != this.readyAt ? T.nW.READY : L[e.type];
        let l = null;
        e.type === T.Vj.FAILED &&
            (l = (function (e) {
                let t;
                if (e instanceof m.A) {
                    let n = m.A.Reasons[e.reason] ?? e.reason;
                    t = `EmbeddedActivityClientError: ${n}`;
                } else if (e instanceof g.A) {
                    let n = g.A.ReasonCodes[e.reason] ?? e.reason;
                    t = `InteractionCallbackError: ${n}`;
                } else
                    e instanceof Error
                        ? (t = `${e.name}: ${e.message}`)
                        : "object" == typeof e && null != e && "status" in e
                          ? ((t = `HTTP ${String(e.status)}`),
                            "code" in e && null != e.code && (t += ` code ${String(e.code)}`))
                          : (t = "unknown error");
                return t.slice(0, 200);
            })(e.error));
        let o = null;
        return (
            null != this.loadAt && (o = T.d1.HOST),
            {
                launchId: this.launchId,
                frameId: this.frameId,
                applicationId: i,
                surface: r.type,
                trigger: a,
                startedAt: this.startedAt,
                launchStartedMs: this.relative(this.launchStartedAt),
                readyMs: this.relative(this.readyAt),
                totalMs: this.relative(t),
                pageLoadMs: this.relative(this.loadAt),
                pageLoadSource: o,
                outcome: n,
                closedBy: e.type,
                error: l,
                sdkVersion: this.sdkVersion,
                detailCollected: s,
                steps: this.steps.map((e) => this.buildStepRecord(e)),
                iframeIds: this.iframeIds,
            }
        );
    }
    buildStepRecord(e) {
        let t = null;
        null != e.end && (t = b(e.end - e.start));
        let n = [];
        for (let { kind: t, entry: i } of e.claims)
            null != i &&
                n.push(
                    (function (e, t, n) {
                        let i = (t.serverTiming ?? []).map((e) => {
                            let { name: t, duration: n, description: i } = e;
                            return { name: t, duration: n, description: i };
                        });
                        return {
                            kind: e,
                            path: (function (e) {
                                try {
                                    return new URL(e, location.href).pathname;
                                } catch {
                                    return "";
                                }
                            })(t.name),
                            startMs: C(t.startTime - n),
                            durationMs: C(t.duration),
                            phases: {
                                dns: N(t.domainLookupStart, t.domainLookupEnd),
                                connect: N(t.connectStart, t.connectEnd),
                                tls: N(t.secureConnectionStart, t.connectEnd),
                                request: N(t.requestStart, t.responseStart),
                                ttfb: N(t.startTime, t.responseStart),
                                download: N(t.responseStart, t.responseEnd),
                            },
                            transferSize: t.transferSize,
                            protocol: t.nextHopProtocol,
                            serverTiming: i,
                        };
                    })(t, i, this.startTime),
                );
        return {
            step: e.step,
            status: e.status ?? T.xo.PENDING,
            startMs: this.relative(e.start),
            durationMs: t,
            resources: n,
        };
    }
    addStep(e, t) {
        let n = { step: e, status: t, start: performance.now(), end: null, claims: [] };
        return (this.steps.push(n), n);
    }
    endStep(e, t) {
        "closed" !== this.currentPhase &&
            ((e.end = performance.now()), (e.status ??= t), R.has(e.status) && this.releaseStepClaims(e));
    }
    claim(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.start,
            r = { kind: t, key: n, startTime: i, entry: null };
        (e.claims.push(r), this.options.resourceMatcher.addClaim(r));
    }
    setTimer(e, t) {
        (clearTimeout(this.timer), (this.timer = setTimeout(() => this.finish({ type: t }), e)));
    }
    relative(e) {
        return null == e ? null : b(e - this.startTime);
    }
}
function b(e) {
    return Math.round(10 * e) / 10;
}
var v = n(400421);
let P = [],
    M = new Map(),
    U = new (class {
        claimsByKey = new Map();
        observer = null;
        addClaim(e) {
            let t = this.claimsByKey.get(e.key);
            (null == t && ((t = new Set()), this.claimsByKey.set(e.key, t)), t.add(e), this.connect());
        }
        removeClaim(e) {
            let t = this.claimsByKey.get(e.key);
            null != t &&
                (t.delete(e),
                0 === t.size && this.claimsByKey.delete(e.key),
                0 === this.claimsByKey.size && this.disconnect());
        }
        flush() {
            if (null != this.observer)
                try {
                    this.matchEntries(this.observer.takeRecords());
                } catch {}
        }
        connect() {
            if (null == this.observer && "u" > typeof PerformanceObserver)
                try {
                    let e = new PerformanceObserver((e) => {
                        try {
                            this.matchEntries(e.getEntries());
                        } catch {}
                    });
                    (e.observe({ type: "resource" }), (this.observer = e));
                } catch {}
        }
        disconnect() {
            (this.observer?.disconnect(), (this.observer = null));
        }
        matchEntries(e) {
            for (let t of e) {
                let e;
                e =
                    "iframe" === t.initiatorType
                        ? t.name
                        : (function (e) {
                              let t = e.search(/[?#]/);
                              return -1 === t ? e : e.slice(0, t);
                          })(t.name);
                let n = this.claimsByKey.get(e);
                null != n &&
                    (function (e, t) {
                        let n = null;
                        for (let i of e) {
                            let e = null == i.entry,
                                r = i.startTime <= t.startTime,
                                a = null != n ? n.startTime : -1;
                            e && r && i.startTime >= a && (n = i);
                        }
                        null != n && (n.entry = t);
                    })(n, t);
            }
        }
    })(),
    w = new Set([T.cu.SIDEBAR_MOUSEDOWN, T.cu.NAVIGATION]);
function G(e, t, n, i) {
    let r = M.get(t);
    switch (r?.phase) {
        case void 0:
        case y.CLOSED:
            break;
        case y.STARTED:
            return r;
        case y.LAUNCHED:
            r.finish({ type: T.Vj.SUPERSEDED });
    }
    let a = new D({
        frameId: t,
        applicationId: n,
        surface: i,
        trigger: e,
        detailCollected: (0, v.K4)(),
        resources: (function (e) {
            let t = [],
                n = S((0, s.SR)(e));
            null != n && t.push({ kind: T.tP.PROXY_TICKET, key: n });
            let i = (0, s.ah)(e);
            if (null != i) {
                let e = S(i);
                null != e && t.push({ kind: T.tP.PREWARM, key: e });
            }
            let r = [],
                a = (0, c.pl)(e);
            if (null != a) {
                let e = S(a);
                null != e && r.push({ kind: T.tP.CSP, key: e });
            }
            return { [T.aY.PROXY_TICKET]: t, [T.aY.CSP]: r };
        })(n),
        resourceMatcher: U,
        onClose: F,
    });
    return (M.set(t, a), a);
}
function x(e) {
    return M.get(e) ?? null;
}
function k(e) {
    let t = _.A.getFrameByIframeId(e);
    return null == t ? null : x(t.id);
}
function F(e, t) {
    (M.get(e.frameId) === e && M.delete(e.frameId),
        r.h.dispatch({ type: "FRAME_LAUNCH_TIMING_CLOSED", record: t }),
        t.detailCollected &&
            (function (e, t) {
                let n = `frame-launch:${e.launchId}`,
                    i = { measures: [n], marks: [] };
                try {
                    for (let r of (performance.measure(n, { start: t, duration: e.totalMs, detail: e }), e.steps)) {
                        let e = `${n}:${r.step}`,
                            a = t + r.startMs;
                        null != r.durationMs
                            ? (performance.measure(e, { start: a, duration: r.durationMs }), i.measures.push(e))
                            : (performance.mark(e, { startTime: a }), i.marks.push(e));
                    }
                } catch {}
                for (P.push(i); P.length > 20;) {
                    let e = P.shift();
                    for (let t of e.measures) performance.clearMeasures(t);
                    for (let t of e.marks) performance.clearMarks(t);
                }
            })(t, e.startTime));
}
function B(e, t) {
    let n = M.get(e);
    return null != n && n.isLaunch(t) ? n : null;
}
function V(e) {
    let { frameId: t, applicationId: n, launchRequestId: i } = e,
        r = M.get(t);
    null == r ||
        r.phase !== y.STARTED ||
        (r.markLaunchStarted(i),
        r.hasStep(T.aY.APPLICATION) ||
            r.span(T.aY.APPLICATION, (e) => {
                var t, i;
                return d.A.isHydrated(n)
                    ? (e.setStatus(T.xo.CACHED), Promise.resolve())
                    : ((t = r),
                      (i = n),
                      new Promise((e) => {
                          d.A.addConditionalChangeListener(
                              () => t.phase !== y.CLOSED && (!d.A.isHydrated(i) || (e(), !1)),
                              !1,
                          );
                      }));
            }));
}
function H(e) {
    let { frameId: t, launchRequestId: n } = e;
    B(t, n)?.markDispatched();
}
function j(e) {
    let { frameId: t, launchRequestId: n, error: i } = e;
    B(t, n)?.finish({ type: T.Vj.FAILED, error: i });
}
function W(e) {
    let { frameId: t } = e;
    M.get(t)?.finish({ type: T.Vj.STOPPED });
}
function Y() {
    for (let e of M.values()) e.drop();
    M.clear();
}
function K(e) {
    let { channelId: t } = e,
        n = null;
    for (let e of (null != t && (n = (0, E.A)(t)), [...M.values()])) {
        let t = null != n && e.frameId === n.frameId,
            i = e.phase === y.STARTED;
        !t && i && w.has(e.trigger) && e.finish({ type: T.Vj.ABANDONED });
    }
    if (null == n || null != _.A.getFrame(n.frameId)) return;
    let i = (0, u.JK)().location.state;
    if ((0, l.rm)() || i?.appChannelClosed === !0 || (0, o.z)(n.frameId)) return;
    let { frameId: r, applicationId: a, surface: s } = n;
    G(T.cu.NAVIGATION, r, a, s);
}
class $ extends a.A {
    actions = {
        FRAME_LAUNCH_START: V,
        FRAME_LAUNCH: H,
        FRAME_LAUNCH_FAIL: j,
        FRAME_STOP: W,
        LOGOUT: Y,
        CHANNEL_SELECT: K,
    };
}
let X = new $();
