s.d(t, { A: () => b });
var i = s(627968),
    a = s(64700),
    n = s(17928),
    l = s(43990),
    r = s(403581),
    c = s(820284),
    o = s(736653),
    d = s(793574),
    u = s(742589),
    m = s(876587),
    g = s(65470),
    x = s(400669),
    p = s(909536),
    f = s(280450),
    h = s(287809),
    N = s(428262),
    A = s(652215),
    j = s(202541),
    C = s(375708),
    E = s(50596);
let b = n.Ay.connectStores([h.default], () => ({ user: h.default.getCurrentUser() }))(function (e) {
    let { user: t } = e,
        s = (0, n.bG)([f.default], () => f.default.isAuthenticated()),
        h = (0, N.TW)(t, j.PremiumTypes.TIER_2),
        b = (0, o.Ay)(),
        R = (0, p.Gh)("nitro_home_header"),
        _ = a.useRef(null);
    return (0, i.jsx)(c.A, {
        section: A.JJy.NAVIGATION,
        children: (0, i.jsx)(l.N, {
            theme: b,
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.A, {
                            isAuthenticated: s,
                            className: e,
                            toolbar: R
                                ? (0, i.jsxs)("div", {
                                      className: E.fI,
                                      children: [
                                          (0, i.jsx)(x.l, {
                                              ref: _,
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
                                (0, i.jsx)(u.A.Title, { children: C.intl.string(C.t.Ipxkog) }),
                            ],
                        }),
                        R && h && (0, i.jsx)(m.O, { targetElementRef: _, body: C.intl.string(C.t.EqUw7K) }),
                    ],
                }),
        }),
    });
});
