n.d(t, { Z: () => U }), n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(927359),
    u = n(975298),
    m = n(125529),
    g = n(594174),
    p = n(78839),
    h = n(975104),
    f = n(63063),
    _ = n(775412),
    b = n(695349),
    N = n(249689),
    x = n(520540),
    E = n(501862),
    j = n(639119),
    C = n(533525),
    O = n(197115),
    S = n(823188),
    v = n(184176),
    T = n(409100),
    I = n(386733),
    y = n(474936),
    A = n(981631),
    P = n(388032),
    R = n(734664),
    D = n(872905),
    Z = n(578478);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let k = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: o, headingTop: c, headingBottom: d } = M(),
            m = g.default.getCurrentUser(),
            h = (0, a.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
            f = (0, j.N)(),
            _ = null != h && h.status !== A.O0b.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
            b = (0, u.Z)(),
            x = (0, N.C)('nitro-home', m) && b.isFractionalPremiumActive && !_;
        return (0, r.jsxs)('div', {
            className: s()(R.container, i),
            'data-testid': 'subscriber-nitro-home-hero-header',
            children: [
                (0, r.jsx)('img', {
                    src: D,
                    alt: '',
                    className: R.headerArt
                }),
                (0, r.jsxs)('div', {
                    className: R.content,
                    children: [
                        c,
                        (0, r.jsx)(l.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            children: o
                        }),
                        d,
                        (0, r.jsxs)('div', {
                            className: R.buttonContainer,
                            children: [
                                x &&
                                    (0, r.jsx)(T.Z, {
                                        color: l.Ttl.BRAND,
                                        className: s()(R.button, R.subscribeButton),
                                        subscriptionTier: null != (n = null == f || null == (t = f.subscription_trial) ? void 0 : t.sku_id) ? n : null
                                    }),
                                (0, r.jsx)(O.Z, {
                                    color: x ? l.Ttl.WHITE : l.Ttl.BRAND,
                                    look: x ? l.zxk.Looks.OUTLINED : l.zxk.Looks.FILLED,
                                    buttonText: P.NW.string(P.t['3KomGR']),
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
    W = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = x.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            i = n === x.p.VARIANT_2,
            { headingText: s, headingTop: a, headingBottom: o } = M();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    src: Z,
                    alt: '',
                    className: R.headerArtV2
                }),
                (0, r.jsx)('div', {
                    className: R.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, r.jsxs)('div', {
                        className: R.contentV2,
                        children: [
                            a,
                            (0, r.jsx)(l.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: s
                            }),
                            o,
                            i &&
                                (0, r.jsx)('div', {
                                    className: R.buttonContainer,
                                    children: (0, r.jsx)(O.Z, {
                                        color: l.Ttl.BRAND,
                                        buttonText: P.NW.string(P.t['3KomGR']),
                                        className: R.button,
                                        isGift: !0
                                    })
                                }),
                            (0, r.jsx)(I.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    L = () => {
        let { headingText: e } = M();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    src: Z,
                    alt: '',
                    className: R.headerArtV2
                }),
                (0, r.jsx)('div', {
                    className: R.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, r.jsxs)('div', {
                        className: R.contentV2,
                        children: [
                            (0, r.jsx)('div', {
                                className: R.reverseTrialHomeHeader,
                                children: (0, r.jsx)(l.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, r.jsx)(v.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [B, M] = (0, h.Z)(),
    U = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: i } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            a = (0, b.W)(),
            l = (0, _._O)(),
            g = P.NW.string(P.t.qYKftb),
            p = (0, C.b)(n),
            h = (0, r.jsx)(k, { className: t }),
            N = P.NW.string(P.t.ifwQZW),
            x = !1,
            { fractionalState: j, endsAt: O } = (0, u.Z)(),
            v = (0, d.Z)(O, d.a.ENDS_IN);
        a ? ((N = P.NW.string(P.t.ifwQZW)), (h = (0, r.jsx)(L, {}))) : p && ((g = P.NW.string(P.t.qYKftb)), (N = P.NW.string(P.t.ifwQZW)), (h = (0, r.jsx)(W, { location: n })));
        let T = null;
        if (j !== y.a$.NONE && !a) {
            (l = !0), (g = P.NW.string(P.t.vaqFvb)), (x = !0);
            let e = P.NW.format(P.t['yR+oDA'], { helpCenterLink: f.Z.getArticleURL(A.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            T = (0, r.jsx)(m.Z, {
                text: e,
                'aria-label': e.toString(),
                tooltipClassName: R.tooltip,
                position: 'right',
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        'div',
                        ((t = w({}, e)),
                        (n = n =
                            {
                                className: R.pillContainer,
                                children: (0, r.jsx)(E.Z, {
                                    countdownText: v,
                                    showInfoIcon: !0
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
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
        let I = {
                className: s()(R.trialPill, { [R.hidden]: !l }),
                text: g,
                colorOptions: S.VE.PREMIUM_TIER_2_WHITE_FILL
            },
            D = x
                ? (0, r.jsx)('div', {
                      className: R.flexCentered,
                      children: (0, r.jsx)(S.mn, w({}, I))
                  })
                : (0, r.jsx)(S.Cy, w({}, I));
        return (0, r.jsx)(c.Gt, {
            value: i,
            children: (0, r.jsx)(B.Provider, {
                value: {
                    headingText: N,
                    headingTop: D,
                    headingBottom: T
                },
                children: h
            })
        });
    };
