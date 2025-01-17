r.d(n, {
    Yk: function () {
        return V;
    },
    yH: function () {
        return i;
    }
});
var i,
    a = r(627341);
var s = r(47120);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(278074),
    f = r(442837),
    _ = r(524437),
    h = r(481060),
    p = r(153867),
    m = r(607070),
    g = r(100527),
    E = r(906732),
    v = r(313201),
    I = r(540059),
    T = r(98278),
    b = r(639119),
    y = r(311476),
    S = r(165583),
    A = r(587446),
    N = r(210887),
    C = r(740492),
    R = r(626135),
    O = r(238302),
    D = r(514361),
    L = r(583901),
    x = r(469115),
    w = r(981631),
    P = r(474936),
    M = r(874893),
    k = r(526761),
    U = r(231338),
    B = r(388032),
    G = r(392971);
!(function (e) {
    (e.EDITOR = 'EDITOR'), (e.SETTINGS = 'SETTINGS');
})(i || (i = {}));
let Z = Object.freeze({
        EDITOR: k.fy.SLOW_USER_ACTION,
        SETTINGS: k.fy.INFREQUENT_USER_ACTION
    }),
    F = l.createContext({}),
    V = (e) => {
        let { isPersisted: n, themeName: r, analyticsLocations: i } = e;
        R.default.track(w.rMx.CLIENT_THEME_UPDATED, {
            feature_name: P.QP.CLIENT_THEME,
            theme_name: r,
            is_persisted: n,
            location_stack: i
        });
    },
    j = (e) => {
        let { type: n, isPreview: r, isCoachmark: i } = e,
            { enabled: a } = y.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !r
                }
            ),
            s = (0, d.EQ)({
                type: n,
                isPreview: r,
                isCoachmark: i,
                appearanceUpsellExperimentEnabled: a
            })
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0,
                        isPreview: !0
                    },
                    () => B.intl.string(B.t.D29k19)
                )
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0
                    },
                    () => B.intl.string(B.t['8+vbqa'])
                )
                .with({ appearanceUpsellExperimentEnabled: !0 }, () => B.intl.string(B.t.Ksh3io))
                .otherwise(() => B.intl.string(B.t.OCOOiI));
        return (0, o.jsxs)('div', {
            className: G.title,
            children: [
                (0, o.jsx)(h.Heading, {
                    'aria-label': s,
                    variant: 'text-md/medium',
                    children: s
                }),
                (!a || 'EDITOR' === n) && (0, o.jsx)(A.Z, { className: G.premiumIcon })
            ]
        });
    },
    H = (e) => {
        var n, r;
        let { type: i, isPreview: a, isCoachmark: s } = e,
            l = (null === (r = (0, b.N)()) || void 0 === r ? void 0 : null === (n = r.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === P.Si.TIER_2,
            { enabled: u } = y.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !a
                }
            );
        if (l && a) return null;
        let c = (0, d.EQ)({
            type: i,
            isPreview: a,
            isCoachmark: s
        })
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !0
                },
                () => B.intl.format(B.t.G8yQXl, { onPremiumClick: () => T.z })
            )
            .with(
                {
                    type: 'EDITOR',
                    isCoachmark: !0
                },
                () => B.intl.string(B.t.jmZiNj)
            )
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !1
                },
                () => B.intl.string(B.t.dqDFwc)
            )
            .with({ isPreview: !0 }, () => B.intl.format(B.t.DWIjJy, { onPremiumClick: () => T.z }))
            .otherwise(() => B.intl.string(B.t['np0X/v']));
        return u
            ? (0, o.jsxs)('div', {
                  className: G.description,
                  children: [
                      (0, o.jsx)(h.NitroWheelIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: G.nitroWheel
                      }),
                      (0, o.jsx)(h.Heading, {
                          variant: 'text-sm/normal',
                          children: B.intl.format(B.t.x2dQxM, {
                              onClick: () => {
                                  (0, T.$)();
                              }
                          })
                      })
                  ]
              })
            : (0, o.jsx)(h.Heading, {
                  variant: 'text-sm/normal',
                  children: c
              });
    },
    Y = (e) => {
        var n, r;
        let { renderCTAButtons: i } = e,
            { type: a } = l.useContext(F),
            [s, u] = (0, f.Wu)([D.Z], () => [D.Z.isPreview, D.Z.isCoachmark]),
            c = (null === (r = (0, b.N)()) || void 0 === r ? void 0 : null === (n = r.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === P.Si.TIER_2;
        return (0, o.jsx)(o.Fragment, {
            children:
                'EDITOR' === a && s && c
                    ? (0, o.jsx)(S.ZP, {
                          type: P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                          subscriptionTier: P.Si.TIER_2,
                          children: B.intl.format(B.t.G8yQXl, { onPremiumClick: () => T.z })
                      })
                    : (0, o.jsxs)('div', {
                          className: G.header,
                          children: [
                              (0, o.jsxs)('div', {
                                  className: G.headings,
                                  children: [
                                      (0, o.jsx)(j, {
                                          type: a,
                                          isPreview: s,
                                          isCoachmark: u
                                      }),
                                      (0, o.jsx)(H, {
                                          type: a,
                                          isPreview: s,
                                          isCoachmark: u
                                      })
                                  ]
                              }),
                              null == i ? void 0 : i()
                          ]
                      })
        });
    },
    W = (e) => {
        let { disabled: n } = e,
            { type: i, delay: a } = l.useContext(F),
            { analyticsLocations: s } = (0, E.ZP)(g.Z.CLIENT_THEMES_THEME_SELECTOR),
            [u, c] = (0, f.Wu)([D.Z], () => {
                var e;
                return [D.Z.isPreview, null === (e = D.Z.gradientPreset) || void 0 === e ? void 0 : e.id];
            }),
            [d, v] = l.useState(!1),
            [I, T] = l.useState(-1),
            b = (0, f.e7)([m.Z], () => m.Z.useReducedMotion);
        l.useEffect(() => {
            ((I === x.XV.length - 2 && 'EDITOR' === i) || c === _.Us.EASTER_EGG) && v(!0);
        }, [I, i, c]);
        let { enabled: S } = y.Z.useExperiment({ location: 'useGradientSelectors' }, { autoTrackExposure: !1 }),
            A = (e, n) => {
                if (
                    ((0, O.zO)(e.id),
                    V({
                        isPersisted: !u,
                        analyticsLocations: s,
                        themeName: _.Us[e.id]
                    }),
                    u && 'SETTINGS' === i && S)
                ) {
                    (0, h.openModalLazy)(
                        async () => {
                            let { default: e } = await r.e('68192').then(r.bind(r, 742234));
                            return (n) =>
                                (0, o.jsx)(e, {
                                    analyticsSource: g.Z.CLIENT_THEMES_THEME_SELECTOR,
                                    analyticsLocation: {
                                        section: w.jXE.SETTINGS_APPEARANCE_THEME_PICKER,
                                        object: w.qAy.BUTTON_ICON
                                    },
                                    ...n,
                                    onClose: () => ((0, O.kj)(), n.onClose())
                                });
                        },
                        { onCloseCallback: O.kj }
                    );
                    return;
                }
                if (
                    ((0, p.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: u ? M.K.OFF : void 0
                        },
                        a
                    ),
                    null != n)
                ) {
                    if ((d && v(!1), n <= I || 0 === n)) {
                        T(0);
                        return;
                    }
                    T((e) => e + 1);
                }
            },
            N = () => {
                if (!d) return null;
                let e = x.qt[_.Us.EASTER_EGG];
                if (null == e) return null;
                async function n() {
                    let { default: e } = await r.e('5217').then(r.t.bind(r, 801048, 19));
                    return e;
                }
                return (0, o.jsxs)('div', {
                    className: G.easterEggSelection,
                    children: [
                        (0, o.jsx)(L.DR, {
                            preset: e,
                            isSelected: c === _.Us.EASTER_EGG,
                            onSelect: () => A(e)
                        }),
                        (0, o.jsx)(h.LottieAnimation, {
                            importData: n,
                            shouldAnimate: !b,
                            className: G.sparkles
                        })
                    ]
                });
            };
        return (0, o.jsxs)(o.Fragment, {
            children: [
                x.XV.filter((e) => {
                    let { id: n } = e;
                    return n !== _.Us.EASTER_EGG;
                }).map((e, r) =>
                    (0, o.jsx)(
                        L.DR,
                        {
                            preset: e,
                            isSelected: c === e.id,
                            onSelect: () => A(e, r),
                            disabled: n,
                            tabIndex: 0 !== r || n ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: 'SETTINGS' === i && S && u
                        },
                        e.id
                    )
                ),
                N()
            ]
        });
    },
    K = (e) => {
        let { className: n, renderCTAButtons: r, disabled: i = !1 } = e;
        return (0, o.jsxs)('section', {
            className: n,
            children: [
                (0, o.jsx)(Y, { renderCTAButtons: r }),
                (0, o.jsx)('div', {
                    className: G.presets,
                    children: (0, o.jsx)(W, { disabled: i })
                })
            ]
        });
    },
    z = (e) => {
        let { systemSelectorFirst: n, hideSystemSelector: r = !1 } = e,
            { delay: i } = l.useContext(F),
            { analyticsLocations: a } = (0, E.ZP)(g.Z.CLIENT_THEMES_THEME_SELECTOR),
            [s, u, c] = (0, f.Wu)([N.Z, C.ZP, D.Z], () => [N.Z.theme, null == D.Z.gradientPreset, C.ZP.useSystemTheme === M.K.ON]),
            d = (e) => {
                (0, O.xs)(),
                    V({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: 'default '.concat(e)
                    }),
                    (0, p.ZI)({ theme: e }, i);
            },
            _ = (0, I.Q3)('appearance_settings');
        return (0, o.jsxs)(o.Fragment, {
            children: [
                !r &&
                    n &&
                    (0, o.jsx)(L.bD, {
                        theme: 'system',
                        isSelected: u && c,
                        onSelect: () => d('system')
                    }),
                (0, o.jsx)(L.bD, {
                    theme: U.BR.LIGHT,
                    isSelected: u && !c && s === U.BR.LIGHT,
                    onSelect: () => d(U.BR.LIGHT)
                }),
                (0, o.jsx)(L.bD, {
                    theme: U.BR.DARK,
                    isSelected: u && !c && s === U.BR.DARK,
                    onSelect: () => d(U.BR.DARK)
                }),
                _ &&
                    (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(L.bD, {
                                theme: U.BR.DARKER,
                                isSelected: u && !c && s === U.BR.DARKER,
                                onSelect: () => d(U.BR.DARKER)
                            }),
                            (0, o.jsx)(L.bD, {
                                theme: U.BR.MIDNIGHT,
                                isSelected: u && !c && s === U.BR.MIDNIGHT,
                                onSelect: () => d(U.BR.MIDNIGHT)
                            })
                        ]
                    }),
                !r &&
                    !n &&
                    (0, o.jsx)(L.bD, {
                        theme: 'system',
                        isSelected: u && c,
                        onSelect: () => d('system')
                    })
            ]
        });
    },
    q = (e) => {
        let { className: n, hideSystemSelector: r } = e;
        return (0, o.jsx)('section', {
            className: c()(G.presets, n),
            children: (0, o.jsx)(z, { hideSystemSelector: r })
        });
    },
    Q = (e) => {
        let { isEditor: n, className: r, renderCTAButtons: i } = e,
            a = (0, f.e7)([D.Z], () => D.Z.isCoachmark);
        return (0, o.jsxs)('section', {
            className: r,
            children: [
                !n && (0, o.jsx)(Y, { renderCTAButtons: i }),
                n &&
                    a &&
                    (0, o.jsx)(h.Heading, {
                        className: G.upsellText,
                        variant: 'heading-sm/semibold',
                        children: B.intl.string(B.t.POSLGR)
                    }),
                (0, o.jsxs)('div', {
                    className: c()(G.presets, { [G.presetsJustify]: n }),
                    children: [(0, o.jsx)(z, { systemSelectorFirst: !0 }), (0, o.jsx)(W, { disabled: !1 })]
                })
            ]
        });
    },
    X = (e) => {
        let { type: n, children: r } = e,
            i = (0, v.Dt)(),
            a = (0, h.useRadioGroup)({
                orientation: 'horizontal',
                labelledBy: i
            }),
            s = l.useMemo(
                () => ({
                    type: n,
                    delay: Z[n]
                }),
                [n]
            );
        return (0, o.jsx)(F.Provider, {
            value: s,
            children: (0, o.jsx)('div', {
                ...a,
                className: G.__invalid_container,
                children: r
            })
        });
    };
(X.Basic = q), (X.Gradient = K), (X.BasicAndGradient = Q), (n.ZP = X);
