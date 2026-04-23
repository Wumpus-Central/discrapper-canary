"use strict";
n.d(t, { H$: () => C, MX: () => y, S4: () => R, zy: () => O }), n(801541);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(889137),
    l = n(17928),
    d = n(661531),
    _ = n(990078),
    u = n(462887),
    c = n(785007),
    E = n(628284),
    h = n(939249),
    m = n(194261),
    f = n(43990),
    g = n(663417),
    p = n(363195),
    A = n(644235),
    I = n(385803),
    T = n(652215),
    S = n(985018),
    N = n(180764);
function C() {
    return (0, i.jsx)("div", {
        className: N.BO,
        children: (0, i.jsx)(E.y, {
            size: "md",
            color: "currentColor",
            className: N.AU,
            colorClass: N.AI,
            secondaryColor: d.A.unsafe_rawColors.WHITE.css,
        }),
    });
}
function R(e) {
    let {
            size: t = I.ni.SIZE_60,
            name: n,
            className: s,
            style: o,
            onSelect: l,
            isSelected: d = !1,
            tabIndex: u,
            children: E,
            showBadge: f,
            showLockedBadge: g,
            showSelectionCircle: p = !1,
            disabled: A = !1,
        } = e,
        S = (0, c.Gx)({ label: n, isSelected: d }),
        R = r.useMemo(() => ({ "--custom-theme-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(_.m, {
        __unsupportedReactNodeAsText: n,
        children: (0, i.jsxs)("div", {
            className: N.RH,
            style: R,
            children: [
                (0, i.jsx)(h.D, {
                    ...S,
                    "aria-disabled": A,
                    tabIndex: u ?? S.tabIndex,
                    className: a()(N.yM, { [N.wH]: d }, s),
                    style: o,
                    onClick: d ? T.tEg : l,
                    children: E,
                }),
                (d || p) && (0, i.jsx)(C, {}),
                !d && f && (0, i.jsx)("div", { className: N.g3 }),
                g &&
                    (0, i.jsx)("div", {
                        className: N.RK,
                        children: (0, i.jsx)(m.X, { className: N.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function O(e) {
    let { theme: t, isSelected: n, onSelect: r, size: s, tabIndex: d } = e,
        _ = (0, l.bG)([p.A], () => p.A.systemTheme),
        u = p.A.themePreferenceForSystemTheme(_),
        c = (0, o.YW)({ theme: t, themePreferenceForSystemTheme: u })
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.LIGHT }, () => N.mT)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.DARK }, () => N.eQ)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.DARKER }, () => N.xl)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.MIDNIGHT }, () => N.k$)
            .with({ theme: T.NJ8.LIGHT }, () => N.mT)
            .with({ theme: T.NJ8.DARK }, () => N.eQ)
            .with({ theme: T.NJ8.DARKER }, () => N.xl)
            .with({ theme: T.NJ8.MIDNIGHT }, () => N.k$)
            .otherwise(() => N.eQ),
        E = (0, o.YW)(t)
            .with(T.NJ8.LIGHT, () => S.intl.string(S.t.K2sFfo))
            .with(T.NJ8.DARK, () => S.intl.string(S.t.SMPT1k))
            .with(T.NJ8.DARKER, () => S.intl.string(S.t.b8Cei3))
            .with(T.NJ8.MIDNIGHT, () => S.intl.string(S.t.Do4ZJx))
            .with("system", () => S.intl.string(S.t["7rOU6j"]))
            .exhaustive();
    return (0, i.jsx)(R, {
        size: s,
        onSelect: r,
        isSelected: n,
        name: E,
        tabIndex: d,
        className: a()(N.r0, c),
        children:
            "system" === t &&
            (0, i.jsx)("div", {
                className: N.P0,
                children: (0, i.jsx)(f.N, { theme: u, children: (e) => (0, i.jsx)(g.f, { className: e }) }),
            }),
    });
}
function y(e) {
    let {
            size: t,
            preset: n,
            isSelected: r,
            disabled: s,
            tabIndex: o,
            onSelect: l,
            showBadge: d,
            showLockedBadge: _,
        } = e,
        { colors: c, angle: E, theme: h } = n,
        m = (0, A.FK)({ colors: c, angle: E });
    return (0, i.jsx)(R, {
        size: t,
        onSelect: s ? void 0 : l,
        isSelected: r,
        name: n.getName(),
        className: a()([s ? N.r9 : null, (0, u.M)(h) ? N.Xu : N.VO]),
        style: { background: `var(--background-gradient), ${m}` },
        tabIndex: o,
        showBadge: d,
        showLockedBadge: _,
        disabled: s,
    });
}
