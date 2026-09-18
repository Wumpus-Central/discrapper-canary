n.d(i, { A: () => z, I: () => w });
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
    f = n(287809),
    _ = n(67480),
    g = n(871123),
    k = n(733391),
    v = n(832163),
    R = n(69236),
    D = n(296045),
    P = n(459005),
    O = n(510022),
    S = n(317560),
    F = n(99161),
    G = n(971146),
    B = n(300182),
    L = n(445881),
    y = n(533772),
    U = n(375708),
    M = n(702360);
function H(l) {
    let { normalPrice: i, discountedPrice: n, discountPercent: a, orbsGate: r, orbPriceAmount: c, reward: o } = l,
        m = e.useMemo(
            () =>
                null == o || o.type !== b.Ns.ACTION || o.amount <= 0
                    ? null
                    : (0, t.jsx)("div", {
                          className: M.pt,
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
    if ("HIDDEN" !== r && null != c)
        return (0, t.jsx)(y.A, { orbsGate: r, className: M.PB, orbPrice: c, fiatPrice: i });
    let p = null != a && null != n;
    return (0, t.jsx)("div", {
        className: s()(M.PB, { [M.un]: p }),
        children: p
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != i &&
                          (0, t.jsx)(d.E, {
                              className: M.of,
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
function w(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, o.bG)([v.A], () => v.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(z, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function z(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: y } = l,
        w = (0, o.bG)([_.A], () => _.A.isFetching(n)),
        z = (0, I.A)({ skuId: n }),
        W = (0, o.bG)([v.A], () => (null != i ? v.A.getApplicationIdFromGuildId(i) : void 0)),
        Y = z?.applicationId ?? s ?? W,
        q = (0, o.bG)([E.A], () => null != Y && E.A.isFetchingApplication(Y)),
        K = (0, o.bG)([E.A], () => null != Y && E.A.didFetchingApplicationFail(Y)),
        J = (0, h.h)(Y),
        { analyticsLocations: Q } = (0, A.Ay)(x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, N.pE)();
    let V = (0, o.bG)([f.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? f.default.getUser(a.recipients[0]) : null,
        ),
        $ = (0, o.bG)([v.A], () => (null != n ? v.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: X, primaryIconLabel: Z } = e.useMemo(() => (0, g.Cv)(z, Y), [z, Y]),
        { normalPrice: ll, discountedPrice: li, discountPercent: ln, userPrice: lt } = (0, j.CD)({ sku: z }),
        le = (0, j.JL)({ sku: z }),
        la = le?.amount,
        ls = (0, P.n)({ surface: "card", skuId: z?.id }),
        lr = (0, D.x)({ surface: "card", skuId: z?.id }),
        lc = e.useMemo(() => lr.find((l) => l.type === b.B8.ORB_REDEMPTION) ?? null, [lr]),
        lo = (0, R.oG)({ orbPriceAmount: la, spendOrbsOffer: lc });
    e.useEffect(() => {
        null == Y ||
            null == n ||
            null != _.A.get(n) ||
            _.A.isFetching(n) ||
            _.A.didFetchingSkuFail(n) ||
            (0, k.Pp)(Y, n);
    }, [Y, n]);
    let ld = e.useCallback(
            (l) => {
                (l.stopPropagation(),
                    z?.applicationId != null &&
                        (0, S.R)({
                            customNavigateToSocialLayerStorefront: y,
                            skuId: n,
                            applicationId: z.applicationId,
                            isStorefront: !1,
                            analyticsLocations: Q,
                        }));
            },
            [n, z, Q, y],
        ),
        lu = e.useCallback(() => {
            null != z &&
                $ &&
                (0, F.a)(
                    z,
                    { isGift: !1 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [z, i, $]),
        lm = e.useCallback(() => {
            null != z &&
                (0, F.a)(
                    z,
                    { isGift: !0, giftRecipient: V ?? void 0 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [z, V]),
        lp = e.useCallback(() => {
            if (null == z || null == J) return;
            let l = [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: n,
                applicationId: J.id,
                analyticsLocations: l,
                onComplete: () => {
                    (0, O.n)({ sku: z, application: J, analyticsLocations: l });
                },
            });
        }, [z, J, n]),
        { onClick: lx, text: lA } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === lo
                    ? {
                          onClick: lp,
                          text: U.intl.format(U.t.JC15qj, {
                              orbPrice: la,
                              orbIconHook: () =>
                                  (0, t.jsx)(u.C, { className: M.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: lu,
                          text: null != lt ? U.intl.format(U.t.Xp5WTn, { price: lt }) : U.intl.string(U.t.boqtTA),
                      },
            [lo, lp, lu, lt, la],
        ),
        lE = null != Y && null == J && !K;
    return (w || q || lE) && (null == z || null == J)
        ? (0, t.jsx)("div", { className: M.kL, children: (0, t.jsx)(m.y, { className: M.u1 }) })
        : null != J && null != z && (0, C.A)(J) && J.id === z.applicationId
          ? (0, t.jsxs)("div", {
                className: M.kL,
                children: [
                    (0, t.jsx)(L.Ay, {
                        className: M.Nr,
                        skuId: n,
                        variant: L.s6.EMBEDDED,
                        onClick: ld,
                        analyticsLocations: Q,
                    }),
                    (0, t.jsxs)("div", {
                        className: M.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: M.lI,
                                children: [
                                    (0, t.jsx)(G.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: M.PB,
                                        children: [
                                            null != X &&
                                                (0, t.jsx)("img", { src: X.toString(), alt: Z, className: M.ye }),
                                            (0, t.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: z.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(H, {
                                        reward: ls,
                                        normalPrice: ll,
                                        discountedPrice: li,
                                        discountPercent: ln,
                                        orbsGate: lo,
                                        orbPriceAmount: la,
                                    }),
                                ],
                            }),
                            (0, t.jsxs)(r.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(p.m, {
                                        text: $ ? void 0 : U.intl.string(U.t.IqlPbQ),
                                        children: (0, t.jsx)(c.$, {
                                            variant: $ ? "secondary" : "primary",
                                            onClick: ld,
                                            text: U.intl.string(U.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    $ && (0, t.jsx)(c.$, { variant: "primary", onClick: lx, text: lA, fullWidth: !0 }),
                                    (0, t.jsx)(B.A, { onGift: lm }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
