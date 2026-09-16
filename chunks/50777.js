n.d(i, { A: () => w, I: () => H });
var t = n(477900),
    e = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(825484),
    c = n(821609),
    o = n(17928),
    d = n(834730),
    u = n(318254),
    p = n(289873),
    m = n(866665),
    A = n(793574),
    x = n(688810),
    C = n(587895),
    E = n(875444),
    h = n(429913),
    b = n(288106),
    I = n(993046),
    j = n(801228),
    T = n(652165),
    N = n(594832),
    _ = n(287809),
    f = n(67480),
    k = n(871123),
    g = n(733391),
    v = n(832163),
    R = n(69236),
    D = n(31969),
    P = n(510022),
    F = n(317560),
    S = n(99161),
    G = n(971146),
    O = n(300182),
    L = n(445881),
    B = n(533772),
    y = n(375708),
    U = n(702360);
function M(l) {
    let { sku: i, normalPrice: n, discountedPrice: a, discountPercent: r, orbsGate: c, orbPriceAmount: o } = l,
        p = (0, D.F)("card", { applicationId: i.applicationId, skuId: i.id }),
        m = e.useMemo(() => {
            let l = p?.reward;
            return null == l || l.type !== b.Ns.ACTION || l.amount <= 0
                ? null
                : (0, t.jsx)("div", {
                      className: U.pt,
                      children: (0, t.jsx)(d.E, {
                          variant: "text-sm/semibold",
                          color: "currentColor",
                          children: y.intl.format(y.t.GiVd2Q, {
                              orbCount: l.amount,
                              orbIconHook: () => (0, t.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                          }),
                      }),
                  });
        }, [p]);
    if ("HIDDEN" !== c && null != o)
        return (0, t.jsx)(B.A, { orbsGate: c, className: U.PB, orbPrice: o, fiatPrice: n });
    let A = null != r && null != a;
    return (0, t.jsx)("div", {
        className: s()(U.PB, { [U.un]: A }),
        children: A
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != n &&
                          (0, t.jsx)(d.E, {
                              className: U.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, t.jsx)(d.E, { variant: "text-md/bold", lineClamp: 1, children: a }),
                      (0, t.jsxs)(d.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", r, ")"],
                      }),
                      m,
                  ],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [null != n && (0, t.jsx)(d.E, { variant: "text-md/bold", lineClamp: 1, children: n }), m],
              }),
    });
}
function H(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, o.bG)([v.A], () => v.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(w, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function w(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: b } = l,
        D = (0, o.bG)([f.A], () => f.A.isFetching(n)),
        B = (0, j.A)({ skuId: n }),
        H = (0, o.bG)([v.A], () => (null != i ? v.A.getApplicationIdFromGuildId(i) : void 0)),
        w = B?.applicationId ?? s ?? H,
        z = (0, o.bG)([C.A], () => null != w && C.A.isFetchingApplication(w)),
        W = (0, o.bG)([C.A], () => null != w && C.A.didFetchingApplicationFail(w)),
        Y = (0, h.h)(w),
        { analyticsLocations: q } = (0, x.Ay)(A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, N.pE)();
    let K = (0, o.bG)([_.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? _.default.getUser(a.recipients[0]) : null,
        ),
        J = (0, o.bG)([v.A], () => (null != n ? v.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: Q, primaryIconLabel: V } = e.useMemo(() => (0, k.Cv)(B, w), [B, w]),
        { normalPrice: $, discountedPrice: X, discountPercent: Z, userPrice: ll } = (0, I.CD)({ sku: B }),
        li = (0, I.JL)({ sku: B }),
        ln = li?.amount,
        lt = (0, R.oG)({ orbPriceAmount: ln, skuId: B?.id });
    e.useEffect(() => {
        null == w ||
            null == n ||
            null != f.A.get(n) ||
            f.A.isFetching(n) ||
            f.A.didFetchingSkuFail(n) ||
            (0, g.Pp)(w, n);
    }, [w, n]);
    let le = e.useCallback(
            (l) => {
                (l.stopPropagation(),
                    B?.applicationId != null &&
                        (0, F.R)({
                            customNavigateToSocialLayerStorefront: b,
                            skuId: n,
                            applicationId: B.applicationId,
                            isStorefront: !1,
                            analyticsLocations: q,
                        }));
            },
            [n, B, q, b],
        ),
        la = e.useCallback(() => {
            null != B &&
                J &&
                (0, S.a)(
                    B,
                    { isGift: !1 },
                    { analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: i },
                );
        }, [B, i, J]),
        ls = e.useCallback(() => {
            null != B &&
                (0, S.a)(
                    B,
                    { isGift: !0, giftRecipient: K ?? void 0 },
                    { analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [B, K]),
        lr = e.useCallback(() => {
            if (null == B || null == Y) return;
            let l = [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: n,
                applicationId: Y.id,
                analyticsLocations: l,
                onComplete: () => {
                    (0, P.n)({ sku: B, application: Y, analyticsLocations: l });
                },
            });
        }, [B, Y, n]),
        { onClick: lc, text: lo } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === lt
                    ? {
                          onClick: lr,
                          text: y.intl.format(y.t.JC15qj, {
                              orbPrice: ln,
                              orbIconHook: () =>
                                  (0, t.jsx)(u.C, { className: U.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: la,
                          text: null != ll ? y.intl.format(y.t.Xp5WTn, { price: ll }) : y.intl.string(y.t.boqtTA),
                      },
            [lt, lr, la, ll, ln],
        ),
        ld = null != w && null == Y && !W;
    return (D || z || ld) && (null == B || null == Y)
        ? (0, t.jsx)("div", { className: U.kL, children: (0, t.jsx)(p.y, { className: U.u1 }) })
        : null != Y && null != B && (0, E.A)(Y) && Y.id === B.applicationId
          ? (0, t.jsxs)("div", {
                className: U.kL,
                children: [
                    (0, t.jsx)(L.Ay, {
                        className: U.Nr,
                        skuId: n,
                        variant: L.s6.EMBEDDED,
                        onClick: le,
                        analyticsLocations: q,
                    }),
                    (0, t.jsxs)("div", {
                        className: U.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: U.lI,
                                children: [
                                    (0, t.jsx)(G.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: U.PB,
                                        children: [
                                            null != Q &&
                                                (0, t.jsx)("img", { src: Q.toString(), alt: V, className: U.ye }),
                                            (0, t.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: B.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(M, {
                                        sku: B,
                                        normalPrice: $,
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
                                    (0, t.jsx)(m.m, {
                                        text: J ? void 0 : y.intl.string(y.t.IqlPbQ),
                                        children: (0, t.jsx)(c.$, {
                                            variant: J ? "secondary" : "primary",
                                            onClick: le,
                                            text: y.intl.string(y.t.KLBTgF),
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
