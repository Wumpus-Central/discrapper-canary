t.d(l, { S: () => A });
var s = t(477900),
    r = t(582128),
    n = t(503698),
    a = t.n(n),
    i = t(742589),
    c = t(265872),
    o = t(900797),
    d = t(847374),
    u = t(3666),
    h = t(770178),
    b = t(124589),
    x = t(488995),
    f = t(650583),
    m = t(792996),
    j = t(506022);
function p(e) {
    let { id: l, label: t, selected: r, handleTransition: n, onKeyDown: c, ...o } = e;
    return (0, s.jsx)(i.A.Title, {
        ...o,
        onClick: () => n(l),
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
    let { onTabSelect: l, tabs: t, selectedTab: n, selected: u, onKeyDown: h } = e,
        f = r.useRef(null);
    return (0, s.jsx)(c.Y, {
        targetElementRef: f,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, s.jsx)(b.A, { selectedTab: n, onClose: r, tabs: t, onTabSelect: l });
        },
        position: "bottom",
        align: "left",
        children: (e, l) => {
            let { isShown: t } = l;
            return (0, s.jsxs)(i.A.Title, {
                ...e,
                ref: f,
                onKeyDown: h,
                wrapperClassName: j.Vn,
                className: a()(j.Mf, j.OS, { [j.wH]: u }),
                id: x.dO.MORE,
                "aria-label": m.intl.string(m.t["UKOtz+"]),
                role: "tab",
                "aria-selected": u,
                tabIndex: u ? 0 : -1,
                children: [
                    m.intl.string(m.t["UKOtz+"]),
                    t ? (0, s.jsx)(o.t, { size: "xs" }) : (0, s.jsx)(d.a, { size: "xs" }),
                ],
            });
        },
    });
}
function g(e) {
    let { className: l, selectedTab: t, tabs: n, onTabSelect: i, onAvailableWidthChange: c } = e,
        [o, d] = r.useState(0),
        b = r.useRef(o),
        {
            lastVisibleIndex: x,
            onItemLayout: m,
            overflowItemsRef: g,
            itemWidthsRef: T,
        } = (0, u.Wv)({ items: n, itemGapPx: 24, maxLines: 1, containerWidth: o }),
        A = r.useMemo(() => n.slice(0, x + 1), [x, n]),
        R = r.useMemo(() => n.slice(x + 1), [x, n]),
        S = r.useRef(null),
        w = r.useCallback(
            (e) => {
                let l = e.contentRect.width;
                if (null == l || b.current === l) return;
                (d(l), (b.current = l));
                let t = l - T.current.reduce((e, l, t) => e + l + 24 * (0 !== t));
                c?.(t);
            },
            [T, c],
        );
    (0, h.g)(S, w);
    let k = 0 !== o,
        C = R.some((e) => e.id === t),
        N = r.useCallback((e) => {
            let l,
                t = e.currentTarget,
                s = t.closest('[role="tablist"]');
            if (null == s) return;
            let r = Array.from(s.querySelectorAll('[role="tab"]')),
                n = r.indexOf(t);
            if (-1 !== n && 0 !== r.length) {
                switch (e.key) {
                    case f.dh.ARROW_RIGHT:
                    case f.dh.ARROW_DOWN:
                        l = (n + 1) % r.length;
                        break;
                    case f.dh.ARROW_LEFT:
                    case f.dh.ARROW_UP:
                        l = (n - 1 + r.length) % r.length;
                        break;
                    case f.dh.HOME:
                        l = 0;
                        break;
                    case f.dh.END:
                        l = r.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), r[l]?.focus());
            }
        }, []);
    return (0, s.jsxs)("div", {
        className: a()(j.kL, l),
        ref: S,
        children: [
            (0, s.jsxs)("div", {
                className: j.Kk,
                "aria-hidden": !0,
                children: [
                    n.map((e, l) =>
                        (0, s.jsx)(
                            u.Ae,
                            {
                                index: l,
                                onItemLayout: m,
                                children: (0, s.jsx)(
                                    p,
                                    { id: e.id, label: e.label, selected: t === e.id, handleTransition: i },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, s.jsx)("div", {
                        ref: g,
                        children: (0, s.jsx)(v, { tabs: R, onTabSelect: i, selectedTab: t, selected: C }),
                    }),
                ],
            }),
            k &&
                (0, s.jsxs)("div", {
                    className: j.vR,
                    role: "tablist",
                    children: [
                        A.map((e) =>
                            (0, s.jsx)(
                                p,
                                { id: e.id, label: e.label, selected: t === e.id, handleTransition: i, onKeyDown: N },
                                e.id,
                            ),
                        ),
                        0 !== R.length
                            ? (0, s.jsx)(v, { tabs: R, onTabSelect: i, selectedTab: t, selected: C, onKeyDown: N })
                            : null,
                    ],
                }),
        ],
    });
}
var T = t(701245);
function A(e) {
    let {
        selectedTabId: l,
        handleTransition: t,
        tabs: r,
        state: n = "DEFAULT",
        onAvailableWidthChange: c,
        icon: o,
        endContent: d,
        children: u,
        keepToastsBelow: h,
    } = e;
    return (0, s.jsxs)(i.A, {
        className: T.jr,
        toolbar: d,
        disableFocusRingScope: !0,
        hideSearch: !0,
        keepToastsBelow: h,
        children: [
            "DEFAULT" === n &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(o, { color: "currentColor", size: "md" }),
                        (0, s.jsx)(g, { tabs: r, selectedTab: l, onTabSelect: t, onAvailableWidthChange: c }),
                    ],
                }),
            (0, s.jsx)("div", { className: a()(T.w4, { [T.cS]: "SEARCH" === n }), children: u }),
        ],
    });
}
