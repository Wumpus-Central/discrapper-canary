(n.d(t, { Z: () => G }), n(388685));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(755721),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(927359),
    m = n(975298),
    p = n(125529),
    g = n(594174),
    h = n(78839),
    f = n(975104),
    b = n(63063),
    x = n(367074),
    _ = n(775412),
    j = n(695349),
    E = n(249689),
    C = n(104494),
    O = n(639119),
    v = n(8647),
    S = n(533525),
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
            { headingText: c, headingTop: d } = V(),
            u = g.default.getCurrentUser(),
            p = (0, a.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            f = (0, O.N)(),
            b = (0, C.Ng)(),
            x = (0, C.Wp)(b, P.Si.TIER_2) ? P.Si.TIER_2 : void 0,
            _ = null != p && p.status !== R.O0b.ACCOUNT_HOLD && p.hasAnyPremiumNitro,
            j = (0, m.Z)(),
            v = (0, E.C)('nitro-home', u) && j.isFractionalPremiumActive && !_;
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
                        (0, i.jsx)(o.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            className: Z.header,
                            children: c
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.heroHeadingOriginalButtonContainer,
                            children: [
                                v &&
                                    (0, i.jsx)(I.Z, {
                                        color: l.Tt.BRAND,
                                        className: s()(Z.button, Z.subscribeButton),
                                        subscriptionTier: null != (n = null == f || null == (t = f.subscription_trial) ? void 0 : t.sku_id) ? n : x
                                    }),
                                (0, i.jsx)('div', {
                                    className: Z.premiumSubscribeButton,
                                    children: (0, i.jsx)(T.Z, {
                                        look: l.iL.FILLED,
                                        color: l.Tt.BRAND,
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
    B = () => {
        let { headingText: e, headingTop: t } = V();
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
                            t,
                            (0, i.jsx)(o.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                className: Z.header,
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: Z.premiumSubscribeButton,
                                children: (0, i.jsx)(T.Z, {
                                    look: l.iL.FILLED,
                                    color: l.Tt.BRAND,
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
                                (0, i.jsx)(o.X6q, {
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
                                look: l.iL.FILLED,
                                color: l.Tt.BRAND,
                                textOptions: { textOverride: D.intl.string(D.t['3KomGR']) },
                                className: Z.button
                            })
                        }),
                        !t && (0, i.jsx)(y.Z, {}),
                        t && (0, i.jsx)(v.Z, { variant: v.C.SUBSCRIBER_HOME })
                    ]
                })
            ]
        });
    },
    [U, V] = (0, f.Z)(),
    G = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            a = (0, j.W)(),
            l = (0, x.Vi)(),
            g = (0, _._O)(),
            h = D.intl.string(D.t.qYKftb),
            f = (0, S.b)(n),
            E = (0, i.jsx)(L, { className: t }),
            C = D.intl.string(D.t.ifwQZW),
            { fractionalState: O, endsAt: v } = (0, m.Z)(),
            T = (0, u.ZP)(v, u.aj.CREDITS_ENDS_IN);
        a || l ? ((C = D.intl.string(D.t.ifwQZW)), (E = (0, i.jsx)(M, { isEligibleForBogoPromotion: l }))) : f && ((h = D.intl.string(D.t.qYKftb)), (C = D.intl.string(D.t.ifwQZW)), (E = (0, i.jsx)(B, {})));
        let I = null;
        if (O === P.a$.NONE || a)
            I = (0, i.jsx)(N.Cy, {
                className: s()(Z.trialPill, { [Z.hidden]: !g }),
                text: h,
                colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL
            });
        else {
            g = !0;
            let e = (0, i.jsx)('div', {
                    className: Z.pillIcon,
                    children: (0, i.jsx)(o.d3s, {
                        size: 'xxs',
                        color: 'var(--premium-tier-2-purple-for-gradients)'
                    })
                }),
                t = D.intl.format(D.t['yR+oDA'], { helpCenterLink: b.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            I = (0, i.jsx)(p.Z, {
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
                                className: Z.pillContainer,
                                children: (0, i.jsx)('div', {
                                    className: Z.flexCentered,
                                    children: (0, i.jsx)(N.mn, {
                                        className: s()(Z.trialPill, { [Z.hidden]: !g }),
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
        return (0, i.jsx)(d.Gt, {
            value: r,
            children: (0, i.jsx)(U.Provider, {
                value: {
                    headingText: C,
                    headingTop: I
                },
                children: E
            })
        });
    };
