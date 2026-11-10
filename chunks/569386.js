n.d(t, { k: () => ee });
var i = n(419954),
    l = n(780964),
    s = n(855986),
    r = n(850333),
    a = n(141343),
    o = n(665267),
    u = n(792996);
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
    A = n(613412),
    E = n(821609),
    h = n(534514),
    S = n(834730),
    T = n(688810),
    f = n(139286),
    p = n(793943),
    x = n(996254),
    I = n(830543),
    _ = n(738419),
    b = n(958904),
    N = n(325600),
    C = n(114149);
function y(e) {
    let { className: t } = e,
        { analyticsLocations: n } = (0, T.Ay)();
    (0, f.A)({
        name: A.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: A.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let i = (0, x.X)({ "en-US": b.default["f/cLEi"], "en-GB": b.default["f/cLEi"] }, b.default.CARxAC);
    return (0, c.jsxs)("div", {
        className: m()(N.kL, t),
        children: [
            (0, c.jsx)("div", { className: N.zc, children: (0, c.jsx)("img", { src: C.A, className: N._e, alt: "" }) }),
            (0, c.jsxs)("div", {
                className: N.P_,
                children: [
                    (0, c.jsx)(h.D, { variant: "heading-lg/semibold", color: "text-strong", children: i }),
                    (0, c.jsx)(S.E, { variant: "body-sm/normal", children: u.intl.string(b.default.nla4RG) }),
                ],
            }),
            (0, c.jsx)("div", {
                className: N.UD,
                children: (0, c.jsx)(E.$, {
                    variant: "primary",
                    text: u.intl.string(u.t.uw9zI7),
                    onClick: function () {
                        ((0, _.b0)(_.G8.APPEARANCE_SETTINGS),
                            (0, p.nf)(p.HP.CUSTOM_THEME, { from: p.xv.SETTING }),
                            (0, I.default)());
                    },
                }),
            }),
        ],
    });
}
let v = (0, i.E2)(l.X.APPEARANCE_CUSTOM_THEMES_UPSELL, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: function () {
        return (0, c.jsx)(y, { className: N.YH });
    },
    usePredicate: () => {
        let e = (0, a.V)(),
            t = (0, s.bG)([r.A], () => r.A.isPreview);
        return !e || t;
    },
});
var j = n(366010),
    O = n(775602),
    R = n(875317),
    D = n(97469),
    L = n(413599),
    P = n(253932),
    G = n(818348);
let M = (0, i.zD)(l.X.APPEARANCE_DARK_SIDEBAR, {
    useTitle: () => u.intl.string(u.t.EpSHAQ),
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    useValue: function () {
        let e = (0, D.qo)();
        return (0, s.bG)([L.A, O.Ay], () => {
            let t = L.A.theme,
                n = O.Ay.useForcedColors;
            return e && (0, j.q)(t) && !n;
        });
    },
    usePredicate: function () {
        let e = null != P.eh.useSetting().customUserThemeSettings,
            t = null != (0, R.Q)(),
            n = (0, a.V)();
        return (0, s.bG)([L.A, r.A], () => {
            let i = L.A.theme,
                l = r.A.gradientPreset;
            return !n && (0, j.q)(i) && null == l && !e && !t;
        });
    },
    useDisabled: function () {
        return (0, s.bG)([L.A, O.Ay], () => {
            let e = L.A.theme,
                t = O.Ay.useForcedColors;
            return e !== G.NJ.LIGHT || t;
        });
    },
    setValue: (e) => P.l$.updateSetting(e),
});
var U = n(331322),
    V = n(270746),
    k = n(385803);
let w = (0, i.E2)(l.X.APPEARANCE_DEFAULT_THEMES, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: function () {
        return (0, c.jsxs)(V.Ay, {
            type: V.v0.SETTINGS,
            children: [
                (0, c.jsx)(h.D, {
                    variant: "heading-sm/semibold",
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
    X = n(11029),
    z = n(653523),
    H = n(973654),
    Y = n(185928),
    W = n(652215),
    K = n(448600);
let Z = (0, i.E2)(l.X.APPEARANCE_DUAL_THEME_SELECTOR, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik), u.intl.string(u.t.NoFvjZ), u.intl.string(u.t["EgvHH/"])],
    Component: function () {
        var e;
        let { analyticsLocations: t } = (0, T.Ay)(B.A.CLIENT_THEMES_THEME_SELECTOR),
            [n, i, l, a, o] = (0, s.yK)([L.A, r.A], () => [
                L.A.themePreferenceForSystemTheme(Y.Fc.LIGHT),
                L.A.themePreferenceForSystemTheme(Y.Fc.DARK),
                L.A.getSyncedClientTheme(Y.Fc.LIGHT)?.backgroundGradientPresetId,
                L.A.getSyncedClientTheme(Y.Fc.DARK)?.backgroundGradientPresetId,
                r.A.isPreview,
            ]);
        function d(e, n, i) {
            ((0, H.NA)({ [e]: n }), (0, H.qX)(e, null != i ? { backgroundGradientPresetId: i } : { theme: n }));
            let l = null != i ? `${e}-mode-${F.ju[i]}` : `${e}-mode-${n}`;
            ((0, V.X8)({ isPersisted: !0, analyticsLocations: t, themeName: l }), (0, X.cO)(), (0, X.by)());
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
                            variant: "heading-sm/semibold",
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
                                    theme: W.NJ8.LIGHT,
                                    size: k.ni.SIZE_48,
                                    isSelected: ((e = W.NJ8.LIGHT), (o || null == l) && n === e),
                                    onSelect: () => d(Y.Fc.LIGHT, W.NJ8.LIGHT, void 0),
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
                        (0, c.jsx)(h.D, {
                            variant: "heading-sm/semibold",
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
                                            isSelected: (o || null == a) && i === e,
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
var q = n(462887),
    Q = n(817281),
    J = (n(644235), n(773527));
let $ = (0, i.zD)(l.X.APPEARANCE_SAME_AS_DEVICE_THEME, {
        useTitle: () => u.intl.string(u.t.c445ix),
        useSubtitle: () => u.intl.string(u.t["+tBsvs"]),
        useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
        useValue: function () {
            return (0, s.bG)([L.A], () => L.A.isSameAsDeviceThemeEnabled());
        },
        setValue: function (e) {
            e
                ? (function () {
                      if (
                          (Q.Ay.setShouldSyncAppearanceSettings(!1),
                          null == L.A.getSyncedClientTheme(Y.Fc.LIGHT) && null == L.A.getSyncedClientTheme(Y.Fc.DARK))
                      ) {
                          let e = L.A.theme,
                              t = (0, q.M)(e) ? Y.Fc.DARK : Y.Fc.LIGHT,
                              n = r.A.gradientPreset?.id,
                              i = !r.A.isPreview || (0, J.oB)(n) ? n : void 0;
                          ((0, H.NA)({ [t]: e }),
                              null != i ? (0, H.qX)(t, { backgroundGradientPresetId: i }) : (0, H.qX)(t, { theme: e }));
                      }
                      ((0, H.ZM)(!0), (0, H.k7)(Y.Q_.ON));
                  })()
                : ((0, H.k7)(Y.Q_.OFF), (0, H.ZM)(!1));
        },
    }),
    ee = (0, i.FW)(l.X.APPEARANCE_THEME_FIELDSET, {
        useTitle: () => u.intl.string(u.t.Ksh3ik),
        isTitleHiddenVisually: !0,
        buildLayout: () => [$, Z, w, M, v, d],
    });
