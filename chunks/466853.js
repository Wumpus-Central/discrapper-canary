n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(707554),
    o = n(311907),
    c = n(915089),
    d = n(961350),
    u = n(183555),
    m = n(735321),
    p = n(94343),
    h = n(789290),
    g = n(451395),
    x = n(716804),
    f = n(19333),
    E = n(557137),
    y = n(192),
    T = n(985018),
    v = n(686186);
function A(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: a, children: s, getWidth: o } = e,
        d = l.useRef(null),
        u = l.useRef(null),
        { registerManageWidgetButtonRef: p, manageFocusOnReorder: h } = (0, y.r)();
    l.useLayoutEffect(() => {
        let e = p(n.type);
        return e(d.current), () => e(null);
    }, [p, n.type]);
    let x = l.useMemo(() => n.id ?? (0, c.Ld)(), [n.id]),
        { isDragging: E, dragSourcePosition: A } = (0, g.gY)({
            dragRef: d,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: x,
            itemPreviewProps: { widget: n, getWidth: o },
            onReorder: m.R_,
            onEnd: () => h(n.type),
        }),
        j = null != A,
        I = j && t < A,
        _ = j && t > A;
    return (0, i.jsxs)("div", {
        ref: u,
        className: r()(v.wX, { [v.A]: I, [v.Ze]: _, [v.Id]: E }),
        "aria-label": T.intl.formatToPlainString(T.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(f.A, { buttonRef: d, widget: n, className: v.vn, additionalMenuItems: a }), s],
    });
}
function j(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            disableInteraction: m,
            className: g,
            index: f,
            trailingContent: y,
            headerTitle: T,
            headerSubtitle: j,
            headerActionButtons: I,
            headerClassName: _,
            additionalManageWidgetMenuItems: R,
        } = e,
        b = (0, c.GV)(),
        N = l.useRef(null),
        D = (0, o.bG)([d.default], () => d.default.getId() === t),
        C = (0, x.g)(),
        { trackUserProfileAction: P } = (0, u.NJ)(),
        w = (0, h.A)({ widget: n, onAction: P }),
        L = C === n.type;
    (0, p.A)(w, L);
    let G = D && null != f && !m,
        O = () =>
            (0, i.jsxs)("div", {
                ref: N,
                className: r()(v.kL, g),
                children: [
                    (0, i.jsx)(E.A, {
                        userId: t,
                        headingId: b,
                        title: T,
                        subtitle: j,
                        actionButtons: I,
                        widget: n,
                        disableInteraction: m,
                        className: _,
                    }),
                    (0, i.jsxs)(s.F, { children: [a, y] }),
                ],
            });
    return (0, i.jsx)("section", {
        ref: w,
        "aria-labelledby": b,
        children: G
            ? (0, i.jsx)(A, {
                  index: f ?? 0,
                  widget: n,
                  getWidth: () => N.current?.offsetWidth,
                  additionalManageWidgetMenuItems: R,
                  children: O(),
              })
            : O(),
    });
}
