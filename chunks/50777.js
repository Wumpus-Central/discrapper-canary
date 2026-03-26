n.d(t, { A: () => N });
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
    I = n(317560),
    E = n(533406),
    b = n(300182),
    v = n(183802),
    T = n(652215),
    y = n(985018),
    S = n(23542);
function N(e) {
    let { guildId: t, skuId: n, channel: N } = e,
        j = (0, l.bG)([A.A], () => A.A.isFetchingForSKU(n)),
        L = (0, l.bG)([g.A], () => g.A.get(n)),
        R = L?.applicationId,
        P = (0, l.bG)([u.A], () => null != R && u.A.isFetchingApplication(R)),
        w = (0, l.bG)([u.A], () => null != R && u.A.didFetchingApplicationFail(R)),
        M = (0, m.h)(R),
        { analyticsLocations: D } = (0, c.Ay)(d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, h.pE)();
    let k = (0, l.bG)([p.default], () =>
            N.isDM() && null != N.recipients && 0 !== N.recipients.length ? p.default.getUser(N.recipients[0]) : null,
        ),
        O = (0, l.bG)([C.A], () => (null != n ? C.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        { primaryIconAsset: U, primaryIconLabel: B } = a.useMemo(() => (0, x.Cv)(L, R), [L, R]);
    a.useEffect(() => {
        null == t || null == n || A.A.isFetchingForSKU(n) || (0, f.qf)(t, n);
    }, [t, n]);
    let G = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    L?.applicationId != null &&
                        null != t &&
                        (0, I.R)({
                            skuId: n,
                            applicationId: L.applicationId,
                            guildId: t,
                            isStorefront: !1,
                            analyticsLocations: D,
                        });
            },
            [n, L, t, D],
        ),
        F = a.useCallback(() => {
            null != L &&
                O &&
                (0, E.a)(
                    L,
                    { isGift: !1 },
                    { analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON], guildId: t },
                );
        }, [L, t, O]),
        H = a.useCallback(() => {
            null != L &&
                (0, E.a)(
                    L,
                    { isGift: !0, giftRecipient: k ?? void 0 },
                    { analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON] },
                );
        }, [L, k]),
        V = null != R && null == M && !w;
    return (j || P || V) && (null == L || null == M)
        ? (0, i.jsx)("div", { className: S.kL, children: (0, i.jsx)(o.y$y, { className: S.u1 }) })
        : null != L && null != M && (0, _.A)(M) && M.guildId === t
          ? (0, i.jsxs)("div", {
                className: S.kL,
                children: [
                    (0, i.jsx)(v.A, {
                        className: S.Nr,
                        skuId: n,
                        variant: v.s.EMBEDDED,
                        onClick: G,
                        analyticsLocations: D,
                    }),
                    (0, i.jsxs)("div", {
                        className: S.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: S.lI,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: S.PB,
                                        children: [
                                            null != U &&
                                                (0, i.jsx)("img", { src: U.toString(), alt: B, className: S.ye }),
                                            (0, i.jsx)(o.Text, {
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                children: L.name,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: S.PB,
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                lineClamp: 1,
                                                children: (0, x.p3)(L, T.lid.DEFAULT),
                                            }),
                                            null != L.orbsReward &&
                                                L.orbsReward > 0 &&
                                                (0, i.jsx)("div", {
                                                    className: S.pt,
                                                    children: (0, i.jsx)(o.Text, {
                                                        variant: "text-sm/semibold",
                                                        color: "currentColor",
                                                        children: y.intl.format(y.t.GiVd2Q, {
                                                            orbCount: L.orbsReward,
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
                                        text: O ? void 0 : y.intl.string(y.t.IqlPbQ),
                                        children: (0, i.jsx)(r.$nd, {
                                            variant: O ? "secondary" : "primary",
                                            onClick: G,
                                            text: y.intl.string(y.t.KLBTgF),
                                            fullWidth: !0,
                                        }),
                                    }),
                                    O &&
                                        (0, i.jsx)(r.$nd, {
                                            variant: "primary",
                                            onClick: F,
                                            text: y.intl.format(y.t.Xp5WTn, { price: (0, x.p3)(L, T.lid.DEFAULT) }),
                                            fullWidth: !0,
                                        }),
                                    (0, i.jsx)(b.A, { onGift: H }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
          : null;
}
