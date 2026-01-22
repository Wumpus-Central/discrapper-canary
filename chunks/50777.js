n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(793574),
    c = n(688810),
    u = n(594832),
    d = n(287809),
    f = n(67480),
    p = n(328968),
    _ = n(580630),
    h = n(871123),
    m = n(733391),
    g = n(317560),
    E = n(533406),
    b = n(300182),
    y = n(183802),
    O = n(818348),
    A = n(985018),
    v = n(928625);
function S(e) {
    var t, n, S, I, T, C, N, R;
    let { guildId: w, skuId: P, channel: D } = e,
        x = (0, s.bG)([p.A], () => p.A.isFetchingForSKU(P)),
        L = (0, s.bG)([f.A], () => f.A.get(P)),
        j = null == L ? void 0 : L.applicationId,
        { analyticsLocations: M } = (0, c.Ay)(l.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, u.pE)();
    let k = (0, s.bG)([d.default], () =>
            D.isDM() && null != D.recipients && 0 !== D.recipients.length ? d.default.getUser(D.recipients[0]) : null,
        ),
        { primaryIconAsset: U, primaryIconLabel: G } = i.useMemo(() => (0, h.Cv)(L, j), [L, j]);
    i.useEffect(() => {
        null == w || null == P || p.A.isFetchingForSKU(P) || (0, m.qf)(w, P);
    }, [w, P]);
    let V = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (null == L ? void 0 : L.applicationId) != null &&
                        null != w &&
                        (0, g.R)({
                            skuId: P,
                            applicationId: L.applicationId,
                            guildId: w,
                            isStorefront: !1,
                            analyticsLocations: M,
                        });
            },
            [P, null == L ? void 0 : L.applicationId, w, M],
        ),
        F = i.useCallback(() => {
            null != L &&
                (0, E.a)(
                    L,
                    { isGift: !1 },
                    { analyticsLocations: [l.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON] },
                );
        }, [L]),
        B = i.useCallback(() => {
            null != L &&
                (0, E.a)(
                    L,
                    {
                        isGift: !0,
                        giftRecipient: null != k ? k : void 0,
                    },
                    { analyticsLocations: [l.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [L, k]);
    return x && null == L
        ? (0, r.jsx)("div", {
              className: v.kL,
              children: (0, r.jsx)(o.y$y, { className: v.u1 }),
          })
        : null == L
          ? null
          : (0, r.jsxs)("div", {
                className: v.kL,
                children: [
                    (0, r.jsx)(y.A, {
                        className: v.Nr,
                        applicationId: L.applicationId,
                        skuId: P,
                        guildId: w,
                        variant: y.s.EMBEDDED,
                        onClick: V,
                        analyticsLocations: M,
                    }),
                    (0, r.jsxs)("div", {
                        className: v.zH,
                        children: [
                            (0, r.jsxs)("div", {
                                className: v.lI,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        lineClamp: 1,
                                        children: L.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: v.PB,
                                        children: [
                                            null != U &&
                                                (0, r.jsx)("img", {
                                                    src: U.toString(),
                                                    alt: G,
                                                    className: v.ye,
                                                }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, _.$g)(
                                                    null != (t = null == (T = L.price) ? void 0 : T.amount) ? t : 0,
                                                    null != (n = null == (C = L.price) ? void 0 : C.currency)
                                                        ? n
                                                        : O.Yr.USD,
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(a.e2v, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(a.$nd, {
                                        variant: "secondary",
                                        onClick: V,
                                        text: A.intl.string(A.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(a.$nd, {
                                        variant: "primary",
                                        onClick: F,
                                        text: A.intl.format(A.t.Xp5WTn, {
                                            price: (0, _.$g)(
                                                null != (S = null == (N = L.price) ? void 0 : N.amount) ? S : 0,
                                                null != (I = null == (R = L.price) ? void 0 : R.currency)
                                                    ? I
                                                    : O.Yr.USD,
                                            ),
                                        }),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(b.A, { onGift: B }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
}
