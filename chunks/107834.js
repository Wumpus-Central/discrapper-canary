s.d(t, { A: () => E });
var i = s(627968),
    l = s(64700),
    n = s(17928),
    a = s(43990),
    r = s(403581),
    c = s(820284),
    o = s(490415),
    d = s(736653),
    u = s(793574),
    m = s(742589),
    x = s(876587),
    p = s(65470),
    h = s(400669),
    g = s(909536),
    j = s(287809),
    f = s(428262),
    N = s(652215),
    A = s(788868),
    _ = s(375708),
    C = s(50596);
let E = n.Ay.connectStores([j.default], () => ({ user: j.default.getCurrentUser() }))(
    (0, o.A)((e) => {
        let { isAuthenticated: t, user: s } = e,
            n = (0, f.TW)(s, A.PremiumTypes.TIER_2),
            o = (0, d.Ay)(),
            j = (0, g.Gh)("nitro_home_header"),
            E = l.useRef(null);
        return (0, i.jsx)(c.A, {
            section: N.JJy.NAVIGATION,
            children: (0, i.jsx)(a.N, {
                theme: o,
                children: (e) =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(m.A, {
                                isAuthenticated: t,
                                className: e,
                                toolbar: j
                                    ? (0, i.jsxs)("div", {
                                          className: C.fI,
                                          children: [
                                              (0, i.jsx)(h.l, {
                                                  ref: E,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  location: u.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                              }),
                                              (0, i.jsx)(p.A, { variant: "secondary", size: "sm" }),
                                          ],
                                      })
                                    : void 0,
                                role: "navigation",
                                children: [
                                    (0, i.jsx)(m.A.Icon, { icon: r.t, "aria-hidden": !0 }),
                                    (0, i.jsx)(m.A.Title, { children: _.intl.string(_.t.Ipxkog) }),
                                ],
                            }),
                            j && n && (0, i.jsx)(x.O, { targetElementRef: E, body: _.intl.string(_.t.EqUw7K) }),
                        ],
                    }),
            }),
        });
    }),
);
