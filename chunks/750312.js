n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(793030),
    c = n(442837),
    s = n(313201),
    u = n(314897),
    d = n(785717),
    f = n(86419),
    g = n(938111),
    p = n(982072),
    b = n(780899),
    m = n(104287),
    h = n(939974),
    y = n(840367),
    v = n(34335),
    O = n(388032),
    j = n(391122);
function x(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: a, children: o } = e,
        c = i.useRef(null),
        u = i.useRef(null),
        { registerManageWidgetButtonRef: d, manageFocusOnReorder: g } = (0, v.j)();
    i.useLayoutEffect(() => {
        let e = d(n.type);
        return e(c.current), () => e(null);
    }, [d, n.type]);
    let p = i.useMemo(() => {
            var e;
            return null != (e = n.id) ? e : (0, s.hQ)();
        }, [n.id]),
        { isDragging: m, dragSourcePosition: y } = (0, b.Y9)({
            dragRef: c,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: p,
            itemPreviewProps: { widget: n },
            onReorder: f.IM,
            onEnd: () => g(n.type),
        }),
        x = null != y,
        P = x && t < y,
        w = x && t > y;
    return (0, r.jsxs)("div", {
        ref: u,
        className: l()(j.dragAndDropTarget, {
            [j.dropIndicatorBefore]: P,
            [j.dropIndicatorAfter]: w,
            [j.isDragging]: m,
        }),
        "aria-label": O.intl.formatToPlainString(O.t.YLczh4, { positionNumber: t + 1 }),
        children: [
            (0, r.jsx)(h.Z, {
                buttonRef: c,
                widget: n,
                className: j.dragHandleButton,
                additionalMenuItems: a,
            }),
            o,
        ],
    });
}
function P(e) {
    let {
            userId: t,
            widget: n,
            children: i,
            disableInteraction: a,
            className: f,
            index: b,
            trailingContent: h,
            headerTitle: v,
            headerSubtitle: O,
            headerActionButtons: P,
            headerClassName: w,
            additionalManageWidgetMenuItems: I,
        } = e,
        S = (0, s.Dt)(),
        E = (0, c.e7)([u.default], () => u.default.getId() === t),
        T = (0, m.b)(),
        { trackUserProfileAction: _ } = (0, d.KZ)(),
        C = (0, p.Z)({
            widget: n,
            onAction: _,
        }),
        D = T === n.type;
    (0, g.Z)(C, D);
    let k = E && null != b && !a,
        N = () =>
            (0, r.jsxs)("div", {
                className: l()(j.container, f),
                children: [
                    (0, r.jsx)(y.Z, {
                        userId: t,
                        headingId: S,
                        title: v,
                        subtitle: O,
                        actionButtons: P,
                        widget: n,
                        disableInteraction: a,
                        className: w,
                    }),
                    (0, r.jsxs)(o.y5t, {
                        children: [i, h],
                    }),
                ],
            });
    return (0, r.jsx)("section", {
        ref: C,
        "aria-labelledby": S,
        children: k
            ? (0, r.jsx)(x, {
                  index: null != b ? b : 0,
                  widget: n,
                  additionalManageWidgetMenuItems: I,
                  children: N(),
              })
            : N(),
    });
}
