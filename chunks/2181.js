"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508770),
    l = n(462824),
    d = n(315629),
    _ = n(935462),
    u = n(353795),
    c = n(534514),
    E = n(834730),
    h = n(821609),
    m = n(398590),
    f = n(523527),
    g = n(976860),
    p = n(954571),
    A = n(676279),
    I = n(927578),
    T = n(802705),
    S = n(234419),
    N = n(612669),
    C = n(632150),
    R = n(792656),
    O = n(818415),
    y = n(788868),
    v = n(652215),
    D = n(466919),
    L = n(985018),
    b = n(311779),
    w = n(967744);
function P(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: P,
            upsellViewedTrackingData: k,
            onClose: M,
            onDisplay: U,
            onLearnMore: x,
            isEmojiPickerOverlay: G = !1,
        } = e;
    r.useEffect(() => {
        p.default.track(v.HAw.PREMIUM_UPSELL_VIEWED, k), U?.();
    }, [U, k]);
    let V = (0, S.V)(),
        F = r.useCallback(() => (0, I.LE)(V, y.pe.TIER_2) ?? L.intl.string(L.t.pj0XBN), [V]),
        B = (0, O.A)(y.pe.TIER_2),
        H = (0, T.M)({ location: "premium_upsell_picker_overlay" }),
        j = (0, N.O9)();
    return (
        (t = G
            ? (0, A.TM)()
                ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
                : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
            : (0, A.TM)()
              ? "https://cdn.discordapp.com/assets/content/f1a56c8da8561a47006a76435c179b24321640c79e997c64a71ef7a84c960829.mov"
              : "https://cdn.discordapp.com/assets/content/c6188b952b5f1901da6986f4f06d690db24c805dfed5df35db3537ed5efb35a5.webm"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.p, { onClick: M, isVisible: !0 }),
                (0, i.jsxs)(d.h, {
                    color: G ? "nitro-pink" : "green",
                    className: b.kL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: b.Qs,
                            children: [
                                (0, i.jsx)(_.s_, { "data-migration-pending": !0, onClick: M, className: b.b }),
                                (0, i.jsxs)("div", {
                                    className: b.hQ,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: w.headerGraphic,
                                            children: (0, i.jsx)(u.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                        }),
                                        null != B && (0, i.jsx)(o.E, { type: { text: B }, variant: "brand" }),
                                        (0, i.jsx)(c.D, {
                                            className: a()(b.DD, { [b.GU]: null != B }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: n,
                                        }),
                                        (0, i.jsx)(E.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: b.rf,
                                            children: s,
                                        }),
                                    ],
                                }),
                                G &&
                                    H &&
                                    j &&
                                    (0, i.jsx)("div", {
                                        className: b.Zr,
                                        children: (0, i.jsx)(C.A, { subtitle: L.intl.string(D.default.BkJYQ5) }),
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
                                        onClick: () => {
                                            p.default.track(v.HAw.PREMIUM_PROMOTION_OPENED, {
                                                location_section: P,
                                                location_object: v.ZSU.NAVIGATION_LINK,
                                            }),
                                                x?.(),
                                                (0, f.A)(),
                                                M(),
                                                (0, m.jH)(),
                                                (0, g.pX)(v.BVt.APPLICATION_STORE);
                                        },
                                        text: L.intl.string(L.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(R.A, {
                                        premiumModalAnalyticsLocation: { section: P, object: v.ZSU.BUTTON_CTA },
                                        subscriptionTier: y.pe.TIER_2,
                                        onClick: () => {
                                            M();
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
