(n.d(e, { Z: () => y }), n(361932), n(187205), n(997841));
var i = n(73800),
    r = n(512722),
    l = n.n(r),
    o = n(442837),
    a = n(570140),
    u = n(821849),
    s = n(906732),
    c = n(680005),
    d = n(728345),
    p = n(349167),
    f = n(509545),
    S = n(55563),
    O = n(551428),
    I = n(270144),
    b = n(488915),
    g = n(171246),
    _ = n(929011);
function y(t) {
    var e, n;
    let { initialSubscribeForGuild: r, analyticsLocation: y, skuId: P, onComplete: v, disableGuildSelector: E } = t,
        m = (0, o.e7)([S.Z], () => (null != P ? S.Z.get(P) : void 0), [P]),
        T = (0, o.e7)([O.Z], () => (null != P ? O.Z.getForSKU(P) : void 0), [P]),
        h = null == (e = (0, o.Wu)([f.Z], () => (null != P ? f.Z.getForSKU(P) : []), [P])[0]) ? void 0 : e.id,
        C = (0, o.e7)([S.Z], () => (null != P ? S.Z.getParentSKU(P) : void 0), [P]),
        N = null == C ? void 0 : C.bundledSkuIds,
        j = (0, o.Wu)(
            [f.Z],
            () => {
                var t;
                return null != (t = null == N ? void 0 : N.flatMap(f.Z.getForSKU)) ? t : [];
            },
            [N]
        ),
        A = i.useMemo(() => j.map((t) => t.id), [j]),
        L = (0, g.KK)(null != (n = null == m ? void 0 : m.flags) ? n : 0),
        Z = (0, o.e7)([b.Z], () => null != r && !1 !== L && b.Z.getEntitlementsForGuild(r, !0).some((t) => t.skuId === P), [L, P, r]),
        F = null == m ? void 0 : m.applicationId,
        w = (null == T ? void 0 : T.published) === !0 && (null == m ? void 0 : m.isAvailable()) === !0,
        { app: x } = (0, d.Rt)(F),
        { analyticsLocations: R } = (0, s.ZP)(),
        U = (0, I.Ev)(C, null != r ? r : void 0),
        k = null == U ? void 0 : U.subscription,
        D = null == U ? void 0 : U.subscriptionPlan,
        G = (0, I.cr)(C, null != r ? r : void 0),
        B = null == G ? void 0 : G.subscriptionPlan,
        { entitlementsLoaded: M } = (0, I.LM)({ guildId: r });
    null == r && (M = !0);
    let H = (0, p.Z)(),
        K = null != k && (0, g.Jf)(k, m),
        V = i.useMemo(() => {
            if (!M || null == x || null == P) return c.rf.LOADING;
            if (!w) return c.rf.UNAVAILABLE;
            if (!L) {
                if ((null == D ? void 0 : D.skuId) === P) return c.rf.SUBSCRIBED;
                if ((null == B ? void 0 : B.skuId) === P && !1 === K) return c.rf.UPCOMING_PLAN;
            }
            return c.rf.AVAILABLE;
        }, [null == D ? void 0 : D.skuId, w, x, M, K, L, null == B ? void 0 : B.skuId, P]);
    return (
        i.useEffect(() => {
            w &&
                null != P &&
                H &&
                (f.Z.isFetchingForSKU(P) ||
                    f.Z.isLoadedForSKU(P) ||
                    a.Z.wait(() => {
                        (0, u.GZ)(P);
                    }));
        }, [w, P, H]),
        {
            openModal: i.useCallback(() => {
                (l()(null != x, 'No application'),
                    l()(null != P, 'No SKU ID'),
                    l()(w, 'Cannot purchase this unpublished plan'),
                    (0, _.H)({
                        subscriptionPlanId: h,
                        sku: m,
                        subscriptionGroupPlanIds: A,
                        initialSubscribeForGuild: r,
                        disableGuildSelector: E,
                        analyticsLocations: R,
                        analyticsLocation: y
                    }).then(() => {
                        null == v || v();
                    }));
            }, [x, P, w, h, m, A, r, E, R, y, v]),
            subscriptionPurchaseButtonState: V,
            isGuildSubscribed: Z
        }
    );
}
