n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    l = n(793030),
    c = n(442837),
    s = n(481060),
    u = n(313201),
    d = n(314897),
    f = n(785717),
    g = n(403239),
    p = n(982072),
    b = n(781040),
    m = n(840367),
    O = n(388032),
    y = n(546178);
function j(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            disableInteraction: s,
            className: O,
            index: j,
            trailingContent: v,
            headerTitle: x,
            headerSubtitle: _,
            headerActionButtons: P,
            dragHandleAdditionalMenuItems: w,
        } = e,
        I = (0, u.Dt)(),
        E = (0, c.e7)([d.default], () => d.default.getId() === t),
        S = i.useRef(null),
        T = i.useRef(null),
        { trackUserProfileAction: D } = (0, f.KZ)(),
        N = (0, p.Z)({
            widgetType: n.type,
            onAction: D,
        }),
        A = E && null != j && !s,
        { isDragging: k, dragSourcePosition: C } = (0, g.q)({
            dropRef: S,
            dragRef: T,
            userId: t,
            widget: n,
            index: j,
            disableInteraction: !A,
        }),
        [R, Z] = i.useState(!1);
    return (0, r.jsx)(h, {
        ref: S,
        disableInteraction: !A,
        onMouseEnter: () => Z(!0),
        onMouseLeave: () => Z(!1),
        dragSourcePosition: C,
        index: null != j ? j : 0,
        children: (0, r.jsxs)("section", {
            ref: N,
            className: o()(y.container, O, { [y.isDragging]: k }),
            "aria-labelledby": I,
            children: [
                A &&
                    (0, r.jsx)(b.Z, {
                        buttonRef: T,
                        widget: n,
                        className: o()(y.dragHandleButton, { [y.opacity]: R || k }),
                        additionalMenuItems: w,
                    }),
                (0, r.jsx)(m.Z, {
                    userId: t,
                    headingId: I,
                    title: x,
                    subtitle: _,
                    actionButtons: P,
                    widget: n,
                    disableInteraction: s,
                }),
                (0, r.jsxs)(l.y5t, {
                    children: [a, v],
                }),
            ],
        }),
    });
}
let h = (e) => {
    let {
            ref: t,
            children: n,
            disableInteraction: i,
            onMouseEnter: a,
            onMouseLeave: l,
            dragSourcePosition: c,
            index: u,
        } = e,
        d = (0, s.zPA)() && null != c,
        f = d && u < c,
        g = d && u > c;
    return i
        ? n
        : (0, r.jsx)("div", {
              ref: t,
              className: o()(y.dragAndDropHitbox, {
                  [y.dropIndicatorBefore]: f,
                  [y.dropIndicatorAfter]: g,
              }),
              onMouseEnter: a,
              onMouseLeave: l,
              "aria-label": O.intl.formatToPlainString(O.t.YLczh4, { positionNumber: u + 1 }),
              children: n,
          });
};
