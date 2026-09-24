n.d(i, { A: () => W, I: () => z });
var t = n(477900),
    e = n(582128),
    a = n(503698),
    s = n.n(a),
    c = n(825484),
    r = n(821609),
    o = n(17928),
    d = n(834730),
    u = n(318254),
    m = n(289873),
    p = n(866665),
    x = n(793574),
    A = n(688810),
    E = n(587895),
    C = n(875444),
    h = n(429913),
    b = n(288106),
    j = n(993046),
    I = n(801228),
    T = n(652165),
    N = n(594832),
    f = n(287809),
    _ = n(67480),
    g = n(871123),
    k = n(733391),
    v = n(439303),
    R = n(832163),
    D = n(69236),
    P = n(296045),
    O = n(459005),
    S = n(510022),
    F = n(317560),
    G = n(99161),
    B = n(971146),
    L = n(300182),
    y = n(467884),
    M = n(533772),
    U = n(375708),
    H = n(702360);
let w = { placement: v.Ye.EMBED };
function Y(l) {
    let { normalPrice: i, discountedPrice: n, discountPercent: a, orbsGate: c, orbPriceAmount: r, reward: o } = l,
        m = e.useMemo(
            () =>
                null == o || o.type !== b.Ns.ACTION || o.amount <= 0
                    ? null
                    : (0, t.jsx)("div", {
                          className: H.pt,
                          children: (0, t.jsx)(d.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: U.intl.format(U.t.GiVd2Q, {
                                  orbCount: o.amount,
                                  orbIconHook: () =>
                                      (0, t.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      }),
            [o],
        );
    if ("HIDDEN" !== c && null != r)
        return (0, t.jsx)(M.A, { orbsGate: c, className: H.PB, orbPrice: r, fiatPrice: i });
    let p = null != a && null != n;
    return (0, t.jsx)("div", {
        className: s()(H.PB, { [H.un]: p }),
        children: p
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != i &&
                          (0, t.jsx)(d.E, {
                              className: H.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: i,
                          }),
                      (0, t.jsx)(d.E, { variant: "text-md/bold", lineClamp: 1, children: n }),
                      (0, t.jsxs)(d.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", a, ")"],
                      }),
                      m,
                  ],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [null != i && (0, t.jsx)(d.E, { variant: "text-md/bold", lineClamp: 1, children: i }), m],
              }),
    });
}
function z(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, o.bG)([R.A], () => R.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(W, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function W(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: M } = l,
        z = (0, o.bG)([_.A], () => _.A.isFetching(n)),
        W = (0, I.A)({ skuId: n }),
        q = (0, o.bG)([R.A], () => (null != i ? R.A.getApplicationIdFromGuildId(i) : void 0)),
        K = W?.applicationId ?? s ?? q,
        V = (0, o.bG)([E.A], () => null != K && E.A.isFetchingApplication(K)),
        J = (0, o.bG)([E.A], () => null != K && E.A.didFetchingApplicationFail(K)),
        Q = (0, h.h)(K),
        { analyticsLocations: $ } = (0, A.Ay)(x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, N.pE)();
    let X = (0, o.bG)([f.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? f.default.getUser(a.recipients[0]) : null,
        ),
        Z = (0, o.bG)([R.A], () => (null != n ? R.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: ll, primaryIconLabel: li } = e.useMemo(() => (0, g.Cv)(W, K), [W, K]),
        { normalPrice: ln, discountedPrice: lt, discountPercent: le, userPrice: la } = (0, j.CD)({ sku: W }),
        ls = (0, j.JL)({ sku: W }),
        lc = ls?.amount,
        lr = (0, O.n)({ surface: "card", skuId: W?.id }),
        lo = (0, P.x)({ surface: "card", skuId: W?.id }),
        ld = e.useMemo(() => lo.find((l) => l.type === b.B8.ORB_REDEMPTION) ?? null, [lo]),
        lu = (0, D.oG)({ orbPriceAmount: lc, spendOrbsOffer: ld });
    e.useEffect(() => {
        null == K ||
            null == n ||
            null != _.A.get(n) ||
            _.A.isFetching(n) ||
            _.A.didFetchingSkuFail(n) ||
            (0, k.Pp)(K, n);
    }, [K, n]);
    let lm = e.useCallback(
            (l) => {
                (l.stopPropagation(),
                    W?.applicationId != null &&
                        (0, F.R)({
                            customNavigateToSocialLayerStorefront: M,
                            skuId: n,
                            applicationId: W.applicationId,
                            isStorefront: !1,
                            analyticsLocations: $,
                        }));
            },
            [n, W, $, M],
        ),
        lp = e.useCallback(() => {
            null != W &&
                Z &&
                (0, G.a)(
                    W,
                    { isGift: !1 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [W, i, Z]),
        lx = e.useCallback(() => {
            null != W &&
                (0, G.a)(
                    W,
                    { isGift: !0, giftRecipient: X ?? void 0 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [W, X]),
        lA = e.useCallback(() => {
            if (null == W || null == Q) return;
            let l = [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: n,
                applicationId: Q.id,
                analyticsLocations: l,
                onComplete: () => {
                    (0, S.n)({ sku: W, application: Q, analyticsLocations: l });
                },
            });
        }, [W, Q, n]),
        { onClick: lE, text: lC } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === lu
                    ? {
                          onClick: lA,
                          text: U.intl.format(U.t.JC15qj, {
                              orbPrice: lc,
                              orbIconHook: () =>
                                  (0, t.jsx)(u.C, { className: H.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: lp,
                          text: null != la ? U.intl.format(U.t.Xp5WTn, { price: la }) : U.intl.string(U.t.boqtTA),
                      },
            [lu, lA, lp, la, lc],
        ),
        lh = null != K && null == Q && !J;
    return (z || V || lh) && (null == W || null == Q)
        ? (0, t.jsx)("div", { className: H.kL, children: (0, t.jsx)(m.y, { className: H.u1 }) })
        : null != Q && null != W && (0, C.A)(Q) && Q.id === W.applicationId
          ? (0, t.jsxs)("div", {
                className: H.kL,
                children: [
                    (0, t.jsx)(v.E9, {
                        newValue: w,
                        children: (0, t.jsx)(y.Ay, {
                            className: H.Nr,
                            skuId: n,
                            variant: y.s6.EMBEDDED,
                            onClick: lm,
                            analyticsLocations: $,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: H.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: H.lI,
                                children: [
                                    (0, t.jsx)(B.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: H.PB,
                                        children: [
                                            null != ll &&
                                                (0, t.jsx)("img", { src: ll.toString(), alt: li, className: H.ye }),
                                            (0, t.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: W.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(Y, {
                                        reward: lr,
                                        normalPrice: ln,
                                        discountedPrice: lt,
                                        discountPercent: le,
                                        orbsGate: lu,
                                        orbPriceAmount: lc,
                                    }),
                                ],
                            }),
                            (0, t.jsxs)(c.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(p.m, {
                                        text: Z ? void 0 : U.intl.string(U.t.IqlPbQ),
                                        children: (0, t.jsx)(r.$, {
                                            variant: Z ? "secondary" : "primary",
                                            onClick: lm,
                                            text: U.intl.string(U.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    Z && (0, t.jsx)(r.$, { variant: "primary", onClick: lE, text: lC, fullWidth: !0 }),
                                    (0, t.jsx)(L.A, { onGift: lx }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
