n.d(t, { Z: () => k }), n(47120);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(927359),
    d = n(975298),
    u = n(125529),
    m = n(975104),
    h = n(63063),
    g = n(775412),
    x = n(695349),
    _ = n(520540),
    p = n(501862),
    E = n(533525),
    C = n(197115),
    f = n(823188),
    T = n(184176),
    N = n(938736),
    S = n(386733),
    I = n(474936),
    b = n(981631),
    v = n(388032),
    j = n(951138),
    A = n(872905),
    O = n(578478);
let R = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: s, headingBottom: a } = Z();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: r()(j.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, i.jsx)('img', {
                        src: A,
                        alt: '',
                        className: j.headerArt
                    }),
                    (0, i.jsxs)('div', {
                        className: j.content,
                        children: [
                            s,
                            (0, i.jsx)(l.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            a,
                            (0, i.jsx)('div', {
                                className: j.buttonContainer,
                                children: (0, i.jsx)(C.Z, {
                                    color: l.Ttl.BRAND,
                                    buttonText: v.intl.string(v.t['3KomGR']),
                                    className: j.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    P = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = _.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            s = n === _.p.VARIANT_2,
            { headingText: r, headingTop: a, headingBottom: o } = Z();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: O,
                    alt: '',
                    className: j.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: j.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: j.contentV2,
                        children: [
                            a,
                            (0, i.jsx)(l.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: r
                            }),
                            o,
                            s &&
                                (0, i.jsx)('div', {
                                    className: j.buttonContainer,
                                    children: (0, i.jsx)(C.Z, {
                                        color: l.Ttl.BRAND,
                                        buttonText: v.intl.string(v.t['3KomGR']),
                                        className: j.button,
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
    D = () => {
        let { headingText: e } = Z();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: O,
                    alt: '',
                    className: j.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: j.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: j.contentV2,
                        children: [
                            (0, i.jsx)('div', {
                                className: j.reverseTrialHomeHeader,
                                children: (0, i.jsx)(l.X6q, {
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
    [y, Z] = (0, m.Z)(),
    k = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: s } = (0, o.ZP)(a.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, x.W)(),
            m = (0, g._O)(),
            _ = v.intl.string(v.t.qYKftb),
            C = (0, E.b)(n),
            T = (0, N.pn)(n),
            S = (0, i.jsx)(R, { className: t }),
            A = v.intl.string(v.t.ifwQZW),
            O = !1,
            { fractionalState: Z, endsAt: k } = (0, d.Z)(),
            L = (0, c.Z)(k, c.a.ENDS_IN);
        l ? ((A = v.intl.string(v.t.ifwQZW)), (S = (0, i.jsx)(D, {}))) : (C || T) && ((_ = v.intl.string(v.t.qYKftb)), (A = v.intl.string(v.t.ifwQZW)), (S = (0, i.jsx)(P, { location: n })));
        let B = null;
        if (Z !== I.a$.NONE && !l) {
            (m = !0), (_ = v.intl.string(v.t.vaqFvb)), (O = !0);
            let e = v.intl.format(v.t['yR+oDA'], { helpCenterLink: h.Z.getArticleURL(b.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            B = (0, i.jsx)(u.Z, {
                text: e,
                'aria-label': e.toString(),
                tooltipClassName: j.tooltip,
                position: 'right',
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        className: j.pillContainer,
                        children: (0, i.jsx)(p.Z, {
                            countdownText: L,
                            showInfoIcon: !0
                        })
                    })
            });
        }
        let M = {
                className: r()(j.trialPill, { [j.hidden]: !m }),
                text: _,
                colorOptions: f.VE.PREMIUM_TIER_2_WHITE_FILL
            },
            w = O
                ? (0, i.jsx)('div', {
                      className: j.flexCentered,
                      children: (0, i.jsx)(f.mn, { ...M })
                  })
                : (0, i.jsx)(f.Cy, { ...M });
        return (0, i.jsx)(o.Gt, {
            value: s,
            children: (0, i.jsx)(y.Provider, {
                value: {
                    headingText: A,
                    headingTop: w,
                    headingBottom: B
                },
                children: S
            })
        });
    };
