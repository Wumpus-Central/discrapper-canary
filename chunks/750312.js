r.d(t, { Z: () => O }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    a = r.n(l),
    o = r(793030),
    c = r(442837),
    s = r(313201),
    u = r(314897),
    d = r(556045),
    f = r(403239),
    g = r(471892),
    p = r(840367),
    b = r(272289),
    m = r(415734);
function O(e) {
    let { userId: t, widget: r, children: l, disableInteraction: O, className: y, index: x } = e,
        v = (0, s.Dt)(),
        h = (0, c.e7)([u.default], () => u.default.getId() === t),
        { shouldShowSuggestions: _, handleDismissSuggestions: w } = (0, d.h)(r),
        P = h && !O && _,
        I = i.useRef(null),
        S = i.useRef(null),
        { isDragging: E } = (0, f.q)({
            dropRef: I,
            dragRef: S,
            userId: t,
            widget: r,
            index: x,
        }),
        [T, N] = i.useState(!1);
    return (0, n.jsx)(j, {
        ref: I,
        enable: !O,
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1),
        dragClick:
            h &&
            (0, n.jsx)("div", {
                ref: S,
                className: a()(m.dragClick, { [m.opacity]: T || E }),
                children: (0, n.jsx)(g.Z, { widget: r }),
            }),
        children: (0, n.jsxs)("section", {
            className: a()(m.container, y, { [m.isDragging]: E }),
            "aria-labelledby": v,
            children: [
                (0, n.jsx)(p.Z, {
                    userId: t,
                    headingId: v,
                    widget: r,
                    disableInteraction: O,
                }),
                (0, n.jsxs)(o.y5, {
                    children: [
                        l,
                        P &&
                            (0, n.jsx)(b.Z, {
                                userId: t,
                                widgetType: r.type,
                                onDismiss: w,
                                className: m.suggestedGames,
                            }),
                    ],
                }),
            ],
        }),
    });
}
let j = (e) => {
    let { ref: t, children: r, enable: i, onMouseEnter: l, onMouseLeave: a, dragClick: o } = e;
    return i
        ? (0, n.jsxs)("div", {
              ref: t,
              className: m.hitbox,
              onMouseEnter: l,
              onMouseLeave: a,
              children: [o, r],
          })
        : r;
};
