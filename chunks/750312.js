r.d(t, { Z: () => p }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(793030),
    c = r(442837),
    s = r(313201),
    u = r(314897),
    d = r(86419),
    f = r(840367),
    g = r(272289),
    b = r(415734);
function p(e) {
    let { userId: t, widget: r, children: i, disableInteraction: p, className: O } = e,
        [m, j] = l.useState(!1),
        y = (0, s.Dt)(),
        v = (0, c.e7)([u.default], () => u.default.getId() === t),
        x = (0, d.kQ)(r),
        h = l.useCallback(() => {
            j(!0);
        }, []);
    return (0, n.jsxs)("section", {
        className: a()(b.container, O),
        "aria-labelledby": y,
        children: [
            (0, n.jsx)(f.Z, {
                userId: t,
                headingId: y,
                widget: r,
                disableInteraction: p,
            }),
            (0, n.jsxs)(o.y5, {
                children: [
                    i,
                    v &&
                        !x &&
                        !p &&
                        !m &&
                        (0, n.jsx)(g.Z, {
                            userId: t,
                            widgetType: r.type,
                            onDismiss: h,
                        }),
                ],
            }),
        ],
    });
}
