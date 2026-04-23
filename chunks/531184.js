"use strict";
n.d(t, { M: () => l }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(499979),
    a = n(156482),
    o = n(652215);
class l {
    current = null;
    history = [];
    constructor(e) {
        null != e && this.update(e);
    }
    reset(e) {
        (this.current = null), (this.history = []), null != e && this.update(e);
    }
    update(e) {
        this.current !== e && ((this.current = e), this.history.push({ state: e, startTime: (0, s.tB)() }));
    }
    getVoiceConnectionSuccessStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.tB)(),
            t = this.getStateDurations(e),
            n = (e) => i().sumBy(t, (t) => (t.state === e ? t.durationMs : 0));
        return {
            state_awaiting_endpoint_ms: n(o.S7L.AWAITING_ENDPOINT),
            state_authenticating_ms: n(o.S7L.AUTHENTICATING),
            state_connecting_ms: n(o.S7L.CONNECTING),
            state_disconnected_ms: n(o.S7L.DISCONNECTED),
            state_ice_checking_ms: n(o.S7L.ICE_CHECKING),
            state_no_route_ms: n(o.S7L.NO_ROUTE),
            state_rtc_connecting_ms: n(o.S7L.RTC_CONNECTING),
            state_rtc_disconnected_ms: n(o.S7L.RTC_DISCONNECTED),
        };
    }
    getStateDurations(e) {
        if (0 === this.history.length) return [];
        let t = (0, a.A)(this.history, (e, t) => ({ state: e.state, durationMs: t.startTime - e.startTime })),
            n = () => {
                let t = i().last(this.history);
                return { state: t.state, durationMs: e - t.startTime };
            };
        return t.push(n()), t;
    }
}
