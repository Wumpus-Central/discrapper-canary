t.d(l, { n: () => R, S: () => S });
var r,
    s = t(477900),
    n = t(582128),
    a = t(503698),
    i = t.n(a),
    c = t(742589),
    o = t(922016),
    d = t(900797),
    u = t(847374),
    h = t(3666),
    b = t(770178),
    x = t(124589),
    f = t(488995),
    m = t(650583),
    j = t(375708),
    p = t(506022);
function v(e) {
    let { id: l, label: t, selected: r, handleTransition: n, onKeyDown: a, ...o } = e;
    return (0, s.jsx)(c.A.Title, {
        ...o,
        onClick: () => n(l),
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
    let { onTabSelect: l, tabs: t, selectedTab: r, selected: a, onKeyDown: h } = e,
        b = n.useRef(null);
    return (0, s.jsx)(o.Y, {
        targetElementRef: b,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, s.jsx)(x.A, { selectedTab: r, onClose: n, tabs: t, onTabSelect: l });
        },
        position: "bottom",
        align: "left",
        children: (e, l) => {
            let { isShown: t } = l;
            return (0, s.jsxs)(c.A.Title, {
                ...e,
                ref: b,
                onKeyDown: h,
                wrapperClassName: p.Vn,
                className: i()(p.Mf, p.OS, { [p.wH]: a }),
                id: f.GlobalDiscoverySharedTabId.MORE,
                "aria-label": j.intl.string(j.t["UKOtz+"]),
                role: "tab",
                "aria-selected": a,
                tabIndex: a ? 0 : -1,
                children: [
                    j.intl.string(j.t["UKOtz+"]),
                    t ? (0, s.jsx)(d.t, { size: "xs" }) : (0, s.jsx)(u.a, { size: "xs" }),
                ],
            });
        },
    });
}
function T(e) {
    let { className: l, selectedTab: t, tabs: r, onTabSelect: a, onAvailableWidthChange: c } = e,
        [o, d] = n.useState(0),
        u = n.useRef(o),
        {
            lastVisibleIndex: x,
            onItemLayout: f,
            overflowItemsRef: j,
            itemWidthsRef: T,
        } = (0, h.Wv)({ items: r, itemGapPx: 24, maxLines: 1, containerWidth: o }),
        g = n.useMemo(() => r.slice(0, x + 1), [x, r]),
        R = n.useMemo(() => r.slice(x + 1), [x, r]),
        S = n.useRef(null),
        w = n.useCallback(
            (e) => {
                let l = e.contentRect.width;
                if (null == l || u.current === l) return;
                (d(l), (u.current = l));
                let t = l - T.current.reduce((e, l, t) => e + l + 24 * (0 !== t));
                c?.(t);
            },
            [T, c],
        );
    (0, b.g)(S, w);
    let k = 0 !== o,
        C = R.some((e) => e.id === t),
        y = n.useCallback((e) => {
            let l,
                t = e.currentTarget,
                r = t.closest('[role="tablist"]');
            if (null == r) return;
            let s = Array.from(r.querySelectorAll('[role="tab"]')),
                n = s.indexOf(t);
            if (-1 !== n && 0 !== s.length) {
                switch (e.key) {
                    case m.dh.ARROW_RIGHT:
                    case m.dh.ARROW_DOWN:
                        l = (n + 1) % s.length;
                        break;
                    case m.dh.ARROW_LEFT:
                    case m.dh.ARROW_UP:
                        l = (n - 1 + s.length) % s.length;
                        break;
                    case m.dh.HOME:
                        l = 0;
                        break;
                    case m.dh.END:
                        l = s.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), s[l]?.focus());
            }
        }, []);
    return (0, s.jsxs)("div", {
        className: i()(p.kL, l),
        ref: S,
        children: [
            (0, s.jsxs)("div", {
                className: p.Kk,
                "aria-hidden": !0,
                children: [
                    r.map((e, l) =>
                        (0, s.jsx)(
                            h.Ae,
                            {
                                index: l,
                                onItemLayout: f,
                                children: (0, s.jsx)(
                                    v,
                                    { id: e.id, label: e.label, selected: t === e.id, handleTransition: a },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, s.jsx)("div", {
                        ref: j,
                        children: (0, s.jsx)(A, { tabs: R, onTabSelect: a, selectedTab: t, selected: C }),
                    }),
                ],
            }),
            k &&
                (0, s.jsxs)("div", {
                    className: p.vR,
                    role: "tablist",
                    children: [
                        g.map((e) =>
                            (0, s.jsx)(
                                v,
                                { id: e.id, label: e.label, selected: t === e.id, handleTransition: a, onKeyDown: y },
                                e.id,
                            ),
                        ),
                        0 !== R.length
                            ? (0, s.jsx)(A, { tabs: R, onTabSelect: a, selectedTab: t, selected: C, onKeyDown: y })
                            : null,
                    ],
                }),
        ],
    });
}
var g = t(701245),
    R = (((r = {}).DEFAULT = "DEFAULT"), (r.SEARCH = "SEARCH"), r);
function S(e) {
    let {
        selectedTabId: l,
        handleTransition: t,
        tabs: r,
        state: n = "DEFAULT",
        onAvailableWidthChange: a,
        icon: o,
        endContent: d,
        children: u,
        keepToastsBelow: h,
    } = e;
    return (0, s.jsxs)(c.A, {
        className: g.jr,
        toolbar: d,
        disableFocusRingScope: !0,
        hideSearch: !0,
        keepToastsBelow: h,
        children: [
            "DEFAULT" === n &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(o, { color: "currentColor", size: "md" }),
                        (0, s.jsx)(T, { tabs: r, selectedTab: l, onTabSelect: t, onAvailableWidthChange: a }),
                    ],
                }),
            (0, s.jsx)("div", { className: i()(g.w4, { [g.cS]: "SEARCH" === n }), children: u }),
        ],
    });
}
