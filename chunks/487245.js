"use strict";
n.d(t, { t6: () => e_, Zg: () => eu, ew: () => ec, v0: () => er, Ay: () => eA, X8: () => el }), n(801541);
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(889137),
    d = n(17928),
    c = n(873298),
    u = n(785007),
    _ = n(297264),
    E = n(604121),
    A = n(140735),
    h = n(331322),
    I = n(817281),
    f = n(775602),
    p = n(793574),
    T = n(688810),
    m = n(793943),
    g = n(915089),
    S = n(87719),
    N = n(732280),
    C = n(811611),
    R = n(450232),
    O = n(973654),
    L = n(363195),
    y = n(742023),
    D = n(885386),
    v = n(830543),
    b = n(174459),
    M = n(823459),
    P = n(147248),
    U = n(650809),
    w = n(554146),
    G = n(661531),
    x = n(366010),
    k = n(812993),
    F = n(736653),
    V = n(826673),
    B = n(74396),
    H = n(653523),
    j = n(558845),
    W = n(367727),
    Y = n(49999),
    K = n(693227),
    $ = n(375708),
    z = n(804203);
function Z() {
    return (0, r.jsxs)("svg", {
        className: z.JR,
        width: "68",
        height: "68",
        viewBox: "0 0 68 68",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, r.jsx)("rect", {
                x: "4",
                y: "4",
                width: "60",
                height: "60",
                rx: "8",
                stroke: "url(#paint0_linear_1368_16544)",
                strokeWidth: "2",
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_1368_16544",
                    x1: "33.875",
                    y1: "2",
                    x2: "33.875",
                    y2: "65.75",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                        (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                    ],
                }),
            }),
        ],
    });
}
function q(e) {
    let t,
        { isDisabled: n, onSelect: i, size: s, ariaDescribedBy: o } = e,
        c = D.eh.useSetting().customUserThemeSettings,
        { shouldShowNewBadge: u, markNewBadgeAsDismissed: _ } =
            ((t = (0, V.HX)(w.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE)),
            a.useEffect(() => {
                if (!t)
                    return (
                        (0, W.Vh)(w.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                        () => {
                            (0, j.pd)({ content: w.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                        }
                    );
            }, [t]),
            {
                shouldShowNewBadge: !t,
                markNewBadgeAsDismissed: a.useCallback(() => {
                    (0, V.Dr)(w.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: Y.i.TAKE_ACTION });
                }, []),
            }),
        E = (0, V.HX)(w.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        A = (0, F.Ay)(),
        h = (0, x.M)(A) ? z.Xu : z.VO,
        I = null != c && null != c.colors && c.colors.length > 0,
        f = (0, d.bG)([B.A], () => B.A.getSavedCustomTheme()),
        p = I || null != f,
        T = a.useMemo(() => {
            let e, t;
            if (I) (e = c.colors), (t = c.gradientAngle);
            else {
                if (null === f) return;
                (e = f.colors), (t = f.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [I, c, f]),
        m = p ? G.A.unsafe_rawColors.WHITE.css : void 0,
        g = a.useCallback(() => {
            u && _(), i?.();
        }, [u, _, i]);
    return (0, r.jsxs)("div", {
        className: z.fC,
        children: [
            (0, r.jsxs)(H.S4, {
                onSelect: n ? void 0 : g,
                isSelected: !1,
                showSelectionCircle: I,
                size: s,
                name: $.intl.string(K.default.KSBBpC),
                className: l()(z.kL, p && h, n && z.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: T,
                ariaDescribedBy: o,
                children: [
                    !E && !p && (0, r.jsx)(Z, {}),
                    (0, r.jsx)("div", { className: z.JU }),
                    (0, r.jsx)(U.PaintPaletteIcon, { color: m, className: z.vL }),
                ],
            }),
            u &&
                (0, r.jsx)(k.Lp, {
                    className: z.Ad,
                    text: $.intl.string($.t.y2b7CA),
                    color: G.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
var X = n(385803),
    Q = n(652215),
    J = n(202541),
    ee = n(185928),
    et = n(355097),
    en = n(818348),
    ei = n(621885),
    er = (((i = {}).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS"), i);
let ea = Object.freeze({ EDITOR: et.Sb.SLOW_USER_ACTION, SETTINGS: et.Sb.INFREQUENT_USER_ACTION }),
    es = a.createContext({});
function el(e) {
    let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
    b.default.track(Q.HAw.CLIENT_THEME_UPDATED, {
        feature_name: J.Ae.CLIENT_THEME,
        theme_name: n,
        is_persisted: t,
        location_stack: i,
    });
}
function eo(e) {
    let {
            type: t,
            isPreview: n,
            isCoachmark: i,
            textClassName: a,
            iconClassName: s,
            textVariant: d = "text-md/medium",
        } = e,
        c = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => $.intl.string($.t.D29k16))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => $.intl.string($.t["8+vbqd"]))
            .otherwise(() => $.intl.string($.t.hjV0fZ));
    return (0, r.jsxs)("div", {
        className: ei.DD,
        children: [
            (0, r.jsx)(_.D, { "aria-label": c, className: l()(ei.Qw, a), variant: d, children: c }),
            (0, r.jsx)(R.A, { className: l()(ei.PC, s), size: "xs" }),
        ],
    });
}
function ed(e) {
    let { type: t, isPreview: n, isCoachmark: i } = e;
    if ((0, N.V)()?.subscriptionTrial?.skuId === J.pe.TIER_2 && n) return null;
    let a = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
        .with({ type: "EDITOR", isPreview: !0 }, () => $.intl.format($.t.G8yQXi, { onPremiumClick: S.e }))
        .with({ type: "EDITOR", isCoachmark: !0 }, () => $.intl.string($.t.jmZiNu))
        .with({ type: "EDITOR", isPreview: !1 }, () => $.intl.string($.t.dqDFwe))
        .with({ isPreview: !0 }, () => $.intl.format($.t["DWIjJ/"], { onPremiumClick: S.e }))
        .otherwise(() => $.intl.string($.t["np0X/u"]));
    return (0, r.jsx)(_.D, { variant: "text-sm/normal", className: ei.W$, children: a });
}
function ec(e) {
    let {
            renderCTAButtons: t,
            isCoachmark: n,
            titleTextVariant: i,
            headingClassName: s,
            titleClassName: o,
            titleIconClassName: c,
        } = e,
        { type: u } = a.useContext(es),
        [_] = (0, d.yK)([P.A], () => [P.A.isPreview]),
        E = (0, N.V)()?.subscriptionTrial?.skuId === J.pe.TIER_2;
    return "EDITOR" === u && _ && E
        ? (0, r.jsx)(C.Ay, {
              type: J.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
              subscriptionTier: J.pe.TIER_2,
              children: $.intl.format($.t.G8yQXi, { onPremiumClick: S.e }),
          })
        : (0, r.jsxs)("div", {
              className: ei.wx,
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(ei.so, s),
                      children: [
                          (0, r.jsx)(eo, {
                              type: u,
                              isPreview: _,
                              isCoachmark: n,
                              textVariant: i,
                              textClassName: o,
                              iconClassName: c,
                          }),
                          (0, r.jsx)(ed, { type: u, isPreview: _, isCoachmark: n }),
                      ],
                  }),
                  t?.(),
              ],
          });
}
function eu(e) {
    let { disabled: t, size: i } = e,
        { type: s, delay: l } = a.useContext(es),
        { analyticsLocations: o } = (0, T.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
        [u, _] = (0, d.yK)([P.A], () => [P.A.isPreview, P.A.gradientPreset?.id]),
        [h, S] = a.useState(!1),
        [N, C] = a.useState(-1),
        R = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        L = "SETTINGS" === s,
        y = (0, g.GV)(),
        D = L && u ? y : void 0,
        b = L ? y : void 0;
    function U(e, t) {
        var n;
        if (
            ((0, M.bc)(e.id),
            el({ isPersisted: !u, analyticsLocations: o, themeName: c.ju[e.id] }),
            u && "SETTINGS" === s
                ? ((n = e), (0, O.GQ)(n.theme), (0, m.nf)(m.HP.CLIENT_THEMES), (0, v.default)())
                : u
                  ? (0, O.GQ)(e.theme)
                  : (0, I.u_)({ backgroundGradientPresetId: e.id, theme: e.theme }, l),
            null != t)
        ) {
            if ((h && S(!1), t <= N || 0 === t)) return void C(0);
            C((e) => e + 1);
        }
    }
    return (
        a.useEffect(() => {
            ((N === X.Jm.length - 2 && "EDITOR" === s) || _ === c.ju.EASTER_EGG) && S(!0);
        }, [N, s, _]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                L && (0, r.jsx)(A.A, { id: y, children: $.intl.string($.t.JIZSqz) }),
                (0, r.jsx)(q, {
                    size: i,
                    isDisabled: t,
                    ariaDescribedBy: b,
                    onSelect: () => {
                        (0, m.nf)(m.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === s ? m.xv.SETTING : m.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === s && (0, v.default)();
                    },
                }),
                X.Jm.filter(X.Qm).map((e, n) =>
                    (0, r.jsx)(
                        H.MX,
                        {
                            size: i,
                            preset: e,
                            isSelected: _ === e.id,
                            onSelect: () => U(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                            ariaDescribedBy: D,
                        },
                        e.id,
                    ),
                ),
                (function () {
                    if (!h) return null;
                    let e = X.ag[c.ju.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let { default: e } = await n.e("103408").then(n.t.bind(n, 707827, 19));
                        return e;
                    }
                    return (0, r.jsxs)("div", {
                        className: ei.kG,
                        children: [
                            (0, r.jsx)(H.MX, {
                                size: i,
                                preset: e,
                                isSelected: _ === c.ju.EASTER_EGG,
                                onSelect: () => U(e),
                                ariaDescribedBy: D,
                            }),
                            (0, r.jsx)(E.a, { importData: t, shouldAnimate: !R, className: ei._7 }),
                        ],
                    });
                })(),
            ],
        })
    );
}
function e_(e) {
    let { size: t, systemSelectorFirst: n, hideSystemSelector: i = !1 } = e,
        { delay: s } = a.useContext(es),
        { analyticsLocations: l } = (0, T.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
        [o, c, u] = (0, d.yK)([L.A, y.Ay, P.A], () => [
            L.A.theme,
            null == P.A.gradientPreset && null == D.eh.getSetting().customUserThemeSettings,
            y.Ay.useSystemTheme === ee.Q_.ON,
        ]);
    function _(e) {
        (0, M.Py)(),
            el({ isPersisted: !0, analyticsLocations: l, themeName: `default ${e}` }),
            (0, I.u_)({ theme: e }, s);
    }
    let E = !i && !0 === n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            E &&
                (0, r.jsx)(H.zy, {
                    size: t,
                    theme: "system",
                    isSelected: c && u,
                    onSelect: () => _("system"),
                    tabIndex: 0,
                }),
            (0, r.jsx)(H.zy, {
                size: t,
                theme: en.NJ.LIGHT,
                isSelected: c && !u && o === en.NJ.LIGHT,
                onSelect: () => _(en.NJ.LIGHT),
                tabIndex: E ? void 0 : 0,
            }),
            X.f5.map((e) =>
                (0, r.jsx)(H.zy, { size: t, theme: e, isSelected: c && !u && o === e, onSelect: () => _(e) }, e),
            ),
            !i && !n && (0, r.jsx)(H.zy, { size: t, theme: "system", isSelected: c && u, onSelect: () => _("system") }),
        ],
    });
}
function eE(e) {
    let { type: t, children: n } = e,
        i = (0, g.GV)(),
        { ref: s, ...l } = (0, u._u)({ orientation: "horizontal", labelledBy: i }),
        o = a.useMemo(() => ({ type: t, delay: ea[t] }), [t]);
    return (0, r.jsx)(es.Provider, {
        value: o,
        children: (0, r.jsx)("div", { ref: s, ...l, className: ei.__invalid_container, children: n }),
    });
}
(eE.Basic = function (e) {
    let { className: t, hideSystemSelector: n, iconSize: i } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(h.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(e_, { hideSystemSelector: n, size: i }),
        }),
    });
}),
    (eE.Gradient = function (e) {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a, iconSize: s } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(ec, { renderCTAButtons: n, isCoachmark: a }),
                (0, r.jsx)(h.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(eu, { disabled: i, size: s }),
                }),
            ],
        });
    }),
    (eE.BasicAndGradient = function (e) {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a, iconSize: s } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(ec, { renderCTAButtons: i, isCoachmark: a }),
                t &&
                    a &&
                    (0, r.jsx)(_.D, {
                        className: ei.tD,
                        variant: "heading-sm/semibold",
                        children: $.intl.string($.t.POSLGY),
                    }),
                (0, r.jsxs)(h.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, r.jsx)(e_, { systemSelectorFirst: !0, size: s }),
                        (0, r.jsx)(eu, { disabled: !1, size: s }),
                    ],
                }),
            ],
        });
    });
let eA = eE;
