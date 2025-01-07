e.d(t, {
    Z: function () {
        return Z;
    }
}),
    e(390547),
    e(789020);
var i = e(192379),
    l = e(512722),
    r = e.n(l),
    u = e(442837),
    a = e(570140),
    o = e(821849),
    s = e(906732),
    c = e(887706),
    d = e(680005),
    f = e(728345),
    p = e(509545),
    m = e(55563),
    v = e(551428),
    I = e(270144),
    S = e(488915),
    h = e(171246),
    g = e(929011);
function Z(n) {
    var t, e;
    let { initialSubscribeForGuild: l, analyticsLocation: Z, skuId: A, onComplete: N, disableGuildSelector: b } = n,
        E = (0, u.e7)([m.Z], () => (null != A ? m.Z.get(A) : void 0), [A]),
        P = (0, u.e7)([v.Z], () => (null != A ? v.Z.getForSKU(A) : void 0), [A]),
        C = null === (t = (0, u.Wu)([p.Z], () => (null != A ? p.Z.getForSKU(A) : []), [A])[0]) || void 0 === t ? void 0 : t.id,
        L = (0, u.e7)([m.Z], () => (null != A ? m.Z.getParentSKU(A) : void 0), [A]),
        T = null == L ? void 0 : L.bundledSkuIds,
        x = (0, u.Wu)(
            [p.Z],
            () => {
                var n;
                return null !== (n = null == T ? void 0 : T.flatMap(p.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [T]
        ),
        _ = i.useMemo(() => x.map((n) => n.id), [x]),
        O = (0, h.KK)(null !== (e = null == E ? void 0 : E.flags) && void 0 !== e ? e : 0),
        k = (0, u.e7)([S.Z], () => null != l && !1 !== O && S.Z.getEntitlementsForGuild(l, !0).some((n) => n.skuId === A), [O, A, l]),
        y = null == E ? void 0 : E.applicationId,
        R = (null == P ? void 0 : P.published) === !0 && (null == E ? void 0 : E.isAvailable()) === !0,
        { app: j } = (0, f.Rt)(y),
        { analyticsLocations: D } = (0, s.ZP)(),
        F = (0, I.Ev)(L, null != l ? l : void 0),
        M = null == F ? void 0 : F.subscription,
        U = null == F ? void 0 : F.subscriptionPlan,
        G = (0, I.cr)(L, null != l ? l : void 0),
        w = null == G ? void 0 : G.subscriptionPlan,
        { entitlementsLoaded: B } = (0, I.LM)({ guildId: l });
    null == l && (B = !0);
    let K = (0, c.Z)(),
        H = null != M && (0, h.Jf)(M, E),
        W = i.useMemo(() => {
            if (!B || null == j || null == A) return d.rf.LOADING;
            if (!R) return d.rf.UNAVAILABLE;
            if (!O) {
                if ((null == U ? void 0 : U.skuId) === A) return d.rf.SUBSCRIBED;
                if ((null == w ? void 0 : w.skuId) === A && !1 === H) return d.rf.UPCOMING_PLAN;
            }
            return d.rf.AVAILABLE;
        }, [null == U ? void 0 : U.skuId, R, j, B, H, O, null == w ? void 0 : w.skuId, A]);
    return (
        i.useEffect(() => {
            R &&
                null != A &&
                K &&
                !(p.Z.isFetchingForSKU(A) || p.Z.isLoadedForSKU(A)) &&
                a.Z.wait(() => {
                    (0, o.GZ)(A);
                });
        }, [R, A, K]),
        {
            openModal: i.useCallback(() => {
                r()(null != j, 'No application'),
                    r()(null != A, 'No SKU ID'),
                    r()(R, 'Cannot purchase this unpublished plan'),
                    (0, g.H)({
                        subscriptionPlanId: C,
                        sku: E,
                        subscriptionGroupPlanIds: _,
                        initialSubscribeForGuild: l,
                        disableGuildSelector: b,
                        analyticsLocations: D,
                        analyticsLocation: Z
                    }).then(() => {
                        null == N || N();
                    });
            }, [j, A, R, C, E, _, l, b, D, Z, N]),
            subscriptionPurchaseButtonState: W,
            isGuildSubscribed: k
        }
    );
}
