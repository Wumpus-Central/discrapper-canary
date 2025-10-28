n.d(t, { Z: () => v }), n(388685);
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
    y = n(388032),
    h = n(415734);
function v(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            disableInteraction: y,
            className: v,
            index: j,
            trailingContent: x,
            headerTitle: _,
            headerSubtitle: P,
            headerActionButtons: I,
            dragHandleAdditionalMenuItems: w,
        } = e,
        S = (0, s.Dt)(),
        E = (0, c.e7)([u.default], () => u.default.getId() === t),
        T = i.useRef(null),
        { registerManageWidgetButtonRef: C, manageFocusOnReorder: D } = (0, b.j)(),
        k = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = C(n.type);
        return e(k.current), () => e(null);
    }, [C, n.type]);
    let { trackUserProfileAction: N } = (0, d.KZ)(),
        A = (0, g.Z)({
            widgetType: n.type,
            onAction: N,
        }),
        Z = E && null != j && !y,
        { isDragging: R, dragSourcePosition: G } = (0, f.q)({
            dropRef: T,
            dragRef: k,
            userId: t,
            widget: n,
            index: j,
            disableInteraction: !Z,
            onReorder: () => D(n.type),
        }),
        [B, L] = i.useState(!1);
    return (0, r.jsx)(O, {
        ref: T,
        disableInteraction: !Z,
        onMouseEnter: () => L(!0),
        onMouseLeave: () => L(!1),
        dragSourcePosition: G,
        index: null != j ? j : 0,
        children: (0, r.jsxs)("section", {
            ref: A,
            className: l()(h.container, v, { [h.isDragging]: R }),
            "aria-labelledby": S,
            children: [
                Z &&
                    (0, r.jsx)(p.Z, {
                        buttonRef: k,
                        widget: n,
                        className: l()(h.dragHandleButton, { [h.opacity]: B || R }),
                        additionalMenuItems: w,
                    }),
                (0, r.jsx)(m.Z, {
                    userId: t,
                    headingId: S,
                    title: _,
                    subtitle: P,
                    actionButtons: I,
                    widget: n,
                    disableInteraction: y,
                }),
                (0, r.jsxs)(o.y5t, {
                    children: [a, x],
                }),
            ],
        }),
    });
}
let O = (e) => {
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
              className: l()(h.dragAndDropHitbox, {
                  [h.dropIndicatorBefore]: d,
                  [h.dropIndicatorAfter]: f,
              }),
              onMouseEnter: a,
              onMouseLeave: o,
              "aria-label": y.intl.formatToPlainString(y.t.YLczh4, { positionNumber: s + 1 }),
              children: n,
          });
};
