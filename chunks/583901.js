n.d(t, {
    DR: () => T,
    S4: () => S,
    bD: () => I,
    oK: () => v,
}),
    n(314940);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(278074),
    s = n(442837),
    l = n(692547),
    c = n(28664),
    u = n(780384),
    d = n(755721),
    f = n(481060),
    p = n(210887),
    _ = n(47760),
    m = n(981631),
    h = n(388032),
    g = n(236510);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v() {
    return (0, r.jsx)("div", {
        className: g.selectionCircle,
        children: (0, r.jsx)(f.owK, {
            size: "md",
            color: "currentColor",
            className: g.checkmarkCircle,
            colorClass: g.checkmark,
            secondaryColor: l.Z.unsafe_rawColors.WHITE.css,
        }),
    });
}
function S(e) {
    let {
            name: t,
            className: n,
            style: i,
            onSelect: o,
            isSelected: s = !1,
            tabIndex: l,
            children: u,
            showBadge: p,
            showLockedBadge: _,
            showSelectionCircle: h = !1,
        } = e,
        E = (0, d.jm)({
            label: t,
            isSelected: s,
        });
    return (0, r.jsx)(c.u, {
        __unsupportedReactNodeAsText: t,
        children: (0, r.jsxs)("div", {
            className: g.themeSelectionContainer,
            children: [
                (0, r.jsx)(
                    f.P3F,
                    O(b({}, E), {
                        tabIndex: null != l ? l : E.tabIndex,
                        className: a()(g.themeSelection, { [g.selected]: s }, n),
                        style: i,
                        onClick: s ? m.dG4 : o,
                        children: u,
                    }),
                ),
                (s || h) && (0, r.jsx)(v, {}),
                !s && p && (0, r.jsx)("div", { className: g.redCircle }),
                _ &&
                    (0, r.jsx)("div", {
                        className: g.lockedBadgeContainer,
                        children: (0, r.jsx)(f.mBM, {
                            className: g.lockedBadge,
                            color: "currentColor",
                        }),
                    }),
            ],
        }),
    });
}
function I(e) {
    let { theme: t, isSelected: n, onSelect: i } = e,
        l = (0, s.e7)([p.Z], () => p.Z.systemTheme),
        c = p.Z.themePreferenceForSystemTheme(l),
        u = (0, o.EQ)({
            theme: t,
            themePreferenceForSystemTheme: c,
        })
            .with(
                {
                    theme: "system",
                    themePreferenceForSystemTheme: m.BRd.LIGHT,
                },
                () => g.lightIcon,
            )
            .with(
                {
                    theme: "system",
                    themePreferenceForSystemTheme: m.BRd.DARK,
                },
                () => g.darkIcon,
            )
            .with(
                {
                    theme: "system",
                    themePreferenceForSystemTheme: m.BRd.DARKER,
                },
                () => g.darkerIcon,
            )
            .with(
                {
                    theme: "system",
                    themePreferenceForSystemTheme: m.BRd.MIDNIGHT,
                },
                () => g.midnightIcon,
            )
            .with({ theme: m.BRd.LIGHT }, () => g.lightIcon)
            .with({ theme: m.BRd.DARK }, () => g.darkIcon)
            .with({ theme: m.BRd.DARKER }, () => g.darkerIcon)
            .with({ theme: m.BRd.MIDNIGHT }, () => g.midnightIcon)
            .otherwise(() => g.darkIcon),
        d = (0, o.EQ)(t)
            .with(m.BRd.LIGHT, () => h.intl.string(h.t.K2sFfo))
            .with(m.BRd.DARK, () => h.intl.string(h.t.SMPT1k))
            .with(m.BRd.DARKER, () => h.intl.string(h.t.b8Cei3))
            .with(m.BRd.MIDNIGHT, () => h.intl.string(h.t.Do4ZJx))
            .with("system", () => h.intl.string(h.t["7rOU6j"]))
            .exhaustive();
    return (0, r.jsx)(S, {
        onSelect: i,
        isSelected: n,
        name: d,
        className: a()(g.defaultThemeSelection, u),
        children:
            "system" === t &&
            (0, r.jsx)("div", {
                className: g.iconWrapper,
                children: (0, r.jsx)(f.f6W, {
                    theme: c,
                    children: (e) => (0, r.jsx)(f.DuK, { className: e }),
                }),
            }),
    });
}
function T(e) {
    let { preset: t, isSelected: n, disabled: i, tabIndex: o, onSelect: s, showBadge: l, showLockedBadge: c } = e,
        { colors: d, angle: f, theme: p } = t,
        m = (0, _.VK)({
            colors: d,
            angle: f,
        });
    return (0, r.jsx)(S, {
        onSelect: i ? void 0 : s,
        isSelected: n,
        name: t.getName(),
        className: a()([i ? g.disabled : null, (0, u.wj)(p) ? g.darkOverlay : g.lightOverlay]),
        style: { background: "var(--background-gradient), ".concat(m) },
        tabIndex: o,
        showBadge: l,
        showLockedBadge: c,
    });
}
