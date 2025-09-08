r.d(t, { Z: () => m }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    o = r.n(l),
    a = r(793030),
    c = r(442837),
    s = r(481060),
    u = r(313201),
    d = r(314897),
    g = r(785717),
    f = r(403239),
    b = r(982072),
    p = r(781040),
    O = r(840367),
    y = r(388032),
    j = r(415734);
function m(e) {
    let {
            userId: t,
            widget: r,
            children: l,
            disableInteraction: s,
            className: y,
            index: m,
            trailingContent: x,
            headerTitle: h,
            headerSubtitle: w,
            headerActionButtons: P,
        } = e,
        E = (0, u.Dt)(),
        S = (0, c.e7)([d.default], () => d.default.getId() === t),
        I = i.useRef(null),
        T = i.useRef(null),
        { trackUserProfileAction: D } = (0, g.KZ)(),
        _ = (0, b.Z)({
            widgetType: r.type,
            onAction: D,
        }),
        N = S && null != m && !s,
        { isDragging: k, dragSourcePosition: Z } = (0, f.q)({
            dropRef: I,
            dragRef: T,
            userId: t,
            widget: r,
            index: m,
            disableInteraction: !N,
        }),
        [A, R] = i.useState(!1);
    return (0, n.jsx)(v, {
        ref: I,
        disableInteraction: !N,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        dragSourcePosition: Z,
        index: null != m ? m : 0,
        children: (0, n.jsxs)("section", {
            ref: _,
            className: o()(j.container, y, { [j.isDragging]: k }),
            "aria-labelledby": E,
            children: [
                N &&
                    (0, n.jsx)(p.Z, {
                        buttonRef: T,
                        widget: r,
                        className: o()(j.dragHandleButton, { [j.opacity]: A || k }),
                    }),
                (0, n.jsx)(O.Z, {
                    userId: t,
                    headingId: E,
                    title: h,
                    subtitle: w,
                    actionButtons: P,
                    widget: r,
                    disableInteraction: s,
                }),
                (0, n.jsxs)(a.y5, {
                    children: [l, x],
                }),
            ],
        }),
    });
}
let v = (e) => {
    let {
            ref: t,
            children: r,
            disableInteraction: i,
            onMouseEnter: l,
            onMouseLeave: a,
            dragSourcePosition: c,
            index: u,
        } = e,
        d = (0, s.zPA)() && null != c,
        g = d && u < c,
        f = d && u > c;
    return i
        ? r
        : (0, n.jsx)("div", {
              ref: t,
              className: o()(j.dragAndDropHitbox, {
                  [j.dropIndicatorBefore]: g,
                  [j.dropIndicatorAfter]: f,
              }),
              onMouseEnter: l,
              onMouseLeave: a,
              "aria-label": y.intl.formatToPlainString(y.t.YLczh4, { positionNumber: u + 1 }),
              children: r,
          });
};
