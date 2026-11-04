var e = n(477900),
    t = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(855986),
    r = n(834730),
    c = n(318254),
    d = n(638495),
    u = n(289873),
    m = n(825484),
    p = n(866665),
    x = n(821609),
    b = n(793574),
    A = n(688810),
    E = n(587895),
    C = n(875444),
    h = n(429913),
    j = n(977445),
    I = n(288106),
    T = n(993046),
    N = n(801228),
    f = n(634110),
    _ = n(287809),
    v = n(67480),
    y = n(871123),
    k = n(439303),
    R = n(832163),
    g = n(69236),
    D = n(296045),
    O = n(459005),
    P = n(510022),
    S = n(317560),
    G = n(306984),
    L = n(971146),
    B = n(300182),
    F = n(869099),
    M = n(533772),
    U = n(249434),
    K = n(792996),
    H = n(702360);
let w = { placement: k.Ye.EMBED };
function W(l) {
    let {
            normalPrice: i,
            discountedPrice: n,
            discountPercent: a,
            orbsGate: o,
            orbPriceAmount: d,
            reward: u,
            unavailableLabel: m,
        } = l,
        p = t.useMemo(
            () =>
                null == u || u.type !== I.Ns.ACTION || u.amount <= 0
                    ? null
                    : (0, e.jsx)("div", {
                          className: H.pt,
                          children: (0, e.jsx)(r.E, {
                              variant: "body-sm/semibold",
                              color: "currentColor",
                              children: K.intl.format(K.t.GiVd2Q, {
                                  orbCount: u.amount,
                                  orbIconHook: () =>
                                      (0, e.jsx)(c.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      }),
            [u],
        );
    if (null != m) return (0, e.jsx)(U.l, { label: m });
    if ("HIDDEN" !== o && null != d)
        return (0, e.jsx)(M.A, { orbsGate: o, className: H.PB, orbPrice: d, fiatPrice: i });
    let x = null != a && null != n;
    return (0, e.jsx)("div", {
        className: s()(H.PB, { [H.un]: x }),
        children: x
            ? (0, e.jsxs)(e.Fragment, {
                  children: [
                      null != i &&
                          (0, e.jsx)(r.E, {
                              className: H.of,
                              variant: "body-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: i,
                          }),
                      (0, e.jsx)(r.E, { variant: "body-md/semibold", lineClamp: 1, children: n }),
                      (0, e.jsxs)(r.E, {
                          variant: "body-md/semibold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", a, ")"],
                      }),
                      p,
                  ],
              })
            : (0, e.jsxs)(e.Fragment, {
                  children: [
                      null != i && (0, e.jsx)(r.E, { variant: "body-md/semibold", lineClamp: 1, children: i }),
                      p,
                  ],
              }),
    });
}
function Y(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: M } = l,
        U = (0, d.k)(),
        Y = (0, o.bG)([v.A], () => v.A.isFetching(n)),
        z = (0, N.A)({ skuId: n }),
        q = (0, j.uS)(z?.applicationId),
        Q = null == z || z.available || q ? null : K.intl.string(K.t.RWouSQ),
        V = null == Q,
        J = (0, o.bG)([R.A], () => (null != i ? R.A.getApplicationIdFromGuildId(i) : void 0)),
        $ = z?.applicationId ?? s ?? J,
        X = (0, o.bG)([E.A], () => null != $ && E.A.isFetchingApplication($)),
        Z = (0, o.bG)([E.A], () => null != $ && E.A.didFetchingApplicationFail($)),
        ll = (0, h.h)($),
        { analyticsLocations: li } = (0, A.Ay)(b.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, f.pE)();
    let ln = (0, o.bG)([_.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? _.default.getUser(a.recipients[0]) : null,
        ),
        le = (0, o.bG)([R.A], () => (null != n ? R.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: lt, primaryIconLabel: la } = t.useMemo(() => (0, y.Cv)(z, $), [z, $]),
        { normalPrice: ls, discountedPrice: lo, discountPercent: lr, userPrice: lc } = (0, T.CD)({ sku: z }),
        ld = (0, T.JL)({ sku: z }),
        lu = ld?.amount,
        lm = (0, O.n)({ surface: "card", skuId: z?.id }),
        lp = (0, D.x)({ surface: "card", skuId: z?.id }),
        lx = t.useMemo(() => lp.find((l) => l.type === I.B8.ORB_REDEMPTION) ?? null, [lp]),
        lb = (0, g.oG)({ orbPriceAmount: lu, spendOrbsOffer: lx }),
        lA = t.useCallback(
            (l) => {
                (l.stopPropagation(),
                    z?.applicationId != null &&
                        (0, S.R)({
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
        lE = t.useCallback(() => {
            null != z &&
                le &&
                (0, G.a)(
                    z,
                    { isGift: !1 },
                    {
                        analyticsLocations: [b.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
                        guildId: i,
                        contextKey: U,
                    },
                );
        }, [z, i, le, U]),
        lC = t.useCallback(() => {
            null != z &&
                (0, G.a)(
                    z,
                    { isGift: !0, giftRecipient: ln ?? void 0 },
                    { analyticsLocations: [b.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON], contextKey: U },
                );
        }, [z, ln, U]),
        lh = t.useCallback(() => {
            if (null == z || null == ll) return;
            let l = [b.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, G.n)(z, {
                guildId: i,
                contextKey: U,
                analyticsLocations: l,
                onComplete: () => {
                    (0, P.n)({ sku: z, application: ll, analyticsLocations: l, contextKey: U });
                },
            });
        }, [z, ll, i, U]),
        { onClick: lj, text: lI } = t.useMemo(
            () =>
                "CAN_CHECKOUT" === lb
                    ? {
                          onClick: lh,
                          text: K.intl.format(K.t.JC15qj, {
                              orbPrice: lu,
                              orbIconHook: () =>
                                  (0, e.jsx)(c.C, { className: H.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                      }
                    : {
                          onClick: lE,
                          text: null != lc ? K.intl.format(K.t.Xp5WTn, { price: lc }) : K.intl.string(K.t.boqtTA),
                      },
            [lb, lh, lE, lc, lu],
        ),
        lT = null != $ && null == ll && !Z;
    return (Y || X || lT) && (null == z || null == ll)
        ? (0, e.jsx)("div", { className: H.kL, children: (0, e.jsx)(u.y, { className: H.u1 }) })
        : null != ll && null != z && (0, C.A)(ll) && ll.id === z.applicationId
          ? (0, e.jsxs)("div", {
                className: H.kL,
                children: [
                    (0, e.jsx)(k.E9, {
                        newValue: w,
                        children: (0, e.jsx)(F.Ay, {
                            className: H.Nr,
                            skuId: n,
                            variant: F.s6.EMBEDDED,
                            onClick: lA,
                            analyticsLocations: li,
                        }),
                    }),
                    (0, e.jsxs)("div", {
                        className: H.zH,
                        children: [
                            (0, e.jsxs)("div", {
                                className: H.lI,
                                children: [
                                    (0, e.jsx)(L.V, {}),
                                    (0, e.jsxs)("div", {
                                        className: H.PB,
                                        children: [
                                            null != lt &&
                                                (0, e.jsx)("img", { src: lt.toString(), alt: la, className: H.ye }),
                                            (0, e.jsx)(r.E, {
                                                variant: "body-md/medium",
                                                lineClamp: 1,
                                                children: z.name,
                                            }),
                                        ],
                                    }),
                                    (0, e.jsx)(W, {
                                        unavailableLabel: Q,
                                        reward: lm,
                                        normalPrice: ls,
                                        discountedPrice: lo,
                                        discountPercent: lr,
                                        orbsGate: lb,
                                        orbPriceAmount: lu,
                                    }),
                                ],
                            }),
                            (0, e.jsxs)(m.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, e.jsx)(p.m, {
                                        text: le ? void 0 : K.intl.string(K.t.IqlPbQ),
                                        children: (0, e.jsx)(x.$, {
                                            variant: V && le ? "secondary" : "primary",
                                            onClick: lA,
                                            text: K.intl.string(K.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    V &&
                                        (0, e.jsxs)(e.Fragment, {
                                            children: [
                                                le &&
                                                    (0, e.jsx)(x.$, {
                                                        variant: "primary",
                                                        onClick: lj,
                                                        text: lI,
                                                        fullWidth: !0,
                                                    }),
                                                (0, e.jsx)(B.A, { onGift: lC }),
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
n.d(
    i,
    {},
    {
        A: Y,
        I: function (l) {
            let { applicationId: i, skuId: n, channel: t } = l,
                a = (0, o.bG)([R.A], () => R.A.getGuildIdFromApplicationId(i));
            return (0, e.jsx)(Y, { applicationId: i, guildId: a, skuId: n, channel: t });
        },
    },
);
