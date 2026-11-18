var i = s(477900);
s(582128);
var n = s(855986),
    a = s(43990),
    l = s(403581),
    r = s(820284),
    c = s(736653),
    o = s(793574),
    d = s(742589),
    u = s(65470),
    m = s(521440),
    x = s(46653),
    g = s(652215),
    h = s(792996),
    p = s(906367);
s.d(
    t,
    {},
    {
        A: function () {
            let e = (0, n.bG)([x.default], () => x.default.isAuthenticated()),
                t = (0, c.Ay)();
            return (0, i.jsx)(r.A, {
                section: g.JJy.NAVIGATION,
                children: (0, i.jsx)(a.N, {
                    theme: t,
                    children: (t) =>
                        (0, i.jsxs)(d.A, {
                            isAuthenticated: e,
                            className: t,
                            toolbar: (0, i.jsxs)("div", {
                                className: p.fI,
                                children: [
                                    (0, i.jsx)(m.l, {
                                        size: "sm",
                                        variant: "secondary",
                                        location: o.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, i.jsx)(u.A, { variant: "secondary", size: "sm" }),
                                ],
                            }),
                            role: "navigation",
                            children: [
                                (0, i.jsx)(d.A.Icon, { icon: l.NitroWheelIcon, "aria-hidden": !0 }),
                                (0, i.jsx)(d.A.Title, { children: h.intl.string(h.t.Ipxkog) }),
                            ],
                        }),
                }),
            });
        },
    },
);
