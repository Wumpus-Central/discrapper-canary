"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508770),
    l = n(397927),
    u = n(398590),
    c = n(523527),
    d = n(976860),
    _ = n(954571),
    f = n(676279),
    p = n(927578),
    h = n(234419),
    m = n(792656),
    E = n(818415),
    g = n(788868),
    A = n(652215),
    I = n(985018),
    T = n(734920),
    S = n(22789),
    y = n(417294),
    v = n(947639),
    N = n(644242),
    C = n(309427);
function R(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: R,
            upsellViewedTrackingData: O,
            onClose: b,
            onDisplay: D,
            onLearnMore: L,
            isEmojiPickerOverlay: w = !1,
        } = e;
    i.useEffect(() => {
        _.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, O), D?.();
    }, [D, O]);
    let M = () => {
            _.default.track(A.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: R,
                location_object: A.ZSU.NAVIGATION_LINK,
            }),
                L?.(),
                (0, c.A)(),
                b(),
                (0, u.jH)(),
                (0, d.pX)(A.BVt.APPLICATION_STORE);
        },
        x = (0, h.V)(),
        P = i.useCallback(() => (0, p.LE)(x, g.pe.TIER_2) ?? I.intl.string(I.t.pj0XBN), [x]),
        k = (0, E.A)(g.pe.TIER_2);
    t = w ? ((0, f.TM)() ? y.A : v.A) : (0, f.TM)() ? N.A : C.A;
    let U = w ? "nitro-pink" : "green";
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.pkL, { onClick: b, isVisible: !0 }),
            (0, r.jsxs)(l.hLv, {
                color: U,
                className: T.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.Qs,
                        children: [
                            (0, r.jsx)(l.s_y, { "data-migration-pending": !0, onClick: b, className: T.b }),
                            (0, r.jsxs)("div", {
                                className: T.hQ,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: S.headerGraphic,
                                        children: (0, r.jsx)(l.vYh, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                    }),
                                    null != k && (0, r.jsx)(o.E, { type: { text: k }, variant: "brand" }),
                                    (0, r.jsx)(l.Heading, {
                                        className: a()(T.DD, { [T.GU]: null != k }),
                                        variant: "heading-xl/bold",
                                        color: "text-strong",
                                        children: n,
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: T.rf,
                                        children: s,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: T.qr,
                        children: (0, r.jsxs)("div", {
                            className: T.UD,
                            children: [
                                (0, r.jsx)(l.Button, {
                                    variant: "secondary",
                                    onClick: M,
                                    text: I.intl.string(I.t.ZnqyZ2),
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(m.A, {
                                    premiumModalAnalyticsLocation: { section: R, object: A.ZSU.BUTTON_CTA },
                                    subscriptionTier: g.pe.TIER_2,
                                    onClick: () => {
                                        b();
                                    },
                                    defaultTextOverride: P(),
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
