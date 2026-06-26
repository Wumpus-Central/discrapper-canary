n.d(i, { A: () => z, I: () => H });
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
    f = n(67480),
    N = n(328968),
    v = n(871123),
    g = n(733391),
    k = n(832163),
    R = n(69236),
    D = n(31969),
    F = n(510022),
    P = n(317560),
    S = n(533406),
    O = n(971146),
    G = n(300182),
    L = n(328100),
    B = n(533772),
    U = n(375708),
    y = n(613798);
function M(l) {
    let { sku: i, normalPrice: n, discountedPrice: a, discountPercent: r, orbsGate: c, orbPriceAmount: o } = l,
        d = (0, D.F)("card", { applicationId: i.applicationId, skuId: i.id }),
        p = e.useMemo(() => {
            if (null == d) return null;
            let { Icon: l, text: i } = d;
            return (0, t.jsx)("div", {
                className: y.pt,
                children: (0, t.jsxs)("div", {
                    children: [
                        null != l && (0, t.jsx)(l, { size: "xs", color: "currentColor" }),
                        (0, t.jsx)(u.E, { variant: "text-sm/semibold", color: "currentColor", children: i }),
                    ],
                }),
            });
        }, [d]);
    if ("HIDDEN" !== c && null != o)
        return (0, t.jsx)(B.A, { orbsGate: c, className: y.PB, orbPrice: o, fiatPrice: n });
    let m = null != r && null != a;
    return (0, t.jsx)("div", {
        className: s()(y.PB, { [y.un]: m }),
        children: m
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != n &&
                          (0, t.jsx)(u.E, {
                              className: y.of,
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
function H(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, o.bG)([k.A], () => k.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(z, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function z(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: D } = l,
        B = (0, o.bG)([N.A], () => N.A.isFetchingForSKU(n)),
        H = (0, _.A)({ skuId: n }),
        z = (0, o.bG)([k.A], () => (null != i ? k.A.getApplicationIdFromGuildId(i) : void 0)),
        K = H?.applicationId ?? s ?? z,
        W = (0, o.bG)([E.A], () => null != K && E.A.isFetchingApplication(K)),
        Y = (0, o.bG)([E.A], () => null != K && E.A.didFetchingApplicationFail(K)),
        q = (0, C.h)(K),
        { analyticsLocations: w } = (0, A.Ay)(x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, I.pE)();
    let J = (0, o.bG)([T.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? T.default.getUser(a.recipients[0]) : null,
        ),
        $ = (0, o.bG)([k.A], () => (null != n ? k.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: Q, primaryIconLabel: V } = e.useMemo(() => (0, v.Cv)(H, K), [H, K]),
        { normalPrice: X, discountedPrice: Z, discountPercent: ll, userPrice: li } = (0, j.CD)({ sku: H }),
        ln = (0, j.JL)({ sku: H }),
        lt = ln?.amount,
        le = (0, R.o)({
            orbPriceAmount: lt,
            applicationId: K,
            location: "social_layer_storefront_product_details_embed",
        });
    e.useEffect(() => {
        null == K ||
            null == n ||
            null != f.A.get(n) ||
            f.A.isFetching(n) ||
            f.A.didFetchingSkuFail(n) ||
            (0, g.Pp)(K, n);
    }, [K, n]);
    let la = e.useCallback(
            (l) => {
                l.stopPropagation(),
                    H?.applicationId != null &&
                        (0, P.R)({
                            customNavigateToSocialLayerStorefront: D,
                            skuId: n,
                            applicationId: H.applicationId,
                            isStorefront: !1,
                            analyticsLocations: w,
                        });
            },
            [n, H, w, D],
        ),
        ls = e.useCallback(() => {
            null != H &&
                $ &&
                (0, S.a)(
                    H,
                    { isGift: !1 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [H, i, $]),
        lr = e.useCallback(() => {
            null != H &&
                (0, S.a)(
                    H,
                    { isGift: !0, giftRecipient: J ?? void 0 },
                    { analyticsLocations: [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [H, J]),
        lc = e.useCallback(() => {
            if (null == H || null == q) return;
            let l = [x.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, b.B4)({
                skuId: n,
                applicationId: q.id,
                analyticsLocations: l,
                onComplete: () => {
                    (0, F.n)({ sku: H, application: q, analyticsLocations: l });
                },
            });
        }, [H, q, n]),
        { onClick: lo, text: ld } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === le
                    ? {
                          onClick: lc,
                          text: U.intl.format(U.t.JC15qj, {
                              orbPrice: lt,
                              orbIconHook: () =>
                                  (0, t.jsx)(p.C, { className: y.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: ls,
                          text: null != li ? U.intl.format(U.t.Xp5WTn, { price: li }) : U.intl.string(U.t.boqtTA),
                      },
            [le, lc, ls, li, lt],
        ),
        lu = null != K && null == q && !Y;
    return (B || W || lu) && (null == H || null == q)
        ? (0, t.jsx)("div", { className: y.kL, children: (0, t.jsx)(m.y, { className: y.u1 }) })
        : null != q && null != H && (0, h.A)(q) && q.id === H.applicationId
          ? (0, t.jsxs)("div", {
                className: y.kL,
                children: [
                    (0, t.jsx)(L.A, {
                        className: y.Nr,
                        skuId: n,
                        variant: L.s.EMBEDDED,
                        onClick: la,
                        analyticsLocations: w,
                    }),
                    (0, t.jsxs)("div", {
                        className: y.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: y.lI,
                                children: [
                                    (0, t.jsx)(O.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: y.PB,
                                        children: [
                                            null != Q &&
                                                (0, t.jsx)("img", { src: Q.toString(), alt: V, className: y.ye }),
                                            (0, t.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: H.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(M, {
                                        sku: H,
                                        normalPrice: X,
                                        discountedPrice: Z,
                                        discountPercent: ll,
                                        orbsGate: le,
                                        orbPriceAmount: lt,
                                    }),
                                ],
                            }),
                            (0, t.jsxs)(r.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(d.m, {
                                        text: $ ? void 0 : U.intl.string(U.t.IqlPbQ),
                                        children: (0, t.jsx)(c.$, {
                                            variant: $ ? "secondary" : "primary",
                                            onClick: la,
                                            text: U.intl.string(U.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    $ && (0, t.jsx)(c.$, { variant: "primary", onClick: lo, text: ld, fullWidth: !0 }),
                                    (0, t.jsx)(G.A, { onGift: lr }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
