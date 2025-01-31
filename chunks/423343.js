n.d(t, { K: () => u }), n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(379649),
    s = n(126168),
    o = n(981631);
function l(e, t, n) {
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
class u {
    reset(e) {
        (this.current = null), (this.history = []), null != e && this.update(e);
    }
    update(e) {
        this.current !== e &&
            ((this.current = e),
            this.history.push({
                state: e,
                startTime: (0, a.zO)()
            }));
    }
    getVoiceConnectionSuccessStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.zO)(),
            t = this.getStateDurations(e),
            n = (e) => r().sumBy(t, (t) => (t.state === e ? t.durationMs : 0));
        return {
            state_awaiting_endpoint_ms: n(o.hes.AWAITING_ENDPOINT),
            state_authenticating_ms: n(o.hes.AUTHENTICATING),
            state_connecting_ms: n(o.hes.CONNECTING),
            state_disconnected_ms: n(o.hes.DISCONNECTED),
            state_ice_checking_ms: n(o.hes.ICE_CHECKING),
            state_no_route_ms: n(o.hes.NO_ROUTE),
            state_rtc_connecting_ms: n(o.hes.RTC_CONNECTING),
            state_rtc_disconnected_ms: n(o.hes.RTC_DISCONNECTED)
        };
    }
    getStateDurations(e) {
        if (0 === this.history.length) return [];
        let t = (0, s.Z)(this.history, (e, t) => ({
                state: e.state,
                durationMs: t.startTime - e.startTime
            })),
            n = () => {
                let t = r().last(this.history);
                return {
                    state: t.state,
                    durationMs: e - t.startTime
                };
            };
        return t.push(n()), t;
    }
    constructor(e) {
        l(this, 'current', null), l(this, 'history', []), null != e && this.update(e);
    }
}
