n.d(t, { Z: () => W }), n(388685);
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(927359),
    m = n(975298),
    g = n(125529),
    p = n(594174),
    h = n(78839),
    f = n(975104),
    b = n(63063),
    _ = n(775412),
    x = n(695349),
    E = n(249689),
    C = n(464670),
    O = n(520540),
    j = n(104494),
    S = n(639119),
    v = n(533525),
    T = n(784238),
    N = n(767714),
    I = n(382791),
    y = n(184176),
    A = n(386733),
    P = n(474936),
    R = n(981631),
    D = n(388032),
    Z = n(734664),
    w = n(872905),
    k = n(578478),
    L = n(442886),
    B = n(307947);
let M = () => {
        let e = (0, o.ZP)(),
            t = (0, a.wjy)(e) ? L.Z : B.Z;
        return (0, i.jsxs)('div', {
            className: Z.giftingContainerHighVis,
            children: [
                (0, i.jsx)('img', {
                    src: t,
                    alt: '',
                    className: Z.giftingContainerHighVisIcon
                }),
                (0, i.jsxs)('div', {
                    className: Z.giftingContainerHighVisDescription,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: 'text-lg/semibold',
                            color: 'always-white',
                            children: D.intl.string(D.t.GyAbk5)
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'always-white',
                            children: D.intl.string(D.t.DNXdBA)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: Z.giftingContainerHighVisButtonContainer,
                    children: (0, i.jsx)(N.Z, {
                        color: a.Ttl.WHITE,
                        textOptions: {
                            textOverride: D.intl.string(D.t.GyAbk5),
                            textClassName: Z.giftingContainerHighVisButtonText
                        },
                        className: Z.giftingContainerHighVisButton,
                        giftIconClassName: Z.giftingContainerHighVisButton,
                        isGift: !0
                    })
                })
            ]
        });
    },
    U = (e) => {
        let { cohort: t } = e;
        return t === C.XS.Control
            ? (0, i.jsx)('div', {
                  className: Z.premiumSubscribeButton,
                  children: (0, i.jsx)(N.Z, {
                      showGradient: !0,
                      color: a.Ttl.BRAND,
                      textOptions: { textOverride: D.intl.string(D.t['3KomGR']) },
                      className: Z.button,
                      isGift: !0
                  })
              })
            : t === C.XS.Variant1
              ? (0, i.jsx)(M, {})
              : void 0;
    },
    V = (e) => {
        var t, n;
        let { className: r, giftingExperimentCohort: o } = e,
            { headingText: c, headingTop: d } = z(),
            u = p.default.getCurrentUser(),
            g = (0, l.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
            f = (0, S.N)(),
            b = (0, j.Ng)(),
            _ = (0, j.Wp)(b, P.Si.TIER_2) ? P.Si.TIER_2 : void 0,
            x = null != g && g.status !== R.O0b.ACCOUNT_HOLD && g.hasAnyPremiumNitro,
            C = (0, m.Z)(),
            O = (0, E.C)('nitro-home', u) && C.isFractionalPremiumActive && !x;
        return (0, i.jsxs)('div', {
            className: s()(Z.container, r),
            'data-testid': 'subscriber-nitro-home-hero-header',
            children: [
                (0, i.jsx)('img', {
                    src: w,
                    alt: '',
                    className: Z.headerArt
                }),
                (0, i.jsxs)('div', {
                    className: Z.content,
                    children: [
                        d,
                        (0, i.jsx)(a.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            className: Z.header,
                            children: c
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.heroHeadingOriginalButtonContainer,
                            children: [
                                O &&
                                    (0, i.jsx)(T.Z, {
                                        color: a.Ttl.BRAND,
                                        className: s()(Z.button, Z.subscribeButton),
                                        subscriptionTier: null != (n = null == f || null == (t = f.subscription_trial) ? void 0 : t.sku_id) ? n : _
                                    }),
                                U({ cohort: o })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    G = (e) => {
        let { location: t, giftingExperimentCohort: n } = e,
            { subscriberHomeVariant: r } = O.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            s = r === O.p.VARIANT_2,
            { headingText: l, headingTop: o } = z();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: k,
                    alt: '',
                    className: Z.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: Z.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: Z.contentV2,
                        children: [
                            o,
                            (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                className: Z.header,
                                children: l
                            }),
                            s && U({ cohort: n }),
                            (0, i.jsx)(A.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    F = (e) => {
        let { giftingExperimentCohort: t } = e,
            { headingText: n } = z();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: k,
                    alt: '',
                    className: Z.headerArtV2
                }),
                (0, i.jsxs)('div', {
                    className: Z.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: [
                        (0, i.jsx)('div', {
                            className: Z.reverseTrialHomeHeader,
                            children: (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                className: Z.header,
                                children: n
                            })
                        }),
                        U({ cohort: t }),
                        (0, i.jsx)(y.Z, {})
                    ]
                })
            ]
        });
    },
    [H, z] = (0, f.Z)(),
    W = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, x.W)(),
            o = (0, _._O)(),
            p = D.intl.string(D.t.qYKftb),
            h = C.PU.useExperiment({ location: 'HeroHeading' }),
            f = (0, v.b)(n),
            E = (0, i.jsx)(V, {
                className: t,
                giftingExperimentCohort: h.cohort
            }),
            O = D.intl.string(D.t.ifwQZW),
            { fractionalState: j, endsAt: S } = (0, m.Z)(),
            T = (0, u.ZP)(S, u.aj.CREDITS_ENDS_IN);
        l
            ? ((O = D.intl.string(D.t.ifwQZW)), (E = (0, i.jsx)(F, { giftingExperimentCohort: h.cohort })))
            : f &&
              ((p = D.intl.string(D.t.qYKftb)),
              (O = D.intl.string(D.t.ifwQZW)),
              (E = (0, i.jsx)(G, {
                  location: n,
                  giftingExperimentCohort: h.cohort
              })));
        let N = null;
        if (j === P.a$.NONE || l)
            N = (0, i.jsx)(I.Cy, {
                className: s()(Z.trialPill, { [Z.hidden]: !o }),
                text: p,
                colorOptions: I.VE.PREMIUM_TIER_2_WHITE_FILL
            });
        else {
            o = !0;
            let e = (0, i.jsx)('div', {
                    className: Z.pillIcon,
                    children: (0, i.jsx)(a.d3s, {
                        size: 'xxs',
                        color: 'var(--premium-tier-2-purple-for-gradients)'
                    })
                }),
                t = D.intl.format(D.t['yR+oDA'], { helpCenterLink: b.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            N = (0, i.jsx)(g.Z, {
                text: t,
                'aria-label': t.toString(),
                tooltipClassName: Z.tooltip,
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
                                className: Z.pillContainer,
                                children: (0, i.jsx)('div', {
                                    className: Z.flexCentered,
                                    children: (0, i.jsx)(I.mn, {
                                        className: s()(Z.trialPill, { [Z.hidden]: !o }),
                                        text: T,
                                        colorOptions: I.VE.PREMIUM_TIER_2_WHITE_FILL,
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
        return (0, i.jsx)(d.Gt, {
            value: r,
            children: (0, i.jsx)(H.Provider, {
                value: {
                    headingText: O,
                    headingTop: N
                },
                children: E
            })
        });
    };
