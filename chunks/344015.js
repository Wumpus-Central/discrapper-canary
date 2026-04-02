t.d(n, { A: () => I });
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(956793),
    d = t(713654),
    s = t(734057),
    u = t(71393),
    o = t(576705),
    c = t(309010),
    A = t(977997),
    g = t(652215),
    f = t(822889),
    h = t(985018);
let E = { channelId: null, channelName: null, channel: null, guild: null, canJoin: !1, isAlreadyConnected: !1 };
function I(e) {
    let {
        channelId: n,
        channelName: t,
        channel: I,
        guild: p,
        canJoin: v,
        isAlreadyConnected: _,
    } = (0, i.cf)([A.A, s.A, u.A, o.A, c.A], () => {
        let n = A.A.getDiscoverableVoiceStateForUser(e);
        if (null == n) return E;
        let t = s.A.getChannel(n.channelId);
        if (null == t || !t.isVocal()) return E;
        let r = t.getGuildId?.() ?? null,
            i = null != r ? u.A.getGuild(r) : null,
            l = c.A.getVoiceChannelId() === t.id,
            a = t.isPrivate() || o.A.can(g.xBc.CONNECT, t);
        return { channelId: t.id, channelName: t.name, channel: t, guild: i, canJoin: a, isAlreadyConnected: l };
    }, [e]);
    if (null == n || !v || _) return null;
    let x = (0, d.gU)(I, p ?? void 0);
    return (0, r.jsx)(l.Drp, {
        id: "join-user-voice-channel",
        void_label: h.intl.format(f.default["4l56iz"], {
            channelName: t ?? n,
            channelIcon: () => (null != x ? (0, r.jsx)(x, { size: "xxs", color: "currentColor" }) : null),
        }),
        action: () => {
            a.default.selectVoiceChannel(n);
        },
    });
}
