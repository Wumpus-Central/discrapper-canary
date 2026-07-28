s.d(t, { A: () => b });
var i = s(477900),
    n = s(582128),
    a = s(17928),
    r = s(43990),
    l = s(403581),
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
    N = s(428262),
    A = s(652215),
    C = s(202541),
    E = s(375708),
    j = s(792812);
let b = a.Ay.connectStores([h.default], () => ({ user: h.default.getCurrentUser() }))(function (e) {
    let { user: t } = e,
        s = (0, a.bG)([p.default], () => p.default.isAuthenticated()),
        h = (0, N.TW)(t, C.PremiumTypes.TIER_2),
        b = (0, o.Ay)(),
        R = (0, f.Gh)("nitro_home_header"),
        _ = n.useRef(null);
    return (0, i.jsx)(c.A, {
        section: A.JJy.NAVIGATION,
        children: (0, i.jsx)(r.N, {
            theme: b,
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.A, {
                            isAuthenticated: s,
                            className: e,
                            toolbar: R
                                ? (0, i.jsxs)("div", {
                                      className: j.fI,
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
                                (0, i.jsx)(u.A.Icon, { icon: l.t, "aria-hidden": !0 }),
                                (0, i.jsx)(u.A.Title, { children: E.intl.string(E.t.Ipxkog) }),
                            ],
                        }),
                        R && h && (0, i.jsx)(m.O, { targetElementRef: _, body: E.intl.string(E.t.EqUw7K) }),
                    ],
                }),
        }),
    });
});
