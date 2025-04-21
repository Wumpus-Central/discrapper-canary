n.d(t, { Z: () => V }), n(388685);
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
    j = n(501862),
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
function w(e) {
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
}
let k = (e) => {
        var t, n;
        let { className: r } = e,
            { headingText: o, headingTop: c, headingBottom: d } = U(),
            m = g.default.getCurrentUser(),
            h = (0, l.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
            f = (0, C.N)(),
            b = null != h && h.status !== A.O0b.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
            _ = (0, u.Z)(),
            E = (0, x.C)('nitro-home', m) && _.isFractionalPremiumActive && !b;
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
                        d,
                        (0, i.jsxs)('div', {
                            className: R.buttonContainer,
                            children: [
                                E &&
                                    (0, i.jsx)(I.Z, {
                                        color: a.Ttl.BRAND,
                                        className: s()(R.button, R.subscribeButton),
                                        subscriptionTier: null != (n = null == f || null == (t = f.subscription_trial) ? void 0 : t.sku_id) ? n : null
                                    }),
                                (0, i.jsx)(S.Z, {
                                    color: E ? a.Ttl.WHITE : a.Ttl.BRAND,
                                    look: E ? a.zxk.Looks.OUTLINED : a.zxk.Looks.FILLED,
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
    L = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = E.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === E.p.VARIANT_2,
            { headingText: s, headingTop: l, headingBottom: o } = U();
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
                            o,
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
    B = () => {
        let { headingText: e } = U();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: Z,
                    alt: '',
                    className: R.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: R.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: R.contentV2,
                        children: [
                            (0, i.jsx)('div', {
                                className: R.reverseTrialHomeHeader,
                                children: (0, i.jsx)(a.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, i.jsx)(T.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [M, U] = (0, h.Z)(),
    V = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, _.W)(),
            a = (0, b._O)(),
            g = P.intl.string(P.t.qYKftb),
            p = (0, O.b)(n),
            h = (0, i.jsx)(k, { className: t }),
            x = P.intl.string(P.t.ifwQZW),
            E = !1,
            { fractionalState: C, endsAt: S } = (0, u.Z)(),
            T = (0, d.Z)(S, d.a.ENDS_IN);
        l ? ((x = P.intl.string(P.t.ifwQZW)), (h = (0, i.jsx)(B, {}))) : p && ((g = P.intl.string(P.t.qYKftb)), (x = P.intl.string(P.t.ifwQZW)), (h = (0, i.jsx)(L, { location: n })));
        let I = null;
        if (C !== y.a$.NONE && !l) {
            (a = !0), (g = P.intl.string(P.t.vaqFvb)), (E = !0);
            let e = P.intl.format(P.t['yR+oDA'], { helpCenterLink: f.Z.getArticleURL(A.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            I = (0, i.jsx)(m.Z, {
                text: e,
                'aria-label': e.toString(),
                tooltipClassName: R.tooltip,
                position: 'right',
                children: (e) => {
                    var t, n;
                    return (0, i.jsx)(
                        'div',
                        ((t = w({}, e)),
                        (n = n =
                            {
                                className: R.pillContainer,
                                children: (0, i.jsx)(j.Z, {
                                    countdownText: T,
                                    showInfoIcon: !0
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t)
                    );
                }
            });
        }
        let N = {
                className: s()(R.trialPill, { [R.hidden]: !a }),
                text: g,
                colorOptions: v.VE.PREMIUM_TIER_2_WHITE_FILL
            },
            D = E
                ? (0, i.jsx)('div', {
                      className: R.flexCentered,
                      children: (0, i.jsx)(v.mn, w({}, N))
                  })
                : (0, i.jsx)(v.Cy, w({}, N));
        return (0, i.jsx)(c.Gt, {
            value: r,
            children: (0, i.jsx)(M.Provider, {
                value: {
                    headingText: x,
                    headingTop: D,
                    headingBottom: I
                },
                children: h
            })
        });
    };
