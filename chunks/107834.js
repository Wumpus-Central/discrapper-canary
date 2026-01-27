n.d(t, {
    A: () => b,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(582754),
    o = n(397927),
    c = n(820284),
    d = n(490415),
    u = n(736653),
    _ = n(742589),
    p = n(287809),
    m = n(927578),
    g = n(652215),
    A = n(788868),
    f = n(985018),
    h = n(187585);
let b = s.Ay.connectStores([p.default], () => ({
    user: p.default.getCurrentUser(),
}))(
    (0, d.A)((e) => {
        let { isAuthenticated: t, user: n } = e,
            i = (0, m.TW)(n, A.PremiumTypes.TIER_2),
            s = (0, u.Ay)();
        return (0, r.jsx)(c.A, {
            section: g.JJy.NAVIGATION,
            children: (0, r.jsx)(o.NPJ, {
                theme: s,
                children: (e) =>
                    (0, r.jsxs)(_.A, {
                        isAuthenticated: t,
                        className: l()(e, {
                            [h.xD]: !i && !(0, a.Mw)(s),
                            [h.lO]: !i && (0, a.Mw)(s),
                        }),
                        role: "navigation",
                        children: [
                            (0, r.jsx)(_.A.Icon, {
                                icon: o.tvc,
                                "aria-hidden": !0,
                                color: i ? void 0 : o.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                            }),
                            (0, r.jsx)(_.A.Title, {
                                children: f.intl.string(f.t.Ipxkog),
                            }),
                        ],
                    }),
            }),
        });
    }),
);
