t.d(l, { n: () => R, S: () => S });
var r,
    n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    c = t(742589),
    o = t(3666),
    d = t(922016),
    u = t(900797),
    h = t(847374),
    b = t(770178),
    x = t(124589),
    f = t(488995),
    m = t(650583),
    j = t(375708),
    v = t(744767);
function p(e) {
    let { id: l, label: t, selected: r, handleTransition: s, onKeyDown: a, ...o } = e;
    return (0, n.jsx)(c.A.Title, {
        ...o,
        onClick: () => s(l),
        onKeyDown: a,
        wrapperClassName: v.Vn,
        className: i()(v.Mf, { [v.wH]: r }),
        role: "tab",
        "aria-selected": r,
        tabIndex: r ? 0 : -1,
        children: t,
    });
}
function A(e) {
    let { onTabSelect: l, tabs: t, selectedTab: r, selected: a, onKeyDown: o } = e,
        b = s.useRef(null);
    return (0, n.jsx)(d.Y, {
        targetElementRef: b,
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(x.A, { selectedTab: r, onClose: s, tabs: t, onTabSelect: l });
        },
        position: "bottom",
        align: "left",
        children: (e, l) => {
            let { isShown: t } = l;
            return (0, n.jsxs)(c.A.Title, {
                ...e,
                ref: b,
                onKeyDown: o,
                wrapperClassName: v.Vn,
                className: i()(v.Mf, v.OS, { [v.wH]: a }),
                id: f.GlobalDiscoverySharedTabId.MORE,
                "aria-label": j.intl.string(j.t["UKOtz+"]),
                role: "tab",
                "aria-selected": a,
                tabIndex: a ? 0 : -1,
                children: [
                    j.intl.string(j.t["UKOtz+"]),
                    t ? (0, n.jsx)(u.t, { size: "xs" }) : (0, n.jsx)(h.a, { size: "xs" }),
                ],
            });
        },
    });
}
function T(e) {
    let { className: l, selectedTab: t, tabs: r, onTabSelect: a, onAvailableWidthChange: c } = e,
        [d, u] = s.useState(0),
        h = s.useRef(d),
        {
            lastVisibleIndex: x,
            onItemLayout: f,
            overflowItemsRef: j,
            itemWidthsRef: T,
        } = (0, o.Wv)({ items: r, itemGapPx: 24, maxLines: 1, containerWidth: d }),
        g = s.useMemo(() => r.slice(0, x + 1), [x, r]),
        R = s.useMemo(() => r.slice(x + 1), [x, r]),
        S = s.useRef(null),
        w = s.useCallback(
            (e) => {
                let l = e.contentRect.width;
                if (null == l || h.current === l) return;
                u(l), (h.current = l);
                let t = l - T.current.reduce((e, l, t) => e + l + 24 * (0 !== t));
                c?.(t);
            },
            [T, c],
        );
    (0, b.g)(S, w);
    let C = 0 !== d,
        k = R.some((e) => e.id === t),
        y = s.useCallback((e) => {
            let l,
                t = e.currentTarget,
                r = t.closest('[role="tablist"]');
            if (null == r) return;
            let n = Array.from(r.querySelectorAll('[role="tab"]')),
                s = n.indexOf(t);
            if (-1 !== s && 0 !== n.length) {
                switch (e.key) {
                    case m.dh.ARROW_RIGHT:
                    case m.dh.ARROW_DOWN:
                        l = (s + 1) % n.length;
                        break;
                    case m.dh.ARROW_LEFT:
                    case m.dh.ARROW_UP:
                        l = (s - 1 + n.length) % n.length;
                        break;
                    case m.dh.HOME:
                        l = 0;
                        break;
                    case m.dh.END:
                        l = n.length - 1;
                        break;
                    default:
                        return;
                }
                e.preventDefault(), n[l]?.focus();
            }
        }, []);
    return (0, n.jsxs)("div", {
        className: i()(v.kL, l),
        ref: S,
        children: [
            (0, n.jsxs)("div", {
                className: v.Kk,
                "aria-hidden": !0,
                children: [
                    r.map((e, l) =>
                        (0, n.jsx)(
                            o.Ae,
                            {
                                index: l,
                                onItemLayout: f,
                                children: (0, n.jsx)(
                                    p,
                                    { id: e.id, label: e.label, selected: t === e.id, handleTransition: a },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: j,
                        children: (0, n.jsx)(A, { tabs: R, onTabSelect: a, selectedTab: t, selected: k }),
                    }),
                ],
            }),
            C &&
                (0, n.jsxs)("div", {
                    className: v.vR,
                    role: "tablist",
                    children: [
                        g.map((e) =>
                            (0, n.jsx)(
                                p,
                                { id: e.id, label: e.label, selected: t === e.id, handleTransition: a, onKeyDown: y },
                                e.id,
                            ),
                        ),
                        0 !== R.length
                            ? (0, n.jsx)(A, { tabs: R, onTabSelect: a, selectedTab: t, selected: k, onKeyDown: y })
                            : null,
                    ],
                }),
        ],
    });
}
var g = t(670798),
    R = (((r = {}).DEFAULT = "DEFAULT"), (r.SEARCH = "SEARCH"), r);
function S(e) {
    let {
        selectedTabId: l,
        handleTransition: t,
        tabs: r,
        state: s = "DEFAULT",
        onAvailableWidthChange: a,
        icon: o,
        endContent: d,
        children: u,
    } = e;
    return (0, n.jsxs)(c.A, {
        className: g.jr,
        toolbar: d,
        hideSearch: !0,
        children: [
            "DEFAULT" === s &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(o, { color: "currentColor", size: "md" }),
                        (0, n.jsx)(T, { tabs: r, selectedTab: l, onTabSelect: t, onAvailableWidthChange: a }),
                    ],
                }),
            (0, n.jsx)("div", { className: i()(g.w4, { [g.cS]: "SEARCH" === s }), children: u }),
        ],
    });
}
