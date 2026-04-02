n.d(t, { A: () => L });
var i = n(627968),
    a = n(64700),
    r = n(158954),
    l = n(311907),
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
    x = n(871123),
    f = n(733391),
    C = n(832163),
    I = n(207654),
    E = n(317560),
    b = n(533406),
    v = n(971146),
    T = n(300182),
    S = n(183802),
    y = n(652215),
    N = n(985018),
    j = n(23542);
function L(e) {
    let { guildId: t, skuId: n, channel: L } = e,
        R = (0, l.bG)([A.A], () => A.A.isFetchingForSKU(n)),
        P = (0, l.bG)([g.A], () => g.A.get(n)),
        w = P?.applicationId,
        D = (0, l.bG)([u.A], () => null != w && u.A.isFetchingApplication(w)),
        M = (0, l.bG)([u.A], () => null != w && u.A.didFetchingApplicationFail(w)),
        k = (0, m.h)(w),
        O = (0, I.b)({ location: "product_details_embed" }),
        { analyticsLocations: U } = (0, c.Ay)(d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, h.pE)();
    let B = (0, l.bG)([p.default], () =>
            L.isDM() && null != L.recipients && 0 !== L.recipients.length ? p.default.getUser(L.recipients[0]) : null,
        ),
        G = (0, l.bG)([C.A], () => (null != n ? C.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: F, primaryIconLabel: H } = a.useMemo(() => (0, x.Cv)(P, w), [P, w]);
    a.useEffect(() => {
        null == t || null == n || A.A.isFetchingForSKU(n) || (0, f.qf)(t, n);
    }, [t, n]);
    let V = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    P?.applicationId != null &&
                        (0, E.R)({ skuId: n, applicationId: P.applicationId, isStorefront: !1, analyticsLocations: U });
            },
            [n, P, U],
        ),
        q = a.useCallback(() => {
            null != P &&
                G &&
                (0, b.a)(
                    P,
                    { isGift: !1 },
                    { analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [P, t, G]),
        W = a.useCallback(() => {
            null != P &&
                (0, b.a)(
                    P,
                    { isGift: !0, giftRecipient: B ?? void 0 },
                    { analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [P, B]),
        z = null != w && null == k && !M;
    return (R || D || z) && (null == P || null == k)
        ? (0, i.jsx)("div", { className: j.kL, children: (0, i.jsx)(o.y$y, { className: j.u1 }) })
        : null != P && null != k && (0, _.A)(k) && k.guildId === t
          ? (0, i.jsxs)("div", {
                className: j.kL,
                children: [
                    (0, i.jsx)(S.A, {
                        className: j.Nr,
                        skuId: n,
                        variant: S.s.EMBEDDED,
                        onClick: V,
                        analyticsLocations: U,
                    }),
                    (0, i.jsxs)("div", {
                        className: j.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: j.lI,
                                children: [
                                    O && null != k && (0, i.jsx)(v.V, { application: k }),
                                    (0, i.jsxs)("div", {
                                        className: j.PB,
                                        children: [
                                            null != F &&
                                                (0, i.jsx)("img", { src: F.toString(), alt: H, className: j.ye }),
                                            (0, i.jsx)(o.Text, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: P.name,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: j.PB,
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, x.p3)(P, y.lid.DEFAULT),
                                            }),
                                            null != P.orbsReward &&
                                                P.orbsReward > 0 &&
                                                (0, i.jsx)("div", {
                                                    className: j.pt,
                                                    children: (0, i.jsx)(o.Text, {
                                                        variant: "text-sm/semibold",
                                                        color: "currentColor",
                                                        children: N.intl.format(N.t.GiVd2Q, {
                                                            orbCount: P.orbsReward,
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
                                        text: G ? void 0 : N.intl.string(N.t.IqlPbQ),
                                        children: (0, i.jsx)(r.$nd, {
                                            variant: G ? "secondary" : "primary",
                                            onClick: V,
                                            text: N.intl.string(N.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    G &&
                                        (0, i.jsx)(r.$nd, {
                                            variant: "primary",
                                            onClick: q,
                                            text: N.intl.format(N.t.Xp5WTn, { price: (0, x.p3)(P, y.lid.DEFAULT) }),
                                            fullWidth: !0,
                                        }),
                                    (0, i.jsx)(T.A, { onGift: W }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
