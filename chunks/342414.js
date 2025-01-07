n(47120);
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
    g = n(125529),
    m = n(78839),
    f = n(975104),
    p = n(63063),
    _ = n(775412),
    h = n(520540),
    x = n(501862),
    E = n(533525),
    b = n(197115),
    C = n(823188),
    v = n(184176),
    T = n(938736),
    N = n(386733),
    I = n(474936),
    S = n(981631),
    R = n(388032),
    j = n(477746),
    A = n(872905),
    P = n(578478);
let O = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: r, headingBottom: s } = y();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: a()(j.container, t),
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
                            r,
                            (0, i.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            s,
                            (0, i.jsx)('div', {
                                className: j.buttonContainer,
                                children: (0, i.jsx)(b.Z, {
                                    color: l.ButtonColors.BRAND,
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
            { subscriberHomeVariant: n } = h.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === h.p.VARIANT_2,
            { headingText: a, headingTop: s, headingBottom: o } = y();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: P,
                    alt: '',
                    className: j.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: j.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: j.contentV2,
                        children: [
                            s,
                            (0, i.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: a
                            }),
                            o,
                            r &&
                                (0, i.jsx)('div', {
                                    className: j.buttonContainer,
                                    children: (0, i.jsx)(b.Z, {
                                        color: l.ButtonColors.BRAND,
                                        buttonText: R.intl.string(R.t['3KomGR']),
                                        className: j.button,
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
                                children: (0, i.jsx)(l.Heading, {
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
    [B, y] = (0, f.Z)();
t.Z = (e) => {
    let { className: t, location: n } = e,
        { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        l = (0, s.e7)([m.ZP], () => m.ZP.inReverseTrial()),
        f = (0, _._O)(),
        h = R.intl.string(R.t.qYKftb),
        b = (0, E.b)(n),
        v = (0, T.pn)(n),
        N = (0, i.jsx)(O, { className: t }),
        A = R.intl.string(R.t.ifwQZW),
        P = !1,
        { fractionalState: y, endsAt: w } = (0, u.Z)(),
        k = (0, d.Z)(w, d.a.ENDS_IN);
    l ? ((A = R.intl.string(R.t.ifwQZW)), (N = (0, i.jsx)(M, {}))) : (b || v) && ((h = R.intl.string(R.t.qYKftb)), (A = R.intl.string(R.t.ifwQZW)), (N = (0, i.jsx)(Z, { location: n })));
    let L = null;
    if (y !== I.a$.NONE) {
        (f = !0), (h = R.intl.string(R.t.vaqFvb)), (P = !0);
        let e = R.intl.format(R.t['yR+oDA'], { helpCenterLink: p.Z.getArticleURL(S.BhN.FRACTIONAL_PREMIUM_ABOUT) });
        L = (0, i.jsx)(g.Z, {
            text: e,
            'aria-label': e.toString(),
            tooltipClassName: j.tooltip,
            position: 'right',
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    className: j.pillContainer,
                    children: (0, i.jsx)(x.Z, {
                        countdownText: k,
                        showInfoIcon: !0
                    })
                })
        });
    }
    let U = {
            className: a()(j.trialPill, { [j.hidden]: !f }),
            text: h,
            colorOptions: C.VE.PREMIUM_TIER_2_WHITE_FILL
        },
        D = P
            ? (0, i.jsx)('div', {
                  className: j.flexCentered,
                  children: (0, i.jsx)(C.mn, { ...U })
              })
            : (0, i.jsx)(C.Cy, { ...U });
    return (0, i.jsx)(c.Gt, {
        value: r,
        children: (0, i.jsx)(B.Provider, {
            value: {
                headingText: A,
                headingTop: D,
                headingBottom: L
            },
            children: N
        })
    });
};
