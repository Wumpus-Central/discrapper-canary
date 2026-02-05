"use strict";
s.d(t, { A: () => v });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(3666),
    o = s(397927),
    c = s(770178),
    d = s(955572),
    u = s(775602),
    g = s(742589),
    m = s(421773),
    _ = s(397309),
    h = s(190294),
    p = s(758836),
    f = s(985018),
    E = s(78716),
    C = s(525037);
function b(e) {
    let { tab: t, label: s, selected: r, handleTransition: l, hasSubmenu: i, showNewBadge: c } = e;
    return i
        ? (0, n.jsx)(A, { tab: t, label: s, selected: r, handleTransition: l })
        : (0, n.jsxs)(g.A.Title, {
              onClick: () => l(t),
              wrapperClassName: C.Vn,
              className: a()(C.Mf, { [C.wH]: r }),
              children: [s, c && (0, n.jsx)(o.LpS, { text: f.intl.string(f.t.y2b7CA), className: E.Ad })],
          });
}
function A(e) {
    let { tab: t, label: s, selected: l, handleTransition: i } = e,
        c = r.useRef(null),
        h = r.useRef(!1),
        { isHovered: p, setIsHovered: f, onMouseEnter: E, onMouseLeave: b, cancelTimers: A } = (0, m.A)(100, 100),
        x = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), A(), f(!0), (h.current = u.A.keyboardModeEnabled));
        },
        S = r.useCallback(() => {
            (h.current = u.A.keyboardModeEnabled), E();
        }, [E]);
    return (0, n.jsx)("div", {
        className: C.iV,
        onMouseEnter: S,
        onMouseLeave: b,
        children: (0, n.jsx)(o.YNO, {
            targetElementRef: c,
            shouldShow: p,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                A(), f(!0), (h.current = u.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                h.current && !u.A.keyboardModeEnabled && (0, d.uS)(), f(!1), c.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)("div", {
                    onMouseEnter: E,
                    onMouseLeave: b,
                    children: (0, n.jsx)(_.A, { handleTransition: i, onClose: t }),
                });
            },
            children: (e, r) => {
                let { isShown: d } = r,
                    u = d ? o.tN5 : o.abt;
                return (0, n.jsx)(g.A.Title, {
                    ...e,
                    ref: c,
                    onClick: () => i(t),
                    onKeyDown: x,
                    wrapperClassName: C.Vn,
                    className: a()(C.Mf, { [C.wH]: l }),
                    children: (0, n.jsxs)("span", {
                        className: C.hP,
                        children: [s, (0, n.jsx)(u, { size: "sm", color: "currentColor" })],
                    }),
                });
            },
        }),
    });
}
function x(e) {
    let { onTabSelect: t, tabs: s, selectedTab: l, selected: i, showOrbRentalNewBadge: c } = e,
        _ = r.useRef(null),
        p = r.useRef(!1),
        { isHovered: E, setIsHovered: b, onMouseEnter: A, onMouseLeave: x, cancelTimers: S } = (0, m.A)(100, 100),
        v = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), S(), b(!0), (p.current = u.A.keyboardModeEnabled));
        },
        L = r.useCallback(() => {
            (p.current = u.A.keyboardModeEnabled), A();
        }, [A]);
    return (0, n.jsx)("div", {
        className: C.iV,
        onMouseEnter: L,
        onMouseLeave: x,
        children: (0, n.jsx)(o.YNO, {
            targetElementRef: _,
            shouldShow: E,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                S(), b(!0), (p.current = u.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                p.current && !u.A.keyboardModeEnabled && (0, d.uS)(), b(!1), _.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: r } = e;
                return (0, n.jsx)("div", {
                    onMouseEnter: A,
                    onMouseLeave: x,
                    children: (0, n.jsx)(h.A, {
                        selectedTab: l,
                        onClose: r,
                        tabs: s,
                        onTabSelect: t,
                        showOrbRentalNewBadge: c,
                    }),
                });
            },
            children: (e, t) => {
                let { isShown: s } = t,
                    r = s ? o.tN5 : o.abt;
                return (0, n.jsx)(g.A.Title, {
                    ...e,
                    ref: _,
                    onKeyDown: v,
                    wrapperClassName: C.Vn,
                    className: a()(C.Mf, C.OS, { [C.wH]: i }),
                    "aria-label": f.intl.string(f.t["UKOtz+"]),
                    children: (0, n.jsxs)("span", {
                        className: C.hP,
                        children: [f.intl.string(f.t["UKOtz+"]), (0, n.jsx)(r, { size: "xs" })],
                    }),
                });
            },
        }),
    });
}
function S(e, t, s) {
    return e === s || ((t.hasSubmenu ?? !1) && (0, p.dF)(s) && e === p.G2.CATALOG);
}
function v(e) {
    let { className: t, selectedTab: s, tabs: l, onTabSelect: o, showOrbRentalNewBadge: d } = e,
        [u, g] = r.useState(0),
        m = r.useRef(u),
        {
            lastVisibleIndex: _,
            onItemLayout: h,
            overflowItemsRef: f,
        } = (0, i.Wv)({ items: l, itemGapPx: 24, maxLines: 1, containerWidth: u }),
        E = r.useMemo(() => l.slice(0, _ + 1), [_, l]),
        A = r.useMemo(() => l.slice(_ + 1), [_, l]),
        v = r.useRef(null),
        L = r.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && m.current !== t && (g(t), (m.current = t));
        }, []);
    (0, c.g)(v, L);
    let T = 0 !== u,
        I = A.some((e) => S(e.tab, e, s));
    return (0, n.jsxs)("div", {
        className: a()(C.kL, t),
        ref: v,
        children: [
            (0, n.jsxs)("div", {
                className: C.Kk,
                children: [
                    l.map((e, t) =>
                        (0, n.jsx)(
                            i.Ae,
                            {
                                index: t,
                                onItemLayout: h,
                                children: (0, n.jsx)(b, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: S(e.tab, e, s),
                                    handleTransition: o,
                                    hasSubmenu: e.hasSubmenu ?? !1,
                                    showNewBadge: e.tab === p.G2.ORBS && d,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: f,
                        children: (0, n.jsx)(x, {
                            tabs: A,
                            onTabSelect: o,
                            selectedTab: s,
                            selected: I,
                            showOrbRentalNewBadge: d,
                        }),
                    }),
                ],
            }),
            T &&
                (0, n.jsxs)("div", {
                    className: C.vR,
                    children: [
                        E.map((e) =>
                            (0, n.jsx)(
                                b,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: S(e.tab, e, s),
                                    handleTransition: o,
                                    hasSubmenu: e.hasSubmenu ?? !1,
                                    showNewBadge: e.tab === p.G2.ORBS && d,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== A.length
                            ? (0, n.jsx)(x, {
                                  tabs: A,
                                  onTabSelect: o,
                                  selectedTab: s,
                                  selected: I,
                                  showOrbRentalNewBadge: d,
                              })
                            : null,
                    ],
                }),
        ],
    });
}
