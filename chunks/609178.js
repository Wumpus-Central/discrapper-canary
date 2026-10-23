n.d(t, { A: () => k });
var i = n(477900),
    s = n(582128),
    r = n(503698),
    l = n.n(r),
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
    p = n(976860),
    A = n(174459),
    _ = n(676279),
    N = n(927578),
    C = n(10392),
    x = n(82498),
    T = n(732280),
    y = n(369805),
    O = n(989790),
    j = n(632150),
    S = n(792656),
    b = n(202541),
    R = n(652215),
    v = n(148155),
    L = n(105292),
    M = n(237790),
    P = n(592551),
    D = n(644242),
    w = n(309427);
function k(e) {
    let t,
        {
            title: n,
            description: r,
            analyticsLocationSection: k,
            upsellViewedTrackingData: U,
            onClose: G,
            onDisplay: F,
            onUpsellClicked: J,
            isEmojiPickerOverlay: V = !1,
            graphic: K,
            useNitroGradient: B = !1,
        } = e;
    s.useEffect(() => {
        (A.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, U),
            (0, C.sq)(R.U7l.PREMIUM_UPSELL_VIEWED, U.location_stack, () =>
                (0, x.uq)(U.type, U.has_premium_stream_fps, U.has_premium_stream_resolution),
            ),
            F?.());
    }, [F, U]);
    let H = (0, T.V)(),
        W = s.useCallback(() => (0, N.LE)(H, b.pe.TIER_2) ?? L.intl.string(L.t.pj0XBN), [H]),
        X = (0, y.A)(b.pe.TIER_2),
        z = (0, O.O9)();
    t = V
        ? (0, _.TM)()
            ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
            : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
        : (0, _.TM)()
          ? D.A
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
                                            className: P.headerGraphic,
                                            children:
                                                K ?? (0, i.jsx)(d.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                        }),
                                        null != X && (0, i.jsx)(m.E, { type: { text: X }, variant: "primary" }),
                                        (0, i.jsx)(f.D, {
                                            className: l()(M.DD, { [M.GU]: null != X }),
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: n,
                                        }),
                                        (0, i.jsx)(E.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            className: M.rf,
                                            children: r,
                                        }),
                                    ],
                                }),
                                V &&
                                    z &&
                                    (0, i.jsx)("div", {
                                        className: M.Zr,
                                        children: (0, i.jsx)(j.A, { subtitle: L.intl.string(v.default.BkJYQ5) }),
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
                                            (A.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
                                                location_section: k,
                                                location_object: R.ZSU.NAVIGATION_LINK,
                                            }),
                                                J?.(),
                                                (0, h.A)(),
                                                G(),
                                                (0, g.jH)(),
                                                (0, p.pX)(R.BVt.APPLICATION_STORE));
                                        },
                                        text: L.intl.string(L.t.ZnqyZ2),
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(S.A, {
                                        premiumModalAnalyticsLocation: { section: k, object: R.ZSU.BUTTON_CTA },
                                        subscriptionTier: b.pe.TIER_2,
                                        onClick: () => {
                                            (G(), J?.());
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
    });
}
