n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(158954),
    o = n(311907),
    d = n(990078),
    c = n(397927),
    u = n(793574),
    _ = n(688810),
    m = n(587895),
    h = n(875444),
    p = n(429913),
    g = n(594832),
    A = n(287809),
    x = n(67480),
    f = n(328968),
    C = n(580630),
    E = n(871123),
    I = n(733391),
    b = n(832163),
    T = n(317560),
    v = n(533406),
    S = n(300182),
    y = n(183802),
    N = n(818348),
    j = n(985018),
    L = n(928625);
function R(e) {
    let { guildId: t, skuId: n, channel: r } = e,
        R = (0, o.bG)([f.A], () => f.A.isFetchingForSKU(n)),
        P = (0, o.bG)([x.A], () => x.A.get(n)),
        M = P?.applicationId,
        w = (0, o.bG)([m.A], () => null != M && m.A.isFetchingApplication(M)),
        D = (0, o.bG)([m.A], () => null != M && m.A.didFetchingApplicationFail(M)),
        k = (0, p.h)(M),
        { analyticsLocations: O } = (0, _.Ay)(u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, g.pE)();
    let U = (0, o.bG)([A.default], () =>
            r.isDM() && null != r.recipients && 0 !== r.recipients.length ? A.default.getUser(r.recipients[0]) : null,
        ),
        G = (0, o.bG)([b.A], () => (null != n ? b.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: B, primaryIconLabel: F } = l.useMemo(() => (0, E.Cv)(P, M), [P, M]);
    l.useEffect(() => {
        null == t || null == n || f.A.isFetchingForSKU(n) || (0, I.qf)(t, n);
    }, [t, n]);
    let H = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    P?.applicationId != null &&
                        null != t &&
                        (0, T.R)({
                            skuId: n,
                            applicationId: P.applicationId,
                            guildId: t,
                            isStorefront: !1,
                            analyticsLocations: O,
                        });
            },
            [n, P?.applicationId, t, O],
        ),
        V = l.useCallback(() => {
            null != P &&
                G &&
                (0, v.a)(
                    P,
                    { isGift: !1 },
                    { analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [P, t, G]),
        W = l.useCallback(() => {
            null != P &&
                (0, v.a)(
                    P,
                    { isGift: !0, giftRecipient: U ?? void 0 },
                    { analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [P, U]),
        q = null != M && null == k && !D;
    return (R || w || q) && (null == P || null == k)
        ? (0, i.jsx)("div", { className: L.kL, children: (0, i.jsx)(c.y$y, { className: L.u1 }) })
        : null != P && null != k && (0, h.A)(k) && k.guildId === t
          ? (0, i.jsxs)("div", {
                className: L.kL,
                children: [
                    (0, i.jsx)(y.A, {
                        className: L.Nr,
                        applicationId: P.applicationId,
                        skuId: n,
                        guildId: t,
                        variant: y.s.EMBEDDED,
                        onClick: H,
                        analyticsLocations: O,
                    }),
                    (0, i.jsxs)("div", {
                        className: L.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: L.lI,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: L.PB,
                                        children: [
                                            null != B &&
                                                (0, i.jsx)("img", { src: B.toString(), alt: F, className: L.ye }),
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: P.name,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: L.PB,
                                        children: [
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, C.$g)(
                                                    P.price?.amount ?? 0,
                                                    P.price?.currency ?? N.Yr.USD,
                                                ),
                                            }),
                                            null != P.orbsReward &&
                                                P.orbsReward > 0 &&
                                                (0, i.jsx)("div", {
                                                    className: L.pt,
                                                    children: (0, i.jsx)(c.Text, {
                                                        variant: "text-sm/semibold",
                                                        color: "currentColor",
                                                        children: j.intl.format(j.t.GiVd2Q, {
                                                            orbCount: P.orbsReward,
                                                            orbIconHook: () =>
                                                                (0, i.jsx)(
                                                                    s.Cp8,
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
                            (0, i.jsxs)(s.e2v, {
                                wrap: !1,
                                fullWidth: !0,
                                className: a()({ [L.e$]: !G }),
                                children: [
                                    (0, i.jsx)(s.$nd, {
                                        variant: "secondary",
                                        onClick: H,
                                        text: j.intl.string(j.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(d.m, {
                                        text: G ? null : j.intl.string(j.t.IqlPbQ),
                                        children: (0, i.jsx)(s.$nd, {
                                            variant: "primary",
                                            onClick: V,
                                            text: j.intl.format(j.t.Xp5WTn, {
                                                price: (0, C.$g)(P.price?.amount ?? 0, P.price?.currency ?? N.Yr.USD),
                                            }),
                                            fullWidth: !0,
                                            "aria-disabled": !G,
                                        }),
                                    }),
                                    (0, i.jsx)(S.A, { onGift: W }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
