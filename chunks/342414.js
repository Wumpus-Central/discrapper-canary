n.d(t, { Z: () => k }), n(47120);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(927359),
    u = n(975298),
    m = n(125529),
    h = n(78839),
    g = n(975104),
    _ = n(63063),
    x = n(775412),
    p = n(520540),
    E = n(501862),
    C = n(533525),
    f = n(197115),
    T = n(823188),
    N = n(184176),
    I = n(938736),
    S = n(386733),
    b = n(474936),
    v = n(981631),
    j = n(388032),
    A = n(477746),
    O = n(872905),
    R = n(578478);
let P = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: s, headingBottom: l } = L();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: r()(A.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, i.jsx)('img', {
                        src: O,
                        alt: '',
                        className: A.headerArt
                    }),
                    (0, i.jsxs)('div', {
                        className: A.content,
                        children: [
                            s,
                            (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            l,
                            (0, i.jsx)('div', {
                                className: A.buttonContainer,
                                children: (0, i.jsx)(f.Z, {
                                    color: a.Ttl.BRAND,
                                    buttonText: j.intl.string(j.t['3KomGR']),
                                    className: A.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    D = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = p.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            s = n === p.p.VARIANT_2,
            { headingText: r, headingTop: l, headingBottom: o } = L();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: R,
                    alt: '',
                    className: A.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: A.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: A.contentV2,
                        children: [
                            l,
                            (0, i.jsx)(a.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: r
                            }),
                            o,
                            s &&
                                (0, i.jsx)('div', {
                                    className: A.buttonContainer,
                                    children: (0, i.jsx)(f.Z, {
                                        color: a.Ttl.BRAND,
                                        buttonText: j.intl.string(j.t['3KomGR']),
                                        className: A.button,
                                        isGift: !0
                                    })
                                }),
                            (0, i.jsx)(S.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    y = () => {
        let { headingText: e } = L();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: R,
                    alt: '',
                    className: A.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: A.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: A.contentV2,
                        children: [
                            (0, i.jsx)('div', {
                                className: A.reverseTrialHomeHeader,
                                children: (0, i.jsx)(a.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, i.jsx)(N.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [Z, L] = (0, g.Z)(),
    k = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: s } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            a = (0, l.e7)([h.ZP], () => h.ZP.inReverseTrial()),
            g = (0, x._O)(),
            p = j.intl.string(j.t.qYKftb),
            f = (0, C.b)(n),
            N = (0, I.pn)(n),
            S = (0, i.jsx)(P, { className: t }),
            O = j.intl.string(j.t.ifwQZW),
            R = !1,
            { fractionalState: L, endsAt: k } = (0, u.Z)(),
            B = (0, d.Z)(k, d.a.ENDS_IN);
        a ? ((O = j.intl.string(j.t.ifwQZW)), (S = (0, i.jsx)(y, {}))) : (f || N) && ((p = j.intl.string(j.t.qYKftb)), (O = j.intl.string(j.t.ifwQZW)), (S = (0, i.jsx)(D, { location: n })));
        let M = null;
        if (L !== b.a$.NONE) {
            (g = !0), (p = j.intl.string(j.t.vaqFvb)), (R = !0);
            let e = j.intl.format(j.t['yR+oDA'], { helpCenterLink: _.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            M = (0, i.jsx)(m.Z, {
                text: e,
                'aria-label': e.toString(),
                tooltipClassName: A.tooltip,
                position: 'right',
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        className: A.pillContainer,
                        children: (0, i.jsx)(E.Z, {
                            countdownText: B,
                            showInfoIcon: !0
                        })
                    })
            });
        }
        let w = {
                className: r()(A.trialPill, { [A.hidden]: !g }),
                text: p,
                colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL
            },
            V = R
                ? (0, i.jsx)('div', {
                      className: A.flexCentered,
                      children: (0, i.jsx)(T.mn, { ...w })
                  })
                : (0, i.jsx)(T.Cy, { ...w });
        return (0, i.jsx)(c.Gt, {
            value: s,
            children: (0, i.jsx)(Z.Provider, {
                value: {
                    headingText: O,
                    headingTop: V,
                    headingBottom: M
                },
                children: S
            })
        });
    };
