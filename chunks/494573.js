r.d(t, { A: () => I });
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    o = r(3666),
    i = r(777666),
    c = r(265872),
    d = r(900797),
    u = r(847374),
    _ = r(770178),
    b = r(955572),
    p = r(775602),
    m = r(742589),
    f = r(421773),
    C = r(190294),
    g = r(758836),
    h = r(985018),
    S = r(584512);
function A(e) {
    let {
        tab: t,
        label: r,
        selected: s,
        handleTransition: l,
        renderSubmenu: o,
        submenuOnly: c,
        showNewBadge: d,
        icon: u,
    } = e;
    return null != o
        ? (0, n.jsx)(E, { tab: t, label: r, selected: s, handleTransition: l, renderSubmenu: o, submenuOnly: c })
        : (0, n.jsxs)(m.A.Title, {
              onClick: () => l(t),
              wrapperClassName: S.Vn,
              className: a()(S.Mf, { [S.wH]: s }),
              children: [
                  null != u
                      ? (0, n.jsxs)("span", {
                            className: S.nt,
                            children: [r, (0, n.jsx)(u, { size: "xs", color: "currentColor" })],
                        })
                      : r,
                  d && (0, n.jsx)(i.Lp, { text: h.intl.string(h.t.y2b7CA), className: S.Ad }),
              ],
          });
}
function E(e) {
    let { tab: t, label: r, selected: l, handleTransition: o, renderSubmenu: i, submenuOnly: _ } = e,
        C = s.useRef(null),
        g = s.useRef(!1),
        { isHovered: h, setIsHovered: A, onMouseEnter: E, onMouseLeave: x, cancelTimers: y } = (0, f.A)(100, 100),
        I = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), y(), A(!0), (g.current = p.A.keyboardModeEnabled));
        },
        T = s.useCallback(() => {
            (g.current = p.A.keyboardModeEnabled), E();
        }, [E]);
    return (0, n.jsx)("div", {
        className: S.iV,
        onMouseEnter: T,
        onMouseLeave: x,
        children: (0, n.jsx)(c.Y, {
            targetElementRef: C,
            shouldShow: h,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                y(), A(!0), (g.current = p.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                g.current && !p.A.keyboardModeEnabled && (0, b.uS)(), A(!1), C.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)("div", { onMouseEnter: E, onMouseLeave: x, children: i({ onClose: t }) });
            },
            children: (e, s) => {
                let { isShown: i } = s,
                    c = i ? d.t : u.a;
                return (0, n.jsx)(m.A.Title, {
                    ...e,
                    ref: C,
                    onClick: _ ? void 0 : () => o(t),
                    onKeyDown: I,
                    wrapperClassName: S.Vn,
                    className: a()(S.Mf, { [S.wH]: l }),
                    children: (0, n.jsxs)("span", {
                        className: S.hP,
                        children: [r, (0, n.jsx)(c, { size: "sm", color: "currentColor" })],
                    }),
                });
            },
        }),
    });
}
function x(e) {
    let { onTabSelect: t, tabs: r, selectedTab: l, selected: o } = e,
        i = s.useRef(null),
        _ = s.useRef(!1),
        { isHovered: g, setIsHovered: A, onMouseEnter: E, onMouseLeave: x, cancelTimers: y } = (0, f.A)(100, 100),
        I = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), y(), A(!0), (_.current = p.A.keyboardModeEnabled));
        },
        T = s.useCallback(() => {
            (_.current = p.A.keyboardModeEnabled), E();
        }, [E]);
    return (0, n.jsx)("div", {
        className: S.iV,
        onMouseEnter: T,
        onMouseLeave: x,
        children: (0, n.jsx)(c.Y, {
            targetElementRef: i,
            shouldShow: g,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                y(), A(!0), (_.current = p.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                _.current && !p.A.keyboardModeEnabled && (0, b.uS)(), A(!1), i.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: s } = e;
                return (0, n.jsx)("div", {
                    onMouseEnter: E,
                    onMouseLeave: x,
                    children: (0, n.jsx)(C.A, { selectedTab: l, onClose: s, tabs: r, onTabSelect: t }),
                });
            },
            children: (e, t) => {
                let { isShown: r } = t,
                    s = r ? d.t : u.a;
                return (0, n.jsx)(m.A.Title, {
                    ...e,
                    ref: i,
                    onKeyDown: I,
                    wrapperClassName: S.Vn,
                    className: a()(S.Mf, S.OS, { [S.wH]: o }),
                    "aria-label": h.intl.string(h.t["UKOtz+"]),
                    children: (0, n.jsxs)("span", {
                        className: S.hP,
                        children: [h.intl.string(h.t["UKOtz+"]), (0, n.jsx)(s, { size: "xs" })],
                    }),
                });
            },
        }),
    });
}
function y(e, t, r) {
    return e === r || (null != t.renderSubmenu && (0, g.dF)(r) && e === g.G2.CATALOG);
}
function I(e) {
    let { className: t, selectedTab: r, tabs: l, onTabSelect: i } = e,
        [c, d] = s.useState(0),
        u = s.useRef(c),
        {
            lastVisibleIndex: b,
            onItemLayout: p,
            overflowItemsRef: m,
        } = (0, o.Wv)({ items: l, itemGapPx: 24, maxLines: 1, containerWidth: c }),
        f = s.useMemo(() => l.slice(0, b + 1), [b, l]),
        C = s.useMemo(() => l.slice(b + 1), [b, l]),
        g = s.useRef(null),
        h = s.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && u.current !== t && (d(t), (u.current = t));
        }, []);
    (0, _.g)(g, h);
    let E = 0 !== c,
        I = C.some((e) => y(e.tab, e, r));
    return (0, n.jsxs)("div", {
        className: a()(S.kL, t),
        ref: g,
        children: [
            (0, n.jsxs)("div", {
                className: S.Kk,
                children: [
                    l.map((e, t) =>
                        (0, n.jsx)(
                            o.Ae,
                            {
                                index: t,
                                onItemLayout: p,
                                children: (0, n.jsx)(A, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: y(e.tab, e, r),
                                    handleTransition: i,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: m,
                        children: (0, n.jsx)(x, { tabs: C, onTabSelect: i, selectedTab: r, selected: I }),
                    }),
                ],
            }),
            E &&
                (0, n.jsxs)("div", {
                    className: S.vR,
                    children: [
                        f.map((e) =>
                            (0, n.jsx)(
                                A,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: y(e.tab, e, r),
                                    handleTransition: i,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== C.length ? (0, n.jsx)(x, { tabs: C, onTabSelect: i, selectedTab: r, selected: I }) : null,
                    ],
                }),
        ],
    });
}
