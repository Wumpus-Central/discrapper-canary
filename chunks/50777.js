n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(594832),
    u = n(287809),
    m = n(67480),
    _ = n(328968),
    h = n(580630),
    p = n(871123),
    g = n(733391),
    A = n(832163),
    f = n(317560),
    x = n(533406),
    E = n(300182),
    C = n(183802),
    I = n(818348),
    T = n(985018),
    v = n(928625);
function N(e) {
    let { guildId: t, skuId: n, channel: N } = e,
        S = (0, r.bG)([_.A], () => _.A.isFetchingForSKU(n)),
        b = (0, r.bG)([m.A], () => m.A.get(n)),
        y = b?.applicationId,
        { analyticsLocations: j } = (0, d.Ay)(o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, c.pE)();
    let R = (0, r.bG)([u.default], () =>
            N.isDM() && null != N.recipients && 0 !== N.recipients.length ? u.default.getUser(N.recipients[0]) : null,
        ),
        L = (0, r.bG)([A.A], () => (null != n ? A.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: M, primaryIconLabel: O } = l.useMemo(() => (0, p.Cv)(b, y), [b, y]);
    l.useEffect(() => {
        null == t || null == n || _.A.isFetchingForSKU(n) || (0, g.qf)(t, n);
    }, [t, n]);
    let P = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    b?.applicationId != null &&
                        null != t &&
                        (0, f.R)({
                            skuId: n,
                            applicationId: b.applicationId,
                            guildId: t,
                            isStorefront: !1,
                            analyticsLocations: j,
                        });
            },
            [n, b?.applicationId, t, j],
        ),
        D = l.useCallback(() => {
            null != b &&
                (0, x.a)(
                    b,
                    { isGift: !1 },
                    { analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [b, t]),
        k = l.useCallback(() => {
            null != b &&
                (0, x.a)(
                    b,
                    { isGift: !0, giftRecipient: R ?? void 0 },
                    { analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [b, R]);
    return S && null == b
        ? (0, i.jsx)("div", { className: v.kL, children: (0, i.jsx)(s.y$y, { className: v.u1 }) })
        : null == b
          ? null
          : (0, i.jsxs)("div", {
                className: v.kL,
                children: [
                    (0, i.jsx)(C.A, {
                        className: v.Nr,
                        applicationId: b.applicationId,
                        skuId: n,
                        guildId: t,
                        variant: C.s.EMBEDDED,
                        onClick: P,
                        analyticsLocations: j,
                    }),
                    (0, i.jsxs)("div", {
                        className: v.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: v.lI,
                                children: [
                                    (0, i.jsx)(s.Text, { variant: "text-md/medium", lineClamp: 1, children: b.name }),
                                    (0, i.jsxs)("div", {
                                        className: v.PB,
                                        children: [
                                            null != M &&
                                                (0, i.jsx)("img", { src: M.toString(), alt: O, className: v.ye }),
                                            (0, i.jsx)(s.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, h.$g)(
                                                    b.price?.amount ?? 0,
                                                    b.price?.currency ?? I.Yr.USD,
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(a.e2v, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, i.jsx)(a.$nd, {
                                        variant: "secondary",
                                        onClick: P,
                                        text: T.intl.string(T.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(a.$nd, {
                                        variant: "primary",
                                        onClick: D,
                                        text: L
                                            ? T.intl.format(T.t.Xp5WTn, {
                                                  price: (0, h.$g)(b.price?.amount ?? 0, b.price?.currency ?? I.Yr.USD),
                                              })
                                            : T.intl.string(T.t.cg0M2H),
                                        fullWidth: !0,
                                        disabled: !L,
                                    }),
                                    (0, i.jsx)(E.A, { onGift: k }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
}
