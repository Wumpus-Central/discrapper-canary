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
var o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(278074),
    f = r(442837),
    p = r(524437),
    h = r(481060),
    _ = r(153867),
    m = r(607070),
    g = r(100527),
    E = r(906732),
    v = r(313201),
    y = r(540059),
    b = r(98278),
    I = r(639119),
    T = r(311476),
    S = r(165583),
    A = r(587446),
    C = r(210887),
    N = r(740492),
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
            { enabled: a } = T.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !r
                }
            ),
            o = (0, d.EQ)({
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
        return (0, s.jsxs)('div', {
            className: G.title,
            children: [
                (0, s.jsx)(h.Heading, {
                    'aria-label': o,
                    variant: 'text-md/medium',
                    children: o
                }),
                (!a || 'EDITOR' === n) && (0, s.jsx)(A.Z, { className: G.premiumIcon })
            ]
        });
    },
    H = (e) => {
        var n, r;
        let { type: i, isPreview: a, isCoachmark: o } = e,
            l = (null === (r = (0, I.N)()) || void 0 === r ? void 0 : null === (n = r.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === P.Si.TIER_2,
            { enabled: u } = T.Z.useExperiment(
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
            isCoachmark: o
        })
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !0
                },
                () => B.intl.format(B.t.G8yQXl, { onPremiumClick: () => b.z })
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
            .with({ isPreview: !0 }, () => B.intl.format(B.t.DWIjJy, { onPremiumClick: () => b.z }))
            .otherwise(() => B.intl.string(B.t['np0X/v']));
        return u
            ? (0, s.jsxs)('div', {
                  className: G.description,
                  children: [
                      (0, s.jsx)(h.NitroWheelIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: G.nitroWheel
                      }),
                      (0, s.jsx)(h.Heading, {
                          variant: 'text-sm/normal',
                          children: B.intl.format(B.t.x2dQxM, {
                              onClick: () => {
                                  (0, b.$)();
                              }
                          })
                      })
                  ]
              })
            : (0, s.jsx)(h.Heading, {
                  variant: 'text-sm/normal',
                  children: c
              });
    },
    Y = (e) => {
        var n, r;
        let { renderCTAButtons: i } = e,
            { type: a } = l.useContext(F),
            [o, u] = (0, f.Wu)([D.Z], () => [D.Z.isPreview, D.Z.isCoachmark]),
            c = (null === (r = (0, I.N)()) || void 0 === r ? void 0 : null === (n = r.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === P.Si.TIER_2;
        return (0, s.jsx)(s.Fragment, {
            children:
                'EDITOR' === a && o && c
                    ? (0, s.jsx)(S.ZP, {
                          type: P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                          subscriptionTier: P.Si.TIER_2,
                          children: B.intl.format(B.t.G8yQXl, { onPremiumClick: () => b.z })
                      })
                    : (0, s.jsxs)('div', {
                          className: G.header,
                          children: [
                              (0, s.jsxs)('div', {
                                  className: G.headings,
                                  children: [
                                      (0, s.jsx)(j, {
                                          type: a,
                                          isPreview: o,
                                          isCoachmark: u
                                      }),
                                      (0, s.jsx)(H, {
                                          type: a,
                                          isPreview: o,
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
            { analyticsLocations: o } = (0, E.ZP)(g.Z.CLIENT_THEMES_THEME_SELECTOR),
            [u, c] = (0, f.Wu)([D.Z], () => {
                var e;
                return [D.Z.isPreview, null === (e = D.Z.gradientPreset) || void 0 === e ? void 0 : e.id];
            }),
            [d, v] = l.useState(!1),
            [y, b] = l.useState(-1),
            I = (0, f.e7)([m.Z], () => m.Z.useReducedMotion);
        l.useEffect(() => {
            ((y === x.XV.length - 2 && 'EDITOR' === i) || c === p.Us.EASTER_EGG) && v(!0);
        }, [y, i, c]);
        let { enabled: S } = T.Z.useExperiment({ location: 'useGradientSelectors' }, { autoTrackExposure: !1 }),
            A = (e, n) => {
                if (
                    ((0, O.zO)(e.id),
                    V({
                        isPersisted: !u,
                        analyticsLocations: o,
                        themeName: p.Us[e.id]
                    }),
                    u && 'SETTINGS' === i && S)
                ) {
                    (0, h.openModalLazy)(
                        async () => {
                            let { default: e } = await r.e('68192').then(r.bind(r, 742234));
                            return (n) =>
                                (0, s.jsx)(e, {
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
                    ((0, _.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: u ? M.K.OFF : void 0
                        },
                        a
                    ),
                    null != n)
                ) {
                    if ((d && v(!1), n <= y || 0 === n)) {
                        b(0);
                        return;
                    }
                    b((e) => e + 1);
                }
            },
            C = () => {
                if (!d) return null;
                let e = x.qt[p.Us.EASTER_EGG];
                if (null == e) return null;
                async function n() {
                    let { default: e } = await r.e('5217').then(r.t.bind(r, 801048, 19));
                    return e;
                }
                return (0, s.jsxs)('div', {
                    className: G.easterEggSelection,
                    children: [
                        (0, s.jsx)(L.DR, {
                            preset: e,
                            isSelected: c === p.Us.EASTER_EGG,
                            onSelect: () => A(e)
                        }),
                        (0, s.jsx)(h.LottieAnimation, {
                            importData: n,
                            shouldAnimate: !I,
                            className: G.sparkles
                        })
                    ]
                });
            };
        return (0, s.jsxs)(s.Fragment, {
            children: [
                x.XV.filter((e) => {
                    let { id: n } = e;
                    return n !== p.Us.EASTER_EGG;
                }).map((e, r) =>
                    (0, s.jsx)(
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
                C()
            ]
        });
    },
    K = (e) => {
        let { className: n, renderCTAButtons: r, disabled: i = !1 } = e;
        return (0, s.jsxs)('section', {
            className: n,
            children: [
                (0, s.jsx)(Y, { renderCTAButtons: r }),
                (0, s.jsx)('div', {
                    className: G.presets,
                    children: (0, s.jsx)(W, { disabled: i })
                })
            ]
        });
    },
    z = (e) => {
        let { systemSelectorFirst: n, hideSystemSelector: r = !1 } = e,
            { delay: i } = l.useContext(F),
            { analyticsLocations: a } = (0, E.ZP)(g.Z.CLIENT_THEMES_THEME_SELECTOR),
            [o, u, c] = (0, f.Wu)([C.Z, N.ZP, D.Z], () => [C.Z.theme, null == D.Z.gradientPreset, N.ZP.useSystemTheme === M.K.ON]),
            d = (e) => {
                (0, O.xs)(),
                    V({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: 'default '.concat(e)
                    }),
                    (0, _.ZI)({ theme: e }, i);
            },
            p = (0, y.Q3)('appearance_settings');
        return (0, s.jsxs)(s.Fragment, {
            children: [
                !r &&
                    n &&
                    (0, s.jsx)(L.bD, {
                        theme: 'system',
                        isSelected: u && c,
                        onSelect: () => d('system')
                    }),
                (0, s.jsx)(L.bD, {
                    theme: U.BR.LIGHT,
                    isSelected: u && !c && o === U.BR.LIGHT,
                    onSelect: () => d(U.BR.LIGHT)
                }),
                (0, s.jsx)(L.bD, {
                    theme: U.BR.DARK,
                    isSelected: u && !c && o === U.BR.DARK,
                    onSelect: () => d(U.BR.DARK)
                }),
                p &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(L.bD, {
                                theme: U.BR.DARKER,
                                isSelected: u && !c && o === U.BR.DARKER,
                                onSelect: () => d(U.BR.DARKER)
                            }),
                            (0, s.jsx)(L.bD, {
                                theme: U.BR.MIDNIGHT,
                                isSelected: u && !c && o === U.BR.MIDNIGHT,
                                onSelect: () => d(U.BR.MIDNIGHT)
                            })
                        ]
                    }),
                !r &&
                    !n &&
                    (0, s.jsx)(L.bD, {
                        theme: 'system',
                        isSelected: u && c,
                        onSelect: () => d('system')
                    })
            ]
        });
    },
    q = (e) => {
        let { className: n, hideSystemSelector: r } = e;
        return (0, s.jsx)('section', {
            className: c()(G.presets, n),
            children: (0, s.jsx)(z, { hideSystemSelector: r })
        });
    },
    Q = (e) => {
        let { isEditor: n, className: r, renderCTAButtons: i } = e,
            a = (0, f.e7)([D.Z], () => D.Z.isCoachmark);
        return (0, s.jsxs)('section', {
            className: r,
            children: [
                !n && (0, s.jsx)(Y, { renderCTAButtons: i }),
                n &&
                    a &&
                    (0, s.jsx)(h.Heading, {
                        className: G.upsellText,
                        variant: 'heading-sm/semibold',
                        children: B.intl.string(B.t.POSLGR)
                    }),
                (0, s.jsxs)('div', {
                    className: c()(G.presets, { [G.presetsJustify]: n }),
                    children: [(0, s.jsx)(z, { systemSelectorFirst: !0 }), (0, s.jsx)(W, { disabled: !1 })]
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
            o = l.useMemo(
                () => ({
                    type: n,
                    delay: Z[n]
                }),
                [n]
            );
        return (0, s.jsx)(F.Provider, {
            value: o,
            children: (0, s.jsx)('div', {
                ...a,
                className: G.__invalid_container,
                children: r
            })
        });
    };
(X.Basic = q), (X.Gradient = K), (X.BasicAndGradient = Q), (n.ZP = X);
