"use strict";
n.d(t, { t6: () => e_, Zg: () => ed, ew: () => ec, v0: () => er, Ay: () => eh, X8: () => eo }), n(801541);
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
    h = n(140735),
    p = n(331322),
    E = n(817281),
    m = n(775602),
    g = n(793574),
    A = n(688810),
    I = n(793943),
    T = n(915089),
    S = n(87719),
    N = n(234419),
    y = n(811611),
    C = n(450232),
    v = n(363195),
    O = n(742023),
    R = n(885386),
    b = n(830543),
    D = n(174459),
    L = n(823459),
    w = n(47671),
    M = n(650809),
    P = n(554146),
    x = n(661531),
    U = n(366010),
    k = n(777666),
    G = n(736653),
    F = n(826673),
    V = n(617617),
    B = n(74396),
    H = n(653523),
    j = n(558845),
    Y = n(367727),
    W = n(49999),
    K = n(693227),
    z = n(375708),
    $ = n(645603);
function q() {
    return (0, r.jsxs)("svg", {
        className: $.JR,
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
function Z(e) {
    let t,
        { isDisabled: n, onSelect: i, size: a, ariaDescribedBy: l } = e,
        c = (0, u.bG)([V.A], () => V.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        { shouldShowNewBadge: d, markNewBadgeAsDismissed: _ } =
            ((t = (0, F.JZ)(P.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE)),
            s.useEffect(() => {
                if (!t)
                    return (
                        (0, Y.Vh)(P.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                        () => {
                            (0, j.pd)({ content: P.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                        }
                    );
            }, [t]),
            {
                shouldShowNewBadge: !t,
                markNewBadgeAsDismissed: s.useCallback(() => {
                    (0, F.Dr)(P.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: W.i.TAKE_ACTION });
                }, []),
            }),
        f = (0, F.JZ)(P.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        h = (0, G.Ay)(),
        p = (0, U.M)(h) ? $.Xu : $.VO,
        E = null != c && null != c.colors && c.colors.length > 0,
        m = (0, u.bG)([B.A], () => B.A.getSavedCustomTheme()),
        g = E || null != m,
        A = s.useMemo(() => {
            let e, t;
            if (E) (e = c.colors), (t = c.gradientAngle);
            else {
                if (null === m) return;
                (e = m.colors), (t = m.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [E, c, m]),
        I = g ? x.A.unsafe_rawColors.WHITE.css : void 0,
        T = s.useCallback(() => {
            d && _(), i?.();
        }, [d, _, i]);
    return (0, r.jsxs)("div", {
        className: $.fC,
        children: [
            (0, r.jsxs)(H.S4, {
                onSelect: n ? void 0 : T,
                isSelected: !1,
                showSelectionCircle: E,
                size: a,
                name: z.intl.string(K.default.KSBBpC),
                className: o()($.kL, g && p, n && $.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: A,
                ariaDescribedBy: l,
                children: [
                    !f && !g && (0, r.jsx)(q, {}),
                    (0, r.jsx)("div", { className: $.JU }),
                    (0, r.jsx)(M.B, { color: I, className: $.vL }),
                ],
            }),
            d &&
                (0, r.jsx)(k.Lp, {
                    className: $.Ad,
                    text: z.intl.string(z.t.y2b7CA),
                    color: x.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
var X = n(385803),
    Q = n(652215),
    J = n(788868),
    ee = n(185928),
    et = n(355097),
    en = n(818348),
    ei = n(702709),
    er = (((i = {}).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS"), i);
let es = Object.freeze({ EDITOR: et.Sb.SLOW_USER_ACTION, SETTINGS: et.Sb.INFREQUENT_USER_ACTION }),
    ea = s.createContext({}),
    eo = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
        D.default.track(Q.HAw.CLIENT_THEME_UPDATED, {
            feature_name: J.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: i,
        });
    },
    el = (e) => {
        let {
                type: t,
                isPreview: n,
                isCoachmark: i,
                textClassName: s,
                iconClassName: a,
                textVariant: u = "text-md/medium",
            } = e,
            c = (0, l.YW)({ type: t, isPreview: n, isCoachmark: i })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => z.intl.string(z.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => z.intl.string(z.t["8+vbqd"]))
                .otherwise(() => z.intl.string(z.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: ei.DD,
            children: [
                (0, r.jsx)(_.D, { "aria-label": c, className: o()(ei.Qw, s), variant: u, children: c }),
                (0, r.jsx)(C.A, { className: o()(ei.PC, a), size: "xs" }),
            ],
        });
    },
    eu = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e;
        if ((0, N.V)()?.subscription_trial?.sku_id === J.pe.TIER_2 && n) return null;
        let s = (0, l.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isPreview: !0 }, () => z.intl.format(z.t.G8yQXi, { onPremiumClick: S.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => z.intl.string(z.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => z.intl.string(z.t.dqDFwe))
            .with({ isPreview: !0 }, () => z.intl.format(z.t["DWIjJ/"], { onPremiumClick: S.e }))
            .otherwise(() => z.intl.string(z.t["np0X/u"]));
        return (0, r.jsx)(_.D, { variant: "text-sm/normal", className: ei.W$, children: s });
    },
    ec = (e) => {
        let {
                renderCTAButtons: t,
                isCoachmark: n,
                titleTextVariant: i,
                headingClassName: a,
                titleClassName: l,
                titleIconClassName: c,
            } = e,
            { type: d } = s.useContext(ea),
            [_] = (0, u.yK)([w.A], () => [w.A.isPreview]),
            f = (0, N.V)()?.subscription_trial?.sku_id === J.pe.TIER_2;
        return "EDITOR" === d && _ && f
            ? (0, r.jsx)(y.Ay, {
                  type: J.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: J.pe.TIER_2,
                  children: z.intl.format(z.t.G8yQXi, { onPremiumClick: S.e }),
              })
            : (0, r.jsxs)("div", {
                  className: ei.wx,
                  children: [
                      (0, r.jsxs)("div", {
                          className: o()(ei.so, a),
                          children: [
                              (0, r.jsx)(el, {
                                  type: d,
                                  isPreview: _,
                                  isCoachmark: n,
                                  textVariant: i,
                                  textClassName: l,
                                  iconClassName: c,
                              }),
                              (0, r.jsx)(eu, { type: d, isPreview: _, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    ed = (e) => {
        let { disabled: t, size: i } = e,
            { type: a, delay: o } = s.useContext(ea),
            { analyticsLocations: l } = (0, A.Ay)(g.A.CLIENT_THEMES_THEME_SELECTOR),
            [d, _] = (0, u.yK)([w.A], () => [w.A.isPreview, w.A.gradientPreset?.id]),
            [p, S] = s.useState(!1),
            [N, y] = s.useState(-1),
            C = (0, u.bG)([m.A], () => m.A.useReducedMotion),
            v = "SETTINGS" === a,
            O = (0, T.GV)(),
            R = v && d ? O : void 0,
            D = v ? O : void 0;
        s.useEffect(() => {
            ((N === X.Jm.length - 2 && "EDITOR" === a) || _ === c.ju.EASTER_EGG) && S(!0);
        }, [N, a, _]);
        let M = (e, t) => {
                if (
                    ((0, L.bc)(e.id),
                    eo({ isPersisted: !d, analyticsLocations: l, themeName: c.ju[e.id] }),
                    d && "SETTINGS" === a
                        ? P(e)
                        : (0, E.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: d ? ee.Q_.OFF : void 0,
                              },
                              o,
                          ),
                    null != t)
                ) {
                    if ((p && S(!1), t <= N || 0 === t)) return void y(0);
                    y((e) => e + 1);
                }
            },
            P = async (e) => {
                await (0, E.u_)(
                    { backgroundGradientPresetId: e.id, theme: e.theme, useSystemTheme: d ? ee.Q_.OFF : void 0 },
                    et.Sb.SLOW_USER_ACTION,
                ),
                    (0, I.nf)(I.HP.CLIENT_THEMES),
                    (0, b.default)();
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                v && (0, r.jsx)(h.A, { id: O, children: z.intl.string(z.t.JIZSqz) }),
                (0, r.jsx)(Z, {
                    size: i,
                    isDisabled: t,
                    ariaDescribedBy: D,
                    onSelect: () => {
                        (0, I.nf)(I.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? I.xv.SETTING : I.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, b.default)();
                    },
                }),
                X.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== c.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        H.MX,
                        {
                            size: i,
                            preset: e,
                            isSelected: _ === e.id,
                            onSelect: () => M(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                            ariaDescribedBy: R,
                        },
                        e.id,
                    ),
                ),
                (() => {
                    if (!p) return null;
                    let e = X.ag[c.ju.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                        return e;
                    }
                    return (0, r.jsxs)("div", {
                        className: ei.kG,
                        children: [
                            (0, r.jsx)(H.MX, {
                                size: i,
                                preset: e,
                                isSelected: _ === c.ju.EASTER_EGG,
                                onSelect: () => M(e),
                                ariaDescribedBy: R,
                            }),
                            (0, r.jsx)(f.a, { importData: t, shouldAnimate: !C, className: ei._7 }),
                        ],
                    });
                })(),
            ],
        });
    },
    e_ = (e) => {
        let { size: t, systemSelectorFirst: n, hideSystemSelector: i = !1 } = e,
            { delay: a } = s.useContext(ea),
            { analyticsLocations: o } = (0, A.Ay)(g.A.CLIENT_THEMES_THEME_SELECTOR),
            [l, c, d] = (0, u.yK)([v.A, O.Ay, w.A], () => [
                v.A.theme,
                null == w.A.gradientPreset && null == R.eh.getSetting().customUserThemeSettings,
                O.Ay.useSystemTheme === ee.Q_.ON,
            ]),
            _ = (e) => {
                (0, L.Py)(),
                    eo({ isPersisted: !0, analyticsLocations: o, themeName: `default ${e}` }),
                    (0, E.u_)({ theme: e }, a);
            },
            f = !i && !0 === n;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f &&
                    (0, r.jsx)(H.zy, {
                        size: t,
                        theme: "system",
                        isSelected: c && d,
                        onSelect: () => _("system"),
                        tabIndex: 0,
                    }),
                (0, r.jsx)(H.zy, {
                    size: t,
                    theme: en.NJ.LIGHT,
                    isSelected: c && !d && l === en.NJ.LIGHT,
                    onSelect: () => _(en.NJ.LIGHT),
                    tabIndex: f ? void 0 : 0,
                }),
                (0, r.jsx)(H.zy, {
                    size: t,
                    theme: en.NJ.DARK,
                    isSelected: c && !d && l === en.NJ.DARK,
                    onSelect: () => _(en.NJ.DARK),
                }),
                (0, r.jsx)(H.zy, {
                    size: t,
                    theme: en.NJ.DARKER,
                    isSelected: c && !d && l === en.NJ.DARKER,
                    onSelect: () => _(en.NJ.DARKER),
                }),
                (0, r.jsx)(H.zy, {
                    size: t,
                    theme: en.NJ.MIDNIGHT,
                    isSelected: c && !d && l === en.NJ.MIDNIGHT,
                    onSelect: () => _(en.NJ.MIDNIGHT),
                }),
                !i &&
                    !n &&
                    (0, r.jsx)(H.zy, { size: t, theme: "system", isSelected: c && d, onSelect: () => _("system") }),
            ],
        });
    },
    ef = (e) => {
        let { type: t, children: n } = e,
            i = (0, T.GV)(),
            { ref: a, ...o } = (0, d._u)({ orientation: "horizontal", labelledBy: i }),
            l = s.useMemo(() => ({ type: t, delay: es[t] }), [t]);
        return (0, r.jsx)(ea.Provider, {
            value: l,
            children: (0, r.jsx)("div", { ref: a, ...o, className: ei.__invalid_container, children: n }),
        });
    };
(ef.Basic = (e) => {
    let { className: t, hideSystemSelector: n, iconSize: i } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(p.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(e_, { hideSystemSelector: n, size: i }),
        }),
    });
}),
    (ef.Gradient = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: s, iconSize: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(ec, { renderCTAButtons: n, isCoachmark: s }),
                (0, r.jsx)(p.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(ed, { disabled: i, size: a }),
                }),
            ],
        });
    }),
    (ef.BasicAndGradient = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: s, iconSize: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(ec, { renderCTAButtons: i, isCoachmark: s }),
                t &&
                    s &&
                    (0, r.jsx)(_.D, {
                        className: ei.tD,
                        variant: "heading-sm/semibold",
                        children: z.intl.string(z.t.POSLGY),
                    }),
                (0, r.jsxs)(p.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, r.jsx)(e_, { systemSelectorFirst: !0, size: a }),
                        (0, r.jsx)(ed, { disabled: !1, size: a }),
                    ],
                }),
            ],
        });
    });
let eh = ef;
