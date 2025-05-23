n.d(t, { Z: () => H }), n(388685);
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
    m = n(125529),
    g = n(594174),
    p = n(78839),
    h = n(975104),
    f = n(63063),
    b = n(775412),
    _ = n(695349),
    x = n(249689),
    E = n(464670),
    C = n(520540),
    O = n(104494),
    j = n(639119),
    S = n(533525),
    v = n(784238),
    T = n(767714),
    N = n(382791),
    I = n(184176),
    y = n(386733),
    A = n(474936),
    P = n(981631),
    R = n(388032),
    D = n(734664),
    Z = n(872905),
    w = n(578478),
    k = n(435635);
let L = () =>
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
                            variant: 'text-lg/semibold',
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
                    children: (0, i.jsx)(T.Z, {
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
    B = (e) => {
        let { cohort: t } = e;
        return t === E.XS.Control
            ? (0, i.jsx)('div', {
                  className: D.buttonContainer,
                  children: (0, i.jsx)(T.Z, {
                      showGradient: !0,
                      color: a.Ttl.BRAND,
                      textOptions: { textOverride: R.intl.string(R.t['3KomGR']) },
                      className: D.button,
                      isGift: !0
                  })
              })
            : t === E.XS.Variant1
              ? (0, i.jsx)(L, {})
              : void 0;
    },
    M = (e) => {
        var t, n;
        let { className: r, giftingExperimentCohort: o } = e,
            { headingText: c, headingTop: d } = F(),
            m = g.default.getCurrentUser(),
            h = (0, l.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
            f = (0, j.N)(),
            b = (0, O.Ng)(),
            _ = (0, O.Wp)(b, A.Si.TIER_2) ? A.Si.TIER_2 : void 0,
            E = null != h && h.status !== P.O0b.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
            C = (0, u.Z)(),
            S = (0, x.C)('nitro-home', m) && C.isFractionalPremiumActive && !E;
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
                        d,
                        (0, i.jsx)(a.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            children: c
                        }),
                        (0, i.jsxs)('div', {
                            className: D.buttonContainer,
                            children: [
                                S &&
                                    (0, i.jsx)(v.Z, {
                                        color: a.Ttl.BRAND,
                                        className: s()(D.button, D.subscribeButton),
                                        subscriptionTier: null != (n = null == f || null == (t = f.subscription_trial) ? void 0 : t.sku_id) ? n : _
                                    }),
                                B({ cohort: o })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    U = (e) => {
        let { location: t, giftingExperimentCohort: n } = e,
            { subscriberHomeVariant: r } = C.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            s = r === C.p.VARIANT_2,
            { headingText: l, headingTop: o } = F();
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
                            s && B({ cohort: n }),
                            (0, i.jsx)(y.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    V = (e) => {
        let { giftingExperimentCohort: t } = e,
            { headingText: n } = F();
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
                                children: n
                            })
                        }),
                        B({ cohort: t }),
                        (0, i.jsx)(I.Z, {})
                    ]
                })
            ]
        });
    },
    [G, F] = (0, h.Z)(),
    H = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, _.W)(),
            g = (0, b._O)(),
            p = R.intl.string(R.t.qYKftb),
            h = E.PU.useExperiment({ location: 'HeroHeading' }),
            x = (0, S.b)(n),
            C = (0, i.jsx)(M, {
                className: t,
                giftingExperimentCohort: h.cohort
            }),
            O = R.intl.string(R.t.ifwQZW),
            { fractionalState: j, endsAt: v } = (0, u.Z)(),
            T = (0, d.ZP)(v, d.aj.CREDITS_ENDS_IN);
        l
            ? ((O = R.intl.string(R.t.ifwQZW)), (C = (0, i.jsx)(V, { giftingExperimentCohort: h.cohort })))
            : x &&
              ((p = R.intl.string(R.t.qYKftb)),
              (O = R.intl.string(R.t.ifwQZW)),
              (C = (0, i.jsx)(U, {
                  location: n,
                  giftingExperimentCohort: h.cohort
              })));
        let I = null;
        if (j === A.a$.NONE || l)
            I = (0, i.jsx)(N.Cy, {
                className: s()(D.trialPill, { [D.hidden]: !g }),
                text: p,
                colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL
            });
        else {
            g = !0;
            let e = (0, i.jsx)('div', {
                    className: D.pillIcon,
                    children: (0, i.jsx)(a.d3s, {
                        size: 'xxs',
                        color: 'var(--premium-tier-2-purple-for-gradients)'
                    })
                }),
                t = R.intl.format(R.t['yR+oDA'], { helpCenterLink: f.Z.getArticleURL(P.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            I = (0, i.jsx)(m.Z, {
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
                                    children: (0, i.jsx)(N.mn, {
                                        className: s()(D.trialPill, { [D.hidden]: !g }),
                                        text: T,
                                        colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL,
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
            children: (0, i.jsx)(G.Provider, {
                value: {
                    headingText: O,
                    headingTop: I
                },
                children: C
            })
        });
    };
