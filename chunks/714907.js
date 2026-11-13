n.d(t, { k: () => ec });
var i = n(419954),
    l = n(780964),
    s = n(855986),
    r = n(47671),
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
var c = n(477900),
    g = n(582128),
    m = n(503698),
    A = n.n(m),
    E = n(613412),
    h = n(821609),
    S = n(534514),
    T = n(834730),
    f = n(688810),
    p = n(139286),
    x = n(793943),
    I = n(996254),
    _ = n(830543),
    N = n(738419),
    b = n(958904),
    C = n(325600),
    y = n(114149);
function v(e) {
    let { className: t } = e,
        { analyticsLocations: n } = (0, f.Ay)();
    (0, p.A)({
        name: E.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: E.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let i = (0, I.X)({ "en-US": b.default["f/cLEi"], "en-GB": b.default["f/cLEi"] }, b.default.CARxAC);
    return (0, c.jsxs)("div", {
        className: A()(C.kL, t),
        children: [
            (0, c.jsx)("div", { className: C.zc, children: (0, c.jsx)("img", { src: y.A, className: C._e, alt: "" }) }),
            (0, c.jsxs)("div", {
                className: C.P_,
                children: [
                    (0, c.jsx)(S.D, { variant: "heading-lg/semibold", color: "text-strong", children: i }),
                    (0, c.jsx)(T.E, { variant: "body-sm/normal", children: u.intl.string(b.default.nla4RG) }),
                ],
            }),
            (0, c.jsx)("div", {
                className: C.UD,
                children: (0, c.jsx)(h.$, {
                    variant: "primary",
                    text: u.intl.string(u.t.uw9zI7),
                    onClick: function () {
                        ((0, N.b0)(N.G8.APPEARANCE_SETTINGS),
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
        return (0, c.jsx)(v, { className: C.YH });
    },
    usePredicate: () => {
        let e = (0, a.V)(),
            t = (0, s.bG)([r.A], () => r.A.isPreview);
        return !e || t;
    },
});
var O = n(366010),
    D = n(775602),
    R = n(875317),
    L = n(97469),
    P = n(413599),
    G = n(253932),
    M = n(818348);
let U = (0, i.zD)(l.X.APPEARANCE_DARK_SIDEBAR, {
    useTitle: () => u.intl.string(u.t.EpSHAQ),
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    useValue: function () {
        let e = (0, L.qo)();
        return (0, s.bG)([P.A, D.Ay], () => {
            let t = P.A.theme,
                n = D.Ay.useForcedColors;
            return e && (0, O.q)(t) && !n;
        });
    },
    usePredicate: function () {
        let e = null != G.eh.useSetting().customUserThemeSettings,
            t = null != (0, R.Q)(),
            n = (0, a.V)();
        return (0, s.bG)([P.A, r.A], () => {
            let i = P.A.theme,
                l = r.A.gradientPreset;
            return !n && (0, O.q)(i) && null == l && !e && !t;
        });
    },
    useDisabled: function () {
        return (0, s.bG)([P.A, D.Ay], () => {
            let e = P.A.theme,
                t = D.Ay.useForcedColors;
            return e !== M.NJ.LIGHT || t;
        });
    },
    setValue: (e) => G.l$.updateSetting(e),
});
var V = n(331322),
    k = n(270746),
    w = n(385803);
let F = (0, i.E2)(l.X.APPEARANCE_DEFAULT_THEMES, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
    Component: function () {
        return (0, c.jsxs)(k.Ay, {
            type: k.v0.SETTINGS,
            children: [
                (0, c.jsx)(S.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    children: u.intl.string(u.t["0EzVst"]),
                }),
                (0, c.jsx)(V.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, c.jsx)(k.t6, { size: w.ni.SIZE_48 }),
                }),
            ],
        });
    },
    usePredicate: () => !(0, a.V)(),
});
var B = n(873298),
    X = n(858899),
    z = n(793574),
    H = n(11029),
    Y = n(653523),
    W = n(471865),
    K = n(332560),
    Z = n(145359),
    q = n(773527),
    Q = n(506988),
    J = n(287809),
    $ = n(973654),
    ee = n(185928),
    et = n(652215),
    en = n(211824),
    ei = n(448600);
let el = (0, i.E2)(l.X.APPEARANCE_DUAL_THEME_SELECTOR, {
    useSearchTerms: () => [u.intl.string(u.t.Ksh3ik), u.intl.string(u.t.NoFvjZ), u.intl.string(u.t["EgvHH/"])],
    Component: function () {
        var e;
        let { analyticsLocations: t } = (0, f.Ay)(z.A.CLIENT_THEMES_THEME_SELECTOR),
            [n, i, l, a, o] = (0, s.yK)([P.A, r.A], () => [
                P.A.themePreferenceForSystemTheme(ee.Fc.LIGHT),
                P.A.themePreferenceForSystemTheme(ee.Fc.DARK),
                P.A.getSyncedClientTheme(ee.Fc.LIGHT)?.backgroundGradientPresetId,
                P.A.getSyncedClientTheme(ee.Fc.DARK)?.backgroundGradientPresetId,
                r.A.isPreview,
            ]),
            d = (0, Z.Lz)(en.vB.CLIENT_THEME, "DualThemeSelector"),
            m = (0, s.bG)([J.default], () => J.default.getCurrentUser()?.premiumType),
            A = (0, q.YY)(en.vB.CLIENT_THEME, m),
            E = (0, q.oB)(a),
            h = d === en.S9.SELECTABLE || (d === en.S9.HIDDEN && E && !A),
            T = h && E,
            [p, x] = g.useState(!1),
            I = g.useRef(!1);
        function _(e, n, i) {
            if (e === ee.Fc.DARK && I.current) return;
            ((0, $.NA)({ [e]: n }), (0, $.qX)(e, null != i ? { backgroundGradientPresetId: i } : { theme: n }));
            let l = null != i ? `${e}-mode-${B.ju[i]}` : `${e}-mode-${n}`;
            ((0, k.X8)({ isPersisted: !0, analyticsLocations: t, themeName: l }), (0, H.cO)(), (0, H.by)());
        }
        let N = o ? [] : w.G$.filter(w.Qm),
            b = o ? [] : w.iA.filter(w.Qm);
        return (0, c.jsxs)("div", {
            className: ei.k,
            children: [
                (0, c.jsxs)(k.Ay, {
                    type: k.v0.SETTINGS,
                    children: [
                        (0, c.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: u.intl.string(u.t.NoFvjZ),
                        }),
                        (0, c.jsxs)(V.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                (0, c.jsx)(Y.zy, {
                                    theme: et.NJ8.LIGHT,
                                    size: w.ni.SIZE_48,
                                    isSelected: ((e = et.NJ8.LIGHT), (o || null == l) && n === e),
                                    onSelect: () => _(ee.Fc.LIGHT, et.NJ8.LIGHT, void 0),
                                }),
                                N.map((e) =>
                                    (0, c.jsx)(
                                        Y.MX,
                                        {
                                            preset: e,
                                            size: w.ni.SIZE_48,
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
                (0, c.jsxs)(k.Ay, {
                    type: k.v0.SETTINGS,
                    children: [
                        (0, c.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: u.intl.string(u.t["EgvHH/"]),
                        }),
                        (0, c.jsxs)(V.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                w.f5.map((e) =>
                                    (0, c.jsx)(
                                        Y.zy,
                                        {
                                            theme: e,
                                            size: w.ni.SIZE_48,
                                            isSelected: ((o && !T) || null == a || (E && A)) && i === e,
                                            onSelect: () => _(ee.Fc.DARK, e, void 0),
                                        },
                                        e,
                                    ),
                                ),
                                h &&
                                    (0, c.jsx)(Y.MX, {
                                        preset: w.eJ,
                                        size: w.ni.SIZE_48,
                                        isSelected: T,
                                        onSelect: async function () {
                                            if (T || I.current) return;
                                            ((I.current = !0), x(!0));
                                            let e = await (0, W.Br)(en.vB.CLIENT_THEME);
                                            ((I.current = !1), x(!1), e)
                                                ? (_(ee.Fc.DARK, w.eJ.theme, w.eJ.id),
                                                  (0, W.VN)(en.vB.CLIENT_THEME),
                                                  (0, K.Cy)({
                                                      perks: [en.vB.CLIENT_THEME],
                                                      content: Q.uF.CLIENT_THEME_SETTINGS,
                                                      contentSurface: K.rl.THEME_PICKER,
                                                  }))
                                                : (0, X.P0)({ text: u.intl.string(u.t.F8FvUy), variant: "critical" });
                                        },
                                        disabled: p,
                                        showBadge: !1,
                                    }),
                                b.map((e) =>
                                    (0, c.jsx)(
                                        Y.MX,
                                        {
                                            preset: e,
                                            size: w.ni.SIZE_48,
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
        return (0, c.jsx)(k.Ay, {
            type: k.v0.SETTINGS,
            children: (0, c.jsx)(es.A, { type: k.v0.SETTINGS, isLocked: !1, tabIndex: 0 }),
        });
    },
    usePredicate: () => (0, er.R)() === en.S9.SELECTABLE,
});
var eu = n(575155);
let ed = (0, i.zD)(l.X.APPEARANCE_SAME_AS_DEVICE_THEME, {
        useTitle: () => u.intl.string(u.t.c445ix),
        useSubtitle: () => u.intl.string(u.t["+tBsvs"]),
        useSearchTerms: () => [u.intl.string(u.t.Ksh3ik)],
        useValue: function () {
            return (0, s.bG)([P.A], () => P.A.isSameAsDeviceThemeEnabled());
        },
        setValue: function (e) {
            e ? (0, eu.V)() : (0, eu.i)();
        },
    }),
    ec = (0, i.FW)(l.X.APPEARANCE_THEME_FIELDSET, {
        useTitle: () => u.intl.string(u.t.Ksh3ik),
        isTitleHiddenVisually: !0,
        buildLayout: () => [ed, el, F, U, j, eo, d],
    });
