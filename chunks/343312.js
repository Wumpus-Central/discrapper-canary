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
        D = S.steps[L],
        [G, z] = a.useState(null == I ? void 0 : I.id);
    a.useEffect(() => {
        var e, n, t;
        if (null != G || (null == k ? void 0 : k.entitlementId) == null) return;
        let l =
            null == w || null == (t = w.entitlements) || null == (n = t[k.entitlementId]) || null == (e = n.sku)
                ? void 0
                : e.product_id;
        null != l && z(l);
    }, [null == w ? void 0 : w.entitlements, null == k ? void 0 : k.entitlementId, G]);
    let [F, J] = a.useState(void 0),
        U = a.useMemo(() => {
            var e;
            if (null != G)
                return Object.values(null != (e = null == w ? void 0 : w.catalog) ? e : {}).find((e) => e.id === G);
        }, [null == w ? void 0 : w.catalog, G]),
        [H, K] = a.useState(k),
        [A, R] = a.useState(null != (t = h(I)) ? t : null == k ? void 0 : k.planId),
        X = (function (e, n, t, l) {
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
        })(P, U, A, H),
        M = a.useCallback(
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
                M(void 0), z(null == e ? void 0 : e.id), R(null != n ? n : h(e));
            },
            [M],
        ),
        [q, W] = a.useState(),
        [Q, $] = a.useState(null != (c = null == k ? void 0 : k.name) ? c : ""),
        [V, ee] = a.useState(null != (x = null == k ? void 0 : k.regionId) ? x : ""),
        [en, et] = a.useState(!1),
        el = a.useCallback(() => {
            if ((J(void 0), null == T || null == U || "" === Q || "" === V || null == A)) return;
            let e = () => {
                et(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), p.tq);
                });
                Promise.all([null != H ? (0, g.EY)(T.id, H.entitlementId, A, Q) : (0, g.NE)(T.id, A, Q, V), e])
                    .then(() => {
                        Z(),
                            (null == H ? void 0 : H.planId) !== A &&
                                (0, b.Z)(T.id, U, null == H ? "created" : "updated");
                    })
                    .catch((e) => {
                        var n, t;
                        J(null != (t = null == (n = e.body) ? void 0 : n.message) ? t : e.message);
                    })
                    .finally(() => {
                        et(!1);
                    });
            };
            E < X
                ? (0, s.u)({
                      analyticsLocation: N,
                      numberOfBoostsToAdd: X - E,
                      analyticsLocations: _,
                      guild: T,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          et(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [_, T, E, A, N, U, Q, V, Z, X, H]),
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
            null != D && ea(D.onBack);
        }, [D, ea]),
        er = a.useCallback(() => {
            null != D && ea(D.onNext);
        }, [D, ea]),
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
            stepAction: D,
            stepLoading: en,
            onBack: ei,
            onNext: er,
            gameServerGames: null != (y = null == w ? void 0 : w.catalog) ? y : {},
            instances: Object.values(null != (O = null == w ? void 0 : w.instances) ? O : {}),
            currentGame: U,
            setCurrentGame: Y,
            gameServerInstance: H,
            setGameServerInstance: M,
            name: Q,
            setName: $,
            regionId: V,
            setRegionId: ee,
            planCost: X,
            planId: A,
            setPlanId: R,
            footerNode: q,
            setFooterNode: W,
            availableBoostCount: E,
            error: F,
            gameProvider: es.size > 0 ? Array.from(es)[0] : null,
        },
        children: C,
    });
}
