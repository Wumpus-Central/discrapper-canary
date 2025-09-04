n.d(t, {
    DR: () => S,
    S4: () => v,
    bD: () => I,
    oK: () => O,
}),
    n(314940);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(278074),
    s = n(442837),
    l = n(692547),
    c = n(780384),
    u = n(755721),
    d = n(481060),
    f = n(210887),
    _ = n(47760),
    p = n(981631),
    h = n(388032),
    m = n(750852);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O() {
    return (0, r.jsx)("div", {
        className: m.selectionCircle,
        children: (0, r.jsx)(d.owK, {
            size: "md",
            color: "currentColor",
            className: m.checkmarkCircle,
            colorClass: m.checkmark,
            secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css,
        }),
    });
}
function v(e) {
    let {
            name: t,
            className: n,
            style: i,
            onSelect: o,
            isSelected: s = !1,
            tabIndex: l,
            children: c,
            showBadge: f,
            showLockedBadge: _,
            showSelectionCircle: h = !1,
        } = e,
        g = (0, u.jm)({
            label: t,
            isSelected: s,
        });
    return (0, r.jsx)(d.ua7, {
        text: t,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: m.themeSelectionContainer,
                children: [
                    (0, r.jsx)(
                        d.P3F,
                        y(E({}, e, g), {
                            tabIndex: null != l ? l : g.tabIndex,
                            className: a()(m.themeSelection, { [m.selected]: s }, n),
                            style: i,
                            onClick: s ? p.dG4 : o,
                            children: c,
                        }),
                    ),
                    (s || h) && (0, r.jsx)(O, {}),
                    !s && f && (0, r.jsx)("div", { className: m.redCircle }),
                    _ &&
                        (0, r.jsx)("div", {
                            className: m.lockedBadgeContainer,
                            children: (0, r.jsx)(d.mBM, {
                                className: m.lockedBadge,
                                color: "currentColor",
                            }),
                        }),
                ],
            }),
    });
}
function I(e) {
    let { theme: t, isSelected: n, onSelect: i } = e,
        l = (0, s.e7)([f.Z], () => f.Z.systemTheme),
        c = f.Z.themePreferenceForSystemTheme(l),
        u = (0, o.EQ)({
            theme: t,
            themePreferenceForSystemTheme: c,
        })
            .with(
                {
                    theme: "system",
                    themePreferenceForSystemTheme: p.BRd.LIGHT,
                },
                () => m.lightIcon,
            )
            .with(
                {
                    theme: "system",
                    themePreferenceForSystemTheme: p.BRd.DARK,
                },
                () => m.darkIcon,
            )
            .with(
                {
                    theme: "system",
                    themePreferenceForSystemTheme: p.BRd.DARKER,
                },
                () => m.darkerIcon,
            )
            .with(
                {
                    theme: "system",
                    themePreferenceForSystemTheme: p.BRd.MIDNIGHT,
                },
                () => m.midnightIcon,
            )
            .with({ theme: p.BRd.LIGHT }, () => m.lightIcon)
            .with({ theme: p.BRd.DARK }, () => m.darkIcon)
            .with({ theme: p.BRd.DARKER }, () => m.darkerIcon)
            .with({ theme: p.BRd.MIDNIGHT }, () => m.midnightIcon)
            .otherwise(() => m.darkIcon),
        _ = (0, o.EQ)(t)
            .with(p.BRd.LIGHT, () => h.intl.string(h.t.K2sFfn))
            .with(p.BRd.DARK, () => h.intl.string(h.t.SMPT1t))
            .with(p.BRd.DARKER, () => h.intl.string(h.t.b8Cei4))
            .with(p.BRd.MIDNIGHT, () => h.intl.string(h.t.Do4ZJy))
            .with("system", () => h.intl.string(h.t["7rOU6u"]))
            .exhaustive();
    return (0, r.jsx)(v, {
        onSelect: i,
        isSelected: n,
        name: _,
        className: a()(m.defaultThemeSelection, u),
        children:
            "system" === t &&
            (0, r.jsx)("div", {
                className: m.iconWrapper,
                children: (0, r.jsx)(d.f6W, {
                    theme: c,
                    children: (e) => (0, r.jsx)(d.DuK, { className: e }),
                }),
            }),
    });
}
function S(e) {
    let { preset: t, isSelected: n, disabled: i, tabIndex: o, onSelect: s, showBadge: l, showLockedBadge: u } = e,
        { colors: d, angle: f, theme: p } = t,
        h = (0, _.VK)({
            colors: d,
            angle: f,
        });
    return (0, r.jsx)(v, {
        onSelect: i ? void 0 : s,
        isSelected: n,
        name: t.getName(),
        className: a()([i ? m.disabled : null, (0, c.wj)(p) ? m.darkOverlay : m.lightOverlay]),
        style: { background: "var(--background-gradient), ".concat(h) },
        tabIndex: o,
        showBadge: l,
        showLockedBadge: u,
    });
}
