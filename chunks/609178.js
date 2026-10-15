n.d(t, { A: () => U });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(935462),
    o = n(462824),
    c = n(315629),
    u = n(305866),
    d = n(353795),
    m = n(62010),
    f = n(297264),
    E = n(834730),
    I = n(821609),
    g = n(398590),
    h = n(523527),
    A = n(976860),
    p = n(174459),
    _ = n(676279),
    N = n(158045),
    C = n(10392),
    x = n(82498),
    O = n(732280),
    S = n(369805),
    j = n(989790),
    T = n(632150),
    y = n(792656),
    R = n(202541),
    b = n(652215),
    v = n(259589),
    L = n(105292),
    M = n(237790),
    D = n(592551),
    P = n(644242),
    w = n(309427);
function U(e) {
    let t,
        {
            title: n,
            description: l,
            analyticsLocationSection: U,
            upsellViewedTrackingData: k,
            onClose: G,
            onDisplay: F,
            onUpsellClicked: J,
            isEmojiPickerOverlay: V = !1,
            graphic: K,
            useNitroGradient: B = !1,
        } = e;
    s.useEffect(() => {
        (p.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, k),
            (0, C.sq)(b.U7l.PREMIUM_UPSELL_VIEWED, k.location_stack, () =>
                (0, x.uq)(k.type, k.has_premium_stream_fps, k.has_premium_stream_resolution),
            ),
            F?.());
    }, [F, k]);
    let H = (0, O.V)(),
        X = s.useCallback(() => (0, N.LE)(H, R.pe.TIER_2) ?? L.intl.string(L.t.pj0XBN), [H]),
        W = (0, S.A)(R.pe.TIER_2),
        z = (0, j.O9)();
    t = V
        ? (0, _.TM)()
            ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
            : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
        : (0, _.TM)()
          ? P.A
          : w.A;
    let Z = V || B ? "nitro-pink" : "green";
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.p, { onClick: G, isVisible: !0 }),
            (0, i.jsx)(c.h, {
                color: Z,
                className: M.kL,
                children: (0, i.jsxs)(u.l, {
                    "aria-label": n,
                    className: M.r3,
                    children: [
                        (0, i.jsxs)("div", {
                            className: M.Qs,
                            children: [
                                (0, i.jsx)(a.s_, { "data-migration-pending": !0, onClick: G, className: M.b }),
                                (0, i.jsxs)("div", {
                                    className: M.hQ,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: D.headerGraphic,
                                            children:
                                                K ?? (0, i.jsx)(d.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                        }),
                                        null != W && (0, i.jsx)(m.E, { type: { text: W }, variant: "primary" }),
                                        (0, i.jsx)(f.D, {
                                            className: r()(M.DD, { [M.GU]: null != W }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: n,
                                        }),
                                        (0, i.jsx)(E.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: M.rf,
                                            children: l,
                                        }),
                                    ],
                                }),
                                V &&
                                    z &&
                                    (0, i.jsx)("div", {
                                        className: M.Zr,
                                        children: (0, i.jsx)(T.A, { subtitle: L.intl.string(v.default.BkJYQ5) }),
                                    }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: M.qr,
                            children: (0, i.jsxs)("div", {
                                className: M.UD,
                                children: [
                                    (0, i.jsx)(I.$, {
                                        variant: "secondary",
                                        onClick: function () {
                                            (p.default.track(b.HAw.PREMIUM_PROMOTION_OPENED, {
                                                location_section: U,
                                                location_object: b.ZSU.NAVIGATION_LINK,
                                            }),
                                                J?.(),
                                                (0, h.A)(),
                                                G(),
                                                (0, g.jH)(),
                                                (0, A.pX)(b.BVt.APPLICATION_STORE));
                                        },
                                        text: L.intl.string(L.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(y.A, {
                                        premiumModalAnalyticsLocation: { section: U, object: b.ZSU.BUTTON_CTA },
                                        subscriptionTier: R.pe.TIER_2,
                                        onClick: () => {
                                            (G(), J?.());
                                        },
                                        defaultTextOverride: X(),
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
