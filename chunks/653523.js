"use strict";
n.d(t, { H$: () => C, MX: () => R, S4: () => N, zy: () => v }), n(801541);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(889137),
    l = n(17928),
    u = n(661531),
    c = n(990078),
    d = n(462887),
    _ = n(785007),
    h = n(628284),
    f = n(939249),
    p = n(194261),
    E = n(43990),
    m = n(663417),
    g = n(363195),
    A = n(644235),
    I = n(385803),
    T = n(652215),
    S = n(375708),
    y = n(180764);
function C() {
    return (0, i.jsx)("div", {
        className: y.BO,
        children: (0, i.jsx)(h.y, {
            size: "md",
            color: "currentColor",
            className: y.AU,
            colorClass: y.AI,
            secondaryColor: u.A.unsafe_rawColors.WHITE.css,
        }),
    });
}
function N(e) {
    let {
            size: t = I.ni.SIZE_60,
            name: n,
            className: s,
            style: o,
            onSelect: l,
            isSelected: u = !1,
            tabIndex: d,
            children: h,
            showBadge: E,
            showLockedBadge: m,
            showSelectionCircle: g = !1,
            disabled: A = !1,
            ariaDescribedBy: S,
        } = e,
        N = (0, _.Gx)({ label: n, isSelected: u }),
        v = r.useMemo(() => ({ "--custom-theme-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(c.m, {
        __unsupportedReactNodeAsText: n,
        children: (0, i.jsxs)("div", {
            className: y.RH,
            style: v,
            children: [
                (0, i.jsx)(f.D, {
                    ...N,
                    "aria-disabled": A,
                    "aria-describedby": S,
                    tabIndex: d ?? N.tabIndex,
                    className: a()(y.yM, { [y.wH]: u }, s),
                    style: o,
                    onClick: u ? T.tEg : l,
                    children: h,
                }),
                (u || g) && (0, i.jsx)(C, {}),
                !u && E && (0, i.jsx)("div", { className: y.g3 }),
                m &&
                    (0, i.jsx)("div", {
                        className: y.RK,
                        children: (0, i.jsx)(p.X, { className: y.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function v(e) {
    let { theme: t, isSelected: n, onSelect: r, size: s, tabIndex: u } = e,
        c = (0, l.bG)([g.A], () => g.A.systemTheme),
        d = g.A.themePreferenceForSystemTheme(c),
        _ = (0, o.YW)({ theme: t, themePreferenceForSystemTheme: d })
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.LIGHT }, () => y.mT)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.DARK }, () => y.eQ)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.DARKER }, () => y.xl)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.MIDNIGHT }, () => y.k$)
            .with({ theme: T.NJ8.LIGHT }, () => y.mT)
            .with({ theme: T.NJ8.DARK }, () => y.eQ)
            .with({ theme: T.NJ8.DARKER }, () => y.xl)
            .with({ theme: T.NJ8.MIDNIGHT }, () => y.k$)
            .otherwise(() => y.eQ),
        h = (0, o.YW)(t)
            .with(T.NJ8.LIGHT, () => S.intl.string(S.t.K2sFfo))
            .with(T.NJ8.DARK, () => S.intl.string(S.t.SMPT1k))
            .with(T.NJ8.DARKER, () => S.intl.string(S.t.b8Cei3))
            .with(T.NJ8.MIDNIGHT, () => S.intl.string(S.t.Do4ZJx))
            .with("system", () => S.intl.string(S.t["7rOU6j"]))
            .exhaustive();
    return (0, i.jsx)(N, {
        size: s,
        onSelect: r,
        isSelected: n,
        name: h,
        tabIndex: u,
        className: a()(y.r0, _),
        children:
            "system" === t &&
            (0, i.jsx)("div", {
                className: y.P0,
                children: (0, i.jsx)(E.N, { theme: d, children: (e) => (0, i.jsx)(m.f, { className: e }) }),
            }),
    });
}
function R(e) {
    let {
            size: t,
            preset: n,
            isSelected: r,
            disabled: s,
            tabIndex: o,
            onSelect: l,
            showBadge: u,
            showLockedBadge: c,
            ariaDescribedBy: _,
        } = e,
        { colors: h, angle: f, theme: p } = n,
        E = (0, A.FK)({ colors: h, angle: f });
    return (0, i.jsx)(N, {
        size: t,
        onSelect: s ? void 0 : l,
        isSelected: r,
        name: n.getName(),
        className: a()([s ? y.r9 : null, (0, d.M)(p) ? y.Xu : y.VO]),
        style: { background: `var(--background-gradient), ${E}` },
        tabIndex: o,
        showBadge: u,
        showLockedBadge: c,
        disabled: s,
        ariaDescribedBy: _,
    });
}
