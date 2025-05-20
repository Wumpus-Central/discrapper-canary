n.d(t, { Z: () => F }), n(388685);
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(927359),
    u = n(975298),
    g = n(125529),
    m = n(594174),
    p = n(78839),
    h = n(975104),
    f = n(63063),
    b = n(775412),
    _ = n(695349),
    x = n(249689),
    E = n(464670),
    C = n(520540),
    j = n(104494),
    O = n(639119),
    S = n(533525),
    v = n(767714),
    T = n(382791),
    I = n(184176),
    N = n(409100),
    y = n(386733),
    A = n(474936),
    P = n(981631),
    R = n(388032),
    D = n(734664),
    Z = n(872905),
    w = n(578478),
    k = n(435635);
let L = (e) => {
        var t, n;
        let { className: r } = e,
            { headingText: o, headingTop: c } = G(),
            d = m.default.getCurrentUser(),
            g = (0, l.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
            h = (0, O.N)(),
            f = (0, j.Ng)(),
            b = (0, j.Wp)(f, A.Si.TIER_2) ? A.Si.TIER_2 : void 0,
            _ = null != g && g.status !== P.O0b.ACCOUNT_HOLD && g.hasAnyPremiumNitro,
            E = (0, u.Z)(),
            C = (0, x.C)('nitro-home', d) && E.isFractionalPremiumActive && !_;
        return (0, i.jsxs)('div', {
            className: s()(D.container, r),
            'data-testid': 'subscriber-nitro-home-hero-header',
            children: [
                (0, i.jsx)('img', {
                    src: Z,
                    alt: '',
                    className: D.headerArt
                }),
                (0, i.jsxs)('div', {
                    className: D.content,
                    children: [
                        c,
                        (0, i.jsx)(a.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            children: o
                        }),
                        (0, i.jsxs)('div', {
                            className: D.buttonContainer,
                            children: [
                                C &&
                                    (0, i.jsx)(N.Z, {
                                        color: a.Ttl.BRAND,
                                        className: s()(D.button, D.subscribeButton),
                                        subscriptionTier: null != (n = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id) ? n : b
                                    }),
                                (0, i.jsx)(v.Z, {
                                    color: C ? a.Ttl.WHITE : a.Ttl.BRAND,
                                    look: C ? a.zxk.Looks.OUTLINED : a.zxk.Looks.FILLED,
                                    textOptions: { textOverride: R.intl.string(R.t['3KomGR']) },
                                    className: D.button,
                                    isGift: !0
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    B = (e) => {
        let { location: t, giftingExperimentCohort: n } = e,
            { subscriberHomeVariant: r } = C.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            s = r === C.p.VARIANT_2,
            { headingText: l, headingTop: o } = G();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: w,
                    alt: '',
                    className: D.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: D.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: D.contentV2,
                        children: [
                            o,
                            (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: l
                            }),
                            ((e) => {
                                let { cohort: t } = e;
                                return t === E.XS.Variant1
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [s && (0, i.jsx)(M, {}), (0, i.jsx)(y.Z, {})]
                                      })
                                    : t === E.XS.Variant2
                                      ? void 0
                                      : (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                s &&
                                                    (0, i.jsx)('div', {
                                                        className: D.buttonContainer,
                                                        children: (0, i.jsx)(v.Z, {
                                                            showGradient: !0,
                                                            color: a.Ttl.BRAND,
                                                            textOptions: { textOverride: R.intl.string(R.t['3KomGR']) },
                                                            className: D.button,
                                                            isGift: !0
                                                        })
                                                    }),
                                                (0, i.jsx)(y.Z, {})
                                            ]
                                        });
                            })({ cohort: n })
                        ]
                    })
                })
            ]
        });
    },
    M = () =>
        (0, i.jsxs)('div', {
            className: D.giftingContainerHighVis,
            children: [
                (0, i.jsx)('img', {
                    src: k.Z,
                    alt: '',
                    className: D.giftingContainerHighVisIcon
                }),
                (0, i.jsxs)('div', {
                    className: D.giftingContainerHighVisDescription,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: 'text-lg/medium',
                            color: 'always-white',
                            children: R.intl.string(R.t.GyAbk5)
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'always-white',
                            children: R.intl.string(R.t.DNXdBA)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: D.giftingContainerHighVisButtonContainer,
                    children: (0, i.jsx)(v.Z, {
                        color: a.Ttl.WHITE,
                        textOptions: {
                            textOverride: R.intl.string(R.t.GyAbk5),
                            textClassName: D.giftingContainerHighVisButtonText
                        },
                        className: D.giftingContainerHighVisButton,
                        giftIconClassName: D.giftingContainerHighVisButton,
                        isGift: !0
                    })
                })
            ]
        }),
    U = () => {
        let { headingText: e } = G();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: w,
                    alt: '',
                    className: D.headerArtV2
                }),
                (0, i.jsxs)('div', {
                    className: D.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: [
                        (0, i.jsx)('div', {
                            className: D.reverseTrialHomeHeader,
                            children: (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: e
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: D.buttonContainer,
                            children: (0, i.jsx)(v.Z, {
                                color: a.Ttl.BRAND,
                                textOptions: { textOverride: R.intl.string(R.t['3KomGR']) },
                                className: D.button,
                                isGift: !0
                            })
                        }),
                        (0, i.jsx)(I.Z, {})
                    ]
                })
            ]
        });
    },
    [V, G] = (0, h.Z)(),
    F = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, _.W)().isInReverseTrial,
            m = (0, b._O)(),
            p = R.intl.string(R.t.qYKftb),
            h = (0, S.b)(n),
            x = (0, i.jsx)(L, { className: t }),
            C = R.intl.string(R.t.ifwQZW),
            { fractionalState: j, endsAt: O } = (0, u.Z)(),
            v = (0, d.ZP)(O, d.aj.CREDITS_ENDS_IN),
            I = E.PU.useExperiment({ location: 'HeroHeading' });
        l
            ? ((C = R.intl.string(R.t.ifwQZW)), (x = (0, i.jsx)(U, {})))
            : h &&
              ((p = R.intl.string(R.t.qYKftb)),
              (C = R.intl.string(R.t.ifwQZW)),
              (x = (0, i.jsx)(B, {
                  location: n,
                  giftingExperimentCohort: I.cohort
              })));
        let N = null;
        if (j === A.a$.NONE || l)
            N = (0, i.jsx)(T.Cy, {
                className: s()(D.trialPill, { [D.hidden]: !m }),
                text: p,
                colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL
            });
        else {
            m = !0;
            let e = (0, i.jsx)('div', {
                    className: D.pillIcon,
                    children: (0, i.jsx)(a.d3s, {
                        size: 'xxs',
                        color: 'var(--premium-tier-2-purple-for-gradients)'
                    })
                }),
                t = R.intl.format(R.t['yR+oDA'], { helpCenterLink: f.Z.getArticleURL(P.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            N = (0, i.jsx)(g.Z, {
                text: t,
                'aria-label': t.toString(),
                tooltipClassName: D.tooltip,
                position: 'right',
                children: (t) => {
                    var n, r;
                    return (0, i.jsx)(
                        'div',
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (r = r =
                            {
                                className: D.pillContainer,
                                children: (0, i.jsx)('div', {
                                    className: D.flexCentered,
                                    children: (0, i.jsx)(T.mn, {
                                        className: s()(D.trialPill, { [D.hidden]: !m }),
                                        text: v,
                                        colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL,
                                        icon: e,
                                        gap: !1
                                    })
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n)
                    );
                }
            });
        }
        return (0, i.jsx)(c.Gt, {
            value: r,
            children: (0, i.jsx)(V.Provider, {
                value: {
                    headingText: C,
                    headingTop: N
                },
                children: x
            })
        });
    };
