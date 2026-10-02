n.d(t, { CH: () => S, jA: () => O, cy: () => N, av: () => C });
var i = n(66834),
    r = n(730852),
    a = n(401843),
    s = n(389234),
    l = n(652896),
    o = n(854492),
    d = n(616356),
    c = n(734057),
    u = n(71393),
    _ = n(576705),
    E = n(309010),
    A = n(993838),
    h = n(233993),
    I = n(73153),
    f = n(272355),
    p = n(967198),
    T = n(403362);
class g extends f.A {
    _initialize() {
        (I.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            I.h.subscribe("LOGOUT", this.handleLogout));
    }
    _terminate() {
        (I.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            I.h.unsubscribe("LOGOUT", this.handleLogout));
    }
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, guildId: n } = e;
        if (null != t) {
            let e = c.A.getChannel(t);
            if (null == e || e.isGuildStageVoice()) return;
        }
        (this.terminate(), this.handleDisconnectFromStageChannel(null == t ? null : (n ?? null)));
    };
    handleDisconnectFromStageChannel = (e) => {
        let t = p.A.getGuildId();
        (0, o.A)([t, e].filter(T.Vq));
    };
    handleLogout = () => {
        (this.terminate(), this.handleDisconnectFromStageChannel(null));
    };
}
let m = new g();
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (r) => {
        let a = c.A.getChannel(t);
        if (null != a) return (N(a, n), r(a));
        (await (0, o.A)([e]),
            await i.A.joinGuild(e, { lurker: !0 }),
            u.A.addConditionalChangeListener(() => {
                let e = c.A.getChannel(t);
                return null == e || (N(e), m.initialize(), r(e), !1);
            }));
    });
}
function N(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = E.Ay.getVoiceChannelId();
    if (
        (!n && ((t = i), !_.A.can(h.Gk, e) || (A.j6(e.id) && t !== e.id && (A.W0(e, () => C(e, !0)), 1)))) ||
        (r.default.selectVoiceChannel(e.id), (i = E.Ay.getVoiceChannelId()) !== e.id)
    )
        return !1;
    let s = d.A.getAllApplicationStreamsForChannel(e.id).find((e) => !d.A.isStreamMarkedFull((0, l._z)(e)));
    return (null != s && (0, a.A9)(s, { noFocus: !1 }), !0);
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = E.Ay.getVoiceChannelId();
    (!i && r !== e.id && (0, s.H)(e) && A.E9(e, () => C(e, t, n, !0))) || (N(e, t) && O(e, r));
}
function O(e, t) {
    A.jA(e, t);
}
