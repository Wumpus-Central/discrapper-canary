t.d(i, { A: () => w, I: () => H });
var n = t(627968),
    e = t(64700),
    a = t(503698),
    s = t.n(a),
    r = t(825484),
    o = t(821609),
    c = t(17928),
    d = t(990078),
    u = t(834730),
    p = t(318254),
    m = t(289873),
    x = t(793574),
    A = t(688810),
    E = t(587895),
    C = t(875444),
    h = t(429913),
    b = t(117218),
    j = t(801228),
    _ = t(652165),
    I = t(561794),
    T = t(287809),
    f = t(67480),
    N = t(328968),
    g = t(871123),
    k = t(733391),
    v = t(832163),
    R = t(69236),
    D = t(31969),
    F = t(510022),
    P = t(317560),
    S = t(533406),
    G = t(971146),
    O = t(300182),
    L = t(467884),
    B = t(533772),
    U = t(375708),
    y = t(918374);
function M(l) {
    let { sku: i, normalPrice: t, discountedPrice: a, discountPercent: r, orbsGate: o, orbPriceAmount: c } = l,
        d = (0, D.F)("card", { applicationId: i.applicationId, skuId: i.id }),
        m = e.useMemo(() => {
            let l = d?.rewardValue;
            return null == l || l <= 0
                ? null
                : (0, n.jsx)("div", {
                      className: y.pt,
                      children: (0, n.jsx)(u.E, {
                          variant: "text-sm/semibold",
                          color: "currentColor",
                          children: U.intl.format(U.t.GiVd2Q, {
                              orbCount: l,
                              orbIconHook: () => (0, n.jsx)(p.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                          }),
                      }),
                  });
        }, [d]);
    if ("HIDDEN" !== o && null != c)
        return (0, n.jsx)(B.A, { orbsGate: o, className: y.PB, orbPrice: c, fiatPrice: t });
    let x = null != r && null != a;
    return (0, n.jsx)("div", {
        className: s()(y.PB, { [y.un]: x }),
        children: x
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      null != t &&
                          (0, n.jsx)(u.E, {
                              className: y.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: t,
                          }),
                      (0, n.jsx)(u.E, { variant: "text-md/bold", lineClamp: 1, children: a }),
                      (0, n.jsxs)(u.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", r, ")"],
                      }),
                      m,
                  ],
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [null != t && (0, n.jsx)(u.E, { variant: "text-md/bold", lineClamp: 1, children: t }), m],
              }),
    });
}
function H(l) {
    let { applicationId: i, skuId: t, channel: e } = l,
        a = (0, c.bG)([v.A], () => v.A.getGuildIdFromApplicationId(i));
    return (0, n.jsx)(w, { applicationId: i, guildId: a, skuId: t, channel: e });
}
function w(l) {
    let { guildId: i, skuId: t, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: D } = l,
        B = (0, c.bG)([N.A], () => N.A.isFetchingForSKU(t)),
        H = (0, j.A)({ skuId: t }),
        w = (0, c.bG)([v.A], () => (null != i ? v.A.getApplicationIdFromGuildId(i) : void 0)),
        z = H?.applicationId ?? s ?? w,
        K = (0, c.bG)([E.A], () => null != z && E.A.isFetchingApplication(z)),
        W = (0, c.bG)([E.A], () => null != z && E.A.didFetchingApplicationFail(z)),
        Y = (0, h.h)(z),
        { analyticsLocations: q } = (0, A.Ay)(x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, I.pE)();
    let V = (0, c.bG)([T.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? T.default.getUser(a.recipients[0]) : null,
        ),
        J = (0, c.bG)([v.A], () => (null != t ? v.A.getNormalizedSKUEligibility(t) : void 0), [t]),
        { primaryIconAsset: Q, primaryIconLabel: $ } = e.useMemo(() => (0, g.Cv)(H, z), [H, z]),
        { normalPrice: X, discountedPrice: Z, discountPercent: ll, userPrice: li } = (0, b.CD)({ sku: H }),
        lt = (0, b.JL)({ sku: H }),
        ln = lt?.amount,
        le = (0, R.o)({
            orbPriceAmount: ln,
            applicationId: z,
            location: "social_layer_storefront_product_details_embed",
        });
    e.useEffect(() => {
        null == z ||
            null == t ||
            null != f.A.get(t) ||
            f.A.isFetching(t) ||
            f.A.didFetchingSkuFail(t) ||
            (0, k.Pp)(z, t);
    }, [z, t]);
    let la = e.useCallback(
            (l) => {
                l.stopPropagation(),
                    H?.applicationId != null &&
                        (0, P.R)({
                            customNavigateToSocialLayerStorefront: D,
                            skuId: t,
                            applicationId: H.applicationId,
                            isStorefront: !1,
                            analyticsLocations: q,
                        });
            },
            [t, H, q, D],
        ),
        ls = e.useCallback(() => {
            null != H &&
                J &&
                (0, S.a)(
                    H,
                    { isGift: !1 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [H, i, J]),
        lr = e.useCallback(() => {
            null != H &&
                (0, S.a)(
                    H,
                    { isGift: !0, giftRecipient: V ?? void 0 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [H, V]),
        lo = e.useCallback(() => {
            if (null == H || null == Y) return;
            let l = [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, _.B4)({
                skuId: t,
                applicationId: Y.id,
                analyticsLocations: l,
                onComplete: () => {
                    (0, F.n)({ sku: H, application: Y, analyticsLocations: l });
                },
            });
        }, [H, Y, t]),
        { onClick: lc, text: ld } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === le
                    ? {
                          onClick: lo,
                          text: U.intl.format(U.t.JC15qj, {
                              orbPrice: ln,
                              orbIconHook: () =>
                                  (0, n.jsx)(p.C, { className: y.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: ls,
                          text: null != li ? U.intl.format(U.t.Xp5WTn, { price: li }) : U.intl.string(U.t.boqtTA),
                      },
            [le, lo, ls, li, ln],
        ),
        lu = null != z && null == Y && !W;
    return (B || K || lu) && (null == H || null == Y)
        ? (0, n.jsx)("div", { className: y.kL, children: (0, n.jsx)(m.y, { className: y.u1 }) })
        : null != Y && null != H && (0, C.A)(Y) && Y.id === H.applicationId
          ? (0, n.jsxs)("div", {
                className: y.kL,
                children: [
                    (0, n.jsx)(L.A, {
                        className: y.Nr,
                        skuId: t,
                        variant: L.s.EMBEDDED,
                        onClick: la,
                        analyticsLocations: q,
                    }),
                    (0, n.jsxs)("div", {
                        className: y.zH,
                        children: [
                            (0, n.jsxs)("div", {
                                className: y.lI,
                                children: [
                                    (0, n.jsx)(G.V, {}),
                                    (0, n.jsxs)("div", {
                                        className: y.PB,
                                        children: [
                                            null != Q &&
                                                (0, n.jsx)("img", { src: Q.toString(), alt: $, className: y.ye }),
                                            (0, n.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: H.name,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(M, {
                                        sku: H,
                                        normalPrice: X,
                                        discountedPrice: Z,
                                        discountPercent: ll,
                                        orbsGate: le,
                                        orbPriceAmount: ln,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(r.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, n.jsx)(d.m, {
                                        text: J ? void 0 : U.intl.string(U.t.IqlPbQ),
                                        children: (0, n.jsx)(o.$, {
                                            variant: J ? "secondary" : "primary",
                                            onClick: la,
                                            text: U.intl.string(U.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    J && (0, n.jsx)(o.$, { variant: "primary", onClick: lc, text: ld, fullWidth: !0 }),
                                    (0, n.jsx)(O.A, { onGift: lr }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
