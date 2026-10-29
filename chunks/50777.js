n.d(i, { A: () => q, I: () => z });
var t = n(477900),
    e = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    c = n(834730),
    o = n(318254),
    d = n(638495),
    u = n(289873),
    m = n(825484),
    p = n(866665),
    x = n(821609),
    A = n(793574),
    E = n(688810),
    C = n(587895),
    b = n(875444),
    h = n(429913),
    j = n(977445),
    I = n(288106),
    T = n(993046),
    N = n(801228),
    f = n(652165),
    _ = n(561794),
    v = n(287809),
    k = n(67480),
    R = n(871123),
    g = n(439303),
    D = n(832163),
    O = n(69236),
    P = n(296045),
    S = n(459005),
    y = n(510022),
    G = n(317560),
    B = n(99161),
    L = n(971146),
    F = n(300182),
    M = n(467884),
    U = n(533772),
    K = n(249434),
    H = n(105292),
    w = n(702360);
let W = { placement: g.Ye.EMBED };
function Y(l) {
    let {
            normalPrice: i,
            discountedPrice: n,
            discountPercent: a,
            orbsGate: r,
            orbPriceAmount: d,
            reward: u,
            unavailableLabel: m,
        } = l,
        p = e.useMemo(
            () =>
                null == u || u.type !== I.Ns.ACTION || u.amount <= 0
                    ? null
                    : (0, t.jsx)("div", {
                          className: w.pt,
                          children: (0, t.jsx)(c.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: H.intl.format(H.t.GiVd2Q, {
                                  orbCount: u.amount,
                                  orbIconHook: () =>
                                      (0, t.jsx)(o.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      }),
            [u],
        );
    if (null != m) return (0, t.jsx)(K.l, { label: m });
    if ("HIDDEN" !== r && null != d)
        return (0, t.jsx)(U.A, { orbsGate: r, className: w.PB, orbPrice: d, fiatPrice: i });
    let x = null != a && null != n;
    return (0, t.jsx)("div", {
        className: s()(w.PB, { [w.un]: x }),
        children: x
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != i &&
                          (0, t.jsx)(c.E, {
                              className: w.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: i,
                          }),
                      (0, t.jsx)(c.E, { variant: "text-md/bold", lineClamp: 1, children: n }),
                      (0, t.jsxs)(c.E, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", a, ")"],
                      }),
                      p,
                  ],
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [null != i && (0, t.jsx)(c.E, { variant: "text-md/bold", lineClamp: 1, children: i }), p],
              }),
    });
}
function z(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, r.bG)([D.A], () => D.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(q, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function q(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: U } = l,
        K = (0, d.k)(),
        z = (0, r.bG)([k.A], () => k.A.isFetching(n)),
        q = (0, N.A)({ skuId: n }),
        Q = (0, j.uS)(q?.applicationId),
        V = null == q || q.available || Q ? null : H.intl.string(H.t.RWouSQ),
        J = null == V,
        $ = (0, r.bG)([D.A], () => (null != i ? D.A.getApplicationIdFromGuildId(i) : void 0)),
        X = q?.applicationId ?? s ?? $,
        Z = (0, r.bG)([C.A], () => null != X && C.A.isFetchingApplication(X)),
        ll = (0, r.bG)([C.A], () => null != X && C.A.didFetchingApplicationFail(X)),
        li = (0, h.h)(X),
        { analyticsLocations: ln } = (0, E.Ay)(A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, _.pE)();
    let lt = (0, r.bG)([v.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? v.default.getUser(a.recipients[0]) : null,
        ),
        le = (0, r.bG)([D.A], () => (null != n ? D.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: la, primaryIconLabel: ls } = e.useMemo(() => (0, R.Cv)(q, X), [q, X]),
        { normalPrice: lr, discountedPrice: lc, discountPercent: lo, userPrice: ld } = (0, T.CD)({ sku: q }),
        lu = (0, T.JL)({ sku: q }),
        lm = lu?.amount,
        lp = (0, S.n)({ surface: "card", skuId: q?.id }),
        lx = (0, P.x)({ surface: "card", skuId: q?.id }),
        lA = e.useMemo(() => lx.find((l) => l.type === I.B8.ORB_REDEMPTION) ?? null, [lx]),
        lE = (0, O.oG)({ orbPriceAmount: lm, spendOrbsOffer: lA }),
        lC = e.useCallback(
            (l) => {
                (l.stopPropagation(),
                    q?.applicationId != null &&
                        (0, G.R)({
                            customNavigateToSocialLayerStorefront: U,
                            skuId: n,
                            applicationId: q.applicationId,
                            isStorefront: !1,
                            analyticsLocations: ln,
                            contextKey: K,
                        }));
            },
            [n, q, ln, U, K],
        ),
        lb = e.useCallback(() => {
            null != q &&
                le &&
                (0, B.a)(
                    q,
                    { isGift: !1 },
                    {
                        analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
                        guildId: i,
                        contextKey: K,
                    },
                );
        }, [q, i, le, K]),
        lh = e.useCallback(() => {
            null != q &&
                (0, B.a)(
                    q,
                    { isGift: !0, giftRecipient: lt ?? void 0 },
                    { analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON], contextKey: K },
                );
        }, [q, lt, K]),
        lj = e.useCallback(() => {
            if (null == q || null == li) return;
            let l = [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, f.B4)({
                skuId: n,
                applicationId: li.id,
                contextKey: K,
                analyticsLocations: l,
                onComplete: () => {
                    (0, y.n)({ sku: q, application: li, analyticsLocations: l, contextKey: K });
                },
            });
        }, [q, li, n, K]),
        { onClick: lI, text: lT } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === lE
                    ? {
                          onClick: lj,
                          text: H.intl.format(H.t.JC15qj, {
                              orbPrice: lm,
                              orbIconHook: () =>
                                  (0, t.jsx)(o.C, { className: w.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: lb,
                          text: null != ld ? H.intl.format(H.t.Xp5WTn, { price: ld }) : H.intl.string(H.t.boqtTA),
                      },
            [lE, lj, lb, ld, lm],
        ),
        lN = null != X && null == li && !ll;
    return (z || Z || lN) && (null == q || null == li)
        ? (0, t.jsx)("div", { className: w.kL, children: (0, t.jsx)(u.y, { className: w.u1 }) })
        : null != li && null != q && (0, b.A)(li) && li.id === q.applicationId
          ? (0, t.jsxs)("div", {
                className: w.kL,
                children: [
                    (0, t.jsx)(g.E9, {
                        newValue: W,
                        children: (0, t.jsx)(M.Ay, {
                            className: w.Nr,
                            skuId: n,
                            variant: M.s6.EMBEDDED,
                            onClick: lC,
                            analyticsLocations: ln,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: w.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: w.lI,
                                children: [
                                    (0, t.jsx)(L.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: w.PB,
                                        children: [
                                            null != la &&
                                                (0, t.jsx)("img", { src: la.toString(), alt: ls, className: w.ye }),
                                            (0, t.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: q.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(Y, {
                                        unavailableLabel: V,
                                        reward: lp,
                                        normalPrice: lr,
                                        discountedPrice: lc,
                                        discountPercent: lo,
                                        orbsGate: lE,
                                        orbPriceAmount: lm,
                                    }),
                                ],
                            }),
                            (0, t.jsxs)(m.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(p.m, {
                                        text: le ? void 0 : H.intl.string(H.t.IqlPbQ),
                                        children: (0, t.jsx)(x.$, {
                                            variant: J && le ? "secondary" : "primary",
                                            onClick: lC,
                                            text: H.intl.string(H.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    J &&
                                        (0, t.jsxs)(t.Fragment, {
                                            children: [
                                                le &&
                                                    (0, t.jsx)(x.$, {
                                                        variant: "primary",
                                                        onClick: lI,
                                                        text: lT,
                                                        fullWidth: !0,
                                                    }),
                                                (0, t.jsx)(F.A, { onGift: lh }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
