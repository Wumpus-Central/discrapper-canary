n.d(t, {
    BT: () => y,
    JL: () => x,
}),
    n(388685),
    n(457542);
var l = n(951288),
    a = n(647438),
    i = n(442837),
    r = n(906732),
    s = n(879892),
    o = n(343649),
    c = n(430824),
    u = n(975104),
    d = n(823379),
    m = n(713081),
    v = n(279604),
    g = n(905551),
    f = n(60482),
    b = n(627045),
    p = n(619733);
let [j, x] = (0, u.Z)();
function y(e) {
    var t, n, u, x, y, O, h;
    let {
        guildId: P,
        initialGameServerInstance: k,
        initialGameServerGame: S,
        stepConfig: I = p.IX,
        children: w,
        onClose: C,
        analyticsLocation: N,
    } = e;
    a.useEffect(() => {
        (0, g.ce)(P), (0, m.BN)(P, !0), null == k && (0, g.mF)(P);
    }, [P, k]);
    let Z = (0, i.e7)([f.Z], () => f.Z.getStateForGuild(P)),
        _ = (0, i.e7)([c.Z], () => c.Z.getGuild(P)),
        { analyticsLocations: T } = (0, r.ZP)(N),
        [E, L] = a.useState(null != (n = I.initialStep) ? n : Object.keys(I.steps)[0]),
        D = (0, v.Td)(P, void 0),
        G = I.steps[E],
        [z, B] = a.useState(null == S ? void 0 : S.id);
    a.useEffect(() => {
        var e, t, n;
        if (null != z || (null == k ? void 0 : k.entitlementId) == null) return;
        let l =
            null == Z || null == (n = Z.entitlements) || null == (t = n[k.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && B(l);
    }, [null == Z ? void 0 : Z.entitlements, null == k ? void 0 : k.entitlementId, z]);
    let [F, J] = a.useState(void 0),
        X = a.useMemo(() => {
            var e;
            if (null != z)
                return Object.values(null != (e = null == Z ? void 0 : Z.catalog) ? e : {}).find((e) => e.id === z);
        }, [null == Z ? void 0 : Z.catalog, z]),
        [q, A] = a.useState(k),
        [K, R] = a.useState(
            null != (u = null == S || null == (t = S.plans[0]) ? void 0 : t.id) ? u : null == k ? void 0 : k.planId,
        ),
        U = (function (e, t, n, l) {
            var a, r, s, o, c, u, d, m;
            let v = (0, i.e7)([f.Z], () => {
                    var t;
                    return null == (t = f.Z.getStateForGuild(e)) ? void 0 : t.entitlements;
                }),
                g = null != (d = null == t || null == (a = t.plans.find((e) => e.id === n)) ? void 0 : a.cost) ? d : 0;
            return null == l
                ? g
                : g -
                      (null !=
                      (m =
                          null == v ||
                          null == (u = v[l.entitlementId]) ||
                          null == (c = u.sku) ||
                          null == (o = c.tenant_metadata) ||
                          null == (s = o.guild_monetization) ||
                          null == (r = s.game_server)
                              ? void 0
                              : r.boost_price)
                          ? m
                          : 0);
        })(P, X, K, q),
        Y = a.useCallback((e, t) => {
            var n;
            B(null == e ? void 0 : e.id), R(null != t ? t : null == e || null == (n = e.plans[0]) ? void 0 : n.id);
        }, []),
        M = a.useCallback(
            (e) => {
                var t, n, l;
                A(e);
                let a =
                    null == Z || null == (l = Z.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != a && B(a), R(e.planId), Q(e.name), ee(e.regionId);
            },
            [null == Z ? void 0 : Z.entitlements],
        ),
        [H, W] = a.useState(),
        [$, Q] = a.useState(null != (x = null == k ? void 0 : k.name) ? x : ""),
        [V, ee] = a.useState(null != (y = null == k ? void 0 : k.regionId) ? y : ""),
        [et, en] = a.useState(!1),
        el = a.useCallback(() => {
            if ((J(void 0), null == _ || null == X || "" === $ || "" === V || null == K)) return;
            let e = () => {
                en(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), p.tq);
                });
                Promise.all([null != q ? (0, g.EY)(_.id, q.entitlementId, K, $) : (0, g.NE)(_.id, K, $, V), e])
                    .then(() => {
                        C(),
                            (null == q ? void 0 : q.planId) !== K &&
                                (0, b.Z)(_.id, X, null == q ? "created" : "updated");
                    })
                    .catch((e) => {
                        var t, n;
                        J(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                    })
                    .finally(() => {
                        en(!1);
                    });
            };
            D < U
                ? (0, s.u)({
                      analyticsLocation: N,
                      numberOfBoostsToAdd: U - D,
                      analyticsLocations: T,
                      guild: _,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          en(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [T, _, D, K, N, X, $, V, C, U, q]),
        ea = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        C();
                        break;
                    case "go-to-step":
                        L(e.step);
                        break;
                    case "save":
                        el();
                }
            },
            [C, el],
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
                Object.values(null != (e = null == Z ? void 0 : Z.catalog) ? e : {})
                    .map((e) => e.provider)
                    .filter(d.lm),
            );
        }, [null == Z ? void 0 : Z.catalog]);
    return (0, l.jsx)(j.Provider, {
        value: {
            guildId: P,
            step: E,
            stepAction: G,
            stepLoading: et,
            onBack: ei,
            onNext: er,
            gameServerGames: null != (O = null == Z ? void 0 : Z.catalog) ? O : {},
            instances: Object.values(null != (h = null == Z ? void 0 : Z.instances) ? h : {}),
            currentGame: X,
            setCurrentGame: Y,
            gameServerInstance: q,
            setGameServerInstance: M,
            name: $,
            setName: Q,
            regionId: V,
            setRegionId: ee,
            planCost: U,
            planId: K,
            setPlanId: R,
            footerNode: H,
            setFooterNode: W,
            availableBoostCount: D,
            error: F,
            gameProvider: es.size > 0 ? Array.from(es)[0] : null,
        },
        children: w,
    });
}
