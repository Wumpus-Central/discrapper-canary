n.d(i, { A: () => H, I: () => M });
var t = n(627968),
    e = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(825484),
    c = n(821609),
    o = n(17928),
    d = n(990078),
    u = n(834730),
    p = n(318254),
    m = n(289873),
    x = n(793574),
    A = n(688810),
    E = n(587895),
    h = n(875444),
    C = n(429913),
    j = n(117218),
    _ = n(801228),
    b = n(652165),
    I = n(561794),
    T = n(287809),
    f = n(328968),
    N = n(871123),
    v = n(733391),
    g = n(832163),
    k = n(69236),
    R = n(31969),
    D = n(510022),
    P = n(317560),
    S = n(533406),
    F = n(971146),
    O = n(300182),
    G = n(328100),
    L = n(533772),
    U = n(375708),
    B = n(918374);
function y(l) {
    let { sku: i, normalPrice: n, discountedPrice: a, discountPercent: r, orbsGate: c, orbPriceAmount: o } = l,
        d = (0, R.F)("card", { applicationId: i.applicationId, skuId: i.id }),
        p = e.useMemo(() => {
            if (null == d) return null;
            let { Icon: l, text: i } = d;
            return (0, t.jsx)("div", {
                className: B.pt,
                children: (0, t.jsxs)("div", {
                    children: [
                        null != l && (0, t.jsx)(l, { size: "xs", color: "currentColor" }),
                        (0, t.jsx)(u.E, { variant: "text-sm/semibold", color: "currentColor", children: i }),
                    ],
                }),
            });
        }, [d]);
    if ("HIDDEN" !== c && null != o)
        return (0, t.jsx)(L.A, { orbsGate: c, className: B.PB, orbPrice: o, fiatPrice: n });
    let m = null != r && null != a;
    return (0, t.jsx)("div", {
        className: s()(B.PB, { [B.un]: m }),
        children: m
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != n &&
                          (0, t.jsx)(u.E, {
                              className: B.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, t.jsx)(u.E, { variant: "text-md/bold", lineClamp: 1, children: a }),
                      (0, t.jsxs)(u.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", r, ")"],
                      }),
                      p,
                  ],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [null != n && (0, t.jsx)(u.E, { variant: "text-md/bold", lineClamp: 1, children: n }), p],
              }),
    });
}
function M(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, o.bG)([g.A], () => g.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(H, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function H(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: R } = l,
        L = (0, o.bG)([f.A], () => f.A.isFetchingForSKU(n)),
        M = (0, _.A)({ skuId: n }),
        H = (0, o.bG)([g.A], () => (null != i ? g.A.getApplicationIdFromGuildId(i) : void 0)),
        K = M?.applicationId ?? s ?? H,
        z = (0, o.bG)([E.A], () => null != K && E.A.isFetchingApplication(K)),
        W = (0, o.bG)([E.A], () => null != K && E.A.didFetchingApplicationFail(K)),
        Y = (0, C.h)(K),
        { analyticsLocations: q } = (0, A.Ay)(x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, I.pE)();
    let w = (0, o.bG)([T.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? T.default.getUser(a.recipients[0]) : null,
        ),
        J = (0, o.bG)([g.A], () => (null != n ? g.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: $, primaryIconLabel: Q } = e.useMemo(() => (0, N.Cv)(M, K), [M, K]),
        { normalPrice: V, discountedPrice: X, discountPercent: Z, userPrice: ll } = (0, j.CD)({ sku: M }),
        li = (0, j.JL)({ sku: M }),
        ln = li?.amount,
        lt = (0, k.o)({ orbPriceAmount: ln, location: "social_layer_storefront_product_details_embed" });
    e.useEffect(() => {
        null == K || null == n || f.A.isFetchingForSKU(n) || (0, v.Pp)(K, n);
    }, [K, n]);
    let le = e.useCallback(
            (l) => {
                l.stopPropagation(),
                    M?.applicationId != null &&
                        (0, P.R)({
                            customNavigateToSocialLayerStorefront: R,
                            skuId: n,
                            applicationId: M.applicationId,
                            isStorefront: !1,
                            analyticsLocations: q,
                        });
            },
            [n, M, q, R],
        ),
        la = e.useCallback(() => {
            null != M &&
                J &&
                (0, S.a)(
                    M,
                    { isGift: !1 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [M, i, J]),
        ls = e.useCallback(() => {
            null != M &&
                (0, S.a)(
                    M,
                    { isGift: !0, giftRecipient: w ?? void 0 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [M, w]),
        lr = e.useCallback(() => {
            if (null == M || null == Y) return;
            let l = [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, b.B4)({
                skuId: n,
                applicationId: Y.id,
                analyticsLocations: l,
                onComplete: () => {
                    (0, D.n)({ sku: M, application: Y, analyticsLocations: l });
                },
            });
        }, [M, Y, n]),
        { onClick: lc, text: lo } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === lt
                    ? {
                          onClick: lr,
                          text: U.intl.format(U.t.JC15qj, {
                              orbPrice: ln,
                              orbIconHook: () =>
                                  (0, t.jsx)(p.C, { className: B.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: la,
                          text: null != ll ? U.intl.format(U.t.Xp5WTn, { price: ll }) : U.intl.string(U.t.boqtTA),
                      },
            [lt, lr, la, ll, ln],
        ),
        ld = null != K && null == Y && !W;
    return (L || z || ld) && (null == M || null == Y)
        ? (0, t.jsx)("div", { className: B.kL, children: (0, t.jsx)(m.y, { className: B.u1 }) })
        : null != Y && null != M && (0, h.A)(Y) && Y.id === M.applicationId
          ? (0, t.jsxs)("div", {
                className: B.kL,
                children: [
                    (0, t.jsx)(G.A, {
                        className: B.Nr,
                        skuId: n,
                        variant: G.s.EMBEDDED,
                        onClick: le,
                        analyticsLocations: q,
                    }),
                    (0, t.jsxs)("div", {
                        className: B.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: B.lI,
                                children: [
                                    (0, t.jsx)(F.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: B.PB,
                                        children: [
                                            null != $ &&
                                                (0, t.jsx)("img", { src: $.toString(), alt: Q, className: B.ye }),
                                            (0, t.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: M.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(y, {
                                        sku: M,
                                        normalPrice: V,
                                        discountedPrice: X,
                                        discountPercent: Z,
                                        orbsGate: lt,
                                        orbPriceAmount: ln,
                                    }),
                                ],
                            }),
                            (0, t.jsxs)(r.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(d.m, {
                                        text: J ? void 0 : U.intl.string(U.t.IqlPbQ),
                                        children: (0, t.jsx)(c.$, {
                                            variant: J ? "secondary" : "primary",
                                            onClick: le,
                                            text: U.intl.string(U.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    J && (0, t.jsx)(c.$, { variant: "primary", onClick: lc, text: lo, fullWidth: !0 }),
                                    (0, t.jsx)(O.A, { onGift: ls }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
