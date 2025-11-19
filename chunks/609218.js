n.d(t, {
    Z: () => k,
    p: () => M,
}),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(313666),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    f = n(37234),
    _ = n(174609),
    p = n(703656),
    h = n(626135),
    m = n(526167),
    g = n(74538),
    E = n(357355),
    b = n(283066),
    y = n(639119),
    O = n(638212),
    v = n(767714),
    I = n(717975),
    T = n(302945),
    S = n(474936),
    A = n(981631),
    C = n(388032),
    N = n(398068),
    R = n(885807),
    P = n(815847),
    D = n(428946),
    w = n(42948),
    L = n(109194),
    x = n(352812),
    M = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.PARENT_CONTAINER = 1)] = "PARENT_CONTAINER"),
            (e[(e.TAB_PARENT_CONTAINER = 2)] = "TAB_PARENT_CONTAINER"),
            e
        );
    })({});
function k(e) {
    let {
            containerContext: t,
            image: n,
            title: a,
            description: M,
            enableSocialProof: k,
            analyticsLocationSection: j,
            upsellViewedTrackingData: U,
            onClose: G,
            onDisplay: B,
            onLearnMore: Z,
            isEmojiPickerOverlay: F = !1,
        } = e,
        V = (0, l.e7)([E.Z], () => E.Z.affinities),
        H = (0, l.e7)([E.Z], () => E.Z.hasFetched);
    i.useEffect(() => {
        !H && k && d.MH();
    }, [H, k]),
        i.useEffect(() => {
            h.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, U), null == B || B();
        }, [B, U]);
    let Y = V.length > 1 && k,
        W = () => (2 === t ? R.hasTabParentContainer : 1 === t ? R.hasParentContainer : R.noParentContainer),
        K = () => {
            h.default.track(A.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: j,
                location_object: A.qAy.NAVIGATION_LINK,
            }),
                null == Z || Z(),
                (0, _.Z)(),
                G(),
                (0, f.xf)(),
                (0, p.uL)(A.Z5c.APPLICATION_STORE);
        },
        z = (0, y.N)(),
        q = i.useCallback(() => {
            var e;
            return null != (e = (0, g.fr)(z, S.Si.TIER_2)) ? e : C.intl.string(C.t.pj0XBN);
        }, [z]),
        X = (0, b.Z)({ location: "PremiumUpsellPickerOverlay" }),
        Q = (0, I.Z)(S.Si.TIER_2);
    if (X) {
        let e;
        e = F ? ((0, m.rO)() ? D.Z : w.Z) : (0, m.rO)() ? L.Z : x.Z;
        let t = F ? "nitro-pink" : "green";
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.ZMr, {
                    onClick: G,
                    isVisible: !0,
                }),
                (0, r.jsxs)(u.$1m, {
                    color: t,
                    className: N.container,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.content,
                            children: [
                                (0, r.jsx)(u.olH, {
                                    "data-migration-pending": !0,
                                    onClick: G,
                                    className: N.closeButton,
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.contentContainer,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: P.headerGraphic,
                                            children: (0, r.jsx)(u.zsu, {
                                                type: "video",
                                                src: e,
                                                loop: !0,
                                                loopAt: 5,
                                            }),
                                        }),
                                        null != Q && (0, r.jsx)(s.C, { type: { text: Q } }),
                                        (0, r.jsx)(u.Heading, {
                                            className: o()(N.title, { [N.withBadge]: null != Q }),
                                            variant: "heading-xl/bold",
                                            color: "header-primary",
                                            children: a,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            color: "text-secondary",
                                            className: N.body,
                                            children: M,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: N.footer,
                            children: (0, r.jsxs)("div", {
                                className: N.buttonContainer,
                                children: [
                                    (0, r.jsx)(u.Button, {
                                        variant: "secondary",
                                        onClick: K,
                                        text: C.intl.string(C.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(O.Z, {
                                        premiumModalAnalyticsLocation: {
                                            section: j,
                                            object: A.qAy.BUTTON_CTA,
                                        },
                                        subscriptionTier: S.Si.TIER_2,
                                        onClick: () => {
                                            G();
                                        },
                                        defaultTextOverride: q(),
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
            (0, r.jsx)(u.ZMr, {
                onClick: G,
                isVisible: !0,
            }),
            (0, r.jsxs)("div", {
                className: o()(R.container, W()),
                children: [
                    (0, r.jsx)(u.olH, {
                        "data-migration-pending": !0,
                        onClick: G,
                        className: R.closeButton,
                    }),
                    (0, r.jsxs)("div", {
                        className: R.contentContainer,
                        children: [
                            (0, r.jsx)("img", {
                                className: R.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: "Nitro Perk",
                            }),
                            (0, r.jsx)(u.Heading, {
                                className: o()(R.title, { [R.titleNoSocialProof]: !Y }),
                                variant: "heading-xl/bold",
                                children: a,
                            }),
                            Y && (0, r.jsx)(T.Z, { affinities: V }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                className: R.body,
                                children: M,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: R.ctaContainer,
                        children: [
                            (0, r.jsx)(c.zx, {
                                "data-migration-pending": !0,
                                className: R.secondaryCTA,
                                size: c.zx.Sizes.SMALL,
                                color: c.zx.Colors.CUSTOM,
                                look: c.zx.Looks.LINK,
                                onClick: K,
                                children: C.intl.string(C.t.ZnqyZ2),
                            }),
                            (0, r.jsx)(v.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: j,
                                    object: A.qAy.BUTTON_CTA,
                                },
                                subscriptionTier: S.Si.TIER_2,
                                size: c.zx.Sizes.SMALL,
                                color: c.zx.Colors.CUSTOM,
                                onClick: () => {
                                    G();
                                },
                                textOptions: { textOverride: q() },
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
