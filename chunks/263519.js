n.d(t, { Z: () => y }), n(361932), n(187205), n(997841);
var r = n(647438),
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(821849),
    c = n(906732),
    u = n(680005),
    d = n(728345),
    f = n(349167),
    _ = n(509545),
    p = n(55563),
    h = n(551428),
    m = n(270144),
    g = n(488915),
    E = n(171246),
    b = n(929011);
function y(e) {
    var t, n;
    let { initialSubscribeForGuild: i, analyticsLocation: y, skuId: O, onComplete: v, disableGuildSelector: I } = e,
        T = (0, o.e7)([p.Z], () => (null != O ? p.Z.get(O) : void 0), [O]),
        S = (0, o.e7)([h.Z], () => (null != O ? h.Z.getForSKU(O) : void 0), [O]),
        A = null == (t = (0, o.Wu)([_.Z], () => (null != O ? _.Z.getForSKU(O) : []), [O])[0]) ? void 0 : t.id,
        C = (0, o.e7)([p.Z], () => (null != O ? p.Z.getParentSKU(O) : void 0), [O]),
        N = null == C ? void 0 : C.bundledSkuIds,
        R = (0, o.Wu)([_.Z], () => {
            var e;
            return null != (e = null == N ? void 0 : N.flatMap(_.Z.getForSKU)) ? e : [];
        }, [N]),
        P = r.useMemo(() => R.map((e) => e.id), [R]),
        D = (0, E.KK)(null != (n = null == T ? void 0 : T.flags) ? n : 0),
        w = (0, o.e7)(
            [g.Z],
            () => null != i && !1 !== D && g.Z.getEntitlementsForGuild(i, !0).some((e) => e.skuId === O),
            [D, O, i],
        ),
        x = null == T ? void 0 : T.applicationId,
        L = (null == S ? void 0 : S.published) === !0 && (null == T ? void 0 : T.isAvailable()) === !0,
        { app: M } = (0, d.Rt)(x),
        { analyticsLocations: j } = (0, c.ZP)(),
        k = (0, m.Ev)(C, null != i ? i : void 0),
        U = null == k ? void 0 : k.subscription,
        G = null == k ? void 0 : k.subscriptionPlan,
        B = (0, m.cr)(C, null != i ? i : void 0),
        Z = null == B ? void 0 : B.subscriptionPlan,
        { entitlementsLoaded: F } = (0, m.LM)({ guildId: i });
    null == i && (F = !0);
    let V = (0, f.Z)(),
        H = null != U && (0, E.Jf)(U, T),
        Y = r.useMemo(() => {
            if (!F || null == M || null == O) return u.rf.LOADING;
            if (!L) return u.rf.UNAVAILABLE;
            if (!D) {
                if ((null == G ? void 0 : G.skuId) === O) return u.rf.SUBSCRIBED;
                if ((null == Z ? void 0 : Z.skuId) === O && !1 === H) return u.rf.UPCOMING_PLAN;
            }
            return u.rf.AVAILABLE;
        }, [null == G ? void 0 : G.skuId, L, M, F, H, D, null == Z ? void 0 : Z.skuId, O]);
    return (
        r.useEffect(() => {
            L &&
                null != O &&
                V &&
                (_.Z.isFetchingForSKU(O) ||
                    _.Z.isLoadedForSKU(O) ||
                    s.Z.wait(() => {
                        (0, l.GZ)(O);
                    }));
        }, [L, O, V]),
        {
            openModal: r.useCallback(() => {
                a()(null != M, "No application"),
                    a()(null != O, "No SKU ID"),
                    a()(L, "Cannot purchase this unpublished plan"),
                    (0, b.H)({
                        subscriptionPlanId: A,
                        sku: T,
                        subscriptionGroupPlanIds: P,
                        initialSubscribeForGuild: i,
                        disableGuildSelector: I,
                        analyticsLocations: j,
                        analyticsLocation: y,
                    }).then(() => {
                        null == v || v();
                    });
            }, [M, O, L, A, T, P, i, I, j, y, v]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: w,
        }
    );
}
