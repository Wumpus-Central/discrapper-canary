n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(602733),
    d = n(594174),
    f = n(55563),
    _ = n(551428),
    p = n(937615),
    h = n(164670),
    m = n(411935),
    g = n(436585),
    E = n(594914),
    b = n(433386),
    y = n(840724),
    O = n(231338),
    v = n(388032),
    I = n(54602);
function T(e) {
    var t, n, T, S, A, C, N, R;
    let { guildId: P, skuId: D, channel: w } = e,
        L = (0, o.e7)([_.Z], () => _.Z.isFetchingForSKU(D)),
        x = (0, o.e7)([f.Z], () => f.Z.get(D)),
        M = null == x ? void 0 : x.applicationId,
        { analyticsLocations: k } = (0, c.ZP)(l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, u.p2)();
    let j = (0, o.e7)([d.default], () =>
            w.isDM() && null != w.recipients && 0 !== w.recipients.length ? d.default.getUser(w.recipients[0]) : null,
        ),
        { primaryIconAsset: U, primaryIconLabel: G } = i.useMemo(() => (0, h.FE)(x, M), [x, M]);
    i.useEffect(() => {
        null == P || null == D || _.Z.isFetchingForSKU(D) || (0, m.y)(P, D);
    }, [P, D]);
    let B = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (null == x ? void 0 : x.applicationId) != null &&
                        null != P &&
                        (0, g.g)({
                            skuId: D,
                            applicationId: x.applicationId,
                            guildId: P,
                            isStorefront: !1,
                        });
            },
            [D, null == x ? void 0 : x.applicationId, P],
        ),
        Z = i.useCallback(() => {
            null != x &&
                (0, E.P)(
                    x,
                    { isGift: !1 },
                    { analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON] },
                );
        }, [x]),
        F = i.useCallback(() => {
            null != x &&
                (0, E.P)(
                    x,
                    {
                        isGift: !0,
                        giftRecipient: null != j ? j : void 0,
                    },
                    { analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [x, j]);
    return L && null == x
        ? (0, r.jsx)("div", {
              className: I.container,
              children: (0, r.jsx)(s.$jN, { className: I.spinner }),
          })
        : null == x
          ? null
          : (0, r.jsxs)("div", {
                className: I.container,
                children: [
                    (0, r.jsx)(y.C, {
                        className: I.card,
                        applicationId: x.applicationId,
                        skuId: D,
                        variant: y.Z.EMBEDDED,
                        onClick: B,
                        analyticsLocations: k,
                    }),
                    (0, r.jsxs)("div", {
                        className: I.details,
                        children: [
                            (0, r.jsxs)("div", {
                                className: I.detailsTitleDescription,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/medium",
                                        lineClamp: 1,
                                        children: x.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: I.detailsDescription,
                                        children: [
                                            null != U &&
                                                (0, r.jsx)("img", {
                                                    src: U.toString(),
                                                    alt: G,
                                                    className: I.iconAsset,
                                                }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, p.T4)(
                                                    null != (A = null == (t = x.price) ? void 0 : t.amount) ? A : 0,
                                                    null != (C = null == (n = x.price) ? void 0 : n.currency)
                                                        ? C
                                                        : O.pK.USD,
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
                                        onClick: B,
                                        text: v.intl.string(v.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: Z,
                                        text: v.intl.format(v.t.Xp5WTn, {
                                            price: (0, p.T4)(
                                                null != (N = null == (T = x.price) ? void 0 : T.amount) ? N : 0,
                                                null != (R = null == (S = x.price) ? void 0 : S.currency)
                                                    ? R
                                                    : O.pK.USD,
                                            ),
                                        }),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(b.Z, { onGift: F }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
}
