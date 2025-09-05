r.d(t, { Z: () => y }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    o = r.n(l),
    a = r(793030),
    c = r(442837),
    s = r(313201),
    u = r(314897),
    d = r(785717),
    f = r(403239),
    g = r(982072),
    b = r(781040),
    p = r(840367),
    O = r(415734);
function y(e) {
    let {
            userId: t,
            widget: r,
            children: l,
            disableInteraction: y,
            className: m,
            index: v,
            trailingContent: x,
            headerTitle: h,
            headerSubtitle: w,
            headerActionButtons: P,
        } = e,
        E = (0, s.Dt)(),
        S = (0, c.e7)([u.default], () => u.default.getId() === t),
        I = i.useRef(null),
        T = i.useRef(null),
        { trackUserProfileAction: D } = (0, d.KZ)(),
        _ = (0, g.Z)({
            widgetType: r.type,
            onAction: D,
        }),
        N = S && null != v && !y,
        { isDragging: k } = (0, f.q)({
            dropRef: I,
            dragRef: T,
            userId: t,
            widget: r,
            index: v,
            disableInteraction: !N,
        }),
        [Z, A] = i.useState(!1);
    return (0, n.jsx)(j, {
        ref: I,
        disableInteraction: !N,
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        children: (0, n.jsxs)("section", {
            ref: _,
            className: o()(O.container, m, { [O.isDragging]: k }),
            "aria-labelledby": E,
            children: [
                N &&
                    (0, n.jsx)(b.Z, {
                        buttonRef: T,
                        widget: r,
                        className: o()(O.dragHandleButton, { [O.opacity]: Z || k }),
                    }),
                (0, n.jsx)(p.Z, {
                    userId: t,
                    headingId: E,
                    title: h,
                    subtitle: w,
                    actionButtons: P,
                    widget: r,
                    disableInteraction: y,
                }),
                (0, n.jsxs)(a.y5, {
                    children: [l, x],
                }),
            ],
        }),
    });
}
let j = (e) => {
    let { ref: t, children: r, disableInteraction: i, onMouseEnter: l, onMouseLeave: o } = e;
    return i
        ? r
        : (0, n.jsx)("div", {
              ref: t,
              className: O.dragAndDropHitbox,
              onMouseEnter: l,
              onMouseLeave: o,
              children: r,
          });
};
