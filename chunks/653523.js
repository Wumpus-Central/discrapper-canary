"use strict";
n.d(t, { H$: () => C, MX: () => L, S4: () => O, zy: () => R }), n(801541);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(889137),
    o = n(17928),
    d = n(661531),
    c = n(462887),
    u = n(785007),
    _ = n(628284),
    E = n(866665),
    A = n(939249),
    h = n(194261),
    I = n(43990),
    f = n(663417),
    p = n(363195),
    T = n(644235),
    m = n(385803),
    g = n(652215),
    S = n(375708),
    N = n(319556);
function C() {
    return (0, i.jsx)("div", {
        className: N.BO,
        children: (0, i.jsx)(_.y, {
            size: "md",
            color: "currentColor",
            className: N.AU,
            colorClass: N.AI,
            secondaryColor: d.A.unsafe_rawColors.WHITE.css,
        }),
    });
}
function O(e) {
    let {
            size: t = m.ni.SIZE_60,
            name: n,
            className: a,
            style: l,
            onSelect: o,
            isSelected: d = !1,
            tabIndex: c,
            children: _,
            showBadge: I,
            showLockedBadge: f,
            showSelectionCircle: p = !1,
            disabled: T = !1,
            ariaDescribedBy: S,
        } = e,
        O = (0, u.Gx)({ label: n, isSelected: d }),
        R = r.useMemo(() => ({ "--custom-theme-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(E.m, {
        __unsupportedReactNodeAsText: n,
        children: (0, i.jsxs)("div", {
            className: N.RH,
            style: R,
            children: [
                (0, i.jsx)(A.D, {
                    ...O,
                    "aria-disabled": T,
                    "aria-describedby": S,
                    tabIndex: c ?? O.tabIndex,
                    className: s()(N.yM, { [N.wH]: d }, a),
                    style: l,
                    onClick: d ? g.tEg : o,
                    children: _,
                }),
                (d || p) && (0, i.jsx)(C, {}),
                !d && I && (0, i.jsx)("div", { className: N.g3 }),
                f &&
                    (0, i.jsx)("div", {
                        className: N.RK,
                        children: (0, i.jsx)(h.LockIcon, { className: N.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function R(e) {
    let { theme: t, isSelected: n, onSelect: r, size: a, tabIndex: d } = e,
        c = (0, o.bG)([p.A], () => p.A.systemTheme),
        u = p.A.themePreferenceForSystemTheme(c),
        _ = (0, l.YW)({ theme: t, themePreferenceForSystemTheme: u })
            .with({ theme: "system", themePreferenceForSystemTheme: g.NJ8.LIGHT }, () => N.mT)
            .with({ theme: "system", themePreferenceForSystemTheme: g.NJ8.DARK }, () => N.eQ)
            .with({ theme: "system", themePreferenceForSystemTheme: g.NJ8.DARKER }, () => N.xl)
            .with({ theme: "system", themePreferenceForSystemTheme: g.NJ8.MIDNIGHT }, () => N.k$)
            .with({ theme: g.NJ8.LIGHT }, () => N.mT)
            .with({ theme: g.NJ8.DARK }, () => N.eQ)
            .with({ theme: g.NJ8.DARKER }, () => N.xl)
            .with({ theme: g.NJ8.MIDNIGHT }, () => N.k$)
            .otherwise(() => N.eQ),
        E = (0, l.YW)(t)
            .with(g.NJ8.LIGHT, () => S.intl.string(S.t.K2sFfo))
            .with(g.NJ8.DARK, () => S.intl.string(S.t.SMPT1k))
            .with(g.NJ8.DARKER, () => S.intl.string(S.t.b8Cei3))
            .with(g.NJ8.MIDNIGHT, () => S.intl.string(S.t.Do4ZJx))
            .with("system", () => S.intl.string(S.t["7rOU6j"]))
            .exhaustive();
    return (0, i.jsx)(O, {
        size: a,
        onSelect: r,
        isSelected: n,
        name: E,
        tabIndex: d,
        className: s()(N.r0, _),
        children:
            "system" === t &&
            (0, i.jsx)("div", {
                className: N.P0,
                children: (0, i.jsx)(I.N, { theme: u, children: (e) => (0, i.jsx)(f.RefreshIcon, { className: e }) }),
            }),
    });
}
function L(e) {
    let {
            size: t,
            preset: n,
            isSelected: r,
            disabled: a,
            tabIndex: l,
            onSelect: o,
            showBadge: d,
            showLockedBadge: u,
            ariaDescribedBy: _,
        } = e,
        { colors: E, angle: A, theme: h } = n,
        I = (0, T.FK)({ colors: E, angle: A });
    return (0, i.jsx)(O, {
        size: t,
        onSelect: a ? void 0 : o,
        isSelected: r,
        name: n.getName(),
        className: s()([a ? N.r9 : null, (0, c.M)(h) ? N.Xu : N.VO]),
        style: { background: `var(--background-gradient), ${I}` },
        tabIndex: l,
        showBadge: d,
        showLockedBadge: u,
        disabled: a,
        ariaDescribedBy: _,
    });
}
