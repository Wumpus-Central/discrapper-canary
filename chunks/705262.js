n.d(t, {
    Yk: () => K,
    ZP: () => en,
    yH: () => H
}),
    n(314940),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(37234),
    f = n(153867),
    _ = n(607070),
    p = n(100527),
    h = n(906732),
    m = n(313201),
    g = n(540059),
    E = n(98278),
    b = n(639119),
    y = n(165583),
    O = n(587446),
    v = n(210887),
    I = n(740492),
    S = n(626135),
    T = n(238302),
    A = n(514361),
    N = n(803038),
    C = n(717953),
    P = n(583901),
    R = n(469115),
    w = n(981631),
    D = n(474936),
    L = n(874893),
    x = n(526761),
    k = n(231338),
    M = n(388032),
    j = n(622581);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Z(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var H = (function (e) {
    return (e.EDITOR = 'EDITOR'), (e.SETTINGS = 'SETTINGS'), e;
})({});
let Y = Object.freeze({
        EDITOR: x.fy.SLOW_USER_ACTION,
        SETTINGS: x.fy.INFREQUENT_USER_ACTION
    }),
    W = i.createContext({}),
    K = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        S.default.track(w.rMx.CLIENT_THEME_UPDATED, {
            feature_name: D.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r
        });
    },
    z = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e,
            o = (0, g.Q3)('GradientSelectorsTitle'),
            a = (0, s.EQ)({
                isVisualRefreshEnabled: o,
                type: t,
                isPreview: n,
                isCoachmark: i
            })
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0,
                        isPreview: !0
                    },
                    () => M.intl.string(M.t.D29k19)
                )
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0
                    },
                    () => M.intl.string(M.t['8+vbqa'])
                )
                .with({ isVisualRefreshEnabled: !0 }, () => M.intl.string(M.t.hjV0fX))
                .otherwise(() => M.intl.string(M.t.OCOOiI));
        return (0, r.jsxs)('div', {
            className: j.title,
            children: [
                (0, r.jsx)(u.X6q, {
                    'aria-label': a,
                    className: j.titleText,
                    variant: 'text-md/medium',
                    children: a
                }),
                (0, r.jsx)(O.Z, { className: j.premiumIcon })
            ]
        });
    },
    q = (e) => {
        var t, n;
        let { type: i, isPreview: o, isCoachmark: a } = e;
        if ((null == (n = (0, b.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === D.Si.TIER_2 && o) return null;
        let l = (0, s.EQ)({
            type: i,
            isPreview: o,
            isCoachmark: a
        })
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !0
                },
                () => M.intl.format(M.t.G8yQXl, { onPremiumClick: () => E.z })
            )
            .with(
                {
                    type: 'EDITOR',
                    isCoachmark: !0
                },
                () => M.intl.string(M.t.jmZiNj)
            )
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !1
                },
                () => M.intl.string(M.t.dqDFwc)
            )
            .with({ isPreview: !0 }, () => M.intl.format(M.t.DWIjJy, { onPremiumClick: () => E.z }))
            .otherwise(() => M.intl.string(M.t['np0X/v']));
        return (0, r.jsx)(u.X6q, {
            variant: 'text-sm/normal',
            className: j.subtext,
            children: l
        });
    },
    Q = (e) => {
        var t, n;
        let { renderCTAButtons: o, isCoachmark: a } = e,
            { type: s } = i.useContext(W),
            [c] = (0, l.Wu)([A.Z], () => [A.Z.isPreview]),
            u = (null == (n = (0, b.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === D.Si.TIER_2;
        return 'EDITOR' === s && c && u
            ? (0, r.jsx)(y.ZP, {
                  type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: D.Si.TIER_2,
                  children: M.intl.format(M.t.G8yQXl, { onPremiumClick: () => E.z })
              })
            : (0, r.jsxs)('div', {
                  className: j.header,
                  children: [
                      (0, r.jsxs)('div', {
                          className: j.headings,
                          children: [
                              (0, r.jsx)(z, {
                                  type: s,
                                  isPreview: c,
                                  isCoachmark: a
                              }),
                              (0, r.jsx)(q, {
                                  type: s,
                                  isPreview: c,
                                  isCoachmark: a
                              })
                          ]
                      }),
                      null == o ? void 0 : o()
                  ]
              });
    },
    X = (e) => {
        let { disabled: t } = e,
            { type: o, delay: a } = i.useContext(W),
            { analyticsLocations: s } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [m, g] = (0, l.Wu)([A.Z], () => {
                var e;
                return [A.Z.isPreview, null == (e = A.Z.gradientPreset) ? void 0 : e.id];
            }),
            [E, b] = i.useState(!1),
            [y, O] = i.useState(-1),
            v = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
            I = N.M.useExperiment({ location: 'GradientSelectors' }).enabled;
        i.useEffect(() => {
            ((y === R.XV.length - 2 && 'EDITOR' === o) || g === c.Us.EASTER_EGG) && b(!0);
        }, [y, o, g]);
        let S = (e, t) => {
                if (
                    ((0, T.zO)(e.id),
                    K({
                        isPersisted: !m,
                        analyticsLocations: s,
                        themeName: c.Us[e.id]
                    }),
                    (0, f.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: m ? L.KW.OFF : void 0
                        },
                        a
                    ),
                    null != t)
                ) {
                    if ((E && b(!1), t <= y || 0 === t)) return void O(0);
                    O((e) => e + 1);
                }
            },
            w = () => {
                if (!E) return null;
                let e = R.qt[c.Us.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
                    return e;
                }
                return (0, r.jsxs)('div', {
                    className: j.easterEggSelection,
                    children: [
                        (0, r.jsx)(P.DR, {
                            preset: e,
                            isSelected: g === c.Us.EASTER_EGG,
                            onSelect: () => S(e)
                        }),
                        (0, r.jsx)(u.Fmz, {
                            importData: t,
                            shouldAnimate: !v,
                            className: j.sparkles
                        })
                    ]
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                I &&
                    (0, r.jsx)(C.Z, {
                        onSelect: () => {
                            (0, T.Kq)(), (0, d.xf)();
                        }
                    }),
                R.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== c.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        P.DR,
                        {
                            preset: e,
                            isSelected: g === e.id,
                            onSelect: () => S(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1
                        },
                        e.id
                    )
                ),
                w()
            ]
        });
    },
    J = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: o } = e;
        return (0, r.jsxs)('section', {
            className: t,
            children: [
                (0, r.jsx)(Q, {
                    renderCTAButtons: n,
                    isCoachmark: o
                }),
                (0, r.jsx)('div', {
                    className: j.presets,
                    children: (0, r.jsx)(X, { disabled: i })
                })
            ]
        });
    },
    $ = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: o } = i.useContext(W),
            { analyticsLocations: a } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [s, c, u] = (0, l.Wu)([v.Z, I.ZP, A.Z], () => [v.Z.theme, null == A.Z.gradientPreset, I.ZP.useSystemTheme === L.KW.ON]),
            d = (e) => {
                (0, T.xs)(),
                    K({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: 'default '.concat(e)
                    }),
                    (0, f.ZI)({ theme: e }, o);
            },
            _ = (0, g.Q3)('appearance_settings');
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, r.jsx)(P.bD, {
                        theme: 'system',
                        isSelected: c && u,
                        onSelect: () => d('system')
                    }),
                (0, r.jsx)(P.bD, {
                    theme: k.BR.LIGHT,
                    isSelected: c && !u && s === k.BR.LIGHT,
                    onSelect: () => d(k.BR.LIGHT)
                }),
                (0, r.jsx)(P.bD, {
                    theme: k.BR.DARK,
                    isSelected: c && !u && s === k.BR.DARK,
                    onSelect: () => d(k.BR.DARK)
                }),
                _ &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(P.bD, {
                                theme: k.BR.DARKER,
                                isSelected: c && !u && s === k.BR.DARKER,
                                onSelect: () => d(k.BR.DARKER)
                            }),
                            (0, r.jsx)(P.bD, {
                                theme: k.BR.MIDNIGHT,
                                isSelected: c && !u && s === k.BR.MIDNIGHT,
                                onSelect: () => d(k.BR.MIDNIGHT)
                            })
                        ]
                    }),
                !n &&
                    !t &&
                    (0, r.jsx)(P.bD, {
                        theme: 'system',
                        isSelected: c && u,
                        onSelect: () => d('system')
                    })
            ]
        });
    },
    ee = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: o } = e;
        return (0, r.jsxs)('section', {
            className: n,
            children: [
                !t &&
                    (0, r.jsx)(Q, {
                        renderCTAButtons: i,
                        isCoachmark: o
                    }),
                t &&
                    o &&
                    (0, r.jsx)(u.X6q, {
                        className: j.upsellText,
                        variant: 'heading-sm/semibold',
                        children: M.intl.string(M.t.POSLGR)
                    }),
                (0, r.jsxs)('div', {
                    className: a()(j.presets, { [j.presetsJustify]: t }),
                    children: [(0, r.jsx)($, { systemSelectorFirst: !0 }), (0, r.jsx)(X, { disabled: !1 })]
                })
            ]
        });
    },
    et = (e) => {
        let { type: t, children: n } = e,
            o = (0, m.Dt)(),
            a = (0, u.arW)({
                orientation: 'horizontal',
                labelledBy: o
            }),
            { ref: s } = a,
            l = V(a, ['ref']),
            c = i.useMemo(
                () => ({
                    type: t,
                    delay: Y[t]
                }),
                [t]
            );
        return (0, r.jsx)(W.Provider, {
            value: c,
            children: (0, r.jsx)(
                'div',
                F(G({ ref: s }, l), {
                    className: j.__invalid_container,
                    children: n
                })
            )
        });
    };
(et.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)('section', {
        className: a()(j.presets, t),
        children: (0, r.jsx)($, { hideSystemSelector: n })
    });
}),
    (et.Gradient = J),
    (et.BasicAndGradient = ee);
let en = et;
