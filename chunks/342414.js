n.d(t, { Z: () => y }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(927359),
    d = n(975298),
    u = n(125529),
    m = n(975104),
    g = n(63063),
    _ = n(775412),
    p = n(695349),
    f = n(520540),
    h = n(501862),
    x = n(533525),
    E = n(197115),
    C = n(823188),
    b = n(184176),
    v = n(938736),
    T = n(386733),
    N = n(474936),
    I = n(981631),
    R = n(388032),
    j = n(198028),
    S = n(872905),
    A = n(578478);
let P = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: r, headingBottom: l } = B();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: a()(j.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, i.jsx)('img', {
                        src: S,
                        alt: '',
                        className: j.headerArt
                    }),
                    (0, i.jsxs)('div', {
                        className: j.content,
                        children: [
                            r,
                            (0, i.jsx)(s.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            l,
                            (0, i.jsx)('div', {
                                className: j.buttonContainer,
                                children: (0, i.jsx)(E.Z, {
                                    color: s.Ttl.BRAND,
                                    buttonText: R.intl.string(R.t['3KomGR']),
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
    Z = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = f.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === f.p.VARIANT_2,
            { headingText: a, headingTop: l, headingBottom: o } = B();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: A,
                    alt: '',
                    className: j.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: j.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: j.contentV2,
                        children: [
                            l,
                            (0, i.jsx)(s.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: a
                            }),
                            o,
                            r &&
                                (0, i.jsx)('div', {
                                    className: j.buttonContainer,
                                    children: (0, i.jsx)(E.Z, {
                                        color: s.Ttl.BRAND,
                                        buttonText: R.intl.string(R.t['3KomGR']),
                                        className: j.button,
                                        isGift: !0
                                    })
                                }),
                            (0, i.jsx)(T.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    w = () => {
        let { headingText: e } = B();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: A,
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
                                children: (0, i.jsx)(s.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, i.jsx)(b.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [M, B] = (0, m.Z)(),
    y = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, o.ZP)(l.Z.PREMIUM_MARKETING_HERO_CTA),
            s = (0, p.W)(),
            m = (0, _._O)(),
            f = R.intl.string(R.t.qYKftb),
            E = (0, x.b)(n),
            b = (0, v.pn)(n),
            T = (0, i.jsx)(P, { className: t }),
            S = R.intl.string(R.t.ifwQZW),
            A = !1,
            { fractionalState: B, endsAt: y } = (0, d.Z)(),
            k = (0, c.Z)(y, c.a.ENDS_IN);
        s ? ((S = R.intl.string(R.t.ifwQZW)), (T = (0, i.jsx)(w, {}))) : (E || b) && ((f = R.intl.string(R.t.qYKftb)), (S = R.intl.string(R.t.ifwQZW)), (T = (0, i.jsx)(Z, { location: n })));
        let O = null;
        if (B !== N.a$.NONE && !s) {
            (m = !0), (f = R.intl.string(R.t.vaqFvb)), (A = !0);
            let e = R.intl.format(R.t['yR+oDA'], { helpCenterLink: g.Z.getArticleURL(I.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            O = (0, i.jsx)(u.Z, {
                text: e,
                'aria-label': e.toString(),
                tooltipClassName: j.tooltip,
                position: 'right',
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        className: j.pillContainer,
                        children: (0, i.jsx)(h.Z, {
                            countdownText: k,
                            showInfoIcon: !0
                        })
                    })
            });
        }
        let L = {
                className: a()(j.trialPill, { [j.hidden]: !m }),
                text: f,
                colorOptions: C.VE.PREMIUM_TIER_2_WHITE_FILL
            },
            D = A
                ? (0, i.jsx)('div', {
                      className: j.flexCentered,
                      children: (0, i.jsx)(C.mn, { ...L })
                  })
                : (0, i.jsx)(C.Cy, { ...L });
        return (0, i.jsx)(o.Gt, {
            value: r,
            children: (0, i.jsx)(M.Provider, {
                value: {
                    headingText: S,
                    headingTop: D,
                    headingBottom: O
                },
                children: T
            })
        });
    };
