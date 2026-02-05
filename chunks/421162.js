"use strict";
n.d(t, { A: () => k, N: () => M });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(508770),
    l = n(311907),
    u = n(421380),
    c = n(397927),
    d = n(384904),
    _ = n(398590),
    f = n(523527),
    p = n(976860),
    h = n(954571),
    m = n(676279),
    g = n(927578),
    E = n(560138),
    A = n(170887),
    I = n(234419),
    T = n(792656),
    y = n(465794),
    S = n(818415),
    v = n(841252),
    C = n(788868),
    b = n(652215),
    N = n(985018),
    R = n(734920),
    O = n(164884),
    D = n(22789),
    L = n(417294),
    w = n(947639),
    x = n(644242),
    P = n(309427),
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
            analyticsLocationSection: U,
            upsellViewedTrackingData: G,
            onClose: V,
            onDisplay: F,
            onLearnMore: B,
            isEmojiPickerOverlay: j = !1,
        } = e,
        H = (0, l.bG)([E.A], () => E.A.affinities),
        Y = (0, l.bG)([E.A], () => E.A.hasFetched);
    i.useEffect(() => {
        !Y && k && d.xG();
    }, [Y, k]),
        i.useEffect(() => {
            h.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, G), F?.();
        }, [F, G]);
    let W = H.length > 1 && k,
        K = () => (2 === t ? O.vf : 1 === t ? O.oU : O.RK),
        z = () => {
            h.default.track(b.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: U,
                location_object: b.ZSU.NAVIGATION_LINK,
            }),
                B?.(),
                (0, f.A)(),
                V(),
                (0, _.jH)(),
                (0, p.pX)(b.BVt.APPLICATION_STORE);
        },
        $ = (0, I.V)(),
        q = i.useCallback(() => (0, g.LE)($, C.pe.TIER_2) ?? N.intl.string(N.t.pj0XBN), [$]),
        Z = (0, A.A)({ location: "PremiumUpsellPickerOverlay" }),
        Q = (0, S.A)(C.pe.TIER_2);
    if (Z) {
        let e;
        e = j ? ((0, m.TM)() ? L.A : w.A) : (0, m.TM)() ? x.A : P.A;
        let t = j ? "nitro-pink" : "green";
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.pkL, { onClick: V, isVisible: !0 }),
                (0, r.jsxs)(c.hLv, {
                    color: t,
                    className: R.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: R.Qs,
                            children: [
                                (0, r.jsx)(c.s_y, { "data-migration-pending": !0, onClick: V, className: R.b }),
                                (0, r.jsxs)("div", {
                                    className: R.hQ,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: D.headerGraphic,
                                            children: (0, r.jsx)(c.vYh, { type: "video", src: e, loop: !0, loopAt: 5 }),
                                        }),
                                        null != Q && (0, r.jsx)(o.E, { type: { text: Q }, variant: "brand" }),
                                        (0, r.jsx)(c.Heading, {
                                            className: s()(R.DD, { [R.GU]: null != Q }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: a,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: R.rf,
                                            children: M,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: R.qr,
                            children: (0, r.jsxs)("div", {
                                className: R.UD,
                                children: [
                                    (0, r.jsx)(c.Button, {
                                        variant: "secondary",
                                        onClick: z,
                                        text: N.intl.string(N.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(T.A, {
                                        premiumModalAnalyticsLocation: { section: U, object: b.ZSU.BUTTON_CTA },
                                        subscriptionTier: C.pe.TIER_2,
                                        onClick: () => {
                                            V();
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
            (0, r.jsx)(c.pkL, { onClick: V, isVisible: !0 }),
            (0, r.jsxs)("div", {
                className: s()(O.kL, K()),
                children: [
                    (0, r.jsx)(c.s_y, { "data-migration-pending": !0, onClick: V, className: O.b }),
                    (0, r.jsxs)("div", {
                        className: O.hQ,
                        children: [
                            (0, r.jsx)("img", {
                                className: O.Sl,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: "Nitro Perk",
                            }),
                            (0, r.jsx)(c.Heading, {
                                className: s()(O.DD, { [O.$z]: !W }),
                                variant: "heading-xl/bold",
                                children: a,
                            }),
                            W && (0, r.jsx)(v.A, { affinities: H }),
                            (0, r.jsx)(c.Text, { variant: "text-sm/medium", className: O.rf, children: M }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: O.OQ,
                        children: [
                            (0, r.jsx)(u.$n, {
                                "data-migration-pending": !0,
                                className: O.vh,
                                size: u.$n.Sizes.SMALL,
                                color: u.$n.Colors.CUSTOM,
                                look: u.$n.Looks.LINK,
                                onClick: z,
                                children: N.intl.string(N.t.ZnqyZ2),
                            }),
                            (0, r.jsx)(y.A, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: { section: U, object: b.ZSU.BUTTON_CTA },
                                subscriptionTier: C.pe.TIER_2,
                                size: u.$n.Sizes.SMALL,
                                color: u.$n.Colors.CUSTOM,
                                onClick: () => {
                                    V();
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
