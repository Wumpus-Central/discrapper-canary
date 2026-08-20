s.d(t, { A: () => E });
var i = s(477900),
    n = s(582128),
    a = s(17928),
    l = s(43990),
    r = s(403581),
    c = s(820284),
    o = s(736653),
    d = s(793574),
    u = s(742589),
    m = s(876587),
    g = s(65470),
    x = s(400669),
    f = s(909536),
    p = s(280450),
    h = s(287809),
    N = s(158045),
    A = s(652215),
    j = s(202541),
    b = s(375708),
    C = s(906367);
let E = a.Ay.connectStores([h.default], () => ({ user: h.default.getCurrentUser() }))(function (e) {
    let { user: t } = e,
        s = (0, a.bG)([p.default], () => p.default.isAuthenticated()),
        h = (0, N.TW)(t, j.PremiumTypes.TIER_2),
        E = (0, o.Ay)(),
        T = (0, f.Gh)("nitro_home_header"),
        R = n.useRef(null);
    return (0, i.jsx)(c.A, {
        section: A.JJy.NAVIGATION,
        children: (0, i.jsx)(l.N, {
            theme: E,
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.A, {
                            isAuthenticated: s,
                            className: e,
                            toolbar: T
                                ? (0, i.jsxs)("div", {
                                      className: C.fI,
                                      children: [
                                          (0, i.jsx)(x.l, {
                                              ref: R,
                                              size: "sm",
                                              variant: "secondary",
                                              location: d.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                          }),
                                          (0, i.jsx)(g.A, { variant: "secondary", size: "sm" }),
                                      ],
                                  })
                                : void 0,
                            role: "navigation",
                            children: [
                                (0, i.jsx)(u.A.Icon, { icon: r.t, "aria-hidden": !0 }),
                                (0, i.jsx)(u.A.Title, { children: b.intl.string(b.t.Ipxkog) }),
                            ],
                        }),
                        T && h && (0, i.jsx)(m.O, { targetElementRef: R, body: b.intl.string(b.t.EqUw7K) }),
                    ],
                }),
        }),
    });
});
