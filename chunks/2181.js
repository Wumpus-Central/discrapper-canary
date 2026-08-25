"use strict";
n.d(t, { A: () => L });
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
    C = n(174459),
    E = n(676279),
    I = n(158045),
    y = n(732280),
    S = n(369805),
    v = n(862990),
    N = n(632150),
    _ = n(792656),
    T = n(202541),
    j = n(652215),
    b = n(109447),
    R = n(375708),
    O = n(237790),
    M = n(592551);
function L(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: L,
            upsellViewedTrackingData: w,
            onClose: k,
            onDisplay: P,
            onUpsellClicked: D,
            isEmojiPickerOverlay: U = !1,
        } = e;
    i.useEffect(() => {
        C.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, w), P?.();
    }, [P, w]);
    let G = (0, y.V)(),
        V = i.useCallback(() => (0, I.LE)(G, T.pe.TIER_2) ?? R.intl.string(R.t.pj0XBN), [G]),
        F = (0, S.A)(T.pe.TIER_2),
        H = (0, v.O9)();
    return (
        (t = U
            ? (0, E.TM)()
                ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
                : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
            : (0, E.TM)()
              ? "https://cdn.discordapp.com/assets/content/f1a56c8da8561a47006a76435c179b24321640c79e997c64a71ef7a84c960829.mov"
              : "https://cdn.discordapp.com/assets/content/c6188b952b5f1901da6986f4f06d690db24c805dfed5df35db3537ed5efb35a5.webm"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.p, { onClick: k, isVisible: !0 }),
                (0, l.jsx)(c.h, {
                    color: U ? "nitro-pink" : "green",
                    className: O.kL,
                    children: (0, l.jsxs)(d.l, {
                        "aria-label": n,
                        className: O.r3,
                        children: [
                            (0, l.jsxs)("div", {
                                className: O.Qs,
                                children: [
                                    (0, l.jsx)(o.s_, { "data-migration-pending": !0, onClick: k, className: O.b }),
                                    (0, l.jsxs)("div", {
                                        className: O.hQ,
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: M.headerGraphic,
                                                children: (0, l.jsx)(h.v, {
                                                    type: "video",
                                                    src: t,
                                                    loop: !0,
                                                    loopAt: 5,
                                                }),
                                            }),
                                            null != F && (0, l.jsx)(a.E, { type: { text: F }, variant: "brand" }),
                                            (0, l.jsx)(m.D, {
                                                className: r()(O.DD, { [O.GU]: null != F }),
                                                variant: "heading-xl/bold",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            (0, l.jsx)(f.E, {
                                                variant: "text-md/medium",
                                                color: "text-subtle",
                                                className: O.rf,
                                                children: s,
                                            }),
                                        ],
                                    }),
                                    U &&
                                        H &&
                                        (0, l.jsx)("div", {
                                            className: O.Zr,
                                            children: (0, l.jsx)(N.A, { subtitle: R.intl.string(b.default.BkJYQ5) }),
                                        }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: O.qr,
                                children: (0, l.jsxs)("div", {
                                    className: O.UD,
                                    children: [
                                        (0, l.jsx)(p.$, {
                                            variant: "secondary",
                                            onClick: function () {
                                                C.default.track(j.HAw.PREMIUM_PROMOTION_OPENED, {
                                                    location_section: L,
                                                    location_object: j.ZSU.NAVIGATION_LINK,
                                                }),
                                                    D?.(),
                                                    (0, x.A)(),
                                                    k(),
                                                    (0, g.jH)(),
                                                    (0, A.pX)(j.BVt.APPLICATION_STORE);
                                            },
                                            text: R.intl.string(R.t.ZnqyZ2),
                                            fullWidth: !0,
                                        }),
                                        (0, l.jsx)(_.A, {
                                            premiumModalAnalyticsLocation: { section: L, object: j.ZSU.BUTTON_CTA },
                                            subscriptionTier: T.pe.TIER_2,
                                            onClick: () => {
                                                k(), D?.();
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
