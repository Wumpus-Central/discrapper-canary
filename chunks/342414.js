n.d(t, { Z: () => K }), n(388685);
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
    _ = n(367074),
    x = n(775412),
    E = n(695349),
    j = n(249689),
    C = n(464670),
    O = n(520540),
    S = n(104494),
    v = n(639119),
    T = n(8647),
    N = n(533525),
    I = n(736519),
    y = n(784238),
    A = n(382791),
    P = n(184176),
    R = n(386733),
    D = n(474936),
    Z = n(981631),
    w = n(388032),
    k = n(734664),
    L = n(872905),
    B = n(578478),
    M = n(442886),
    U = n(307947);
let V = () => {
        let e = (0, o.ZP)(),
            t = (0, a.wjy)(e) ? M.Z : U.Z;
        return (0, i.jsxs)('div', {
            className: k.giftingContainerHighVis,
            children: [
                (0, i.jsx)('img', {
                    src: t,
                    alt: '',
                    className: k.giftingContainerHighVisIcon
                }),
                (0, i.jsxs)('div', {
                    className: k.giftingContainerHighVisDescription,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: 'text-lg/semibold',
                            color: 'header-primary',
                            children: w.intl.string(w.t.GyAbk5)
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'header-primary',
                            children: w.intl.string(w.t.DNXdBA)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: k.giftingContainerHighVisButtonContainer,
                    children: (0, i.jsx)(I.Z, {
                        look: a.iLD.FILLED,
                        color: a.Ttl.WHITE,
                        textOptions: { textOverride: w.intl.string(w.t.GyAbk5) },
                        className: k.giftingContainerHighVisButton
                    })
                })
            ]
        });
    },
    G = (e) => {
        let { cohort: t } = e;
        return t === C.XS.Control
            ? (0, i.jsx)('div', {
                  className: k.premiumSubscribeButton,
                  children: (0, i.jsx)(I.Z, {
                      look: a.iLD.FILLED,
                      color: a.Ttl.BRAND,
                      textOptions: { textOverride: w.intl.string(w.t['3KomGR']) },
                      className: k.button
                  })
              })
            : t === C.XS.Variant1
              ? (0, i.jsx)(V, {})
              : void 0;
    },
    F = (e) => {
        var t, n;
        let { className: r, giftingExperimentCohort: o } = e,
            { headingText: c, headingTop: d } = W(),
            u = p.default.getCurrentUser(),
            g = (0, l.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
            f = (0, v.N)(),
            b = (0, S.Ng)(),
            _ = (0, S.Wp)(b, D.Si.TIER_2) ? D.Si.TIER_2 : void 0,
            x = null != g && g.status !== Z.O0b.ACCOUNT_HOLD && g.hasAnyPremiumNitro,
            E = (0, m.Z)(),
            C = (0, j.C)('nitro-home', u) && E.isFractionalPremiumActive && !x;
        return (0, i.jsxs)('div', {
            className: s()(k.container, r),
            'data-testid': 'subscriber-nitro-home-hero-header',
            children: [
                (0, i.jsx)('img', {
                    src: L,
                    alt: '',
                    className: k.headerArt
                }),
                (0, i.jsxs)('div', {
                    className: k.content,
                    children: [
                        d,
                        (0, i.jsx)(a.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            className: k.header,
                            children: c
                        }),
                        (0, i.jsxs)('div', {
                            className: k.heroHeadingOriginalButtonContainer,
                            children: [
                                C &&
                                    (0, i.jsx)(y.Z, {
                                        color: a.Ttl.BRAND,
                                        className: s()(k.button, k.subscribeButton),
                                        subscriptionTier: null != (n = null == f || null == (t = f.subscription_trial) ? void 0 : t.sku_id) ? n : _
                                    }),
                                G({ cohort: o })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    H = (e) => {
        let { location: t, giftingExperimentCohort: n } = e,
            { subscriberHomeVariant: r } = O.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            s = r === O.p.VARIANT_2,
            { headingText: l, headingTop: o } = W();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: B,
                    alt: '',
                    className: k.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: k.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: k.contentV2,
                        children: [
                            o,
                            (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                className: k.header,
                                children: l
                            }),
                            s && G({ cohort: n }),
                            (0, i.jsx)(R.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    z = (e) => {
        let { isEligibleForBogoPromotion: t, giftingExperimentCohort: n } = e,
            { headingText: r, headingTop: s } = W();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: B,
                    alt: '',
                    className: k.headerArtV2
                }),
                (0, i.jsxs)('div', {
                    className: k.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: [
                        (0, i.jsxs)('div', {
                            className: k.reverseTrialHomeHeader,
                            children: [
                                s,
                                (0, i.jsx)(a.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    className: k.header,
                                    children: r
                                })
                            ]
                        }),
                        G({ cohort: n }),
                        !t && (0, i.jsx)(P.Z, {}),
                        t && (0, i.jsx)(T.Z, { variant: T.C.SUBSCRIBER_HOME })
                    ]
                })
            ]
        });
    },
    [Y, W] = (0, f.Z)(),
    K = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, E.W)(),
            o = (0, _.Vi)(),
            p = (0, x._O)(),
            h = w.intl.string(w.t.qYKftb),
            f = C.PU.useExperiment({ location: 'HeroHeading' }),
            j = (0, N.b)(n),
            O = (0, i.jsx)(F, {
                className: t,
                giftingExperimentCohort: f.cohort
            }),
            S = w.intl.string(w.t.ifwQZW),
            { fractionalState: v, endsAt: T } = (0, m.Z)(),
            I = (0, u.ZP)(T, u.aj.CREDITS_ENDS_IN);
        l || o
            ? ((S = w.intl.string(w.t.ifwQZW)),
              (O = (0, i.jsx)(z, {
                  isEligibleForBogoPromotion: o,
                  giftingExperimentCohort: f.cohort
              })))
            : j &&
              ((h = w.intl.string(w.t.qYKftb)),
              (S = w.intl.string(w.t.ifwQZW)),
              (O = (0, i.jsx)(H, {
                  location: n,
                  giftingExperimentCohort: f.cohort
              })));
        let y = null;
        if (v === D.a$.NONE || l)
            y = (0, i.jsx)(A.Cy, {
                className: s()(k.trialPill, { [k.hidden]: !p }),
                text: h,
                colorOptions: A.VE.PREMIUM_TIER_2_WHITE_FILL
            });
        else {
            p = !0;
            let e = (0, i.jsx)('div', {
                    className: k.pillIcon,
                    children: (0, i.jsx)(a.d3s, {
                        size: 'xxs',
                        color: 'var(--premium-tier-2-purple-for-gradients)'
                    })
                }),
                t = w.intl.format(w.t['yR+oDA'], { helpCenterLink: b.Z.getArticleURL(Z.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            y = (0, i.jsx)(g.Z, {
                text: t,
                'aria-label': t.toString(),
                tooltipClassName: k.tooltip,
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
                                className: k.pillContainer,
                                children: (0, i.jsx)('div', {
                                    className: k.flexCentered,
                                    children: (0, i.jsx)(A.mn, {
                                        className: s()(k.trialPill, { [k.hidden]: !p }),
                                        text: I,
                                        colorOptions: A.VE.PREMIUM_TIER_2_WHITE_FILL,
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
            children: (0, i.jsx)(Y.Provider, {
                value: {
                    headingText: S,
                    headingTop: y
                },
                children: O
            })
        });
    };
