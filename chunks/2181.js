"use strict";
n.d(t, { A: () => P });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(508770),
    o = n(935462),
    d = n(462824),
    c = n(315629),
    u = n(305866),
    _ = n(353795),
    E = n(297264),
    A = n(834730),
    h = n(821609),
    I = n(398590),
    f = n(523527),
    p = n(976860),
    T = n(174459),
    m = n(676279),
    g = n(158045),
    S = n(732280),
    N = n(369805),
    C = n(862990),
    R = n(632150),
    O = n(792656),
    L = n(202541),
    D = n(652215),
    y = n(466919),
    v = n(375708),
    b = n(469867),
    M = n(617736);
function P(e) {
    let t,
        {
            title: n,
            description: a,
            analyticsLocationSection: P,
            upsellViewedTrackingData: U,
            onClose: w,
            onDisplay: G,
            onUpsellClicked: x,
            isEmojiPickerOverlay: k = !1,
        } = e;
    r.useEffect(() => {
        T.default.track(D.HAw.PREMIUM_UPSELL_VIEWED, U), G?.();
    }, [G, U]);
    let F = (0, S.V)(),
        V = r.useCallback(() => (0, g.LE)(F, L.pe.TIER_2) ?? v.intl.string(v.t.pj0XBN), [F]),
        B = (0, N.A)(L.pe.TIER_2),
        H = (0, C.O9)();
    return (
        (t = k
            ? (0, m.TM)()
                ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
                : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
            : (0, m.TM)()
              ? "https://cdn.discordapp.com/assets/content/f1a56c8da8561a47006a76435c179b24321640c79e997c64a71ef7a84c960829.mov"
              : "https://cdn.discordapp.com/assets/content/c6188b952b5f1901da6986f4f06d690db24c805dfed5df35db3537ed5efb35a5.webm"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.p, { onClick: w, isVisible: !0 }),
                (0, i.jsx)(c.h, {
                    color: k ? "nitro-pink" : "green",
                    className: b.kL,
                    children: (0, i.jsxs)(u.l, {
                        "aria-label": n,
                        className: b.r3,
                        children: [
                            (0, i.jsxs)("div", {
                                className: b.Qs,
                                children: [
                                    (0, i.jsx)(o.s_, { "data-migration-pending": !0, onClick: w, className: b.b }),
                                    (0, i.jsxs)("div", {
                                        className: b.hQ,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: M.headerGraphic,
                                                children: (0, i.jsx)(_.v, {
                                                    type: "video",
                                                    src: t,
                                                    loop: !0,
                                                    loopAt: 5,
                                                }),
                                            }),
                                            null != B && (0, i.jsx)(l.E, { type: { text: B }, variant: "brand" }),
                                            (0, i.jsx)(E.D, {
                                                className: s()(b.DD, { [b.GU]: null != B }),
                                                variant: "heading-xl/bold",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            (0, i.jsx)(A.E, {
                                                variant: "text-md/medium",
                                                color: "text-subtle",
                                                className: b.rf,
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    k &&
                                        H &&
                                        (0, i.jsx)("div", {
                                            className: b.Zr,
                                            children: (0, i.jsx)(R.A, { subtitle: v.intl.string(y.default.BkJYQ5) }),
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: b.qr,
                                children: (0, i.jsxs)("div", {
                                    className: b.UD,
                                    children: [
                                        (0, i.jsx)(h.$, {
                                            variant: "secondary",
                                            onClick: function () {
                                                T.default.track(D.HAw.PREMIUM_PROMOTION_OPENED, {
                                                    location_section: P,
                                                    location_object: D.ZSU.NAVIGATION_LINK,
                                                }),
                                                    x?.(),
                                                    (0, f.A)(),
                                                    w(),
                                                    (0, I.jH)(),
                                                    (0, p.pX)(D.BVt.APPLICATION_STORE);
                                            },
                                            text: v.intl.string(v.t.ZnqyZ2),
                                            fullWidth: !0,
                                        }),
                                        (0, i.jsx)(O.A, {
                                            premiumModalAnalyticsLocation: { section: P, object: D.ZSU.BUTTON_CTA },
                                            subscriptionTier: L.pe.TIER_2,
                                            onClick: () => {
                                                w(), x?.();
                                            },
                                            defaultTextOverride: V(),
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
