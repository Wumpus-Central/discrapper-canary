n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(318254),
    o = n(825484),
    d = n(821609),
    c = n(311907),
    u = n(990078),
    m = n(834730),
    _ = n(289873),
    h = n(793574),
    p = n(688810),
    g = n(587895),
    A = n(875444),
    f = n(429913),
    x = n(993046),
    C = n(801228),
    E = n(594832),
    I = n(287809),
    v = n(328968),
    b = n(871123),
    T = n(733391),
    S = n(832163),
    y = n(317560),
    N = n(533406),
    j = n(971146),
    L = n(300182),
    R = n(183802),
    P = n(985018),
    w = n(918374);
function D(e) {
    let { sku: t, normalPrice: n, discountedPrice: a, discountPercent: o } = e,
        d = l.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, i.jsx)("div", {
                          className: w.pt,
                          children: (0, i.jsx)(m.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: P.intl.format(P.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, i.jsx)(r.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        c = null != o && null != a;
    return (0, i.jsx)("div", {
        className: s()(w.PB, { [w.un]: c }),
        children: c
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != n &&
                          (0, i.jsx)(m.E, {
                              className: w.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, i.jsx)(m.E, { variant: "text-md/bold", lineClamp: 1, children: a }),
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
function k(e) {
    let { guildId: t, skuId: n, channel: a } = e,
        s = (0, c.bG)([v.A], () => v.A.isFetchingForSKU(n)),
        r = (0, C.A)({ skuId: n, location: "SocialLayerStorefrontProductDetailsEmbed" }),
        k = r?.applicationId,
        O = (0, c.bG)([g.A], () => null != k && g.A.isFetchingApplication(k)),
        M = (0, c.bG)([g.A], () => null != k && g.A.didFetchingApplicationFail(k)),
        U = (0, f.h)(k),
        { analyticsLocations: G } = (0, p.Ay)(h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, E.pE)();
    let B = (0, c.bG)([I.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? I.default.getUser(a.recipients[0]) : null,
        ),
        F = (0, c.bG)([S.A], () => (null != n ? S.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: H, primaryIconLabel: V } = l.useMemo(() => (0, b.Cv)(r, k), [r, k]),
        { normalPrice: q, discountedPrice: W, discountPercent: z } = (0, x.CD)({ sku: r });
    l.useEffect(() => {
        null == t || null == n || v.A.isFetchingForSKU(n) || (0, T.qf)(t, n);
    }, [t, n]);
    let Y = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    r?.applicationId != null &&
                        (0, y.R)({ skuId: n, applicationId: r.applicationId, isStorefront: !1, analyticsLocations: G });
            },
            [n, r, G],
        ),
        Q = l.useCallback(() => {
            null != r &&
                F &&
                (0, N.a)(
                    r,
                    { isGift: !1 },
                    { analyticsLocations: [h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [r, t, F]),
        K = l.useCallback(() => {
            null != r &&
                (0, N.a)(
                    r,
                    { isGift: !0, giftRecipient: B ?? void 0 },
                    { analyticsLocations: [h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [r, B]),
        Z = null != k && null == U && !M;
    if ((s || O || Z) && (null == r || null == U))
        return (0, i.jsx)("div", { className: w.kL, children: (0, i.jsx)(_.y, { className: w.u1 }) });
    if (null == r || null == U || !(0, A.A)(U) || U.guildId !== t) return null;
    let J = W ?? q;
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsx)(R.A, { className: w.Nr, skuId: n, variant: R.s.EMBEDDED, onClick: Y, analyticsLocations: G }),
            (0, i.jsxs)("div", {
                className: w.zH,
                children: [
                    (0, i.jsxs)("div", {
                        className: w.lI,
                        children: [
                            (0, i.jsx)(j.V, {}),
                            (0, i.jsxs)("div", {
                                className: w.PB,
                                children: [
                                    null != H && (0, i.jsx)("img", { src: H.toString(), alt: V, className: w.ye }),
                                    (0, i.jsx)(m.E, { variant: "text-md/medium", lineClamp: 1, children: r.name }),
                                ],
                            }),
                            (0, i.jsx)(D, { sku: r, normalPrice: q, discountedPrice: W, discountPercent: z }),
                        ],
                    }),
                    (0, i.jsxs)(o.e, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(u.m, {
                                text: F ? void 0 : P.intl.string(P.t.IqlPbQ),
                                children: (0, i.jsx)(d.$, {
                                    variant: F ? "secondary" : "primary",
                                    onClick: Y,
                                    text: P.intl.string(P.t.KLBTgF),
                                    fullWidth: !0,
                                }),
                            }),
                            F &&
                                (0, i.jsx)(d.$, {
                                    variant: "primary",
                                    onClick: Q,
                                    text:
                                        null != J ? P.intl.format(P.t.Xp5WTn, { price: J }) : P.intl.string(P.t.boqtTA),
                                    fullWidth: !0,
                                }),
                            (0, i.jsx)(L.A, { onGift: K }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
