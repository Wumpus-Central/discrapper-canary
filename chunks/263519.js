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
    y = n(270144),
    m = n(488915),
    v = n(171246),
    g = n(929011);
function h(e) {
    var t, n;
    let { initialSubscribeForGuild: l, analyticsLocation: h, skuId: j, onComplete: S, disableGuildSelector: P } = e,
        I = (0, o.e7)([b.Z], () => (null != j ? b.Z.get(j) : void 0), [j]),
        E = (0, o.e7)([O.Z], () => (null != j ? O.Z.getForSKU(j) : void 0), [j]),
        Z = null == (t = (0, o.Wu)([f.Z], () => (null != j ? f.Z.getForSKU(j) : []), [j])[0]) ? void 0 : t.id,
        x = (0, o.e7)([b.Z], () => (null != j ? b.Z.getParentSKU(j) : void 0), [j]),
        w = null == x ? void 0 : x.bundledSkuIds,
        k = (0, o.Wu)(
            [f.Z],
            () => {
                var e;
                return null != (e = null == w ? void 0 : w.flatMap(f.Z.getForSKU)) ? e : [];
            },
            [w]
        ),
        A = r.useMemo(() => k.map((e) => e.id), [k]),
        N = (0, v.KK)(null != (n = null == I ? void 0 : I.flags) ? n : 0),
        D = (0, o.e7)([m.Z], () => null != l && !1 !== N && m.Z.getEntitlementsForGuild(l, !0).some((e) => e.skuId === j), [N, j, l]),
        _ = null == I ? void 0 : I.applicationId,
        C = (null == E ? void 0 : E.published) === !0 && (null == I ? void 0 : I.isAvailable()) === !0,
        { app: L } = (0, d.Rt)(_),
        { analyticsLocations: T } = (0, s.ZP)(),
        R = (0, y.Ev)(x, null != l ? l : void 0),
        F = null == R ? void 0 : R.subscription,
        M = null == R ? void 0 : R.subscriptionPlan,
        U = (0, y.cr)(x, null != l ? l : void 0),
        G = null == U ? void 0 : U.subscriptionPlan,
        { entitlementsLoaded: K } = (0, y.LM)({ guildId: l });
    null == l && (K = !0);
    let B = (0, p.Z)(),
        H = null != F && (0, v.Jf)(F, I),
        W = r.useMemo(() => {
            if (!K || null == L || null == j) return c.rf.LOADING;
            if (!C) return c.rf.UNAVAILABLE;
            if (!N) {
                if ((null == M ? void 0 : M.skuId) === j) return c.rf.SUBSCRIBED;
                if ((null == G ? void 0 : G.skuId) === j && !1 === H) return c.rf.UPCOMING_PLAN;
            }
            return c.rf.AVAILABLE;
        }, [null == M ? void 0 : M.skuId, C, L, K, H, N, null == G ? void 0 : G.skuId, j]);
    return (
        r.useEffect(() => {
            C &&
                null != j &&
                B &&
                (f.Z.isFetchingForSKU(j) ||
                    f.Z.isLoadedForSKU(j) ||
                    a.Z.wait(() => {
                        (0, u.GZ)(j);
                    }));
        }, [C, j, B]),
        {
            openModal: r.useCallback(() => {
                i()(null != L, 'No application'),
                    i()(null != j, 'No SKU ID'),
                    i()(C, 'Cannot purchase this unpublished plan'),
                    (0, g.H)({
                        subscriptionPlanId: Z,
                        sku: I,
                        subscriptionGroupPlanIds: A,
                        initialSubscribeForGuild: l,
                        disableGuildSelector: P,
                        analyticsLocations: T,
                        analyticsLocation: h
                    }).then(() => {
                        null == S || S();
                    });
            }, [L, j, C, Z, I, A, l, P, T, h, S]),
            subscriptionPurchaseButtonState: W,
            isGuildSubscribed: D
        }
    );
}
