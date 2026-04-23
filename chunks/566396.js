n.d(t, { A: () => I });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(956793),
    d = n(47167),
    s = n(713654),
    o = n(734057),
    u = n(71393),
    c = n(576705),
    A = n(994500),
    g = n(309010),
    f = n(287809),
    b = n(977997),
    E = n(652215),
    v = n(499214),
    h = n(985018);
let x = { channelId: null, channelName: null, channel: null, guild: null, canJoin: !1, isAlreadyConnected: !1 };
function I(e) {
    let {
        channelId: t,
        channelName: n,
        channel: I,
        guild: m,
        canJoin: p,
        isAlreadyConnected: D,
    } = (0, i.cf)([b.A, o.A, g.A, f.default, A.A, u.A, c.A], () => {
        let t = b.A.getDiscoverableVoiceStateForUser(e);
        if (null == t) return x;
        let n = o.A.getChannel(t.channelId);
        if (null == n || !n.isVocal()) return x;
        let l = n.getGuildId?.() ?? null,
            i = null != l ? u.A.getGuild(l) : null,
            r = g.A.getVoiceChannelId() === n.id,
            a = n.isPrivate() || c.A.can(E.xBc.CONNECT, n);
        return {
            channelId: n.id,
            channelName: (0, d.m1)(n, f.default, A.A),
            channel: n,
            guild: i,
            canJoin: a,
            isAlreadyConnected: r,
        };
    }, [e]);
    if (null == t || !p || D) return null;
    let N = (0, s.gU)(I, m ?? void 0);
    return (0, l.jsx)(r.Dr, {
        id: "join-user-voice-channel",
        void_label: h.intl.format(v.default["4l56iz"], {
            channelName: n ?? t,
            channelIcon: () => (null != N ? (0, l.jsx)(N, { size: "xxs", color: "currentColor" }) : null),
        }),
        action: () => {
            a.default.selectVoiceChannel(t);
        },
    });
}
