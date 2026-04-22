a.d(t, { A: () => f });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(3666),
    o = a(265872),
    c = a(900797),
    d = a(847374),
    u = a(770178),
    h = a(742589),
    m = a(346970),
    p = a(488995),
    _ = a(985018),
    g = a(58239);
function x(e) {
    let { id: t, label: a, selected: l, handleTransition: i, ...r } = e;
    return (0, n.jsx)(h.A.Title, {
        ...r,
        onClick: () => i(t),
        wrapperClassName: g.Vn,
        className: s()(g.Mf, { [g.wH]: l }),
        children: a,
    });
}
function A(e) {
    let { onTabSelect: t, tabs: a, selectedTab: i, selected: r } = e,
        u = l.useRef(null);
    return (0, n.jsx)(o.Y, {
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(m.A, { selectedTab: i, onClose: l, tabs: a, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, n.jsxs)(h.A.Title, {
                ...e,
                ref: u,
                wrapperClassName: g.Vn,
                className: s()(g.Mf, g.OS, { [g.wH]: r }),
                id: p.GlobalDiscoverySharedTabId.MORE,
                "aria-label": _.intl.string(_.t["UKOtz+"]),
                children: [
                    _.intl.string(_.t["UKOtz+"]),
                    a ? (0, n.jsx)(c.t, { size: "xs" }) : (0, n.jsx)(d.a, { size: "xs" }),
                ],
            });
        },
    });
}
function f(e) {
    let { className: t, selectedTab: a, tabs: i, onTabSelect: o, onAvailableWidthChange: c } = e,
        [d, h] = l.useState(0),
        m = l.useRef(d),
        {
            lastVisibleIndex: p,
            onItemLayout: _,
            overflowItemsRef: f,
            itemWidthsRef: C,
        } = (0, r.Wv)({ items: i, itemGapPx: 24, maxLines: 1, containerWidth: d }),
        v = l.useMemo(() => i.slice(0, p + 1), [p, i]),
        b = l.useMemo(() => i.slice(p + 1), [p, i]),
        j = l.useRef(null),
        I = l.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || m.current === t) return;
                h(t), (m.current = t);
                let a = t - C.current.reduce((e, t, a) => e + t + 24 * (0 !== a));
                c?.(a);
            },
            [C, c],
        );
    (0, u.g)(j, I);
    let E = 0 !== d,
        N = b.some((e) => e.id === a);
    return (0, n.jsxs)("div", {
        className: s()(g.kL, t),
        ref: j,
        children: [
            (0, n.jsxs)("div", {
                className: g.Kk,
                children: [
                    i.map((e, t) =>
                        (0, n.jsx)(
                            r.Ae,
                            {
                                index: t,
                                onItemLayout: _,
                                children: (0, n.jsx)(
                                    x,
                                    { id: e.id, label: e.label, selected: a === e.id, handleTransition: o },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: f,
                        children: (0, n.jsx)(A, { tabs: b, onTabSelect: o, selectedTab: a, selected: N }),
                    }),
                ],
            }),
            E &&
                (0, n.jsxs)("div", {
                    className: g.vR,
                    children: [
                        v.map((e) =>
                            (0, n.jsx)(
                                x,
                                { id: e.id, label: e.label, selected: a === e.id, handleTransition: o },
                                e.id,
                            ),
                        ),
                        0 !== b.length ? (0, n.jsx)(A, { tabs: b, onTabSelect: o, selectedTab: a, selected: N }) : null,
                    ],
                }),
        ],
    });
}
