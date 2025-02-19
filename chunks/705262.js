n.d(t, {
    Yk: () => V,
    ZP: () => $,
    yH: () => B
}),
    n(627341),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(153867),
    f = n(607070),
    p = n(100527),
    _ = n(906732),
    h = n(313201),
    m = n(540059),
    g = n(98278),
    E = n(639119),
    v = n(311476),
    b = n(165583),
    y = n(587446),
    O = n(210887),
    S = n(740492),
    I = n(626135),
    T = n(238302),
    N = n(514361),
    A = n(583901),
    C = n(469115),
    R = n(981631),
    P = n(474936),
    w = n(874893),
    D = n(526761),
    x = n(231338),
    L = n(388032),
    M = n(77500);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var B = (function (e) {
    return (e.EDITOR = 'EDITOR'), (e.SETTINGS = 'SETTINGS'), e;
})({});
let Z = Object.freeze({
        EDITOR: D.fy.SLOW_USER_ACTION,
        SETTINGS: D.fy.INFREQUENT_USER_ACTION
    }),
    F = i.createContext({}),
    V = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        I.default.track(R.rMx.CLIENT_THEME_UPDATED, {
            feature_name: P.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r
        });
    },
    H = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e,
            o = (0, m.Q3)('GradientSelectorsTitle'),
            { enabled: a } = v.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !n
                }
            ),
            l = (0, s.EQ)({
                isVisualRefreshEnabled: o,
                type: t,
                isPreview: n,
                isCoachmark: i,
                appearanceUpsellExperimentEnabled: a
            })
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0,
                        isPreview: !0
                    },
                    () => L.NW.string(L.t.D29k19)
                )
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0
                    },
                    () => L.NW.string(L.t['8+vbqa'])
                )
                .with({ appearanceUpsellExperimentEnabled: !0 }, () => L.NW.string(L.t.Ksh3io))
                .with({ isVisualRefreshEnabled: !0 }, () => L.NW.string(L.t.hjV0fX))
                .otherwise(() => L.NW.string(L.t.OCOOiI));
        return (0, r.jsxs)('div', {
            className: M.title,
            children: [
                (0, r.jsx)(u.X6q, {
                    'aria-label': l,
                    className: M.titleText,
                    variant: 'text-md/medium',
                    children: l
                }),
                (!a || 'EDITOR' === t) && (0, r.jsx)(y.Z, { className: M.premiumIcon })
            ]
        });
    },
    W = (e) => {
        var t, n;
        let { type: i, isPreview: o, isCoachmark: a } = e,
            l = (null === (n = (0, E.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === P.Si.TIER_2,
            { enabled: c } = v.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !o
                }
            );
        if (l && o) return null;
        let d = (0, s.EQ)({
            type: i,
            isPreview: o,
            isCoachmark: a
        })
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !0
                },
                () => L.NW.format(L.t.G8yQXl, { onPremiumClick: () => g.z })
            )
            .with(
                {
                    type: 'EDITOR',
                    isCoachmark: !0
                },
                () => L.NW.string(L.t.jmZiNj)
            )
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !1
                },
                () => L.NW.string(L.t.dqDFwc)
            )
            .with({ isPreview: !0 }, () => L.NW.format(L.t.DWIjJy, { onPremiumClick: () => g.z }))
            .otherwise(() => L.NW.string(L.t['np0X/v']));
        return c
            ? (0, r.jsxs)('div', {
                  className: M.description,
                  children: [
                      (0, r.jsx)(u.SrA, {
                          size: 'md',
                          color: 'currentColor',
                          className: M.nitroWheel
                      }),
                      (0, r.jsx)(u.X6q, {
                          variant: 'text-sm/normal',
                          children: L.NW.format(L.t.x2dQxM, {
                              onClick: () => {
                                  (0, g.$)();
                              }
                          })
                      })
                  ]
              })
            : (0, r.jsx)(u.X6q, {
                  variant: 'text-sm/normal',
                  className: M.subtext,
                  children: d
              });
    },
    Y = (e) => {
        var t, n;
        let { renderCTAButtons: o, isCoachmark: a } = e,
            { type: s } = i.useContext(F),
            [c] = (0, l.Wu)([N.Z], () => [N.Z.isPreview]),
            u = (null === (n = (0, E.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === P.Si.TIER_2;
        return (0, r.jsx)(r.Fragment, {
            children:
                'EDITOR' === s && c && u
                    ? (0, r.jsx)(b.ZP, {
                          type: P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                          subscriptionTier: P.Si.TIER_2,
                          children: L.NW.format(L.t.G8yQXl, { onPremiumClick: () => g.z })
                      })
                    : (0, r.jsxs)('div', {
                          className: M.header,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: M.headings,
                                  children: [
                                      (0, r.jsx)(H, {
                                          type: s,
                                          isPreview: c,
                                          isCoachmark: a
                                      }),
                                      (0, r.jsx)(W, {
                                          type: s,
                                          isPreview: c,
                                          isCoachmark: a
                                      })
                                  ]
                              }),
                              null == o ? void 0 : o()
                          ]
                      })
        });
    },
    K = (e) => {
        let { disabled: t } = e,
            { type: o, delay: a } = i.useContext(F),
            { analyticsLocations: s } = (0, _.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [h, m] = (0, l.Wu)([N.Z], () => {
                var e;
                return [N.Z.isPreview, null === (e = N.Z.gradientPreset) || void 0 === e ? void 0 : e.id];
            }),
            [g, E] = i.useState(!1),
            [b, y] = i.useState(-1),
            O = (0, l.e7)([f.Z], () => f.Z.useReducedMotion);
        i.useEffect(() => {
            ((b === C.XV.length - 2 && 'EDITOR' === o) || m === c.Us.EASTER_EGG) && E(!0);
        }, [b, o, m]);
        let { enabled: S } = v.Z.useExperiment({ location: 'useGradientSelectors' }, { autoTrackExposure: !1 }),
            I = (e, t) => {
                if (
                    ((0, T.zO)(e.id),
                    V({
                        isPersisted: !h,
                        analyticsLocations: s,
                        themeName: c.Us[e.id]
                    }),
                    h && 'SETTINGS' === o && S)
                ) {
                    (0, u.ZDy)(
                        async () => {
                            let { default: e } = await n.e('68192').then(n.bind(n, 742234));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    G(
                                        j(
                                            {
                                                analyticsSource: p.Z.CLIENT_THEMES_THEME_SELECTOR,
                                                analyticsLocation: {
                                                    section: R.jXE.SETTINGS_APPEARANCE_THEME_PICKER,
                                                    object: R.qAy.BUTTON_ICON
                                                }
                                            },
                                            t
                                        ),
                                        { onClose: () => ((0, T.kj)(), t.onClose()) }
                                    )
                                );
                        },
                        { onCloseCallback: T.kj }
                    );
                    return;
                }
                if (
                    ((0, d.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: h ? w.K.OFF : void 0
                        },
                        a
                    ),
                    null != t)
                ) {
                    if ((g && E(!1), t <= b || 0 === t)) {
                        y(0);
                        return;
                    }
                    y((e) => e + 1);
                }
            },
            P = () => {
                if (!g) return null;
                let e = C.qt[c.Us.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
                    return e;
                }
                return (0, r.jsxs)('div', {
                    className: M.easterEggSelection,
                    children: [
                        (0, r.jsx)(A.DR, {
                            preset: e,
                            isSelected: m === c.Us.EASTER_EGG,
                            onSelect: () => I(e)
                        }),
                        (0, r.jsx)(u.Fmz, {
                            importData: t,
                            shouldAnimate: !O,
                            className: M.sparkles
                        })
                    ]
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                C.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== c.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        A.DR,
                        {
                            preset: e,
                            isSelected: m === e.id,
                            onSelect: () => I(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: 'SETTINGS' === o && S && h
                        },
                        e.id
                    )
                ),
                P()
            ]
        });
    },
    z = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: o } = e;
        return (0, r.jsxs)('section', {
            className: t,
            children: [
                (0, r.jsx)(Y, {
                    renderCTAButtons: n,
                    isCoachmark: o
                }),
                (0, r.jsx)('div', {
                    className: M.presets,
                    children: (0, r.jsx)(K, { disabled: i })
                })
            ]
        });
    },
    q = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: o } = i.useContext(F),
            { analyticsLocations: a } = (0, _.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [s, c, u] = (0, l.Wu)([O.Z, S.ZP, N.Z], () => [O.Z.theme, null == N.Z.gradientPreset, S.ZP.useSystemTheme === w.K.ON]),
            f = (e) => {
                (0, T.xs)(),
                    V({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: 'default '.concat(e)
                    }),
                    (0, d.ZI)({ theme: e }, o);
            },
            h = (0, m.Q3)('appearance_settings');
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, r.jsx)(A.bD, {
                        theme: 'system',
                        isSelected: c && u,
                        onSelect: () => f('system')
                    }),
                (0, r.jsx)(A.bD, {
                    theme: x.BR.LIGHT,
                    isSelected: c && !u && s === x.BR.LIGHT,
                    onSelect: () => f(x.BR.LIGHT)
                }),
                (0, r.jsx)(A.bD, {
                    theme: x.BR.DARK,
                    isSelected: c && !u && s === x.BR.DARK,
                    onSelect: () => f(x.BR.DARK)
                }),
                h &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(A.bD, {
                                theme: x.BR.DARKER,
                                isSelected: c && !u && s === x.BR.DARKER,
                                onSelect: () => f(x.BR.DARKER)
                            }),
                            (0, r.jsx)(A.bD, {
                                theme: x.BR.MIDNIGHT,
                                isSelected: c && !u && s === x.BR.MIDNIGHT,
                                onSelect: () => f(x.BR.MIDNIGHT)
                            })
                        ]
                    }),
                !n &&
                    !t &&
                    (0, r.jsx)(A.bD, {
                        theme: 'system',
                        isSelected: c && u,
                        onSelect: () => f('system')
                    })
            ]
        });
    },
    Q = (e) => {
        let { className: t, hideSystemSelector: n } = e;
        return (0, r.jsx)('section', {
            className: a()(M.presets, t),
            children: (0, r.jsx)(q, { hideSystemSelector: n })
        });
    },
    X = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: o } = e;
        return (0, r.jsxs)('section', {
            className: n,
            children: [
                !t &&
                    (0, r.jsx)(Y, {
                        renderCTAButtons: i,
                        isCoachmark: o
                    }),
                t &&
                    o &&
                    (0, r.jsx)(u.X6q, {
                        className: M.upsellText,
                        variant: 'heading-sm/semibold',
                        children: L.NW.string(L.t.POSLGR)
                    }),
                (0, r.jsxs)('div', {
                    className: a()(M.presets, { [M.presetsJustify]: t }),
                    children: [(0, r.jsx)(q, { systemSelectorFirst: !0 }), (0, r.jsx)(K, { disabled: !1 })]
                })
            ]
        });
    },
    J = (e) => {
        let { type: t, children: n } = e,
            o = (0, h.Dt)(),
            a = (0, u.arW)({
                orientation: 'horizontal',
                labelledBy: o
            }),
            s = i.useMemo(
                () => ({
                    type: t,
                    delay: Z[t]
                }),
                [t]
            );
        return (0, r.jsx)(F.Provider, {
            value: s,
            children: (0, r.jsx)(
                'div',
                G(j({}, a), {
                    className: M.__invalid_container,
                    children: n
                })
            )
        });
    };
(J.Basic = Q), (J.Gradient = z), (J.BasicAndGradient = X);
let $ = J;
