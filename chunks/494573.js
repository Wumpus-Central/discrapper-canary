s.d(t, { A: () => O });
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
    E = s(397309),
    S = s(190294),
    f = s(758836),
    m = s(985018),
    h = s(216862),
    A = s(974003);
function C(e) {
    let { tab: t, label: s, selected: l, handleTransition: n, hasSubmenu: o, showNewBadge: c } = e;
    return o
        ? (0, r.jsx)(T, { tab: t, label: s, selected: l, handleTransition: n })
        : (0, r.jsxs)(b.A.Title, {
              onClick: () => n(t),
              wrapperClassName: A.Vn,
              className: a()(A.Mf, { [A.wH]: l }),
              children: [s, c && (0, r.jsx)(i.LpS, { text: m.intl.string(m.t.y2b7CA), className: h.Ad })],
          });
}
function T(e) {
    let { tab: t, label: s, selected: n, handleTransition: o } = e,
        c = l.useRef(null),
        S = l.useRef(!1),
        { isHovered: f, setIsHovered: m, onMouseEnter: h, onMouseLeave: C, cancelTimers: T } = (0, p.A)(100, 100),
        g = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), T(), m(!0), (S.current = d.A.keyboardModeEnabled));
        },
        y = l.useCallback(() => {
            (S.current = d.A.keyboardModeEnabled), h();
        }, [h]);
    return (0, r.jsx)("div", {
        className: A.iV,
        onMouseEnter: y,
        onMouseLeave: C,
        children: (0, r.jsx)(i.YNO, {
            targetElementRef: c,
            shouldShow: f,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                T(), m(!0), (S.current = d.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                S.current && !d.A.keyboardModeEnabled && (0, u.uS)(), m(!1), c.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)("div", {
                    onMouseEnter: h,
                    onMouseLeave: C,
                    children: (0, r.jsx)(E.A, { handleTransition: o, onClose: t }),
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
                    wrapperClassName: A.Vn,
                    className: a()(A.Mf, { [A.wH]: n }),
                    children: (0, r.jsxs)("span", {
                        className: A.hP,
                        children: [s, (0, r.jsx)(d, { size: "sm", color: "currentColor" })],
                    }),
                });
            },
        }),
    });
}
function g(e) {
    let { onTabSelect: t, tabs: s, selectedTab: n, selected: o } = e,
        c = l.useRef(null),
        E = l.useRef(!1),
        { isHovered: f, setIsHovered: h, onMouseEnter: C, onMouseLeave: T, cancelTimers: g } = (0, p.A)(100, 100),
        y = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), g(), h(!0), (E.current = d.A.keyboardModeEnabled));
        },
        O = l.useCallback(() => {
            (E.current = d.A.keyboardModeEnabled), C();
        }, [C]);
    return (0, r.jsx)("div", {
        className: A.iV,
        onMouseEnter: O,
        onMouseLeave: T,
        children: (0, r.jsx)(i.YNO, {
            targetElementRef: c,
            shouldShow: f,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                g(), h(!0), (E.current = d.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                E.current && !d.A.keyboardModeEnabled && (0, u.uS)(), h(!1), c.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, r.jsx)("div", {
                    onMouseEnter: C,
                    onMouseLeave: T,
                    children: (0, r.jsx)(S.A, { selectedTab: n, onClose: l, tabs: s, onTabSelect: t }),
                });
            },
            children: (e, t) => {
                let { isShown: s } = t,
                    l = s ? i.tN5 : i.abt;
                return (0, r.jsx)(b.A.Title, {
                    ...e,
                    ref: c,
                    onKeyDown: y,
                    wrapperClassName: A.Vn,
                    className: a()(A.Mf, A.OS, { [A.wH]: o }),
                    "aria-label": m.intl.string(m.t["UKOtz+"]),
                    children: (0, r.jsxs)("span", {
                        className: A.hP,
                        children: [m.intl.string(m.t["UKOtz+"]), (0, r.jsx)(l, { size: "xs" })],
                    }),
                });
            },
        }),
    });
}
function y(e, t, s) {
    return e === s || ((t.hasSubmenu ?? !1) && (0, f.dF)(s) && e === f.G2.CATALOG);
}
function O(e) {
    let { className: t, selectedTab: s, tabs: n, onTabSelect: i } = e,
        [u, d] = l.useState(0),
        b = l.useRef(u),
        {
            lastVisibleIndex: p,
            onItemLayout: E,
            overflowItemsRef: S,
        } = (0, o.Wv)({ items: n, itemGapPx: 24, maxLines: 1, containerWidth: u }),
        f = l.useMemo(() => n.slice(0, p + 1), [p, n]),
        m = l.useMemo(() => n.slice(p + 1), [p, n]),
        h = l.useRef(null),
        T = l.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && b.current !== t && (d(t), (b.current = t));
        }, []);
    (0, c.g)(h, T);
    let O = 0 !== u,
        x = m.some((e) => y(e.tab, e, s));
    return (0, r.jsxs)("div", {
        className: a()(A.kL, t),
        ref: h,
        children: [
            (0, r.jsxs)("div", {
                className: A.Kk,
                children: [
                    n.map((e, t) =>
                        (0, r.jsx)(
                            o.Ae,
                            {
                                index: t,
                                onItemLayout: E,
                                children: (0, r.jsx)(C, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: y(e.tab, e, s),
                                    handleTransition: i,
                                    hasSubmenu: e.hasSubmenu ?? !1,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        ref: S,
                        children: (0, r.jsx)(g, { tabs: m, onTabSelect: i, selectedTab: s, selected: x }),
                    }),
                ],
            }),
            O &&
                (0, r.jsxs)("div", {
                    className: A.vR,
                    children: [
                        f.map((e) =>
                            (0, r.jsx)(
                                C,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: y(e.tab, e, s),
                                    handleTransition: i,
                                    hasSubmenu: e.hasSubmenu ?? !1,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== m.length ? (0, r.jsx)(g, { tabs: m, onTabSelect: i, selectedTab: s, selected: x }) : null,
                    ],
                }),
        ],
    });
}
