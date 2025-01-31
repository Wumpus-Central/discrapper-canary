n.d(t, { l: () => h });
var i,
    r,
    a = n(570140),
    s = n(830917),
    o = n(692401),
    l = n(459005),
    u = n(398463);
function c(e, t, n) {
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
        null !== (i = window.requestIdleCallback) && void 0 !== i
            ? i
            : (e) => {
                  let t = Date.now();
                  return setTimeout(() => {
                      e({
                          didTimeout: !1,
                          timeRemaining() {
                              let e = Date.now() - t;
                              return Math.max(0, u.Ls - e);
                          }
                      });
                  }, 1);
              },
    f = null !== (r = window.cancelIdleCallback) && void 0 !== r ? r : clearTimeout;
function _(e) {
    return null == e ? new u.Lj(u.HO, !0) : new u.Lj(e.timeRemaining(), e.didTimeout);
}
class p extends o.W {
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
                    if ((this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK), (null !== (t = null == e ? void 0 : e.timeRemaining()) && void 0 !== t ? t : u.HO) < u.HO))
                        this.telemetry.time(l.JV.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._scheduleRequestIdleCallback(
                                (e) => {
                                    this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                                    let t = _(e),
                                        n = null == t ? void 0 : t.timeRemaining();
                                    null != n && this.telemetry.timeTrack(l.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t);
                                },
                                { timeout: u.Hb / 5 }
                            );
                    else {
                        this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                        let t = _(e),
                            n = null == t ? void 0 : t.timeRemaining();
                        null != n && this.telemetry.timeTrack(l.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t);
                    }
                },
                { timeout: u.Hb }
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
            c(this, '_flushIdleMaxTimeoutHandler', null),
            a.Z.subscribe('WINDOW_VISIBILITY_CHANGE', (e) => {
                let { visible: t, windowId: n } = e;
                n === (0, s.UU)() && this._trackAppBackgrounded(!t);
            });
    }
}
function h() {
    return new p();
}
