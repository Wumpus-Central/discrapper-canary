(n.d(t, { Z: () => y }), n(361932), n(187205), n(997841));
var r = n(73800),
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
        N = (0, o.e7)([p.Z], () => (null != O ? p.Z.getParentSKU(O) : void 0), [O]),
        C = null == N ? void 0 : N.bundledSkuIds,
        w = (0, o.Wu)(
            [_.Z],
            () => {
                var e;
                return null != (e = null == C ? void 0 : C.flatMap(_.Z.getForSKU)) ? e : [];
            },
            [C]
        ),
        R = r.useMemo(() => w.map((e) => e.id), [w]),
        P = (0, E.KK)(null != (n = null == T ? void 0 : T.flags) ? n : 0),
        D = (0, o.e7)([g.Z], () => null != i && !1 !== P && g.Z.getEntitlementsForGuild(i, !0).some((e) => e.skuId === O), [P, O, i]),
        L = null == T ? void 0 : T.applicationId,
        x = (null == S ? void 0 : S.published) === !0 && (null == T ? void 0 : T.isAvailable()) === !0,
        { app: k } = (0, d.Rt)(L),
        { analyticsLocations: j } = (0, c.ZP)(),
        M = (0, m.Ev)(N, null != i ? i : void 0),
        U = null == M ? void 0 : M.subscription,
        G = null == M ? void 0 : M.subscriptionPlan,
        B = (0, m.cr)(N, null != i ? i : void 0),
        Z = null == B ? void 0 : B.subscriptionPlan,
        { entitlementsLoaded: F } = (0, m.LM)({ guildId: i });
    null == i && (F = !0);
    let V = (0, f.Z)(),
        H = null != U && (0, E.Jf)(U, T),
        Y = r.useMemo(() => {
            if (!F || null == k || null == O) return u.rf.LOADING;
            if (!x) return u.rf.UNAVAILABLE;
            if (!P) {
                if ((null == G ? void 0 : G.skuId) === O) return u.rf.SUBSCRIBED;
                if ((null == Z ? void 0 : Z.skuId) === O && !1 === H) return u.rf.UPCOMING_PLAN;
            }
            return u.rf.AVAILABLE;
        }, [null == G ? void 0 : G.skuId, x, k, F, H, P, null == Z ? void 0 : Z.skuId, O]);
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
                (a()(null != k, 'No application'),
                    a()(null != O, 'No SKU ID'),
                    a()(x, 'Cannot purchase this unpublished plan'),
                    (0, b.H)({
                        subscriptionPlanId: A,
                        sku: T,
                        subscriptionGroupPlanIds: R,
                        initialSubscribeForGuild: i,
                        disableGuildSelector: I,
                        analyticsLocations: j,
                        analyticsLocation: y
                    }).then(() => {
                        null == v || v();
                    }));
            }, [k, O, x, A, T, R, i, I, j, y, v]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: D
        }
    );
}
