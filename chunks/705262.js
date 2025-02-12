n.d(t, {
    Yk: () => B,
    ZP: () => q,
    yH: () => k
}),
    n(627341),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(278074),
    l = n(442837),
    u = n(524437),
    c = n(481060),
    d = n(153867),
    f = n(607070),
    _ = n(100527),
    p = n(906732),
    h = n(313201),
    m = n(540059),
    g = n(98278),
    E = n(639119),
    v = n(311476),
    y = n(165583),
    I = n(587446),
    T = n(210887),
    b = n(740492),
    S = n(626135),
    A = n(238302),
    N = n(514361),
    C = n(583901),
    R = n(469115),
    O = n(981631),
    D = n(474936),
    L = n(874893),
    x = n(526761),
    P = n(231338),
    w = n(388032),
    M = n(488850),
    k = (function (e) {
        return (e.EDITOR = 'EDITOR'), (e.SETTINGS = 'SETTINGS'), e;
    })({});
let U = Object.freeze({
        EDITOR: x.fy.SLOW_USER_ACTION,
        SETTINGS: x.fy.INFREQUENT_USER_ACTION
    }),
    G = r.createContext({}),
    B = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
        S.default.track(O.rMx.CLIENT_THEME_UPDATED, {
            feature_name: D.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: i
        });
    },
    Z = (e) => {
        let { type: t, isPreview: n, isCoachmark: r } = e,
            a = (0, m.Q3)('GradientSelectorsTitle'),
            { enabled: s } = v.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !n
                }
            ),
            l = (0, o.EQ)({
                isVisualRefreshEnabled: a,
                type: t,
                isPreview: n,
                isCoachmark: r,
                appearanceUpsellExperimentEnabled: s
            })
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0,
                        isPreview: !0
                    },
                    () => w.intl.string(w.t.D29k19)
                )
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0
                    },
                    () => w.intl.string(w.t['8+vbqa'])
                )
                .with({ appearanceUpsellExperimentEnabled: !0 }, () => w.intl.string(w.t.Ksh3io))
                .with({ isVisualRefreshEnabled: !0 }, () => w.intl.string(w.t.hjV0fX))
                .otherwise(() => w.intl.string(w.t.OCOOiI));
        return (0, i.jsxs)('div', {
            className: M.title,
            children: [
                (0, i.jsx)(c.X6q, {
                    'aria-label': l,
                    className: M.titleText,
                    variant: 'text-md/medium',
                    children: l
                }),
                (!s || 'EDITOR' === t) && (0, i.jsx)(I.Z, { className: M.premiumIcon })
            ]
        });
    },
    F = (e) => {
        var t, n;
        let { type: r, isPreview: a, isCoachmark: s } = e,
            l = (null === (n = (0, E.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.Si.TIER_2,
            { enabled: u } = v.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !a
                }
            );
        if (l && a) return null;
        let d = (0, o.EQ)({
            type: r,
            isPreview: a,
            isCoachmark: s
        })
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !0
                },
                () => w.intl.format(w.t.G8yQXl, { onPremiumClick: () => g.z })
            )
            .with(
                {
                    type: 'EDITOR',
                    isCoachmark: !0
                },
                () => w.intl.string(w.t.jmZiNj)
            )
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !1
                },
                () => w.intl.string(w.t.dqDFwc)
            )
            .with({ isPreview: !0 }, () => w.intl.format(w.t.DWIjJy, { onPremiumClick: () => g.z }))
            .otherwise(() => w.intl.string(w.t['np0X/v']));
        return u
            ? (0, i.jsxs)('div', {
                  className: M.description,
                  children: [
                      (0, i.jsx)(c.SrA, {
                          size: 'md',
                          color: 'currentColor',
                          className: M.nitroWheel
                      }),
                      (0, i.jsx)(c.X6q, {
                          variant: 'text-sm/normal',
                          children: w.intl.format(w.t.x2dQxM, {
                              onClick: () => {
                                  (0, g.$)();
                              }
                          })
                      })
                  ]
              })
            : (0, i.jsx)(c.X6q, {
                  variant: 'text-sm/normal',
                  className: M.subtext,
                  children: d
              });
    },
    V = (e) => {
        var t, n;
        let { renderCTAButtons: a, isCoachmark: s } = e,
            { type: o } = r.useContext(G),
            [u] = (0, l.Wu)([N.Z], () => [N.Z.isPreview]),
            c = (null === (n = (0, E.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.Si.TIER_2;
        return (0, i.jsx)(i.Fragment, {
            children:
                'EDITOR' === o && u && c
                    ? (0, i.jsx)(y.ZP, {
                          type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                          subscriptionTier: D.Si.TIER_2,
                          children: w.intl.format(w.t.G8yQXl, { onPremiumClick: () => g.z })
                      })
                    : (0, i.jsxs)('div', {
                          className: M.header,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: M.headings,
                                  children: [
                                      (0, i.jsx)(Z, {
                                          type: o,
                                          isPreview: u,
                                          isCoachmark: s
                                      }),
                                      (0, i.jsx)(F, {
                                          type: o,
                                          isPreview: u,
                                          isCoachmark: s
                                      })
                                  ]
                              }),
                              null == a ? void 0 : a()
                          ]
                      })
        });
    },
    j = (e) => {
        let { disabled: t } = e,
            { type: a, delay: s } = r.useContext(G),
            { analyticsLocations: o } = (0, p.ZP)(_.Z.CLIENT_THEMES_THEME_SELECTOR),
            [h, m] = (0, l.Wu)([N.Z], () => {
                var e;
                return [N.Z.isPreview, null === (e = N.Z.gradientPreset) || void 0 === e ? void 0 : e.id];
            }),
            [g, E] = r.useState(!1),
            [y, I] = r.useState(-1),
            T = (0, l.e7)([f.Z], () => f.Z.useReducedMotion);
        r.useEffect(() => {
            ((y === R.XV.length - 2 && 'EDITOR' === a) || m === u.Us.EASTER_EGG) && E(!0);
        }, [y, a, m]);
        let { enabled: b } = v.Z.useExperiment({ location: 'useGradientSelectors' }, { autoTrackExposure: !1 }),
            S = (e, t) => {
                if (
                    ((0, A.zO)(e.id),
                    B({
                        isPersisted: !h,
                        analyticsLocations: o,
                        themeName: u.Us[e.id]
                    }),
                    h && 'SETTINGS' === a && b)
                ) {
                    (0, c.ZDy)(
                        async () => {
                            let { default: e } = await n.e('68192').then(n.bind(n, 742234));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    analyticsSource: _.Z.CLIENT_THEMES_THEME_SELECTOR,
                                    analyticsLocation: {
                                        section: O.jXE.SETTINGS_APPEARANCE_THEME_PICKER,
                                        object: O.qAy.BUTTON_ICON
                                    },
                                    ...t,
                                    onClose: () => ((0, A.kj)(), t.onClose())
                                });
                        },
                        { onCloseCallback: A.kj }
                    );
                    return;
                }
                if (
                    ((0, d.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: h ? L.K.OFF : void 0
                        },
                        s
                    ),
                    null != t)
                ) {
                    if ((g && E(!1), t <= y || 0 === t)) {
                        I(0);
                        return;
                    }
                    I((e) => e + 1);
                }
            },
            D = () => {
                if (!g) return null;
                let e = R.qt[u.Us.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
                    return e;
                }
                return (0, i.jsxs)('div', {
                    className: M.easterEggSelection,
                    children: [
                        (0, i.jsx)(C.DR, {
                            preset: e,
                            isSelected: m === u.Us.EASTER_EGG,
                            onSelect: () => S(e)
                        }),
                        (0, i.jsx)(c.Fmz, {
                            importData: t,
                            shouldAnimate: !T,
                            className: M.sparkles
                        })
                    ]
                });
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                R.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== u.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, i.jsx)(
                        C.DR,
                        {
                            preset: e,
                            isSelected: m === e.id,
                            onSelect: () => S(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: 'SETTINGS' === a && b && h
                        },
                        e.id
                    )
                ),
                D()
            ]
        });
    },
    H = (e) => {
        let { className: t, renderCTAButtons: n, disabled: r = !1, isCoachmark: a } = e;
        return (0, i.jsxs)('section', {
            className: t,
            children: [
                (0, i.jsx)(V, {
                    renderCTAButtons: n,
                    isCoachmark: a
                }),
                (0, i.jsx)('div', {
                    className: M.presets,
                    children: (0, i.jsx)(j, { disabled: r })
                })
            ]
        });
    },
    Y = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: a } = r.useContext(G),
            { analyticsLocations: s } = (0, p.ZP)(_.Z.CLIENT_THEMES_THEME_SELECTOR),
            [o, u, c] = (0, l.Wu)([T.Z, b.ZP, N.Z], () => [T.Z.theme, null == N.Z.gradientPreset, b.ZP.useSystemTheme === L.K.ON]),
            f = (e) => {
                (0, A.xs)(),
                    B({
                        isPersisted: !0,
                        analyticsLocations: s,
                        themeName: 'default '.concat(e)
                    }),
                    (0, d.ZI)({ theme: e }, a);
            },
            h = (0, m.Q3)('appearance_settings');
        return (0, i.jsxs)(i.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, i.jsx)(C.bD, {
                        theme: 'system',
                        isSelected: u && c,
                        onSelect: () => f('system')
                    }),
                (0, i.jsx)(C.bD, {
                    theme: P.BR.LIGHT,
                    isSelected: u && !c && o === P.BR.LIGHT,
                    onSelect: () => f(P.BR.LIGHT)
                }),
                (0, i.jsx)(C.bD, {
                    theme: P.BR.DARK,
                    isSelected: u && !c && o === P.BR.DARK,
                    onSelect: () => f(P.BR.DARK)
                }),
                h &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(C.bD, {
                                theme: P.BR.DARKER,
                                isSelected: u && !c && o === P.BR.DARKER,
                                onSelect: () => f(P.BR.DARKER)
                            }),
                            (0, i.jsx)(C.bD, {
                                theme: P.BR.MIDNIGHT,
                                isSelected: u && !c && o === P.BR.MIDNIGHT,
                                onSelect: () => f(P.BR.MIDNIGHT)
                            })
                        ]
                    }),
                !n &&
                    !t &&
                    (0, i.jsx)(C.bD, {
                        theme: 'system',
                        isSelected: u && c,
                        onSelect: () => f('system')
                    })
            ]
        });
    },
    W = (e) => {
        let { className: t, hideSystemSelector: n } = e;
        return (0, i.jsx)('section', {
            className: s()(M.presets, t),
            children: (0, i.jsx)(Y, { hideSystemSelector: n })
        });
    },
    K = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: r, isCoachmark: a } = e;
        return (0, i.jsxs)('section', {
            className: n,
            children: [
                !t &&
                    (0, i.jsx)(V, {
                        renderCTAButtons: r,
                        isCoachmark: a
                    }),
                t &&
                    a &&
                    (0, i.jsx)(c.X6q, {
                        className: M.upsellText,
                        variant: 'heading-sm/semibold',
                        children: w.intl.string(w.t.POSLGR)
                    }),
                (0, i.jsxs)('div', {
                    className: s()(M.presets, { [M.presetsJustify]: t }),
                    children: [(0, i.jsx)(Y, { systemSelectorFirst: !0 }), (0, i.jsx)(j, { disabled: !1 })]
                })
            ]
        });
    },
    z = (e) => {
        let { type: t, children: n } = e,
            a = (0, h.Dt)(),
            s = (0, c.arW)({
                orientation: 'horizontal',
                labelledBy: a
            }),
            o = r.useMemo(
                () => ({
                    type: t,
                    delay: U[t]
                }),
                [t]
            );
        return (0, i.jsx)(G.Provider, {
            value: o,
            children: (0, i.jsx)('div', {
                ...s,
                className: M.__invalid_container,
                children: n
            })
        });
    };
(z.Basic = W), (z.Gradient = H), (z.BasicAndGradient = K);
let q = z;
