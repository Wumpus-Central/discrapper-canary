"use strict";
n.d(t, { H$: () => N, MX: () => v, S4: () => O, zy: () => R }), n(801541);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(889137),
    l = n(311907),
    u = n(827734),
    d = n(990078),
    c = n(462887),
    _ = n(785007),
    f = n(628284),
    E = n(939249),
    h = n(194261),
    p = n(43990),
    m = n(663417),
    g = n(544028),
    A = n(644235),
    I = n(385803),
    T = n(652215),
    S = n(985018),
    y = n(921564);
function N() {
    return (0, r.jsx)("div", {
        className: y.BO,
        children: (0, r.jsx)(f.y, {
            size: "md",
            color: "currentColor",
            className: y.AU,
            colorClass: y.AI,
            secondaryColor: u.A.unsafe_rawColors.WHITE.css,
        }),
    });
}
function O(e) {
    let {
            size: t = I.ni.SIZE_60,
            name: n,
            className: s,
            style: o,
            onSelect: l,
            isSelected: u = !1,
            tabIndex: c,
            children: f,
            showBadge: p,
            showLockedBadge: m,
            showSelectionCircle: g = !1,
            disabled: A = !1,
        } = e,
        S = (0, _.Gx)({ label: n, isSelected: u }),
        O = i.useMemo(() => ({ "--custom-theme-selection-size": `${t}px` }), [t]);
    return (0, r.jsx)(d.m, {
        __unsupportedReactNodeAsText: n,
        children: (0, r.jsxs)("div", {
            className: y.RH,
            style: O,
            children: [
                (0, r.jsx)(E.D, {
                    ...S,
                    "aria-disabled": A,
                    tabIndex: c ?? S.tabIndex,
                    className: a()(y.yM, { [y.wH]: u }, s),
                    style: o,
                    onClick: u ? T.tEg : l,
                    children: f,
                }),
                (u || g) && (0, r.jsx)(N, {}),
                !u && p && (0, r.jsx)("div", { className: y.g3 }),
                m &&
                    (0, r.jsx)("div", {
                        className: y.RK,
                        children: (0, r.jsx)(h.X, { className: y.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function R(e) {
    let { theme: t, isSelected: n, onSelect: i, size: s, tabIndex: u } = e,
        d = (0, l.bG)([g.A], () => g.A.systemTheme),
        c = g.A.themePreferenceForSystemTheme(d),
        _ = (0, o.YW)({ theme: t, themePreferenceForSystemTheme: c })
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.LIGHT }, () => y.mT)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.DARK }, () => y.eQ)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.DARKER }, () => y.xl)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.MIDNIGHT }, () => y.k$)
            .with({ theme: T.NJ8.LIGHT }, () => y.mT)
            .with({ theme: T.NJ8.DARK }, () => y.eQ)
            .with({ theme: T.NJ8.DARKER }, () => y.xl)
            .with({ theme: T.NJ8.MIDNIGHT }, () => y.k$)
            .otherwise(() => y.eQ),
        f = (0, o.YW)(t)
            .with(T.NJ8.LIGHT, () => S.intl.string(S.t.K2sFfo))
            .with(T.NJ8.DARK, () => S.intl.string(S.t.SMPT1k))
            .with(T.NJ8.DARKER, () => S.intl.string(S.t.b8Cei3))
            .with(T.NJ8.MIDNIGHT, () => S.intl.string(S.t.Do4ZJx))
            .with("system", () => S.intl.string(S.t["7rOU6j"]))
            .exhaustive();
    return (0, r.jsx)(O, {
        size: s,
        onSelect: i,
        isSelected: n,
        name: f,
        tabIndex: u,
        className: a()(y.r0, _),
        children:
            "system" === t &&
            (0, r.jsx)("div", {
                className: y.P0,
                children: (0, r.jsx)(p.N, { theme: c, children: (e) => (0, r.jsx)(m.f, { className: e }) }),
            }),
    });
}
function v(e) {
    let {
            size: t,
            preset: n,
            isSelected: i,
            disabled: s,
            tabIndex: o,
            onSelect: l,
            showBadge: u,
            showLockedBadge: d,
        } = e,
        { colors: _, angle: f, theme: E } = n,
        h = (0, A.FK)({ colors: _, angle: f });
    return (0, r.jsx)(O, {
        size: t,
        onSelect: s ? void 0 : l,
        isSelected: i,
        name: n.getName(),
        className: a()([s ? y.r9 : null, (0, c.M)(E) ? y.Xu : y.VO]),
        style: { background: `var(--background-gradient), ${h}` },
        tabIndex: o,
        showBadge: u,
        showLockedBadge: d,
        disabled: s,
    });
}
