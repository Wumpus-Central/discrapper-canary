n.d(t, { k: () => ee });
var i = n(419954),
    l = n(780964),
    s = n(17928),
    r = n(147248),
    a = n(141343),
    o = n(665267),
    u = n(105292);
let d = (0, i.E2)(l.X.APPEARANCE_CLIENT_THEMES, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: o.sB,
    usePredicate: () => {
        let e = (0, a.V)(),
            t = (0, s.bG)([r.A], () => r.A.isPreview);
        return !e || t;
    },
});
var c = n(477900);
n(582128);
var g = n(503698),
    m = n.n(g),
    A = n(562708),
    E = n(821609),
    h = n(297264),
    S = n(834730),
    x = n(688810),
    T = n(139286),
    p = n(793943),
    f = n(996254),
    _ = n(830543),
    I = n(738419),
    N = n(72191),
    C = n(325600),
    b = n(114149);
function y(e) {
    let { className: t } = e,
        { analyticsLocations: n } = (0, x.Ay)();
    (0, T.A)({
        name: A.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: A.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let i = (0, f.X)({ "en-US": N.default["f/cLEi"], "en-GB": N.default["f/cLEi"] }, N.default.CARxAC);
    return (0, c.jsxs)("div", {
        className: m()(C.kL, t),
        children: [
            (0, c.jsx)("div", { className: C.zc, children: (0, c.jsx)("img", { src: b.A, className: C._e, alt: "" }) }),
            (0, c.jsxs)("div", {
                className: C.P_,
                children: [
                    (0, c.jsx)(h.D, { variant: "heading-lg/semibold", color: "text-strong", children: i }),
                    (0, c.jsx)(S.E, { variant: "text-sm/normal", children: u.intl.string(N.default.nla4RG) }),
                ],
            }),
            (0, c.jsx)("div", {
                className: C.UD,
                children: (0, c.jsx)(E.$, {
                    variant: "primary",
                    text: u.intl.string(u.t.uw9zI7),
                    onClick: function () {
                        ((0, I.b0)(I.G8.APPEARANCE_SETTINGS),
                            (0, p.nf)(p.HP.CUSTOM_THEME, { from: p.xv.SETTING }),
                            (0, _.default)());
                    },
                }),
            }),
        ],
    });
}
let v = (0, i.E2)(l.X.APPEARANCE_CUSTOM_THEMES_UPSELL, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: function () {
        return (0, c.jsx)(y, { className: C.YH });
    },
    usePredicate: () => {
        let e = (0, a.V)(),
            t = (0, s.bG)([r.A], () => r.A.isPreview);
        return !e || t;
    },
});
var j = n(366010),
    O = n(775602),
    L = n(875317),
    R = n(97469),
    D = n(363195),
    P = n(253932),
    G = n(818348);
let M = (0, i.zD)(l.X.APPEARANCE_DARK_SIDEBAR, {
    useTitle: () => u.intl.string(u.t.EpSHAQ),
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    useValue: function () {
        let e = (0, R.qo)();
        return (0, s.bG)([D.A, O.Ay], () => {
            let t = D.A.theme,
                n = O.Ay.useForcedColors;
            return e && (0, j.q)(t) && !n;
        });
    },
    usePredicate: function () {
        let e = null != P.eh.useSetting().customUserThemeSettings,
            t = null != (0, L.Q)(),
            n = (0, a.V)();
        return (0, s.bG)([D.A, r.A], () => {
            let i = D.A.theme,
                l = r.A.gradientPreset;
            return !n && (0, j.q)(i) && null == l && !e && !t;
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
var U = n(331322),
    V = n(487245),
    k = n(385803);
let w = (0, i.E2)(l.X.APPEARANCE_DEFAULT_THEMES, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: function () {
        return (0, c.jsxs)(V.Ay, {
            type: V.v0.SETTINGS,
            children: [
                (0, c.jsx)(h.D, {
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
var F = n(873298),
    B = n(793574),
    z = n(11029),
    X = n(653523),
    Y = n(973654),
    H = n(185928),
    W = n(652215),
    K = n(448600);
let Z = (0, i.E2)(l.X.APPEARANCE_DUAL_THEME_SELECTOR, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik), u.intl.string(u.t.NoFvjZ), u.intl.string(u.t["EgvHH/"])],
    Component: function () {
        var e;
        let { analyticsLocations: t } = (0, x.Ay)(B.A.CLIENT_THEMES_THEME_SELECTOR),
            [n, i, l, a, o] = (0, s.yK)([D.A, r.A], () => [
                D.A.themePreferenceForSystemTheme(H.Fc.LIGHT),
                D.A.themePreferenceForSystemTheme(H.Fc.DARK),
                D.A.getSyncedClientTheme(H.Fc.LIGHT)?.backgroundGradientPresetId,
                D.A.getSyncedClientTheme(H.Fc.DARK)?.backgroundGradientPresetId,
                r.A.isPreview,
            ]);
        function d(e, n, i) {
            ((0, Y.NA)({ [e]: n }), (0, Y.qX)(e, null != i ? { backgroundGradientPresetId: i } : { theme: n }));
            let l = null != i ? `${e}-mode-${F.ju[i]}` : `${e}-mode-${n}`;
            ((0, V.X8)({ isPersisted: !0, analyticsLocations: t, themeName: l }), (0, z.cO)(), (0, z.by)());
        }
        let g = o ? [] : k.G$.filter(k.Qm),
            m = o ? [] : k.iA.filter(k.Qm);
        return (0, c.jsxs)("div", {
            className: K.k,
            children: [
                (0, c.jsxs)(V.Ay, {
                    type: V.v0.SETTINGS,
                    children: [
                        (0, c.jsx)(h.D, {
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
                                (0, c.jsx)(X.zy, {
                                    theme: W.NJ8.LIGHT,
                                    size: k.ni.SIZE_48,
                                    isSelected: ((e = W.NJ8.LIGHT), (o || null == l) && n === e),
                                    onSelect: () => d(H.Fc.LIGHT, W.NJ8.LIGHT, void 0),
                                }),
                                g.map((e) =>
                                    (0, c.jsx)(
                                        X.MX,
                                        {
                                            preset: e,
                                            size: k.ni.SIZE_48,
                                            isSelected: l === e.id,
                                            onSelect: () => d(H.Fc.LIGHT, e.theme, e.id),
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
                        (0, c.jsx)(h.D, {
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
                                        X.zy,
                                        {
                                            theme: e,
                                            size: k.ni.SIZE_48,
                                            isSelected: (o || null == a) && i === e,
                                            onSelect: () => d(H.Fc.DARK, e, void 0),
                                        },
                                        e,
                                    ),
                                ),
                                m.map((e) =>
                                    (0, c.jsx)(
                                        X.MX,
                                        {
                                            preset: e,
                                            size: k.ni.SIZE_48,
                                            isSelected: a === e.id,
                                            onSelect: () => d(H.Fc.DARK, e.theme, e.id),
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
var q = n(462887),
    Q = n(817281),
    J = (n(644235), n(189916));
let $ = (0, i.zD)(l.X.APPEARANCE_SAME_AS_DEVICE_THEME, {
        useTitle: () => u.intl.string(u.t.c445ix),
        useSubtitle: () => u.intl.string(u.t["+tBsvs"]),
        useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
        useValue: function () {
            return (0, s.bG)([D.A], () => D.A.isSameAsDeviceThemeEnabled());
        },
        setValue: function (e) {
            e
                ? (function () {
                      if (
                          (Q.Ay.setShouldSyncAppearanceSettings(!1),
                          null == D.A.getSyncedClientTheme(H.Fc.LIGHT) && null == D.A.getSyncedClientTheme(H.Fc.DARK))
                      ) {
                          let e = D.A.theme,
                              t = (0, q.M)(e) ? H.Fc.DARK : H.Fc.LIGHT,
                              n = r.A.gradientPreset?.id,
                              i = !r.A.isPreview || (0, J.oB)(n) ? n : void 0;
                          ((0, Y.NA)({ [t]: e }),
                              null != i ? (0, Y.qX)(t, { backgroundGradientPresetId: i }) : (0, Y.qX)(t, { theme: e }));
                      }
                      ((0, Y.ZM)(!0), (0, Y.k7)(H.Q_.ON));
                  })()
                : ((0, Y.k7)(H.Q_.OFF), (0, Y.ZM)(!1));
        },
    }),
    ee = (0, i.FW)(l.X.APPEARANCE_THEME_FIELDSET, {
        useTitle: () => u.intl.string(u.t.Ksh3ik),
        isTitleHiddenVisually: !0,
        buildLayout: () => [$, Z, w, M, v, d],
    });
