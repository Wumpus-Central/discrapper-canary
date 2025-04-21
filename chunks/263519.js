n.d(t, { Z: () => h }), n(361932), n(187205), n(997841);
var r = n(192379),
    l = n(512722),
    i = n.n(l),
    o = n(442837),
    a = n(570140),
    u = n(821849),
    s = n(906732),
    c = n(680005),
    d = n(728345),
    p = n(349167),
    f = n(509545),
    b = n(55563),
    O = n(551428),
    m = n(270144),
    y = n(488915),
    v = n(171246),
    g = n(929011);
function h(e) {
    var t, n;
    let { initialSubscribeForGuild: l, analyticsLocation: h, skuId: j, onComplete: S, disableGuildSelector: P } = e,
        I = (0, o.e7)([b.Z], () => (null != j ? b.Z.get(j) : void 0), [j]),
        E = (0, o.e7)([O.Z], () => (null != j ? O.Z.getForSKU(j) : void 0), [j]),
        x = null == (t = (0, o.Wu)([f.Z], () => (null != j ? f.Z.getForSKU(j) : []), [j])[0]) ? void 0 : t.id,
        Z = (0, o.e7)([b.Z], () => (null != j ? b.Z.getParentSKU(j) : void 0), [j]),
        w = null == Z ? void 0 : Z.bundledSkuIds,
        A = (0, o.Wu)(
            [f.Z],
            () => {
                var e;
                return null != (e = null == w ? void 0 : w.flatMap(f.Z.getForSKU)) ? e : [];
            },
            [w]
        ),
        k = r.useMemo(() => A.map((e) => e.id), [A]),
        N = (0, v.KK)(null != (n = null == I ? void 0 : I.flags) ? n : 0),
        _ = (0, o.e7)([y.Z], () => null != l && !1 !== N && y.Z.getEntitlementsForGuild(l, !0).some((e) => e.skuId === j), [N, j, l]),
        C = null == I ? void 0 : I.applicationId,
        D = (null == E ? void 0 : E.published) === !0 && (null == I ? void 0 : I.isAvailable()) === !0,
        { app: L } = (0, d.Rt)(C),
        { analyticsLocations: T } = (0, s.ZP)(),
        R = (0, m.Ev)(Z, null != l ? l : void 0),
        F = null == R ? void 0 : R.subscription,
        M = null == R ? void 0 : R.subscriptionPlan,
        U = (0, m.cr)(Z, null != l ? l : void 0),
        G = null == U ? void 0 : U.subscriptionPlan,
        { entitlementsLoaded: B } = (0, m.LM)({ guildId: l });
    null == l && (B = !0);
    let K = (0, p.Z)(),
        H = null != F && (0, v.Jf)(F, I),
        W = r.useMemo(() => {
            if (!B || null == L || null == j) return c.rf.LOADING;
            if (!D) return c.rf.UNAVAILABLE;
            if (!N) {
                if ((null == M ? void 0 : M.skuId) === j) return c.rf.SUBSCRIBED;
                if ((null == G ? void 0 : G.skuId) === j && !1 === H) return c.rf.UPCOMING_PLAN;
            }
            return c.rf.AVAILABLE;
        }, [null == M ? void 0 : M.skuId, D, L, B, H, N, null == G ? void 0 : G.skuId, j]);
    return (
        r.useEffect(() => {
            D &&
                null != j &&
                K &&
                (f.Z.isFetchingForSKU(j) ||
                    f.Z.isLoadedForSKU(j) ||
                    a.Z.wait(() => {
                        (0, u.GZ)(j);
                    }));
        }, [D, j, K]),
        {
            openModal: r.useCallback(() => {
                i()(null != L, 'No application'),
                    i()(null != j, 'No SKU ID'),
                    i()(D, 'Cannot purchase this unpublished plan'),
                    (0, g.H)({
                        subscriptionPlanId: x,
                        sku: I,
                        subscriptionGroupPlanIds: k,
                        initialSubscribeForGuild: l,
                        disableGuildSelector: P,
                        analyticsLocations: T,
                        analyticsLocation: h
                    }).then(() => {
                        null == S || S();
                    });
            }, [L, j, D, x, I, k, l, P, T, h, S]),
            subscriptionPurchaseButtonState: W,
            isGuildSubscribed: _
        }
    );
}
