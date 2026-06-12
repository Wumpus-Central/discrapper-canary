n.d(e, { A: () => x }), n(938796);
var i = n(64700),
    l = n(284009),
    r = n.n(l),
    s = n(17928),
    a = n(228366),
    u = n(73825),
    o = n(688810),
    d = n(376374),
    c = n(627363),
    A = n(897100),
    p = n(97352),
    I = n(67480),
    S = n(328968),
    h = n(915043),
    f = n(607940),
    m = n(163437),
    g = n(638643);
function x(t) {
    let { initialSubscribeForGuild: e, analyticsLocation: n, skuId: l, onComplete: x, disableGuildSelector: v } = t,
        P = (0, s.bG)([I.A], () => (null != l ? I.A.get(l) : void 0), [l]),
        N = (0, s.bG)([S.A], () => (null != l ? S.A.getForSKU(l) : void 0), [l]),
        b = (0, s.yK)([p.A], () => (null != l ? p.A.getForSKU(l) : []), [l]),
        E = b[0]?.id,
        L = (0, s.bG)([I.A], () => (null != l ? I.A.getParentSKU(l) : void 0), [l]),
        k = L?.bundledSkuIds,
        F = (0, s.yK)([p.A], () => k?.flatMap(p.A.getForSKU) ?? [], [k]),
        T = i.useMemo(() => F.map((t) => t.id), [F]),
        j = (0, m.PJ)(P?.flags ?? 0),
        C = (0, s.bG)(
            [f.A],
            () => null != e && !1 !== j && f.A.getEntitlementsForGuild(e, !0).some((t) => t.skuId === l),
            [j, l, e],
        ),
        U = P?.applicationId,
        _ = N?.published === !0 && P?.isAvailable() === !0,
        { app: O } = (0, c.NP)(U),
        { analyticsLocations: R } = (0, o.Ay)(),
        w = (0, h.GD)(L, e ?? void 0),
        G = w?.subscription,
        B = w?.subscriptionPlan,
        y = (0, h.Ko)(L, e ?? void 0),
        K = y?.subscriptionPlan,
        { entitlementsLoaded: D } = (0, h.CZ)({ guildId: e });
    null == e && (D = !0);
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
                        initialSubscribeForGuild: e,
                        disableGuildSelector: v,
                        analyticsLocations: R,
                        analyticsLocation: n,
                    }).then(() => {
                        x?.();
                    });
            }, [O, l, _, E, P, T, e, v, R, n, x]),
            subscriptionPurchaseButtonState: z,
            isGuildSubscribed: C,
        }
    );
}
