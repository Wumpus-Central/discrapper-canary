n.d(t, { A: () => P });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(158954),
    o = n(311907),
    d = n(990078),
    c = n(397927),
    u = n(793574),
    _ = n(688810),
    m = n(587895),
    h = n(875444),
    p = n(429913),
    g = n(993046),
    A = n(801228),
    x = n(594832),
    f = n(287809),
    C = n(328968),
    E = n(871123),
    I = n(733391),
    v = n(832163),
    b = n(317560),
    T = n(533406),
    y = n(971146),
    S = n(300182),
    N = n(183802),
    j = n(985018),
    L = n(918374);
function R(e) {
    let { sku: t, normalPrice: n, discountedPrice: l, discountPercent: o } = e,
        d = a.useMemo(
            () =>
                null != t.orbsReward && t.orbsReward > 0
                    ? (0, i.jsx)("div", {
                          className: L.pt,
                          children: (0, i.jsx)(c.Text, {
                              variant: "text-sm/semibold",
                              color: "currentColor",
                              children: j.intl.format(j.t.GiVd2Q, {
                                  orbCount: t.orbsReward,
                                  orbIconHook: () =>
                                      (0, i.jsx)(s.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                      })
                    : null,
            [t.orbsReward],
        ),
        u = null != o && null != l;
    return (0, i.jsx)("div", {
        className: r()(L.PB, { [L.un]: u }),
        children: u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != n &&
                          (0, i.jsx)(c.Text, {
                              className: L.of,
                              variant: "text-md/medium",
                              color: "text-muted",
                              lineClamp: 1,
                              children: n,
                          }),
                      (0, i.jsx)(c.Text, { variant: "text-md/bold", lineClamp: 1, children: l }),
                      (0, i.jsxs)(c.Text, {
                          variant: "text-md/bold",
                          color: "text-feedback-positive",
                          lineClamp: 1,
                          children: ["(", o, ")"],
                      }),
                      d,
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != n && (0, i.jsx)(c.Text, { variant: "text-md/bold", lineClamp: 1, children: n }),
                      d,
                  ],
              }),
    });
}
function P(e) {
    let { guildId: t, skuId: n, channel: l } = e,
        r = (0, o.bG)([C.A], () => C.A.isFetchingForSKU(n)),
        P = (0, A.A)({ skuId: n, location: "SocialLayerStorefrontProductDetailsEmbed" }),
        w = P?.applicationId,
        M = (0, o.bG)([m.A], () => null != w && m.A.isFetchingApplication(w)),
        D = (0, o.bG)([m.A], () => null != w && m.A.didFetchingApplicationFail(w)),
        k = (0, p.h)(w),
        { analyticsLocations: O } = (0, _.Ay)(u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, x.pE)();
    let U = (0, o.bG)([f.default], () =>
            l.isDM() && null != l.recipients && 0 !== l.recipients.length ? f.default.getUser(l.recipients[0]) : null,
        ),
        B = (0, o.bG)([v.A], () => (null != n ? v.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: G, primaryIconLabel: F } = a.useMemo(() => (0, E.Cv)(P, w), [P, w]),
        { normalPrice: H, discountedPrice: V, discountPercent: q } = (0, g.CD)({ sku: P });
    a.useEffect(() => {
        null == t || null == n || C.A.isFetchingForSKU(n) || (0, I.qf)(t, n);
    }, [t, n]);
    let W = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    P?.applicationId != null &&
                        (0, b.R)({ skuId: n, applicationId: P.applicationId, isStorefront: !1, analyticsLocations: O });
            },
            [n, P, O],
        ),
        z = a.useCallback(() => {
            null != P &&
                B &&
                (0, T.a)(
                    P,
                    { isGift: !1 },
                    { analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [P, t, B]),
        Y = a.useCallback(() => {
            null != P &&
                (0, T.a)(
                    P,
                    { isGift: !0, giftRecipient: U ?? void 0 },
                    { analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [P, U]),
        Q = null != w && null == k && !D;
    if ((r || M || Q) && (null == P || null == k))
        return (0, i.jsx)("div", { className: L.kL, children: (0, i.jsx)(c.y$y, { className: L.u1 }) });
    if (null == P || null == k || !(0, h.A)(k) || k.guildId !== t) return null;
    let K = V ?? H;
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [
            (0, i.jsx)(N.A, { className: L.Nr, skuId: n, variant: N.s.EMBEDDED, onClick: W, analyticsLocations: O }),
            (0, i.jsxs)("div", {
                className: L.zH,
                children: [
                    (0, i.jsxs)("div", {
                        className: L.lI,
                        children: [
                            (0, i.jsx)(y.V, {}),
                            (0, i.jsxs)("div", {
                                className: L.PB,
                                children: [
                                    null != G && (0, i.jsx)("img", { src: G.toString(), alt: F, className: L.ye }),
                                    (0, i.jsx)(c.Text, { variant: "text-md/medium", lineClamp: 1, children: P.name }),
                                ],
                            }),
                            (0, i.jsx)(R, { sku: P, normalPrice: H, discountedPrice: V, discountPercent: q }),
                        ],
                    }),
                    (0, i.jsxs)(s.e2v, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(d.m, {
                                text: B ? void 0 : j.intl.string(j.t.IqlPbQ),
                                children: (0, i.jsx)(s.$nd, {
                                    variant: B ? "secondary" : "primary",
                                    onClick: W,
                                    text: j.intl.string(j.t.KLBTgF),
                                    fullWidth: !0,
                                }),
                            }),
                            B &&
                                (0, i.jsx)(s.$nd, {
                                    variant: "primary",
                                    onClick: z,
                                    text:
                                        null != K ? j.intl.format(j.t.Xp5WTn, { price: K }) : j.intl.string(j.t.boqtTA),
                                    fullWidth: !0,
                                }),
                            (0, i.jsx)(S.A, { onGift: Y }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
