t.d(l, { S: () => S });
var n = t(477900),
    r = t(582128),
    s = t(503698),
    a = t.n(s),
    i = t(742589),
    c = t(265872),
    o = t(900797),
    d = t(847374),
    u = t(3666),
    h = t(770178),
    b = t(124589),
    x = t(488995),
    m = t(650583),
    f = t(792996),
    j = t(506022);
function p(e) {
    let { id: l, label: t, selected: r, handleTransition: s, onKeyDown: c, ...o } = e;
    return (0, n.jsx)(i.A.Title, {
        ...o,
        onClick: () => s(l),
        onKeyDown: c,
        wrapperClassName: j.Vn,
        className: a()(j.Mf, { [j.wH]: r }),
        role: "tab",
        "aria-selected": r,
        tabIndex: r ? 0 : -1,
        children: t,
    });
}
function v(e) {
    let { onTabSelect: l, tabs: t, selectedTab: s, selected: u, onKeyDown: h } = e,
        m = r.useRef(null);
    return (0, n.jsx)(c.Y, {
        targetElementRef: m,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, n.jsx)(b.A, { selectedTab: s, onClose: r, tabs: t, onTabSelect: l });
        },
        position: "bottom",
        align: "left",
        children: (e, l) => {
            let { isShown: t } = l;
            return (0, n.jsxs)(i.A.Title, {
                ...e,
                ref: m,
                onKeyDown: h,
                wrapperClassName: j.Vn,
                className: a()(j.Mf, j.OS, { [j.wH]: u }),
                id: x.dO.MORE,
                "aria-label": f.intl.string(f.t["UKOtz+"]),
                role: "tab",
                "aria-selected": u,
                tabIndex: u ? 0 : -1,
                children: [
                    f.intl.string(f.t["UKOtz+"]),
                    t
                        ? (0, n.jsx)(o.ChevronSmallUpIcon, { size: "xs" })
                        : (0, n.jsx)(d.ChevronSmallDownIcon, { size: "xs" }),
                ],
            });
        },
    });
}
function g(e) {
    let { className: l, selectedTab: t, tabs: s, onTabSelect: i, onAvailableWidthChange: c } = e,
        [o, d] = r.useState(0),
        b = r.useRef(o),
        {
            lastVisibleIndex: x,
            onItemLayout: f,
            overflowItemsRef: g,
            itemWidthsRef: C,
        } = (0, u.Wv)({ items: s, itemGapPx: 24, maxLines: 1, containerWidth: o }),
        S = r.useMemo(() => s.slice(0, x + 1), [x, s]),
        T = r.useMemo(() => s.slice(x + 1), [x, s]),
        k = r.useRef(null),
        w = r.useCallback(
            (e) => {
                let l = e.contentRect.width;
                if (null == l || b.current === l) return;
                (d(l), (b.current = l));
                let t = l - C.current.reduce((e, l, t) => e + l + 24 * (0 !== t));
                c?.(t);
            },
            [C, c],
        );
    (0, h.g)(k, w);
    let A = 0 !== o,
        R = T.some((e) => e.id === t),
        N = r.useCallback((e) => {
            let l,
                t = e.currentTarget,
                n = t.closest('[role="tablist"]');
            if (null == n) return;
            let r = Array.from(n.querySelectorAll('[role="tab"]')),
                s = r.indexOf(t);
            if (-1 !== s && 0 !== r.length) {
                switch (e.key) {
                    case m.dh.ARROW_RIGHT:
                    case m.dh.ARROW_DOWN:
                        l = (s + 1) % r.length;
                        break;
                    case m.dh.ARROW_LEFT:
                    case m.dh.ARROW_UP:
                        l = (s - 1 + r.length) % r.length;
                        break;
                    case m.dh.HOME:
                        l = 0;
                        break;
                    case m.dh.END:
                        l = r.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), r[l]?.focus());
            }
        }, []);
    return (0, n.jsxs)("div", {
        className: a()(j.kL, l),
        ref: k,
        children: [
            (0, n.jsxs)("div", {
                className: j.Kk,
                "aria-hidden": !0,
                children: [
                    s.map((e, l) =>
                        (0, n.jsx)(
                            u.Ae,
                            {
                                index: l,
                                onItemLayout: f,
                                children: (0, n.jsx)(
                                    p,
                                    { id: e.id, label: e.label, selected: t === e.id, handleTransition: i },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: g,
                        children: (0, n.jsx)(v, { tabs: T, onTabSelect: i, selectedTab: t, selected: R }),
                    }),
                ],
            }),
            A &&
                (0, n.jsxs)("div", {
                    className: j.vR,
                    role: "tablist",
                    children: [
                        S.map((e) =>
                            (0, n.jsx)(
                                p,
                                { id: e.id, label: e.label, selected: t === e.id, handleTransition: i, onKeyDown: N },
                                e.id,
                            ),
                        ),
                        0 !== T.length
                            ? (0, n.jsx)(v, { tabs: T, onTabSelect: i, selectedTab: t, selected: R, onKeyDown: N })
                            : null,
                    ],
                }),
        ],
    });
}
var C = t(701245);
function S(e) {
    let {
        selectedTabId: l,
        handleTransition: t,
        tabs: r,
        state: s = "DEFAULT",
        onAvailableWidthChange: c,
        icon: o,
        endContent: d,
        children: u,
        keepToastsBelow: h,
    } = e;
    return (0, n.jsxs)(i.A, {
        className: C.jr,
        toolbar: d,
        disableFocusRingScope: !0,
        hideSearch: !0,
        keepToastsBelow: h,
        children: [
            "DEFAULT" === s &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(o, { color: "currentColor", size: "md" }),
                        (0, n.jsx)(g, { tabs: r, selectedTab: l, onTabSelect: t, onAvailableWidthChange: c }),
                    ],
                }),
            (0, n.jsx)("div", { className: a()(C.w4, { [C.cS]: "SEARCH" === s }), children: u }),
        ],
    });
}
