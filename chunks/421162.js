"use strict";
n.d(t, { A: () => D });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(508770),
    o = n(462824),
    c = n(315629),
    u = n(935462),
    d = n(608250),
    h = n(534514),
    m = n(834730),
    p = n(821609),
    f = n(398590),
    g = n(523527),
    _ = n(976860),
    x = n(954571),
    A = n(676279),
    C = n(927578),
    E = n(802705),
    I = n(234419),
    v = n(612669),
    y = n(632150),
    S = n(792656),
    b = n(818415),
    N = n(788868),
    T = n(652215),
    j = n(466919),
    R = n(985018),
    w = n(311779),
    L = n(967744),
    M = n(417294),
    k = n(947639),
    O = n(644242),
    P = n(309427);
function D(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: D,
            upsellViewedTrackingData: U,
            onClose: V,
            onDisplay: G,
            onLearnMore: F,
            isEmojiPickerOverlay: B = !1,
        } = e;
    l.useEffect(() => {
        x.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, U), G?.();
    }, [G, U]);
    let H = (0, I.V)(),
        W = l.useCallback(() => (0, C.LE)(H, N.pe.TIER_2) ?? R.intl.string(R.t.pj0XBN), [H]),
        K = (0, b.A)(N.pe.TIER_2),
        z = (0, E.M)({ location: "premium_upsell_picker_overlay" }),
        Z = (0, v.O9)();
    return (
        (t = B ? ((0, A.TM)() ? M.A : k.A) : (0, A.TM)() ? O.A : P.A),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.p, { onClick: V, isVisible: !0 }),
                (0, i.jsxs)(c.h, {
                    color: B ? "nitro-pink" : "green",
                    className: w.kL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: w.Qs,
                            children: [
                                (0, i.jsx)(u.s_, { "data-migration-pending": !0, onClick: V, className: w.b }),
                                (0, i.jsxs)("div", {
                                    className: w.hQ,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: L.headerGraphic,
                                            children: (0, i.jsx)(d.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                        }),
                                        null != K && (0, i.jsx)(a.E, { type: { text: K }, variant: "brand" }),
                                        (0, i.jsx)(h.D, {
                                            className: r()(w.DD, { [w.GU]: null != K }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: n,
                                        }),
                                        (0, i.jsx)(m.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: w.rf,
                                            children: s,
                                        }),
                                    ],
                                }),
                                B &&
                                    z &&
                                    Z &&
                                    (0, i.jsx)("div", {
                                        className: w.Zr,
                                        children: (0, i.jsx)(y.A, { subtitle: R.intl.string(j.default.BkJYQ5) }),
                                    }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: w.qr,
                            children: (0, i.jsxs)("div", {
                                className: w.UD,
                                children: [
                                    (0, i.jsx)(p.$, {
                                        variant: "secondary",
                                        onClick: () => {
                                            x.default.track(T.HAw.PREMIUM_PROMOTION_OPENED, {
                                                location_section: D,
                                                location_object: T.ZSU.NAVIGATION_LINK,
                                            }),
                                                F?.(),
                                                (0, g.A)(),
                                                V(),
                                                (0, f.jH)(),
                                                (0, _.pX)(T.BVt.APPLICATION_STORE);
                                        },
                                        text: R.intl.string(R.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(S.A, {
                                        premiumModalAnalyticsLocation: { section: D, object: T.ZSU.BUTTON_CTA },
                                        subscriptionTier: N.pe.TIER_2,
                                        onClick: () => {
                                            V();
                                        },
                                        defaultTextOverride: W(),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
