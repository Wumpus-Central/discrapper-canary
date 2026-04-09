n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(956793),
    d = n(47167),
    s = n(713654),
    u = n(734057),
    o = n(71393),
    c = n(576705),
    A = n(994500),
    g = n(309010),
    f = n(287809),
    h = n(977997),
    E = n(652215),
    I = n(822889),
    p = n(985018);
let v = { channelId: null, channelName: null, channel: null, guild: null, canJoin: !1, isAlreadyConnected: !1 };
function _(e) {
    let {
        channelId: t,
        channelName: n,
        channel: _,
        guild: x,
        canJoin: b,
        isAlreadyConnected: S,
    } = (0, i.cf)([h.A, u.A, g.A, f.default, A.A, o.A, c.A], () => {
        let t = h.A.getDiscoverableVoiceStateForUser(e);
        if (null == t) return v;
        let n = u.A.getChannel(t.channelId);
        if (null == n || !n.isVocal()) return v;
        let r = n.getGuildId?.() ?? null,
            i = null != r ? o.A.getGuild(r) : null,
            l = g.A.getVoiceChannelId() === n.id,
            a = n.isPrivate() || c.A.can(E.xBc.CONNECT, n);
        return {
            channelId: n.id,
            channelName: (0, d.m1)(n, f.default, A.A),
            channel: n,
            guild: i,
            canJoin: a,
            isAlreadyConnected: l,
        };
    }, [e]);
    if (null == t || !b || S) return null;
    let y = (0, s.gU)(_, x ?? void 0);
    return (0, r.jsx)(l.Drp, {
        id: "join-user-voice-channel",
        void_label: p.intl.format(I.default["4l56iz"], {
            channelName: n ?? t,
            channelIcon: () => (null != y ? (0, r.jsx)(y, { size: "xxs", color: "currentColor" }) : null),
        }),
        action: () => {
            a.default.selectVoiceChannel(t);
        },
    });
}
