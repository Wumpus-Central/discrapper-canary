n.d(t, { Z: () => y }), n(47120), n(653041), n(411104), n(733860);
var i = n(442837),
    r = n(710845),
    a = n(483012),
    s = n(138859),
    o = n(206776),
    l = n(91247),
    u = n(459005),
    c = n(398463);
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
let f = new r.Z('GatewaySocket'),
    _ = new Set(['INITIAL_GUILD', 'READY']),
    p = new Set(['READY', 'INITIAL_GUILD']),
    h = new Set(['READY', 'READY_SUPPLEMENTAL', 'RESUMED']),
    m = new Set(['READY', 'INITIAL_GUILD', 'READY_SUPPLEMENTAL', 'RESUMED', 'VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'RTC_CONNECTION_CLIENT_CONNECT', 'RTC_CONNECTION_PING', 'MEDIA_SESSION_JOINED', 'MEDIA_ENGINE_PERMISSION', 'SESSIONS_REPLACE']),
    g = {};
function E(e, t) {
    var n;
    let [i, r] = null !== (n = g[e]) && void 0 !== n ? n : [0, 0];
    g[e] = [(i * r + t) / (r + 1), r + 1];
}
function v(e, t, n) {
    var i;
    if (null == n) return !1;
    let r = e[t],
        a = e.length - 1,
        s = t < a ? e[t + 1] : null,
        o = null !== (i = null == n ? void 0 : n.timeRemaining()) && void 0 !== i ? i : 0,
        l = null != n && o <= 0,
        u = r.type === (null == s ? void 0 : s.type),
        c = t === a;
    return !!l && !u && !c;
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
        let i = {
            data: e,
            type: t,
            compressionAnalytics: n,
            status: 0,
            preloadPromise: null,
            preloadedData: null
        };
        this.queue.push(i), this.maybePreload(i) || this.scheduleFlush(t);
    }
    maybePreload(e) {
        if (this.paused && !_.has(e.type)) return !1;
        if (0 === e.status) {
            var t;
            let n = null === (t = this.getDispatchHandler(e.type)) || void 0 === t ? void 0 : t.preload(e.data);
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
            r = !1;
        this.scheduler.telemetry.measure(u.aA.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let o = [];
            this.socket.connectionState === s.Z.RESUMING && i.ZP.Emitter.pause(150);
            let l = 0;
            if (
                (i.ZP.Emitter.batched(() => {
                    for (let i = 0; i < e.length; i++) {
                        let a = e[i];
                        (n = a.type), (r = r || h.has(a.type));
                        let s = performance.now();
                        if ((this.dispatchOne(a), (l = performance.now() - s), E(a.type, l), v(e, i, t))) {
                            (o = e.slice(i + 1)), null != t && 0 >= t.timeRemaining() && this.scheduler.telemetry.timeTrack(u.JV.TIME_OVER_DEADLINE, t.timeSinceExpiration);
                            break;
                        }
                    }
                    a.Z.flush();
                }),
                r && i.ZP.Emitter.resume(),
                o.length > 0)
            )
                return this.scheduler.telemetry.measure(u.aA.COUNT_DISPATCHES_LEFT_AFTER_YIELD, o.length), this.queue.unshift(...o), this.scheduler.requestWorkTimeout(this.flush, !0), !1;
        } catch (e) {
            this.socket.resetSocketOnDispatchError({
                error: e,
                action: n
            });
        }
        return !0;
    }
    dispatchOne(e) {
        var t, n, i;
        let { data: r, type: o, compressionAnalytics: u, preloadedData: c } = e,
            d = performance.now();
        if (this.socket.connectionState === s.Z.RESUMING) {
            let e = d - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents ? (this.resumeAnalytics.initialWaitTime = e) : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), (this.resumeAnalytics.totalWaitTime += e), (this.resumeAnalytics.lastUpdateTime = d), (this.resumeAnalytics.numEvents += 1);
        }
        if ((a.Z.flush(o, r), 'READY' === o)) {
            let e = (0, l.vW)(r);
            null === (t = this.getDispatchHandler(o)) || void 0 === t || t.dispatch(r, o, c), (0, l.dm)(this.socket, r, d, u, e);
        } else 'RESUMED' === o ? (null === (n = this.getDispatchHandler(o)) || void 0 === n || n.dispatch(r, o, c), (0, l.uB)(this.resumeAnalytics), (this.resumeAnalytics = (0, l.zH)()), this.socket.handleResumeDispatched()) : null === (i = this.getDispatchHandler(o)) || void 0 === i || i.dispatch(r, o, c);
        this.socket.connectionState === s.Z.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - d);
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
            (this.scheduler = (0, o.l)()),
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
                let i = this.queue.splice(0, n),
                    r = this.dispatchMultiple(i, e);
                r && this.scheduler.telemetry.timeEnd(u.JV.TIME_TO_QUEUE_EMPTY);
                let a = performance.now() - t;
                return a > c.TC && !r && f.log('Dispatched '.concat(i.length, ' messages in ').concat(a, 'ms')), r;
            });
    }
}
