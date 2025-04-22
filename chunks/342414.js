n.d(t, { Z: () => M }), n(388685);
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
    g = n(594174),
    p = n(78839),
    h = n(975104),
    f = n(63063),
    b = n(775412),
    _ = n(695349),
    x = n(249689),
    E = n(520540),
    j = n(639119),
    C = n(533525),
    O = n(197115),
    S = n(823188),
    v = n(184176),
    T = n(409100),
    I = n(386733),
    N = n(474936),
    y = n(981631),
    A = n(388032),
    P = n(734664),
    R = n(872905),
    D = n(578478);
let Z = (e) => {
        var t, n;
        let { className: r } = e,
            { headingText: o, headingTop: c } = B(),
            d = g.default.getCurrentUser(),
            m = (0, l.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
            h = (0, j.N)(),
            f = null != m && m.status !== y.O0b.ACCOUNT_HOLD && m.hasAnyPremiumNitro,
            b = (0, u.Z)(),
            _ = (0, x.C)('nitro-home', d) && b.isFractionalPremiumActive && !f;
        return (0, i.jsxs)('div', {
            className: s()(P.container, r),
            'data-testid': 'subscriber-nitro-home-hero-header',
            children: [
                (0, i.jsx)('img', {
                    src: R,
                    alt: '',
                    className: P.headerArt
                }),
                (0, i.jsxs)('div', {
                    className: P.content,
                    children: [
                        c,
                        (0, i.jsx)(a.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            children: o
                        }),
                        (0, i.jsxs)('div', {
                            className: P.buttonContainer,
                            children: [
                                _ &&
                                    (0, i.jsx)(T.Z, {
                                        color: a.Ttl.BRAND,
                                        className: s()(P.button, P.subscribeButton),
                                        subscriptionTier: null != (n = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id) ? n : null
                                    }),
                                (0, i.jsx)(O.Z, {
                                    color: _ ? a.Ttl.WHITE : a.Ttl.BRAND,
                                    look: _ ? a.zxk.Looks.OUTLINED : a.zxk.Looks.FILLED,
                                    buttonText: A.intl.string(A.t['3KomGR']),
                                    className: P.button,
                                    isGift: !0
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    w = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = E.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === E.p.VARIANT_2,
            { headingText: s, headingTop: l } = B();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: D,
                    alt: '',
                    className: P.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: P.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: P.contentV2,
                        children: [
                            l,
                            (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: s
                            }),
                            r &&
                                (0, i.jsx)('div', {
                                    className: P.buttonContainer,
                                    children: (0, i.jsx)(O.Z, {
                                        color: a.Ttl.BRAND,
                                        buttonText: A.intl.string(A.t['3KomGR']),
                                        className: P.button,
                                        isGift: !0
                                    })
                                }),
                            (0, i.jsx)(I.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    k = () => {
        let { headingText: e } = B();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: D,
                    alt: '',
                    className: P.headerArtV2
                }),
                (0, i.jsxs)('div', {
                    className: P.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: [
                        (0, i.jsx)('div', {
                            className: P.reverseTrialHomeHeader,
                            children: (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: e
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: P.buttonContainer,
                            children: (0, i.jsx)(O.Z, {
                                color: a.Ttl.BRAND,
                                buttonText: A.intl.string(A.t['3KomGR']),
                                className: P.button,
                                isGift: !0
                            })
                        }),
                        (0, i.jsx)(v.Z, {})
                    ]
                })
            ]
        });
    },
    [L, B] = (0, h.Z)(),
    M = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, _.W)(),
            g = (0, b._O)(),
            p = A.intl.string(A.t.qYKftb),
            h = (0, C.b)(n),
            x = (0, i.jsx)(Z, { className: t }),
            E = A.intl.string(A.t.ifwQZW),
            { fractionalState: j, endsAt: O } = (0, u.Z)(),
            v = (0, d.Z)(O, d.a.CREDITS_ENDS_IN);
        l ? ((E = A.intl.string(A.t.ifwQZW)), (x = (0, i.jsx)(k, {}))) : h && ((p = A.intl.string(A.t.qYKftb)), (E = A.intl.string(A.t.ifwQZW)), (x = (0, i.jsx)(w, { location: n })));
        let T = null;
        if (j === N.a$.NONE || l)
            T = (0, i.jsx)(S.Cy, {
                className: s()(P.trialPill, { [P.hidden]: !g }),
                text: p,
                colorOptions: S.VE.PREMIUM_TIER_2_WHITE_FILL
            });
        else {
            g = !0;
            let e = (0, i.jsx)('div', {
                    className: P.pillIcon,
                    children: (0, i.jsx)(a.d3s, {
                        size: 'xxs',
                        color: 'var(--premium-tier-2-purple-for-gradients)'
                    })
                }),
                t = A.intl.format(A.t['yR+oDA'], { helpCenterLink: f.Z.getArticleURL(y.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            T = (0, i.jsx)(m.Z, {
                text: t,
                'aria-label': t.toString(),
                tooltipClassName: P.tooltip,
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
                                className: P.pillContainer,
                                children: (0, i.jsx)('div', {
                                    className: P.flexCentered,
                                    children: (0, i.jsx)(S.mn, {
                                        className: s()(P.trialPill, { [P.hidden]: !g }),
                                        text: v,
                                        colorOptions: S.VE.PREMIUM_TIER_2_WHITE_FILL,
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
            children: (0, i.jsx)(L.Provider, {
                value: {
                    headingText: E,
                    headingTop: T
                },
                children: x
            })
        });
    };
