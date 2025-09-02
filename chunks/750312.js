n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    c = n(442837),
    s = n(313201),
    u = n(314897),
    d = n(556045),
    f = n(403239),
    g = n(781040),
    b = n(840367),
    p = n(272289),
    m = n(415734);
function O(e) {
    let { userId: t, widget: n, children: l, disableInteraction: O, className: y, index: x } = e,
        v = (0, s.Dt)(),
        h = (0, c.e7)([u.default], () => u.default.getId() === t),
        { shouldShowSuggestions: _, handleDismissSuggestions: P } = (0, d.h)(n),
        w = h && !O && _,
        I = i.useRef(null),
        S = i.useRef(null),
        E = h && null != x && !O,
        { isDragging: T } = (0, f.q)({
            dropRef: I,
            dragRef: S,
            userId: t,
            widget: n,
            index: x,
            disableInteraction: !E,
        }),
        [N, C] = i.useState(!1);
    return (0, r.jsx)(j, {
        ref: I,
        disableInteraction: !E,
        onMouseEnter: () => C(!0),
        onMouseLeave: () => C(!1),
        children: (0, r.jsxs)("section", {
            className: a()(m.container, y, { [m.isDragging]: T }),
            "aria-labelledby": v,
            children: [
                E &&
                    (0, r.jsx)(g.Z, {
                        buttonRef: S,
                        widget: n,
                        className: a()(m.dragHandleButton, { [m.opacity]: N || T }),
                    }),
                (0, r.jsx)(b.Z, {
                    userId: t,
                    headingId: v,
                    widget: n,
                    disableInteraction: O,
                }),
                (0, r.jsxs)(o.y5, {
                    children: [
                        l,
                        w &&
                            (0, r.jsx)(p.Z, {
                                userId: t,
                                widgetType: n.type,
                                onDismiss: P,
                                className: m.suggestedGames,
                            }),
                    ],
                }),
            ],
        }),
    });
}
let j = (e) => {
    let { ref: t, children: n, disableInteraction: i, onMouseEnter: l, onMouseLeave: a } = e;
    return i
        ? n
        : (0, r.jsx)("div", {
              ref: t,
              className: m.dragAndDropHitbox,
              onMouseEnter: l,
              onMouseLeave: a,
              children: n,
          });
};
