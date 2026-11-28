var r = l(477900);
l(582128);
var t = l(855986),
    a = l(477782),
    i = l(597798),
    u = l(47167),
    o = l(713654),
    d = l(734057),
    s = l(71393),
    c = l(576705),
    p = l(994500),
    h = l(309010),
    g = l(287809),
    A = l(977997),
    f = l(652215),
    m = l(313855),
    v = l(792996);
let x = { channelId: null, channelName: null, channel: null, guild: null, canJoin: !1, isAlreadyConnected: !1 };
l.d(
    n,
    {},
    {
        A: function (e) {
            let {
                channelId: n,
                channelName: l,
                channel: b,
                guild: j,
                canJoin: C,
                isAlreadyConnected: I,
            } = (0, t.cf)(
                [A.A, d.A, h.Ay, g.default, p.A, s.A, c.A],
                () => {
                    let n = A.A.getDiscoverableVoiceStateForUser(e);
                    if (null == n) return x;
                    let l = d.A.getChannel(n.channelId);
                    if (null == l || !l.isVocal()) return x;
                    let r = l.getGuildId?.() ?? null,
                        t = null != r ? s.A.getGuild(r) : null,
                        a = h.Ay.getVoiceChannelId() === l.id,
                        i = l.isPrivate() || c.A.can(f.xBc.CONNECT, l);
                    return {
                        channelId: l.id,
                        channelName: (0, u.m1)(l, g.default, p.A),
                        channel: l,
                        guild: t,
                        canJoin: i,
                        isAlreadyConnected: a,
                    };
                },
                [e],
            );
            if (null == n || !C || I) return null;
            let D = (0, o.gU)(b, j ?? void 0);
            return (0, r.jsx)(a.Dr, {
                id: "join-user-voice-channel",
                void_label: v.intl.format(m.default["4l56iz"], {
                    channelName: l ?? n,
                    channelIcon: () => (null != D ? (0, r.jsx)(D, { size: "xxs", color: "currentColor" }) : null),
                }),
                action: () => {
                    i.default.selectVoiceChannel(n);
                },
            });
        },
    },
);
