(n.d(t, { Z: () => V }), n(388685));
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
    p = n(594174),
    g = n(78839),
    h = n(975104),
    f = n(63063),
    b = n(367074),
    x = n(775412),
    _ = n(695349),
    E = n(249689),
    j = n(104494),
    O = n(639119),
    C = n(8647),
    S = n(533525),
    v = n(736519),
    T = n(784238),
    N = n(382791),
    I = n(184176),
    y = n(386733),
    A = n(474936),
    P = n(981631),
    R = n(388032),
    D = n(734664),
    Z = n(872905),
    w = n(578478);
let k = (e) => {
        var t, n;
        let { className: r } = e,
            { headingText: o, headingTop: c } = U(),
            d = p.default.getCurrentUser(),
            m = (0, l.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
            h = (0, O.N)(),
            f = (0, j.Ng)(),
            b = (0, j.Wp)(f, A.Si.TIER_2) ? A.Si.TIER_2 : void 0,
            x = null != m && m.status !== P.O0b.ACCOUNT_HOLD && m.hasAnyPremiumNitro,
            _ = (0, u.Z)(),
            C = (0, E.C)('nitro-home', d) && _.isFractionalPremiumActive && !x;
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
                            className: D.header,
                            children: o
                        }),
                        (0, i.jsxs)('div', {
                            className: D.heroHeadingOriginalButtonContainer,
                            children: [
                                C &&
                                    (0, i.jsx)(T.Z, {
                                        color: a.Ttl.BRAND,
                                        className: s()(D.button, D.subscribeButton),
                                        subscriptionTier: null != (n = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id) ? n : b
                                    }),
                                (0, i.jsx)('div', {
                                    className: D.premiumSubscribeButton,
                                    children: (0, i.jsx)(v.Z, {
                                        look: a.iLD.FILLED,
                                        color: a.Ttl.BRAND,
                                        textOptions: { textOverride: R.intl.string(R.t['3KomGR']) },
                                        className: D.button
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    L = () => {
        let { headingText: e, headingTop: t } = U();
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
                            t,
                            (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                className: D.header,
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: D.premiumSubscribeButton,
                                children: (0, i.jsx)(v.Z, {
                                    look: a.iLD.FILLED,
                                    color: a.Ttl.BRAND,
                                    textOptions: { textOverride: R.intl.string(R.t['3KomGR']) },
                                    className: D.button
                                })
                            }),
                            (0, i.jsx)(y.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    B = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: r } = U();
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
                        (0, i.jsxs)('div', {
                            className: D.reverseTrialHomeHeader,
                            children: [
                                r,
                                (0, i.jsx)(a.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    className: D.header,
                                    children: n
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: D.premiumSubscribeButton,
                            children: (0, i.jsx)(v.Z, {
                                look: a.iLD.FILLED,
                                color: a.Ttl.BRAND,
                                textOptions: { textOverride: R.intl.string(R.t['3KomGR']) },
                                className: D.button
                            })
                        }),
                        !t && (0, i.jsx)(I.Z, {}),
                        t && (0, i.jsx)(C.Z, { variant: C.C.SUBSCRIBER_HOME })
                    ]
                })
            ]
        });
    },
    [M, U] = (0, h.Z)(),
    V = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, _.W)(),
            p = (0, b.Vi)(),
            g = (0, x._O)(),
            h = R.intl.string(R.t.qYKftb),
            E = (0, S.b)(n),
            j = (0, i.jsx)(k, { className: t }),
            O = R.intl.string(R.t.ifwQZW),
            { fractionalState: C, endsAt: v } = (0, u.Z)(),
            T = (0, d.ZP)(v, d.aj.CREDITS_ENDS_IN);
        l || p ? ((O = R.intl.string(R.t.ifwQZW)), (j = (0, i.jsx)(B, { isEligibleForBogoPromotion: p }))) : E && ((h = R.intl.string(R.t.qYKftb)), (O = R.intl.string(R.t.ifwQZW)), (j = (0, i.jsx)(L, {})));
        let I = null;
        if (C === A.a$.NONE || l)
            I = (0, i.jsx)(N.Cy, {
                className: s()(D.trialPill, { [D.hidden]: !g }),
                text: h,
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
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        ((i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i));
                                    }));
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
            children: (0, i.jsx)(M.Provider, {
                value: {
                    headingText: O,
                    headingTop: I
                },
                children: j
            })
        });
    };
