n.d(t, { A: () => E });
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
    g = n(65470),
    _ = n(400669),
    x = n(909536),
    A = n(287809),
    h = n(927578),
    p = n(652215),
    T = n(788868),
    f = n(985018),
    S = n(670324);
let E = a.Ay.connectStores([A.default], () => ({ user: A.default.getCurrentUser() }))(
    (0, c.A)((e) => {
        let { isAuthenticated: t, user: n } = e,
            s = (0, h.TW)(n, T.PremiumTypes.TIER_2),
            a = (0, u.Ay)(),
            c = (0, x.Gh)("nitro_home_header");
        return (0, i.jsx)(d.A, {
            section: p.JJy.NAVIGATION,
            children: (0, i.jsx)(o.NPJ, {
                theme: a,
                children: (e) =>
                    (0, i.jsxs)(m.A, {
                        isAuthenticated: t,
                        className: l()(e, { [S.xD]: !s && !(0, r.Mw)(a), [S.lO]: !s && (0, r.Mw)(a) }),
                        toolbar: c
                            ? (0, i.jsxs)("div", {
                                  className: S.fI,
                                  children: [
                                      (0, i.jsx)(_.l, { size: "sm", className: S.ij }),
                                      (0, i.jsx)(g.A, { variant: "secondary", size: "sm" }),
                                  ],
                              })
                            : void 0,
                        role: "navigation",
                        children: [
                            (0, i.jsx)(m.A.Icon, {
                                icon: o.tvc,
                                "aria-hidden": !0,
                                color: s ? void 0 : o.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                            }),
                            (0, i.jsx)(m.A.Title, { children: f.intl.string(f.t.Ipxkog) }),
                        ],
                    }),
            }),
        });
    }),
);
