t.d(s, { A: () => E });
var i = t(627968),
    n = t(64700),
    a = t(17928),
    l = t(43990),
    r = t(403581),
    c = t(820284),
    o = t(736653),
    d = t(793574),
    m = t(742589),
    u = t(876587),
    x = t(65470),
    g = t(400669),
    h = t(909536),
    f = t(495544),
    N = t(287809),
    j = t(428262),
    p = t(652215),
    A = t(788868),
    v = t(375708),
    b = t(547876);
let E = a.Ay.connectStores([N.default], () => ({ user: N.default.getCurrentUser() }))(function (e) {
    let { user: s } = e,
        t = (0, a.bG)([f.default], () => f.default.isAuthenticated()),
        N = (0, j.TW)(s, A.PremiumTypes.TIER_2),
        E = (0, o.Ay)(),
        C = (0, h.Gh)("nitro_home_header"),
        I = n.useRef(null);
    return (0, i.jsx)(c.A, {
        section: p.JJy.NAVIGATION,
        children: (0, i.jsx)(l.N, {
            theme: E,
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(m.A, {
                            isAuthenticated: t,
                            className: e,
                            toolbar: C
                                ? (0, i.jsxs)("div", {
                                      className: b.fI,
                                      children: [
                                          (0, i.jsx)(g.l, {
                                              ref: I,
                                              size: "sm",
                                              variant: "secondary",
                                              location: d.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                          }),
                                          (0, i.jsx)(x.A, { variant: "secondary", size: "sm" }),
                                      ],
                                  })
                                : void 0,
                            role: "navigation",
                            children: [
                                (0, i.jsx)(m.A.Icon, { icon: r.t, "aria-hidden": !0 }),
                                (0, i.jsx)(m.A.Title, { children: v.intl.string(v.t.Ipxkog) }),
                            ],
                        }),
                        C && N && (0, i.jsx)(u.O, { targetElementRef: I, body: v.intl.string(v.t.EqUw7K) }),
                    ],
                }),
        }),
    });
});
