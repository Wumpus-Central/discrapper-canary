n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(793030),
    c = n(442837),
    s = n(313201),
    d = n(314897),
    u = n(86419),
    f = n(840367),
    p = n(272289),
    m = n(415734);
function g(e) {
    let { userId: t, widget: n, children: l, disableInteraction: g, className: b } = e,
        [j, y] = i.useState(!1),
        O = (0, s.Dt)(),
        h = (0, c.e7)([d.default], () => d.default.getId() === t),
        x = (0, u.kQ)(n);
    return (0, r.jsxs)("section", {
        className: o()(m.container, b),
        "aria-labelledby": O,
        children: [
            (0, r.jsx)(f.Z, {
                userId: t,
                headingId: O,
                widget: n,
                disableInteraction: g,
            }),
            (0, r.jsxs)(a.y5, {
                children: [
                    l,
                    h &&
                        !x &&
                        !g &&
                        !j &&
                        (0, r.jsx)(p.Z, {
                            userId: t,
                            widgetType: n.type,
                            widgetGames: n.games,
                            onDismiss: () => y(!0),
                        }),
                ],
            }),
        ],
    });
}
