r.d(n, {
    Z: function () {
        return C;
    }
});
var i,
    a = r(47120);
var o = r(653041);
var s = r(411104);
var l = r(733860);
var u = r(442837),
    c = r(710845),
    d = r(483012),
    f = r(138859),
    p = r(206776),
    h = r(91247),
    _ = r(459005),
    m = r(398463);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = new c.Z('GatewaySocket'),
    v = new Set(['INITIAL_GUILD', 'READY']),
    y = new Set(['READY', 'INITIAL_GUILD']),
    b = new Set(['READY', 'READY_SUPPLEMENTAL', 'RESUMED']),
    I = new Set(['READY', 'INITIAL_GUILD', 'READY_SUPPLEMENTAL', 'RESUMED', 'VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'RTC_CONNECTION_CLIENT_CONNECT', 'RTC_CONNECTION_PING', 'MEDIA_SESSION_JOINED', 'MEDIA_ENGINE_PERMISSION', 'SESSIONS_REPLACE']);
!(function (e) {
    (e[(e.NotStarted = 0)] = 'NotStarted'), (e[(e.Loading = 1)] = 'Loading'), (e[(e.Loaded = 2)] = 'Loaded');
})(i || (i = {}));
let T = {};
function S(e, n) {
    var r;
    let [i, a] = null !== (r = T[e]) && void 0 !== r ? r : [0, 0];
    T[e] = [(i * a + n) / (a + 1), a + 1];
}
function A(e, n, r) {
    var i;
    if (null == r) return !1;
    let a = e[n],
        o = e.length - 1,
        s = n < o ? e[n + 1] : null,
        l = null !== (i = null == r ? void 0 : r.timeRemaining()) && void 0 !== i ? i : 0,
        u = null != r && l <= 0,
        c = a.type === (null == s ? void 0 : s.type),
        d = n === o;
    return !!u && !c && !d && !0;
}
class C {
    hasStuffToDispatchNow() {
        return this.queue.length > 0 && 2 === this.queue[0].status;
    }
    processFirstQueuedDispatch(e) {
        let n = [];
        for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status; ) n.push(this.queue.shift());
        this.dispatchMultiple(n);
    }
    unpauseDispatchQueue() {
        for (let e of ((this.paused = !1), this.queue)) this.maybePreload(e);
        this.flush();
    }
    receiveDispatch(e, n, r) {
        if (null == this.getDispatchHandler) throw Error('getDispatchHandler needs to be passed in first!');
        let i = {
            data: e,
            type: n,
            compressionAnalytics: r,
            status: 0,
            preloadPromise: null,
            preloadedData: null
        };
        this.queue.push(i), !this.maybePreload(i) && this.scheduleFlush(n);
    }
    maybePreload(e) {
        if (this.paused && !v.has(e.type)) return !1;
        if (0 === e.status) {
            var n;
            let r = null === (n = this.getDispatchHandler(e.type)) || void 0 === n ? void 0 : n.preload(e.data);
            if (((e.status = null == r ? 2 : 1), (e.preloadPromise = r), null != r))
                return (
                    r
                        .then((n) => {
                            (e.preloadedData = n), (e.status = 2), this.scheduleFlush(e.type);
                        })
                        .catch((n) =>
                            this.socket.resetSocketOnDispatchError({
                                error: n,
                                action: e.type
                            })
                        ),
                    !0
                );
        }
        return !1;
    }
    scheduleFlush(e) {
        !this.paused && (y.has(e) ? (this.scheduler.clearWorkTimeout(), this.flush()) : !this.scheduler.hasWorkScheduled && this.scheduler.requestWorkTimeout(this.flush), I.has(e) && this.scheduler.markCriticalWorkScheduled());
    }
    getDispatchTimings() {
        return T;
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
    dispatchMultiple(e, n) {
        if (0 === e.length) return !0;
        let r = 'none',
            i = !1;
        this.scheduler.telemetry.measure(_.aA.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let a = [];
            this.socket.connectionState === f.Z.RESUMING && u.ZP.Emitter.pause(150);
            let o = 0;
            if (
                (u.ZP.Emitter.batched(() => {
                    for (let s = 0; s < e.length; s++) {
                        let l = e[s];
                        (r = l.type), (i = i || b.has(l.type));
                        let u = performance.now();
                        if ((this.dispatchOne(l), (o = performance.now() - u), S(l.type, o), A(e, s, n))) {
                            (a = e.slice(s + 1)), null != n && 0 >= n.timeRemaining() && this.scheduler.telemetry.timeTrack(_.JV.TIME_OVER_DEADLINE, n.timeSinceExpiration);
                            break;
                        }
                    }
                    d.Z.flush();
                }),
                i && u.ZP.Emitter.resume(),
                a.length > 0)
            )
                return this.scheduler.telemetry.measure(_.aA.COUNT_DISPATCHES_LEFT_AFTER_YIELD, a.length), this.queue.unshift(...a), this.scheduler.requestWorkTimeout(this.flush, !0), !1;
        } catch (e) {
            this.socket.resetSocketOnDispatchError({
                error: e,
                action: r
            });
        }
        return !0;
    }
    dispatchOne(e) {
        var n, r, i;
        let { data: a, type: o, compressionAnalytics: s, preloadedData: l } = e,
            u = performance.now();
        if (this.socket.connectionState === f.Z.RESUMING) {
            let e = u - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents ? (this.resumeAnalytics.initialWaitTime = e) : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), (this.resumeAnalytics.totalWaitTime += e), (this.resumeAnalytics.lastUpdateTime = u), (this.resumeAnalytics.numEvents += 1);
        }
        if ((d.Z.flush(o, a), 'READY' === o)) {
            let e = (0, h.vW)(a);
            null === (n = this.getDispatchHandler(o)) || void 0 === n || n.dispatch(a, o, l), (0, h.dm)(this.socket, a, u, s, e);
        } else 'RESUMED' === o ? (null === (r = this.getDispatchHandler(o)) || void 0 === r || r.dispatch(a, o, l), (0, h.uB)(this.resumeAnalytics), (this.resumeAnalytics = (0, h.zH)()), this.socket.handleResumeDispatched()) : null === (i = this.getDispatchHandler(o)) || void 0 === i || i.dispatch(a, o, l);
        this.socket.connectionState === f.Z.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - u);
    }
    clear() {
        (this.paused = !1), (this.queue.length = 0);
    }
    constructor(e) {
        g(this, 'socket', void 0),
            g(this, 'scheduler', void 0),
            g(this, 'queue', void 0),
            g(this, 'paused', void 0),
            g(this, 'resumeAnalytics', void 0),
            g(this, 'getDispatchHandler', void 0),
            g(this, 'flush', void 0),
            (this.socket = e),
            (this.scheduler = (0, p.l)()),
            (this.queue = []),
            (this.paused = !0),
            (this.resumeAnalytics = (0, h.zH)()),
            (this.getDispatchHandler = null),
            (this.flush = (e) => {
                if (this.paused) return !0;
                let n = performance.now(),
                    r = 0;
                for (; r < this.queue.length && 2 === this.queue[r].status; r++);
                if (0 === r) return !0;
                let i = this.queue.splice(0, r),
                    a = this.dispatchMultiple(i, e);
                a && this.scheduler.telemetry.timeEnd(_.JV.TIME_TO_QUEUE_EMPTY);
                let o = performance.now() - n;
                return o > m.TC && !a && E.log('Dispatched '.concat(i.length, ' messages in ').concat(o, 'ms')), a;
            });
    }
}
