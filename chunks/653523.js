"use strict";
n.d(t, { H$: () => I, MX: () => y, S4: () => T, zy: () => S }), n(801541);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(889137),
    l = n(311907),
    u = n(827734),
    c = n(990078),
    d = n(582754),
    _ = n(421380),
    f = n(397927),
    p = n(544028),
    h = n(644235),
    m = n(385803),
    E = n(652215),
    g = n(985018),
    A = n(330173);
function I() {
    return (0, r.jsx)("div", {
        className: A.BO,
        children: (0, r.jsx)(f.yr3, {
            size: "md",
            color: "currentColor",
            className: A.AU,
            colorClass: A.AI,
            secondaryColor: u.A.unsafe_rawColors.WHITE.css,
        }),
    });
}
function T(e) {
    let {
            size: t = m.ni.SIZE_60,
            name: n,
            className: s,
            style: o,
            onSelect: l,
            isSelected: u = !1,
            tabIndex: d,
            children: p,
            showBadge: h,
            showLockedBadge: g,
            showSelectionCircle: T = !1,
        } = e,
        S = (0, _.Gx)({ label: n, isSelected: u }),
        y = i.useMemo(() => ({ "--custom-theme-selection-size": `${t}px` }), [t]);
    return (0, r.jsx)(c.m, {
        __unsupportedReactNodeAsText: n,
        children: (0, r.jsxs)("div", {
            className: A.RH,
            style: y,
            children: [
                (0, r.jsx)(f.DUT, {
                    ...S,
                    tabIndex: d ?? S.tabIndex,
                    className: a()(A.yM, { [A.wH]: u }, s),
                    style: o,
                    onClick: u ? E.tEg : l,
                    children: p,
                }),
                (u || T) && (0, r.jsx)(I, {}),
                !u && h && (0, r.jsx)("div", { className: A.g3 }),
                g &&
                    (0, r.jsx)("div", {
                        className: A.RK,
                        children: (0, r.jsx)(f.XAi, { className: A.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function S(e) {
    let { theme: t, isSelected: n, onSelect: i, size: s, tabIndex: u } = e,
        c = (0, l.bG)([p.A], () => p.A.systemTheme),
        d = p.A.themePreferenceForSystemTheme(c),
        _ = (0, o.YW)({ theme: t, themePreferenceForSystemTheme: d })
            .with({ theme: "system", themePreferenceForSystemTheme: E.NJ8.LIGHT }, () => A.mT)
            .with({ theme: "system", themePreferenceForSystemTheme: E.NJ8.DARK }, () => A.eQ)
            .with({ theme: "system", themePreferenceForSystemTheme: E.NJ8.DARKER }, () => A.xl)
            .with({ theme: "system", themePreferenceForSystemTheme: E.NJ8.MIDNIGHT }, () => A.k$)
            .with({ theme: E.NJ8.LIGHT }, () => A.mT)
            .with({ theme: E.NJ8.DARK }, () => A.eQ)
            .with({ theme: E.NJ8.DARKER }, () => A.xl)
            .with({ theme: E.NJ8.MIDNIGHT }, () => A.k$)
            .otherwise(() => A.eQ),
        h = (0, o.YW)(t)
            .with(E.NJ8.LIGHT, () => g.intl.string(g.t.K2sFfo))
            .with(E.NJ8.DARK, () => g.intl.string(g.t.SMPT1k))
            .with(E.NJ8.DARKER, () => g.intl.string(g.t.b8Cei3))
            .with(E.NJ8.MIDNIGHT, () => g.intl.string(g.t.Do4ZJx))
            .with("system", () => g.intl.string(g.t["7rOU6j"]))
            .exhaustive();
    return (0, r.jsx)(T, {
        size: s,
        onSelect: i,
        isSelected: n,
        name: h,
        tabIndex: u,
        className: a()(A.r0, _),
        children:
            "system" === t &&
            (0, r.jsx)("div", {
                className: A.P0,
                children: (0, r.jsx)(f.NPJ, { theme: d, children: (e) => (0, r.jsx)(f.fNY, { className: e }) }),
            }),
    });
}
function y(e) {
    let {
            size: t,
            preset: n,
            isSelected: i,
            disabled: s,
            tabIndex: o,
            onSelect: l,
            showBadge: u,
            showLockedBadge: c,
        } = e,
        { colors: _, angle: f, theme: p } = n,
        m = (0, h.FK)({ colors: _, angle: f });
    return (0, r.jsx)(T, {
        size: t,
        onSelect: s ? void 0 : l,
        isSelected: i,
        name: n.getName(),
        className: a()([s ? A.r9 : null, (0, d.Mw)(p) ? A.Xu : A.VO]),
        style: { background: `var(--background-gradient), ${m}` },
        tabIndex: o,
        showBadge: u,
        showLockedBadge: c,
    });
}
