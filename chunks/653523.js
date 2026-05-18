"use strict";
n.d(t, { H$: () => y, MX: () => O, S4: () => C, zy: () => v }), n(801541);
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
    f = n(628284),
    h = n(939249),
    p = n(194261),
    E = n(43990),
    m = n(663417),
    g = n(363195),
    A = n(644235),
    I = n(385803),
    T = n(652215),
    S = n(375708),
    N = n(180764);
function y() {
    return (0, i.jsx)("div", {
        className: N.BO,
        children: (0, i.jsx)(f.y, {
            size: "md",
            color: "currentColor",
            className: N.AU,
            colorClass: N.AI,
            secondaryColor: u.A.unsafe_rawColors.WHITE.css,
        }),
    });
}
function C(e) {
    let {
            size: t = I.ni.SIZE_60,
            name: n,
            className: s,
            style: o,
            onSelect: l,
            isSelected: u = !1,
            tabIndex: d,
            children: f,
            showBadge: E,
            showLockedBadge: m,
            showSelectionCircle: g = !1,
            disabled: A = !1,
            ariaDescribedBy: S,
        } = e,
        C = (0, _.Gx)({ label: n, isSelected: u }),
        v = r.useMemo(() => ({ "--custom-theme-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(c.m, {
        __unsupportedReactNodeAsText: n,
        children: (0, i.jsxs)("div", {
            className: N.RH,
            style: v,
            children: [
                (0, i.jsx)(h.D, {
                    ...C,
                    "aria-disabled": A,
                    "aria-describedby": S,
                    tabIndex: d ?? C.tabIndex,
                    className: a()(N.yM, { [N.wH]: u }, s),
                    style: o,
                    onClick: u ? T.tEg : l,
                    children: f,
                }),
                (u || g) && (0, i.jsx)(y, {}),
                !u && E && (0, i.jsx)("div", { className: N.g3 }),
                m &&
                    (0, i.jsx)("div", {
                        className: N.RK,
                        children: (0, i.jsx)(p.X, { className: N.AA, color: "currentColor" }),
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
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.LIGHT }, () => N.mT)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.DARK }, () => N.eQ)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.DARKER }, () => N.xl)
            .with({ theme: "system", themePreferenceForSystemTheme: T.NJ8.MIDNIGHT }, () => N.k$)
            .with({ theme: T.NJ8.LIGHT }, () => N.mT)
            .with({ theme: T.NJ8.DARK }, () => N.eQ)
            .with({ theme: T.NJ8.DARKER }, () => N.xl)
            .with({ theme: T.NJ8.MIDNIGHT }, () => N.k$)
            .otherwise(() => N.eQ),
        f = (0, o.YW)(t)
            .with(T.NJ8.LIGHT, () => S.intl.string(S.t.K2sFfo))
            .with(T.NJ8.DARK, () => S.intl.string(S.t.SMPT1k))
            .with(T.NJ8.DARKER, () => S.intl.string(S.t.b8Cei3))
            .with(T.NJ8.MIDNIGHT, () => S.intl.string(S.t.Do4ZJx))
            .with("system", () => S.intl.string(S.t["7rOU6j"]))
            .exhaustive();
    return (0, i.jsx)(C, {
        size: s,
        onSelect: r,
        isSelected: n,
        name: f,
        tabIndex: u,
        className: a()(N.r0, _),
        children:
            "system" === t &&
            (0, i.jsx)("div", {
                className: N.P0,
                children: (0, i.jsx)(E.N, { theme: d, children: (e) => (0, i.jsx)(m.f, { className: e }) }),
            }),
    });
}
function O(e) {
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
        { colors: f, angle: h, theme: p } = n,
        E = (0, A.FK)({ colors: f, angle: h });
    return (0, i.jsx)(C, {
        size: t,
        onSelect: s ? void 0 : l,
        isSelected: r,
        name: n.getName(),
        className: a()([s ? N.r9 : null, (0, d.M)(p) ? N.Xu : N.VO]),
        style: { background: `var(--background-gradient), ${E}` },
        tabIndex: o,
        showBadge: u,
        showLockedBadge: c,
        disabled: s,
        ariaDescribedBy: _,
    });
}
