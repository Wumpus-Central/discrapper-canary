e(938796);
var i = e(582128),
    l = e(284009),
    r = e.n(l),
    s = e(855986),
    a = e(73825),
    o = e(688810),
    u = e(376374),
    d = e(627363),
    c = e(897100),
    A = e(97352),
    p = e(67480),
    I = e(328968),
    m = e(915043),
    f = e(607940),
    S = e(163437),
    g = e(638643);
e.d(
    n,
    {},
    {
        A: function (t) {
            let {
                    initialSubscribeForGuild: n,
                    analyticsLocation: e,
                    skuId: l,
                    onComplete: h,
                    disableGuildSelector: v,
                } = t,
                b = (0, s.bG)([p.A], () => (null != l ? p.A.get(l) : void 0), [l]),
                P = (0, s.bG)([I.A], () => (null != l ? I.A.getForSKU(l) : void 0), [l]),
                x = (0, s.yK)([A.A], () => (null != l ? A.A.getForSKU(l) : []), [l]),
                N = x[0]?.id,
                E = (0, s.bG)([p.A], () => (null != l ? p.A.getParentSKU(l) : void 0), [l]),
                k = E?.bundledSkuIds,
                F = (0, s.yK)([A.A], () => k?.flatMap(A.A.getForSKU) ?? [], [k]),
                L = i.useMemo(() => F.map((t) => t.id), [F]),
                T = (0, S.PJ)(b?.flags ?? 0),
                j = (0, s.bG)(
                    [f.A],
                    () => null != n && !1 !== T && f.A.getEntitlementsForGuild(n, !0).some((t) => t.skuId === l),
                    [T, l, n],
                ),
                U = b?.applicationId,
                _ = P?.published === !0 && b?.isAvailable() === !0,
                { app: C } = (0, d.NP)(U),
                { analyticsLocations: O } = (0, o.Ay)(),
                R = (0, m.GD)(E, n ?? void 0),
                w = R?.subscription,
                G = R?.subscriptionPlan,
                B = (0, m.Ko)(E, n ?? void 0),
                y = B?.subscriptionPlan,
                { entitlementsLoaded: K } = (0, m.CZ)({ guildId: n });
            null == n && (K = !0);
            let D = (0, c.A)(),
                M = null != w && (0, S.Uo)(w, b),
                V = i.useMemo(() => {
                    if (!K || null == C || null == l) return u.wF.LOADING;
                    if (!_) return u.wF.UNAVAILABLE;
                    if (!T) {
                        if (G?.skuId === l) return u.wF.SUBSCRIBED;
                        if (y?.skuId === l && !1 === M) return u.wF.UPCOMING_PLAN;
                    }
                    return u.wF.AVAILABLE;
                }, [G?.skuId, _, C, K, M, T, y?.skuId, l]);
            return (
                i.useEffect(() => {
                    _ && null != l && D && (A.A.isFetchingForSKU(l) || A.A.isLoadedForSKU(l) || (0, a.ur)(l));
                }, [_, l, D]),
                {
                    openModal: i.useCallback(() => {
                        (r()(null != C, "No application"),
                            r()(null != l, "No SKU ID"),
                            r()(_, "Cannot purchase this unpublished plan"),
                            (0, g.w)({
                                subscriptionPlanId: N,
                                sku: b,
                                subscriptionGroupPlanIds: L,
                                initialSubscribeForGuild: n,
                                disableGuildSelector: v,
                                analyticsLocations: O,
                                analyticsLocation: e,
                            }).then(() => {
                                h?.();
                            }));
                    }, [C, l, _, N, b, L, n, v, O, e, h]),
                    subscriptionPurchaseButtonState: V,
                    isGuildSubscribed: j,
                }
            );
        },
    },
);
