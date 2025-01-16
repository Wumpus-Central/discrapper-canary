n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(927359),
    u = n(975298),
    m = n(125529),
    g = n(78839),
    h = n(975104),
    p = n(63063),
    x = n(775412),
    f = n(520540),
    _ = n(501862),
    E = n(533525),
    C = n(197115),
    T = n(823188),
    S = n(184176),
    b = n(938736),
    I = n(386733),
    N = n(474936),
    v = n(981631),
    A = n(388032),
    j = n(779061),
    O = n(872905),
    R = n(578478);
let P = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: r, headingBottom: a } = Z();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: s()(j.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, i.jsx)('img', {
                        src: O,
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
                            a,
                            (0, i.jsx)('div', {
                                className: j.buttonContainer,
                                children: (0, i.jsx)(C.Z, {
                                    color: l.ButtonColors.BRAND,
                                    buttonText: A.intl.string(A.t['3KomGR']),
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
    y = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = f.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === f.p.VARIANT_2,
            { headingText: s, headingTop: a, headingBottom: o } = Z();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: R,
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
                            (0, i.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: s
                            }),
                            o,
                            r &&
                                (0, i.jsx)('div', {
                                    className: j.buttonContainer,
                                    children: (0, i.jsx)(C.Z, {
                                        color: l.ButtonColors.BRAND,
                                        buttonText: A.intl.string(A.t['3KomGR']),
                                        className: j.button,
                                        isGift: !0
                                    })
                                }),
                            (0, i.jsx)(I.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    B = () => {
        let { headingText: e } = Z();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: R,
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
                            (0, i.jsx)(S.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [D, Z] = (0, h.Z)();
t.Z = (e) => {
    let { className: t, location: n } = e,
        { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        l = (0, a.e7)([g.ZP], () => g.ZP.inReverseTrial()),
        h = (0, x._O)(),
        f = A.intl.string(A.t.qYKftb),
        C = (0, E.b)(n),
        S = (0, b.pn)(n),
        I = (0, i.jsx)(P, { className: t }),
        O = A.intl.string(A.t.ifwQZW),
        R = !1,
        { fractionalState: Z, endsAt: L } = (0, u.Z)(),
        M = (0, d.Z)(L, d.a.ENDS_IN);
    l ? ((O = A.intl.string(A.t.ifwQZW)), (I = (0, i.jsx)(B, {}))) : (C || S) && ((f = A.intl.string(A.t.qYKftb)), (O = A.intl.string(A.t.ifwQZW)), (I = (0, i.jsx)(y, { location: n })));
    let k = null;
    if (Z !== N.a$.NONE) {
        (h = !0), (f = A.intl.string(A.t.vaqFvb)), (R = !0);
        let e = A.intl.format(A.t['yR+oDA'], { helpCenterLink: p.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) });
        k = (0, i.jsx)(m.Z, {
            text: e,
            'aria-label': e.toString(),
            tooltipClassName: j.tooltip,
            position: 'right',
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    className: j.pillContainer,
                    children: (0, i.jsx)(_.Z, {
                        countdownText: M,
                        showInfoIcon: !0
                    })
                })
        });
    }
    let w = {
            className: s()(j.trialPill, { [j.hidden]: !h }),
            text: f,
            colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL
        },
        F = R
            ? (0, i.jsx)('div', {
                  className: j.flexCentered,
                  children: (0, i.jsx)(T.mn, { ...w })
              })
            : (0, i.jsx)(T.Cy, { ...w });
    return (0, i.jsx)(c.Gt, {
        value: r,
        children: (0, i.jsx)(D.Provider, {
            value: {
                headingText: O,
                headingTop: F,
                headingBottom: k
            },
            children: I
        })
    });
};
