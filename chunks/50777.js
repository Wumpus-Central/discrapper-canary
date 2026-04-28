n.d(t, { A: () => D });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(318254),
    o = n(825484),
    d = n(821609),
    c = n(17928),
    u = n(990078),
    m = n(834730),
    h = n(289873),
    g = n(793574),
    A = n(688810),
    p = n(587895),
    x = n(875444),
    f = n(429913),
    C = n(723090),
    E = n(801228),
    v = n(594832),
    I = n(287809),
    _ = n(328968),
    j = n(871123),
    N = n(733391),
    T = n(832163),
    y = n(317560),
    S = n(533406),
    b = n(971146),
    k = n(300182),
    L = n(183802),
    R = n(985018),
    P = n(918374);
function M(e) {
    let { sku: t, normalPrice: n, discountedPrice: s, discountPercent: o } = e,
        d = l.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, i.jsx)("div", {
                          className: P.pt,
                          children: (0, i.jsx)(m.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: R.intl.format(R.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, i.jsx)(r.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        c = null != o && null != s;
    return (0, i.jsx)("div", {
        className: a()(P.PB, { [P.un]: c }),
        children: c
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != n &&
                          (0, i.jsx)(m.E, {
                              className: P.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, i.jsx)(m.E, { variant: "text-md/bold", lineClamp: 1, children: s }),
                      (0, i.jsxs)(m.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", o, ")"],
                      }),
                      d,
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [null != n && (0, i.jsx)(m.E, { variant: "text-md/bold", lineClamp: 1, children: n }), d],
              }),
    });
}
function D(e) {
    let { guildId: t, skuId: n, channel: s } = e,
        a = (0, c.bG)([_.A], () => _.A.isFetchingForSKU(n)),
        r = (0, E.A)({ skuId: n, location: "SocialLayerStorefrontProductDetailsEmbed" }),
        D = r?.applicationId,
        w = (0, c.bG)([p.A], () => null != D && p.A.isFetchingApplication(D)),
        O = (0, c.bG)([p.A], () => null != D && p.A.didFetchingApplicationFail(D)),
        U = (0, f.h)(D),
        { analyticsLocations: G } = (0, A.Ay)(g.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, v.pE)();
    let V = (0, c.bG)([I.default], () =>
            s.isDM() && null != s.recipients && 0 !== s.recipients.length ? I.default.getUser(s.recipients[0]) : null,
        ),
        B = (0, c.bG)([T.A], () => (null != n ? T.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: H, primaryIconLabel: F } = l.useMemo(() => (0, j.Cv)(r, D), [r, D]),
        { normalPrice: z, discountedPrice: Y, discountPercent: W } = (0, C.CD)({ sku: r });
    l.useEffect(() => {
        null == t || null == n || _.A.isFetchingForSKU(n) || (0, N.qf)(t, n);
    }, [t, n]);
    let K = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    r?.applicationId != null &&
                        (0, y.R)({ skuId: n, applicationId: r.applicationId, isStorefront: !1, analyticsLocations: G });
            },
            [n, r, G],
        ),
        J = l.useCallback(() => {
            null != r &&
                B &&
                (0, S.a)(
                    r,
                    { isGift: !1 },
                    { analyticsLocations: [g.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [r, t, B]),
        q = l.useCallback(() => {
            null != r &&
                (0, S.a)(
                    r,
                    { isGift: !0, giftRecipient: V ?? void 0 },
                    { analyticsLocations: [g.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [r, V]),
        Z = null != D && null == U && !O;
    if ((a || w || Z) && (null == r || null == U))
        return (0, i.jsx)("div", { className: P.kL, children: (0, i.jsx)(h.y, { className: P.u1 }) });
    if (null == r || null == U || !(0, x.A)(U) || U.guildId !== t) return null;
    let X = Y ?? z;
    return (0, i.jsxs)("div", {
        className: P.kL,
        children: [
            (0, i.jsx)(L.A, { className: P.Nr, skuId: n, variant: L.s.EMBEDDED, onClick: K, analyticsLocations: G }),
            (0, i.jsxs)("div", {
                className: P.zH,
                children: [
                    (0, i.jsxs)("div", {
                        className: P.lI,
                        children: [
                            (0, i.jsx)(b.V, {}),
                            (0, i.jsxs)("div", {
                                className: P.PB,
                                children: [
                                    null != H && (0, i.jsx)("img", { src: H.toString(), alt: F, className: P.ye }),
                                    (0, i.jsx)(m.E, { variant: "text-md/medium", lineClamp: 1, children: r.name }),
                                ],
                            }),
                            (0, i.jsx)(M, { sku: r, normalPrice: z, discountedPrice: Y, discountPercent: W }),
                        ],
                    }),
                    (0, i.jsxs)(o.e, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(u.m, {
                                text: B ? void 0 : R.intl.string(R.t.IqlPbQ),
                                children: (0, i.jsx)(d.$, {
                                    variant: B ? "secondary" : "primary",
                                    onClick: K,
                                    text: R.intl.string(R.t.KLBTgF),
                                    fullWidth: !0,
                                }),
                            }),
                            B &&
                                (0, i.jsx)(d.$, {
                                    variant: "primary",
                                    onClick: J,
                                    text:
                                        null != X ? R.intl.format(R.t.Xp5WTn, { price: X }) : R.intl.string(R.t.boqtTA),
                                    fullWidth: !0,
                                }),
                            (0, i.jsx)(k.A, { onGift: q }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
