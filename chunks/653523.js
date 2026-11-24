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
    g = n(652215),
    T = n(792996),
    S = n(937729);
function N(e) {
    let { hideBorder: t = !1 } = e;
    return (0, i.jsx)("div", {
        className: s()(S.BO, { [S.rm]: !t }),
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
            hideSelectionBorder: T = !1,
            disabled: C = !1,
            ariaDescribedBy: O,
        } = e,
        R = (0, c.Gx)({ label: n, isSelected: d }),
        L = r.useMemo(() => ({ "--custom-theme-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(_.m, {
        __unsupportedReactNodeAsText: n,
        children: (0, i.jsxs)("div", {
            className: S.RH,
            style: L,
            children: [
                (0, i.jsx)(E.D, {
                    ...R,
                    "aria-disabled": C,
                    "aria-describedby": O,
                    tabIndex: u ?? R.tabIndex,
                    className: s()(S.yM, { [S.wH]: d }, a),
                    style: l,
                    onClick: d ? g.tEg : o,
                    children: f,
                }),
                (d || p) && (0, i.jsx)(N, { hideBorder: T }),
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
                    hideSelectionBorder: E,
                } = e,
                { colors: A, angle: f, theme: h } = n,
                I = (0, p.FK)({ colors: A, angle: f });
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
                hideSelectionBorder: E,
            });
        },
        S4: C,
        zy: function (e) {
            let { theme: t, isSelected: n, onSelect: r, size: a, tabIndex: o } = e,
                d = (0, l.bG)([I.A], () => I.A.systemTheme),
                c = I.A.themePreferenceForSystemTheme(d),
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
                            return T.intl.string(T.t.K2sFfo);
                        case g.NJ8.ASH:
                            return T.intl.string(T.t.SMPT1k);
                        case g.NJ8.DARK:
                            return T.intl.string(T.t.b8Cei3);
                        case g.NJ8.ONYX:
                            return T.intl.string(T.t.Do4ZJx);
                        case "system":
                            return T.intl.string(T.t["7rOU6j"]);
                        default:
                            return T.intl.string(T.t.b8Cei3);
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
