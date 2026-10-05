n.d(i, { A: () => z, I: () => Y });
var t = n(477900),
    e = n(582128),
    a = n(503698),
    s = n.n(a),
    c = n(17928),
    o = n(834730),
    r = n(318254),
    d = n(638495),
    u = n(289873),
    m = n(825484),
    p = n(866665),
    x = n(821609),
    A = n(793574),
    E = n(688810),
    C = n(587895),
    h = n(875444),
    b = n(429913),
    j = n(288106),
    I = n(993046),
    T = n(801228),
    N = n(652165),
    _ = n(594832),
    f = n(287809),
    k = n(67480),
    v = n(871123),
    R = n(439303),
    D = n(832163),
    g = n(69236),
    O = n(296045),
    P = n(459005),
    y = n(510022),
    G = n(317560),
    S = n(99161),
    B = n(971146),
    L = n(300182),
    F = n(467884),
    M = n(533772),
    U = n(375708),
    K = n(702360);
let H = { placement: R.Ye.EMBED };
function w(l) {
    let { normalPrice: i, discountedPrice: n, discountPercent: a, orbsGate: c, orbPriceAmount: d, reward: u } = l,
        m = e.useMemo(
            () =>
                null == u || u.type !== j.Ns.ACTION || u.amount <= 0
                    ? null
                    : (0, t.jsx)("div", {
                          className: K.pt,
                          children: (0, t.jsx)(o.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: U.intl.format(U.t.GiVd2Q, {
                                  orbCount: u.amount,
                                  orbIconHook: () =>
                                      (0, t.jsx)(r.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      }),
            [u],
        );
    if ("HIDDEN" !== c && null != d)
        return (0, t.jsx)(M.A, { orbsGate: c, className: K.PB, orbPrice: d, fiatPrice: i });
    let p = null != a && null != n;
    return (0, t.jsx)("div", {
        className: s()(K.PB, { [K.un]: p }),
        children: p
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != i &&
                          (0, t.jsx)(o.E, {
                              className: K.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: i,
                          }),
                      (0, t.jsx)(o.E, { variant: "text-md/bold", lineClamp: 1, children: n }),
                      (0, t.jsxs)(o.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", a, ")"],
                      }),
                      m,
                  ],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [null != i && (0, t.jsx)(o.E, { variant: "text-md/bold", lineClamp: 1, children: i }), m],
              }),
    });
}
function Y(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, c.bG)([D.A], () => D.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(z, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function z(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: M } = l,
        Y = (0, d.k)(),
        z = (0, c.bG)([k.A], () => k.A.isFetching(n)),
        W = (0, T.A)({ skuId: n }),
        q = (0, c.bG)([D.A], () => (null != i ? D.A.getApplicationIdFromGuildId(i) : void 0)),
        V = W?.applicationId ?? s ?? q,
        J = (0, c.bG)([C.A], () => null != V && C.A.isFetchingApplication(V)),
        Q = (0, c.bG)([C.A], () => null != V && C.A.didFetchingApplicationFail(V)),
        $ = (0, b.h)(V),
        { analyticsLocations: X } = (0, E.Ay)(A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, _.pE)();
    let Z = (0, c.bG)([f.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? f.default.getUser(a.recipients[0]) : null,
        ),
        ll = (0, c.bG)([D.A], () => (null != n ? D.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: li, primaryIconLabel: ln } = e.useMemo(() => (0, v.Cv)(W, V), [W, V]),
        { normalPrice: lt, discountedPrice: le, discountPercent: la, userPrice: ls } = (0, I.CD)({ sku: W }),
        lc = (0, I.JL)({ sku: W }),
        lo = lc?.amount,
        lr = (0, P.n)({ surface: "card", skuId: W?.id }),
        ld = (0, O.x)({ surface: "card", skuId: W?.id }),
        lu = e.useMemo(() => ld.find((l) => l.type === j.B8.ORB_REDEMPTION) ?? null, [ld]),
        lm = (0, g.oG)({ orbPriceAmount: lo, spendOrbsOffer: lu }),
        lp = e.useCallback(
            (l) => {
                (l.stopPropagation(),
                    W?.applicationId != null &&
                        (0, G.R)({
                            customNavigateToSocialLayerStorefront: M,
                            skuId: n,
                            applicationId: W.applicationId,
                            isStorefront: !1,
                            analyticsLocations: X,
                            contextKey: Y,
                        }));
            },
            [n, W, X, M, Y],
        ),
        lx = e.useCallback(() => {
            null != W &&
                ll &&
                (0, S.a)(
                    W,
                    { isGift: !1 },
                    {
                        analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
                        guildId: i,
                        contextKey: Y,
                    },
                );
        }, [W, i, ll, Y]),
        lA = e.useCallback(() => {
            null != W &&
                (0, S.a)(
                    W,
                    { isGift: !0, giftRecipient: Z ?? void 0 },
                    { analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON], contextKey: Y },
                );
        }, [W, Z, Y]),
        lE = e.useCallback(() => {
            if (null == W || null == $) return;
            let l = [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, N.B4)({
                skuId: n,
                applicationId: $.id,
                contextKey: Y,
                analyticsLocations: l,
                onComplete: () => {
                    (0, y.n)({ sku: W, application: $, analyticsLocations: l, contextKey: Y });
                },
            });
        }, [W, $, n, Y]),
        { onClick: lC, text: lh } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === lm
                    ? {
                          onClick: lE,
                          text: U.intl.format(U.t.JC15qj, {
                              orbPrice: lo,
                              orbIconHook: () =>
                                  (0, t.jsx)(r.C, { className: K.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: lx,
                          text: null != ls ? U.intl.format(U.t.Xp5WTn, { price: ls }) : U.intl.string(U.t.boqtTA),
                      },
            [lm, lE, lx, ls, lo],
        ),
        lb = null != V && null == $ && !Q;
    return (z || J || lb) && (null == W || null == $)
        ? (0, t.jsx)("div", { className: K.kL, children: (0, t.jsx)(u.y, { className: K.u1 }) })
        : null != $ && null != W && (0, h.A)($) && $.id === W.applicationId
          ? (0, t.jsxs)("div", {
                className: K.kL,
                children: [
                    (0, t.jsx)(R.E9, {
                        newValue: H,
                        children: (0, t.jsx)(F.Ay, {
                            className: K.Nr,
                            skuId: n,
                            variant: F.s6.EMBEDDED,
                            onClick: lp,
                            analyticsLocations: X,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: K.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: K.lI,
                                children: [
                                    (0, t.jsx)(B.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: K.PB,
                                        children: [
                                            null != li &&
                                                (0, t.jsx)("img", { src: li.toString(), alt: ln, className: K.ye }),
                                            (0, t.jsx)(o.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: W.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(w, {
                                        reward: lr,
                                        normalPrice: lt,
                                        discountedPrice: le,
                                        discountPercent: la,
                                        orbsGate: lm,
                                        orbPriceAmount: lo,
                                    }),
                                ],
                            }),
                            (0, t.jsxs)(m.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(p.m, {
                                        text: ll ? void 0 : U.intl.string(U.t.IqlPbQ),
                                        children: (0, t.jsx)(x.$, {
                                            variant: ll ? "secondary" : "primary",
                                            onClick: lp,
                                            text: U.intl.string(U.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    ll && (0, t.jsx)(x.$, { variant: "primary", onClick: lC, text: lh, fullWidth: !0 }),
                                    (0, t.jsx)(L.A, { onGift: lA }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
