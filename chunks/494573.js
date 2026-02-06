s.d(t, { A: () => O });
var r = s(627968),
    l = s(64700),
    a = s(503698),
    n = s.n(a),
    o = s(3666),
    i = s(397927),
    c = s(770178),
    u = s(955572),
    d = s(775602),
    b = s(742589),
    S = s(421773),
    E = s(397309),
    p = s(190294),
    f = s(758836),
    h = s(985018),
    m = s(78716),
    A = s(525037);
function C(e) {
    let { tab: t, label: s, selected: l, handleTransition: a, hasSubmenu: o, showNewBadge: c } = e;
    return o
        ? (0, r.jsx)(g, { tab: t, label: s, selected: l, handleTransition: a })
        : (0, r.jsxs)(b.A.Title, {
              onClick: () => a(t),
              wrapperClassName: A.Vn,
              className: n()(A.Mf, { [A.wH]: l }),
              children: [s, c && (0, r.jsx)(i.LpS, { text: h.intl.string(h.t.y2b7CA), className: m.Ad })],
          });
}
function g(e) {
    let { tab: t, label: s, selected: a, handleTransition: o } = e,
        c = l.useRef(null),
        p = l.useRef(!1),
        { isHovered: f, setIsHovered: h, onMouseEnter: m, onMouseLeave: C, cancelTimers: g } = (0, S.A)(100, 100),
        T = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), g(), h(!0), (p.current = d.A.keyboardModeEnabled));
        },
        y = l.useCallback(() => {
            (p.current = d.A.keyboardModeEnabled), m();
        }, [m]);
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
                g(), h(!0), (p.current = d.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                p.current && !d.A.keyboardModeEnabled && (0, u.uS)(), h(!1), c.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)("div", {
                    onMouseEnter: m,
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
                    onKeyDown: T,
                    wrapperClassName: A.Vn,
                    className: n()(A.Mf, { [A.wH]: a }),
                    children: (0, r.jsxs)("span", {
                        className: A.hP,
                        children: [s, (0, r.jsx)(d, { size: "sm", color: "currentColor" })],
                    }),
                });
            },
        }),
    });
}
function T(e) {
    let { onTabSelect: t, tabs: s, selectedTab: a, selected: o, showOrbRentalNewBadge: c } = e,
        E = l.useRef(null),
        f = l.useRef(!1),
        { isHovered: m, setIsHovered: C, onMouseEnter: g, onMouseLeave: T, cancelTimers: y } = (0, S.A)(100, 100),
        O = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), y(), C(!0), (f.current = d.A.keyboardModeEnabled));
        },
        R = l.useCallback(() => {
            (f.current = d.A.keyboardModeEnabled), g();
        }, [g]);
    return (0, r.jsx)("div", {
        className: A.iV,
        onMouseEnter: R,
        onMouseLeave: T,
        children: (0, r.jsx)(i.YNO, {
            targetElementRef: E,
            shouldShow: m,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                y(), C(!0), (f.current = d.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                f.current && !d.A.keyboardModeEnabled && (0, u.uS)(), C(!1), E.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, r.jsx)("div", {
                    onMouseEnter: g,
                    onMouseLeave: T,
                    children: (0, r.jsx)(p.A, {
                        selectedTab: a,
                        onClose: l,
                        tabs: s,
                        onTabSelect: t,
                        showOrbRentalNewBadge: c,
                    }),
                });
            },
            children: (e, t) => {
                let { isShown: s } = t,
                    l = s ? i.tN5 : i.abt;
                return (0, r.jsx)(b.A.Title, {
                    ...e,
                    ref: E,
                    onKeyDown: O,
                    wrapperClassName: A.Vn,
                    className: n()(A.Mf, A.OS, { [A.wH]: o }),
                    "aria-label": h.intl.string(h.t["UKOtz+"]),
                    children: (0, r.jsxs)("span", {
                        className: A.hP,
                        children: [h.intl.string(h.t["UKOtz+"]), (0, r.jsx)(l, { size: "xs" })],
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
    let { className: t, selectedTab: s, tabs: a, onTabSelect: i, showOrbRentalNewBadge: u } = e,
        [d, b] = l.useState(0),
        S = l.useRef(d),
        {
            lastVisibleIndex: E,
            onItemLayout: p,
            overflowItemsRef: h,
        } = (0, o.Wv)({ items: a, itemGapPx: 24, maxLines: 1, containerWidth: d }),
        m = l.useMemo(() => a.slice(0, E + 1), [E, a]),
        g = l.useMemo(() => a.slice(E + 1), [E, a]),
        O = l.useRef(null),
        R = l.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && S.current !== t && (b(t), (S.current = t));
        }, []);
    (0, c.g)(O, R);
    let L = 0 !== d,
        x = g.some((e) => y(e.tab, e, s));
    return (0, r.jsxs)("div", {
        className: n()(A.kL, t),
        ref: O,
        children: [
            (0, r.jsxs)("div", {
                className: A.Kk,
                children: [
                    a.map((e, t) =>
                        (0, r.jsx)(
                            o.Ae,
                            {
                                index: t,
                                onItemLayout: p,
                                children: (0, r.jsx)(C, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: y(e.tab, e, s),
                                    handleTransition: i,
                                    hasSubmenu: e.hasSubmenu ?? !1,
                                    showNewBadge: e.tab === f.G2.ORBS && u,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        ref: h,
                        children: (0, r.jsx)(T, {
                            tabs: g,
                            onTabSelect: i,
                            selectedTab: s,
                            selected: x,
                            showOrbRentalNewBadge: u,
                        }),
                    }),
                ],
            }),
            L &&
                (0, r.jsxs)("div", {
                    className: A.vR,
                    children: [
                        m.map((e) =>
                            (0, r.jsx)(
                                C,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: y(e.tab, e, s),
                                    handleTransition: i,
                                    hasSubmenu: e.hasSubmenu ?? !1,
                                    showNewBadge: e.tab === f.G2.ORBS && u,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== g.length
                            ? (0, r.jsx)(T, {
                                  tabs: g,
                                  onTabSelect: i,
                                  selectedTab: s,
                                  selected: x,
                                  showOrbRentalNewBadge: u,
                              })
                            : null,
                    ],
                }),
        ],
    });
}
