s.d(t, { A: () => v });
var a = s(627968),
    r = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(17928),
    o = s(462887),
    c = s(43990),
    d = s(403581),
    m = s(661531),
    u = s(820284),
    _ = s(490415),
    x = s(736653),
    p = s(793574),
    g = s(742589),
    h = s(876587),
    f = s(65470),
    C = s(400669),
    b = s(909536),
    j = s(287809),
    A = s(927578),
    N = s(652215),
    I = s(788868),
    T = s(985018),
    E = s(50596);
let v = l.Ay.connectStores([j.default], () => ({ user: j.default.getCurrentUser() }))(
    (0, _.A)((e) => {
        let { isAuthenticated: t, user: s } = e,
            i = (0, A.TW)(s, I.PremiumTypes.TIER_2),
            l = (0, x.Ay)(),
            _ = (0, b.Gh)("nitro_home_header"),
            j = r.useRef(null);
        return (0, a.jsx)(u.A, {
            section: N.JJy.NAVIGATION,
            children: (0, a.jsx)(c.N, {
                theme: l,
                children: (e) =>
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsxs)(g.A, {
                                isAuthenticated: t,
                                className: n()(e, { [E.xD]: !i && !(0, o.M)(l), [E.lO]: !i && (0, o.M)(l) }),
                                toolbar: _
                                    ? (0, a.jsxs)("div", {
                                          className: E.fI,
                                          children: [
                                              (0, a.jsx)(C.l, {
                                                  ref: j,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  location: p.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                              }),
                                              (0, a.jsx)(f.A, { variant: "secondary", size: "sm" }),
                                          ],
                                      })
                                    : void 0,
                                role: "navigation",
                                children: [
                                    (0, a.jsx)(g.A.Icon, {
                                        icon: d.t,
                                        "aria-hidden": !0,
                                        color: i ? void 0 : m.A.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                                    }),
                                    (0, a.jsx)(g.A.Title, { children: T.intl.string(T.t.Ipxkog) }),
                                ],
                            }),
                            _ && i && (0, a.jsx)(h.O, { targetElementRef: j }),
                        ],
                    }),
            }),
        });
    }),
);
