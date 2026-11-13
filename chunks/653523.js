var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(855986),
    o = n(646514),
    d = n(462887),
    c = n(785007),
    u = n(628284),
    _ = n(866665),
    E = n(939249),
    A = n(194261),
    f = n(43990),
    h = n(663417),
    I = n(413599),
    p = n(644235),
    m = n(385803),
    T = n(652215),
    g = n(792996),
    S = n(937729);
function N() {
    return (0, i.jsx)("div", {
        className: S.BO,
        children: (0, i.jsx)(u.CircleCheckIcon, {
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
            size: t = m.ni.SIZE_60,
            name: n,
            className: a,
            style: l,
            onSelect: o,
            isSelected: d = !1,
            tabIndex: u,
            children: f,
            showBadge: h,
            showLockedBadge: I,
            showSelectionCircle: p = !1,
            disabled: g = !1,
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
                    "aria-disabled": g,
                    "aria-describedby": C,
                    tabIndex: u ?? O.tabIndex,
                    className: s()(S.yM, { [S.wH]: d }, a),
                    style: l,
                    onClick: d ? T.tEg : o,
                    children: f,
                }),
                (d || p) && (0, i.jsx)(N, {}),
                !d && h && (0, i.jsx)("div", { className: S.g3 }),
                I &&
                    (0, i.jsx)("div", {
                        className: S.RK,
                        children: (0, i.jsx)(A.LockIcon, { className: S.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
n.d(
    t,
    {},
    {
        H$: N,
        MX: function (e) {
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
                { colors: E, angle: A, theme: f } = n,
                h = (0, p.FK)({ colors: E, angle: A });
            return (0, i.jsx)(C, {
                size: t,
                onSelect: a ? void 0 : o,
                isSelected: r,
                name: n.getName(),
                className: s()([a ? S.r9 : null, (0, d.M)(f) ? S.Xu : S.VO]),
                style: { background: `var(--background-gradient), ${h}` },
                tabIndex: l,
                showBadge: c,
                showLockedBadge: u,
                disabled: a,
                ariaDescribedBy: _,
            });
        },
        S4: C,
        zy: function (e) {
            let { theme: t, isSelected: n, onSelect: r, size: a, tabIndex: o } = e,
                d = (0, l.bG)([I.A], () => I.A.systemTheme),
                c = I.A.themePreferenceForSystemTheme(d),
                u = (function (e) {
                    switch (e) {
                        case T.NJ8.LIGHT:
                            return S.mT;
                        case T.NJ8.ASH:
                            return S.ce;
                        case T.NJ8.DARK:
                            return S.eQ;
                        case T.NJ8.ONYX:
                            return S.Ih;
                        default:
                            return S.ce;
                    }
                })("system" === t ? c : t),
                _ = (function (e) {
                    switch (e) {
                        case T.NJ8.LIGHT:
                            return g.intl.string(g.t.K2sFfo);
                        case T.NJ8.ASH:
                            return g.intl.string(g.t.SMPT1k);
                        case T.NJ8.DARK:
                            return g.intl.string(g.t.b8Cei3);
                        case T.NJ8.ONYX:
                            return g.intl.string(g.t.Do4ZJx);
                        case "system":
                            return g.intl.string(g.t["7rOU6j"]);
                        default:
                            return g.intl.string(g.t.b8Cei3);
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
                        children: (0, i.jsx)(f.N, {
                            theme: c,
                            children: (e) => (0, i.jsx)(h.RefreshIcon, { className: e }),
                        }),
                    }),
            });
        },
    },
);
