n.d(t, { Z: () => U }), n(388685);
var i = n(200651);
n(192379);
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
    b = n(775412),
    _ = n(695349),
    x = n(249689),
    E = n(520540),
    j = n(104494),
    C = n(639119),
    O = n(533525),
    S = n(197115),
    v = n(823188),
    T = n(184176),
    I = n(409100),
    N = n(386733),
    y = n(474936),
    A = n(981631),
    P = n(388032),
    R = n(734664),
    D = n(872905),
    Z = n(578478);
let w = (e) => {
        var t, n;
        let { className: r } = e,
            { headingText: o, headingTop: c } = B(),
            d = p.default.getCurrentUser(),
            m = (0, l.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
            h = (0, C.N)(),
            f = (0, j.Ng)(),
            b = (0, j.Wp)(f, y.Si.TIER_2) ? y.Si.TIER_2 : void 0,
            _ = null != m && m.status !== A.O0b.ACCOUNT_HOLD && m.hasAnyPremiumNitro,
            E = (0, u.Z)(),
            O = (0, x.C)('nitro-home', d) && E.isFractionalPremiumActive && !_;
        return (0, i.jsxs)('div', {
            className: s()(R.container, r),
            'data-testid': 'subscriber-nitro-home-hero-header',
            children: [
                (0, i.jsx)('img', {
                    src: D,
                    alt: '',
                    className: R.headerArt
                }),
                (0, i.jsxs)('div', {
                    className: R.content,
                    children: [
                        c,
                        (0, i.jsx)(a.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            children: o
                        }),
                        (0, i.jsxs)('div', {
                            className: R.buttonContainer,
                            children: [
                                O &&
                                    (0, i.jsx)(I.Z, {
                                        color: a.Ttl.BRAND,
                                        className: s()(R.button, R.subscribeButton),
                                        subscriptionTier: null != (n = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id) ? n : b
                                    }),
                                (0, i.jsx)(S.Z, {
                                    color: O ? a.Ttl.WHITE : a.Ttl.BRAND,
                                    look: O ? a.zxk.Looks.OUTLINED : a.zxk.Looks.FILLED,
                                    buttonText: P.intl.string(P.t['3KomGR']),
                                    className: R.button,
                                    isGift: !0
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    k = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = E.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === E.p.VARIANT_2,
            { headingText: s, headingTop: l } = B();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: Z,
                    alt: '',
                    className: R.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: R.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: R.contentV2,
                        children: [
                            l,
                            (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: s
                            }),
                            r &&
                                (0, i.jsx)('div', {
                                    className: R.buttonContainer,
                                    children: (0, i.jsx)(S.Z, {
                                        color: a.Ttl.BRAND,
                                        buttonText: P.intl.string(P.t['3KomGR']),
                                        className: R.button,
                                        isGift: !0
                                    })
                                }),
                            (0, i.jsx)(N.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    L = () => {
        let { headingText: e } = B();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: Z,
                    alt: '',
                    className: R.headerArtV2
                }),
                (0, i.jsxs)('div', {
                    className: R.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: [
                        (0, i.jsx)('div', {
                            className: R.reverseTrialHomeHeader,
                            children: (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: e
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: R.buttonContainer,
                            children: (0, i.jsx)(S.Z, {
                                color: a.Ttl.BRAND,
                                buttonText: P.intl.string(P.t['3KomGR']),
                                className: R.button,
                                isGift: !0
                            })
                        }),
                        (0, i.jsx)(T.Z, {})
                    ]
                })
            ]
        });
    },
    [M, B] = (0, h.Z)(),
    U = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, _.W)(),
            p = (0, b._O)(),
            g = P.intl.string(P.t.qYKftb),
            h = (0, O.b)(n),
            x = (0, i.jsx)(w, { className: t }),
            E = P.intl.string(P.t.ifwQZW),
            { fractionalState: j, endsAt: C } = (0, u.Z)(),
            S = (0, d.ZP)(C, d.aj.CREDITS_ENDS_IN);
        l ? ((E = P.intl.string(P.t.ifwQZW)), (x = (0, i.jsx)(L, {}))) : h && ((g = P.intl.string(P.t.qYKftb)), (E = P.intl.string(P.t.ifwQZW)), (x = (0, i.jsx)(k, { location: n })));
        let T = null;
        if (j === y.a$.NONE || l)
            T = (0, i.jsx)(v.Cy, {
                className: s()(R.trialPill, { [R.hidden]: !p }),
                text: g,
                colorOptions: v.VE.PREMIUM_TIER_2_WHITE_FILL
            });
        else {
            p = !0;
            let e = (0, i.jsx)('div', {
                    className: R.pillIcon,
                    children: (0, i.jsx)(a.d3s, {
                        size: 'xxs',
                        color: 'var(--premium-tier-2-purple-for-gradients)'
                    })
                }),
                t = P.intl.format(P.t['yR+oDA'], { helpCenterLink: f.Z.getArticleURL(A.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            T = (0, i.jsx)(m.Z, {
                text: t,
                'aria-label': t.toString(),
                tooltipClassName: R.tooltip,
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
                                className: R.pillContainer,
                                children: (0, i.jsx)('div', {
                                    className: R.flexCentered,
                                    children: (0, i.jsx)(v.mn, {
                                        className: s()(R.trialPill, { [R.hidden]: !p }),
                                        text: S,
                                        colorOptions: v.VE.PREMIUM_TIER_2_WHITE_FILL,
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
                    headingText: E,
                    headingTop: T
                },
                children: x
            })
        });
    };
