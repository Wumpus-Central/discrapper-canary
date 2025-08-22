r.d(t, { Z: () => b });
var n = r(951288);
r(647438);
var i = r(120356),
    a = r.n(i),
    l = r(793030),
    o = r(442837),
    c = r(313201),
    s = r(314897),
    u = r(556045),
    d = r(840367),
    f = r(272289),
    g = r(415734);
function b(e) {
    let { userId: t, widget: r, children: i, disableInteraction: b, className: p } = e,
        m = (0, c.Dt)(),
        O = (0, o.e7)([s.default], () => s.default.getId() === t),
        { shouldShowSuggestions: j, handleDismissSuggestions: y } = (0, u.h)(r);
    return (0, n.jsxs)("section", {
        className: a()(g.container, p),
        "aria-labelledby": m,
        children: [
            (0, n.jsx)(d.Z, {
                userId: t,
                headingId: m,
                widget: r,
                disableInteraction: b,
            }),
            (0, n.jsxs)(l.y5, {
                children: [
                    i,
                    O &&
                        !b &&
                        j &&
                        (0, n.jsx)(f.Z, {
                            userId: t,
                            widgetType: r.type,
                            onDismiss: y,
                        }),
                ],
            }),
        ],
    });
}
