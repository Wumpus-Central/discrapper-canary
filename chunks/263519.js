(n.d(e, { Z: () => P }), n(361932), n(187205), n(997841));
var i = n(73800),
    r = n(512722),
    l = n.n(r),
    o = n(442837),
    a = n(570140),
    s = n(821849),
    u = n(906732),
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
function P(t) {
    var e, n;
    let { initialSubscribeForGuild: r, analyticsLocation: P, skuId: y, onComplete: m, disableGuildSelector: v } = t,
        E = (0, o.e7)([S.Z], () => (null != y ? S.Z.get(y) : void 0), [y]),
        h = (0, o.e7)([O.Z], () => (null != y ? O.Z.getForSKU(y) : void 0), [y]),
        T = null == (e = (0, o.Wu)([f.Z], () => (null != y ? f.Z.getForSKU(y) : []), [y])[0]) ? void 0 : e.id,
        C = (0, o.e7)([S.Z], () => (null != y ? S.Z.getParentSKU(y) : void 0), [y]),
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
        L = (0, g.KK)(null != (n = null == E ? void 0 : E.flags) ? n : 0),
        Z = (0, o.e7)([b.Z], () => null != r && !1 !== L && b.Z.getEntitlementsForGuild(r, !0).some((t) => t.skuId === y), [L, y, r]),
        F = null == E ? void 0 : E.applicationId,
        w = (null == h ? void 0 : h.published) === !0 && (null == E ? void 0 : E.isAvailable()) === !0,
        { app: x } = (0, d.Rt)(F),
        { analyticsLocations: R } = (0, u.ZP)(),
        k = (0, I.Ev)(C, null != r ? r : void 0),
        U = null == k ? void 0 : k.subscription,
        D = null == k ? void 0 : k.subscriptionPlan,
        G = (0, I.cr)(C, null != r ? r : void 0),
        B = null == G ? void 0 : G.subscriptionPlan,
        { entitlementsLoaded: M } = (0, I.LM)({ guildId: r });
    null == r && (M = !0);
    let H = (0, p.Z)(),
        K = null != U && (0, g.Jf)(U, E),
        Y = i.useMemo(() => {
            if (!M || null == x || null == y) return c.rf.LOADING;
            if (!w) return c.rf.UNAVAILABLE;
            if (!L) {
                if ((null == D ? void 0 : D.skuId) === y) return c.rf.SUBSCRIBED;
                if ((null == B ? void 0 : B.skuId) === y && !1 === K) return c.rf.UPCOMING_PLAN;
            }
            return c.rf.AVAILABLE;
        }, [null == D ? void 0 : D.skuId, w, x, M, K, L, null == B ? void 0 : B.skuId, y]);
    return (
        i.useEffect(() => {
            w &&
                null != y &&
                H &&
                (f.Z.isFetchingForSKU(y) ||
                    f.Z.isLoadedForSKU(y) ||
                    a.Z.wait(() => {
                        (0, s.GZ)(y);
                    }));
        }, [w, y, H]),
        {
            openModal: i.useCallback(() => {
                (l()(null != x, 'No application'),
                    l()(null != y, 'No SKU ID'),
                    l()(w, 'Cannot purchase this unpublished plan'),
                    (0, _.H)({
                        subscriptionPlanId: T,
                        sku: E,
                        subscriptionGroupPlanIds: A,
                        initialSubscribeForGuild: r,
                        disableGuildSelector: v,
                        analyticsLocations: R,
                        analyticsLocation: P
                    }).then(() => {
                        null == m || m();
                    }));
            }, [x, y, w, T, E, A, r, v, R, P, m]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: Z
        }
    );
}
