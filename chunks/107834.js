n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(582754),
    d = n(397927),
    c = n(820284),
    u = n(490415),
    m = n(736653),
    g = n(742589),
    _ = n(876587),
    x = n(65470),
    A = n(400669),
    h = n(909536),
    p = n(287809),
    T = n(927578),
    f = n(652215),
    S = n(788868),
    E = n(985018),
    b = n(71971);
let C = r.Ay.connectStores([p.default], () => ({ user: p.default.getCurrentUser() }))(
    (0, u.A)((e) => {
        let { isAuthenticated: t, user: n } = e,
            l = (0, T.TW)(n, S.PremiumTypes.TIER_2),
            r = (0, m.Ay)(),
            u = (0, h.Gh)("nitro_home_header"),
            p = s.useRef(null);
        return (0, i.jsx)(c.A, {
            section: f.JJy.NAVIGATION,
            children: (0, i.jsx)(d.NPJ, {
                theme: r,
                children: (e) =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(g.A, {
                                isAuthenticated: t,
                                className: a()(e, { [b.xD]: !l && !(0, o.Mw)(r), [b.lO]: !l && (0, o.Mw)(r) }),
                                toolbar: u
                                    ? (0, i.jsxs)("div", {
                                          className: b.fI,
                                          children: [
                                              (0, i.jsx)(A.l, { ref: p, size: "sm", className: b.ij }),
                                              (0, i.jsx)(x.A, { variant: "secondary", size: "sm" }),
                                          ],
                                      })
                                    : void 0,
                                role: "navigation",
                                children: [
                                    (0, i.jsx)(g.A.Icon, {
                                        icon: d.tvc,
                                        "aria-hidden": !0,
                                        color: l ? void 0 : d.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                                    }),
                                    (0, i.jsx)(g.A.Title, { children: E.intl.string(E.t.Ipxkog) }),
                                ],
                            }),
                            u && (0, i.jsx)(_.O, { targetElementRef: p }),
                        ],
                    }),
            }),
        });
    }),
);
