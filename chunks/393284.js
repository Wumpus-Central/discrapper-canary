i.d(t, { k: () => $ });
var n = i(419954),
    l = i(780964),
    s = i(17928),
    r = i(147248),
    a = i(141343),
    o = i(665267),
    u = i(375708);
let d = (0, n.E2)(l.X.APPEARANCE_CLIENT_THEMES, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: o.sB,
    usePredicate: () => {
        let e = (0, a.V)(),
            t = (0, s.bG)([r.A], () => r.A.isPreview);
        return !e || t;
    },
});
var c = i(477900);
i(582128);
var g = i(503698),
    m = i.n(g),
    A = i(562708),
    h = i(821609),
    E = i(297264),
    S = i(834730),
    T = i(688810),
    x = i(139286),
    p = i(793943),
    f = i(996254),
    N = i(830543),
    _ = i(738419),
    I = i(693227),
    C = i(446673),
    b = i(114149);
function v(e) {
    let { className: t } = e,
        { analyticsLocations: i } = (0, T.Ay)();
    (0, x.A)({
        name: A.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: A.ImpressionTypes.VIEW,
        properties: { location_stack: i },
    });
    let n = (0, f.X)({ "en-US": I.default["f/cLEi"], "en-GB": I.default["f/cLEi"] }, I.default.CARxAC);
    return (0, c.jsxs)("div", {
        className: m()(C.kL, t),
        children: [
            (0, c.jsx)("div", { className: C.zc, children: (0, c.jsx)("img", { src: b.A, className: C._e, alt: "" }) }),
            (0, c.jsxs)("div", {
                className: C.P_,
                children: [
                    (0, c.jsx)(E.D, { variant: "heading-lg/semibold", color: "text-strong", children: n }),
                    (0, c.jsx)(S.E, { variant: "text-sm/normal", children: u.intl.string(I.default.nla4RG) }),
                ],
            }),
            (0, c.jsx)("div", {
                className: C.UD,
                children: (0, c.jsx)(h.$, {
                    variant: "primary",
                    text: u.intl.string(u.t.uw9zI7),
                    onClick: function () {
                        (0, _.b0)(_.G8.APPEARANCE_SETTINGS),
                            (0, p.nf)(p.HP.CUSTOM_THEME, { from: p.xv.SETTING }),
                            (0, N.default)();
                    },
                }),
            }),
        ],
    });
}
let y = (0, n.E2)(l.X.APPEARANCE_CUSTOM_THEMES_UPSELL, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: function () {
        return (0, c.jsx)(v, { className: C.YH });
    },
    usePredicate: () => {
        let e = (0, a.V)(),
            t = (0, s.bG)([r.A], () => r.A.isPreview);
        return !e || t;
    },
});
var j = i(366010),
    O = i(775602),
    R = i(875317),
    L = i(97469),
    D = i(363195),
    P = i(885386),
    G = i(818348);
let M = (0, n.zD)(l.X.APPEARANCE_DARK_SIDEBAR, {
    useTitle: () => u.intl.string(u.t.EpSHAQ),
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    useValue: function () {
        let e = (0, L.qo)();
        return (0, s.bG)([D.A, O.Ay], () => {
            let t = D.A.theme,
                i = O.Ay.useForcedColors;
            return e && (0, j.q)(t) && !i;
        });
    },
    usePredicate: function () {
        let e = null != P.eh.useSetting().customUserThemeSettings,
            t = null != (0, R.Q)(),
            i = (0, a.V)();
        return (0, s.bG)([D.A, r.A], () => {
            let n = D.A.theme,
                l = r.A.gradientPreset;
            return !i && (0, j.q)(n) && null == l && !e && !t;
        });
    },
    useDisabled: function () {
        return (0, s.bG)([D.A, O.Ay], () => {
            let e = D.A.theme,
                t = O.Ay.useForcedColors;
            return e !== G.NJ.LIGHT || t;
        });
    },
    setValue: (e) => P.l$.updateSetting(e),
});
var U = i(331322),
    V = i(487245),
    k = i(385803);
let w = (0, n.E2)(l.X.APPEARANCE_DEFAULT_THEMES, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: function () {
        return (0, c.jsxs)(V.Ay, {
            type: V.v0.SETTINGS,
            children: [
                (0, c.jsx)(E.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: u.intl.string(u.t["0EzVst"]),
                }),
                (0, c.jsx)(U.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, c.jsx)(V.t6, { size: k.ni.SIZE_48 }),
                }),
            ],
        });
    },
    usePredicate: () => !(0, a.V)(),
});
var F = i(873298),
    B = i(793574),
    z = i(653523),
    X = i(973654),
    Y = i(185928),
    H = i(652215),
    K = i(784149);
let W = (0, n.E2)(l.X.APPEARANCE_DUAL_THEME_SELECTOR, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik), u.intl.string(u.t.NoFvjZ), u.intl.string(u.t["EgvHH/"])],
    Component: function () {
        var e;
        let { analyticsLocations: t } = (0, T.Ay)(B.A.CLIENT_THEMES_THEME_SELECTOR),
            [i, n, l, a, o] = (0, s.yK)([D.A, r.A], () => [
                D.A.themePreferenceForSystemTheme(Y.Fc.LIGHT),
                D.A.themePreferenceForSystemTheme(Y.Fc.DARK),
                D.A.getSyncedClientTheme(Y.Fc.LIGHT)?.backgroundGradientPresetId,
                D.A.getSyncedClientTheme(Y.Fc.DARK)?.backgroundGradientPresetId,
                r.A.isPreview,
            ]);
        function d(e, i, n) {
            (0, X.NA)({ [e]: i }), (0, X.qX)(e, null != n ? { backgroundGradientPresetId: n } : { theme: i });
            let l = null != n ? `${e}-mode-${F.ju[n]}` : `${e}-mode-${i}`;
            (0, V.X8)({ isPersisted: !0, analyticsLocations: t, themeName: l });
        }
        let g = o ? [] : k.G$.filter(k.Qm),
            m = o ? [] : k.iA.filter(k.Qm);
        return (0, c.jsxs)("div", {
            className: K.k,
            children: [
                (0, c.jsxs)(V.Ay, {
                    type: V.v0.SETTINGS,
                    children: [
                        (0, c.jsx)(E.D, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children: u.intl.string(u.t.NoFvjZ),
                        }),
                        (0, c.jsxs)(U.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                (0, c.jsx)(z.zy, {
                                    theme: H.NJ8.LIGHT,
                                    size: k.ni.SIZE_48,
                                    isSelected: ((e = H.NJ8.LIGHT), (o || null == l) && i === e),
                                    onSelect: () => d(Y.Fc.LIGHT, H.NJ8.LIGHT, void 0),
                                }),
                                g.map((e) =>
                                    (0, c.jsx)(
                                        z.MX,
                                        {
                                            preset: e,
                                            size: k.ni.SIZE_48,
                                            isSelected: l === e.id,
                                            onSelect: () => d(Y.Fc.LIGHT, e.theme, e.id),
                                            showBadge: !1,
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
                (0, c.jsxs)(V.Ay, {
                    type: V.v0.SETTINGS,
                    children: [
                        (0, c.jsx)(E.D, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children: u.intl.string(u.t["EgvHH/"]),
                        }),
                        (0, c.jsxs)(U.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                k.f5.map((e) =>
                                    (0, c.jsx)(
                                        z.zy,
                                        {
                                            theme: e,
                                            size: k.ni.SIZE_48,
                                            isSelected: (o || null == a) && n === e,
                                            onSelect: () => d(Y.Fc.DARK, e, void 0),
                                        },
                                        e,
                                    ),
                                ),
                                m.map((e) =>
                                    (0, c.jsx)(
                                        z.MX,
                                        {
                                            preset: e,
                                            size: k.ni.SIZE_48,
                                            isSelected: a === e.id,
                                            onSelect: () => d(Y.Fc.DARK, e.theme, e.id),
                                            showBadge: !1,
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    usePredicate: a.V,
});
var Z = i(458024),
    q = i(462887),
    Q = i(817281);
let J = (0, n.zD)(l.X.APPEARANCE_SAME_AS_DEVICE_THEME, {
        useTitle: () => u.intl.string(u.t.c445ix),
        useSubtitle: () => u.intl.string(u.t["+tBsvs"]),
        useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
        useValue: function () {
            return (0, s.bG)([D.A], () => D.A.isSameAsDeviceThemeEnabled());
        },
        setValue: function (e) {
            if (e) {
                if (
                    (Q.Ay.setShouldSyncAppearanceSettings(!1),
                    null == D.A.getSyncedClientTheme(Y.Fc.LIGHT) && null == D.A.getSyncedClientTheme(Y.Fc.DARK))
                ) {
                    let e = D.A.theme,
                        t = (0, q.M)(e) ? Y.Fc.DARK : Y.Fc.LIGHT,
                        i = r.A.isPreview ? void 0 : r.A.gradientPreset?.id;
                    (0, X.NA)({ [t]: e }),
                        null != i ? (0, X.qX)(t, { backgroundGradientPresetId: i }) : (0, X.qX)(t, { theme: e });
                }
                (0, X.k7)(Y.Q_.ON), (0, X.ZM)(!0);
            } else (0, X.k7)(Y.Q_.OFF), (0, X.ZM)(!1);
        },
        usePredicate: () => (0, Z.Ay)("SameAsDeviceThemeSetting"),
    }),
    $ = (0, n.FW)(l.X.APPEARANCE_THEME_FIELDSET, {
        useTitle: () => u.intl.string(u.t.Ksh3ik),
        isTitleHiddenVisually: !0,
        buildLayout: () => [J, W, w, M, y, d],
    });
