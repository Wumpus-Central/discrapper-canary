n.d(t, { A: () => y }), n(896048), n(321073), n(65821), n(667532);
var r = n(311907),
    i = n(626584),
    a = n(877166),
    s = n(175306),
    o = n(878374),
    l = n(932170),
    c = n(936674),
    u = n(354382);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = new i.A("GatewaySocket"),
    p = new Set(["INITIAL_GUILD", "READY"]),
    _ = new Set(["READY", "INITIAL_GUILD"]),
    h = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]),
    m = new Set([
        "READY",
        "INITIAL_GUILD",
        "READY_SUPPLEMENTAL",
        "RESUMED",
        "VOICE_CHANNEL_SELECT",
        "VOICE_STATE_UPDATE",
        "VOICE_SERVER_UPDATE",
        "RTC_CONNECTION_STATE",
        "RTC_CONNECTION_VIDEO",
        "RTC_CONNECTION_CLIENT_CONNECT",
        "RTC_CONNECTION_PING",
        "MEDIA_SESSION_JOINED",
        "MEDIA_ENGINE_PERMISSION",
        "SESSIONS_REPLACE",
    ]),
    g = {};
function E(e, t) {
    var n;
    let [r, i] = null != (n = g[e]) ? n : [0, 0];
    g[e] = [(r * i + t) / (i + 1), i + 1];
}
function b(e, t, n) {
    var r;
    if (null == n) return !1;
    let i = e[t],
        a = e.length - 1,
        s = t < a ? e[t + 1] : null,
        o = null != (r = null == n ? void 0 : n.timeRemaining()) ? r : 0,
        l = null != n && o <= 0,
        c = i.type === (null == s ? void 0 : s.type),
        u = t === a;
    return !!l && !c && !u;
}
class y {
    hasStuffToDispatchNow() {
        return this.queue.length > 0 && 2 === this.queue[0].status;
    }
    processFirstQueuedDispatch(e) {
        let t = [];
        for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status; )
            t.push(this.queue.shift());
        this.dispatchMultiple(t);
    }
    unpauseDispatchQueue() {
        for (let e of ((this.paused = !1), this.queue)) this.maybePreload(e);
        this.flush();
    }
    receiveDispatch(e, t, n) {
        if (null == this.getDispatchHandler) throw Error("getDispatchHandler needs to be passed in first!");
        let r = {
            data: e,
            type: t,
            compressionAnalytics: n,
            status: 0,
            preloadPromise: null,
            preloadedData: null,
        };
        this.queue.push(r), this.maybePreload(r) || this.scheduleFlush(t);
    }
    maybePreload(e) {
        if (this.paused && !p.has(e.type)) return !1;
        if (0 === e.status) {
            var t;
            let n = null == (t = this.getDispatchHandler(e.type)) ? void 0 : t.preload(e.data);
            if (((e.status = null == n ? 2 : 1), (e.preloadPromise = n), null != n))
                return (
                    n
                        .then((t) => {
                            (e.preloadedData = t), (e.status = 2), this.scheduleFlush(e.type);
                        })
                        .catch((t) =>
                            this.socket.resetSocketOnDispatchError({
                                error: t,
                                action: e.type,
                            }),
                        ),
                    !0
                );
        }
        return !1;
    }
    scheduleFlush(e) {
        !this.paused &&
            (_.has(e)
                ? (this.scheduler.clearWorkTimeout(), this.flush())
                : this.scheduler.hasWorkScheduled || this.scheduler.requestWorkTimeout(this.flush),
            m.has(e) && this.scheduler.markCriticalWorkScheduled());
    }
    getDispatchTimings() {
        return g;
    }
    getSchedulerTelemetry() {
        return this.scheduler.telemetry;
    }
    getIsSchedulerBackgrounded() {
        return this.scheduler.isBackgrounded;
    }
    toggleRequestIdleCallback(e) {
        this.scheduler.toggleRequestIdleCallback(e);
    }
    getIsRequestIdleCallbackEnabled() {
        return this.scheduler.isRequestIdleCallbackEnabled;
    }
    dispatchMultiple(e, t) {
        if (0 === e.length) return !0;
        let n = "none",
            i = !1;
        this.scheduler.telemetry.measure(c.Wg.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let o = [];
            this.socket.connectionState === s.A.RESUMING && r.Ay.Emitter.pause(150);
            let l = 0;
            if (
                (r.Ay.Emitter.batched(() => {
                    for (let r = 0; r < e.length; r++) {
                        let a = e[r];
                        (n = a.type), (i = i || h.has(a.type));
                        let s = performance.now();
                        if ((this.dispatchOne(a), (l = performance.now() - s), E(a.type, l), b(e, r, t))) {
                            (o = e.slice(r + 1)),
                                null != t &&
                                    0 >= t.timeRemaining() &&
                                    this.scheduler.telemetry.timeTrack(c.YE.TIME_OVER_DEADLINE, t.timeSinceExpiration);
                            break;
                        }
                    }
                    a.A.flush();
                }),
                i && r.Ay.Emitter.resume(),
                o.length > 0)
            )
                return (
                    this.scheduler.telemetry.measure(c.Wg.COUNT_DISPATCHES_LEFT_AFTER_YIELD, o.length),
                    this.queue.unshift(...o),
                    this.scheduler.requestWorkTimeout(this.flush, !0),
                    !1
                );
        } catch (e) {
            this.socket.resetSocketOnDispatchError({
                error: e,
                action: n,
            });
        }
        return !0;
    }
    dispatchOne(e) {
        var t, n, r;
        let { data: i, type: o, compressionAnalytics: c, preloadedData: u } = e,
            d = performance.now();
        if (this.socket.connectionState === s.A.RESUMING) {
            let e = d - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents
                ? (this.resumeAnalytics.initialWaitTime = e)
                : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e),
                (this.resumeAnalytics.totalWaitTime += e),
                (this.resumeAnalytics.lastUpdateTime = d),
                (this.resumeAnalytics.numEvents += 1);
        }
        if ((a.A.flush(o, i), "READY" === o)) {
            let e = (0, l.Js)(i);
            null == (t = this.getDispatchHandler(o)) || t.dispatch(i, o, u), (0, l.Lh)(this.socket, i, d, c, e);
        } else
            "RESUMED" === o
                ? (null == (n = this.getDispatchHandler(o)) || n.dispatch(i, o, u),
                  (0, l.Gx)(this.resumeAnalytics),
                  this.socket.handleResumeDispatched(),
                  (this.resumeAnalytics = (0, l.Qo)()))
                : null == (r = this.getDispatchHandler(o)) || r.dispatch(i, o, u);
        this.socket.connectionState === s.A.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - d);
    }
    clear() {
        (this.paused = !1), (this.queue.length = 0);
    }
    constructor(e) {
        d(this, "socket", void 0),
            d(this, "scheduler", void 0),
            d(this, "queue", void 0),
            d(this, "paused", void 0),
            d(this, "resumeAnalytics", void 0),
            d(this, "getDispatchHandler", void 0),
            d(this, "flush", void 0),
            (this.socket = e),
            (this.scheduler = (0, o.a)()),
            (this.queue = []),
            (this.paused = !0),
            (this.resumeAnalytics = (0, l.Qo)()),
            (this.getDispatchHandler = null),
            (this.flush = (e) => {
                if (this.paused) return !0;
                let t = performance.now(),
                    n = 0;
                for (; n < this.queue.length && 2 === this.queue[n].status; n++);
                if (0 === n) return !0;
                let r = this.queue.splice(0, n),
                    i = this.dispatchMultiple(r, e);
                i && this.scheduler.telemetry.timeEnd(c.YE.TIME_TO_QUEUE_EMPTY);
                let a = performance.now() - t;
                return a > u.zO && !i && f.log("Dispatched ".concat(r.length, " messages in ").concat(a, "ms")), i;
            });
    }
}
