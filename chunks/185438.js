(i.d(n, { A: () => g }), i(938796));
var e = i(582128),
    l = i(284009),
    r = i.n(l),
    s = i(17928),
    a = i(73825),
    o = i(688810),
    u = i(376374),
    d = i(627363),
    c = i(897100),
    A = i(97352),
    p = i(67480),
    I = i(328968),
    S = i(915043),
    f = i(607940),
    m = i(163437),
    h = i(638643);
function g(t) {
    let { initialSubscribeForGuild: n, analyticsLocation: i, skuId: l, onComplete: g, disableGuildSelector: v } = t,
        b = (0, s.bG)([p.A], () => (null != l ? p.A.get(l) : void 0), [l]),
        P = (0, s.bG)([I.A], () => (null != l ? I.A.getForSKU(l) : void 0), [l]),
        x = (0, s.yK)([A.A], () => (null != l ? A.A.getForSKU(l) : []), [l]),
        N = x[0]?.id,
        E = (0, s.bG)([p.A], () => (null != l ? p.A.getParentSKU(l) : void 0), [l]),
        L = E?.bundledSkuIds,
        k = (0, s.yK)([A.A], () => L?.flatMap(A.A.getForSKU) ?? [], [L]),
        F = e.useMemo(() => k.map((t) => t.id), [k]),
        T = (0, m.PJ)(b?.flags ?? 0),
        j = (0, s.bG)(
            [f.A],
            () => null != n && !1 !== T && f.A.getEntitlementsForGuild(n, !0).some((t) => t.skuId === l),
            [T, l, n],
        ),
        U = b?.applicationId,
        C = P?.published === !0 && b?.isAvailable() === !0,
        { app: _ } = (0, d.NP)(U),
        { analyticsLocations: O } = (0, o.Ay)(),
        R = (0, S.GD)(E, n ?? void 0),
        y = R?.subscription,
        G = R?.subscriptionPlan,
        w = (0, S.Ko)(E, n ?? void 0),
        B = w?.subscriptionPlan,
        { entitlementsLoaded: K } = (0, S.CZ)({ guildId: n });
    null == n && (K = !0);
    let D = (0, c.A)(),
        M = null != y && (0, m.Uo)(y, b),
        V = e.useMemo(() => {
            if (!K || null == _ || null == l) return u.wF.LOADING;
            if (!C) return u.wF.UNAVAILABLE;
            if (!T) {
                if (G?.skuId === l) return u.wF.SUBSCRIBED;
                if (B?.skuId === l && !1 === M) return u.wF.UPCOMING_PLAN;
            }
            return u.wF.AVAILABLE;
        }, [G?.skuId, C, _, K, M, T, B?.skuId, l]);
    return (
        e.useEffect(() => {
            C && null != l && D && (A.A.isFetchingForSKU(l) || A.A.isLoadedForSKU(l) || (0, a.ur)(l));
        }, [C, l, D]),
        {
            openModal: e.useCallback(() => {
                (r()(null != _, "No application"),
                    r()(null != l, "No SKU ID"),
                    r()(C, "Cannot purchase this unpublished plan"),
                    (0, h.w)({
                        subscriptionPlanId: N,
                        sku: b,
                        subscriptionGroupPlanIds: F,
                        initialSubscribeForGuild: n,
                        disableGuildSelector: v,
                        analyticsLocations: O,
                        analyticsLocation: i,
                    }).then(() => {
                        g?.();
                    }));
            }, [_, l, C, N, b, F, n, v, O, i, g]),
            subscriptionPurchaseButtonState: V,
            isGuildSubscribed: j,
        }
    );
}
