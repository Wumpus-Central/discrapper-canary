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
    S = e(270144),
    I = e(488915),
    h = e(171246),
    g = e(929011);
function Z(n) {
    var t, e;
    let { initialSubscribeForGuild: l, analyticsLocation: Z, skuId: A, onComplete: b, disableGuildSelector: E } = n,
        N = (0, u.e7)([m.Z], () => (null != A ? m.Z.get(A) : void 0), [A]),
        L = (0, u.e7)([v.Z], () => (null != A ? v.Z.getForSKU(A) : void 0), [A]),
        C = null === (t = (0, u.Wu)([p.Z], () => (null != A ? p.Z.getForSKU(A) : []), [A])[0]) || void 0 === t ? void 0 : t.id,
        P = (0, u.e7)([m.Z], () => (null != A ? m.Z.getParentSKU(A) : void 0), [A]),
        x = null == P ? void 0 : P.bundledSkuIds,
        T = (0, u.Wu)(
            [p.Z],
            () => {
                var n;
                return null !== (n = null == x ? void 0 : x.flatMap(p.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [x]
        ),
        _ = i.useMemo(() => T.map((n) => n.id), [T]),
        O = (0, h.KK)(null !== (e = null == N ? void 0 : N.flags) && void 0 !== e ? e : 0),
        k = (0, u.e7)([I.Z], () => null != l && !1 !== O && I.Z.getEntitlementsForGuild(l, !0).some((n) => n.skuId === A), [O, A, l]),
        y = null == N ? void 0 : N.applicationId,
        j = (null == L ? void 0 : L.published) === !0 && (null == N ? void 0 : N.isAvailable()) === !0,
        { app: D } = (0, f.Rt)(y),
        { analyticsLocations: R } = (0, s.ZP)(),
        F = (0, S.Ev)(P, null != l ? l : void 0),
        G = null == F ? void 0 : F.subscription,
        M = null == F ? void 0 : F.subscriptionPlan,
        U = (0, S.cr)(P, null != l ? l : void 0),
        w = null == U ? void 0 : U.subscriptionPlan,
        { entitlementsLoaded: B } = (0, S.LM)({ guildId: l });
    null == l && (B = !0);
    let K = (0, c.Z)(),
        H = null != G && (0, h.Jf)(G, N),
        W = i.useMemo(() => {
            if (!B || null == D || null == A) return d.rf.LOADING;
            if (!j) return d.rf.UNAVAILABLE;
            if (!O) {
                if ((null == M ? void 0 : M.skuId) === A) return d.rf.SUBSCRIBED;
                if ((null == w ? void 0 : w.skuId) === A && !1 === H) return d.rf.UPCOMING_PLAN;
            }
            return d.rf.AVAILABLE;
        }, [null == M ? void 0 : M.skuId, j, D, B, H, O, null == w ? void 0 : w.skuId, A]);
    return (
        i.useEffect(() => {
            j &&
                null != A &&
                K &&
                !(p.Z.isFetchingForSKU(A) || p.Z.isLoadedForSKU(A)) &&
                a.Z.wait(() => {
                    (0, o.GZ)(A);
                });
        }, [j, A, K]),
        {
            openModal: i.useCallback(() => {
                r()(null != D, 'No application'),
                    r()(null != A, 'No SKU ID'),
                    r()(j, 'Cannot purchase this unpublished plan'),
                    (0, g.H)({
                        subscriptionPlanId: C,
                        sku: N,
                        subscriptionGroupPlanIds: _,
                        initialSubscribeForGuild: l,
                        disableGuildSelector: E,
                        analyticsLocations: R,
                        analyticsLocation: Z
                    }).then(() => {
                        null == b || b();
                    });
            }, [D, A, j, C, N, _, l, E, R, Z, b]),
            subscriptionPurchaseButtonState: W,
            isGuildSubscribed: k
        }
    );
}
