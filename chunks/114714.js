n.d(t, { A: () => u });
var r = n(73153),
    i = n(272355),
    l = n(927813),
    a = n(4106),
    s = n(335934);
let o = null;
class c extends i.A {
    _initialize() {
        r.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        r.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        (0, s.HF)("ICYMIManager", !1) &&
            (!(function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                a.A.fetchDehydrated({ isInitialLoad: t }),
                    null != o && clearTimeout(o),
                    (o = setTimeout(() => e(), 15 * l.A.Millis.MINUTE));
            })(!0),
            a.A.getGuildChannelScores(),
            a.A.getRecommendedGuilds());
    }
}
let u = new c();
