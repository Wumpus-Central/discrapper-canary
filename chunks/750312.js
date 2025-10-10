r.d(t, { Z: () => y }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(120356),
    a = r.n(o),
    l = r(793030),
    c = r(442837),
    s = r(313201),
    u = r(314897),
    d = r(785717),
    f = r(403239),
    g = r(982072),
    p = r(781040),
    b = r(840367),
    m = r(388032),
    O = r(415734);
function y(e) {
    let {
            userId: t,
            widget: r,
            children: o,
            disableInteraction: m,
            className: y,
            index: x,
            trailingContent: h,
            headerTitle: v,
            headerSubtitle: _,
            headerActionButtons: w,
            dragHandleAdditionalMenuItems: P,
        } = e,
        E = (0, s.Dt)(),
        I = (0, c.e7)([u.default], () => u.default.getId() === t),
        S = i.useRef(null),
        T = i.useRef(null),
        { trackUserProfileAction: D } = (0, d.KZ)(),
        N = (0, g.Z)({
            widgetType: r.type,
            onAction: D,
        }),
        k = I && null != x && !m,
        { isDragging: C, dragSourcePosition: Z } = (0, f.q)({
            dropRef: S,
            dragRef: T,
            userId: t,
            widget: r,
            index: x,
            disableInteraction: !k,
        }),
        [A, R] = i.useState(!1);
    return (0, n.jsx)(j, {
        ref: S,
        disableInteraction: !k,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        dragSourcePosition: Z,
        index: null != x ? x : 0,
        children: (0, n.jsxs)("section", {
            ref: N,
            className: a()(O.container, y, { [O.isDragging]: C }),
            "aria-labelledby": E,
            children: [
                k &&
                    (0, n.jsx)(p.Z, {
                        buttonRef: T,
                        widget: r,
                        className: a()(O.dragHandleButton, { [O.opacity]: A || C }),
                        additionalMenuItems: P,
                    }),
                (0, n.jsx)(b.Z, {
                    userId: t,
                    headingId: E,
                    title: v,
                    subtitle: _,
                    actionButtons: w,
                    widget: r,
                    disableInteraction: m,
                }),
                (0, n.jsxs)(l.y5t, {
                    children: [o, h],
                }),
            ],
        }),
    });
}
let j = (e) => {
    let {
            ref: t,
            children: r,
            disableInteraction: i,
            onMouseEnter: o,
            onMouseLeave: l,
            dragSourcePosition: c,
            index: s,
        } = e,
        u = null != c,
        d = u && s < c,
        f = u && s > c;
    return i
        ? r
        : (0, n.jsx)("div", {
              ref: t,
              className: a()(O.dragAndDropHitbox, {
                  [O.dropIndicatorBefore]: d,
                  [O.dropIndicatorAfter]: f,
              }),
              onMouseEnter: o,
              onMouseLeave: l,
              "aria-label": m.intl.formatToPlainString(m.t.YLczh4, { positionNumber: s + 1 }),
              children: r,
          });
};
