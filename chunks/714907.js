n.d(t, { k: () => ed });
var i = n(419954),
    l = n(780964),
    s = n(855986),
    r = n(47671),
    a = n(141343),
    o = n(665267),
    u = n(792996);
let c = (0, i.E2)(l.X.APPEARANCE_CLIENT_THEMES, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: o.sB,
    usePredicate: () => {
        let e = (0, a.V)(),
            t = (0, s.bG)([r.A], () => r.A.isPreview);
        return !e || t;
    },
});
var d = n(477900),
    m = n(582128),
    g = n(503698),
    A = n.n(g),
    E = n(613412),
    h = n(821609),
    f = n(534514),
    p = n(834730),
    S = n(688810),
    T = n(139286),
    x = n(793943),
    I = n(996254),
    _ = n(830543),
    b = n(738419),
    C = n(958904),
    y = n(325600),
    N = n(114149);
function v(e) {
    let { className: t } = e,
        { analyticsLocations: n } = (0, S.Ay)();
    (0, T.A)({
        name: E.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: E.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let i = (0, I.X)({ "en-US": C.default["f/cLEi"], "en-GB": C.default["f/cLEi"] }, C.default.CARxAC);
    return (0, d.jsxs)("div", {
        className: A()(y.kL, t),
        children: [
            (0, d.jsx)("div", { className: y.zc, children: (0, d.jsx)("img", { src: N.A, className: y._e, alt: "" }) }),
            (0, d.jsxs)("div", {
                className: y.P_,
                children: [
                    (0, d.jsx)(f.D, { variant: "heading-lg/semibold", color: "text-strong", children: i }),
                    (0, d.jsx)(p.E, { variant: "body-sm/normal", children: u.intl.string(C.default.nla4RG) }),
                ],
            }),
            (0, d.jsx)("div", {
                className: y.UD,
                children: (0, d.jsx)(h.$, {
                    variant: "primary",
                    text: u.intl.string(u.t.uw9zI7),
                    onClick: function () {
                        ((0, b.b0)(b.G8.APPEARANCE_SETTINGS),
                            (0, x.nf)(x.HP.CUSTOM_THEME, { from: x.xv.SETTING }),
                            (0, _.default)());
                    },
                }),
            }),
        ],
    });
}
let j = (0, i.E2)(l.X.APPEARANCE_CUSTOM_THEMES_UPSELL, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: function () {
        return (0, d.jsx)(v, { className: y.YH });
    },
    usePredicate: () => {
        let e = (0, a.V)(),
            t = (0, s.bG)([r.A], () => r.A.isPreview);
        return !e || t;
    },
});
var O = n(366010),
    D = n(775602),
    P = n(875317),
    R = n(97469),
    L = n(413599),
    G = n(253932),
    M = n(818348);
let U = (0, i.zD)(l.X.APPEARANCE_DARK_SIDEBAR, {
    useTitle: () => u.intl.string(u.t.EpSHAQ),
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    useValue: function () {
        let e = (0, R.qo)();
        return (0, s.bG)([L.A, D.Ay], () => {
            let t = L.A.theme,
                n = D.Ay.useForcedColors;
            return e && (0, O.q)(t) && !n;
        });
    },
    usePredicate: function () {
        let e = null != G.eh.useSetting().customUserThemeSettings,
            t = null != (0, P.Q)(),
            n = (0, a.V)();
        return (0, s.bG)([L.A, r.A], () => {
            let i = L.A.theme,
                l = r.A.gradientPreset;
            return !n && (0, O.q)(i) && null == l && !e && !t;
        });
    },
    useDisabled: function () {
        return (0, s.bG)([L.A, D.Ay], () => {
            let e = L.A.theme,
                t = D.Ay.useForcedColors;
            return e !== M.NJ.LIGHT || t;
        });
    },
    setValue: (e) => G.l$.updateSetting(e),
});
var V = n(331322),
    w = n(270746),
    k = n(385803);
let F = (0, i.E2)(l.X.APPEARANCE_DEFAULT_THEMES, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: function () {
        return (0, d.jsxs)(w.Ay, {
            type: w.v0.SETTINGS,
            children: [
                (0, d.jsx)(f.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    children: u.intl.string(u.t["0EzVst"]),
                }),
                (0, d.jsx)(V.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, d.jsx)(w.t6, { size: k.ni.SIZE_48 }),
                }),
            ],
        });
    },
    usePredicate: () => !(0, a.V)(),
});
var B = n(873298),
    H = n(858899),
    z = n(793574),
    X = n(11029),
    Y = n(653523),
    W = n(471865),
    K = n(332560),
    Z = n(145359),
    q = n(189916),
    Q = n(506988),
    $ = n(287809),
    J = n(973654),
    ee = n(185928),
    et = n(652215),
    en = n(211824),
    ei = n(448600);
let el = (0, i.E2)(l.X.APPEARANCE_DUAL_THEME_SELECTOR, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik), u.intl.string(u.t.NoFvjZ), u.intl.string(u.t["EgvHH/"])],
    Component: function () {
        var e;
        let { analyticsLocations: t } = (0, S.Ay)(z.A.CLIENT_THEMES_THEME_SELECTOR),
            [n, i, l, a, o] = (0, s.yK)([L.A, r.A], () => [
                L.A.themePreferenceForSystemTheme(ee.Fc.LIGHT),
                L.A.themePreferenceForSystemTheme(ee.Fc.DARK),
                L.A.getSyncedClientTheme(ee.Fc.LIGHT)?.backgroundGradientPresetId,
                L.A.getSyncedClientTheme(ee.Fc.DARK)?.backgroundGradientPresetId,
                r.A.isPreview,
            ]),
            c = (0, Z.Lz)(en.vB.CLIENT_THEME, "DualThemeSelector"),
            g = (0, s.bG)([$.default], () => $.default.getCurrentUser()?.premiumType),
            A = (0, q.YY)(en.vB.CLIENT_THEME, g),
            E = (0, q.oB)(a),
            h = c === en.S9.SELECTABLE || (c === en.S9.HIDDEN && E && !A),
            p = h && E,
            [T, x] = m.useState(!1),
            I = m.useRef(!1);
        function _(e, n, i) {
            if (e === ee.Fc.DARK && I.current) return;
            ((0, J.NA)({ [e]: n }), (0, J.qX)(e, null != i ? { backgroundGradientPresetId: i } : { theme: n }));
            let l = null != i ? `${e}-mode-${B.ju[i]}` : `${e}-mode-${n}`;
            ((0, w.X8)({ isPersisted: !0, analyticsLocations: t, themeName: l }), (0, X.cO)(), (0, X.by)());
        }
        let b = o ? [] : k.G$.filter(k.Qm),
            C = o ? [] : k.iA.filter(k.Qm);
        return (0, d.jsxs)("div", {
            className: ei.k,
            children: [
                (0, d.jsxs)(w.Ay, {
                    type: w.v0.SETTINGS,
                    children: [
                        (0, d.jsx)(f.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: u.intl.string(u.t.NoFvjZ),
                        }),
                        (0, d.jsxs)(V.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                (0, d.jsx)(Y.zy, {
                                    theme: et.NJ8.LIGHT,
                                    size: k.ni.SIZE_48,
                                    isSelected: ((e = et.NJ8.LIGHT), (o || null == l) && n === e),
                                    onSelect: () => _(ee.Fc.LIGHT, et.NJ8.LIGHT, void 0),
                                }),
                                b.map((e) =>
                                    (0, d.jsx)(
                                        Y.MX,
                                        {
                                            preset: e,
                                            size: k.ni.SIZE_48,
                                            isSelected: l === e.id,
                                            onSelect: () => _(ee.Fc.LIGHT, e.theme, e.id),
                                            showBadge: !1,
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
                (0, d.jsxs)(w.Ay, {
                    type: w.v0.SETTINGS,
                    children: [
                        (0, d.jsx)(f.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: u.intl.string(u.t["EgvHH/"]),
                        }),
                        (0, d.jsxs)(V.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                k.f5.map((e) =>
                                    (0, d.jsx)(
                                        Y.zy,
                                        {
                                            theme: e,
                                            size: k.ni.SIZE_48,
                                            isSelected: ((o && !p) || null == a || (E && A)) && i === e,
                                            onSelect: () => _(ee.Fc.DARK, e, void 0),
                                        },
                                        e,
                                    ),
                                ),
                                h &&
                                    (0, d.jsx)(Y.MX, {
                                        preset: k.eJ,
                                        size: k.ni.SIZE_48,
                                        isSelected: p,
                                        onSelect: async function () {
                                            if (p || I.current) return;
                                            ((I.current = !0), x(!0));
                                            let e = await (0, W.Br)(en.vB.CLIENT_THEME);
                                            ((I.current = !1), x(!1), e)
                                                ? (_(ee.Fc.DARK, k.eJ.theme, k.eJ.id),
                                                  (0, W.VN)(en.vB.CLIENT_THEME),
                                                  (0, K.Cy)({
                                                      perks: [en.vB.CLIENT_THEME],
                                                      content: Q.uF.CLIENT_THEME_SETTINGS,
                                                      contentSurface: K.rl.THEME_PICKER,
                                                  }))
                                                : (0, H.P0)({ text: u.intl.string(u.t.F8FvUy), variant: "critical" });
                                        },
                                        disabled: T,
                                        showBadge: !1,
                                    }),
                                C.map((e) =>
                                    (0, d.jsx)(
                                        Y.MX,
                                        {
                                            preset: e,
                                            size: k.ni.SIZE_48,
                                            isSelected: a === e.id,
                                            onSelect: () => _(ee.Fc.DARK, e.theme, e.id),
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
var es = n(562860),
    er = n(248797),
    ea = n(701256);
let eo = (0, i.E2)(l.X.APPEARANCE_HEXAGON_CAMPAIGN_CLIENT_THEME, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik), u.intl.string(ea.default.SOxhth)],
    Component: function () {
        return (0, d.jsx)(w.Ay, {
            type: w.v0.SETTINGS,
            children: (0, d.jsx)(es.A, { type: w.v0.SETTINGS, isLocked: !1, tabIndex: 0 }),
        });
    },
    usePredicate: () => (0, er.R)() === en.S9.SELECTABLE,
});
var eu = n(575155);
let ec = (0, i.zD)(l.X.APPEARANCE_SAME_AS_DEVICE_THEME, {
        useTitle: () => u.intl.string(u.t.c445ix),
        useSubtitle: () => u.intl.string(u.t["+tBsvs"]),
        useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
        useValue: function () {
            return (0, s.bG)([L.A], () => L.A.isSameAsDeviceThemeEnabled());
        },
        setValue: function (e) {
            e ? (0, eu.V)() : (0, eu.i)();
        },
    }),
    ed = (0, i.FW)(l.X.APPEARANCE_THEME_FIELDSET, {
        useTitle: () => u.intl.string(u.t.Ksh3ik),
        isTitleHiddenVisually: !0,
        buildLayout: () => [ec, el, F, U, j, eo, c],
    });
