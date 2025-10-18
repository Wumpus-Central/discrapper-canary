n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(793030),
    c = n(442837),
    s = n(313201),
    u = n(314897),
    d = n(785717),
    f = n(403239),
    g = n(982072),
    p = n(781040),
    m = n(840367),
    b = n(34335),
    h = n(388032),
    v = n(415734);
function y(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            disableInteraction: h,
            className: y,
            index: O,
            trailingContent: x,
            headerTitle: _,
            headerSubtitle: I,
            headerActionButtons: P,
            dragHandleAdditionalMenuItems: w,
        } = e,
        S = (0, s.Dt)(),
        E = (0, c.e7)([u.default], () => u.default.getId() === t),
        T = i.useRef(null),
        { registerManageWidgetButtonRef: C, manageFocusOnReorder: N } = (0, b.j)(),
        D = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = C(n.type);
        return e(D.current), () => e(null);
    }, [C, n.type]);
    let { trackUserProfileAction: A } = (0, d.KZ)(),
        k = (0, g.Z)({
            widgetType: n.type,
            onAction: A,
        }),
        Z = E && null != O && !h,
        { isDragging: R, dragSourcePosition: L } = (0, f.q)({
            dropRef: T,
            dragRef: D,
            userId: t,
            widget: n,
            index: O,
            disableInteraction: !Z,
            onReorder: () => N(n.type),
        }),
        [G, B] = i.useState(!1);
    return (0, r.jsx)(j, {
        ref: T,
        disableInteraction: !Z,
        onMouseEnter: () => B(!0),
        onMouseLeave: () => B(!1),
        dragSourcePosition: L,
        index: null != O ? O : 0,
        children: (0, r.jsxs)("section", {
            ref: k,
            className: l()(v.container, y, { [v.isDragging]: R }),
            "aria-labelledby": S,
            children: [
                Z &&
                    (0, r.jsx)(p.Z, {
                        buttonRef: D,
                        widget: n,
                        className: l()(v.dragHandleButton, { [v.opacity]: G || R }),
                        additionalMenuItems: w,
                    }),
                (0, r.jsx)(m.Z, {
                    userId: t,
                    headingId: S,
                    title: _,
                    subtitle: I,
                    actionButtons: P,
                    widget: n,
                    disableInteraction: h,
                }),
                (0, r.jsxs)(o.y5t, {
                    children: [a, x],
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
            onMouseLeave: o,
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
              className: l()(v.dragAndDropHitbox, {
                  [v.dropIndicatorBefore]: d,
                  [v.dropIndicatorAfter]: f,
              }),
              onMouseEnter: a,
              onMouseLeave: o,
              "aria-label": h.intl.formatToPlainString(h.t.YLczh4, { positionNumber: s + 1 }),
              children: n,
          });
};
