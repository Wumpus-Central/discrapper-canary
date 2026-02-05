a.d(t, { A: () => x });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(3666),
    o = a(397927),
    c = a(770178),
    d = a(742589),
    u = a(124589),
    h = a(488995),
    m = a(985018),
    p = a(402664);
function _(e) {
    let { id: t, label: a, selected: i, handleTransition: s, ...r } = e;
    return (0, n.jsx)(d.A.Title, {
        ...r,
        onClick: () => s(t),
        wrapperClassName: p.Vn,
        className: l()(p.Mf, { [p.wH]: i }),
        children: a,
    });
}
function g(e) {
    let { onTabSelect: t, tabs: a, selectedTab: s, selected: r } = e,
        c = i.useRef(null);
    return (0, n.jsx)(o.YNO, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(u.A, { selectedTab: s, onClose: i, tabs: a, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, n.jsxs)(d.A.Title, {
                ...e,
                ref: c,
                wrapperClassName: p.Vn,
                className: l()(p.Mf, p.OS, { [p.wH]: r }),
                id: h.GlobalDiscoverySharedTabId.MORE,
                "aria-label": m.intl.string(m.t["UKOtz+"]),
                children: [
                    m.intl.string(m.t["UKOtz+"]),
                    a ? (0, n.jsx)(o.tN5, { size: "xs" }) : (0, n.jsx)(o.abt, { size: "xs" }),
                ],
            });
        },
    });
}
function x(e) {
    let { className: t, selectedTab: a, tabs: s, onTabSelect: o, onAvailableWidthChange: d } = e,
        [u, h] = i.useState(0),
        m = i.useRef(u),
        {
            lastVisibleIndex: x,
            onItemLayout: A,
            overflowItemsRef: C,
            itemWidthsRef: b,
        } = (0, r.Wv)({ items: s, itemGapPx: 24, maxLines: 1, containerWidth: u }),
        v = i.useMemo(() => s.slice(0, x + 1), [x, s]),
        f = i.useMemo(() => s.slice(x + 1), [x, s]),
        j = i.useRef(null),
        I = i.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || m.current === t) return;
                h(t), (m.current = t);
                let a = t - b.current.reduce((e, t, a) => e + t + 24 * (0 !== a));
                d?.(a);
            },
            [b, d],
        );
    (0, c.g)(j, I);
    let E = 0 !== u,
        S = f.some((e) => e.id === a);
    return (0, n.jsxs)("div", {
        className: l()(p.kL, t),
        ref: j,
        children: [
            (0, n.jsxs)("div", {
                className: p.Kk,
                children: [
                    s.map((e, t) =>
                        (0, n.jsx)(
                            r.Ae,
                            {
                                index: t,
                                onItemLayout: A,
                                children: (0, n.jsx)(
                                    _,
                                    { id: e.id, label: e.label, selected: a === e.id, handleTransition: o },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: C,
                        children: (0, n.jsx)(g, { tabs: f, onTabSelect: o, selectedTab: a, selected: S }),
                    }),
                ],
            }),
            E &&
                (0, n.jsxs)("div", {
                    className: p.vR,
                    children: [
                        v.map((e) =>
                            (0, n.jsx)(
                                _,
                                { id: e.id, label: e.label, selected: a === e.id, handleTransition: o },
                                e.id,
                            ),
                        ),
                        0 !== f.length ? (0, n.jsx)(g, { tabs: f, onTabSelect: o, selectedTab: a, selected: S }) : null,
                    ],
                }),
        ],
    });
}
