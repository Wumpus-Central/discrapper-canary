"use strict";
n.d(t, { t6: () => ed, Zg: () => ec, ew: () => eu, v0: () => ei, Ay: () => ef, X8: () => ea }), n(801541);
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(889137),
    u = n(17928),
    c = n(873298),
    d = n(785007),
    _ = n(534514),
    f = n(604121),
    h = n(331322),
    p = n(817281),
    E = n(775602),
    m = n(793574),
    g = n(688810),
    A = n(793943),
    I = n(915089),
    T = n(87719),
    S = n(234419),
    N = n(811611),
    y = n(450232),
    C = n(363195),
    v = n(742023),
    O = n(885386),
    R = n(830543),
    b = n(174459),
    D = n(823459),
    L = n(47671),
    w = n(650809),
    M = n(554146),
    P = n(661531),
    x = n(366010),
    U = n(777666),
    k = n(736653),
    G = n(826673),
    F = n(617617),
    V = n(74396),
    B = n(653523),
    H = n(558845),
    j = n(367727),
    Y = n(49999),
    W = n(693227),
    K = n(375708),
    z = n(645603);
function $() {
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
        { isDisabled: n, onSelect: i, size: a } = e,
        l = (0, u.bG)([F.A], () => F.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        { shouldShowNewBadge: c, markNewBadgeAsDismissed: d } =
            ((t = (0, G.JZ)(M.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE)),
            s.useEffect(() => {
                if (!t)
                    return (
                        (0, j.Vh)(M.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                        () => {
                            (0, H.pd)({ content: M.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                        }
                    );
            }, [t]),
            {
                shouldShowNewBadge: !t,
                markNewBadgeAsDismissed: s.useCallback(() => {
                    (0, G.Dr)(M.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: Y.i.TAKE_ACTION });
                }, []),
            }),
        _ = (0, G.JZ)(M.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        f = (0, k.Ay)(),
        h = (0, x.M)(f) ? z.Xu : z.VO,
        p = null != l && null != l.colors && l.colors.length > 0,
        E = (0, u.bG)([V.A], () => V.A.getSavedCustomTheme()),
        m = p || null != E,
        g = s.useMemo(() => {
            let e, t;
            if (p) (e = l.colors), (t = l.gradientAngle);
            else {
                if (null === E) return;
                (e = E.colors), (t = E.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [p, l, E]),
        A = m ? P.A.unsafe_rawColors.WHITE.css : void 0,
        I = s.useCallback(() => {
            c && d(), i?.();
        }, [c, d, i]);
    return (0, r.jsxs)("div", {
        className: z.fC,
        children: [
            (0, r.jsxs)(B.S4, {
                onSelect: n ? void 0 : I,
                isSelected: !1,
                showSelectionCircle: p,
                size: a,
                name: K.intl.string(W.default.KSBBpC),
                className: o()(z.kL, m && h, n && z.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: g,
                children: [
                    !_ && !m && (0, r.jsx)($, {}),
                    (0, r.jsx)("div", { className: z.JU }),
                    (0, r.jsx)(w.B, { color: A, className: z.vL }),
                ],
            }),
            c &&
                (0, r.jsx)(U.Lp, {
                    className: z.Ad,
                    text: K.intl.string(K.t.y2b7CA),
                    color: P.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
var Z = n(385803),
    X = n(652215),
    Q = n(788868),
    J = n(185928),
    ee = n(355097),
    et = n(818348),
    en = n(702709),
    ei = (((i = {}).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS"), i);
let er = Object.freeze({ EDITOR: ee.Sb.SLOW_USER_ACTION, SETTINGS: ee.Sb.INFREQUENT_USER_ACTION }),
    es = s.createContext({}),
    ea = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
        b.default.track(X.HAw.CLIENT_THEME_UPDATED, {
            feature_name: Q.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: i,
        });
    },
    eo = (e) => {
        let {
                type: t,
                isPreview: n,
                isCoachmark: i,
                textClassName: s,
                iconClassName: a,
                textVariant: u = "text-md/medium",
            } = e,
            c = (0, l.YW)({ type: t, isPreview: n, isCoachmark: i })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => K.intl.string(K.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => K.intl.string(K.t["8+vbqd"]))
                .otherwise(() => K.intl.string(K.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: en.DD,
            children: [
                (0, r.jsx)(_.D, { "aria-label": c, className: o()(en.Qw, s), variant: u, children: c }),
                (0, r.jsx)(y.A, { className: o()(en.PC, a), size: "xs" }),
            ],
        });
    },
    el = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e;
        if ((0, S.V)()?.subscription_trial?.sku_id === Q.pe.TIER_2 && n) return null;
        let s = (0, l.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isPreview: !0 }, () => K.intl.format(K.t.G8yQXi, { onPremiumClick: T.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => K.intl.string(K.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => K.intl.string(K.t.dqDFwe))
            .with({ isPreview: !0 }, () => K.intl.format(K.t["DWIjJ/"], { onPremiumClick: T.e }))
            .otherwise(() => K.intl.string(K.t["np0X/u"]));
        return (0, r.jsx)(_.D, { variant: "text-sm/normal", className: en.W$, children: s });
    },
    eu = (e) => {
        let {
                renderCTAButtons: t,
                isCoachmark: n,
                titleTextVariant: i,
                headingClassName: a,
                titleClassName: l,
                titleIconClassName: c,
            } = e,
            { type: d } = s.useContext(es),
            [_] = (0, u.yK)([L.A], () => [L.A.isPreview]),
            f = (0, S.V)()?.subscription_trial?.sku_id === Q.pe.TIER_2;
        return "EDITOR" === d && _ && f
            ? (0, r.jsx)(N.Ay, {
                  type: Q.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: Q.pe.TIER_2,
                  children: K.intl.format(K.t.G8yQXi, { onPremiumClick: T.e }),
              })
            : (0, r.jsxs)("div", {
                  className: en.wx,
                  children: [
                      (0, r.jsxs)("div", {
                          className: o()(en.so, a),
                          children: [
                              (0, r.jsx)(eo, {
                                  type: d,
                                  isPreview: _,
                                  isCoachmark: n,
                                  textVariant: i,
                                  textClassName: l,
                                  iconClassName: c,
                              }),
                              (0, r.jsx)(el, { type: d, isPreview: _, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    ec = (e) => {
        let { disabled: t, size: i } = e,
            { type: a, delay: o } = s.useContext(es),
            { analyticsLocations: l } = (0, g.Ay)(m.A.CLIENT_THEMES_THEME_SELECTOR),
            [d, _] = (0, u.yK)([L.A], () => [L.A.isPreview, L.A.gradientPreset?.id]),
            [h, I] = s.useState(!1),
            [T, S] = s.useState(-1),
            N = (0, u.bG)([E.A], () => E.A.useReducedMotion);
        s.useEffect(() => {
            ((T === Z.Jm.length - 2 && "EDITOR" === a) || _ === c.ju.EASTER_EGG) && I(!0);
        }, [T, a, _]);
        let y = (e, t) => {
                if (
                    ((0, D.bc)(e.id),
                    ea({ isPersisted: !d, analyticsLocations: l, themeName: c.ju[e.id] }),
                    d && "SETTINGS" === a
                        ? C(e)
                        : (0, p.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: d ? J.Q_.OFF : void 0,
                              },
                              o,
                          ),
                    null != t)
                ) {
                    if ((h && I(!1), t <= T || 0 === t)) return void S(0);
                    S((e) => e + 1);
                }
            },
            C = async (e) => {
                await (0, p.u_)(
                    { backgroundGradientPresetId: e.id, theme: e.theme, useSystemTheme: d ? J.Q_.OFF : void 0 },
                    ee.Sb.SLOW_USER_ACTION,
                ),
                    (0, A.nf)(A.HP.CLIENT_THEMES),
                    (0, R.default)();
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(q, {
                    size: i,
                    isDisabled: t,
                    onSelect: () => {
                        (0, A.nf)(A.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? A.xv.SETTING : A.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, R.default)();
                    },
                }),
                Z.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== c.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        B.MX,
                        {
                            size: i,
                            preset: e,
                            isSelected: _ === e.id,
                            onSelect: () => y(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                        },
                        e.id,
                    ),
                ),
                (() => {
                    if (!h) return null;
                    let e = Z.ag[c.ju.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                        return e;
                    }
                    return (0, r.jsxs)("div", {
                        className: en.kG,
                        children: [
                            (0, r.jsx)(B.MX, {
                                size: i,
                                preset: e,
                                isSelected: _ === c.ju.EASTER_EGG,
                                onSelect: () => y(e),
                            }),
                            (0, r.jsx)(f.a, { importData: t, shouldAnimate: !N, className: en._7 }),
                        ],
                    });
                })(),
            ],
        });
    },
    ed = (e) => {
        let { size: t, systemSelectorFirst: n, hideSystemSelector: i = !1 } = e,
            { delay: a } = s.useContext(es),
            { analyticsLocations: o } = (0, g.Ay)(m.A.CLIENT_THEMES_THEME_SELECTOR),
            [l, c, d] = (0, u.yK)([C.A, v.Ay, L.A], () => [
                C.A.theme,
                null == L.A.gradientPreset && null == O.eh.getSetting().customUserThemeSettings,
                v.Ay.useSystemTheme === J.Q_.ON,
            ]),
            _ = (e) => {
                (0, D.Py)(),
                    ea({ isPersisted: !0, analyticsLocations: o, themeName: `default ${e}` }),
                    (0, p.u_)({ theme: e }, a);
            },
            f = !i && !0 === n;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f &&
                    (0, r.jsx)(B.zy, {
                        size: t,
                        theme: "system",
                        isSelected: c && d,
                        onSelect: () => _("system"),
                        tabIndex: 0,
                    }),
                (0, r.jsx)(B.zy, {
                    size: t,
                    theme: et.NJ.LIGHT,
                    isSelected: c && !d && l === et.NJ.LIGHT,
                    onSelect: () => _(et.NJ.LIGHT),
                    tabIndex: f ? void 0 : 0,
                }),
                (0, r.jsx)(B.zy, {
                    size: t,
                    theme: et.NJ.DARK,
                    isSelected: c && !d && l === et.NJ.DARK,
                    onSelect: () => _(et.NJ.DARK),
                }),
                (0, r.jsx)(B.zy, {
                    size: t,
                    theme: et.NJ.DARKER,
                    isSelected: c && !d && l === et.NJ.DARKER,
                    onSelect: () => _(et.NJ.DARKER),
                }),
                (0, r.jsx)(B.zy, {
                    size: t,
                    theme: et.NJ.MIDNIGHT,
                    isSelected: c && !d && l === et.NJ.MIDNIGHT,
                    onSelect: () => _(et.NJ.MIDNIGHT),
                }),
                !i &&
                    !n &&
                    (0, r.jsx)(B.zy, { size: t, theme: "system", isSelected: c && d, onSelect: () => _("system") }),
            ],
        });
    },
    e_ = (e) => {
        let { type: t, children: n } = e,
            i = (0, I.GV)(),
            { ref: a, ...o } = (0, d._u)({ orientation: "horizontal", labelledBy: i }),
            l = s.useMemo(() => ({ type: t, delay: er[t] }), [t]);
        return (0, r.jsx)(es.Provider, {
            value: l,
            children: (0, r.jsx)("div", { ref: a, ...o, className: en.__invalid_container, children: n }),
        });
    };
(e_.Basic = (e) => {
    let { className: t, hideSystemSelector: n, iconSize: i } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(h.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(ed, { hideSystemSelector: n, size: i }),
        }),
    });
}),
    (e_.Gradient = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: s, iconSize: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(eu, { renderCTAButtons: n, isCoachmark: s }),
                (0, r.jsx)(h.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(ec, { disabled: i, size: a }),
                }),
            ],
        });
    }),
    (e_.BasicAndGradient = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: s, iconSize: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(eu, { renderCTAButtons: i, isCoachmark: s }),
                t &&
                    s &&
                    (0, r.jsx)(_.D, {
                        className: en.tD,
                        variant: "heading-sm/semibold",
                        children: K.intl.string(K.t.POSLGY),
                    }),
                (0, r.jsxs)(h.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, r.jsx)(ed, { systemSelectorFirst: !0, size: a }),
                        (0, r.jsx)(ec, { disabled: !1, size: a }),
                    ],
                }),
            ],
        });
    });
let ef = e_;
