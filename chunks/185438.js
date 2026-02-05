n.d(e, { A: () => T }), n(938796);
var i = n(64700),
    l = n(284009),
    r = n.n(l),
    s = n(311907),
    u = n(73153),
    a = n(73825),
    o = n(688810),
    c = n(376374),
    d = n(627363),
    A = n(897100),
    p = n(97352),
    S = n(67480),
    I = n(328968),
    f = n(915043),
    E = n(607940),
    g = n(163437),
    m = n(638643);
function T(t) {
    let { initialSubscribeForGuild: e, analyticsLocation: n, skuId: l, onComplete: T, disableGuildSelector: _ } = t,
        N = (0, s.bG)([S.A], () => (null != l ? S.A.get(l) : void 0), [l]),
        h = (0, s.bG)([I.A], () => (null != l ? I.A.getForSKU(l) : void 0), [l]),
        L = (0, s.yK)([p.A], () => (null != l ? p.A.getForSKU(l) : []), [l]),
        F = L[0]?.id,
        C = (0, s.bG)([S.A], () => (null != l ? S.A.getParentSKU(l) : void 0), [l]),
        P = C?.bundledSkuIds,
        v = (0, s.yK)([p.A], () => P?.flatMap(p.A.getForSKU) ?? [], [P]),
        O = i.useMemo(() => v.map((t) => t.id), [v]),
        b = (0, g.PJ)(N?.flags ?? 0),
        x = (0, s.bG)(
            [E.A],
            () => null != e && !1 !== b && E.A.getEntitlementsForGuild(e, !0).some((t) => t.skuId === l),
            [b, l, e],
        ),
        R = N?.applicationId,
        G = h?.published === !0 && N?.isAvailable() === !0,
        { app: j } = (0, d.NP)(R),
        { analyticsLocations: D } = (0, o.Ay)(),
        U = (0, f.GD)(C, e ?? void 0),
        k = U?.subscription,
        w = U?.subscriptionPlan,
        B = (0, f.Ko)(C, e ?? void 0),
        K = B?.subscriptionPlan,
        { entitlementsLoaded: M } = (0, f.CZ)({ guildId: e });
    null == e && (M = !0);
    let y = (0, A.A)(),
        H = null != k && (0, g.Uo)(k, N),
        Y = i.useMemo(() => {
            if (!M || null == j || null == l) return c.wF.LOADING;
            if (!G) return c.wF.UNAVAILABLE;
            if (!b) {
                if (w?.skuId === l) return c.wF.SUBSCRIBED;
                if (K?.skuId === l && !1 === H) return c.wF.UPCOMING_PLAN;
            }
            return c.wF.AVAILABLE;
        }, [w?.skuId, G, j, M, H, b, K?.skuId, l]);
    return (
        i.useEffect(() => {
            G &&
                null != l &&
                y &&
                (p.A.isFetchingForSKU(l) ||
                    p.A.isLoadedForSKU(l) ||
                    u.h.wait(() => {
                        (0, a.ur)(l);
                    }));
        }, [G, l, y]),
        {
            openModal: i.useCallback(() => {
                r()(null != j, "No application"),
                    r()(null != l, "No SKU ID"),
                    r()(G, "Cannot purchase this unpublished plan"),
                    (0, m.w)({
                        subscriptionPlanId: F,
                        sku: N,
                        subscriptionGroupPlanIds: O,
                        initialSubscribeForGuild: e,
                        disableGuildSelector: _,
                        analyticsLocations: D,
                        analyticsLocation: n,
                    }).then(() => {
                        T?.();
                    });
            }, [j, l, G, F, N, O, e, _, D, n, T]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: x,
        }
    );
}
