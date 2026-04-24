"use strict";
n.d(t, { A: () => k });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(508770),
    o = n(462824),
    c = n(315629),
    u = n(935462),
    d = n(353795),
    h = n(534514),
    m = n(834730),
    p = n(821609),
    f = n(398590),
    g = n(523527),
    _ = n(976860),
    x = n(954571),
    C = n(676279),
    A = n(927578),
    E = n(802705),
    I = n(234419),
    v = n(612669),
    y = n(632150),
    b = n(792656),
    S = n(818415),
    N = n(788868),
    j = n(652215),
    T = n(466919),
    w = n(985018),
    R = n(311779),
    L = n(967744);
function k(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: k,
            upsellViewedTrackingData: M,
            onClose: O,
            onDisplay: P,
            onLearnMore: D,
            isEmojiPickerOverlay: U = !1,
        } = e;
    i.useEffect(() => {
        x.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, M), P?.();
    }, [P, M]);
    let V = (0, I.V)(),
        G = i.useCallback(() => (0, A.LE)(V, N.pe.TIER_2) ?? w.intl.string(w.t.pj0XBN), [V]),
        F = (0, S.A)(N.pe.TIER_2),
        B = (0, E.M)({ location: "premium_upsell_picker_overlay" }),
        H = (0, v.O9)();
    return (
        (t = U
            ? (0, C.TM)()
                ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
                : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
            : (0, C.TM)()
              ? "https://cdn.discordapp.com/assets/content/f1a56c8da8561a47006a76435c179b24321640c79e997c64a71ef7a84c960829.mov"
              : "https://cdn.discordapp.com/assets/content/c6188b952b5f1901da6986f4f06d690db24c805dfed5df35db3537ed5efb35a5.webm"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.p, { onClick: O, isVisible: !0 }),
                (0, l.jsxs)(c.h, {
                    color: U ? "nitro-pink" : "green",
                    className: R.kL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: R.Qs,
                            children: [
                                (0, l.jsx)(u.s_, { "data-migration-pending": !0, onClick: O, className: R.b }),
                                (0, l.jsxs)("div", {
                                    className: R.hQ,
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: L.headerGraphic,
                                            children: (0, l.jsx)(d.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                        }),
                                        null != F && (0, l.jsx)(r.E, { type: { text: F }, variant: "brand" }),
                                        (0, l.jsx)(h.D, {
                                            className: a()(R.DD, { [R.GU]: null != F }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: n,
                                        }),
                                        (0, l.jsx)(m.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: R.rf,
                                            children: s,
                                        }),
                                    ],
                                }),
                                U &&
                                    B &&
                                    H &&
                                    (0, l.jsx)("div", {
                                        className: R.Zr,
                                        children: (0, l.jsx)(y.A, { subtitle: w.intl.string(T.default.BkJYQ5) }),
                                    }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: R.qr,
                            children: (0, l.jsxs)("div", {
                                className: R.UD,
                                children: [
                                    (0, l.jsx)(p.$, {
                                        variant: "secondary",
                                        onClick: () => {
                                            x.default.track(j.HAw.PREMIUM_PROMOTION_OPENED, {
                                                location_section: k,
                                                location_object: j.ZSU.NAVIGATION_LINK,
                                            }),
                                                D?.(),
                                                (0, g.A)(),
                                                O(),
                                                (0, f.jH)(),
                                                (0, _.pX)(j.BVt.APPLICATION_STORE);
                                        },
                                        text: w.intl.string(w.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, l.jsx)(b.A, {
                                        premiumModalAnalyticsLocation: { section: k, object: j.ZSU.BUTTON_CTA },
                                        subscriptionTier: N.pe.TIER_2,
                                        onClick: () => {
                                            O();
                                        },
                                        defaultTextOverride: G(),
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
