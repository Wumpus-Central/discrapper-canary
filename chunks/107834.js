s.d(t, { A: () => E });
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(311907),
    o = s(462887),
    c = s(43990),
    d = s(403581),
    m = s(827734),
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
    v = s(50596);
let E = l.Ay.connectStores([j.default], () => ({ user: j.default.getCurrentUser() }))(
    (0, _.A)((e) => {
        let { isAuthenticated: t, user: s } = e,
            i = (0, A.TW)(s, I.PremiumTypes.TIER_2),
            l = (0, x.Ay)(),
            _ = (0, b.Gh)("nitro_home_header"),
            j = a.useRef(null);
        return (0, r.jsx)(u.A, {
            section: N.JJy.NAVIGATION,
            children: (0, r.jsx)(c.N, {
                theme: l,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(g.A, {
                                isAuthenticated: t,
                                className: n()(e, { [v.xD]: !i && !(0, o.M)(l), [v.lO]: !i && (0, o.M)(l) }),
                                toolbar: _
                                    ? (0, r.jsxs)("div", {
                                          className: v.fI,
                                          children: [
                                              (0, r.jsx)(C.l, {
                                                  ref: j,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  location: p.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                              }),
                                              (0, r.jsx)(f.A, { variant: "secondary", size: "sm" }),
                                          ],
                                      })
                                    : void 0,
                                role: "navigation",
                                children: [
                                    (0, r.jsx)(g.A.Icon, {
                                        icon: d.t,
                                        "aria-hidden": !0,
                                        color: i ? void 0 : m.A.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                                    }),
                                    (0, r.jsx)(g.A.Title, { children: T.intl.string(T.t.Ipxkog) }),
                                ],
                            }),
                            _ && i && (0, r.jsx)(h.O, { targetElementRef: j }),
                        ],
                    }),
            }),
        });
    }),
);
