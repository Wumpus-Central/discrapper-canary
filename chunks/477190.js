var a = n(477900);
n(582128);
var r = n(855986),
    i = n(192308),
    l = n(477782),
    c = n(576705),
    d = n(652215),
    s = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                h = (0, r.bG)([c.A], () => c.A.can(d.xBc.MANAGE_CHANNELS, e), [e]);
            if (__OVERLAY__ || !h) return null;
            let _ = () => {
                (0, i.mM)(async () => {
                    let { default: t } = await Promise.all([
                        n.e(377476),
                        n.e(597622),
                        n.e(746309),
                        n.e(778799),
                        n.e(844780),
                        n.e(470068),
                        n.e(203589),
                        n.e(692513),
                        n.e(460773),
                        n.e(208018),
                        n.e(589916),
                        n.e(298107),
                        n.e(526778),
                        n.e(590814),
                        n.e(258709),
                        n.e(819193),
                        n.e(507775),
                        n.e(102657),
                        n.e(524521),
                        n.e(358608),
                        n.e(637038),
                        n.e(640317),
                    ]).then(n.bind(n, 410380));
                    return (n) => (0, a.jsx)(t, { ...n, channelType: u, guildId: e.guild_id, categoryId: e.parent_id });
                });
            };
            switch (u) {
                case d.rbe.GUILD_TEXT:
                    return (0, a.jsx)(l.Dr, { id: "create-text-channel", label: s.intl.string(s.t.HHkTJP), action: _ });
                case d.rbe.GUILD_VOICE:
                    return (0, a.jsx)(l.Dr, {
                        id: "create-voice-channel",
                        label: s.intl.string(s.t.AlbZaI),
                        action: _,
                    });
                default:
                    return null;
            }
        },
    },
);
