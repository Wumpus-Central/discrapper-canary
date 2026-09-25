n.d(i, { A: () => z, I: () => Y });
var t = n(477900),
    e = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(825484),
    c = n(821609),
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
    _ = n(287809),
    f = n(67480),
    v = n(871123),
    k = n(439303),
    R = n(832163),
    D = n(69236),
    g = n(296045),
    O = n(459005),
    P = n(510022),
    G = n(317560),
    S = n(99161),
    B = n(971146),
    L = n(300182),
    F = n(467884),
    y = n(533772),
    M = n(375708),
    U = n(702360);
let H = { placement: k.Ye.EMBED };
function w(l) {
    let { normalPrice: i, discountedPrice: n, discountPercent: a, orbsGate: r, orbPriceAmount: c, reward: o } = l,
        m = e.useMemo(
            () =>
                null == o || o.type !== b.Ns.ACTION || o.amount <= 0
                    ? null
                    : (0, t.jsx)("div", {
                          className: U.pt,
                          children: (0, t.jsx)(d.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: M.intl.format(M.t.GiVd2Q, {
                                  orbCount: o.amount,
                                  orbIconHook: () =>
                                      (0, t.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      }),
            [o],
        );
    if ("HIDDEN" !== r && null != c)
        return (0, t.jsx)(y.A, { orbsGate: r, className: U.PB, orbPrice: c, fiatPrice: i });
    let p = null != a && null != n;
    return (0, t.jsx)("div", {
        className: s()(U.PB, { [U.un]: p }),
        children: p
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != i &&
                          (0, t.jsx)(d.E, {
                              className: U.of,
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
function Y(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, o.bG)([R.A], () => R.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(z, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function z(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: y } = l,
        Y = (0, o.bG)([f.A], () => f.A.isFetching(n)),
        z = (0, I.A)({ skuId: n }),
        W = (0, o.bG)([R.A], () => (null != i ? R.A.getApplicationIdFromGuildId(i) : void 0)),
        q = z?.applicationId ?? s ?? W,
        K = (0, o.bG)([E.A], () => null != q && E.A.isFetchingApplication(q)),
        V = (0, o.bG)([E.A], () => null != q && E.A.didFetchingApplicationFail(q)),
        J = (0, h.h)(q),
        { analyticsLocations: Q } = (0, A.Ay)(x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, N.pE)();
    let $ = (0, o.bG)([_.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? _.default.getUser(a.recipients[0]) : null,
        ),
        X = (0, o.bG)([R.A], () => (null != n ? R.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: Z, primaryIconLabel: ll } = e.useMemo(() => (0, v.Cv)(z, q), [z, q]),
        { normalPrice: li, discountedPrice: ln, discountPercent: lt, userPrice: le } = (0, j.CD)({ sku: z }),
        la = (0, j.JL)({ sku: z }),
        ls = la?.amount,
        lr = (0, O.n)({ surface: "card", skuId: z?.id }),
        lc = (0, g.x)({ surface: "card", skuId: z?.id }),
        lo = e.useMemo(() => lc.find((l) => l.type === b.B8.ORB_REDEMPTION) ?? null, [lc]),
        ld = (0, D.oG)({ orbPriceAmount: ls, spendOrbsOffer: lo }),
        lu = e.useCallback(
            (l) => {
                (l.stopPropagation(),
                    z?.applicationId != null &&
                        (0, G.R)({
                            customNavigateToSocialLayerStorefront: y,
                            skuId: n,
                            applicationId: z.applicationId,
                            isStorefront: !1,
                            analyticsLocations: Q,
                        }));
            },
            [n, z, Q, y],
        ),
        lm = e.useCallback(() => {
            null != z &&
                X &&
                (0, S.a)(
                    z,
                    { isGift: !1 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [z, i, X]),
        lp = e.useCallback(() => {
            null != z &&
                (0, S.a)(
                    z,
                    { isGift: !0, giftRecipient: $ ?? void 0 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [z, $]),
        lx = e.useCallback(() => {
            if (null == z || null == J) return;
            let l = [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: n,
                applicationId: J.id,
                analyticsLocations: l,
                onComplete: () => {
                    (0, P.n)({ sku: z, application: J, analyticsLocations: l });
                },
            });
        }, [z, J, n]),
        { onClick: lA, text: lE } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === ld
                    ? {
                          onClick: lx,
                          text: M.intl.format(M.t.JC15qj, {
                              orbPrice: ls,
                              orbIconHook: () =>
                                  (0, t.jsx)(u.C, { className: U.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: lm,
                          text: null != le ? M.intl.format(M.t.Xp5WTn, { price: le }) : M.intl.string(M.t.boqtTA),
                      },
            [ld, lx, lm, le, ls],
        ),
        lC = null != q && null == J && !V;
    return (Y || K || lC) && (null == z || null == J)
        ? (0, t.jsx)("div", { className: U.kL, children: (0, t.jsx)(m.y, { className: U.u1 }) })
        : null != J && null != z && (0, C.A)(J) && J.id === z.applicationId
          ? (0, t.jsxs)("div", {
                className: U.kL,
                children: [
                    (0, t.jsx)(k.E9, {
                        newValue: H,
                        children: (0, t.jsx)(F.Ay, {
                            className: U.Nr,
                            skuId: n,
                            variant: F.s6.EMBEDDED,
                            onClick: lu,
                            analyticsLocations: Q,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: U.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: U.lI,
                                children: [
                                    (0, t.jsx)(B.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: U.PB,
                                        children: [
                                            null != Z &&
                                                (0, t.jsx)("img", { src: Z.toString(), alt: ll, className: U.ye }),
                                            (0, t.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: z.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(w, {
                                        reward: lr,
                                        normalPrice: li,
                                        discountedPrice: ln,
                                        discountPercent: lt,
                                        orbsGate: ld,
                                        orbPriceAmount: ls,
                                    }),
                                ],
                            }),
                            (0, t.jsxs)(r.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(p.m, {
                                        text: X ? void 0 : M.intl.string(M.t.IqlPbQ),
                                        children: (0, t.jsx)(c.$, {
                                            variant: X ? "secondary" : "primary",
                                            onClick: lu,
                                            text: M.intl.string(M.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    X && (0, t.jsx)(c.$, { variant: "primary", onClick: lA, text: lE, fullWidth: !0 }),
                                    (0, t.jsx)(L.A, { onGift: lp }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
