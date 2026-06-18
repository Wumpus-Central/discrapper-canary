n.d(i, { A: () => O, I: () => P });
var t = n(627968),
    e = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(318254),
    c = n(825484),
    d = n(821609),
    o = n(17928),
    u = n(990078),
    p = n(834730),
    m = n(289873),
    x = n(793574),
    A = n(688810),
    h = n(587895),
    E = n(875444),
    b = n(429913),
    j = n(117218),
    v = n(801228),
    C = n(561794),
    I = n(287809),
    g = n(328968),
    T = n(871123),
    f = n(733391),
    R = n(832163),
    N = n(317560),
    _ = n(533406),
    k = n(971146),
    F = n(300182),
    S = n(328100),
    D = n(375708),
    G = n(918374);
function L(l) {
    let { sku: i, normalPrice: n, discountedPrice: s, discountPercent: c } = l,
        d = e.useMemo(
            () =>
                null != i.orbsReward && i.orbsReward > 0
                    ? (0, t.jsx)("div", {
                          className: G.pt,
                          children: (0, t.jsx)(p.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: D.intl.format(D.t.GiVd2Q, {
                                  orbCount: i.orbsReward,
                                  orbIconHook: () =>
                                      (0, t.jsx)(r.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [i.orbsReward],
        ),
        o = null != c && null != s;
    return (0, t.jsx)("div", {
        className: a()(G.PB, { [G.un]: o }),
        children: o
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != n &&
                          (0, t.jsx)(p.E, {
                              className: G.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, t.jsx)(p.E, { variant: "text-md/bold", lineClamp: 1, children: s }),
                      (0, t.jsxs)(p.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", c, ")"],
                      }),
                      d,
                  ],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [null != n && (0, t.jsx)(p.E, { variant: "text-md/bold", lineClamp: 1, children: n }), d],
              }),
    });
}
function P(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        s = (0, o.bG)([R.A], () => R.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(O, { applicationId: i, guildId: s, skuId: n, channel: e });
}
function O(l) {
    let { guildId: i, skuId: n, channel: s, applicationId: a, customNavigateToSocialLayerStorefront: r } = l,
        P = (0, o.bG)([g.A], () => g.A.isFetchingForSKU(n)),
        O = (0, v.A)({ skuId: n }),
        y = (0, o.bG)([R.A], () => (null != i ? R.A.getApplicationIdFromGuildId(i) : void 0)),
        U = O?.applicationId ?? a ?? y,
        B = (0, o.bG)([h.A], () => null != U && h.A.isFetchingApplication(U)),
        w = (0, o.bG)([h.A], () => null != U && h.A.didFetchingApplicationFail(U)),
        M = (0, b.h)(U),
        { analyticsLocations: K } = (0, A.Ay)(x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, C.pE)();
    let W = (0, o.bG)([I.default], () =>
            s.isDM() && null != s.recipients && 0 !== s.recipients.length ? I.default.getUser(s.recipients[0]) : null,
        ),
        z = (0, o.bG)([R.A], () => (null != n ? R.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: H, primaryIconLabel: Y } = e.useMemo(() => (0, T.Cv)(O, U), [O, U]),
        { normalPrice: q, discountedPrice: Q, discountPercent: V, userPrice: $ } = (0, j.CD)({ sku: O });
    e.useEffect(() => {
        null == U || null == n || g.A.isFetchingForSKU(n) || (0, f.Pp)(U, n);
    }, [U, n]);
    let X = e.useCallback(
            (l) => {
                l.stopPropagation(),
                    O?.applicationId != null &&
                        (0, N.R)({
                            customNavigateToSocialLayerStorefront: r,
                            skuId: n,
                            applicationId: O.applicationId,
                            isStorefront: !1,
                            analyticsLocations: K,
                        });
            },
            [n, O, K, r],
        ),
        J = e.useCallback(() => {
            null != O &&
                z &&
                (0, _.a)(
                    O,
                    { isGift: !1 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [O, i, z]),
        Z = e.useCallback(() => {
            null != O &&
                (0, _.a)(
                    O,
                    { isGift: !0, giftRecipient: W ?? void 0 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [O, W]),
        ll = null != U && null == M && !w;
    return (P || B || ll) && (null == O || null == M)
        ? (0, t.jsx)("div", { className: G.kL, children: (0, t.jsx)(m.y, { className: G.u1 }) })
        : null != M && null != O && (0, E.A)(M) && M.id === O.applicationId
          ? (0, t.jsxs)("div", {
                className: G.kL,
                children: [
                    (0, t.jsx)(S.A, {
                        className: G.Nr,
                        skuId: n,
                        variant: S.s.EMBEDDED,
                        onClick: X,
                        analyticsLocations: K,
                    }),
                    (0, t.jsxs)("div", {
                        className: G.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: G.lI,
                                children: [
                                    (0, t.jsx)(k.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: G.PB,
                                        children: [
                                            null != H &&
                                                (0, t.jsx)("img", { src: H.toString(), alt: Y, className: G.ye }),
                                            (0, t.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: O.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(L, { sku: O, normalPrice: q, discountedPrice: Q, discountPercent: V }),
                                ],
                            }),
                            (0, t.jsxs)(c.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(u.m, {
                                        text: z ? void 0 : D.intl.string(D.t.IqlPbQ),
                                        children: (0, t.jsx)(d.$, {
                                            variant: z ? "secondary" : "primary",
                                            onClick: X,
                                            text: D.intl.string(D.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    z &&
                                        (0, t.jsx)(d.$, {
                                            variant: "primary",
                                            onClick: J,
                                            text:
                                                null != $
                                                    ? D.intl.format(D.t.Xp5WTn, { price: $ })
                                                    : D.intl.string(D.t.boqtTA),
                                            fullWidth: !0,
                                        }),
                                    (0, t.jsx)(F.A, { onGift: Z }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
