n.d(t, { Z: () => k }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(927359),
    u = n(975298),
    m = n(125529),
    g = n(78839),
    _ = n(975104),
    p = n(63063),
    f = n(775412),
    h = n(520540),
    x = n(501862),
    E = n(533525),
    C = n(197115),
    b = n(823188),
    v = n(184176),
    T = n(938736),
    N = n(386733),
    I = n(474936),
    R = n(981631),
    j = n(388032),
    S = n(198028),
    A = n(872905),
    P = n(578478);
let Z = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: r, headingBottom: s } = y();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: a()(S.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, i.jsx)('img', {
                        src: A,
                        alt: '',
                        className: S.headerArt
                    }),
                    (0, i.jsxs)('div', {
                        className: S.content,
                        children: [
                            r,
                            (0, i.jsx)(l.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            s,
                            (0, i.jsx)('div', {
                                className: S.buttonContainer,
                                children: (0, i.jsx)(C.Z, {
                                    color: l.Ttl.BRAND,
                                    buttonText: j.intl.string(j.t['3KomGR']),
                                    className: S.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    w = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = h.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === h.p.VARIANT_2,
            { headingText: a, headingTop: s, headingBottom: o } = y();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: P,
                    alt: '',
                    className: S.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: S.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: S.contentV2,
                        children: [
                            s,
                            (0, i.jsx)(l.X6q, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: a
                            }),
                            o,
                            r &&
                                (0, i.jsx)('div', {
                                    className: S.buttonContainer,
                                    children: (0, i.jsx)(C.Z, {
                                        color: l.Ttl.BRAND,
                                        buttonText: j.intl.string(j.t['3KomGR']),
                                        className: S.button,
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
    M = () => {
        let { headingText: e } = y();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: P,
                    alt: '',
                    className: S.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: S.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: S.contentV2,
                        children: [
                            (0, i.jsx)('div', {
                                className: S.reverseTrialHomeHeader,
                                children: (0, i.jsx)(l.X6q, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, i.jsx)(v.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [B, y] = (0, _.Z)(),
    k = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, s.e7)([g.ZP], () => g.ZP.inReverseTrial()),
            _ = (0, f._O)(),
            h = j.intl.string(j.t.qYKftb),
            C = (0, E.b)(n),
            v = (0, T.pn)(n),
            N = (0, i.jsx)(Z, { className: t }),
            A = j.intl.string(j.t.ifwQZW),
            P = !1,
            { fractionalState: y, endsAt: k } = (0, u.Z)(),
            O = (0, d.Z)(k, d.a.ENDS_IN);
        l ? ((A = j.intl.string(j.t.ifwQZW)), (N = (0, i.jsx)(M, {}))) : (C || v) && ((h = j.intl.string(j.t.qYKftb)), (A = j.intl.string(j.t.ifwQZW)), (N = (0, i.jsx)(w, { location: n })));
        let L = null;
        if (y !== I.a$.NONE) {
            (_ = !0), (h = j.intl.string(j.t.vaqFvb)), (P = !0);
            let e = j.intl.format(j.t['yR+oDA'], { helpCenterLink: p.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            L = (0, i.jsx)(m.Z, {
                text: e,
                'aria-label': e.toString(),
                tooltipClassName: S.tooltip,
                position: 'right',
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        className: S.pillContainer,
                        children: (0, i.jsx)(x.Z, {
                            countdownText: O,
                            showInfoIcon: !0
                        })
                    })
            });
        }
        let D = {
                className: a()(S.trialPill, { [S.hidden]: !_ }),
                text: h,
                colorOptions: b.VE.PREMIUM_TIER_2_WHITE_FILL
            },
            U = P
                ? (0, i.jsx)('div', {
                      className: S.flexCentered,
                      children: (0, i.jsx)(b.mn, { ...D })
                  })
                : (0, i.jsx)(b.Cy, { ...D });
        return (0, i.jsx)(c.Gt, {
            value: r,
            children: (0, i.jsx)(B.Provider, {
                value: {
                    headingText: A,
                    headingTop: U,
                    headingBottom: L
                },
                children: N
            })
        });
    };
