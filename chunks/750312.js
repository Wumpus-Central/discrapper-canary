n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(793030),
    c = n(442837),
    s = n(313201),
    u = n(314897),
    d = n(785717),
    f = n(86419),
    g = n(982072),
    p = n(780899),
    m = n(939974),
    b = n(840367),
    h = n(34335),
    y = n(388032),
    v = n(415734);
function O(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: a, children: o } = e,
        c = i.useRef(null),
        u = i.useRef(null),
        { registerManageWidgetButtonRef: d, manageFocusOnReorder: g } = (0, h.j)();
    i.useLayoutEffect(() => {
        let e = d(n.type);
        return e(c.current), () => e(null);
    }, [d, n.type]);
    let b = i.useMemo(() => {
            var e;
            return null != (e = n.id) ? e : (0, s.hQ)();
        }, [n.id]),
        { isDragging: O, dragSourcePosition: j } = (0, p.Y9)({
            dragRef: c,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: b,
            itemPreviewProps: { widget: n },
            onReorder: f.IM,
            onEnd: () => g(n.type),
        }),
        x = null != j,
        _ = x && t < j,
        P = x && t > j;
    return (0, r.jsxs)("div", {
        ref: u,
        className: l()(v.dragAndDropTarget, {
            [v.dropIndicatorBefore]: _,
            [v.dropIndicatorAfter]: P,
            [v.isDragging]: O,
        }),
        "aria-label": y.intl.formatToPlainString(y.t.YLczh4, { positionNumber: t + 1 }),
        children: [
            (0, r.jsx)(m.Z, {
                buttonRef: c,
                widget: n,
                className: v.dragHandleButton,
                additionalMenuItems: a,
            }),
            o,
        ],
    });
}
function j(e) {
    let {
            userId: t,
            widget: n,
            children: i,
            disableInteraction: a,
            className: f,
            index: p,
            trailingContent: m,
            headerTitle: h,
            headerSubtitle: y,
            headerActionButtons: j,
            additionalManageWidgetMenuItems: x,
        } = e,
        _ = (0, s.Dt)(),
        P = (0, c.e7)([u.default], () => u.default.getId() === t),
        { trackUserProfileAction: I } = (0, d.KZ)(),
        w = (0, g.Z)({
            widgetType: n.type,
            onAction: I,
        }),
        S = P && null != p && !a,
        E = () =>
            (0, r.jsxs)("div", {
                className: l()(v.container, f),
                children: [
                    (0, r.jsx)(b.Z, {
                        userId: t,
                        headingId: _,
                        title: h,
                        subtitle: y,
                        actionButtons: j,
                        widget: n,
                        disableInteraction: a,
                    }),
                    (0, r.jsxs)(o.y5t, {
                        children: [i, m],
                    }),
                ],
            });
    return (0, r.jsx)("section", {
        ref: w,
        "aria-labelledby": _,
        children: S
            ? (0, r.jsx)(O, {
                  index: null != p ? p : 0,
                  widget: n,
                  additionalManageWidgetMenuItems: x,
                  children: E(),
              })
            : E(),
    });
}
