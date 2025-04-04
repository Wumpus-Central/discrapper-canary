n.d(t, { Z: () => y }), n(47120), n(653041), n(411104), n(733860);
var r = n(442837),
    i = n(710845),
    o = n(483012),
    a = n(138859),
    s = n(206776),
    l = n(91247),
    c = n(459005),
    u = n(398463);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = new i.Z('GatewaySocket'),
    _ = new Set(['INITIAL_GUILD', 'READY']),
    p = new Set(['READY', 'INITIAL_GUILD']),
    h = new Set(['READY', 'READY_SUPPLEMENTAL', 'RESUMED']),
    m = new Set(['READY', 'INITIAL_GUILD', 'READY_SUPPLEMENTAL', 'RESUMED', 'VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'RTC_CONNECTION_CLIENT_CONNECT', 'RTC_CONNECTION_PING', 'MEDIA_SESSION_JOINED', 'MEDIA_ENGINE_PERMISSION', 'SESSIONS_REPLACE']),
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
        o = e.length - 1,
        a = t < o ? e[t + 1] : null,
        s = null != (r = null == n ? void 0 : n.timeRemaining()) ? r : 0,
        l = null != n && s <= 0,
        c = i.type === (null == a ? void 0 : a.type),
        u = t === o;
    return !!l && !c && !u;
}
class y {
    hasStuffToDispatchNow() {
        return this.queue.length > 0 && 2 === this.queue[0].status;
    }
    processFirstQueuedDispatch(e) {
        let t = [];
        for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status; ) t.push(this.queue.shift());
        this.dispatchMultiple(t);
    }
    unpauseDispatchQueue() {
        for (let e of ((this.paused = !1), this.queue)) this.maybePreload(e);
        this.flush();
    }
    receiveDispatch(e, t, n) {
        if (null == this.getDispatchHandler) throw Error('getDispatchHandler needs to be passed in first!');
        let r = {
            data: e,
            type: t,
            compressionAnalytics: n,
            status: 0,
            preloadPromise: null,
            preloadedData: null
        };
        this.queue.push(r), this.maybePreload(r) || this.scheduleFlush(t);
    }
    maybePreload(e) {
        if (this.paused && !_.has(e.type)) return !1;
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
                                action: e.type
                            })
                        ),
                    !0
                );
        }
        return !1;
    }
    scheduleFlush(e) {
        !this.paused && (p.has(e) ? (this.scheduler.clearWorkTimeout(), this.flush()) : this.scheduler.hasWorkScheduled || this.scheduler.requestWorkTimeout(this.flush), m.has(e) && this.scheduler.markCriticalWorkScheduled());
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
        let n = 'none',
            i = !1;
        this.scheduler.telemetry.measure(c.aA.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let s = [];
            this.socket.connectionState === a.Z.RESUMING && r.ZP.Emitter.pause(150);
            let l = 0;
            if (
                (r.ZP.Emitter.batched(() => {
                    for (let r = 0; r < e.length; r++) {
                        let o = e[r];
                        (n = o.type), (i = i || h.has(o.type));
                        let a = performance.now();
                        if ((this.dispatchOne(o), (l = performance.now() - a), E(o.type, l), b(e, r, t))) {
                            (s = e.slice(r + 1)), null != t && 0 >= t.timeRemaining() && this.scheduler.telemetry.timeTrack(c.JV.TIME_OVER_DEADLINE, t.timeSinceExpiration);
                            break;
                        }
                    }
                    o.Z.flush();
                }),
                i && r.ZP.Emitter.resume(),
                s.length > 0)
            )
                return this.scheduler.telemetry.measure(c.aA.COUNT_DISPATCHES_LEFT_AFTER_YIELD, s.length), this.queue.unshift(...s), this.scheduler.requestWorkTimeout(this.flush, !0), !1;
        } catch (e) {
            this.socket.resetSocketOnDispatchError({
                error: e,
                action: n
            });
        }
        return !0;
    }
    dispatchOne(e) {
        var t, n, r;
        let { data: i, type: s, compressionAnalytics: c, preloadedData: u } = e,
            d = performance.now();
        if (this.socket.connectionState === a.Z.RESUMING) {
            let e = d - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents ? (this.resumeAnalytics.initialWaitTime = e) : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), (this.resumeAnalytics.totalWaitTime += e), (this.resumeAnalytics.lastUpdateTime = d), (this.resumeAnalytics.numEvents += 1);
        }
        if ((o.Z.flush(s, i), 'READY' === s)) {
            let e = (0, l.vW)(i);
            null == (t = this.getDispatchHandler(s)) || t.dispatch(i, s, u), (0, l.dm)(this.socket, i, d, c, e);
        } else 'RESUMED' === s ? (null == (n = this.getDispatchHandler(s)) || n.dispatch(i, s, u), (0, l.uB)(this.resumeAnalytics), (this.resumeAnalytics = (0, l.zH)()), this.socket.handleResumeDispatched()) : null == (r = this.getDispatchHandler(s)) || r.dispatch(i, s, u);
        this.socket.connectionState === a.Z.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - d);
    }
    clear() {
        (this.paused = !1), (this.queue.length = 0);
    }
    constructor(e) {
        d(this, 'socket', void 0),
            d(this, 'scheduler', void 0),
            d(this, 'queue', void 0),
            d(this, 'paused', void 0),
            d(this, 'resumeAnalytics', void 0),
            d(this, 'getDispatchHandler', void 0),
            d(this, 'flush', void 0),
            (this.socket = e),
            (this.scheduler = (0, s.l)()),
            (this.queue = []),
            (this.paused = !0),
            (this.resumeAnalytics = (0, l.zH)()),
            (this.getDispatchHandler = null),
            (this.flush = (e) => {
                if (this.paused) return !0;
                let t = performance.now(),
                    n = 0;
                for (; n < this.queue.length && 2 === this.queue[n].status; n++);
                if (0 === n) return !0;
                let r = this.queue.splice(0, n),
                    i = this.dispatchMultiple(r, e);
                i && this.scheduler.telemetry.timeEnd(c.JV.TIME_TO_QUEUE_EMPTY);
                let o = performance.now() - t;
                return o > u.TC && !i && f.log('Dispatched '.concat(r.length, ' messages in ').concat(o, 'ms')), i;
            });
    }
}
