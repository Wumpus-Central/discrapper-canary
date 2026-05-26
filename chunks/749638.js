s.d(l, { n: () => S, S: () => g });
var t,
    r = s(627968),
    a = s(64700),
    n = s(503698),
    i = s.n(n),
    c = s(742589),
    o = s(3666),
    d = s(922016),
    u = s(900797),
    x = s(847374),
    h = s(770178),
    m = s(124589),
    b = s(488995),
    j = s(375708),
    v = s(744767);
function f(e) {
    let { id: l, label: s, selected: t, handleTransition: a, ...n } = e;
    return (0, r.jsx)(c.A.Title, {
        ...n,
        onClick: () => a(l),
        wrapperClassName: v.Vn,
        className: i()(v.Mf, { [v.wH]: t }),
        role: "tab",
        "aria-selected": t,
        tabIndex: t ? 0 : -1,
        children: s,
    });
}
function p(e) {
    let { onTabSelect: l, tabs: s, selectedTab: t, selected: n } = e,
        o = a.useRef(null);
    return (0, r.jsx)(d.Y, {
        targetElementRef: o,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(m.A, { selectedTab: t, onClose: a, tabs: s, onTabSelect: l });
        },
        position: "bottom",
        align: "left",
        children: (e, l) => {
            let { isShown: s } = l;
            return (0, r.jsxs)(c.A.Title, {
                ...e,
                ref: o,
                wrapperClassName: v.Vn,
                className: i()(v.Mf, v.OS, { [v.wH]: n }),
                id: b.GlobalDiscoverySharedTabId.MORE,
                "aria-label": j.intl.string(j.t["UKOtz+"]),
                role: "tab",
                "aria-selected": n,
                tabIndex: n ? 0 : -1,
                children: [
                    j.intl.string(j.t["UKOtz+"]),
                    s ? (0, r.jsx)(u.t, { size: "xs" }) : (0, r.jsx)(x.a, { size: "xs" }),
                ],
            });
        },
    });
}
function A(e) {
    let { className: l, selectedTab: s, tabs: t, onTabSelect: n, onAvailableWidthChange: c } = e,
        [d, u] = a.useState(0),
        x = a.useRef(d),
        {
            lastVisibleIndex: m,
            onItemLayout: b,
            overflowItemsRef: j,
            itemWidthsRef: A,
        } = (0, o.Wv)({ items: t, itemGapPx: 24, maxLines: 1, containerWidth: d }),
        T = a.useMemo(() => t.slice(0, m + 1), [m, t]),
        S = a.useMemo(() => t.slice(m + 1), [m, t]),
        g = a.useRef(null),
        N = a.useCallback(
            (e) => {
                let l = e.contentRect.width;
                if (null == l || x.current === l) return;
                u(l), (x.current = l);
                let s = l - A.current.reduce((e, l, s) => e + l + 24 * (0 !== s));
                c?.(s);
            },
            [A, c],
        );
    (0, h.g)(g, N);
    let C = 0 !== d,
        w = S.some((e) => e.id === s);
    return (0, r.jsxs)("div", {
        className: i()(v.kL, l),
        ref: g,
        children: [
            (0, r.jsxs)("div", {
                className: v.Kk,
                "aria-hidden": !0,
                children: [
                    t.map((e, l) =>
                        (0, r.jsx)(
                            o.Ae,
                            {
                                index: l,
                                onItemLayout: b,
                                children: (0, r.jsx)(
                                    f,
                                    { id: e.id, label: e.label, selected: s === e.id, handleTransition: n },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        ref: j,
                        children: (0, r.jsx)(p, { tabs: S, onTabSelect: n, selectedTab: s, selected: w }),
                    }),
                ],
            }),
            C &&
                (0, r.jsxs)("div", {
                    className: v.vR,
                    role: "tablist",
                    children: [
                        T.map((e) =>
                            (0, r.jsx)(
                                f,
                                { id: e.id, label: e.label, selected: s === e.id, handleTransition: n },
                                e.id,
                            ),
                        ),
                        0 !== S.length ? (0, r.jsx)(p, { tabs: S, onTabSelect: n, selectedTab: s, selected: w }) : null,
                    ],
                }),
        ],
    });
}
var T = s(670798),
    S = (((t = {}).DEFAULT = "DEFAULT"), (t.SEARCH = "SEARCH"), t);
function g(e) {
    let {
        selectedTabId: l,
        handleTransition: s,
        tabs: t,
        state: a = "DEFAULT",
        onAvailableWidthChange: n,
        icon: o,
        endContent: d,
        children: u,
    } = e;
    return (0, r.jsxs)(c.A, {
        className: T.jr,
        toolbar: d,
        hideSearch: !0,
        children: [
            "DEFAULT" === a &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o, { color: "currentColor", size: "md" }),
                        (0, r.jsx)(A, { tabs: t, selectedTab: l, onTabSelect: s, onAvailableWidthChange: n }),
                    ],
                }),
            (0, r.jsx)("div", { className: i()(T.w4, { [T.cS]: "SEARCH" === a }), children: u }),
        ],
    });
}
