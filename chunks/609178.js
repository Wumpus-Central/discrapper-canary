n.d(t, { A: () => D });
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
    y = n(10392),
    S = n(82498),
    v = n(732280),
    N = n(369805),
    _ = n(989790),
    j = n(632150),
    T = n(792656),
    b = n(202541),
    R = n(652215),
    O = n(148155),
    L = n(375708),
    M = n(237790),
    k = n(592551),
    w = n(644242),
    P = n(309427);
function D(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: D,
            upsellViewedTrackingData: U,
            onClose: G,
            onDisplay: V,
            onUpsellClicked: F,
            isEmojiPickerOverlay: H = !1,
        } = e;
    i.useEffect(() => {
        C.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, U),
            (0, y.sq)(R.U7l.PREMIUM_UPSELL_VIEWED, U.location_stack, () =>
                (0, S.uq)(U.type, U.has_premium_stream_fps, U.has_premium_stream_resolution),
            ),
            V?.();
    }, [V, U]);
    let B = (0, v.V)(),
        W = i.useCallback(() => (0, I.LE)(B, b.pe.TIER_2) ?? L.intl.string(L.t.pj0XBN), [B]),
        K = (0, N.A)(b.pe.TIER_2),
        z = (0, _.O9)();
    return (
        (t = H
            ? (0, E.TM)()
                ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
                : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
            : (0, E.TM)()
              ? w.A
              : P.A),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.p, { onClick: G, isVisible: !0 }),
                (0, l.jsx)(c.h, {
                    color: H ? "nitro-pink" : "green",
                    className: M.kL,
                    children: (0, l.jsxs)(d.l, {
                        "aria-label": n,
                        className: M.r3,
                        children: [
                            (0, l.jsxs)("div", {
                                className: M.Qs,
                                children: [
                                    (0, l.jsx)(o.s_, { "data-migration-pending": !0, onClick: G, className: M.b }),
                                    (0, l.jsxs)("div", {
                                        className: M.hQ,
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
                                            null != K && (0, l.jsx)(a.E, { type: { text: K }, variant: "brand" }),
                                            (0, l.jsx)(m.D, {
                                                className: r()(M.DD, { [M.GU]: null != K }),
                                                variant: "heading-xl/bold",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            (0, l.jsx)(f.E, {
                                                variant: "text-md/medium",
                                                color: "text-subtle",
                                                className: M.rf,
                                                children: s,
                                            }),
                                        ],
                                    }),
                                    H &&
                                        z &&
                                        (0, l.jsx)("div", {
                                            className: M.Zr,
                                            children: (0, l.jsx)(j.A, { subtitle: L.intl.string(O.default.BkJYQ5) }),
                                        }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: M.qr,
                                children: (0, l.jsxs)("div", {
                                    className: M.UD,
                                    children: [
                                        (0, l.jsx)(p.$, {
                                            variant: "secondary",
                                            onClick: function () {
                                                C.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
                                                    location_section: D,
                                                    location_object: R.ZSU.NAVIGATION_LINK,
                                                }),
                                                    F?.(),
                                                    (0, x.A)(),
                                                    G(),
                                                    (0, g.jH)(),
                                                    (0, A.pX)(R.BVt.APPLICATION_STORE);
                                            },
                                            text: L.intl.string(L.t.ZnqyZ2),
                                            fullWidth: !0,
                                        }),
                                        (0, l.jsx)(T.A, {
                                            premiumModalAnalyticsLocation: { section: D, object: R.ZSU.BUTTON_CTA },
                                            subscriptionTier: b.pe.TIER_2,
                                            onClick: () => {
                                                G(), F?.();
                                            },
                                            defaultTextOverride: W(),
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
