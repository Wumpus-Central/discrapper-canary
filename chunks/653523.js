n.d(t, { H$: () => N, MX: () => R, S4: () => C, zy: () => O });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(661531),
    d = n(462887),
    c = n(785007),
    u = n(628284),
    _ = n(866665),
    E = n(939249),
    A = n(194261),
    h = n(43990),
    I = n(663417),
    f = n(363195),
    p = n(644235),
    T = n(385803),
    g = n(652215),
    m = n(375708),
    S = n(937729);
function N() {
    return (0, i.jsx)("div", {
        className: S.BO,
        children: (0, i.jsx)(u.y, {
            size: "md",
            color: "currentColor",
            className: S.AU,
            colorClass: S.AI,
            secondaryColor: o.A.unsafe_rawColors.WHITE.css,
        }),
    });
}
function C(e) {
    let {
            size: t = T.ni.SIZE_60,
            name: n,
            className: a,
            style: l,
            onSelect: o,
            isSelected: d = !1,
            tabIndex: u,
            children: h,
            showBadge: I,
            showLockedBadge: f,
            showSelectionCircle: p = !1,
            disabled: m = !1,
            ariaDescribedBy: C,
        } = e,
        O = (0, c.Gx)({ label: n, isSelected: d }),
        R = r.useMemo(() => ({ "--custom-theme-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(_.m, {
        __unsupportedReactNodeAsText: n,
        children: (0, i.jsxs)("div", {
            className: S.RH,
            style: R,
            children: [
                (0, i.jsx)(E.D, {
                    ...O,
                    "aria-disabled": m,
                    "aria-describedby": C,
                    tabIndex: u ?? O.tabIndex,
                    className: s()(S.yM, { [S.wH]: d }, a),
                    style: l,
                    onClick: d ? g.tEg : o,
                    children: h,
                }),
                (d || p) && (0, i.jsx)(N, {}),
                !d && I && (0, i.jsx)("div", { className: S.g3 }),
                f &&
                    (0, i.jsx)("div", {
                        className: S.RK,
                        children: (0, i.jsx)(A.LockIcon, { className: S.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function O(e) {
    let { theme: t, isSelected: n, onSelect: r, size: a, tabIndex: o } = e,
        d = (0, l.bG)([f.A], () => f.A.systemTheme),
        c = f.A.themePreferenceForSystemTheme(d),
        u = (function (e) {
            switch (e) {
                case g.NJ8.LIGHT:
                    return S.mT;
                case g.NJ8.ASH:
                    return S.ce;
                case g.NJ8.DARK:
                    return S.eQ;
                case g.NJ8.ONYX:
                    return S.Ih;
                default:
                    return S.ce;
            }
        })("system" === t ? c : t),
        _ = (function (e) {
            switch (e) {
                case g.NJ8.LIGHT:
                    return m.intl.string(m.t.K2sFfo);
                case g.NJ8.ASH:
                    return m.intl.string(m.t.SMPT1k);
                case g.NJ8.DARK:
                    return m.intl.string(m.t.b8Cei3);
                case g.NJ8.ONYX:
                    return m.intl.string(m.t.Do4ZJx);
                case "system":
                    return m.intl.string(m.t["7rOU6j"]);
                default:
                    return m.intl.string(m.t.b8Cei3);
            }
        })(t);
    return (0, i.jsx)(C, {
        size: a,
        onSelect: r,
        isSelected: n,
        name: _,
        tabIndex: o,
        className: s()(S.r0, u),
        children:
            "system" === t &&
            (0, i.jsx)("div", {
                className: S.P0,
                children: (0, i.jsx)(h.N, { theme: c, children: (e) => (0, i.jsx)(I.RefreshIcon, { className: e }) }),
            }),
    });
}
function R(e) {
    let {
            size: t,
            preset: n,
            isSelected: r,
            disabled: a,
            tabIndex: l,
            onSelect: o,
            showBadge: c,
            showLockedBadge: u,
            ariaDescribedBy: _,
        } = e,
        { colors: E, angle: A, theme: h } = n,
        I = (0, p.FK)({ colors: E, angle: A });
    return (0, i.jsx)(C, {
        size: t,
        onSelect: a ? void 0 : o,
        isSelected: r,
        name: n.getName(),
        className: s()([a ? S.r9 : null, (0, d.M)(h) ? S.Xu : S.VO]),
        style: { background: `var(--background-gradient), ${I}` },
        tabIndex: l,
        showBadge: c,
        showLockedBadge: u,
        disabled: a,
        ariaDescribedBy: _,
    });
}
