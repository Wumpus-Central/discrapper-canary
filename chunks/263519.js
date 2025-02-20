n.d(t, { Z: () => h }), n(13667), n(390547), n(789020);
var i = n(192379),
    l = n(512722),
    r = n.n(l),
    o = n(442837),
    a = n(570140),
    u = n(821849),
    s = n(906732),
    c = n(887706),
    d = n(680005),
    p = n(728345),
    f = n(509545),
    b = n(55563),
    v = n(551428),
    O = n(270144),
    m = n(488915),
    y = n(171246),
    g = n(929011);
function h(e) {
    var t, n;
    let { initialSubscribeForGuild: l, analyticsLocation: h, skuId: S, onComplete: I, disableGuildSelector: j } = e,
        P = (0, o.e7)([b.Z], () => (null != S ? b.Z.get(S) : void 0), [S]),
        E = (0, o.e7)([v.Z], () => (null != S ? v.Z.getForSKU(S) : void 0), [S]),
        Z = null === (t = (0, o.Wu)([f.Z], () => (null != S ? f.Z.getForSKU(S) : []), [S])[0]) || void 0 === t ? void 0 : t.id,
        N = (0, o.e7)([b.Z], () => (null != S ? b.Z.getParentSKU(S) : void 0), [S]),
        x = null == N ? void 0 : N.bundledSkuIds,
        A = (0, o.Wu)(
            [f.Z],
            () => {
                var e;
                return null !== (e = null == x ? void 0 : x.flatMap(f.Z.getForSKU)) && void 0 !== e ? e : [];
            },
            [x]
        ),
        w = i.useMemo(() => A.map((e) => e.id), [A]),
        k = (0, y.KK)(null !== (n = null == P ? void 0 : P.flags) && void 0 !== n ? n : 0),
        C = (0, o.e7)([m.Z], () => null != l && !1 !== k && m.Z.getEntitlementsForGuild(l, !0).some((e) => e.skuId === S), [k, S, l]),
        L = null == P ? void 0 : P.applicationId,
        T = (null == E ? void 0 : E.published) === !0 && (null == P ? void 0 : P.isAvailable()) === !0,
        { app: D } = (0, p.Rt)(L),
        { analyticsLocations: _ } = (0, s.ZP)(),
        R = (0, O.Ev)(N, null != l ? l : void 0),
        F = null == R ? void 0 : R.subscription,
        U = null == R ? void 0 : R.subscriptionPlan,
        G = (0, O.cr)(N, null != l ? l : void 0),
        M = null == G ? void 0 : G.subscriptionPlan,
        { entitlementsLoaded: K } = (0, O.LM)({ guildId: l });
    null == l && (K = !0);
    let B = (0, c.Z)(),
        W = null != F && (0, y.Jf)(F, P),
        Y = i.useMemo(() => {
            if (!K || null == D || null == S) return d.rf.LOADING;
            if (!T) return d.rf.UNAVAILABLE;
            if (!k) {
                if ((null == U ? void 0 : U.skuId) === S) return d.rf.SUBSCRIBED;
                if ((null == M ? void 0 : M.skuId) === S && !1 === W) return d.rf.UPCOMING_PLAN;
            }
            return d.rf.AVAILABLE;
        }, [null == U ? void 0 : U.skuId, T, D, K, W, k, null == M ? void 0 : M.skuId, S]);
    return (
        i.useEffect(() => {
            T &&
                null != S &&
                B &&
                !(f.Z.isFetchingForSKU(S) || f.Z.isLoadedForSKU(S)) &&
                a.Z.wait(() => {
                    (0, u.GZ)(S);
                });
        }, [T, S, B]),
        {
            openModal: i.useCallback(() => {
                r()(null != D, 'No application'),
                    r()(null != S, 'No SKU ID'),
                    r()(T, 'Cannot purchase this unpublished plan'),
                    (0, g.H)({
                        subscriptionPlanId: Z,
                        sku: P,
                        subscriptionGroupPlanIds: w,
                        initialSubscribeForGuild: l,
                        disableGuildSelector: j,
                        analyticsLocations: _,
                        analyticsLocation: h
                    }).then(() => {
                        null == I || I();
                    });
            }, [D, S, T, Z, P, w, l, j, _, h, I]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: C
        }
    );
}
