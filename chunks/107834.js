n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(582754),
    o = n(397927),
    d = n(820284),
    c = n(490415),
    u = n(736653),
    m = n(742589),
    g = n(287809),
    _ = n(927578),
    x = n(652215),
    A = n(788868),
    h = n(985018),
    p = n(670324);
let T = a.Ay.connectStores([g.default], () => ({ user: g.default.getCurrentUser() }))(
    (0, c.A)((e) => {
        let { isAuthenticated: t, user: n } = e,
            s = (0, _.TW)(n, A.PremiumTypes.TIER_2),
            a = (0, u.Ay)();
        return (0, i.jsx)(d.A, {
            section: x.JJy.NAVIGATION,
            children: (0, i.jsx)(o.NPJ, {
                theme: a,
                children: (e) =>
                    (0, i.jsxs)(m.A, {
                        isAuthenticated: t,
                        className: l()(e, { [p.xD]: !s && !(0, r.Mw)(a), [p.lO]: !s && (0, r.Mw)(a) }),
                        role: "navigation",
                        children: [
                            (0, i.jsx)(m.A.Icon, {
                                icon: o.tvc,
                                "aria-hidden": !0,
                                color: s ? void 0 : o.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                            }),
                            (0, i.jsx)(m.A.Title, { children: h.intl.string(h.t.Ipxkog) }),
                        ],
                    }),
            }),
        });
    }),
);
