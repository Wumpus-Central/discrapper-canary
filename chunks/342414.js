n.d(t, { Z: () => B }), n(47120);
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
    b = n(775412),
    N = n(695349),
    x = n(249689),
    _ = n(520540),
    E = n(501862),
    j = n(533525),
    O = n(197115),
    C = n(823188),
    S = n(184176),
    v = n(386733),
    T = n(474936),
    I = n(981631),
    y = n(388032),
    A = n(734664),
    P = n(872905),
    R = n(578478);
function D(e) {
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
let Z = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: i, headingBottom: o } = L(),
            c = g.default.getCurrentUser(),
            d = (0, a.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
            m = null != d && d.status !== I.O0b.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
            h = (0, u.Z)(),
            f = (0, x.$)('nitro-home', c) && h.isFractionalPremiumActive && !m;
        return (0, r.jsxs)('div', {
            className: s()(A.container, t),
            'data-testid': 'subscriber-nitro-home-hero-header',
            children: [
                (0, r.jsx)('img', {
                    src: P,
                    alt: '',
                    className: A.headerArt
                }),
                (0, r.jsxs)('div', {
                    className: A.content,
                    children: [
                        i,
                        (0, r.jsx)(l.X6q, {
                            variant: 'display-lg',
                            color: 'always-white',
                            children: n
                        }),
                        o,
                        (0, r.jsxs)('div', {
                            className: A.buttonContainer,
                            children: [
                                f &&
                                    (0, r.jsx)(O.Z, {
                                        color: l.Ttl.BRAND,
                                        buttonText: y.NW.string(y.t['2pG5GR']),
                                        className: s()(A.button, A.subscribeButton)
                                    }),
                                (0, r.jsx)(O.Z, {
                                    color: f ? l.Ttl.WHITE : l.Ttl.BRAND,
                                    look: f ? l.zxk.Looks.OUTLINED : l.zxk.Looks.FILLED,
                                    buttonText: y.NW.string(y.t['3KomGR']),
                                    className: A.button,
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
            { subscriberHomeVariant: n } = _.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            i = n === _.p.VARIANT_2,
            { headingText: s, headingTop: a, headingBottom: o } = L();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    src: R,
                    alt: '',
                    className: A.headerArtV2
                }),
                (0, r.jsx)('div', {
                    className: A.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, r.jsxs)('div', {
                        className: A.contentV2,
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
                                    className: A.buttonContainer,
                                    children: (0, r.jsx)(O.Z, {
                                        color: l.Ttl.BRAND,
                                        buttonText: y.NW.string(y.t['3KomGR']),
                                        className: A.button,
                                        isGift: !0
                                    })
                                }),
                            (0, r.jsx)(v.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    k = () => {
        let { headingText: e } = L();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    src: R,
                    alt: '',
                    className: A.headerArtV2
                }),
                (0, r.jsx)('div', {
                    className: A.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, r.jsxs)('div', {
                        className: A.contentV2,
                        children: [
                            (0, r.jsx)('div', {
                                className: A.reverseTrialHomeHeader,
                                children: (0, r.jsx)(l.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, r.jsx)(S.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [W, L] = (0, h.Z)(),
    B = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: i } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            a = (0, N.W)(),
            l = (0, b._O)(),
            g = y.NW.string(y.t.qYKftb),
            p = (0, j.b)(n),
            h = (0, r.jsx)(Z, { className: t }),
            x = y.NW.string(y.t.ifwQZW),
            _ = !1,
            { fractionalState: O, endsAt: S } = (0, u.Z)(),
            v = (0, d.Z)(S, d.a.ENDS_IN);
        a ? ((x = y.NW.string(y.t.ifwQZW)), (h = (0, r.jsx)(k, {}))) : p && ((g = y.NW.string(y.t.qYKftb)), (x = y.NW.string(y.t.ifwQZW)), (h = (0, r.jsx)(w, { location: n })));
        let P = null;
        if (O !== T.a$.NONE && !a) {
            (l = !0), (g = y.NW.string(y.t.vaqFvb)), (_ = !0);
            let e = y.NW.format(y.t['yR+oDA'], { helpCenterLink: f.Z.getArticleURL(I.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            P = (0, r.jsx)(m.Z, {
                text: e,
                'aria-label': e.toString(),
                tooltipClassName: A.tooltip,
                position: 'right',
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        'div',
                        ((t = D({}, e)),
                        (n = n =
                            {
                                className: A.pillContainer,
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
        let R = {
                className: s()(A.trialPill, { [A.hidden]: !l }),
                text: g,
                colorOptions: C.VE.PREMIUM_TIER_2_WHITE_FILL
            },
            L = _
                ? (0, r.jsx)('div', {
                      className: A.flexCentered,
                      children: (0, r.jsx)(C.mn, D({}, R))
                  })
                : (0, r.jsx)(C.Cy, D({}, R));
        return (0, r.jsx)(c.Gt, {
            value: i,
            children: (0, r.jsx)(W.Provider, {
                value: {
                    headingText: x,
                    headingTop: L,
                    headingBottom: P
                },
                children: h
            })
        });
    };
