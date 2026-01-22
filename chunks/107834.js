n.d(t, { A: () => y });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(582754),
    l = n(397927),
    c = n(820284),
    u = n(490415),
    d = n(736653),
    f = n(742589),
    p = n(287809),
    _ = n(927578),
    h = n(652215),
    m = n(788868),
    g = n(985018),
    E = n(187585);
let b = (e) => {
        let { isAuthenticated: t, user: n } = e,
            i = (0, _.TW)(n, m.PremiumTypes.TIER_2),
            s = (0, d.Ay)();
        return (0, r.jsx)(c.A, {
            section: h.JJy.NAVIGATION,
            children: (0, r.jsx)(l.NPJ, {
                theme: s,
                children: (e) =>
                    (0, r.jsxs)(f.A, {
                        isAuthenticated: t,
                        className: a()(e, {
                            [E.xD]: !i && !(0, o.Mw)(s),
                            [E.lO]: !i && (0, o.Mw)(s),
                        }),
                        role: "navigation",
                        children: [
                            (0, r.jsx)(f.A.Icon, {
                                icon: l.tvc,
                                "aria-hidden": !0,
                                color: i ? void 0 : l.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                            }),
                            (0, r.jsx)(f.A.Title, { children: g.intl.string(g.t.Ipxkog) }),
                        ],
                    }),
            }),
        });
    },
    y = s.Ay.connectStores([p.default], () => ({ user: p.default.getCurrentUser() }))((0, u.A)(b));
