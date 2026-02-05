n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(158954),
    o = n(311907),
    d = n(915089),
    c = n(961350),
    u = n(183555),
    g = n(735321),
    m = n(94343),
    x = n(789290),
    f = n(451395),
    h = n(716804),
    p = n(19333),
    _ = n(557137),
    A = n(192),
    I = n(985018),
    j = n(856969);
function v(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: a, children: s } = e,
        o = l.useRef(null),
        c = l.useRef(null),
        { registerManageWidgetButtonRef: u, manageFocusOnReorder: m } = (0, A.r)();
    l.useLayoutEffect(() => {
        let e = u(n.type);
        return e(o.current), () => e(null);
    }, [u, n.type]);
    let x = l.useMemo(() => n.id ?? (0, d.Ld)(), [n.id]),
        { isDragging: h, dragSourcePosition: _ } = (0, f.gY)({
            dragRef: o,
            dropRef: c,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: x,
            itemPreviewProps: { widget: n },
            onReorder: g.R_,
            onEnd: () => m(n.type),
        }),
        v = null != _,
        T = v && t < _,
        E = v && t > _;
    return (0, i.jsxs)("div", {
        ref: c,
        className: r()(j.wX, { [j.A]: T, [j.Ze]: E, [j.Id]: h }),
        "aria-label": I.intl.formatToPlainString(I.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(p.A, { buttonRef: o, widget: n, className: j.vn, additionalMenuItems: a }), s],
    });
}
function T(e) {
    let {
            userId: t,
            widget: n,
            children: l,
            disableInteraction: a,
            className: g,
            index: f,
            trailingContent: p,
            headerTitle: A,
            headerSubtitle: I,
            headerActionButtons: T,
            headerClassName: E,
            additionalManageWidgetMenuItems: b,
        } = e,
        y = (0, d.GV)(),
        C = (0, o.bG)([c.default], () => c.default.getId() === t),
        N = (0, h.g)(),
        { trackUserProfileAction: S } = (0, u.NJ)(),
        w = (0, x.A)({ widget: n, onAction: S }),
        k = N === n.type;
    (0, m.A)(w, k);
    let R = C && null != f && !a,
        O = () =>
            (0, i.jsxs)("div", {
                className: r()(j.kL, g),
                children: [
                    (0, i.jsx)(_.A, {
                        userId: t,
                        headingId: y,
                        title: A,
                        subtitle: I,
                        actionButtons: T,
                        widget: n,
                        disableInteraction: a,
                        className: E,
                    }),
                    (0, i.jsxs)(s.Fmo, { children: [l, p] }),
                ],
            });
    return (0, i.jsx)("section", {
        ref: w,
        "aria-labelledby": y,
        children: R
            ? (0, i.jsx)(v, { index: f ?? 0, widget: n, additionalManageWidgetMenuItems: b, children: O() })
            : O(),
    });
}
