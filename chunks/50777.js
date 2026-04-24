n.d(t, { A: () => D });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(318254),
    o = n(825484),
    c = n(821609),
    d = n(17928),
    u = n(990078),
    _ = n(834730),
    m = n(289873),
    h = n(793574),
    p = n(688810),
    g = n(587895),
    f = n(875444),
    x = n(429913),
    A = n(723090),
    C = n(801228),
    v = n(594832),
    I = n(287809),
    E = n(328968),
    b = n(871123),
    y = n(733391),
    T = n(832163),
    j = n(317560),
    N = n(99161),
    S = n(971146),
    k = n(300182),
    L = n(183802),
    R = n(985018),
    w = n(918374);
function P(e) {
    let { sku: t, normalPrice: n, discountedPrice: a, discountPercent: o } = e,
        c = l.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, i.jsx)("div", {
                          className: w.pt,
                          children: (0, i.jsx)(_.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: R.intl.format(R.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, i.jsx)(s.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        d = null != o && null != a;
    return (0, i.jsx)("div", {
        className: r()(w.PB, { [w.un]: d }),
        children: d
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != n &&
                          (0, i.jsx)(_.E, {
                              className: w.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, i.jsx)(_.E, { variant: "text-md/bold", lineClamp: 1, children: a }),
                      (0, i.jsxs)(_.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", o, ")"],
                      }),
                      c,
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [null != n && (0, i.jsx)(_.E, { variant: "text-md/bold", lineClamp: 1, children: n }), c],
              }),
    });
}
function D(e) {
    let { guildId: t, skuId: n, channel: a } = e,
        r = (0, d.bG)([E.A], () => E.A.isFetchingForSKU(n)),
        s = (0, C.A)({ skuId: n, location: "SocialLayerStorefrontProductDetailsEmbed" }),
        D = s?.applicationId,
        M = (0, d.bG)([g.A], () => null != D && g.A.isFetchingApplication(D)),
        O = (0, d.bG)([g.A], () => null != D && g.A.didFetchingApplicationFail(D)),
        U = (0, x.h)(D),
        { analyticsLocations: G } = (0, p.Ay)(h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, v.pE)();
    let B = (0, d.bG)([I.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? I.default.getUser(a.recipients[0]) : null,
        ),
        V = (0, d.bG)([T.A], () => (null != n ? T.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: F, primaryIconLabel: H } = l.useMemo(() => (0, b.Cv)(s, D), [s, D]),
        { normalPrice: z, discountedPrice: W, discountPercent: Y } = (0, A.CD)({ sku: s });
    l.useEffect(() => {
        null == t || null == n || E.A.isFetchingForSKU(n) || (0, y.qf)(t, n);
    }, [t, n]);
    let K = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    s?.applicationId != null &&
                        (0, j.R)({ skuId: n, applicationId: s.applicationId, isStorefront: !1, analyticsLocations: G });
            },
            [n, s, G],
        ),
        q = l.useCallback(() => {
            null != s &&
                V &&
                (0, N.a)(
                    s,
                    { isGift: !1 },
                    { analyticsLocations: [h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [s, t, V]),
        Z = l.useCallback(() => {
            null != s &&
                (0, N.a)(
                    s,
                    { isGift: !0, giftRecipient: B ?? void 0 },
                    { analyticsLocations: [h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [s, B]),
        J = null != D && null == U && !O;
    if ((r || M || J) && (null == s || null == U))
        return (0, i.jsx)("div", { className: w.kL, children: (0, i.jsx)(m.y, { className: w.u1 }) });
    if (null == s || null == U || !(0, f.A)(U) || U.guildId !== t) return null;
    let Q = W ?? z;
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsx)(L.A, { className: w.Nr, skuId: n, variant: L.s.EMBEDDED, onClick: K, analyticsLocations: G }),
            (0, i.jsxs)("div", {
                className: w.zH,
                children: [
                    (0, i.jsxs)("div", {
                        className: w.lI,
                        children: [
                            (0, i.jsx)(S.V, {}),
                            (0, i.jsxs)("div", {
                                className: w.PB,
                                children: [
                                    null != F && (0, i.jsx)("img", { src: F.toString(), alt: H, className: w.ye }),
                                    (0, i.jsx)(_.E, { variant: "text-md/medium", lineClamp: 1, children: s.name }),
                                ],
                            }),
                            (0, i.jsx)(P, { sku: s, normalPrice: z, discountedPrice: W, discountPercent: Y }),
                        ],
                    }),
                    (0, i.jsxs)(o.e, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(u.m, {
                                text: V ? void 0 : R.intl.string(R.t.IqlPbQ),
                                children: (0, i.jsx)(c.$, {
                                    variant: V ? "secondary" : "primary",
                                    onClick: K,
                                    text: R.intl.string(R.t.KLBTgF),
                                    fullWidth: !0,
                                }),
                            }),
                            V &&
                                (0, i.jsx)(c.$, {
                                    variant: "primary",
                                    onClick: q,
                                    text:
                                        null != Q ? R.intl.format(R.t.Xp5WTn, { price: Q }) : R.intl.string(R.t.boqtTA),
                                    fullWidth: !0,
                                }),
                            (0, i.jsx)(k.A, { onGift: Z }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
