n.d(t, {
    A: () => m,
});
var r = n(627968),
    a = n(158954),
    l = n(311907),
    i = n(492917),
    s = n(287809),
    c = n(307600),
    o = n(496587),
    d = n(800007),
    u = n(294726),
    f = n(985018),
    b = n(710882);

function m(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([s.default], () => s.default.getCurrentUser());
    if (null == n) return null;
    let m = (0, d.yC)(n.id, t);
    return (0, r.jsx)(o.A, {
        actions: (0, r.jsx)(a.$nd, {
            variant: "secondary",
            fullWidth: !0,
            text: f.intl.string(u.default.f0xbih),
            icon: a.I9m,
            iconPosition: "end",
            onClick: () =>
                (0, c.h)({
                    href: m,
                }),
        }),
        children: (0, r.jsxs)("div", {
            className: b.Q,
            children: [
                (0, r.jsx)(i.u7P, {
                    alt: "",
                    width: 117,
                    height: 78,
                }),
                (0, r.jsxs)("div", {
                    className: b.y,
                    children: [
                        (0, r.jsx)(a.DZT, {
                            variant: "heading-md/semibold",
                            children: f.intl.string(u.default.qE2eqK),
                        }),
                        (0, r.jsx)(a.EYj, {
                            variant: "text-sm/medium",
                            children: f.intl.string(u.default.n4Towj),
                        }),
                    ],
                }),
            ],
        }),
    });
}
