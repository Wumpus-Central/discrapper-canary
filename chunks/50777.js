n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    r = n(158954),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(587895),
    _ = n(875444),
    m = n(429913),
    h = n(594832),
    p = n(287809),
    g = n(67480),
    A = n(328968),
    x = n(580630),
    f = n(871123),
    C = n(733391),
    E = n(832163),
    I = n(317560),
    b = n(533406),
    T = n(300182),
    v = n(183802),
    S = n(818348),
    y = n(985018),
    N = n(928625);
function j(e) {
    let { guildId: t, skuId: n, channel: j } = e,
        L = (0, a.bG)([A.A], () => A.A.isFetchingForSKU(n)),
        R = (0, a.bG)([g.A], () => g.A.get(n)),
        P = R?.applicationId,
        M = (0, a.bG)([u.A], () => null != P && u.A.isFetchingApplication(P)),
        w = (0, a.bG)([u.A], () => null != P && u.A.didFetchingApplicationFail(P)),
        k = (0, m.h)(P),
        { analyticsLocations: D } = (0, c.Ay)(d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, h.pE)();
    let O = (0, a.bG)([p.default], () =>
            j.isDM() && null != j.recipients && 0 !== j.recipients.length ? p.default.getUser(j.recipients[0]) : null,
        ),
        U = (0, a.bG)([E.A], () => (null != n ? E.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: G, primaryIconLabel: B } = l.useMemo(() => (0, f.Cv)(R, P), [R, P]);
    l.useEffect(() => {
        null == t || null == n || A.A.isFetchingForSKU(n) || (0, C.qf)(t, n);
    }, [t, n]);
    let F = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    R?.applicationId != null &&
                        null != t &&
                        (0, I.R)({
                            skuId: n,
                            applicationId: R.applicationId,
                            guildId: t,
                            isStorefront: !1,
                            analyticsLocations: D,
                        });
            },
            [n, R?.applicationId, t, D],
        ),
        H = l.useCallback(() => {
            null != R &&
                U &&
                (0, b.a)(
                    R,
                    { isGift: !1 },
                    { analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [R, t, U]),
        V = l.useCallback(() => {
            null != R &&
                (0, b.a)(
                    R,
                    { isGift: !0, giftRecipient: O ?? void 0 },
                    { analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [R, O]),
        W = null != P && null == k && !w;
    return (L || M || W) && (null == R || null == k)
        ? (0, i.jsx)("div", { className: N.kL, children: (0, i.jsx)(o.y$y, { className: N.u1 }) })
        : null != R && null != k && (0, _.A)(k) && k.guildId === t
          ? (0, i.jsxs)("div", {
                className: N.kL,
                children: [
                    (0, i.jsx)(v.A, {
                        className: N.Nr,
                        applicationId: R.applicationId,
                        skuId: n,
                        guildId: t,
                        variant: v.s.EMBEDDED,
                        onClick: F,
                        analyticsLocations: D,
                    }),
                    (0, i.jsxs)("div", {
                        className: N.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: N.lI,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: N.PB,
                                        children: [
                                            null != G &&
                                                (0, i.jsx)("img", { src: G.toString(), alt: B, className: N.ye }),
                                            (0, i.jsx)(o.Text, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: R.name,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: N.PB,
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, x.$g)(
                                                    R.price?.amount ?? 0,
                                                    R.price?.currency ?? S.Yr.USD,
                                                ),
                                            }),
                                            null != R.orbsReward &&
                                                R.orbsReward > 0 &&
                                                (0, i.jsx)("div", {
                                                    className: N.pt,
                                                    children: (0, i.jsx)(o.Text, {
                                                        variant: "text-sm/semibold",
                                                        color: "currentColor",
                                                        children: y.intl.format(y.t.GiVd2Q, {
                                                            orbCount: R.orbsReward,
                                                            orbIconHook: () =>
                                                                (0, i.jsx)(
                                                                    r.Cp8,
                                                                    { size: "xs", color: "currentColor" },
                                                                    "orbs-icon",
                                                                ),
                                                        }),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(r.e2v, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, i.jsx)(s.m, {
                                        text: U ? void 0 : y.intl.string(y.t.IqlPbQ),
                                        children: (0, i.jsx)(r.$nd, {
                                            variant: U ? "secondary" : "primary",
                                            onClick: F,
                                            text: y.intl.string(y.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    U &&
                                        (0, i.jsx)(r.$nd, {
                                            variant: "primary",
                                            onClick: H,
                                            text: y.intl.format(y.t.Xp5WTn, {
                                                price: (0, x.$g)(R.price?.amount ?? 0, R.price?.currency ?? S.Yr.USD),
                                            }),
                                            fullWidth: !0,
                                        }),
                                    (0, i.jsx)(T.A, { onGift: V }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
