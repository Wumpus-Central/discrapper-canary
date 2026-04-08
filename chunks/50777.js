n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(158954),
    o = n(311907),
    d = n(990078),
    c = n(397927),
    u = n(793574),
    _ = n(688810),
    m = n(587895),
    h = n(875444),
    p = n(429913),
    g = n(993046),
    A = n(801228),
    x = n(594832),
    f = n(287809),
    C = n(328968),
    E = n(871123),
    I = n(733391),
    v = n(832163),
    b = n(207654),
    T = n(317560),
    y = n(533406),
    N = n(971146),
    S = n(300182),
    j = n(183802),
    L = n(652215),
    R = n(985018),
    P = n(336135);
function D(e) {
    let { sku: t, normalPrice: n, discountedPrice: s, discountPercent: o } = e,
        d = l.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, i.jsx)("div", {
                          className: P.pt,
                          children: (0, i.jsx)(c.Text, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: R.intl.format(R.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, i.jsx)(r.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        u = null != o && null != s;
    return (0, i.jsx)("div", {
        className: a()(P.PB, { [P.un]: u }),
        children: u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.Text, {
                          className: P.of,
                          variant: "text-md/medium",
                          color: "text-muted",
                          lineClamp: 1,
                          children: n,
                      }),
                      (0, i.jsx)(c.Text, { variant: "text-md/bold", lineClamp: 1, children: s }),
                      (0, i.jsxs)(c.Text, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", o, ")"],
                      }),
                      d,
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(c.Text, { variant: "text-md/bold", lineClamp: 1, children: n }), d],
              }),
    });
}
function M(e) {
    let { guildId: t, skuId: n, channel: s } = e,
        a = (0, o.bG)([C.A], () => C.A.isFetchingForSKU(n)),
        M = (0, A.A)({ skuId: n, location: "SocialLayerStorefrontProductDetailsEmbed" }),
        w = M?.applicationId,
        O = (0, o.bG)([m.A], () => null != w && m.A.isFetchingApplication(w)),
        k = (0, o.bG)([m.A], () => null != w && m.A.didFetchingApplicationFail(w)),
        U = (0, p.h)(w),
        B = (0, b.b)({ location: "product_details_embed" }),
        { analyticsLocations: G } = (0, _.Ay)(u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, x.pE)();
    let F = (0, o.bG)([f.default], () =>
            s.isDM() && null != s.recipients && 0 !== s.recipients.length ? f.default.getUser(s.recipients[0]) : null,
        ),
        H = (0, o.bG)([v.A], () => (null != n ? v.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: V, primaryIconLabel: q } = l.useMemo(() => (0, E.Cv)(M, w), [M, w]),
        {
            normalPrice: W,
            discountedPrice: Y,
            discountPercent: z,
        } = (0, g.o)({ sku: M, priceSetAssignmentPurchaseType: L.lid.DEFAULT });
    l.useEffect(() => {
        null == t || null == n || C.A.isFetchingForSKU(n) || (0, I.qf)(t, n);
    }, [t, n]);
    let Q = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    M?.applicationId != null &&
                        (0, T.R)({ skuId: n, applicationId: M.applicationId, isStorefront: !1, analyticsLocations: G });
            },
            [n, M, G],
        ),
        K = l.useCallback(() => {
            null != M &&
                H &&
                (0, y.a)(
                    M,
                    { isGift: !1 },
                    { analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [M, t, H]),
        J = l.useCallback(() => {
            null != M &&
                (0, y.a)(
                    M,
                    { isGift: !0, giftRecipient: F ?? void 0 },
                    { analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [M, F]),
        X = null != w && null == U && !k;
    return (a || O || X) && (null == M || null == U)
        ? (0, i.jsx)("div", { className: P.kL, children: (0, i.jsx)(c.y$y, { className: P.u1 }) })
        : null != M && null != U && (0, h.A)(U) && U.guildId === t
          ? (0, i.jsxs)("div", {
                className: P.kL,
                children: [
                    (0, i.jsx)(j.A, {
                        className: P.Nr,
                        skuId: n,
                        variant: j.s.EMBEDDED,
                        onClick: Q,
                        analyticsLocations: G,
                    }),
                    (0, i.jsxs)("div", {
                        className: P.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: P.lI,
                                children: [
                                    B && (0, i.jsx)(N.V, {}),
                                    (0, i.jsxs)("div", {
                                        className: P.PB,
                                        children: [
                                            null != V &&
                                                (0, i.jsx)("img", { src: V.toString(), alt: q, className: P.ye }),
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: M.name,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(D, { sku: M, normalPrice: W, discountedPrice: Y, discountPercent: z }),
                                ],
                            }),
                            (0, i.jsxs)(r.e2v, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, i.jsx)(d.m, {
                                        text: H ? void 0 : R.intl.string(R.t.IqlPbQ),
                                        children: (0, i.jsx)(r.$nd, {
                                            variant: H ? "secondary" : "primary",
                                            onClick: Q,
                                            text: R.intl.string(R.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    H &&
                                        (0, i.jsx)(r.$nd, {
                                            variant: "primary",
                                            onClick: K,
                                            text: R.intl.format(R.t.Xp5WTn, { price: Y ?? W }),
                                            fullWidth: !0,
                                        }),
                                    (0, i.jsx)(S.A, { onGift: J }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
