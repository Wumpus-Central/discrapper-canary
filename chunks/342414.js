n.d(t, { Z: () => G }), n(388685);
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
    b = n(367074),
    _ = n(775412),
    x = n(695349),
    E = n(249689),
    j = n(520540),
    C = n(104494),
    O = n(639119),
    S = n(8647),
    v = n(533525),
    T = n(736519),
    I = n(784238),
    N = n(382791),
    y = n(184176),
    A = n(386733),
    P = n(474936),
    R = n(981631),
    D = n(388032),
    Z = n(734664),
    w = n(872905),
    k = n(578478);
let L = (e) => {
        var t, n;
        let { className: r } = e,
            { headingText: o, headingTop: c } = V(),
            d = g.default.getCurrentUser(),
            m = (0, l.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
            h = (0, O.N)(),
            f = (0, C.Ng)(),
            b = (0, C.Wp)(f, P.Si.TIER_2) ? P.Si.TIER_2 : void 0,
            _ = null != m && m.status !== R.O0b.ACCOUNT_HOLD && m.hasAnyPremiumNitro,
            x = (0, u.Z)(),
            j = (0, E.C)('nitro-home', d) && x.isFractionalPremiumActive && !_;
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
                        c,
                        (0, i.jsx)(a.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            className: Z.header,
                            children: o
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.heroHeadingOriginalButtonContainer,
                            children: [
                                j &&
                                    (0, i.jsx)(I.Z, {
                                        color: a.Ttl.BRAND,
                                        className: s()(Z.button, Z.subscribeButton),
                                        subscriptionTier: null != (n = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id) ? n : b
                                    }),
                                (0, i.jsx)('div', {
                                    className: Z.premiumSubscribeButton,
                                    children: (0, i.jsx)(T.Z, {
                                        look: a.iLD.FILLED,
                                        color: a.Ttl.BRAND,
                                        textOptions: { textOverride: D.intl.string(D.t['3KomGR']) },
                                        className: Z.button
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    B = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = j.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === j.p.VARIANT_2,
            { headingText: s, headingTop: l } = V();
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
                            l,
                            (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                className: Z.header,
                                children: s
                            }),
                            r &&
                                (0, i.jsx)('div', {
                                    className: Z.premiumSubscribeButton,
                                    children: (0, i.jsx)(T.Z, {
                                        look: a.iLD.FILLED,
                                        color: a.Ttl.BRAND,
                                        textOptions: { textOverride: D.intl.string(D.t['3KomGR']) },
                                        className: Z.button
                                    })
                                }),
                            (0, i.jsx)(A.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    M = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: r } = V();
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
                        (0, i.jsxs)('div', {
                            className: Z.reverseTrialHomeHeader,
                            children: [
                                r,
                                (0, i.jsx)(a.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    className: Z.header,
                                    children: n
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: Z.premiumSubscribeButton,
                            children: (0, i.jsx)(T.Z, {
                                look: a.iLD.FILLED,
                                color: a.Ttl.BRAND,
                                textOptions: { textOverride: D.intl.string(D.t['3KomGR']) },
                                className: Z.button
                            })
                        }),
                        !t && (0, i.jsx)(y.Z, {}),
                        t && (0, i.jsx)(S.Z, { variant: S.C.SUBSCRIBER_HOME })
                    ]
                })
            ]
        });
    },
    [U, V] = (0, h.Z)(),
    G = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, x.W)(),
            g = (0, b.Vi)(),
            p = (0, _._O)(),
            h = D.intl.string(D.t.qYKftb),
            E = (0, v.b)(n),
            j = (0, i.jsx)(L, { className: t }),
            C = D.intl.string(D.t.ifwQZW),
            { fractionalState: O, endsAt: S } = (0, u.Z)(),
            T = (0, d.ZP)(S, d.aj.CREDITS_ENDS_IN);
        l || g ? ((C = D.intl.string(D.t.ifwQZW)), (j = (0, i.jsx)(M, { isEligibleForBogoPromotion: g }))) : E && ((h = D.intl.string(D.t.qYKftb)), (C = D.intl.string(D.t.ifwQZW)), (j = (0, i.jsx)(B, { location: n })));
        let I = null;
        if (O === P.a$.NONE || l)
            I = (0, i.jsx)(N.Cy, {
                className: s()(Z.trialPill, { [Z.hidden]: !p }),
                text: h,
                colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL
            });
        else {
            p = !0;
            let e = (0, i.jsx)('div', {
                    className: Z.pillIcon,
                    children: (0, i.jsx)(a.d3s, {
                        size: 'xxs',
                        color: 'var(--premium-tier-2-purple-for-gradients)'
                    })
                }),
                t = D.intl.format(D.t['yR+oDA'], { helpCenterLink: f.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            I = (0, i.jsx)(m.Z, {
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
                                    children: (0, i.jsx)(N.mn, {
                                        className: s()(Z.trialPill, { [Z.hidden]: !p }),
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
            children: (0, i.jsx)(U.Provider, {
                value: {
                    headingText: C,
                    headingTop: I
                },
                children: j
            })
        });
    };
