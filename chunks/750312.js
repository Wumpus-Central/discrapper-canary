r.d(t, { Z: () => p }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    a = r.n(l),
    o = r(793030),
    c = r(442837),
    s = r(313201),
    u = r(314897),
    d = r(403239),
    f = r(781040),
    g = r(840367),
    b = r(415734);
function p(e) {
    let { userId: t, widget: r, children: l, disableInteraction: p, className: O, index: y, trailingContent: j } = e,
        v = (0, s.Dt)(),
        x = (0, c.e7)([u.default], () => u.default.getId() === t),
        h = i.useRef(null),
        w = i.useRef(null),
        P = x && null != y && !p,
        { isDragging: S } = (0, d.q)({
            dropRef: h,
            dragRef: w,
            userId: t,
            widget: r,
            index: y,
            disableInteraction: !P,
        }),
        [E, I] = i.useState(!1);
    return (0, n.jsx)(m, {
        ref: h,
        disableInteraction: !P,
        onMouseEnter: () => I(!0),
        onMouseLeave: () => I(!1),
        children: (0, n.jsxs)("section", {
            className: a()(b.container, O, { [b.isDragging]: S }),
            "aria-labelledby": v,
            children: [
                P &&
                    (0, n.jsx)(f.Z, {
                        buttonRef: w,
                        widget: r,
                        className: a()(b.dragHandleButton, { [b.opacity]: E || S }),
                    }),
                (0, n.jsx)(g.Z, {
                    userId: t,
                    headingId: v,
                    widget: r,
                    disableInteraction: p,
                }),
                (0, n.jsxs)(o.y5, {
                    children: [l, j],
                }),
            ],
        }),
    });
}
let m = (e) => {
    let { ref: t, children: r, disableInteraction: i, onMouseEnter: l, onMouseLeave: a } = e;
    return i
        ? r
        : (0, n.jsx)("div", {
              ref: t,
              className: b.dragAndDropHitbox,
              onMouseEnter: l,
              onMouseLeave: a,
              children: r,
          });
};
