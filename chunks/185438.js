i.d(e, { A: () => C }), i(938796);
var n = i(64700),
    l = i(284009),
    s = i.n(l),
    a = i(311907),
    r = i(73153),
    o = i(73825),
    u = i(688810),
    c = i(376374),
    d = i(627363),
    p = i(897100),
    S = i(97352),
    I = i(67480),
    A = i(328968),
    _ = i(915043),
    T = i(607940),
    h = i(163437),
    E = i(638643);
function C(t) {
    let { initialSubscribeForGuild: e, analyticsLocation: i, skuId: l, onComplete: C, disableGuildSelector: f } = t,
        g = (0, a.bG)([I.A], () => (null != l ? I.A.get(l) : void 0), [l]),
        N = (0, a.bG)([A.A], () => (null != l ? A.A.getForSKU(l) : void 0), [l]),
        P = (0, a.yK)([S.A], () => (null != l ? S.A.getForSKU(l) : []), [l]),
        m = P[0]?.id,
        L = (0, a.bG)([I.A], () => (null != l ? I.A.getParentSKU(l) : void 0), [l]),
        v = L?.bundledSkuIds,
        O = (0, a.yK)([S.A], () => v?.flatMap(S.A.getForSKU) ?? [], [v]),
        F = n.useMemo(() => O.map((t) => t.id), [O]),
        b = (0, h.PJ)(g?.flags ?? 0),
        w = (0, a.bG)(
            [T.A],
            () => null != e && !1 !== b && T.A.getEntitlementsForGuild(e, !0).some((t) => t.skuId === l),
            [b, l, e],
        ),
        U = g?.applicationId,
        R = N?.published === !0 && g?.isAvailable() === !0,
        { app: y } = (0, d.NP)(U),
        { analyticsLocations: x } = (0, u.Ay)(),
        G = (0, _.GD)(L, e ?? void 0),
        k = G?.subscription,
        D = G?.subscriptionPlan,
        M = (0, _.Ko)(L, e ?? void 0),
        B = M?.subscriptionPlan,
        { entitlementsLoaded: j } = (0, _.CZ)({ guildId: e });
    null == e && (j = !0);
    let H = (0, p.A)(),
        K = null != k && (0, h.Uo)(k, g),
        V = n.useMemo(() => {
            if (!j || null == y || null == l) return c.wF.LOADING;
            if (!R) return c.wF.UNAVAILABLE;
            if (!b) {
                if (D?.skuId === l) return c.wF.SUBSCRIBED;
                if (B?.skuId === l && !1 === K) return c.wF.UPCOMING_PLAN;
            }
            return c.wF.AVAILABLE;
        }, [D?.skuId, R, y, j, K, b, B?.skuId, l]);
    return (
        n.useEffect(() => {
            R &&
                null != l &&
                H &&
                (S.A.isFetchingForSKU(l) ||
                    S.A.isLoadedForSKU(l) ||
                    r.h.wait(() => {
                        (0, o.ur)(l);
                    }));
        }, [R, l, H]),
        {
            openModal: n.useCallback(() => {
                s()(null != y, "No application"),
                    s()(null != l, "No SKU ID"),
                    s()(R, "Cannot purchase this unpublished plan"),
                    (0, E.w)({
                        subscriptionPlanId: m,
                        sku: g,
                        subscriptionGroupPlanIds: F,
                        initialSubscribeForGuild: e,
                        disableGuildSelector: f,
                        analyticsLocations: x,
                        analyticsLocation: i,
                    }).then(() => {
                        C?.();
                    });
            }, [y, l, R, m, g, F, e, f, x, i, C]),
            subscriptionPurchaseButtonState: V,
            isGuildSubscribed: w,
        }
    );
}
