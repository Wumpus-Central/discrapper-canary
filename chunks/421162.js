"use strict";
n.d(t, { A: () => U });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508770),
    l = n(462824),
    u = n(315629),
    c = n(935462),
    d = n(608250),
    _ = n(534514),
    f = n(834730),
    p = n(821609),
    h = n(398590),
    E = n(523527),
    m = n(976860),
    g = n(954571),
    A = n(676279),
    I = n(927578),
    T = n(802705),
    S = n(234419),
    y = n(612669),
    N = n(632150),
    v = n(792656),
    C = n(818415),
    O = n(788868),
    R = n(652215),
    b = n(466919),
    D = n(985018),
    L = n(311779),
    w = n(967744),
    M = n(417294),
    P = n(947639),
    x = n(644242),
    k = n(309427);
function U(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: U,
            upsellViewedTrackingData: G,
            onClose: F,
            onDisplay: V,
            onLearnMore: B,
            isEmojiPickerOverlay: H = !1,
        } = e;
    i.useEffect(() => {
        g.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, G), V?.();
    }, [V, G]);
    let j = (0, S.V)(),
        Y = i.useCallback(() => (0, I.LE)(j, O.pe.TIER_2) ?? D.intl.string(D.t.pj0XBN), [j]),
        W = (0, C.A)(O.pe.TIER_2),
        K = (0, T.M)({ location: "premium_upsell_picker_overlay" }),
        $ = (0, y.O9)();
    return (
        (t = H ? ((0, A.TM)() ? M.A : P.A) : (0, A.TM)() ? x.A : k.A),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.p, { onClick: F, isVisible: !0 }),
                (0, r.jsxs)(u.h, {
                    color: H ? "nitro-pink" : "green",
                    className: L.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.Qs,
                            children: [
                                (0, r.jsx)(c.s_, { "data-migration-pending": !0, onClick: F, className: L.b }),
                                (0, r.jsxs)("div", {
                                    className: L.hQ,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: w.headerGraphic,
                                            children: (0, r.jsx)(d.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                        }),
                                        null != W && (0, r.jsx)(o.E, { type: { text: W }, variant: "brand" }),
                                        (0, r.jsx)(_.D, {
                                            className: a()(L.DD, { [L.GU]: null != W }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: n,
                                        }),
                                        (0, r.jsx)(f.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: L.rf,
                                            children: s,
                                        }),
                                    ],
                                }),
                                H &&
                                    K &&
                                    $ &&
                                    (0, r.jsx)("div", {
                                        className: L.Zr,
                                        children: (0, r.jsx)(N.A, { subtitle: D.intl.string(b.default.BkJYQ5) }),
                                    }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: L.qr,
                            children: (0, r.jsxs)("div", {
                                className: L.UD,
                                children: [
                                    (0, r.jsx)(p.$, {
                                        variant: "secondary",
                                        onClick: () => {
                                            g.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
                                                location_section: U,
                                                location_object: R.ZSU.NAVIGATION_LINK,
                                            }),
                                                B?.(),
                                                (0, E.A)(),
                                                F(),
                                                (0, h.jH)(),
                                                (0, m.pX)(R.BVt.APPLICATION_STORE);
                                        },
                                        text: D.intl.string(D.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(v.A, {
                                        premiumModalAnalyticsLocation: { section: U, object: R.ZSU.BUTTON_CTA },
                                        subscriptionTier: O.pe.TIER_2,
                                        onClick: () => {
                                            F();
                                        },
                                        defaultTextOverride: Y(),
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
