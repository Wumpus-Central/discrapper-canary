var i = t(477900);
t(582128);
var l = t(789645),
    s = t(387755),
    a = t(149468),
    r = t(688810),
    o = t(129230),
    c = t(693409),
    u = t(652215),
    d = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channel: n, ...t } = e,
                { parentAnalyticsLocation: A } = (0, r.Ay)();
            return (0, i.jsx)(c.l, {
                ...t,
                iconComponent: l.XSmallIcon,
                label: d.intl.string(d.t.WAI6xu),
                onClick: function () {
                    (o.default.track(u.HAw.RING_CALL_DECLINED, { location: A, guild_id: n.guild_id, ...(0, a.dI)(n) }),
                        s.A.stopRinging(n.id));
                },
            });
        },
    },
);
