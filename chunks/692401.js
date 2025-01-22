r.d(n, {
    W: function () {
        return f;
    }
});
var i = r(411104);
var a = r(512722),
    o = r.n(a),
    s = r(710845),
    l = r(459005),
    u = r(398463);
function c(e, n, r) {
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
let d = new s.Z('DispatcherWorkScheduler');
class f {
    _trackAppBackgrounded(e) {
        if (this._isBackgrounded === e) return;
        if (((this._isBackgrounded = e), !!this._isBackgrounded)) this.hasWorkScheduled && (this.telemetry.track(l.ug.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback());
    }
    _queueIdleCallback() {
        throw Error('Not implemented');
    }
    _clearIdleCallback() {
        throw Error('Not implemented');
    }
    get _hasExceededMaxConsecutiveFlushes() {
        return this._consecutiveFlushesBeforeQueueEmpty >= u.OT;
    }
    _processWorkCallback(e) {
        if (null == this._workCallbackFn) return;
        if (this._hasExceededMaxConsecutiveFlushes) {
            d.log('Unable to fully flush work queue after max retries, skipping future deadline.'), this._workCallbackFn(), this.clearWorkTimeout(), this.telemetry.measure(l.aA.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, this._consecutiveFlushesBeforeQueueEmpty), this.telemetry.track(l.ug.EXCEEDED_MAX_CONSECUTIVE_FLUSHES), (this._consecutiveFlushesBeforeQueueEmpty = 0), (this._nextDispatchTimeout = u.II);
            return;
        }
        let n = performance.now(),
            r = this._workCallbackFn(e),
            i = performance.now();
        this.clearWorkTimeout(), i - n > u.TC ? (this._nextDispatchTimeout = u.II) : (this._nextDispatchTimeout = u.Lu), r ? (this._consecutiveFlushesBeforeQueueEmpty > 0 && this.telemetry.measure(l.aA.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, parseInt(''.concat(this._consecutiveFlushesBeforeQueueEmpty))), (this._consecutiveFlushesBeforeQueueEmpty = 0), (this._criticalWorkScheduled = !1)) : (this._consecutiveFlushesBeforeQueueEmpty += 1);
    }
    markCriticalWorkScheduled() {
        (this._criticalWorkScheduled = !0), null != this._flushIdleHandler && (this._clearIdleCallback(), this._processWorkCallback());
    }
    toggleRequestIdleCallback(e) {
        (this._enableRequestIdleCallback = e), !e && this.hasWorkScheduled && (this._clearIdleCallback(), this._processWorkCallback());
    }
    get isBackgrounded() {
        return this._isBackgrounded;
    }
    get hasWorkScheduled() {
        return null != this._flushTimeoutHandler || null != this._flushIdleHandler;
    }
    get isRequestIdleCallbackEnabled() {
        return this._enableRequestIdleCallback;
    }
    clearWorkTimeout() {
        null != this._flushTimeoutHandler && (clearTimeout(this._flushTimeoutHandler), (this._flushTimeoutHandler = null)), this._clearIdleCallback(), (this._nextDispatchTimeout = u.Lu), (this._workCallbackFn = null);
    }
    requestWorkTimeout(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (((this._workCallbackFn = e), !this.hasWorkScheduled)) {
            if ((this.telemetry.time(l.JV.TIME_TO_QUEUE_EMPTY), this._nextDispatchTimeout === u.II && this.telemetry.track(l.ug.LONGER_DISPATCH), n)) {
                this._queueIdleCallback();
                return;
            }
            this._flushTimeoutHandler = setTimeout(() => {
                if ((o()(null != this._workCallbackFn, 'Work callback should be set'), this._isBackgrounded)) return this.telemetry.track(l.ug.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback();
                this._queueIdleCallback();
            }, this._nextDispatchTimeout);
        }
    }
    constructor() {
        c(this, '_flushTimeoutHandler', null), c(this, '_flushIdleHandler', null), c(this, '_nextDispatchTimeout', u.Lu), c(this, '_workCallbackFn', null), c(this, '_consecutiveFlushesBeforeQueueEmpty', 0), c(this, '_isBackgrounded', !1), c(this, '_enableRequestIdleCallback', !1), c(this, '_criticalWorkScheduled', !1), c(this, 'telemetry', new l.mA()), c(this, '_logger', d);
    }
}
