n.d(t, { A: () => w });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(158954),
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
    b = n(317560),
    T = n(533406),
    y = n(971146),
    S = n(300182),
    N = n(183802),
    j = n(652215),
    L = n(985018),
    R = n(918374);
function P(e) {
    let { sku: t, normalPrice: n, discountedPrice: l, discountPercent: o } = e,
        d = a.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, i.jsx)("div", {
                          className: R.pt,
                          children: (0, i.jsx)(c.Text, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: L.intl.format(L.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, i.jsx)(s.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        u = null != o && null != l;
    return (0, i.jsx)("div", {
        className: r()(R.PB, { [R.un]: u }),
        children: u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != n &&
                          (0, i.jsx)(c.Text, {
                              className: R.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, i.jsx)(c.Text, { variant: "text-md/bold", lineClamp: 1, children: l }),
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
                  children: [
                      null != n && (0, i.jsx)(c.Text, { variant: "text-md/bold", lineClamp: 1, children: n }),
                      d,
                  ],
              }),
    });
}
function w(e) {
    let { guildId: t, skuId: n, channel: l } = e,
        r = (0, o.bG)([C.A], () => C.A.isFetchingForSKU(n)),
        w = (0, A.A)({ skuId: n, location: "SocialLayerStorefrontProductDetailsEmbed" }),
        M = w?.applicationId,
        D = (0, o.bG)([m.A], () => null != M && m.A.isFetchingApplication(M)),
        k = (0, o.bG)([m.A], () => null != M && m.A.didFetchingApplicationFail(M)),
        O = (0, p.h)(M),
        { analyticsLocations: U } = (0, _.Ay)(u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, x.pE)();
    let B = (0, o.bG)([f.default], () =>
            l.isDM() && null != l.recipients && 0 !== l.recipients.length ? f.default.getUser(l.recipients[0]) : null,
        ),
        G = (0, o.bG)([v.A], () => (null != n ? v.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: F, primaryIconLabel: H } = a.useMemo(() => (0, E.Cv)(w, M), [w, M]),
        {
            normalPrice: V,
            discountedPrice: q,
            discountPercent: W,
        } = (0, g.ou)({ sku: w, priceSetAssignmentPurchaseType: j.lid.DEFAULT });
    a.useEffect(() => {
        null == t || null == n || C.A.isFetchingForSKU(n) || (0, I.qf)(t, n);
    }, [t, n]);
    let z = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    w?.applicationId != null &&
                        (0, b.R)({ skuId: n, applicationId: w.applicationId, isStorefront: !1, analyticsLocations: U });
            },
            [n, w, U],
        ),
        Y = a.useCallback(() => {
            null != w &&
                G &&
                (0, T.a)(
                    w,
                    { isGift: !1 },
                    { analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [w, t, G]),
        Q = a.useCallback(() => {
            null != w &&
                (0, T.a)(
                    w,
                    { isGift: !0, giftRecipient: B ?? void 0 },
                    { analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [w, B]),
        K = null != M && null == O && !k;
    if ((r || D || K) && (null == w || null == O))
        return (0, i.jsx)("div", { className: R.kL, children: (0, i.jsx)(c.y$y, { className: R.u1 }) });
    if (null == w || null == O || !(0, h.A)(O) || O.guildId !== t) return null;
    let X = q ?? V;
    return (0, i.jsxs)("div", {
        className: R.kL,
        children: [
            (0, i.jsx)(N.A, { className: R.Nr, skuId: n, variant: N.s.EMBEDDED, onClick: z, analyticsLocations: U }),
            (0, i.jsxs)("div", {
                className: R.zH,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.lI,
                        children: [
                            (0, i.jsx)(y.V, {}),
                            (0, i.jsxs)("div", {
                                className: R.PB,
                                children: [
                                    null != F && (0, i.jsx)("img", { src: F.toString(), alt: H, className: R.ye }),
                                    (0, i.jsx)(c.Text, { variant: "text-md/medium", lineClamp: 1, children: w.name }),
                                ],
                            }),
                            (0, i.jsx)(P, { sku: w, normalPrice: V, discountedPrice: q, discountPercent: W }),
                        ],
                    }),
                    (0, i.jsxs)(s.e2v, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(d.m, {
                                text: G ? void 0 : L.intl.string(L.t.IqlPbQ),
                                children: (0, i.jsx)(s.$nd, {
                                    variant: G ? "secondary" : "primary",
                                    onClick: z,
                                    text: L.intl.string(L.t.KLBTgF),
                                    fullWidth: !0,
                                }),
                            }),
                            G &&
                                (0, i.jsx)(s.$nd, {
                                    variant: "primary",
                                    onClick: Y,
                                    text:
                                        null != X ? L.intl.format(L.t.Xp5WTn, { price: X }) : L.intl.string(L.t.boqtTA),
                                    fullWidth: !0,
                                }),
                            (0, i.jsx)(S.A, { onGift: Q }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
