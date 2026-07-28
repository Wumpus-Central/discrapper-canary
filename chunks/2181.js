"use strict";
n.d(t, { A: () => M });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(508770),
    o = n(935462),
    d = n(462824),
    c = n(315629),
    u = n(353795),
    _ = n(297264),
    E = n(834730),
    A = n(821609),
    h = n(398590),
    I = n(523527),
    f = n(976860),
    p = n(174459),
    T = n(676279),
    m = n(428262),
    g = n(732280),
    S = n(369805),
    N = n(862990),
    C = n(632150),
    O = n(792656),
    R = n(202541),
    L = n(652215),
    y = n(466919),
    D = n(375708),
    v = n(469867),
    b = n(617736);
function M(e) {
    let t,
        {
            title: n,
            description: a,
            analyticsLocationSection: M,
            upsellViewedTrackingData: P,
            onClose: U,
            onDisplay: w,
            onUpsellClicked: G,
            isEmojiPickerOverlay: x = !1,
        } = e;
    r.useEffect(() => {
        p.default.track(L.HAw.PREMIUM_UPSELL_VIEWED, P), w?.();
    }, [w, P]);
    let k = (0, g.V)(),
        F = r.useCallback(() => (0, m.LE)(k, R.pe.TIER_2) ?? D.intl.string(D.t.pj0XBN), [k]),
        V = (0, S.A)(R.pe.TIER_2),
        B = (0, N.O9)();
    return (
        (t = x
            ? (0, T.TM)()
                ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
                : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
            : (0, T.TM)()
              ? "https://cdn.discordapp.com/assets/content/f1a56c8da8561a47006a76435c179b24321640c79e997c64a71ef7a84c960829.mov"
              : "https://cdn.discordapp.com/assets/content/c6188b952b5f1901da6986f4f06d690db24c805dfed5df35db3537ed5efb35a5.webm"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.p, { onClick: U, isVisible: !0 }),
                (0, i.jsxs)(c.h, {
                    color: x ? "nitro-pink" : "green",
                    className: v.kL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: v.Qs,
                            children: [
                                (0, i.jsx)(o.s_, { "data-migration-pending": !0, onClick: U, className: v.b }),
                                (0, i.jsxs)("div", {
                                    className: v.hQ,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: b.headerGraphic,
                                            children: (0, i.jsx)(u.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                        }),
                                        null != V && (0, i.jsx)(l.E, { type: { text: V }, variant: "brand" }),
                                        (0, i.jsx)(_.D, {
                                            className: s()(v.DD, { [v.GU]: null != V }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: n,
                                        }),
                                        (0, i.jsx)(E.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: v.rf,
                                            children: a,
                                        }),
                                    ],
                                }),
                                x &&
                                    B &&
                                    (0, i.jsx)("div", {
                                        className: v.Zr,
                                        children: (0, i.jsx)(C.A, { subtitle: D.intl.string(y.default.BkJYQ5) }),
                                    }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: v.qr,
                            children: (0, i.jsxs)("div", {
                                className: v.UD,
                                children: [
                                    (0, i.jsx)(A.$, {
                                        variant: "secondary",
                                        onClick: function () {
                                            p.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, {
                                                location_section: M,
                                                location_object: L.ZSU.NAVIGATION_LINK,
                                            }),
                                                G?.(),
                                                (0, I.A)(),
                                                U(),
                                                (0, h.jH)(),
                                                (0, f.pX)(L.BVt.APPLICATION_STORE);
                                        },
                                        text: D.intl.string(D.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(O.A, {
                                        premiumModalAnalyticsLocation: { section: M, object: L.ZSU.BUTTON_CTA },
                                        subscriptionTier: R.pe.TIER_2,
                                        onClick: () => {
                                            U(), G?.();
                                        },
                                        defaultTextOverride: F(),
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
