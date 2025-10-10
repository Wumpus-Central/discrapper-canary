r.d(t, { Z: () => j }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(120356),
    a = r.n(o),
    l = r(793030),
    c = r(442837),
    s = r(481060),
    u = r(313201),
    d = r(314897),
    f = r(785717),
    g = r(403239),
    p = r(982072),
    b = r(781040),
    m = r(840367),
    O = r(388032),
    y = r(415734);
function j(e) {
    let {
            userId: t,
            widget: r,
            children: o,
            disableInteraction: s,
            className: O,
            index: j,
            trailingContent: h,
            headerTitle: v,
            headerSubtitle: _,
            headerActionButtons: w,
            dragHandleAdditionalMenuItems: P,
        } = e,
        E = (0, u.Dt)(),
        I = (0, c.e7)([d.default], () => d.default.getId() === t),
        S = i.useRef(null),
        T = i.useRef(null),
        { trackUserProfileAction: D } = (0, f.KZ)(),
        N = (0, p.Z)({
            widgetType: r.type,
            onAction: D,
        }),
        k = I && null != j && !s,
        { isDragging: C, dragSourcePosition: Z } = (0, g.q)({
            dropRef: S,
            dragRef: T,
            userId: t,
            widget: r,
            index: j,
            disableInteraction: !k,
        }),
        [A, R] = i.useState(!1);
    return (0, n.jsx)(x, {
        ref: S,
        disableInteraction: !k,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        dragSourcePosition: Z,
        index: null != j ? j : 0,
        children: (0, n.jsxs)("section", {
            ref: N,
            className: a()(y.container, O, { [y.isDragging]: C }),
            "aria-labelledby": E,
            children: [
                k &&
                    (0, n.jsx)(b.Z, {
                        buttonRef: T,
                        widget: r,
                        className: a()(y.dragHandleButton, { [y.opacity]: A || C }),
                        additionalMenuItems: P,
                    }),
                (0, n.jsx)(m.Z, {
                    userId: t,
                    headingId: E,
                    title: v,
                    subtitle: _,
                    actionButtons: w,
                    widget: r,
                    disableInteraction: s,
                }),
                (0, n.jsxs)(l.y5t, {
                    children: [o, h],
                }),
            ],
        }),
    });
}
let x = (e) => {
    let {
            ref: t,
            children: r,
            disableInteraction: i,
            onMouseEnter: o,
            onMouseLeave: l,
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
              className: a()(y.dragAndDropHitbox, {
                  [y.dropIndicatorBefore]: f,
                  [y.dropIndicatorAfter]: g,
              }),
              onMouseEnter: o,
              onMouseLeave: l,
              "aria-label": O.intl.formatToPlainString(O.t.YLczh4, { positionNumber: u + 1 }),
              children: r,
          });
};
