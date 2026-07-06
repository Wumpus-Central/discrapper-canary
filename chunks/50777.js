t.d(i, { A: () => z, I: () => w });
var n = t(627968),
    e = t(64700),
    a = t(503698),
    s = t.n(a),
    o = t(825484),
    r = t(821609),
    c = t(17928),
    d = t(990078),
    u = t(834730),
    p = t(318254),
    m = t(289873),
    A = t(793574),
    x = t(688810),
    C = t(587895),
    E = t(875444),
    h = t(429913),
    b = t(288106),
    j = t(117218),
    I = t(801228),
    _ = t(652165),
    T = t(561794),
    N = t(287809),
    f = t(67480),
    g = t(328968),
    k = t(871123),
    v = t(733391),
    R = t(832163),
    D = t(69236),
    F = t(31969),
    P = t(510022),
    S = t(317560),
    O = t(533406),
    G = t(971146),
    L = t(300182),
    B = t(467884),
    U = t(533772),
    y = t(375708),
    M = t(918374);
function H(l) {
    let { sku: i, normalPrice: t, discountedPrice: a, discountPercent: o, orbsGate: r, orbPriceAmount: c } = l,
        d = (0, F.F)("card", { applicationId: i.applicationId, skuId: i.id }),
        m = e.useMemo(() => {
            let l = d?.reward;
            return null == l || l.type !== b.Ns.ACTION || l.amount <= 0
                ? null
                : (0, n.jsx)("div", {
                      className: M.pt,
                      children: (0, n.jsx)(u.E, {
                          variant: "text-sm/semibold",
                          color: "currentColor",
                          children: y.intl.format(y.t.GiVd2Q, {
                              orbCount: l.amount,
                              orbIconHook: () => (0, n.jsx)(p.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                          }),
                      }),
                  });
        }, [d]);
    if ("HIDDEN" !== r && null != c)
        return (0, n.jsx)(U.A, { orbsGate: r, className: M.PB, orbPrice: c, fiatPrice: t });
    let A = null != o && null != a;
    return (0, n.jsx)("div", {
        className: s()(M.PB, { [M.un]: A }),
        children: A
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      null != t &&
                          (0, n.jsx)(u.E, {
                              className: M.of,
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
                          children: ["(", o, ")"],
                      }),
                      m,
                  ],
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [null != t && (0, n.jsx)(u.E, { variant: "text-md/bold", lineClamp: 1, children: t }), m],
              }),
    });
}
function w(l) {
    let { applicationId: i, skuId: t, channel: e } = l,
        a = (0, c.bG)([R.A], () => R.A.getGuildIdFromApplicationId(i));
    return (0, n.jsx)(z, { applicationId: i, guildId: a, skuId: t, channel: e });
}
function z(l) {
    let { guildId: i, skuId: t, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: b } = l,
        F = (0, c.bG)([g.A], () => g.A.isFetchingForSKU(t)),
        U = (0, I.A)({ skuId: t }),
        w = (0, c.bG)([R.A], () => (null != i ? R.A.getApplicationIdFromGuildId(i) : void 0)),
        z = U?.applicationId ?? s ?? w,
        K = (0, c.bG)([C.A], () => null != z && C.A.isFetchingApplication(z)),
        W = (0, c.bG)([C.A], () => null != z && C.A.didFetchingApplicationFail(z)),
        Y = (0, h.h)(z),
        { analyticsLocations: q } = (0, x.Ay)(A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, T.pE)();
    let J = (0, c.bG)([N.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? N.default.getUser(a.recipients[0]) : null,
        ),
        Q = (0, c.bG)([R.A], () => (null != t ? R.A.getNormalizedSKUEligibility(t) : void 0), [t]),
        { primaryIconAsset: V, primaryIconLabel: $ } = e.useMemo(() => (0, k.Cv)(U, z), [U, z]),
        { normalPrice: X, discountedPrice: Z, discountPercent: ll, userPrice: li } = (0, j.CD)({ sku: U }),
        lt = (0, j.JL)({ sku: U }),
        ln = lt?.amount,
        le = (0, D.o)({
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
            (0, v.Pp)(z, t);
    }, [z, t]);
    let la = e.useCallback(
            (l) => {
                l.stopPropagation(),
                    U?.applicationId != null &&
                        (0, S.R)({
                            customNavigateToSocialLayerStorefront: b,
                            skuId: t,
                            applicationId: U.applicationId,
                            isStorefront: !1,
                            analyticsLocations: q,
                        });
            },
            [t, U, q, b],
        ),
        ls = e.useCallback(() => {
            null != U &&
                Q &&
                (0, O.a)(
                    U,
                    { isGift: !1 },
                    { analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [U, i, Q]),
        lo = e.useCallback(() => {
            null != U &&
                (0, O.a)(
                    U,
                    { isGift: !0, giftRecipient: J ?? void 0 },
                    { analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [U, J]),
        lr = e.useCallback(() => {
            if (null == U || null == Y) return;
            let l = [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, _.B4)({
                skuId: t,
                applicationId: Y.id,
                analyticsLocations: l,
                onComplete: () => {
                    (0, P.n)({ sku: U, application: Y, analyticsLocations: l });
                },
            });
        }, [U, Y, t]),
        { onClick: lc, text: ld } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === le
                    ? {
                          onClick: lr,
                          text: y.intl.format(y.t.JC15qj, {
                              orbPrice: ln,
                              orbIconHook: () =>
                                  (0, n.jsx)(p.C, { className: M.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: ls,
                          text: null != li ? y.intl.format(y.t.Xp5WTn, { price: li }) : y.intl.string(y.t.boqtTA),
                      },
            [le, lr, ls, li, ln],
        ),
        lu = null != z && null == Y && !W;
    return (F || K || lu) && (null == U || null == Y)
        ? (0, n.jsx)("div", { className: M.kL, children: (0, n.jsx)(m.y, { className: M.u1 }) })
        : null != Y && null != U && (0, E.A)(Y) && Y.id === U.applicationId
          ? (0, n.jsxs)("div", {
                className: M.kL,
                children: [
                    (0, n.jsx)(B.A, {
                        className: M.Nr,
                        skuId: t,
                        variant: B.s.EMBEDDED,
                        onClick: la,
                        analyticsLocations: q,
                    }),
                    (0, n.jsxs)("div", {
                        className: M.zH,
                        children: [
                            (0, n.jsxs)("div", {
                                className: M.lI,
                                children: [
                                    (0, n.jsx)(G.V, {}),
                                    (0, n.jsxs)("div", {
                                        className: M.PB,
                                        children: [
                                            null != V &&
                                                (0, n.jsx)("img", { src: V.toString(), alt: $, className: M.ye }),
                                            (0, n.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: U.name,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(H, {
                                        sku: U,
                                        normalPrice: X,
                                        discountedPrice: Z,
                                        discountPercent: ll,
                                        orbsGate: le,
                                        orbPriceAmount: ln,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(o.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, n.jsx)(d.m, {
                                        text: Q ? void 0 : y.intl.string(y.t.IqlPbQ),
                                        children: (0, n.jsx)(r.$, {
                                            variant: Q ? "secondary" : "primary",
                                            onClick: la,
                                            text: y.intl.string(y.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    Q && (0, n.jsx)(r.$, { variant: "primary", onClick: lc, text: ld, fullWidth: !0 }),
                                    (0, n.jsx)(L.A, { onGift: lo }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
