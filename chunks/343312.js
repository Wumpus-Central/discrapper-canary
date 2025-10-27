n.d(t, {
    BT: () => h,
    JL: () => j,
}),
    n(388685),
    n(457542);
var l = n(951288),
    i = n(647438),
    a = n(442837),
    r = n(906732),
    s = n(879892),
    u = n(343649),
    o = n(430824),
    c = n(975104),
    d = n(823379),
    m = n(713081),
    v = n(279604),
    g = n(905551),
    f = n(578756),
    p = n(60482),
    b = n(627045),
    _ = n(619733);
let [x, j] = (0, c.Z)();
function E(e) {
    var t;
    return null == e || null == (t = e.plans[Math.floor(((null == e ? void 0 : e.plans.length) - 1) / 2)])
        ? void 0
        : t.id;
}
function h(e) {
    var t, n, c, j, h, y;
    let {
        guildId: O,
        initialGameServerInstance: S,
        initialGameServerGame: I,
        stepConfig: k = _.IX,
        children: C,
        onClose: P,
        analyticsLocation: N,
    } = e;
    i.useEffect(() => {
        (0, g.ce)(O), (0, m.BN)(O, !0), null == S && (0, g.mF)(O);
    }, [O, S]);
    let Z = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(O)),
        w = (0, a.e7)([o.Z], () => o.Z.getGuild(O)),
        { analyticsLocations: M } = (0, r.ZP)(N),
        [T, G] = i.useState(null != (t = k.initialStep) ? t : Object.keys(k.steps)[0]),
        L = (0, v.Td)(O, void 0),
        R = k.steps[T],
        [A, D] = i.useState(null == I ? void 0 : I.id);
    i.useEffect(() => {
        var e, t, n;
        if (null != A || (null == S ? void 0 : S.entitlementId) == null) return;
        let l =
            null == Z || null == (n = Z.entitlements) || null == (t = n[S.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && D(l);
    }, [null == Z ? void 0 : Z.entitlements, null == S ? void 0 : S.entitlementId, A]);
    let [B, V] = i.useState(void 0),
        z = i.useMemo(() => {
            var e;
            if (null != A)
                return Object.values(null != (e = null == Z ? void 0 : Z.catalog) ? e : {}).find((e) => e.id === A);
        }, [null == Z ? void 0 : Z.catalog, A]),
        [K, U] = i.useState(S),
        [F, J] = i.useState(null != (n = E(I)) ? n : null == S ? void 0 : S.planId),
        H = (function (e, t, n, l) {
            var i, r, s, u, o, c, d, m;
            let v = (0, a.e7)([p.Z], () => {
                    var t;
                    return null == (t = p.Z.getStateForGuild(e)) ? void 0 : t.entitlements;
                }),
                g = null != (d = null == t || null == (i = t.plans.find((e) => e.id === n)) ? void 0 : i.cost) ? d : 0;
            return null == l
                ? g
                : g -
                      (null !=
                      (m =
                          null == v ||
                          null == (c = v[l.entitlementId]) ||
                          null == (o = c.sku) ||
                          null == (u = o.tenant_metadata) ||
                          null == (s = u.guild_monetization) ||
                          null == (r = s.game_server)
                              ? void 0
                              : r.boost_price)
                          ? m
                          : 0);
        })(O, z, F, K),
        X = i.useCallback(
            (e) => {
                var t, n, l, i, a, r;
                U(e);
                let s =
                    null == Z ||
                    null == (l = Z.entitlements) ||
                    null == (n = l[null != (i = null == e ? void 0 : e.entitlementId) ? i : ""]) ||
                    null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != s && D(s),
                    J(null == e ? void 0 : e.planId),
                    Q(null != (a = null == e ? void 0 : e.name) ? a : ""),
                    et(null != (r = null == e ? void 0 : e.regionId) ? r : "");
            },
            [null == Z ? void 0 : Z.entitlements],
        ),
        Y = i.useCallback(
            (e, t) => {
                X(void 0), D(null == e ? void 0 : e.id), J(null != t ? t : E(e));
            },
            [X],
        ),
        [q, W] = i.useState(),
        [$, Q] = i.useState(null != (c = null == S ? void 0 : S.name) ? c : ""),
        [ee, et] = i.useState(null != (j = null == S ? void 0 : S.regionId) ? j : ""),
        [en, el] = i.useState(!1),
        ei = i.useCallback(() => {
            var e, t, n;
            if ((V(void 0), null == w || null == z || "" === $ || "" === ee || null == F)) return;
            let l = z.plans.find((e) => e.id === F);
            (0, f.g$)({
                guildId: w.id,
                productId: z.id,
                productName: z.name,
                skuId: F,
                planName: null != (e = null == l ? void 0 : l.name) ? e : "",
                planCost: null != (t = null == l ? void 0 : l.cost) ? t : 0,
                previousPlanCost: null == K ? 0 : (null != (n = null == l ? void 0 : l.cost) ? n : 0) + H,
                region: ee,
                type: null == K ? "create" : "edit",
            });
            let i = () => {
                el(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), _.tq);
                });
                Promise.all([null != K ? (0, g.EY)(w.id, K.entitlementId, F, $) : (0, g.NE)(w.id, F, $, ee), e])
                    .then(() => {
                        P(),
                            (null == K ? void 0 : K.planId) !== F &&
                                (0, b.Z)(w.id, z, null == K ? "created" : "updated");
                    })
                    .catch((e) => {
                        var t, n;
                        V(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                    })
                    .finally(() => {
                        el(!1);
                    });
            };
            L < H
                ? (0, s.u)({
                      analyticsLocation: N,
                      numberOfBoostsToAdd: H - L,
                      analyticsLocations: M,
                      guild: w,
                      intent: u.P.PERK,
                      onLoading: (e) => {
                          el(e);
                      },
                      onSubscribeComplete: i,
                  })
                : i();
        }, [M, w, L, F, N, z, $, ee, P, H, K]),
        ea = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        P();
                        break;
                    case "go-to-step":
                        G(e.step);
                        break;
                    case "save":
                        ei();
                }
            },
            [P, ei],
        ),
        er = i.useCallback(() => {
            null != R && ea(R.onBack);
        }, [R, ea]),
        es = i.useCallback(() => {
            null != R && ea(R.onNext);
        }, [R, ea]),
        eu = i.useMemo(() => {
            var e;
            return new Set(
                Object.values(null != (e = null == Z ? void 0 : Z.catalog) ? e : {})
                    .map((e) => e.provider)
                    .filter(d.lm),
            );
        }, [null == Z ? void 0 : Z.catalog]);
    return (0, l.jsx)(x.Provider, {
        value: {
            guildId: O,
            step: T,
            stepAction: R,
            stepLoading: en,
            onBack: er,
            onNext: es,
            gameServerGames: null != (h = null == Z ? void 0 : Z.catalog) ? h : {},
            instances: Object.values(null != (y = null == Z ? void 0 : Z.instances) ? y : {}),
            currentGame: z,
            setCurrentGame: Y,
            gameServerInstance: K,
            setGameServerInstance: X,
            name: $,
            setName: Q,
            regionId: ee,
            setRegionId: et,
            planCost: H,
            planId: F,
            setPlanId: J,
            footerNode: q,
            setFooterNode: W,
            availableBoostCount: L,
            error: B,
            gameProvider: eu.size > 0 ? Array.from(eu)[0] : null,
        },
        children: C,
    });
}
