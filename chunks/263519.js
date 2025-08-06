(n.d(t, { Z: () => y }), n(361932), n(187205), n(997841));
var r = n(73800),
    i = n(512722),
    o = n.n(i),
    a = n(442837),
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
        T = (0, a.e7)([p.Z], () => (null != O ? p.Z.get(O) : void 0), [O]),
        S = (0, a.e7)([h.Z], () => (null != O ? h.Z.getForSKU(O) : void 0), [O]),
        A = null == (t = (0, a.Wu)([_.Z], () => (null != O ? _.Z.getForSKU(O) : []), [O])[0]) ? void 0 : t.id,
        N = (0, a.e7)([p.Z], () => (null != O ? p.Z.getParentSKU(O) : void 0), [O]),
        C = null == N ? void 0 : N.bundledSkuIds,
        R = (0, a.Wu)(
            [_.Z],
            () => {
                var e;
                return null != (e = null == C ? void 0 : C.flatMap(_.Z.getForSKU)) ? e : [];
            },
            [C]
        ),
        P = r.useMemo(() => R.map((e) => e.id), [R]),
        w = (0, E.KK)(null != (n = null == T ? void 0 : T.flags) ? n : 0),
        D = (0, a.e7)([g.Z], () => null != i && !1 !== w && g.Z.getEntitlementsForGuild(i, !0).some((e) => e.skuId === O), [w, O, i]),
        L = null == T ? void 0 : T.applicationId,
        x = (null == S ? void 0 : S.published) === !0 && (null == T ? void 0 : T.isAvailable()) === !0,
        { app: M } = (0, d.Rt)(L),
        { analyticsLocations: k } = (0, c.ZP)(),
        j = (0, m.Ev)(N, null != i ? i : void 0),
        U = null == j ? void 0 : j.subscription,
        G = null == j ? void 0 : j.subscriptionPlan,
        B = (0, m.cr)(N, null != i ? i : void 0),
        Z = null == B ? void 0 : B.subscriptionPlan,
        { entitlementsLoaded: F } = (0, m.LM)({ guildId: i });
    null == i && (F = !0);
    let V = (0, f.Z)(),
        H = null != U && (0, E.Jf)(U, T),
        Y = r.useMemo(() => {
            if (!F || null == M || null == O) return u.rf.LOADING;
            if (!x) return u.rf.UNAVAILABLE;
            if (!w) {
                if ((null == G ? void 0 : G.skuId) === O) return u.rf.SUBSCRIBED;
                if ((null == Z ? void 0 : Z.skuId) === O && !1 === H) return u.rf.UPCOMING_PLAN;
            }
            return u.rf.AVAILABLE;
        }, [null == G ? void 0 : G.skuId, x, M, F, H, w, null == Z ? void 0 : Z.skuId, O]);
    return (
        r.useEffect(() => {
            x &&
                null != O &&
                V &&
                (_.Z.isFetchingForSKU(O) ||
                    _.Z.isLoadedForSKU(O) ||
                    s.Z.wait(() => {
                        (0, l.GZ)(O);
                    }));
        }, [x, O, V]),
        {
            openModal: r.useCallback(() => {
                (o()(null != M, 'No application'),
                    o()(null != O, 'No SKU ID'),
                    o()(x, 'Cannot purchase this unpublished plan'),
                    (0, b.H)({
                        subscriptionPlanId: A,
                        sku: T,
                        subscriptionGroupPlanIds: P,
                        initialSubscribeForGuild: i,
                        disableGuildSelector: I,
                        analyticsLocations: k,
                        analyticsLocation: y
                    }).then(() => {
                        null == v || v();
                    }));
            }, [M, O, x, A, T, P, i, I, k, y, v]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: D
        }
    );
}
