n.d(t, { u: () => m });
var i = n(627968),
    s = n(397927),
    l = n(975807),
    r = n(95035),
    a = n(975662),
    o = n(88001),
    d = n(519412),
    c = n(985018),
    u = n(817577);
let _ = () => {
        (0, l.A)(o.TE);
    },
    m = () => ({
        name: a.U.PREMIUM_GROUP,
        title: c.intl.string(d.default.YkvksF),
        subtitle: c.intl.formatToPlainString(d.default.JlyGQj, {
            totalSeats: o.aw,
            premiumGroupProductName: (0, o.DP)(),
        }),
        description: (0, i.jsx)(r.A, { onClick: _, children: c.intl.string(d.default.yYyGJH) }),
        descriptionCta: c.intl.string(c.t.jVcuVY),
        pillText: c.intl.string(c.t.oW0eUd).toLocaleUpperCase(),
        perkImage: u,
        onCtaClick: () => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
    });
