n.d(t, {
    A: () => M,
    N: () => j,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(508770),
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
    b = n(170887),
    y = n(234419),
    O = n(792656),
    A = n(465794),
    v = n(818415),
    S = n(841252),
    I = n(788868),
    T = n(652215),
    C = n(985018),
    N = n(734920),
    R = n(164884),
    w = n(22789),
    P = n(417294),
    D = n(947639),
    x = n(644242),
    L = n(309427),
    j = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.PARENT_CONTAINER = 1)] = "PARENT_CONTAINER"),
            (e[(e.TAB_PARENT_CONTAINER = 2)] = "TAB_PARENT_CONTAINER"),
            e
        );
    })({});
function M(e) {
    let {
            containerContext: t,
            image: n,
            title: a,
            description: j,
            enableSocialProof: M,
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
        !Y && M && d.xG();
    }, [Y, M]),
        i.useEffect(() => {
            h.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, U), null == V || V();
        }, [V, U]);
    let W = H.length > 1 && M,
        K = () => (2 === t ? R.vf : 1 === t ? R.oU : R.RK),
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
        q = (0, y.V)(),
        X = i.useCallback(() => {
            var e;
            return null != (e = (0, g.LE)(q, I.pe.TIER_2)) ? e : C.intl.string(C.t.pj0XBN);
        }, [q]),
        Z = (0, b.A)({ location: "PremiumUpsellPickerOverlay" }),
        Q = (0, v.A)(I.pe.TIER_2);
    if (Z) {
        let e;
        e = B ? ((0, m.TM)() ? P.A : D.A) : (0, m.TM)() ? x.A : L.A;
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
                                            className: w.headerGraphic,
                                            children: (0, r.jsx)(u.vYh, {
                                                type: "video",
                                                src: e,
                                                loop: !0,
                                                loopAt: 5,
                                            }),
                                        }),
                                        null != Q && (0, r.jsx)(o.E, { type: { text: Q } }),
                                        (0, r.jsx)(u.Heading, {
                                            className: s()(N.DD, { [N.GU]: null != Q }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: a,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: N.rf,
                                            children: j,
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
                                        subscriptionTier: I.pe.TIER_2,
                                        onClick: () => {
                                            G();
                                        },
                                        defaultTextOverride: X(),
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
                className: s()(R.kL, K()),
                children: [
                    (0, r.jsx)(u.s_y, {
                        "data-migration-pending": !0,
                        onClick: G,
                        className: R.b,
                    }),
                    (0, r.jsxs)("div", {
                        className: R.hQ,
                        children: [
                            (0, r.jsx)("img", {
                                className: R.Sl,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: "Nitro Perk",
                            }),
                            (0, r.jsx)(u.Heading, {
                                className: s()(R.DD, { [R.$z]: !W }),
                                variant: "heading-xl/bold",
                                children: a,
                            }),
                            W && (0, r.jsx)(S.A, { affinities: H }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                className: R.rf,
                                children: j,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: R.OQ,
                        children: [
                            (0, r.jsx)(c.$n, {
                                "data-migration-pending": !0,
                                className: R.vh,
                                size: c.$n.Sizes.SMALL,
                                color: c.$n.Colors.CUSTOM,
                                look: c.$n.Looks.LINK,
                                onClick: z,
                                children: C.intl.string(C.t.ZnqyZ2),
                            }),
                            (0, r.jsx)(A.A, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: k,
                                    object: T.ZSU.BUTTON_CTA,
                                },
                                subscriptionTier: I.pe.TIER_2,
                                size: c.$n.Sizes.SMALL,
                                color: c.$n.Colors.CUSTOM,
                                onClick: () => {
                                    G();
                                },
                                textOptions: { textOverride: X() },
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
