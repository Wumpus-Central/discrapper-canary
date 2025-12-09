n.d(t, { Z: () => I });
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
    p = n(551428),
    _ = n(937615),
    m = n(164670),
    h = n(411935),
    g = n(436585),
    E = n(594914),
    b = n(433386),
    y = n(840724),
    O = n(231338),
    v = n(388032),
    S = n(54602);
function I(e) {
    var t, n, I, T, A, C, N, P;
    let { guildId: R, skuId: D, channel: w } = e,
        x = (0, o.e7)([p.Z], () => p.Z.isFetchingForSKU(D)),
        L = (0, o.e7)([f.Z], () => f.Z.get(D)),
        j = null == L ? void 0 : L.applicationId,
        { analyticsLocations: M } = (0, c.ZP)(l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, u.p2)();
    let k = (0, o.e7)([d.default], () =>
            w.isDM() && null != w.recipients && 0 !== w.recipients.length ? d.default.getUser(w.recipients[0]) : null,
        ),
        { primaryIconAsset: U, primaryIconLabel: G } = i.useMemo(() => (0, m.FE)(L, j), [L, j]);
    i.useEffect(() => {
        null == R || null == D || p.Z.isFetchingForSKU(D) || (0, h.y)(R, D);
    }, [R, D]);
    let Z = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (null == L ? void 0 : L.applicationId) != null &&
                        null != R &&
                        (0, g.g)({
                            skuId: D,
                            applicationId: L.applicationId,
                            guildId: R,
                            isStorefront: !1,
                            analyticsLocations: M,
                        });
            },
            [D, null == L ? void 0 : L.applicationId, R, M],
        ),
        B = i.useCallback(() => {
            null != L &&
                (0, E.P)(
                    L,
                    { isGift: !1 },
                    { analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON] },
                );
        }, [L]),
        F = i.useCallback(() => {
            null != L &&
                (0, E.P)(
                    L,
                    {
                        isGift: !0,
                        giftRecipient: null != k ? k : void 0,
                    },
                    { analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [L, k]);
    return x && null == L
        ? (0, r.jsx)("div", {
              className: S.container,
              children: (0, r.jsx)(s.$jN, { className: S.spinner }),
          })
        : null == L
          ? null
          : (0, r.jsxs)("div", {
                className: S.container,
                children: [
                    (0, r.jsx)(y.ZP, {
                        className: S.card,
                        applicationId: L.applicationId,
                        skuId: D,
                        variant: y.Zp.EMBEDDED,
                        onClick: Z,
                        analyticsLocations: M,
                    }),
                    (0, r.jsxs)("div", {
                        className: S.details,
                        children: [
                            (0, r.jsxs)("div", {
                                className: S.detailsTitleDescription,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/medium",
                                        lineClamp: 1,
                                        children: L.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: S.detailsDescription,
                                        children: [
                                            null != U &&
                                                (0, r.jsx)("img", {
                                                    src: U.toString(),
                                                    alt: G,
                                                    className: S.iconAsset,
                                                }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, _.T4)(
                                                    null != (A = null == (t = L.price) ? void 0 : t.amount) ? A : 0,
                                                    null != (C = null == (n = L.price) ? void 0 : n.currency)
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
                                        onClick: Z,
                                        text: v.intl.string(v.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: B,
                                        text: v.intl.format(v.t.Xp5WTn, {
                                            price: (0, _.T4)(
                                                null != (N = null == (I = L.price) ? void 0 : I.amount) ? N : 0,
                                                null != (P = null == (T = L.price) ? void 0 : T.currency)
                                                    ? P
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
