n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(311907),
    l = n(582754),
    o = n(397927),
    c = n(820284),
    d = n(490415),
    u = n(736653),
    _ = n(742589),
    m = n(287809),
    A = n(927578),
    g = n(652215),
    E = n(788868),
    h = n(985018),
    p = n(187585);
let C = a.Ay.connectStores([m.default], () => ({ user: m.default.getCurrentUser() }))(
    (0, d.A)((e) => {
        let { isAuthenticated: t, user: n } = e,
            s = (0, A.TW)(n, E.PremiumTypes.TIER_2),
            a = (0, u.Ay)();
        return (0, i.jsx)(c.A, {
            section: g.JJy.NAVIGATION,
            children: (0, i.jsx)(o.NPJ, {
                theme: a,
                children: (e) =>
                    (0, i.jsxs)(_.A, {
                        isAuthenticated: t,
                        className: r()(e, { [p.xD]: !s && !(0, l.Mw)(a), [p.lO]: !s && (0, l.Mw)(a) }),
                        role: "navigation",
                        children: [
                            (0, i.jsx)(_.A.Icon, {
                                icon: o.tvc,
                                "aria-hidden": !0,
                                color: s ? void 0 : o.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                            }),
                            (0, i.jsx)(_.A.Title, { children: h.intl.string(h.t.Ipxkog) }),
                        ],
                    }),
            }),
        });
    }),
);
