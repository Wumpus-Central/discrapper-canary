n.d(t, { l: () => h });
var r,
    i,
    o = n(570140),
    a = n(830917),
    s = n(692401),
    l = n(459005),
    c = n(398463);
function u(e, t, n) {
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
let d =
        null != (r = window.requestIdleCallback)
            ? r
            : (e) => {
                  let t = Date.now();
                  return setTimeout(() => {
                      e({
                          didTimeout: !1,
                          timeRemaining() {
                              let e = Date.now() - t;
                              return Math.max(0, c.Ls - e);
                          }
                      });
                  }, 1);
              },
    f = null != (i = window.cancelIdleCallback) ? i : clearTimeout;
function _(e) {
    return null == e ? new c.Lj(c.HO, !0) : new c.Lj(e.timeRemaining(), e.didTimeout);
}
class p extends s.W {
    _queueIdleCallback() {
        if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
        this.telemetry.time(l.JV.TIME_TO_FIRE_IDLE_CALLBACK),
            this._scheduleRequestIdleCallback(
                (e) => {
                    var t;
                    if (null == e ? void 0 : e.didTimeout) {
                        this.telemetry.track(l.ug.FIRED_DUE_TO_MAX_TIMEOUT), this.telemetry.clearTime(l.JV.TIME_TO_FIRE_IDLE_CALLBACK), this._processWorkCallback();
                        return;
                    }
                    if ((this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK), (null != (t = null == e ? void 0 : e.timeRemaining()) ? t : c.HO) < c.HO))
                        this.telemetry.time(l.JV.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._scheduleRequestIdleCallback(
                                (e) => {
                                    this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                                    let t = _(e),
                                        n = null == t ? void 0 : t.timeRemaining();
                                    null != n && this.telemetry.timeTrack(l.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t);
                                },
                                { timeout: c.Hb / 5 }
                            );
                    else {
                        this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                        let t = _(e),
                            n = null == t ? void 0 : t.timeRemaining();
                        null != n && this.telemetry.timeTrack(l.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t);
                    }
                },
                { timeout: c.Hb }
            );
    }
    _scheduleRequestIdleCallback(e, t) {
        (this._flushIdleHandler = d((t) => {
            this._clearIdleCallback(), e(t);
        })),
            (null == t ? void 0 : t.timeout) != null && this._scheduleMaxIdleCallback(t.timeout);
    }
    _scheduleMaxIdleCallback(e) {
        null != this._flushIdleMaxTimeoutHandler && clearTimeout(this._flushIdleMaxTimeoutHandler),
            (this._flushIdleMaxTimeoutHandler = setTimeout(() => {
                this._clearIdleCallback(), this._processWorkCallback();
            }, e));
    }
    _clearIdleCallback() {
        null != this._flushIdleHandler && (f(this._flushIdleHandler), (this._flushIdleHandler = null)), null != this._flushIdleMaxTimeoutHandler && (clearTimeout(this._flushIdleMaxTimeoutHandler), (this._flushIdleMaxTimeoutHandler = null));
    }
    constructor() {
        super(),
            u(this, '_flushIdleMaxTimeoutHandler', null),
            o.Z.subscribe('WINDOW_VISIBILITY_CHANGE', (e) => {
                let { visible: t, windowId: n } = e;
                n === (0, a.UU)() && this._trackAppBackgrounded(!t);
            });
    }
}
function h() {
    return new p();
}
