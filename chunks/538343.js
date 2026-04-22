"use strict";
n.d(t, { A: () => m }), n(321073), n(667532);
var r = n(311907),
    i = n(626584),
    s = n(877166),
    a = n(175306),
    o = n(878374),
    l = n(932170),
    u = n(936674),
    d = n(354382);
let c = new i.A("GatewaySocket"),
    _ = new Set(["INITIAL_GUILD", "READY"]),
    f = new Set(["READY", "INITIAL_GUILD"]),
    E = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]),
    h = new Set([
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
        "STREAM_CREATE",
        "STREAM_SERVER_UPDATE",
        "STREAM_DELETE",
        "STREAM_UPDATE",
    ]),
    p = {};
class m {
    socket;
    scheduler = (0, o.a)();
    queue = [];
    paused = !0;
    resumeAnalytics = (0, l.Qo)();
    getDispatchHandler = null;
    constructor(e) {
        this.socket = e;
    }
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
        let r = { data: e, type: t, compressionAnalytics: n, status: 0, preloadPromise: null, preloadedData: null };
        this.queue.push(r), this.maybePreload(r) || this.scheduleFlush(t);
    }
    maybePreload(e) {
        if (this.paused && !_.has(e.type)) return !1;
        if (0 === e.status) {
            let t = this.getDispatchHandler(e.type)?.preload(e.data);
            if (((e.status = null == t ? 2 : 1), (e.preloadPromise = t), null != t))
                return (
                    t
                        .then((t) => {
                            (e.preloadedData = t), (e.status = 2), this.scheduleFlush(e.type);
                        })
                        .catch((t) => this.socket.resetSocketOnDispatchError({ error: t, action: e.type })),
                    !0
                );
        }
        return !1;
    }
    scheduleFlush(e) {
        !this.paused &&
            (f.has(e)
                ? (this.scheduler.clearWorkTimeout(), this.flush())
                : this.scheduler.hasWorkScheduled || this.scheduler.requestWorkTimeout(this.flush),
            h.has(e) && this.scheduler.markCriticalWorkScheduled());
    }
    flush = (e) => {
        if (this.paused) return !0;
        let t = performance.now(),
            n = 0;
        for (; n < this.queue.length && 2 === this.queue[n].status; n++);
        if (0 === n) return !0;
        let r = this.queue.splice(0, n),
            i = this.dispatchMultiple(r, e);
        i && this.scheduler.telemetry.timeEnd(u.YE.TIME_TO_QUEUE_EMPTY);
        let s = performance.now() - t;
        return s > d.zO && !i && c.log(`Dispatched ${r.length} messages in ${s}ms`), i;
    };
    getDispatchTimings() {
        return p;
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
        this.scheduler.telemetry.measure(u.Wg.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let o = [];
            this.socket.connectionState === a.A.RESUMING && r.Ay.Emitter.pause(150);
            let l = 0;
            if (
                (r.Ay.Emitter.batched(() => {
                    for (let r = 0; r < e.length; r++) {
                        let s = e[r];
                        (n = s.type), (i = i || E.has(s.type));
                        let a = performance.now();
                        if (
                            (this.dispatchOne(s),
                            (l = performance.now() - a),
                            !(function (e, t) {
                                let [n, r] = p[e] ?? [0, 0];
                                p[e] = [(n * r + t) / (r + 1), r + 1];
                            })(s.type, l),
                            (function (e, t, n) {
                                if (null == n) return !1;
                                let r = e[t],
                                    i = e.length - 1,
                                    s = t < i ? e[t + 1] : null,
                                    a = n?.timeRemaining() ?? 0,
                                    o = null != n && a <= 0,
                                    l = r.type === s?.type;
                                return !!o && !l && t !== i;
                            })(e, r, t))
                        ) {
                            (o = e.slice(r + 1)),
                                null != t &&
                                    0 >= t.timeRemaining() &&
                                    this.scheduler.telemetry.timeTrack(u.YE.TIME_OVER_DEADLINE, t.timeSinceExpiration);
                            break;
                        }
                    }
                    s.A.flush();
                }),
                i && r.Ay.Emitter.resume(),
                o.length > 0)
            )
                return (
                    this.scheduler.telemetry.measure(u.Wg.COUNT_DISPATCHES_LEFT_AFTER_YIELD, o.length),
                    this.queue.unshift(...o),
                    this.scheduler.requestWorkTimeout(this.flush, !0),
                    !1
                );
        } catch (e) {
            this.socket.resetSocketOnDispatchError({ error: e, action: n });
        }
        return !0;
    }
    dispatchOne(e) {
        let { data: t, type: n, compressionAnalytics: r, preloadedData: i } = e,
            o = performance.now();
        if (this.socket.connectionState === a.A.RESUMING) {
            let e = o - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents
                ? (this.resumeAnalytics.initialWaitTime = e)
                : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e),
                (this.resumeAnalytics.totalWaitTime += e),
                (this.resumeAnalytics.lastUpdateTime = o),
                (this.resumeAnalytics.numEvents += 1);
        }
        if ((s.A.flush(n, t), "READY" === n)) {
            let e = (0, l.Js)(t);
            this.getDispatchHandler(n)?.dispatch(t, n, i), (0, l.Lh)(this.socket, t, o, r, e);
        } else
            "RESUMED" === n
                ? (this.getDispatchHandler(n)?.dispatch(t, n, i),
                  (0, l.Gx)(this.resumeAnalytics),
                  this.socket.handleResumeDispatched(),
                  (this.resumeAnalytics = (0, l.Qo)()))
                : this.getDispatchHandler(n)?.dispatch(t, n, i);
        this.socket.connectionState === a.A.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - o);
    }
    clear() {
        (this.paused = !1), (this.queue.length = 0);
    }
}
