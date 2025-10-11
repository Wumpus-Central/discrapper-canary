n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    l = n(793030),
    c = n(442837),
    s = n(313201),
    u = n(314897),
    d = n(785717),
    f = n(403239),
    g = n(982072),
    p = n(781040),
    b = n(840367),
    m = n(388032),
    O = n(415734);
function y(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            disableInteraction: m,
            className: y,
            index: x,
            trailingContent: v,
            headerTitle: h,
            headerSubtitle: _,
            headerActionButtons: w,
            dragHandleAdditionalMenuItems: P,
        } = e,
        I = (0, s.Dt)(),
        S = (0, c.e7)([u.default], () => u.default.getId() === t),
        E = i.useRef(null),
        T = i.useRef(null),
        { trackUserProfileAction: D } = (0, d.KZ)(),
        k = (0, g.Z)({
            widgetType: n.type,
            onAction: D,
        }),
        N = S && null != x && !m,
        { isDragging: C, dragSourcePosition: Z } = (0, f.q)({
            dropRef: E,
            dragRef: T,
            userId: t,
            widget: n,
            index: x,
            disableInteraction: !N,
        }),
        [A, R] = i.useState(!1);
    return (0, r.jsx)(j, {
        ref: E,
        disableInteraction: !N,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        dragSourcePosition: Z,
        index: null != x ? x : 0,
        children: (0, r.jsxs)("section", {
            ref: k,
            className: o()(O.container, y, { [O.isDragging]: C }),
            "aria-labelledby": I,
            children: [
                N &&
                    (0, r.jsx)(p.Z, {
                        buttonRef: T,
                        widget: n,
                        className: o()(O.dragHandleButton, { [O.opacity]: A || C }),
                        additionalMenuItems: P,
                    }),
                (0, r.jsx)(b.Z, {
                    userId: t,
                    headingId: I,
                    title: h,
                    subtitle: _,
                    actionButtons: w,
                    widget: n,
                    disableInteraction: m,
                }),
                (0, r.jsxs)(l.y5t, {
                    children: [a, v],
                }),
            ],
        }),
    });
}
let j = (e) => {
    let {
            ref: t,
            children: n,
            disableInteraction: i,
            onMouseEnter: a,
            onMouseLeave: l,
            dragSourcePosition: c,
            index: s,
        } = e,
        u = null != c,
        d = u && s < c,
        f = u && s > c;
    return i
        ? n
        : (0, r.jsx)("div", {
              ref: t,
              className: o()(O.dragAndDropHitbox, {
                  [O.dropIndicatorBefore]: d,
                  [O.dropIndicatorAfter]: f,
              }),
              onMouseEnter: a,
              onMouseLeave: l,
              "aria-label": m.intl.formatToPlainString(m.t.YLczh4, { positionNumber: s + 1 }),
              children: n,
          });
};
