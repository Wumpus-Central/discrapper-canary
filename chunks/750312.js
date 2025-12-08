n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
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
    let { index: t, widget: n, additionalManageWidgetMenuItems: l, children: o } = e,
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
        className: a()(v.dragAndDropTarget, {
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
                additionalMenuItems: l,
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
            disableInteraction: l,
            className: f,
            index: p,
            trailingContent: m,
            headerTitle: h,
            headerSubtitle: y,
            headerActionButtons: j,
            headerClassName: x,
            additionalManageWidgetMenuItems: _,
        } = e,
        P = (0, s.Dt)(),
        I = (0, c.e7)([u.default], () => u.default.getId() === t),
        { trackUserProfileAction: w } = (0, d.KZ)(),
        S = (0, g.Z)({
            widget: n,
            onAction: w,
        }),
        E = I && null != p && !l,
        T = () =>
            (0, r.jsxs)("div", {
                className: a()(v.container, f),
                children: [
                    (0, r.jsx)(b.Z, {
                        userId: t,
                        headingId: P,
                        title: h,
                        subtitle: y,
                        actionButtons: j,
                        widget: n,
                        disableInteraction: l,
                        className: x,
                    }),
                    (0, r.jsxs)(o.y5t, {
                        children: [i, m],
                    }),
                ],
            });
    return (0, r.jsx)("section", {
        ref: S,
        "aria-labelledby": P,
        children: E
            ? (0, r.jsx)(O, {
                  index: null != p ? p : 0,
                  widget: n,
                  additionalManageWidgetMenuItems: _,
                  children: T(),
              })
            : T(),
    });
}
