(e.d(n, { A: () => g }), e(938796));
var i = e(582128),
    l = e(284009),
    r = e.n(l),
    s = e(17928),
    a = e(73825),
    u = e(688810),
    o = e(376374),
    d = e(627363),
    c = e(897100),
    A = e(97352),
    p = e(67480),
    I = e(328968),
    S = e(915043),
    f = e(607940),
    h = e(163437),
    m = e(638643);
function g(t) {
    let { initialSubscribeForGuild: n, analyticsLocation: e, skuId: l, onComplete: g, disableGuildSelector: v } = t,
        x = (0, s.bG)([p.A], () => (null != l ? p.A.get(l) : void 0), [l]),
        P = (0, s.bG)([I.A], () => (null != l ? I.A.getForSKU(l) : void 0), [l]),
        N = (0, s.yK)([A.A], () => (null != l ? A.A.getForSKU(l) : []), [l]),
        b = N[0]?.id,
        E = (0, s.bG)([p.A], () => (null != l ? p.A.getParentSKU(l) : void 0), [l]),
        L = E?.bundledSkuIds,
        k = (0, s.yK)([A.A], () => L?.flatMap(A.A.getForSKU) ?? [], [L]),
        F = i.useMemo(() => k.map((t) => t.id), [k]),
        T = (0, h.PJ)(x?.flags ?? 0),
        j = (0, s.bG)(
            [f.A],
            () => null != n && !1 !== T && f.A.getEntitlementsForGuild(n, !0).some((t) => t.skuId === l),
            [T, l, n],
        ),
        U = x?.applicationId,
        C = P?.published === !0 && x?.isAvailable() === !0,
        { app: _ } = (0, d.NP)(U),
        { analyticsLocations: O } = (0, u.Ay)(),
        R = (0, S.GD)(E, n ?? void 0),
        w = R?.subscription,
        G = R?.subscriptionPlan,
        B = (0, S.Ko)(E, n ?? void 0),
        y = B?.subscriptionPlan,
        { entitlementsLoaded: K } = (0, S.CZ)({ guildId: n });
    null == n && (K = !0);
    let D = (0, c.A)(),
        M = null != w && (0, h.Uo)(w, x),
        V = i.useMemo(() => {
            if (!K || null == _ || null == l) return o.wF.LOADING;
            if (!C) return o.wF.UNAVAILABLE;
            if (!T) {
                if (G?.skuId === l) return o.wF.SUBSCRIBED;
                if (y?.skuId === l && !1 === M) return o.wF.UPCOMING_PLAN;
            }
            return o.wF.AVAILABLE;
        }, [G?.skuId, C, _, K, M, T, y?.skuId, l]);
    return (
        i.useEffect(() => {
            C && null != l && D && (A.A.isFetchingForSKU(l) || A.A.isLoadedForSKU(l) || (0, a.ur)(l));
        }, [C, l, D]),
        {
            openModal: i.useCallback(() => {
                (r()(null != _, "No application"),
                    r()(null != l, "No SKU ID"),
                    r()(C, "Cannot purchase this unpublished plan"),
                    (0, m.w)({
                        subscriptionPlanId: b,
                        sku: x,
                        subscriptionGroupPlanIds: F,
                        initialSubscribeForGuild: n,
                        disableGuildSelector: v,
                        analyticsLocations: O,
                        analyticsLocation: e,
                    }).then(() => {
                        g?.();
                    }));
            }, [_, l, C, b, x, F, n, v, O, e, g]),
            subscriptionPurchaseButtonState: V,
            isGuildSubscribed: j,
        }
    );
}
