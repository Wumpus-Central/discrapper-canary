e.d(n, { A: () => v }), e(938796);
var i = e(582128),
    l = e(284009),
    r = e.n(l),
    s = e(17928),
    a = e(228366),
    u = e(73825),
    o = e(688810),
    d = e(376374),
    c = e(627363),
    A = e(897100),
    p = e(97352),
    I = e(67480),
    S = e(328968),
    f = e(915043),
    h = e(607940),
    m = e(163437),
    g = e(638643);
function v(t) {
    let { initialSubscribeForGuild: n, analyticsLocation: e, skuId: l, onComplete: v, disableGuildSelector: x } = t,
        P = (0, s.bG)([I.A], () => (null != l ? I.A.get(l) : void 0), [l]),
        N = (0, s.bG)([S.A], () => (null != l ? S.A.getForSKU(l) : void 0), [l]),
        b = (0, s.yK)([p.A], () => (null != l ? p.A.getForSKU(l) : []), [l]),
        E = b[0]?.id,
        L = (0, s.bG)([I.A], () => (null != l ? I.A.getParentSKU(l) : void 0), [l]),
        k = L?.bundledSkuIds,
        F = (0, s.yK)([p.A], () => k?.flatMap(p.A.getForSKU) ?? [], [k]),
        T = i.useMemo(() => F.map((t) => t.id), [F]),
        j = (0, m.PJ)(P?.flags ?? 0),
        U = (0, s.bG)(
            [h.A],
            () => null != n && !1 !== j && h.A.getEntitlementsForGuild(n, !0).some((t) => t.skuId === l),
            [j, l, n],
        ),
        C = P?.applicationId,
        _ = N?.published === !0 && P?.isAvailable() === !0,
        { app: O } = (0, c.NP)(C),
        { analyticsLocations: R } = (0, o.Ay)(),
        w = (0, f.GD)(L, n ?? void 0),
        G = w?.subscription,
        B = w?.subscriptionPlan,
        y = (0, f.Ko)(L, n ?? void 0),
        K = y?.subscriptionPlan,
        { entitlementsLoaded: D } = (0, f.CZ)({ guildId: n });
    null == n && (D = !0);
    let M = (0, A.A)(),
        V = null != G && (0, m.Uo)(G, P),
        z = i.useMemo(() => {
            if (!D || null == O || null == l) return d.wF.LOADING;
            if (!_) return d.wF.UNAVAILABLE;
            if (!j) {
                if (B?.skuId === l) return d.wF.SUBSCRIBED;
                if (K?.skuId === l && !1 === V) return d.wF.UPCOMING_PLAN;
            }
            return d.wF.AVAILABLE;
        }, [B?.skuId, _, O, D, V, j, K?.skuId, l]);
    return (
        i.useEffect(() => {
            _ &&
                null != l &&
                M &&
                (p.A.isFetchingForSKU(l) ||
                    p.A.isLoadedForSKU(l) ||
                    a.h.wait(() => {
                        (0, u.ur)(l);
                    }));
        }, [_, l, M]),
        {
            openModal: i.useCallback(() => {
                r()(null != O, "No application"),
                    r()(null != l, "No SKU ID"),
                    r()(_, "Cannot purchase this unpublished plan"),
                    (0, g.w)({
                        subscriptionPlanId: E,
                        sku: P,
                        subscriptionGroupPlanIds: T,
                        initialSubscribeForGuild: n,
                        disableGuildSelector: x,
                        analyticsLocations: R,
                        analyticsLocation: e,
                    }).then(() => {
                        v?.();
                    });
            }, [O, l, _, E, P, T, n, x, R, e, v]),
            subscriptionPurchaseButtonState: z,
            isGuildSubscribed: U,
        }
    );
}
