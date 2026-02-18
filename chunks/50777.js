n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(587895),
    u = n(875444),
    m = n(429913),
    _ = n(594832),
    h = n(287809),
    p = n(67480),
    g = n(328968),
    A = n(580630),
    f = n(871123),
    x = n(733391),
    E = n(832163),
    C = n(317560),
    I = n(533406),
    T = n(300182),
    v = n(183802),
    N = n(818348),
    S = n(985018),
    b = n(928625);
function j(e) {
    let { guildId: t, skuId: n, channel: j } = e,
        y = (0, r.bG)([g.A], () => g.A.isFetchingForSKU(n)),
        R = (0, r.bG)([p.A], () => p.A.get(n)),
        L = R?.applicationId,
        M = (0, r.bG)([c.A], () => null != L && c.A.isFetchingApplication(L)),
        O = (0, r.bG)([c.A], () => null != L && c.A.didFetchingApplicationFail(L)),
        D = (0, m.h)(L),
        { analyticsLocations: P } = (0, d.Ay)(o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, _.pE)();
    let k = (0, r.bG)([h.default], () =>
            j.isDM() && null != j.recipients && 0 !== j.recipients.length ? h.default.getUser(j.recipients[0]) : null,
        ),
        U = (0, r.bG)([E.A], () => (null != n ? E.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: w, primaryIconLabel: G } = l.useMemo(() => (0, f.Cv)(R, L), [R, L]);
    l.useEffect(() => {
        null == t || null == n || g.A.isFetchingForSKU(n) || (0, x.qf)(t, n);
    }, [t, n]);
    let B = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    R?.applicationId != null &&
                        null != t &&
                        (0, C.R)({
                            skuId: n,
                            applicationId: R.applicationId,
                            guildId: t,
                            isStorefront: !1,
                            analyticsLocations: P,
                        });
            },
            [n, R?.applicationId, t, P],
        ),
        F = l.useCallback(() => {
            null != R &&
                (0, I.a)(
                    R,
                    { isGift: !1 },
                    { analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [R, t]),
        H = l.useCallback(() => {
            null != R &&
                (0, I.a)(
                    R,
                    { isGift: !0, giftRecipient: k ?? void 0 },
                    { analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [R, k]),
        V = null != L && null == D && !O;
    return (y || M || V) && (null == R || null == D)
        ? (0, i.jsx)("div", { className: b.kL, children: (0, i.jsx)(s.y$y, { className: b.u1 }) })
        : null != R && null != D && (0, u.A)(D) && D.guildId === t
          ? (0, i.jsxs)("div", {
                className: b.kL,
                children: [
                    (0, i.jsx)(v.A, {
                        className: b.Nr,
                        applicationId: R.applicationId,
                        skuId: n,
                        guildId: t,
                        variant: v.s.EMBEDDED,
                        onClick: B,
                        analyticsLocations: P,
                    }),
                    (0, i.jsxs)("div", {
                        className: b.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: b.lI,
                                children: [
                                    (0, i.jsx)(s.Text, { variant: "text-md/medium", lineClamp: 1, children: R.name }),
                                    (0, i.jsxs)("div", {
                                        className: b.PB,
                                        children: [
                                            null != w &&
                                                (0, i.jsx)("img", { src: w.toString(), alt: G, className: b.ye }),
                                            (0, i.jsx)(s.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, A.$g)(
                                                    R.price?.amount ?? 0,
                                                    R.price?.currency ?? N.Yr.USD,
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
                                        onClick: B,
                                        text: S.intl.string(S.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(a.$nd, {
                                        variant: "primary",
                                        onClick: F,
                                        text: U
                                            ? S.intl.format(S.t.Xp5WTn, {
                                                  price: (0, A.$g)(R.price?.amount ?? 0, R.price?.currency ?? N.Yr.USD),
                                              })
                                            : S.intl.string(S.t.cg0M2H),
                                        fullWidth: !0,
                                        disabled: !U,
                                    }),
                                    (0, i.jsx)(T.A, { onGift: H }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
