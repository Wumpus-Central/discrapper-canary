n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(582754),
    d = n(397927),
    c = n(820284),
    u = n(490415),
    m = n(736653),
    g = n(793574),
    _ = n(742589),
    x = n(876587),
    h = n(65470),
    A = n(400669),
    p = n(909536),
    T = n(287809),
    f = n(927578),
    S = n(652215),
    E = n(788868),
    b = n(985018),
    C = n(50596);
let v = a.Ay.connectStores([T.default], () => ({ user: T.default.getCurrentUser() }))(
    (0, u.A)((e) => {
        let { isAuthenticated: t, user: n } = e,
            l = (0, f.TW)(n, E.PremiumTypes.TIER_2),
            a = (0, m.Ay)(),
            u = (0, p.Gh)("nitro_home_header"),
            T = s.useRef(null);
        return (0, i.jsx)(c.A, {
            section: S.JJy.NAVIGATION,
            children: (0, i.jsx)(d.NPJ, {
                theme: a,
                children: (e) =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(_.A, {
                                isAuthenticated: t,
                                className: r()(e, { [C.xD]: !l && !(0, o.Mw)(a), [C.lO]: !l && (0, o.Mw)(a) }),
                                toolbar: u
                                    ? (0, i.jsxs)("div", {
                                          className: C.fI,
                                          children: [
                                              (0, i.jsx)(A.l, {
                                                  ref: T,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  location: g.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                              }),
                                              (0, i.jsx)(h.A, { variant: "secondary", size: "sm" }),
                                          ],
                                      })
                                    : void 0,
                                role: "navigation",
                                children: [
                                    (0, i.jsx)(_.A.Icon, {
                                        icon: d.tvc,
                                        "aria-hidden": !0,
                                        color: l ? void 0 : d.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                                    }),
                                    (0, i.jsx)(_.A.Title, { children: b.intl.string(b.t.Ipxkog) }),
                                ],
                            }),
                            u && l && (0, i.jsx)(x.O, { targetElementRef: T }),
                        ],
                    }),
            }),
        });
    }),
);
