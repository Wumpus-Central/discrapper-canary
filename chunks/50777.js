n.d(i, { A: () => z, I: () => Y });
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
    f = n(561794),
    _ = n(287809),
    v = n(67480),
    k = n(871123),
    R = n(439303),
    g = n(832163),
    D = n(69236),
    O = n(296045),
    P = n(459005),
    S = n(510022),
    y = n(317560),
    G = n(82343),
    L = n(971146),
    B = n(300182),
    F = n(467884),
    M = n(533772),
    U = n(249434),
    K = n(105292),
    H = n(702360);
let w = { placement: R.Ye.EMBED };
function W(l) {
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
                          className: H.pt,
                          children: (0, t.jsx)(c.E, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: K.intl.format(K.t.GiVd2Q, {
                                  orbCount: u.amount,
                                  orbIconHook: () =>
                                      (0, t.jsx)(o.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      }),
            [u],
        );
    if (null != m) return (0, t.jsx)(U.l, { label: m });
    if ("HIDDEN" !== r && null != d)
        return (0, t.jsx)(M.A, { orbsGate: r, className: H.PB, orbPrice: d, fiatPrice: i });
    let x = null != a && null != n;
    return (0, t.jsx)("div", {
        className: s()(H.PB, { [H.un]: x }),
        children: x
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      null != i &&
                          (0, t.jsx)(c.E, {
                              className: H.of,
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
function Y(l) {
    let { applicationId: i, skuId: n, channel: e } = l,
        a = (0, r.bG)([g.A], () => g.A.getGuildIdFromApplicationId(i));
    return (0, t.jsx)(z, { applicationId: i, guildId: a, skuId: n, channel: e });
}
function z(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: M } = l,
        U = (0, d.k)(),
        Y = (0, r.bG)([v.A], () => v.A.isFetching(n)),
        z = (0, N.A)({ skuId: n }),
        q = (0, j.uS)(z?.applicationId),
        Q = null == z || z.available || q ? null : K.intl.string(K.t.RWouSQ),
        V = null == Q,
        J = (0, r.bG)([g.A], () => (null != i ? g.A.getApplicationIdFromGuildId(i) : void 0)),
        $ = z?.applicationId ?? s ?? J,
        X = (0, r.bG)([C.A], () => null != $ && C.A.isFetchingApplication($)),
        Z = (0, r.bG)([C.A], () => null != $ && C.A.didFetchingApplicationFail($)),
        ll = (0, h.h)($),
        { analyticsLocations: li } = (0, E.Ay)(A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, f.pE)();
    let ln = (0, r.bG)([_.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? _.default.getUser(a.recipients[0]) : null,
        ),
        lt = (0, r.bG)([g.A], () => (null != n ? g.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: le, primaryIconLabel: la } = e.useMemo(() => (0, k.Cv)(z, $), [z, $]),
        { normalPrice: ls, discountedPrice: lr, discountPercent: lc, userPrice: lo } = (0, T.CD)({ sku: z }),
        ld = (0, T.JL)({ sku: z }),
        lu = ld?.amount,
        lm = (0, P.n)({ surface: "card", skuId: z?.id }),
        lp = (0, O.x)({ surface: "card", skuId: z?.id }),
        lx = e.useMemo(() => lp.find((l) => l.type === I.B8.ORB_REDEMPTION) ?? null, [lp]),
        lA = (0, D.oG)({ orbPriceAmount: lu, spendOrbsOffer: lx }),
        lE = e.useCallback(
            (l) => {
                (l.stopPropagation(),
                    z?.applicationId != null &&
                        (0, y.R)({
                            customNavigateToSocialLayerStorefront: M,
                            skuId: n,
                            applicationId: z.applicationId,
                            isStorefront: !1,
                            analyticsLocations: li,
                            contextKey: U,
                        }));
            },
            [n, z, li, M, U],
        ),
        lC = e.useCallback(() => {
            null != z &&
                lt &&
                (0, G.a)(
                    z,
                    { isGift: !1 },
                    {
                        analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
                        guildId: i,
                        contextKey: U,
                    },
                );
        }, [z, i, lt, U]),
        lb = e.useCallback(() => {
            null != z &&
                (0, G.a)(
                    z,
                    { isGift: !0, giftRecipient: ln ?? void 0 },
                    { analyticsLocations: [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON], contextKey: U },
                );
        }, [z, ln, U]),
        lh = e.useCallback(() => {
            if (null == z || null == ll) return;
            let l = [A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, G.n)(z, {
                guildId: i,
                contextKey: U,
                analyticsLocations: l,
                onComplete: () => {
                    (0, S.n)({ sku: z, application: ll, analyticsLocations: l, contextKey: U });
                },
            });
        }, [z, ll, i, U]),
        { onClick: lj, text: lI } = e.useMemo(
            () =>
                "CAN_CHECKOUT" === lA
                    ? {
                          onClick: lh,
                          text: K.intl.format(K.t.JC15qj, {
                              orbPrice: lu,
                              orbIconHook: () =>
                                  (0, t.jsx)(o.C, { className: H.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: lC,
                          text: null != lo ? K.intl.format(K.t.Xp5WTn, { price: lo }) : K.intl.string(K.t.boqtTA),
                      },
            [lA, lh, lC, lo, lu],
        ),
        lT = null != $ && null == ll && !Z;
    return (Y || X || lT) && (null == z || null == ll)
        ? (0, t.jsx)("div", { className: H.kL, children: (0, t.jsx)(u.y, { className: H.u1 }) })
        : null != ll && null != z && (0, b.A)(ll) && ll.id === z.applicationId
          ? (0, t.jsxs)("div", {
                className: H.kL,
                children: [
                    (0, t.jsx)(R.E9, {
                        newValue: w,
                        children: (0, t.jsx)(F.Ay, {
                            className: H.Nr,
                            skuId: n,
                            variant: F.s6.EMBEDDED,
                            onClick: lE,
                            analyticsLocations: li,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: H.zH,
                        children: [
                            (0, t.jsxs)("div", {
                                className: H.lI,
                                children: [
                                    (0, t.jsx)(L.V, {}),
                                    (0, t.jsxs)("div", {
                                        className: H.PB,
                                        children: [
                                            null != le &&
                                                (0, t.jsx)("img", { src: le.toString(), alt: la, className: H.ye }),
                                            (0, t.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: z.name,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(W, {
                                        unavailableLabel: Q,
                                        reward: lm,
                                        normalPrice: ls,
                                        discountedPrice: lr,
                                        discountPercent: lc,
                                        orbsGate: lA,
                                        orbPriceAmount: lu,
                                    }),
                                ],
                            }),
                            (0, t.jsxs)(m.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, t.jsx)(p.m, {
                                        text: lt ? void 0 : K.intl.string(K.t.IqlPbQ),
                                        children: (0, t.jsx)(x.$, {
                                            variant: V && lt ? "secondary" : "primary",
                                            onClick: lE,
                                            text: K.intl.string(K.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    V &&
                                        (0, t.jsxs)(t.Fragment, {
                                            children: [
                                                lt &&
                                                    (0, t.jsx)(x.$, {
                                                        variant: "primary",
                                                        onClick: lj,
                                                        text: lI,
                                                        fullWidth: !0,
                                                    }),
                                                (0, t.jsx)(B.A, { onGift: lb }),
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
