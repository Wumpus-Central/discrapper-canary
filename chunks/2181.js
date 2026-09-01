"use strict";
n.d(t, { A: () => w });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(508770),
    o = n(935462),
    u = n(462824),
    c = n(315629),
    d = n(305866),
    h = n(353795),
    m = n(297264),
    f = n(834730),
    p = n(821609),
    g = n(398590),
    x = n(523527),
    A = n(976860),
    E = n(174459),
    C = n(676279),
    I = n(158045),
    y = n(10392),
    S = n(82498),
    N = n(732280),
    v = n(369805),
    _ = n(862990),
    T = n(632150),
    j = n(792656),
    b = n(202541),
    R = n(652215),
    O = n(109447),
    M = n(375708),
    L = n(237790),
    k = n(592551);
function w(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: w,
            upsellViewedTrackingData: P,
            onClose: D,
            onDisplay: U,
            onUpsellClicked: G,
            isEmojiPickerOverlay: V = !1,
        } = e;
    i.useEffect(() => {
        E.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, P),
            (0, y.sq)(R.U7l.PREMIUM_UPSELL_VIEWED, P.location_stack, () =>
                (0, S.uq)(P.type, P.has_premium_stream_fps, P.has_premium_stream_resolution),
            ),
            U?.();
    }, [U, P]);
    let F = (0, N.V)(),
        H = i.useCallback(() => (0, I.LE)(F, b.pe.TIER_2) ?? M.intl.string(M.t.pj0XBN), [F]),
        B = (0, v.A)(b.pe.TIER_2),
        W = (0, _.O9)();
    return (
        (t = V
            ? (0, C.TM)()
                ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
                : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
            : (0, C.TM)()
              ? "https://cdn.discordapp.com/assets/content/f1a56c8da8561a47006a76435c179b24321640c79e997c64a71ef7a84c960829.mov"
              : "https://cdn.discordapp.com/assets/content/c6188b952b5f1901da6986f4f06d690db24c805dfed5df35db3537ed5efb35a5.webm"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.p, { onClick: D, isVisible: !0 }),
                (0, l.jsx)(c.h, {
                    color: V ? "nitro-pink" : "green",
                    className: L.kL,
                    children: (0, l.jsxs)(d.l, {
                        "aria-label": n,
                        className: L.r3,
                        children: [
                            (0, l.jsxs)("div", {
                                className: L.Qs,
                                children: [
                                    (0, l.jsx)(o.s_, { "data-migration-pending": !0, onClick: D, className: L.b }),
                                    (0, l.jsxs)("div", {
                                        className: L.hQ,
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: k.headerGraphic,
                                                children: (0, l.jsx)(h.v, {
                                                    type: "video",
                                                    src: t,
                                                    loop: !0,
                                                    loopAt: 5,
                                                }),
                                            }),
                                            null != B && (0, l.jsx)(a.E, { type: { text: B }, variant: "brand" }),
                                            (0, l.jsx)(m.D, {
                                                className: r()(L.DD, { [L.GU]: null != B }),
                                                variant: "heading-xl/bold",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            (0, l.jsx)(f.E, {
                                                variant: "text-md/medium",
                                                color: "text-subtle",
                                                className: L.rf,
                                                children: s,
                                            }),
                                        ],
                                    }),
                                    V &&
                                        W &&
                                        (0, l.jsx)("div", {
                                            className: L.Zr,
                                            children: (0, l.jsx)(T.A, { subtitle: M.intl.string(O.default.BkJYQ5) }),
                                        }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: L.qr,
                                children: (0, l.jsxs)("div", {
                                    className: L.UD,
                                    children: [
                                        (0, l.jsx)(p.$, {
                                            variant: "secondary",
                                            onClick: function () {
                                                E.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
                                                    location_section: w,
                                                    location_object: R.ZSU.NAVIGATION_LINK,
                                                }),
                                                    G?.(),
                                                    (0, x.A)(),
                                                    D(),
                                                    (0, g.jH)(),
                                                    (0, A.pX)(R.BVt.APPLICATION_STORE);
                                            },
                                            text: M.intl.string(M.t.ZnqyZ2),
                                            fullWidth: !0,
                                        }),
                                        (0, l.jsx)(j.A, {
                                            premiumModalAnalyticsLocation: { section: w, object: R.ZSU.BUTTON_CTA },
                                            subscriptionTier: b.pe.TIER_2,
                                            onClick: () => {
                                                D(), G?.();
                                            },
                                            defaultTextOverride: H(),
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
