n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    d = n(915089),
    c = n(961350),
    u = n(183555),
    g = n(735321),
    m = n(94343),
    x = n(789290),
    p = n(451395),
    f = n(716804),
    h = n(19333),
    _ = n(557137),
    A = n(192),
    I = n(985018),
    j = n(856969);
function v(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: a, children: r, getWidth: o } = e,
        c = l.useRef(null),
        u = l.useRef(null),
        { registerManageWidgetButtonRef: m, manageFocusOnReorder: x } = (0, A.r)();
    l.useLayoutEffect(() => {
        let e = m(n.type);
        return e(c.current), () => e(null);
    }, [m, n.type]);
    let f = l.useMemo(() => n.id ?? (0, d.Ld)(), [n.id]),
        { isDragging: _, dragSourcePosition: v } = (0, p.gY)({
            dragRef: c,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: f,
            itemPreviewProps: { widget: n, getWidth: o },
            onReorder: g.R_,
            onEnd: () => x(n.type),
        }),
        E = null != v,
        T = E && t < v,
        b = E && t > v;
    return (0, i.jsxs)("div", {
        ref: u,
        className: s()(j.wX, { [j.A]: T, [j.Ze]: b, [j.Id]: _ }),
        "aria-label": I.intl.formatToPlainString(I.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(h.A, { buttonRef: c, widget: n, className: j.vn, additionalMenuItems: a }), r],
    });
}
function E(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            disableInteraction: g,
            className: p,
            index: h,
            trailingContent: A,
            headerTitle: I,
            headerSubtitle: E,
            headerActionButtons: T,
            headerClassName: b,
            additionalManageWidgetMenuItems: N,
        } = e,
        y = (0, d.GV)(),
        S = l.useRef(null),
        C = (0, o.bG)([c.default], () => c.default.getId() === t),
        R = (0, f.g)(),
        { trackUserProfileAction: k } = (0, u.NJ)(),
        w = (0, x.A)({ widget: n, onAction: k }),
        L = R === n.type;
    (0, m.A)(w, L);
    let O = C && null != h && !g,
        D = () =>
            (0, i.jsxs)("div", {
                ref: S,
                className: s()(j.kL, p),
                children: [
                    (0, i.jsx)(_.A, {
                        userId: t,
                        headingId: y,
                        title: I,
                        subtitle: E,
                        actionButtons: T,
                        widget: n,
                        disableInteraction: g,
                        className: b,
                    }),
                    (0, i.jsxs)(r.Fmo, { children: [a, A] }),
                ],
            });
    return (0, i.jsx)("section", {
        ref: w,
        "aria-labelledby": y,
        children: O
            ? (0, i.jsx)(v, {
                  index: h ?? 0,
                  widget: n,
                  getWidth: () => S.current?.offsetWidth,
                  additionalManageWidgetMenuItems: N,
                  children: D(),
              })
            : D(),
    });
}
