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
    u = n(430824),
    c = n(975104),
    d = n(823379),
    m = n(713081),
    v = n(279604),
    g = n(905551),
    f = n(60482),
    b = n(627045),
    p = n(619733);
let [j, x] = (0, c.Z)();
function y(e) {
    var t, n, c, x, y, O, h;
    let {
        guildId: P,
        initialGameServerInstance: S,
        initialGameServerGame: k,
        stepConfig: I = p.IX,
        children: w,
        onClose: C,
        analyticsLocation: N,
    } = e;
    a.useEffect(() => {
        (0, g.ce)(P), (0, m.BN)(P, !0), null == S && (0, g.mF)(P);
    }, [P, S]);
    let Z = (0, i.e7)([f.Z], () => f.Z.getStateForGuild(P)),
        _ = (0, i.e7)([u.Z], () => u.Z.getGuild(P)),
        { analyticsLocations: T } = (0, r.ZP)(N),
        [L, E] = a.useState(null != (n = I.initialStep) ? n : Object.keys(I.steps)[0]),
        B = (0, v.Td)(P, void 0),
        D = I.steps[L],
        [G, F] = a.useState(null == k ? void 0 : k.id);
    a.useEffect(() => {
        var e, t, n;
        if (null != G || (null == S ? void 0 : S.entitlementId) == null) return;
        let l =
            null == Z || null == (n = Z.entitlements) || null == (t = n[S.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && F(l);
    }, [null == Z ? void 0 : Z.entitlements, null == S ? void 0 : S.entitlementId, G]);
    let [J, z] = a.useState(void 0),
        H = a.useMemo(() => {
            var e;
            if (null != G)
                return Object.values(null != (e = null == Z ? void 0 : Z.catalog) ? e : {}).find((e) => e.id === G);
        }, [null == Z ? void 0 : Z.catalog, G]),
        [A, K] = a.useState(S),
        [R, M] = a.useState(
            null != (c = null == k || null == (t = k.plans[0]) ? void 0 : t.id) ? c : null == S ? void 0 : S.planId,
        ),
        U = (function (e, t, n, l) {
            var a, r, s, o, u, c, d, m;
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
                          null == (c = v[l.entitlementId]) ||
                          null == (u = c.sku) ||
                          null == (o = u.tenant_metadata) ||
                          null == (s = o.guild_monetization) ||
                          null == (r = s.game_server)
                              ? void 0
                              : r.boost_price)
                          ? m
                          : 0);
        })(P, H, R, A),
        X = a.useCallback(
            (e) => {
                var t, n, l, a, i, r;
                K(e);
                let s =
                    null == Z ||
                    null == (l = Z.entitlements) ||
                    null == (n = l[null != (a = null == e ? void 0 : e.entitlementId) ? a : ""]) ||
                    null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != s && F(s),
                    M(null == e ? void 0 : e.planId),
                    Q(null != (i = null == e ? void 0 : e.name) ? i : ""),
                    ee(null != (r = null == e ? void 0 : e.regionId) ? r : "");
            },
            [null == Z ? void 0 : Z.entitlements],
        ),
        Y = a.useCallback(
            (e, t) => {
                var n;
                X(void 0),
                    F(null == e ? void 0 : e.id),
                    M(null != t ? t : null == e || null == (n = e.plans[0]) ? void 0 : n.id);
            },
            [X],
        ),
        [q, W] = a.useState(),
        [$, Q] = a.useState(null != (x = null == S ? void 0 : S.name) ? x : ""),
        [V, ee] = a.useState(null != (y = null == S ? void 0 : S.regionId) ? y : ""),
        [et, en] = a.useState(!1),
        el = a.useCallback(() => {
            if ((z(void 0), null == _ || null == H || "" === $ || "" === V || null == R)) return;
            let e = () => {
                en(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), p.tq);
                });
                Promise.all([null != A ? (0, g.EY)(_.id, A.entitlementId, R, $) : (0, g.NE)(_.id, R, $, V), e])
                    .then(() => {
                        C(),
                            (null == A ? void 0 : A.planId) !== R &&
                                (0, b.Z)(_.id, H, null == A ? "created" : "updated");
                    })
                    .catch((e) => {
                        var t, n;
                        z(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                    })
                    .finally(() => {
                        en(!1);
                    });
            };
            B < U
                ? (0, s.u)({
                      analyticsLocation: N,
                      numberOfBoostsToAdd: U - B,
                      analyticsLocations: T,
                      guild: _,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          en(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [T, _, B, R, N, H, $, V, C, U, A]),
        ea = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        C();
                        break;
                    case "go-to-step":
                        E(e.step);
                        break;
                    case "save":
                        el();
                }
            },
            [C, el],
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
                Object.values(null != (e = null == Z ? void 0 : Z.catalog) ? e : {})
                    .map((e) => e.provider)
                    .filter(d.lm),
            );
        }, [null == Z ? void 0 : Z.catalog]);
    return (0, l.jsx)(j.Provider, {
        value: {
            guildId: P,
            step: L,
            stepAction: D,
            stepLoading: et,
            onBack: ei,
            onNext: er,
            gameServerGames: null != (O = null == Z ? void 0 : Z.catalog) ? O : {},
            instances: Object.values(null != (h = null == Z ? void 0 : Z.instances) ? h : {}),
            currentGame: H,
            setCurrentGame: Y,
            gameServerInstance: A,
            setGameServerInstance: X,
            name: $,
            setName: Q,
            regionId: V,
            setRegionId: ee,
            planCost: U,
            planId: R,
            setPlanId: M,
            footerNode: q,
            setFooterNode: W,
            availableBoostCount: B,
            error: J,
            gameProvider: es.size > 0 ? Array.from(es)[0] : null,
        },
        children: w,
    });
}
