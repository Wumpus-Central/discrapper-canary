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
    f = r(785717),
    g = r(403239),
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
        D = i.useRef(null),
        { trackUserProfileAction: T } = (0, f.KZ)(),
        N = (0, b.Z)({
            widgetType: r.type,
            onAction: T,
        }),
        k = S && null != m && !s,
        { isDragging: _, dragSourcePosition: Z } = (0, g.q)({
            dropRef: I,
            dragRef: D,
            userId: t,
            widget: r,
            index: m,
            disableInteraction: !k,
        }),
        [A, C] = i.useState(!1);
    return (0, n.jsx)(v, {
        ref: I,
        disableInteraction: !k,
        onMouseEnter: () => C(!0),
        onMouseLeave: () => C(!1),
        dragSourcePosition: Z,
        index: null != m ? m : 0,
        children: (0, n.jsxs)("section", {
            ref: N,
            className: o()(j.container, y, { [j.isDragging]: _ }),
            "aria-labelledby": E,
            children: [
                k &&
                    (0, n.jsx)(p.Z, {
                        buttonRef: D,
                        widget: r,
                        className: o()(j.dragHandleButton, { [j.opacity]: A || _ }),
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
                (0, n.jsxs)(a.y5t, {
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
        f = d && u < c,
        g = d && u > c;
    return i
        ? r
        : (0, n.jsx)("div", {
              ref: t,
              className: o()(j.dragAndDropHitbox, {
                  [j.dropIndicatorBefore]: f,
                  [j.dropIndicatorAfter]: g,
              }),
              onMouseEnter: l,
              onMouseLeave: a,
              "aria-label": y.intl.formatToPlainString(y.t.YLczh4, { positionNumber: u + 1 }),
              children: r,
          });
};
