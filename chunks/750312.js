n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(793030),
    s = n(442837),
    c = n(313201),
    u = n(314897),
    d = n(785717),
    f = n(403239),
    g = n(982072),
    p = n(781040),
    m = n(840367),
    b = n(388032),
    h = n(415734);
function v(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            disableInteraction: b,
            className: v,
            index: j,
            trailingContent: O,
            headerTitle: x,
            headerSubtitle: _,
            headerActionButtons: P,
            dragHandleAdditionalMenuItems: I,
        } = e,
        w = (0, c.Dt)(),
        S = (0, s.e7)([u.default], () => u.default.getId() === t),
        E = i.useRef(null),
        T = i.useRef(null),
        { trackUserProfileAction: C } = (0, d.KZ)(),
        N = (0, g.Z)({
            widgetType: n.type,
            onAction: C,
        }),
        A = S && null != j && !b,
        { isDragging: D, dragSourcePosition: k } = (0, f.q)({
            dropRef: E,
            dragRef: T,
            userId: t,
            widget: n,
            index: j,
            disableInteraction: !A,
        }),
        [Z, R] = i.useState(!1);
    return (0, r.jsx)(y, {
        ref: E,
        disableInteraction: !A,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        dragSourcePosition: k,
        index: null != j ? j : 0,
        children: (0, r.jsxs)("section", {
            ref: N,
            className: l()(h.container, v, { [h.isDragging]: D }),
            "aria-labelledby": w,
            children: [
                A &&
                    (0, r.jsx)(p.Z, {
                        buttonRef: T,
                        widget: n,
                        className: l()(h.dragHandleButton, { [h.opacity]: Z || D }),
                        additionalMenuItems: I,
                    }),
                (0, r.jsx)(m.Z, {
                    userId: t,
                    headingId: w,
                    title: x,
                    subtitle: _,
                    actionButtons: P,
                    widget: n,
                    disableInteraction: b,
                }),
                (0, r.jsxs)(o.y5t, {
                    children: [a, O],
                }),
            ],
        }),
    });
}
let y = (e) => {
    let {
            ref: t,
            children: n,
            disableInteraction: i,
            onMouseEnter: a,
            onMouseLeave: o,
            dragSourcePosition: s,
            index: c,
        } = e,
        u = null != s,
        d = u && c < s,
        f = u && c > s;
    return i
        ? n
        : (0, r.jsx)("div", {
              ref: t,
              className: l()(h.dragAndDropHitbox, {
                  [h.dropIndicatorBefore]: d,
                  [h.dropIndicatorAfter]: f,
              }),
              onMouseEnter: a,
              onMouseLeave: o,
              "aria-label": b.intl.formatToPlainString(b.t.YLczh4, { positionNumber: c + 1 }),
              children: n,
          });
};
