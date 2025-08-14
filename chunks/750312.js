n.d(t, { Z: () => b }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(793030),
    c = n(442837),
    s = n(313201),
    d = n(314897),
    u = n(86419),
    f = n(840367),
    p = n(272289),
    m = n(415734);
function b(e) {
    let { userId: t, widget: n, children: i, disableInteraction: b, className: g } = e,
        [j, y] = l.useState(!1),
        O = (0, s.Dt)(),
        x = (0, c.e7)([d.default], () => d.default.getId() === t),
        h = (0, u.kQ)(n);
    return (0, r.jsxs)("section", {
        className: o()(m.container, g),
        "aria-labelledby": O,
        children: [
            (0, r.jsx)(f.Z, {
                userId: t,
                headingId: O,
                widget: n,
                disableInteraction: b,
            }),
            (0, r.jsxs)(a.y5, {
                children: [
                    i,
                    x &&
                        !h &&
                        !b &&
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
