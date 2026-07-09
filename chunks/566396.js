l.d(n, { A: () => b });
var r = l(627968);
l(64700);
var a = l(17928),
    t = l(477782),
    i = l(730852),
    o = l(47167),
    u = l(713654),
    d = l(734057),
    s = l(71393),
    c = l(576705),
    p = l(994500),
    h = l(309010),
    g = l(287809),
    A = l(977997),
    m = l(652215),
    f = l(21197),
    v = l(375708);
let x = { channelId: null, channelName: null, channel: null, guild: null, canJoin: !1, isAlreadyConnected: !1 };
function b(e) {
    let {
        channelId: n,
        channelName: l,
        channel: b,
        guild: j,
        canJoin: C,
        isAlreadyConnected: I,
    } = (0, a.cf)([A.A, d.A, h.A, g.default, p.A, s.A, c.A], () => {
        let n = A.A.getDiscoverableVoiceStateForUser(e);
        if (null == n) return x;
        let l = d.A.getChannel(n.channelId);
        if (null == l || !l.isVocal()) return x;
        let r = l.getGuildId?.() ?? null,
            a = null != r ? s.A.getGuild(r) : null,
            t = h.A.getVoiceChannelId() === l.id,
            i = l.isPrivate() || c.A.can(m.xBc.CONNECT, l);
        return {
            channelId: l.id,
            channelName: (0, o.m1)(l, g.default, p.A),
            channel: l,
            guild: a,
            canJoin: i,
            isAlreadyConnected: t,
        };
    }, [e]);
    if (null == n || !C || I) return null;
    let G = (0, u.gU)(b, j ?? void 0);
    return (0, r.jsx)(t.Dr, {
        id: "join-user-voice-channel",
        void_label: v.intl.format(f.default["4l56iz"], {
            channelName: l ?? n,
            channelIcon: () => (null != G ? (0, r.jsx)(G, { size: "xxs", color: "currentColor" }) : null),
        }),
        action: () => {
            i.default.selectVoiceChannel(n);
        },
    });
}
