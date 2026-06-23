n.d(i, { A: () => O, I: () => P });
var t = n(627968),
    e = n(64700),
    a = n(503698),
    s = n.n(a),
    c = n(825484),
    r = n(821609),
    d = n(17928),
    o = n(990078),
    u = n(834730),
    p = n(289873),
    m = n(793574),
    x = n(688810),
    A = n(587895),
    h = n(875444),
    j = n(429913),
    E = n(117218),
    v = n(801228),
    I = n(561794),
    g = n(287809),
    C = n(328968),
    b = n(871123),
    T = n(733391),
    f = n(832163),
    N = n(31969),
    _ = n(317560),
    k = n(533406),
    F = n(971146),
    R = n(300182),
    S = n(328100),
    D = n(375708),
    G = n(918374);
function L(l) {
    let { sku: i, normalPrice: n, discountedPrice: a, discountPercent: c } = l,
        r = (0, N.F)("card", { applicationId: i.applicationId, skuId: i.id }),
        d = e.useMemo(() => {
            if (null == r) return null;
            let { Icon: l, text: i } = r;
            return (0, t.jsx)("div", {
                className: G.pt,
                children: (0, t.jsxs)("div", {
                    children: [
                        null != l && (0, t.jsx)(l, { size: "xs", color: "currentColor" }),
                        (0, t.jsx)(u.E, { variant: "text-sm/semibold", color: "currentColor", children: i }),
                    ],
                }),
            });
        }, [r]),
        o = null != c && null != a;
    return (0, t.jsx)("div", {
        className: s()(G.PB, { [G.un]: o }),
        children: o
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != n &&
                          (0, t.jsx)(u.E, {
                              className: G.of,
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
                          children: ["(", c, ")"],
                      }),
                      d,
                  ],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [null != n && (0, t.jsx)(u.E, { variant: "text-md/bold", lineClamp: 1, children: n }), d],
              }),
    });
}
function P(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, d.bG)([f.A], () => f.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(O, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function O(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: N } = l,
        P = (0, d.bG)([C.A], () => C.A.isFetchingForSKU(n)),
        O = (0, v.A)({ skuId: n }),
        y = (0, d.bG)([f.A], () => (null != i ? f.A.getApplicationIdFromGuildId(i) : void 0)),
        U = O?.applicationId ?? s ?? y,
        B = (0, d.bG)([A.A], () => null != U && A.A.isFetchingApplication(U)),
        M = (0, d.bG)([A.A], () => null != U && A.A.didFetchingApplicationFail(U)),
        K = (0, j.h)(U),
        { analyticsLocations: W } = (0, x.Ay)(m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, I.pE)();
    let w = (0, d.bG)([g.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? g.default.getUser(a.recipients[0]) : null,
        ),
        z = (0, d.bG)([f.A], () => (null != n ? f.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: Y, primaryIconLabel: q } = e.useMemo(() => (0, b.Cv)(O, U), [O, U]),
        { normalPrice: H, discountedPrice: $, discountPercent: Q, userPrice: V } = (0, E.CD)({ sku: O });
    e.useEffect(() => {
        null == U || null == n || C.A.isFetchingForSKU(n) || (0, T.Pp)(U, n);
    }, [U, n]);
    let X = e.useCallback(
            (l) => {
                l.stopPropagation(),
                    O?.applicationId != null &&
                        (0, _.R)({
                            customNavigateToSocialLayerStorefront: N,
                            skuId: n,
                            applicationId: O.applicationId,
                            isStorefront: !1,
                            analyticsLocations: W,
                        });
            },
            [n, O, W, N],
        ),
        J = e.useCallback(() => {
            null != O &&
                z &&
                (0, k.a)(
                    O,
                    { isGift: !1 },
                    { analyticsLocations: [m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [O, i, z]),
        Z = e.useCallback(() => {
            null != O &&
                (0, k.a)(
                    O,
                    { isGift: !0, giftRecipient: w ?? void 0 },
                    { analyticsLocations: [m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [O, w]),
        ll = null != U && null == K && !M;
    return (P || B || ll) && (null == O || null == K)
        ? (0, t.jsx)("div", { className: G.kL, children: (0, t.jsx)(p.y, { className: G.u1 }) })
        : null != K && null != O && (0, h.A)(K) && K.id === O.applicationId
          ? (0, t.jsxs)("div", {
                className: G.kL,
                children: [
                    (0, t.jsx)(S.A, {
                        className: G.Nr,
                        skuId: n,
                        variant: S.s.EMBEDDED,
                        onClick: X,
                        analyticsLocations: W,
                    }),
                    (0, t.jsxs)("div", {
                        className: G.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: G.lI,
                                children: [
                                    (0, t.jsx)(F.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: G.PB,
                                        children: [
                                            null != Y &&
                                                (0, t.jsx)("img", { src: Y.toString(), alt: q, className: G.ye }),
                                            (0, t.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: O.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(L, { sku: O, normalPrice: H, discountedPrice: $, discountPercent: Q }),
                                ],
                            }),
                            (0, t.jsxs)(c.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(o.m, {
                                        text: z ? void 0 : D.intl.string(D.t.IqlPbQ),
                                        children: (0, t.jsx)(r.$, {
                                            variant: z ? "secondary" : "primary",
                                            onClick: X,
                                            text: D.intl.string(D.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    z &&
                                        (0, t.jsx)(r.$, {
                                            variant: "primary",
                                            onClick: J,
                                            text:
                                                null != V
                                                    ? D.intl.format(D.t.Xp5WTn, { price: V })
                                                    : D.intl.string(D.t.boqtTA),
                                            fullWidth: !0,
                                        }),
                                    (0, t.jsx)(R.A, { onGift: Z }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
