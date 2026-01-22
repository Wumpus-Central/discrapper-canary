n.d(t, { A: () => A });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(311907),
    c = n(915089),
    u = n(961350),
    d = n(183555),
    f = n(735321),
    p = n(94343),
    b = n(789290),
    g = n(451395),
    m = n(716804),
    y = n(19333),
    O = n(557137),
    j = n(192),
    x = n(985018),
    h = n(856969);
function v(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: i, children: s } = e,
        o = l.useRef(null),
        u = l.useRef(null),
        { registerManageWidgetButtonRef: d, manageFocusOnReorder: p } = (0, j.r)();
    l.useLayoutEffect(() => {
        let e = d(n.type);
        return e(o.current), () => e(null);
    }, [d, n.type]);
    let b = l.useMemo(() => {
            var e;
            return null != (e = n.id) ? e : (0, c.Ld)();
        }, [n.id]),
        { isDragging: m, dragSourcePosition: O } = (0, g.gY)({
            dragRef: o,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: b,
            itemPreviewProps: { widget: n },
            onReorder: f.R_,
            onEnd: () => p(n.type),
        }),
        v = null != O,
        A = v && t < O,
        w = v && t > O;
    return (0, r.jsxs)("div", {
        ref: u,
        className: a()(h.wX, {
            [h.A]: A,
            [h.Ze]: w,
            [h.Id]: m,
        }),
        "aria-label": x.intl.formatToPlainString(x.t.YLczh4, { positionNumber: t + 1 }),
        children: [
            (0, r.jsx)(y.A, {
                buttonRef: o,
                widget: n,
                className: h.vn,
                additionalMenuItems: i,
            }),
            s,
        ],
    });
}
function A(e) {
    let {
            userId: t,
            widget: n,
            children: l,
            disableInteraction: i,
            className: f,
            index: g,
            trailingContent: y,
            headerTitle: j,
            headerSubtitle: x,
            headerActionButtons: A,
            headerClassName: w,
            additionalManageWidgetMenuItems: I,
        } = e,
        P = (0, c.GV)(),
        E = (0, o.bG)([u.default], () => u.default.getId() === t),
        S = (0, m.g)(),
        { trackUserProfileAction: T } = (0, d.NJ)(),
        _ = (0, b.A)({
            widget: n,
            onAction: T,
        }),
        N = S === n.type;
    (0, p.A)(_, N);
    let D = E && null != g && !i,
        R = () =>
            (0, r.jsxs)("div", {
                className: a()(h.kL, f),
                children: [
                    (0, r.jsx)(O.A, {
                        userId: t,
                        headingId: P,
                        title: j,
                        subtitle: x,
                        actionButtons: A,
                        widget: n,
                        disableInteraction: i,
                        className: w,
                    }),
                    (0, r.jsxs)(s.Fmo, {
                        children: [l, y],
                    }),
                ],
            });
    return (0, r.jsx)("section", {
        ref: _,
        "aria-labelledby": P,
        children: D
            ? (0, r.jsx)(v, {
                  index: null != g ? g : 0,
                  widget: n,
                  additionalManageWidgetMenuItems: I,
                  children: R(),
              })
            : R(),
    });
}
