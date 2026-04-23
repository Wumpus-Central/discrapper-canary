a.d(t, { n: () => b, S: () => j });
var n,
    l = a(627968),
    i = a(64700),
    s = a(503698),
    r = a.n(s),
    o = a(742589),
    c = a(3666),
    d = a(922016),
    u = a(900797),
    h = a(847374),
    m = a(770178),
    p = a(124589),
    _ = a(488995),
    g = a(985018),
    x = a(744767);
function A(e) {
    let { id: t, label: a, selected: n, handleTransition: i, ...s } = e;
    return (0, l.jsx)(o.A.Title, {
        ...s,
        onClick: () => i(t),
        wrapperClassName: x.Vn,
        className: r()(x.Mf, { [x.wH]: n }),
        children: a,
    });
}
function f(e) {
    let { onTabSelect: t, tabs: a, selectedTab: n, selected: s } = e,
        c = i.useRef(null);
    return (0, l.jsx)(d.Y, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(p.A, { selectedTab: n, onClose: i, tabs: a, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, l.jsxs)(o.A.Title, {
                ...e,
                ref: c,
                wrapperClassName: x.Vn,
                className: r()(x.Mf, x.OS, { [x.wH]: s }),
                id: _.GlobalDiscoverySharedTabId.MORE,
                "aria-label": g.intl.string(g.t["UKOtz+"]),
                children: [
                    g.intl.string(g.t["UKOtz+"]),
                    a ? (0, l.jsx)(u.t, { size: "xs" }) : (0, l.jsx)(h.a, { size: "xs" }),
                ],
            });
        },
    });
}
function C(e) {
    let { className: t, selectedTab: a, tabs: n, onTabSelect: s, onAvailableWidthChange: o } = e,
        [d, u] = i.useState(0),
        h = i.useRef(d),
        {
            lastVisibleIndex: p,
            onItemLayout: _,
            overflowItemsRef: g,
            itemWidthsRef: C,
        } = (0, c.Wv)({ items: n, itemGapPx: 24, maxLines: 1, containerWidth: d }),
        v = i.useMemo(() => n.slice(0, p + 1), [p, n]),
        b = i.useMemo(() => n.slice(p + 1), [p, n]),
        j = i.useRef(null),
        I = i.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || h.current === t) return;
                u(t), (h.current = t);
                let a = t - C.current.reduce((e, t, a) => e + t + 24 * (0 !== a));
                o?.(a);
            },
            [C, o],
        );
    (0, m.g)(j, I);
    let E = 0 !== d,
        N = b.some((e) => e.id === a);
    return (0, l.jsxs)("div", {
        className: r()(x.kL, t),
        ref: j,
        children: [
            (0, l.jsxs)("div", {
                className: x.Kk,
                children: [
                    n.map((e, t) =>
                        (0, l.jsx)(
                            c.Ae,
                            {
                                index: t,
                                onItemLayout: _,
                                children: (0, l.jsx)(
                                    A,
                                    { id: e.id, label: e.label, selected: a === e.id, handleTransition: s },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, l.jsx)("div", {
                        ref: g,
                        children: (0, l.jsx)(f, { tabs: b, onTabSelect: s, selectedTab: a, selected: N }),
                    }),
                ],
            }),
            E &&
                (0, l.jsxs)("div", {
                    className: x.vR,
                    children: [
                        v.map((e) =>
                            (0, l.jsx)(
                                A,
                                { id: e.id, label: e.label, selected: a === e.id, handleTransition: s },
                                e.id,
                            ),
                        ),
                        0 !== b.length ? (0, l.jsx)(f, { tabs: b, onTabSelect: s, selectedTab: a, selected: N }) : null,
                    ],
                }),
        ],
    });
}
var v = a(670798),
    b = (((n = {}).DEFAULT = "DEFAULT"), (n.SEARCH = "SEARCH"), n);
function j(e) {
    let {
        selectedTabId: t,
        handleTransition: a,
        tabs: n,
        state: i = "DEFAULT",
        onAvailableWidthChange: s,
        icon: c,
        endContent: d,
        children: u,
    } = e;
    return (0, l.jsxs)(o.A, {
        className: v.jr,
        toolbar: d,
        hideSearch: !0,
        children: [
            "DEFAULT" === i &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c, { color: "currentColor", size: "md" }),
                        (0, l.jsx)(C, { tabs: n, selectedTab: t, onTabSelect: a, onAvailableWidthChange: s }),
                    ],
                }),
            (0, l.jsx)("div", { className: r()(v.w4, { [v.cS]: "SEARCH" === i }), children: u }),
        ],
    });
}
