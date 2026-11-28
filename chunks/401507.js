n.d(t, { A: () => D });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(935462),
    o = n(462824),
    c = n(315629),
    u = n(305866),
    d = n(566345),
    m = n(805251),
    f = n(534514),
    E = n(834730),
    I = n(821609),
    h = n(398590),
    g = n(523527),
    A = n(976860),
    p = n(129230),
    _ = n(676279),
    N = n(448645),
    C = n(739053),
    y = n(82498),
    x = n(77528),
    j = n(369805),
    O = n(728666),
    S = n(632150),
    T = n(792656),
    b = n(682901),
    R = n(652215),
    v = n(707328),
    P = n(792996),
    L = n(237790),
    M = n(592551);
function D(e) {
    let t,
        {
            title: n,
            description: l,
            analyticsLocationSection: D,
            upsellViewedTrackingData: w,
            onClose: k,
            onDisplay: U,
            onUpsellClicked: G,
            isEmojiPickerOverlay: F = !1,
            graphic: J,
            useNitroGradient: K = !1,
        } = e;
    s.useEffect(() => {
        (p.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, w),
            (0, C.sq)(R.U7l.PREMIUM_UPSELL_VIEWED, w.location_stack, () =>
                (0, y.uq)(w.type, w.has_premium_stream_fps, w.has_premium_stream_resolution),
            ),
            U?.());
    }, [U, w]);
    let V = (0, x.V)(),
        B = s.useCallback(() => (0, N.LE)(V, b.pe.TIER_2) ?? P.intl.string(P.t.pj0XBN), [V]),
        H = (0, j.A)(b.pe.TIER_2),
        W = (0, O.O9)();
    t = F
        ? (0, _.TM)()
            ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
            : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
        : (0, _.TM)()
          ? "https://cdn.discordapp.com/assets/content/f1a56c8da8561a47006a76435c179b24321640c79e997c64a71ef7a84c960829.mov"
          : "https://cdn.discordapp.com/assets/content/c6188b952b5f1901da6986f4f06d690db24c805dfed5df35db3537ed5efb35a5.webm";
    let X = F || K ? "nitro-pink" : "green";
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.p, { onClick: k, isVisible: !0 }),
            (0, i.jsx)(c.h, {
                color: X,
                className: L.kL,
                children: (0, i.jsxs)(u.l, {
                    "aria-label": n,
                    className: L.r3,
                    children: [
                        (0, i.jsxs)("div", {
                            className: L.Qs,
                            children: [
                                (0, i.jsx)(a.s_, { "data-migration-pending": !0, onClick: k, className: L.b }),
                                (0, i.jsxs)("div", {
                                    className: L.hQ,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: M.headerGraphic,
                                            children:
                                                J ?? (0, i.jsx)(d.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                        }),
                                        null != H && (0, i.jsx)(m.E, { type: { text: H }, variant: "primary" }),
                                        (0, i.jsx)(f.D, {
                                            className: r()(L.DD, { [L.GU]: null != H }),
                                            variant: "heading-xl/semibold",
                                            color: "text-strong",
                                            children: n,
                                        }),
                                        (0, i.jsx)(E.E, {
                                            variant: "body-md/medium",
                                            color: "text-subtle",
                                            className: L.rf,
                                            children: l,
                                        }),
                                    ],
                                }),
                                F &&
                                    W &&
                                    (0, i.jsx)("div", {
                                        className: L.Zr,
                                        children: (0, i.jsx)(S.A, { subtitle: P.intl.string(v.default.BkJYQ5) }),
                                    }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: L.qr,
                            children: (0, i.jsxs)("div", {
                                className: L.UD,
                                children: [
                                    (0, i.jsx)(I.$, {
                                        variant: "secondary",
                                        onClick: function () {
                                            (p.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
                                                location_section: D,
                                                location_object: R.ZSU.NAVIGATION_LINK,
                                            }),
                                                G?.(),
                                                (0, g.A)(),
                                                k(),
                                                (0, h.jH)(),
                                                (0, A.pX)(R.BVt.APPLICATION_STORE));
                                        },
                                        text: P.intl.string(P.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(T.A, {
                                        premiumModalAnalyticsLocation: { section: D, object: R.ZSU.BUTTON_CTA },
                                        subscriptionTier: b.pe.TIER_2,
                                        onClick: () => {
                                            (k(), G?.());
                                        },
                                        defaultTextOverride: B(),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
