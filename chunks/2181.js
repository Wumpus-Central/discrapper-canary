"use strict";
n.d(t, { A: () => M });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(508770),
    o = n(462824),
    c = n(315629),
    u = n(935462),
    d = n(353795),
    h = n(534514),
    m = n(834730),
    p = n(821609),
    f = n(398590),
    g = n(523527),
    x = n(976860),
    A = n(174459),
    C = n(676279),
    E = n(428262),
    I = n(234419),
    y = n(369805),
    S = n(39423),
    v = n(632150),
    N = n(792656),
    _ = n(788868),
    T = n(652215),
    j = n(466919),
    b = n(375708),
    R = n(311779),
    O = n(967744);
function M(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: M,
            upsellViewedTrackingData: L,
            onClose: w,
            onDisplay: k,
            onUpsellClicked: P,
            isEmojiPickerOverlay: D = !1,
        } = e;
    i.useEffect(() => {
        A.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, L), k?.();
    }, [k, L]);
    let U = (0, I.V)(),
        G = i.useCallback(() => (0, E.LE)(U, _.pe.TIER_2) ?? b.intl.string(b.t.pj0XBN), [U]),
        V = (0, y.A)(_.pe.TIER_2),
        F = (0, S.O9)();
    return (
        (t = D
            ? (0, C.TM)()
                ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
                : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
            : (0, C.TM)()
              ? "https://cdn.discordapp.com/assets/content/f1a56c8da8561a47006a76435c179b24321640c79e997c64a71ef7a84c960829.mov"
              : "https://cdn.discordapp.com/assets/content/c6188b952b5f1901da6986f4f06d690db24c805dfed5df35db3537ed5efb35a5.webm"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.p, { onClick: w, isVisible: !0 }),
                (0, l.jsxs)(c.h, {
                    color: D ? "nitro-pink" : "green",
                    className: R.kL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: R.Qs,
                            children: [
                                (0, l.jsx)(u.s_, { "data-migration-pending": !0, onClick: w, className: R.b }),
                                (0, l.jsxs)("div", {
                                    className: R.hQ,
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: O.headerGraphic,
                                            children: (0, l.jsx)(d.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                        }),
                                        null != V && (0, l.jsx)(a.E, { type: { text: V }, variant: "brand" }),
                                        (0, l.jsx)(h.D, {
                                            className: r()(R.DD, { [R.GU]: null != V }),
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
                                D &&
                                    F &&
                                    (0, l.jsx)("div", {
                                        className: R.Zr,
                                        children: (0, l.jsx)(v.A, { subtitle: b.intl.string(j.default.BkJYQ5) }),
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
                                            A.default.track(T.HAw.PREMIUM_PROMOTION_OPENED, {
                                                location_section: M,
                                                location_object: T.ZSU.NAVIGATION_LINK,
                                            }),
                                                P?.(),
                                                (0, g.A)(),
                                                w(),
                                                (0, f.jH)(),
                                                (0, x.pX)(T.BVt.APPLICATION_STORE);
                                        },
                                        text: b.intl.string(b.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, l.jsx)(N.A, {
                                        premiumModalAnalyticsLocation: { section: M, object: T.ZSU.BUTTON_CTA },
                                        subscriptionTier: _.pe.TIER_2,
                                        onClick: () => {
                                            w(), P?.();
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
