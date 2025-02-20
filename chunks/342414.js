n.d(t, { Z: () => k }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(927359),
    d = n(975298),
    u = n(125529),
    m = n(975104),
    g = n(63063),
    p = n(775412),
    h = n(695349),
    f = n(520540),
    b = n(501862),
    N = n(533525),
    x = n(197115),
    _ = n(823188),
    E = n(184176),
    j = n(938736),
    C = n(386733),
    O = n(474936),
    v = n(981631),
    S = n(388032),
    T = n(186854),
    I = n(872905),
    y = n(578478);
function A(e) {
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
let P = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: i, headingBottom: l } = w();
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
                className: s()(T.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, r.jsx)('img', {
                        src: I,
                        alt: '',
                        className: T.headerArt
                    }),
                    (0, r.jsxs)('div', {
                        className: T.content,
                        children: [
                            i,
                            (0, r.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            l,
                            (0, r.jsx)('div', {
                                className: T.buttonContainer,
                                children: (0, r.jsx)(x.Z, {
                                    color: a.Ttl.BRAND,
                                    buttonText: S.NW.string(S.t['3KomGR']),
                                    className: T.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    R = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = f.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            i = n === f.p.VARIANT_2,
            { headingText: s, headingTop: l, headingBottom: o } = w();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    src: y,
                    alt: '',
                    className: T.headerArtV2
                }),
                (0, r.jsx)('div', {
                    className: T.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, r.jsxs)('div', {
                        className: T.contentV2,
                        children: [
                            l,
                            (0, r.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: s
                            }),
                            o,
                            i &&
                                (0, r.jsx)('div', {
                                    className: T.buttonContainer,
                                    children: (0, r.jsx)(x.Z, {
                                        color: a.Ttl.BRAND,
                                        buttonText: S.NW.string(S.t['3KomGR']),
                                        className: T.button,
                                        isGift: !0
                                    })
                                }),
                            (0, r.jsx)(C.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    D = () => {
        let { headingText: e } = w();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    src: y,
                    alt: '',
                    className: T.headerArtV2
                }),
                (0, r.jsx)('div', {
                    className: T.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, r.jsxs)('div', {
                        className: T.contentV2,
                        children: [
                            (0, r.jsx)('div', {
                                className: T.reverseTrialHomeHeader,
                                children: (0, r.jsx)(a.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, r.jsx)(E.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [Z, w] = (0, m.Z)(),
    k = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: i } = (0, o.ZP)(l.Z.PREMIUM_MARKETING_HERO_CTA),
            a = (0, h.W)(),
            m = (0, p._O)(),
            f = S.NW.string(S.t.qYKftb),
            x = (0, N.b)(n),
            E = (0, j.pn)(n),
            C = (0, r.jsx)(P, { className: t }),
            I = S.NW.string(S.t.ifwQZW),
            y = !1,
            { fractionalState: w, endsAt: k } = (0, d.Z)(),
            W = (0, c.Z)(k, c.a.ENDS_IN);
        a ? ((I = S.NW.string(S.t.ifwQZW)), (C = (0, r.jsx)(D, {}))) : (x || E) && ((f = S.NW.string(S.t.qYKftb)), (I = S.NW.string(S.t.ifwQZW)), (C = (0, r.jsx)(R, { location: n })));
        let L = null;
        if (w !== O.a$.NONE && !a) {
            (m = !0), (f = S.NW.string(S.t.vaqFvb)), (y = !0);
            let e = S.NW.format(S.t['yR+oDA'], { helpCenterLink: g.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            L = (0, r.jsx)(u.Z, {
                text: e,
                'aria-label': e.toString(),
                tooltipClassName: T.tooltip,
                position: 'right',
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        'div',
                        ((t = A({}, e)),
                        (n = n =
                            {
                                className: T.pillContainer,
                                children: (0, r.jsx)(b.Z, {
                                    countdownText: W,
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
        let B = {
                className: s()(T.trialPill, { [T.hidden]: !m }),
                text: f,
                colorOptions: _.VE.PREMIUM_TIER_2_WHITE_FILL
            },
            M = y
                ? (0, r.jsx)('div', {
                      className: T.flexCentered,
                      children: (0, r.jsx)(_.mn, A({}, B))
                  })
                : (0, r.jsx)(_.Cy, A({}, B));
        return (0, r.jsx)(o.Gt, {
            value: i,
            children: (0, r.jsx)(Z.Provider, {
                value: {
                    headingText: I,
                    headingTop: M,
                    headingBottom: L
                },
                children: C
            })
        });
    };
