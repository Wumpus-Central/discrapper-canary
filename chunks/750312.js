r.d(t, { Z: () => g }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    o = r.n(l),
    a = r(793030),
    c = r(442837),
    s = r(313201),
    u = r(314897),
    d = r(403239),
    f = r(781040),
    b = r(840367),
    p = r(415734);
function g(e) {
    let {
            userId: t,
            widget: r,
            children: l,
            disableInteraction: g,
            className: y,
            index: j,
            trailingContent: m,
            headerTitle: v,
            headerSubtitle: h,
            headerActionButtons: x,
        } = e,
        w = (0, s.Dt)(),
        P = (0, c.e7)([u.default], () => u.default.getId() === t),
        S = i.useRef(null),
        E = i.useRef(null),
        I = P && null != j && !g,
        { isDragging: D } = (0, d.q)({
            dropRef: S,
            dragRef: E,
            userId: t,
            widget: r,
            index: j,
            disableInteraction: !I,
        }),
        [k, N] = i.useState(!1);
    return (0, n.jsx)(O, {
        ref: S,
        disableInteraction: !I,
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1),
        children: (0, n.jsxs)("section", {
            className: o()(p.container, y, { [p.isDragging]: D }),
            "aria-labelledby": w,
            children: [
                I &&
                    (0, n.jsx)(f.Z, {
                        buttonRef: E,
                        widget: r,
                        className: o()(p.dragHandleButton, { [p.opacity]: k || D }),
                    }),
                (0, n.jsx)(b.Z, {
                    userId: t,
                    headingId: w,
                    title: v,
                    subtitle: h,
                    actionButtons: x,
                    widget: r,
                    disableInteraction: g,
                }),
                (0, n.jsxs)(a.y5, {
                    children: [l, m],
                }),
            ],
        }),
    });
}
let O = (e) => {
    let { ref: t, children: r, disableInteraction: i, onMouseEnter: l, onMouseLeave: o } = e;
    return i
        ? r
        : (0, n.jsx)("div", {
              ref: t,
              className: p.dragAndDropHitbox,
              onMouseEnter: l,
              onMouseLeave: o,
              children: r,
          });
};
