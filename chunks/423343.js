r.d(n, {
    K: function () {
        return d;
    }
});
var i = r(653041);
var a = r(392711),
    o = r.n(a),
    s = r(379649),
    l = r(126168),
    u = r(981631);
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
class d {
    reset(e) {
        (this.current = null), (this.history = []), null != e && this.update(e);
    }
    update(e) {
        this.current !== e &&
            ((this.current = e),
            this.history.push({
                state: e,
                startTime: (0, s.zO)()
            }));
    }
    getVoiceConnectionSuccessStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.zO)(),
            n = this.getStateDurations(e),
            r = (e) => o().sumBy(n, (n) => (n.state === e ? n.durationMs : 0));
        return {
            state_awaiting_endpoint_ms: r(u.hes.AWAITING_ENDPOINT),
            state_authenticating_ms: r(u.hes.AUTHENTICATING),
            state_connecting_ms: r(u.hes.CONNECTING),
            state_disconnected_ms: r(u.hes.DISCONNECTED),
            state_ice_checking_ms: r(u.hes.ICE_CHECKING),
            state_no_route_ms: r(u.hes.NO_ROUTE),
            state_rtc_connecting_ms: r(u.hes.RTC_CONNECTING),
            state_rtc_disconnected_ms: r(u.hes.RTC_DISCONNECTED)
        };
    }
    getStateDurations(e) {
        if (0 === this.history.length) return [];
        let n = (0, l.Z)(this.history, (e, n) => ({
                state: e.state,
                durationMs: n.startTime - e.startTime
            })),
            r = () => {
                let n = o().last(this.history);
                return {
                    state: n.state,
                    durationMs: e - n.startTime
                };
            };
        return n.push(r()), n;
    }
    constructor(e) {
        c(this, 'current', null), c(this, 'history', []), null != e && this.update(e);
    }
}
