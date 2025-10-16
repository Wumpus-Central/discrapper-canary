t.d(n, {
    BT: () => y,
    JL: () => x,
}),
    t(388685),
    t(457542);
var l = t(951288),
    a = t(647438),
    i = t(442837),
    r = t(906732),
    s = t(879892),
    o = t(343649),
    u = t(430824),
    c = t(975104),
    d = t(823379),
    m = t(713081),
    v = t(279604),
    g = t(905551),
    f = t(60482),
    b = t(627045),
    p = t(619733);
let [j, x] = (0, c.Z)();
function h(e) {
    var n;
    return null == e || null == (n = e.plans[Math.floor(((null == e ? void 0 : e.plans.length) - 1) / 2)])
        ? void 0
        : n.id;
}
function y(e) {
    var n, t, c, x, y, O;
    let {
        guildId: P,
        initialGameServerInstance: k,
        initialGameServerGame: I,
        stepConfig: S = p.IX,
        children: C,
        onClose: Z,
        analyticsLocation: N,
    } = e;
    a.useEffect(() => {
        (0, g.ce)(P), (0, m.BN)(P, !0), null == k && (0, g.mF)(P);
    }, [P, k]);
    let w = (0, i.e7)([f.Z], () => f.Z.getStateForGuild(P)),
        T = (0, i.e7)([u.Z], () => u.Z.getGuild(P)),
        { analyticsLocations: _ } = (0, r.ZP)(N),
        [L, B] = a.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
        E = (0, v.Td)(P, void 0),
        G = S.steps[L],
        [D, z] = a.useState(null == I ? void 0 : I.id);
    a.useEffect(() => {
        var e, n, t;
        if (null != D || (null == k ? void 0 : k.entitlementId) == null) return;
        let l =
            null == w || null == (t = w.entitlements) || null == (n = t[k.entitlementId]) || null == (e = n.sku)
                ? void 0
                : e.product_id;
        null != l && z(l);
    }, [null == w ? void 0 : w.entitlements, null == k ? void 0 : k.entitlementId, D]);
    let [F, J] = a.useState(void 0),
        H = a.useMemo(() => {
            var e;
            if (null != D)
                return Object.values(null != (e = null == w ? void 0 : w.catalog) ? e : {}).find((e) => e.id === D);
        }, [null == w ? void 0 : w.catalog, D]),
        [A, K] = a.useState(k),
        [M, R] = a.useState(null != (t = h(I)) ? t : null == k ? void 0 : k.planId),
        U = (function (e, n, t, l) {
            var a, r, s, o, u, c, d, m;
            let v = (0, i.e7)([f.Z], () => {
                    var n;
                    return null == (n = f.Z.getStateForGuild(e)) ? void 0 : n.entitlements;
                }),
                g = null != (d = null == n || null == (a = n.plans.find((e) => e.id === t)) ? void 0 : a.cost) ? d : 0;
            return null == l
                ? g
                : g -
                      (null !=
                      (m =
                          null == v ||
                          null == (c = v[l.entitlementId]) ||
                          null == (u = c.sku) ||
                          null == (o = u.tenant_metadata) ||
                          null == (s = o.guild_monetization) ||
                          null == (r = s.game_server)
                              ? void 0
                              : r.boost_price)
                          ? m
                          : 0);
        })(P, H, M, A),
        X = a.useCallback(
            (e) => {
                var n, t, l, a, i, r;
                K(e);
                let s =
                    null == w ||
                    null == (l = w.entitlements) ||
                    null == (t = l[null != (a = null == e ? void 0 : e.entitlementId) ? a : ""]) ||
                    null == (n = t.sku)
                        ? void 0
                        : n.product_id;
                null != s && z(s),
                    R(null == e ? void 0 : e.planId),
                    $(null != (i = null == e ? void 0 : e.name) ? i : ""),
                    ee(null != (r = null == e ? void 0 : e.regionId) ? r : "");
            },
            [null == w ? void 0 : w.entitlements],
        ),
        Y = a.useCallback(
            (e, n) => {
                X(void 0), z(null == e ? void 0 : e.id), R(null != n ? n : h(e));
            },
            [X],
        ),
        [q, Q] = a.useState(),
        [W, $] = a.useState(null != (c = null == k ? void 0 : k.name) ? c : ""),
        [V, ee] = a.useState(null != (x = null == k ? void 0 : k.regionId) ? x : ""),
        [en, et] = a.useState(!1),
        el = a.useCallback(() => {
            if ((J(void 0), null == T || null == H || "" === W || "" === V || null == M)) return;
            let e = () => {
                et(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), p.tq);
                });
                Promise.all([null != A ? (0, g.EY)(T.id, A.entitlementId, M, W) : (0, g.NE)(T.id, M, W, V), e])
                    .then(() => {
                        Z(),
                            (null == A ? void 0 : A.planId) !== M &&
                                (0, b.Z)(T.id, H, null == A ? "created" : "updated");
                    })
                    .catch((e) => {
                        var n, t;
                        J(null != (t = null == (n = e.body) ? void 0 : n.message) ? t : e.message);
                    })
                    .finally(() => {
                        et(!1);
                    });
            };
            E < U
                ? (0, s.u)({
                      analyticsLocation: N,
                      numberOfBoostsToAdd: U - E,
                      analyticsLocations: _,
                      guild: T,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          et(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [_, T, E, M, N, H, W, V, Z, U, A]),
        ea = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        Z();
                        break;
                    case "go-to-step":
                        B(e.step);
                        break;
                    case "save":
                        el();
                }
            },
            [Z, el],
        ),
        ei = a.useCallback(() => {
            null != G && ea(G.onBack);
        }, [G, ea]),
        er = a.useCallback(() => {
            null != G && ea(G.onNext);
        }, [G, ea]),
        es = a.useMemo(() => {
            var e;
            return new Set(
                Object.values(null != (e = null == w ? void 0 : w.catalog) ? e : {})
                    .map((e) => e.provider)
                    .filter(d.lm),
            );
        }, [null == w ? void 0 : w.catalog]);
    return (0, l.jsx)(j.Provider, {
        value: {
            guildId: P,
            step: L,
            stepAction: G,
            stepLoading: en,
            onBack: ei,
            onNext: er,
            gameServerGames: null != (y = null == w ? void 0 : w.catalog) ? y : {},
            instances: Object.values(null != (O = null == w ? void 0 : w.instances) ? O : {}),
            currentGame: H,
            setCurrentGame: Y,
            gameServerInstance: A,
            setGameServerInstance: X,
            name: W,
            setName: $,
            regionId: V,
            setRegionId: ee,
            planCost: U,
            planId: M,
            setPlanId: R,
            footerNode: q,
            setFooterNode: Q,
            availableBoostCount: E,
            error: F,
            gameProvider: es.size > 0 ? Array.from(es)[0] : null,
        },
        children: C,
    });
}
