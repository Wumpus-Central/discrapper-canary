r.d(n, {
    l: function () {
        return m;
    }
});
var i,
    a,
    o = r(570140),
    s = r(830917),
    l = r(692401),
    u = r(459005),
    c = r(398463);
function d(e, n, r) {
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
let f =
        null !== (i = window.requestIdleCallback) && void 0 !== i
            ? i
            : (e) => {
                  let n = Date.now();
                  return setTimeout(() => {
                      e({
                          didTimeout: !1,
                          timeRemaining() {
                              let e = Date.now() - n;
                              return Math.max(0, c.Ls - e);
                          }
                      });
                  }, 1);
              },
    p = null !== (a = window.cancelIdleCallback) && void 0 !== a ? a : clearTimeout;
function h(e) {
    return null == e ? new c.Lj(c.HO, !0) : new c.Lj(e.timeRemaining(), e.didTimeout);
}
class _ extends l.W {
    _queueIdleCallback() {
        if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
        this.telemetry.time(u.JV.TIME_TO_FIRE_IDLE_CALLBACK),
            this._scheduleRequestIdleCallback(
                (e) => {
                    var n;
                    if (null == e ? void 0 : e.didTimeout) {
                        this.telemetry.track(u.ug.FIRED_DUE_TO_MAX_TIMEOUT), this.telemetry.clearTime(u.JV.TIME_TO_FIRE_IDLE_CALLBACK), this._processWorkCallback();
                        return;
                    }
                    this.telemetry.timeEnd(u.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                    if ((null !== (n = null == e ? void 0 : e.timeRemaining()) && void 0 !== n ? n : c.HO) < c.HO)
                        this.telemetry.time(u.JV.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._scheduleRequestIdleCallback(
                                (e) => {
                                    this.telemetry.timeEnd(u.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                                    let n = h(e),
                                        r = null == n ? void 0 : n.timeRemaining();
                                    null != r && this.telemetry.timeTrack(u.JV.DEADLINE_INITIAL_TIME_REMAINING, r), this._processWorkCallback(n);
                                },
                                { timeout: c.Hb / 5 }
                            );
                    else {
                        this.telemetry.timeEnd(u.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                        let n = h(e),
                            r = null == n ? void 0 : n.timeRemaining();
                        null != r && this.telemetry.timeTrack(u.JV.DEADLINE_INITIAL_TIME_REMAINING, r), this._processWorkCallback(n);
                    }
                },
                { timeout: c.Hb }
            );
    }
    _scheduleRequestIdleCallback(e, n) {
        (this._flushIdleHandler = f((n) => {
            this._clearIdleCallback(), e(n);
        })),
            (null == n ? void 0 : n.timeout) != null && this._scheduleMaxIdleCallback(n.timeout);
    }
    _scheduleMaxIdleCallback(e) {
        null != this._flushIdleMaxTimeoutHandler && clearTimeout(this._flushIdleMaxTimeoutHandler),
            (this._flushIdleMaxTimeoutHandler = setTimeout(() => {
                this._clearIdleCallback(), this._processWorkCallback();
            }, e));
    }
    _clearIdleCallback() {
        null != this._flushIdleHandler && (p(this._flushIdleHandler), (this._flushIdleHandler = null)), null != this._flushIdleMaxTimeoutHandler && (clearTimeout(this._flushIdleMaxTimeoutHandler), (this._flushIdleMaxTimeoutHandler = null));
    }
    constructor() {
        super(),
            d(this, '_flushIdleMaxTimeoutHandler', null),
            o.Z.subscribe('WINDOW_VISIBILITY_CHANGE', (e) => {
                let { visible: n, windowId: r } = e;
                if (r === (0, s.UU)()) this._trackAppBackgrounded(!n);
            });
    }
}
function m() {
    return new _();
}
