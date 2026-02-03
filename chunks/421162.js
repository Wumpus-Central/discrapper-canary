n.d(t, {
    A: () => j,
    N: () => M,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(508770),
    l = n(311907),
    c = n(421380),
    u = n(397927),
    d = n(384904),
    f = n(398590),
    p = n(523527),
    _ = n(976860),
    h = n(954571),
    m = n(676279),
    g = n(927578),
    E = n(560138),
    y = n(170887),
    b = n(234419),
    O = n(792656),
    v = n(465794),
    A = n(818415),
    I = n(841252),
    S = n(788868),
    T = n(652215),
    C = n(985018),
    N = n(734920),
    w = n(164884),
    R = n(22789),
    P = n(417294),
    D = n(947639),
    L = n(644242),
    x = n(309427),
    M = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.PARENT_CONTAINER = 1)] = "PARENT_CONTAINER"),
            (e[(e.TAB_PARENT_CONTAINER = 2)] = "TAB_PARENT_CONTAINER"),
            e
        );
    })({});

function j(e) {
    let {
            containerContext: t,
            image: n,
            title: a,
            description: M,
            enableSocialProof: j,
            analyticsLocationSection: k,
            upsellViewedTrackingData: U,
            onClose: G,
            onDisplay: V,
            onLearnMore: F,
            isEmojiPickerOverlay: B = !1,
        } = e,
        H = (0, l.bG)([E.A], () => E.A.affinities),
        Y = (0, l.bG)([E.A], () => E.A.hasFetched);
    i.useEffect(() => {
        !Y && j && d.xG();
    }, [Y, j]),
        i.useEffect(() => {
            h.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, U), null == V || V();
        }, [V, U]);
    let W = H.length > 1 && j,
        K = () => (2 === t ? w.vf : 1 === t ? w.oU : w.RK),
        z = () => {
            h.default.track(T.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: k,
                location_object: T.ZSU.NAVIGATION_LINK,
            }),
                null == F || F(),
                (0, p.A)(),
                G(),
                (0, f.jH)(),
                (0, _.pX)(T.BVt.APPLICATION_STORE);
        },
        q = (0, b.V)(),
        Z = i.useCallback(() => {
            var e;
            return null != (e = (0, g.LE)(q, S.pe.TIER_2)) ? e : C.intl.string(C.t.pj0XBN);
        }, [q]),
        Q = (0, y.A)({
            location: "PremiumUpsellPickerOverlay",
        }),
        X = (0, A.A)(S.pe.TIER_2);
    if (Q) {
        let e;
        e = B ? ((0, m.TM)() ? P.A : D.A) : (0, m.TM)() ? L.A : x.A;
        let t = B ? "nitro-pink" : "green";
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.pkL, {
                    onClick: G,
                    isVisible: !0,
                }),
                (0, r.jsxs)(u.hLv, {
                    color: t,
                    className: N.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.Qs,
                            children: [
                                (0, r.jsx)(u.s_y, {
                                    "data-migration-pending": !0,
                                    onClick: G,
                                    className: N.b,
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.hQ,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: R.headerGraphic,
                                            children: (0, r.jsx)(u.vYh, {
                                                type: "video",
                                                src: e,
                                                loop: !0,
                                                loopAt: 5,
                                            }),
                                        }),
                                        null != X &&
                                            (0, r.jsx)(s.E, {
                                                type: {
                                                    text: X,
                                                },
                                                variant: "brand",
                                            }),
                                        (0, r.jsx)(u.Heading, {
                                            className: o()(N.DD, {
                                                [N.GU]: null != X,
                                            }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: a,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: N.rf,
                                            children: M,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: N.qr,
                            children: (0, r.jsxs)("div", {
                                className: N.UD,
                                children: [
                                    (0, r.jsx)(u.Button, {
                                        variant: "secondary",
                                        onClick: z,
                                        text: C.intl.string(C.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(O.A, {
                                        premiumModalAnalyticsLocation: {
                                            section: k,
                                            object: T.ZSU.BUTTON_CTA,
                                        },
                                        subscriptionTier: S.pe.TIER_2,
                                        onClick: () => {
                                            G();
                                        },
                                        defaultTextOverride: Z(),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.pkL, {
                onClick: G,
                isVisible: !0,
            }),
            (0, r.jsxs)("div", {
                className: o()(w.kL, K()),
                children: [
                    (0, r.jsx)(u.s_y, {
                        "data-migration-pending": !0,
                        onClick: G,
                        className: w.b,
                    }),
                    (0, r.jsxs)("div", {
                        className: w.hQ,
                        children: [
                            (0, r.jsx)("img", {
                                className: w.Sl,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: "Nitro Perk",
                            }),
                            (0, r.jsx)(u.Heading, {
                                className: o()(w.DD, {
                                    [w.$z]: !W,
                                }),
                                variant: "heading-xl/bold",
                                children: a,
                            }),
                            W &&
                                (0, r.jsx)(I.A, {
                                    affinities: H,
                                }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                className: w.rf,
                                children: M,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: w.OQ,
                        children: [
                            (0, r.jsx)(c.$n, {
                                "data-migration-pending": !0,
                                className: w.vh,
                                size: c.$n.Sizes.SMALL,
                                color: c.$n.Colors.CUSTOM,
                                look: c.$n.Looks.LINK,
                                onClick: z,
                                children: C.intl.string(C.t.ZnqyZ2),
                            }),
                            (0, r.jsx)(v.A, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: k,
                                    object: T.ZSU.BUTTON_CTA,
                                },
                                subscriptionTier: S.pe.TIER_2,
                                size: c.$n.Sizes.SMALL,
                                color: c.$n.Colors.CUSTOM,
                                onClick: () => {
                                    G();
                                },
                                textOptions: {
                                    textOverride: Z(),
                                },
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
