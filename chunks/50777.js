var e = n(477900),
    t = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(855986),
    c = n(834730),
    r = n(318254),
    d = n(638495),
    u = n(289873),
    m = n(825484),
    p = n(866665),
    x = n(821609),
    b = n(793574),
    A = n(688810),
    E = n(587895),
    j = n(875444),
    h = n(429913),
    C = n(977445),
    I = n(288106),
    N = n(993046),
    T = n(801228),
    _ = n(634110),
    f = n(287809),
    v = n(67480),
    y = n(205177),
    k = n(871123),
    R = n(439303),
    g = n(832163),
    O = n(69236),
    D = n(296045),
    P = n(459005),
    S = n(510022),
    G = n(317560),
    L = n(306984),
    B = n(971146),
    F = n(300182),
    M = n(869099),
    U = n(533772),
    K = n(249434),
    H = n(792996),
    w = n(702360);
let Y = { placement: R.Ye.EMBED };
function z(l) {
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
                          className: w.pt,
                          children: (0, e.jsx)(c.E, {
                              variant: "body-sm/semibold",
                              color: "currentColor",
                              children: H.intl.format(H.t.GiVd2Q, {
                                  orbCount: u.amount,
                                  orbIconHook: () =>
                                      (0, e.jsx)(r.OrbsIcon, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      }),
            [u],
        );
    if (null != m) return (0, e.jsx)(K.l, { label: m });
    if ("HIDDEN" !== o && null != d)
        return (0, e.jsx)(U.A, { orbsGate: o, className: w.PB, orbPrice: d, fiatPrice: i });
    let x = null != a && null != n;
    return (0, e.jsx)("div", {
        className: s()(w.PB, { [w.un]: x }),
        children: x
            ? (0, e.jsxs)(e.Fragment, {
                  children: [
                      null != i &&
                          (0, e.jsx)(c.E, {
                              className: w.of,
                              variant: "body-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: i,
                          }),
                      (0, e.jsx)(c.E, { variant: "body-md/semibold", lineClamp: 1, children: n }),
                      (0, e.jsxs)(c.E, {
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
                      null != i && (0, e.jsx)(c.E, { variant: "body-md/semibold", lineClamp: 1, children: i }),
                      p,
                  ],
              }),
    });
}
function W(l) {
    let { guildId: i, skuId: n, channel: a, applicationId: s, customNavigateToSocialLayerStorefront: U } = l,
        K = (0, d.k)(),
        W = (0, o.bG)([v.A], () => v.A.isFetching(n)),
        Q = (0, T.A)({ skuId: n }),
        V = (0, C.uS)(Q?.applicationId),
        $ = null == Q || Q.available || V ? null : H.intl.string(H.t.RWouSQ),
        q = null == $,
        J = (0, o.bG)([g.A], () => (null != i ? g.A.getApplicationIdFromGuildId(i) : void 0)),
        X = Q?.applicationId ?? s ?? J,
        Z = (0, o.bG)([E.A], () => null != X && E.A.isFetchingApplication(X)),
        ll = (0, o.bG)([E.A], () => null != X && E.A.didFetchingApplicationFail(X)),
        li = (0, h.h)(X),
        { analyticsLocations: ln } = (0, A.Ay)(b.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, _.pE)();
    let le = (0, o.bG)([f.default], () =>
            a.isDM() && null != a.recipients && 0 !== a.recipients.length ? f.default.getUser(a.recipients[0]) : null,
        ),
        lt = (0, o.bG)([g.A], () => (null != n ? g.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: la, primaryIconLabel: ls } = t.useMemo(() => (0, k.Cv)(Q, X), [Q, X]),
        lo = (0, N.ou)({ sku: Q }),
        { normalPrice: lc, discountedPrice: lr, discountPercent: ld, userPrice: lu } = (0, N.j9)(lo),
        lm = (0, N.JL)({ sku: Q }),
        lp = lm?.amount,
        lx = (0, P.n)({ surface: "card", skuId: Q?.id }),
        lb = (0, D.x)({ surface: "card", skuId: Q?.id }),
        lA = t.useMemo(() => lb.find((l) => l.type === I.B8.ORB_REDEMPTION) ?? null, [lb]),
        lE = (0, O.oG)({ orbPriceAmount: lp, spendOrbsOffer: lA }),
        lj = t.useCallback(
            (l) => {
                (l.stopPropagation(),
                    Q?.applicationId != null &&
                        (0, G.R)({
                            customNavigateToSocialLayerStorefront: U,
                            skuId: n,
                            applicationId: Q.applicationId,
                            isStorefront: !1,
                            analyticsLocations: ln,
                            contextKey: K,
                        }));
            },
            [n, Q, ln, U, K],
        ),
        lh = t.useCallback(() => {
            null != Q &&
                lt &&
                (0, L.a)(
                    Q,
                    { isGift: !1 },
                    {
                        analyticsLocations: [b.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
                        guildId: i,
                        contextKey: K,
                    },
                );
        }, [Q, i, lt, K]),
        lC = t.useCallback(() => {
            null != Q &&
                (0, L.a)(
                    Q,
                    { isGift: !0, giftRecipient: le ?? void 0 },
                    { analyticsLocations: [b.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON], contextKey: K },
                );
        }, [Q, le, K]),
        lI = t.useCallback(() => {
            if (null == Q || null == li) return;
            let l = [b.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON];
            (0, L.n)(Q, {
                guildId: i,
                contextKey: K,
                analyticsLocations: l,
                onComplete: () => {
                    (0, S.n)({ sku: Q, application: li, analyticsLocations: l, contextKey: K });
                },
            });
        }, [Q, li, i, K]),
        { onClick: lN, text: lT } = t.useMemo(
            () =>
                "CAN_CHECKOUT" === lE
                    ? {
                          onClick: lI,
                          text: H.intl.format(H.t.JC15qj, {
                              orbPrice: lp,
                              orbIconHook: () =>
                                  (0, e.jsx)(
                                      r.OrbsIcon,
                                      { className: w.fN, size: "sm", color: "currentColor" },
                                      "orbs-icon",
                                  ),
                          }),
                      }
                    : { onClick: lh, text: (0, y.$)(lo, lu) },
            [lE, lI, lh, lo, lu, lp],
        ),
        l_ = null != X && null == li && !ll;
    return (W || Z || l_) && (null == Q || null == li)
        ? (0, e.jsx)("div", { className: w.kL, children: (0, e.jsx)(u.y, { className: w.u1 }) })
        : null != li && null != Q && (0, j.A)(li) && li.id === Q.applicationId
          ? (0, e.jsxs)("div", {
                className: w.kL,
                children: [
                    (0, e.jsx)(R.E9, {
                        newValue: Y,
                        children: (0, e.jsx)(M.Ay, {
                            className: w.Nr,
                            skuId: n,
                            variant: M.s6.EMBEDDED,
                            onClick: lj,
                            analyticsLocations: ln,
                        }),
                    }),
                    (0, e.jsxs)("div", {
                        className: w.zH,
                        children: [
                            (0, e.jsxs)("div", {
                                className: w.lI,
                                children: [
                                    (0, e.jsx)(B.V, {}),
                                    (0, e.jsxs)("div", {
                                        className: w.PB,
                                        children: [
                                            null != la &&
                                                (0, e.jsx)("img", { src: la.toString(), alt: ls, className: w.ye }),
                                            (0, e.jsx)(c.E, {
                                                variant: "body-md/medium",
                                                lineClamp: 1,
                                                children: Q.name,
                                            }),
                                        ],
                                    }),
                                    (0, e.jsx)(z, {
                                        unavailableLabel: $,
                                        reward: lx,
                                        normalPrice: lc,
                                        discountedPrice: lr,
                                        discountPercent: ld,
                                        orbsGate: lE,
                                        orbPriceAmount: lp,
                                    }),
                                ],
                            }),
                            (0, e.jsxs)(m.e, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, e.jsx)(p.m, {
                                        text: lt ? void 0 : H.intl.string(H.t.IqlPbQ),
                                        children: (0, e.jsx)(x.$, {
                                            variant: q && lt ? "secondary" : "primary",
                                            onClick: lj,
                                            text: H.intl.string(H.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    q &&
                                        (0, e.jsxs)(e.Fragment, {
                                            children: [
                                                lt &&
                                                    (0, e.jsx)(x.$, {
                                                        variant: "primary",
                                                        onClick: lN,
                                                        text: lT,
                                                        fullWidth: !0,
                                                    }),
                                                (0, e.jsx)(F.A, { onGift: lC }),
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
        A: W,
        I: function (l) {
            let { applicationId: i, skuId: n, channel: t } = l,
                a = (0, o.bG)([g.A], () => g.A.getGuildIdFromApplicationId(i));
            return (0, e.jsx)(W, { applicationId: i, guildId: a, skuId: n, channel: t });
        },
    },
);
