n.d(t, { Z: () => y }), n(361932), n(187205), n(997841);
var r = n(473749),
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(821849),
    c = n(906732),
    u = n(680005),
    d = n(728345),
    f = n(349167),
    p = n(509545),
    _ = n(55563),
    m = n(551428),
    h = n(270144),
    g = n(488915),
    E = n(171246),
    b = n(929011);
function y(e) {
    var t, n;
    let { initialSubscribeForGuild: i, analyticsLocation: y, skuId: O, onComplete: v, disableGuildSelector: S } = e,
        I = (0, o.e7)([_.Z], () => (null != O ? _.Z.get(O) : void 0), [O]),
        T = (0, o.e7)([m.Z], () => (null != O ? m.Z.getForSKU(O) : void 0), [O]),
        C = null == (t = (0, o.Wu)([p.Z], () => (null != O ? p.Z.getForSKU(O) : []), [O])[0]) ? void 0 : t.id,
        A = (0, o.e7)([_.Z], () => (null != O ? _.Z.getParentSKU(O) : void 0), [O]),
        N = null == A ? void 0 : A.bundledSkuIds,
        P = (0, o.Wu)([p.Z], () => {
            var e;
            return null != (e = null == N ? void 0 : N.flatMap(p.Z.getForSKU)) ? e : [];
        }, [N]),
        R = r.useMemo(() => P.map((e) => e.id), [P]),
        w = (0, E.KK)(null != (n = null == I ? void 0 : I.flags) ? n : 0),
        D = (0, o.e7)(
            [g.Z],
            () => null != i && !1 !== w && g.Z.getEntitlementsForGuild(i, !0).some((e) => e.skuId === O),
            [w, O, i],
        ),
        x = null == I ? void 0 : I.applicationId,
        L = (null == T ? void 0 : T.published) === !0 && (null == I ? void 0 : I.isAvailable()) === !0,
        { app: j } = (0, d.Rt)(x),
        { analyticsLocations: M } = (0, c.ZP)(),
        k = (0, h.Ev)(A, null != i ? i : void 0),
        U = null == k ? void 0 : k.subscription,
        G = null == k ? void 0 : k.subscriptionPlan,
        Z = (0, h.cr)(A, null != i ? i : void 0),
        F = null == Z ? void 0 : Z.subscriptionPlan,
        { entitlementsLoaded: B } = (0, h.LM)({ guildId: i });
    null == i && (B = !0);
    let V = (0, f.Z)(),
        H = null != U && (0, E.Jf)(U, I),
        Y = r.useMemo(() => {
            if (!B || null == j || null == O) return u.rf.LOADING;
            if (!L) return u.rf.UNAVAILABLE;
            if (!w) {
                if ((null == G ? void 0 : G.skuId) === O) return u.rf.SUBSCRIBED;
                if ((null == F ? void 0 : F.skuId) === O && !1 === H) return u.rf.UPCOMING_PLAN;
            }
            return u.rf.AVAILABLE;
        }, [null == G ? void 0 : G.skuId, L, j, B, H, w, null == F ? void 0 : F.skuId, O]);
    return (
        r.useEffect(() => {
            L &&
                null != O &&
                V &&
                (p.Z.isFetchingForSKU(O) ||
                    p.Z.isLoadedForSKU(O) ||
                    s.Z.wait(() => {
                        (0, l.GZ)(O);
                    }));
        }, [L, O, V]),
        {
            openModal: r.useCallback(() => {
                a()(null != j, "No application"),
                    a()(null != O, "No SKU ID"),
                    a()(L, "Cannot purchase this unpublished plan"),
                    (0, b.H)({
                        subscriptionPlanId: C,
                        sku: I,
                        subscriptionGroupPlanIds: R,
                        initialSubscribeForGuild: i,
                        disableGuildSelector: S,
                        analyticsLocations: M,
                        analyticsLocation: y,
                    }).then(() => {
                        null == v || v();
                    });
            }, [j, O, L, C, I, R, i, S, M, y, v]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: D,
        }
    );
}
