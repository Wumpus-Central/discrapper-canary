n.d(t, {
    A: () => j,
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    c = n(688810),
    u = n(594832),
    d = n(287809),
    p = n(67480),
    m = n(328968),
    f = n(580630),
    g = n(871123),
    h = n(733391),
    _ = n(832163),
    b = n(317560),
    A = n(533406),
    y = n(300182),
    v = n(183802),
    x = n(818348),
    O = n(985018),
    E = n(928625);

function j(e) {
    var t, n, j, C, I, S, T, N;
    let { guildId: P, skuId: w, channel: R } = e,
        D = (0, a.bG)([m.A], () => m.A.isFetchingForSKU(w)),
        L = (0, a.bG)([p.A], () => p.A.get(w)),
        M = null == L ? void 0 : L.applicationId,
        { analyticsLocations: k } = (0, c.Ay)(o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, u.pE)();
    let U = (0, a.bG)([d.default], () =>
            R.isDM() && null != R.recipients && 0 !== R.recipients.length ? d.default.getUser(R.recipients[0]) : null,
        ),
        G = (0, a.bG)([_.A], () => (null != w ? _.A.getNormalizedSKUEligibility(w) : void 0), [w]),
        { primaryIconAsset: B, primaryIconLabel: F } = i.useMemo(() => (0, g.Cv)(L, M), [L, M]);
    i.useEffect(() => {
        null == P || null == w || m.A.isFetchingForSKU(w) || (0, h.qf)(P, w);
    }, [P, w]);
    let H = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (null == L ? void 0 : L.applicationId) != null &&
                        null != P &&
                        (0, b.R)({
                            skuId: w,
                            applicationId: L.applicationId,
                            guildId: P,
                            isStorefront: !1,
                            analyticsLocations: k,
                        });
            },
            [w, null == L ? void 0 : L.applicationId, P, k],
        ),
        V = i.useCallback(() => {
            null != L &&
                (0, A.a)(
                    L,
                    {
                        isGift: !1,
                    },
                    {
                        analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
                        guildId: P,
                    },
                );
        }, [L, P]),
        z = i.useCallback(() => {
            null != L &&
                (0, A.a)(
                    L,
                    {
                        isGift: !0,
                        giftRecipient: null != U ? U : void 0,
                    },
                    {
                        analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON],
                    },
                );
        }, [L, U]);
    return D && null == L
        ? (0, r.jsx)("div", {
              className: E.kL,
              children: (0, r.jsx)(s.y$y, {
                  className: E.u1,
              }),
          })
        : null == L
          ? null
          : (0, r.jsxs)("div", {
                className: E.kL,
                children: [
                    (0, r.jsx)(v.A, {
                        className: E.Nr,
                        applicationId: L.applicationId,
                        skuId: w,
                        guildId: P,
                        variant: v.s.EMBEDDED,
                        onClick: H,
                        analyticsLocations: k,
                    }),
                    (0, r.jsxs)("div", {
                        className: E.zH,
                        children: [
                            (0, r.jsxs)("div", {
                                className: E.lI,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/medium",
                                        lineClamp: 1,
                                        children: L.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: E.PB,
                                        children: [
                                            null != B &&
                                                (0, r.jsx)("img", {
                                                    src: B.toString(),
                                                    alt: F,
                                                    className: E.ye,
                                                }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, f.$g)(
                                                    null != (t = null == (I = L.price) ? void 0 : I.amount) ? t : 0,
                                                    null != (n = null == (S = L.price) ? void 0 : S.currency)
                                                        ? n
                                                        : x.Yr.USD,
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(l.e2v, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(l.$nd, {
                                        variant: "secondary",
                                        onClick: H,
                                        text: O.intl.string(O.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(l.$nd, {
                                        variant: "primary",
                                        onClick: V,
                                        text: G
                                            ? O.intl.format(O.t.Xp5WTn, {
                                                  price: (0, f.$g)(
                                                      null != (j = null == (T = L.price) ? void 0 : T.amount) ? j : 0,
                                                      null != (C = null == (N = L.price) ? void 0 : N.currency)
                                                          ? C
                                                          : x.Yr.USD,
                                                  ),
                                              })
                                            : O.intl.string(O.t.cg0M2H),
                                        fullWidth: !0,
                                        disabled: !G,
                                    }),
                                    (0, r.jsx)(y.A, {
                                        onGift: z,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
}
