s.d(t, { A: () => T });
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
    S = s(190294),
    m = s(758836),
    E = s(985018),
    h = s(190576);
function f(e) {
    let {
        tab: t,
        label: s,
        selected: l,
        handleTransition: n,
        renderSubmenu: o,
        submenuOnly: c,
        showNewBadge: u,
        icon: d,
    } = e;
    return null != o
        ? (0, r.jsx)(A, { tab: t, label: s, selected: l, handleTransition: n, renderSubmenu: o, submenuOnly: c })
        : (0, r.jsxs)(b.A.Title, {
              onClick: () => n(t),
              wrapperClassName: h.Vn,
              className: a()(h.Mf, { [h.wH]: l }),
              children: [
                  null != d
                      ? (0, r.jsxs)("span", {
                            className: h.nt,
                            children: [s, (0, r.jsx)(d, { size: "xs", color: "currentColor" })],
                        })
                      : s,
                  u && (0, r.jsx)(i.LpS, { text: E.intl.string(E.t.y2b7CA), className: h.Ad }),
              ],
          });
}
function A(e) {
    let { tab: t, label: s, selected: n, handleTransition: o, renderSubmenu: c, submenuOnly: S } = e,
        m = l.useRef(null),
        E = l.useRef(!1),
        { isHovered: f, setIsHovered: A, onMouseEnter: C, onMouseLeave: g, cancelTimers: T } = (0, p.A)(100, 100),
        y = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), T(), A(!0), (E.current = d.A.keyboardModeEnabled));
        },
        O = l.useCallback(() => {
            (E.current = d.A.keyboardModeEnabled), C();
        }, [C]);
    return (0, r.jsx)("div", {
        className: h.iV,
        onMouseEnter: O,
        onMouseLeave: g,
        children: (0, r.jsx)(i.YNO, {
            targetElementRef: m,
            shouldShow: f,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                T(), A(!0), (E.current = d.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                E.current && !d.A.keyboardModeEnabled && (0, u.uS)(), A(!1), m.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)("div", { onMouseEnter: C, onMouseLeave: g, children: c({ onClose: t }) });
            },
            children: (e, l) => {
                let { isShown: c } = l,
                    u = c ? i.tN5 : i.abt;
                return (0, r.jsx)(b.A.Title, {
                    ...e,
                    ref: m,
                    onClick: S ? void 0 : () => o(t),
                    onKeyDown: y,
                    wrapperClassName: h.Vn,
                    className: a()(h.Mf, { [h.wH]: n }),
                    children: (0, r.jsxs)("span", {
                        className: h.hP,
                        children: [s, (0, r.jsx)(u, { size: "sm", color: "currentColor" })],
                    }),
                });
            },
        }),
    });
}
function C(e) {
    let { onTabSelect: t, tabs: s, selectedTab: n, selected: o } = e,
        c = l.useRef(null),
        m = l.useRef(!1),
        { isHovered: f, setIsHovered: A, onMouseEnter: C, onMouseLeave: g, cancelTimers: T } = (0, p.A)(100, 100),
        y = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), T(), A(!0), (m.current = d.A.keyboardModeEnabled));
        },
        O = l.useCallback(() => {
            (m.current = d.A.keyboardModeEnabled), C();
        }, [C]);
    return (0, r.jsx)("div", {
        className: h.iV,
        onMouseEnter: O,
        onMouseLeave: g,
        children: (0, r.jsx)(i.YNO, {
            targetElementRef: c,
            shouldShow: f,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                T(), A(!0), (m.current = d.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                m.current && !d.A.keyboardModeEnabled && (0, u.uS)(), A(!1), c.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, r.jsx)("div", {
                    onMouseEnter: C,
                    onMouseLeave: g,
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
                    wrapperClassName: h.Vn,
                    className: a()(h.Mf, h.OS, { [h.wH]: o }),
                    "aria-label": E.intl.string(E.t["UKOtz+"]),
                    children: (0, r.jsxs)("span", {
                        className: h.hP,
                        children: [E.intl.string(E.t["UKOtz+"]), (0, r.jsx)(l, { size: "xs" })],
                    }),
                });
            },
        }),
    });
}
function g(e, t, s) {
    return e === s || (null != t.renderSubmenu && (0, m.dF)(s) && e === m.G2.CATALOG);
}
function T(e) {
    let { className: t, selectedTab: s, tabs: n, onTabSelect: i } = e,
        [u, d] = l.useState(0),
        b = l.useRef(u),
        {
            lastVisibleIndex: p,
            onItemLayout: S,
            overflowItemsRef: m,
        } = (0, o.Wv)({ items: n, itemGapPx: 24, maxLines: 1, containerWidth: u }),
        E = l.useMemo(() => n.slice(0, p + 1), [p, n]),
        A = l.useMemo(() => n.slice(p + 1), [p, n]),
        T = l.useRef(null),
        y = l.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && b.current !== t && (d(t), (b.current = t));
        }, []);
    (0, c.g)(T, y);
    let O = 0 !== u,
        L = A.some((e) => g(e.tab, e, s));
    return (0, r.jsxs)("div", {
        className: a()(h.kL, t),
        ref: T,
        children: [
            (0, r.jsxs)("div", {
                className: h.Kk,
                children: [
                    n.map((e, t) =>
                        (0, r.jsx)(
                            o.Ae,
                            {
                                index: t,
                                onItemLayout: S,
                                children: (0, r.jsx)(f, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: g(e.tab, e, s),
                                    handleTransition: i,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        ref: m,
                        children: (0, r.jsx)(C, { tabs: A, onTabSelect: i, selectedTab: s, selected: L }),
                    }),
                ],
            }),
            O &&
                (0, r.jsxs)("div", {
                    className: h.vR,
                    children: [
                        E.map((e) =>
                            (0, r.jsx)(
                                f,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: g(e.tab, e, s),
                                    handleTransition: i,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== A.length ? (0, r.jsx)(C, { tabs: A, onTabSelect: i, selectedTab: s, selected: L }) : null,
                    ],
                }),
        ],
    });
}
