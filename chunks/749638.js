t.d(l, { n: () => S, S: () => T });
var r,
    n = t(477900),
    s = t(582128),
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
    p = t(506022);
function v(e) {
    let { id: l, label: t, selected: r, handleTransition: s, onKeyDown: a, ...o } = e;
    return (0, n.jsx)(c.A.Title, {
        ...o,
        onClick: () => s(l),
        onKeyDown: a,
        wrapperClassName: p.Vn,
        className: i()(p.Mf, { [p.wH]: r }),
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
                wrapperClassName: p.Vn,
                className: i()(p.Mf, p.OS, { [p.wH]: a }),
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
function g(e) {
    let { className: l, selectedTab: t, tabs: r, onTabSelect: a, onAvailableWidthChange: c } = e,
        [d, u] = s.useState(0),
        h = s.useRef(d),
        {
            lastVisibleIndex: x,
            onItemLayout: f,
            overflowItemsRef: j,
            itemWidthsRef: g,
        } = (0, o.Wv)({ items: r, itemGapPx: 24, maxLines: 1, containerWidth: d }),
        R = s.useMemo(() => r.slice(0, x + 1), [x, r]),
        S = s.useMemo(() => r.slice(x + 1), [x, r]),
        T = s.useRef(null),
        w = s.useCallback(
            (e) => {
                let l = e.contentRect.width;
                if (null == l || h.current === l) return;
                u(l), (h.current = l);
                let t = l - g.current.reduce((e, l, t) => e + l + 24 * (0 !== t));
                c?.(t);
            },
            [g, c],
        );
    (0, b.g)(T, w);
    let C = 0 !== d,
        k = S.some((e) => e.id === t),
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
        className: i()(p.kL, l),
        ref: T,
        children: [
            (0, n.jsxs)("div", {
                className: p.Kk,
                "aria-hidden": !0,
                children: [
                    r.map((e, l) =>
                        (0, n.jsx)(
                            o.Ae,
                            {
                                index: l,
                                onItemLayout: f,
                                children: (0, n.jsx)(
                                    v,
                                    { id: e.id, label: e.label, selected: t === e.id, handleTransition: a },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: j,
                        children: (0, n.jsx)(A, { tabs: S, onTabSelect: a, selectedTab: t, selected: k }),
                    }),
                ],
            }),
            C &&
                (0, n.jsxs)("div", {
                    className: p.vR,
                    role: "tablist",
                    children: [
                        R.map((e) =>
                            (0, n.jsx)(
                                v,
                                { id: e.id, label: e.label, selected: t === e.id, handleTransition: a, onKeyDown: y },
                                e.id,
                            ),
                        ),
                        0 !== S.length
                            ? (0, n.jsx)(A, { tabs: S, onTabSelect: a, selectedTab: t, selected: k, onKeyDown: y })
                            : null,
                    ],
                }),
        ],
    });
}
var R = t(701245),
    S = (((r = {}).DEFAULT = "DEFAULT"), (r.SEARCH = "SEARCH"), r);
function T(e) {
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
        className: R.jr,
        toolbar: d,
        disableFocusRingScope: !0,
        hideSearch: !0,
        children: [
            "DEFAULT" === s &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(o, { color: "currentColor", size: "md" }),
                        (0, n.jsx)(g, { tabs: r, selectedTab: l, onTabSelect: t, onAvailableWidthChange: a }),
                    ],
                }),
            (0, n.jsx)("div", { className: i()(R.w4, { [R.cS]: "SEARCH" === s }), children: u }),
        ],
    });
}
