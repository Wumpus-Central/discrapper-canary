s.d(t, { A: () => y });
var r = s(627968),
    l = s(64700),
    n = s(503698),
    a = s.n(n),
    o = s(3666),
    i = s(397927),
    c = s(770178),
    u = s(955572),
    d = s(775602),
    b = s(742589),
    p = s(421773),
    S = s(397309),
    E = s(190294),
    h = s(758836),
    A = s(985018),
    f = s(525037);
function m(e) {
    let { tab: t, label: s, selected: l, handleTransition: n, hasSubmenu: o, showNewBadge: c, icon: u } = e;
    return o
        ? (0, r.jsx)(C, { tab: t, label: s, selected: l, handleTransition: n })
        : (0, r.jsxs)(b.A.Title, {
              onClick: () => n(t),
              wrapperClassName: f.Vn,
              className: a()(f.Mf, { [f.wH]: l }),
              children: [
                  null != u
                      ? (0, r.jsxs)("span", {
                            className: f.nt,
                            children: [s, (0, r.jsx)(u, { size: "xs", color: "currentColor" })],
                        })
                      : s,
                  c && (0, r.jsx)(i.LpS, { text: A.intl.string(A.t.y2b7CA), className: f.Ad }),
              ],
          });
}
function C(e) {
    let { tab: t, label: s, selected: n, handleTransition: o } = e,
        c = l.useRef(null),
        E = l.useRef(!1),
        { isHovered: h, setIsHovered: A, onMouseEnter: m, onMouseLeave: C, cancelTimers: T } = (0, p.A)(100, 100),
        g = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), T(), A(!0), (E.current = d.A.keyboardModeEnabled));
        },
        y = l.useCallback(() => {
            (E.current = d.A.keyboardModeEnabled), m();
        }, [m]);
    return (0, r.jsx)("div", {
        className: f.iV,
        onMouseEnter: y,
        onMouseLeave: C,
        children: (0, r.jsx)(i.YNO, {
            targetElementRef: c,
            shouldShow: h,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                T(), A(!0), (E.current = d.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                E.current && !d.A.keyboardModeEnabled && (0, u.uS)(), A(!1), c.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)("div", {
                    onMouseEnter: m,
                    onMouseLeave: C,
                    children: (0, r.jsx)(S.A, { handleTransition: o, onClose: t }),
                });
            },
            children: (e, l) => {
                let { isShown: u } = l,
                    d = u ? i.tN5 : i.abt;
                return (0, r.jsx)(b.A.Title, {
                    ...e,
                    ref: c,
                    onClick: () => o(t),
                    onKeyDown: g,
                    wrapperClassName: f.Vn,
                    className: a()(f.Mf, { [f.wH]: n }),
                    children: (0, r.jsxs)("span", {
                        className: f.hP,
                        children: [s, (0, r.jsx)(d, { size: "sm", color: "currentColor" })],
                    }),
                });
            },
        }),
    });
}
function T(e) {
    let { onTabSelect: t, tabs: s, selectedTab: n, selected: o } = e,
        c = l.useRef(null),
        S = l.useRef(!1),
        { isHovered: h, setIsHovered: m, onMouseEnter: C, onMouseLeave: T, cancelTimers: g } = (0, p.A)(100, 100),
        y = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), g(), m(!0), (S.current = d.A.keyboardModeEnabled));
        },
        O = l.useCallback(() => {
            (S.current = d.A.keyboardModeEnabled), C();
        }, [C]);
    return (0, r.jsx)("div", {
        className: f.iV,
        onMouseEnter: O,
        onMouseLeave: T,
        children: (0, r.jsx)(i.YNO, {
            targetElementRef: c,
            shouldShow: h,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                g(), m(!0), (S.current = d.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                S.current && !d.A.keyboardModeEnabled && (0, u.uS)(), m(!1), c.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, r.jsx)("div", {
                    onMouseEnter: C,
                    onMouseLeave: T,
                    children: (0, r.jsx)(E.A, { selectedTab: n, onClose: l, tabs: s, onTabSelect: t }),
                });
            },
            children: (e, t) => {
                let { isShown: s } = t,
                    l = s ? i.tN5 : i.abt;
                return (0, r.jsx)(b.A.Title, {
                    ...e,
                    ref: c,
                    onKeyDown: y,
                    wrapperClassName: f.Vn,
                    className: a()(f.Mf, f.OS, { [f.wH]: o }),
                    "aria-label": A.intl.string(A.t["UKOtz+"]),
                    children: (0, r.jsxs)("span", {
                        className: f.hP,
                        children: [A.intl.string(A.t["UKOtz+"]), (0, r.jsx)(l, { size: "xs" })],
                    }),
                });
            },
        }),
    });
}
function g(e, t, s) {
    return e === s || ((t.hasSubmenu ?? !1) && (0, h.dF)(s) && e === h.G2.CATALOG);
}
function y(e) {
    let { className: t, selectedTab: s, tabs: n, onTabSelect: i } = e,
        [u, d] = l.useState(0),
        b = l.useRef(u),
        {
            lastVisibleIndex: p,
            onItemLayout: S,
            overflowItemsRef: E,
        } = (0, o.Wv)({ items: n, itemGapPx: 24, maxLines: 1, containerWidth: u }),
        h = l.useMemo(() => n.slice(0, p + 1), [p, n]),
        A = l.useMemo(() => n.slice(p + 1), [p, n]),
        C = l.useRef(null),
        y = l.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && b.current !== t && (d(t), (b.current = t));
        }, []);
    (0, c.g)(C, y);
    let O = 0 !== u,
        L = A.some((e) => g(e.tab, e, s));
    return (0, r.jsxs)("div", {
        className: a()(f.kL, t),
        ref: C,
        children: [
            (0, r.jsxs)("div", {
                className: f.Kk,
                children: [
                    n.map((e, t) =>
                        (0, r.jsx)(
                            o.Ae,
                            {
                                index: t,
                                onItemLayout: S,
                                children: (0, r.jsx)(m, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: g(e.tab, e, s),
                                    handleTransition: i,
                                    hasSubmenu: e.hasSubmenu ?? !1,
                                    icon: e.icon,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        ref: E,
                        children: (0, r.jsx)(T, { tabs: A, onTabSelect: i, selectedTab: s, selected: L }),
                    }),
                ],
            }),
            O &&
                (0, r.jsxs)("div", {
                    className: f.vR,
                    children: [
                        h.map((e) =>
                            (0, r.jsx)(
                                m,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: g(e.tab, e, s),
                                    handleTransition: i,
                                    hasSubmenu: e.hasSubmenu ?? !1,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== A.length ? (0, r.jsx)(T, { tabs: A, onTabSelect: i, selectedTab: s, selected: L }) : null,
                    ],
                }),
        ],
    });
}
