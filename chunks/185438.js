n.d(t, {
    A: () => y,
}),
    n(114821),
    n(339614),
    n(938796);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(73825),
    c = n(688810),
    u = n(376374),
    d = n(627363),
    f = n(897100),
    p = n(97352),
    _ = n(67480),
    h = n(328968),
    m = n(915043),
    g = n(607940),
    E = n(163437),
    b = n(638643);

function y(e) {
    var t, n;
    let { initialSubscribeForGuild: i, analyticsLocation: y, skuId: O, onComplete: A, disableGuildSelector: v } = e,
        S = (0, s.bG)([_.A], () => (null != O ? _.A.get(O) : void 0), [O]),
        I = (0, s.bG)([h.A], () => (null != O ? h.A.getForSKU(O) : void 0), [O]),
        T = null == (n = (0, s.yK)([p.A], () => (null != O ? p.A.getForSKU(O) : []), [O])[0]) ? void 0 : n.id,
        C = (0, s.bG)([_.A], () => (null != O ? _.A.getParentSKU(O) : void 0), [O]),
        N = null == C ? void 0 : C.bundledSkuIds,
        R = (0, s.yK)([p.A], () => {
            var e;
            return null != (e = null == N ? void 0 : N.flatMap(p.A.getForSKU)) ? e : [];
        }, [N]),
        w = r.useMemo(() => R.map((e) => e.id), [R]),
        P = (0, E.PJ)(null != (t = null == S ? void 0 : S.flags) ? t : 0),
        D = (0, s.bG)(
            [g.A],
            () => null != i && !1 !== P && g.A.getEntitlementsForGuild(i, !0).some((e) => e.skuId === O),
            [P, O, i],
        ),
        x = null == S ? void 0 : S.applicationId,
        L = (null == I ? void 0 : I.published) === !0 && (null == S ? void 0 : S.isAvailable()) === !0,
        { app: j } = (0, d.NP)(x),
        { analyticsLocations: M } = (0, c.Ay)(),
        k = (0, m.GD)(C, null != i ? i : void 0),
        U = null == k ? void 0 : k.subscription,
        G = null == k ? void 0 : k.subscriptionPlan,
        V = (0, m.Ko)(C, null != i ? i : void 0),
        F = null == V ? void 0 : V.subscriptionPlan,
        { entitlementsLoaded: B } = (0, m.CZ)({
            guildId: i,
        });
    null == i && (B = !0);
    let H = (0, f.A)(),
        Y = null != U && (0, E.Uo)(U, S),
        W = r.useMemo(() => {
            if (!B || null == j || null == O) return u.wF.LOADING;
            if (!L) return u.wF.UNAVAILABLE;
            if (!P) {
                if ((null == G ? void 0 : G.skuId) === O) return u.wF.SUBSCRIBED;
                if ((null == F ? void 0 : F.skuId) === O && !1 === Y) return u.wF.UPCOMING_PLAN;
            }
            return u.wF.AVAILABLE;
        }, [null == G ? void 0 : G.skuId, L, j, B, Y, P, null == F ? void 0 : F.skuId, O]);
    return (
        r.useEffect(() => {
            L &&
                null != O &&
                H &&
                (p.A.isFetchingForSKU(O) ||
                    p.A.isLoadedForSKU(O) ||
                    o.h.wait(() => {
                        (0, l.ur)(O);
                    }));
        }, [L, O, H]),
        {
            openModal: r.useCallback(() => {
                a()(null != j, "No application"),
                    a()(null != O, "No SKU ID"),
                    a()(L, "Cannot purchase this unpublished plan"),
                    (0, b.w)({
                        subscriptionPlanId: T,
                        sku: S,
                        subscriptionGroupPlanIds: w,
                        initialSubscribeForGuild: i,
                        disableGuildSelector: v,
                        analyticsLocations: M,
                        analyticsLocation: y,
                    }).then(() => {
                        null == A || A();
                    });
            }, [j, O, L, T, S, w, i, v, M, y, A]),
            subscriptionPurchaseButtonState: W,
            isGuildSubscribed: D,
        }
    );
}
