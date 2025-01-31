e.d(t, { Z: () => g }), e(390547), e(789020);
var l = e(192379),
    i = e(512722),
    a = e.n(i),
    r = e(442837),
    s = e(570140),
    u = e(821849),
    o = e(906732),
    d = e(887706),
    c = e(680005),
    p = e(728345),
    f = e(509545),
    v = e(55563),
    m = e(551428),
    I = e(270144),
    h = e(488915),
    S = e(171246),
    Z = e(929011);
function g(n) {
    var t, e;
    let { initialSubscribeForGuild: i, analyticsLocation: g, skuId: E, onComplete: A, disableGuildSelector: b } = n,
        x = (0, r.e7)([v.Z], () => (null != E ? v.Z.get(E) : void 0), [E]),
        N = (0, r.e7)([m.Z], () => (null != E ? m.Z.getForSKU(E) : void 0), [E]),
        L = null === (t = (0, r.Wu)([f.Z], () => (null != E ? f.Z.getForSKU(E) : []), [E])[0]) || void 0 === t ? void 0 : t.id,
        P = (0, r.e7)([v.Z], () => (null != E ? v.Z.getParentSKU(E) : void 0), [E]),
        C = null == P ? void 0 : P.bundledSkuIds,
        T = (0, r.Wu)(
            [f.Z],
            () => {
                var n;
                return null !== (n = null == C ? void 0 : C.flatMap(f.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [C]
        ),
        k = l.useMemo(() => T.map((n) => n.id), [T]),
        _ = (0, S.KK)(null !== (e = null == x ? void 0 : x.flags) && void 0 !== e ? e : 0),
        O = (0, r.e7)([h.Z], () => null != i && !1 !== _ && h.Z.getEntitlementsForGuild(i, !0).some((n) => n.skuId === E), [_, E, i]),
        j = null == x ? void 0 : x.applicationId,
        y = (null == N ? void 0 : N.published) === !0 && (null == x ? void 0 : x.isAvailable()) === !0,
        { app: R } = (0, p.Rt)(j),
        { analyticsLocations: F } = (0, o.ZP)(),
        D = (0, I.Ev)(P, null != i ? i : void 0),
        U = null == D ? void 0 : D.subscription,
        G = null == D ? void 0 : D.subscriptionPlan,
        M = (0, I.cr)(P, null != i ? i : void 0),
        w = null == M ? void 0 : M.subscriptionPlan,
        { entitlementsLoaded: K } = (0, I.LM)({ guildId: i });
    null == i && (K = !0);
    let B = (0, d.Z)(),
        W = null != U && (0, S.Jf)(U, x),
        Y = l.useMemo(() => {
            if (!K || null == R || null == E) return c.rf.LOADING;
            if (!y) return c.rf.UNAVAILABLE;
            if (!_) {
                if ((null == G ? void 0 : G.skuId) === E) return c.rf.SUBSCRIBED;
                if ((null == w ? void 0 : w.skuId) === E && !1 === W) return c.rf.UPCOMING_PLAN;
            }
            return c.rf.AVAILABLE;
        }, [null == G ? void 0 : G.skuId, y, R, K, W, _, null == w ? void 0 : w.skuId, E]);
    return (
        l.useEffect(() => {
            y &&
                null != E &&
                B &&
                !(f.Z.isFetchingForSKU(E) || f.Z.isLoadedForSKU(E)) &&
                s.Z.wait(() => {
                    (0, u.GZ)(E);
                });
        }, [y, E, B]),
        {
            openModal: l.useCallback(() => {
                a()(null != R, 'No application'),
                    a()(null != E, 'No SKU ID'),
                    a()(y, 'Cannot purchase this unpublished plan'),
                    (0, Z.H)({
                        subscriptionPlanId: L,
                        sku: x,
                        subscriptionGroupPlanIds: k,
                        initialSubscribeForGuild: i,
                        disableGuildSelector: b,
                        analyticsLocations: F,
                        analyticsLocation: g
                    }).then(() => {
                        null == A || A();
                    });
            }, [R, E, y, L, x, k, i, b, F, g, A]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: O
        }
    );
}
