n.d(t, { A: () => x });
var a = n(627968),
    i = n(158954),
    s = n(311907),
    r = n(492917),
    l = n(287809),
    o = n(307600),
    d = n(496587),
    c = n(800007),
    u = n(294726),
    m = n(985018),
    _ = n(710882);
function x(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([l.default], () => l.default.getCurrentUser());
    if (null == n) return null;
    let x = (0, c.yC)(n.id, t);
    return (0, a.jsx)(d.A, {
        actions: (0, a.jsx)(i.$nd, {
            variant: "secondary",
            fullWidth: !0,
            text: m.intl.string(u.default.f0xbih),
            icon: i.I9m,
            iconPosition: "end",
            onClick: () => (0, o.h)({ href: x }),
        }),
        children: (0, a.jsxs)("div", {
            className: _.Q,
            children: [
                (0, a.jsx)(r.u7P, { alt: "", width: 117, height: 78 }),
                (0, a.jsxs)("div", {
                    className: _.y,
                    children: [
                        (0, a.jsx)(i.DZT, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(u.default.qE2eqK),
                        }),
                        (0, a.jsx)(i.EYj, { variant: "text-sm/medium", children: m.intl.string(u.default.n4Towj) }),
                    ],
                }),
            ],
        }),
    });
}
