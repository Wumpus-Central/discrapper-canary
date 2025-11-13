n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(602733),
    u = n(594174),
    d = n(55563),
    f = n(551428),
    _ = n(937615),
    p = n(164670),
    h = n(411935),
    m = n(436585),
    g = n(594914),
    E = n(433386),
    b = n(840724),
    y = n(231338),
    O = n(388032),
    v = n(54602);
function I(e) {
    var t, n, I, T, S, A, C, N;
    let { guildId: R, skuId: P, channel: D } = e,
        w = (0, o.e7)([f.Z], () => f.Z.isFetchingForSKU(P)),
        x = (0, o.e7)([d.Z], () => d.Z.get(P)),
        L = null == x ? void 0 : x.applicationId;
    (0, c.p2)();
    let M = (0, o.e7)([u.default], () =>
            D.isDM() && null != D.recipients && 0 !== D.recipients.length ? u.default.getUser(D.recipients[0]) : null,
        ),
        { primaryIconAsset: j, primaryIconLabel: k } = i.useMemo(() => (0, p.FE)(x, L), [x, L]);
    i.useEffect(() => {
        null == R || null == P || f.Z.isFetchingForSKU(P) || (0, h.y)(R, P);
    }, [R, P]);
    let U = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (null == x ? void 0 : x.applicationId) != null &&
                        null != R &&
                        (0, m.g)({
                            skuId: P,
                            applicationId: x.applicationId,
                            guildId: R,
                            isStorefront: !1,
                        });
            },
            [P, null == x ? void 0 : x.applicationId, R],
        ),
        G = i.useCallback(() => {
            null != x &&
                (0, g.P)(
                    x,
                    { isGift: !1 },
                    { analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON] },
                );
        }, [x]),
        B = i.useCallback(() => {
            null != x &&
                (0, g.P)(
                    x,
                    {
                        isGift: !0,
                        giftRecipient: null != M ? M : void 0,
                    },
                    { analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [x, M]);
    return w && null == x
        ? (0, r.jsx)("div", {
              className: v.container,
              children: (0, r.jsx)(s.$jN, { className: v.spinner }),
          })
        : null == x
          ? null
          : (0, r.jsxs)("div", {
                className: v.container,
                children: [
                    (0, r.jsx)(b.C, {
                        className: v.card,
                        applicationId: x.applicationId,
                        skuId: P,
                        variant: b.Z.EMBEDDED,
                        onClick: U,
                    }),
                    (0, r.jsxs)("div", {
                        className: v.details,
                        children: [
                            (0, r.jsxs)("div", {
                                className: v.detailsTitleDescription,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/bold",
                                        lineClamp: 1,
                                        children: x.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: v.detailsDescription,
                                        children: [
                                            null != j &&
                                                (0, r.jsx)("img", {
                                                    src: j.toString(),
                                                    alt: k,
                                                    className: v.iconAsset,
                                                }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-md/semibold",
                                                lineClamp: 1,
                                                children: (0, _.T4)(
                                                    null != (S = null == (t = x.price) ? void 0 : t.amount) ? S : 0,
                                                    null != (A = null == (n = x.price) ? void 0 : n.currency)
                                                        ? A
                                                        : y.pK.USD,
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(a.hE2, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(a.zxk, {
                                        variant: "secondary",
                                        onClick: U,
                                        text: O.intl.string(O.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: G,
                                        text: O.intl.format(O.t.Xp5WTn, {
                                            price: (0, _.T4)(
                                                null != (C = null == (I = x.price) ? void 0 : I.amount) ? C : 0,
                                                null != (N = null == (T = x.price) ? void 0 : T.currency)
                                                    ? N
                                                    : y.pK.USD,
                                            ),
                                        }),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(E.Z, { onGift: B }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
}
