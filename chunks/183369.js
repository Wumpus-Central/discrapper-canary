n.d(t, {
    KO: () => y,
    aj: () => x,
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
    f = n(744993),
    g = n(693587),
    b = n(741252),
    p = n(473682);
let [j, x] = (0, u.Z)();
function y(e) {
    var t, n, u, x, y, O, h;
    let {
        guildId: P,
        initialPortkeyInstance: k,
        initialPortkeyGame: S,
        stepConfig: w = p.T9,
        children: I,
        onClose: C,
        analyticsLocation: N,
    } = e;
    a.useEffect(() => {
        (0, f.po)(P), (0, m.BN)(P, !0), null == k && (0, f.EC)(P);
    }, [P, k]);
    let Z = (0, i.e7)([g.Z], () => g.Z.getStateForGuild(P)),
        _ = (0, i.e7)([c.Z], () => c.Z.getGuild(P)),
        { analyticsLocations: T } = (0, r.ZP)(N),
        [E, z] = a.useState(null != (n = w.initialStep) ? n : Object.keys(w.steps)[0]),
        D = (0, v.Td)(P, void 0),
        G = w.steps[E],
        [B, F] = a.useState(null == S ? void 0 : S.id);
    a.useEffect(() => {
        var e, t, n;
        if (null != B || (null == k ? void 0 : k.entitlementId) == null) return;
        let l =
            null == Z || null == (n = Z.entitlements) || null == (t = n[k.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && F(l);
    }, [null == Z ? void 0 : Z.entitlements, null == k ? void 0 : k.entitlementId, B]);
    let [L, M] = a.useState(void 0),
        R = a.useMemo(() => {
            var e;
            if (null != B)
                return Object.values(null != (e = null == Z ? void 0 : Z.catalog) ? e : {}).find((e) => e.id === B);
        }, [null == Z ? void 0 : Z.catalog, B]),
        [A, U] = a.useState(k),
        [K, V] = a.useState(
            null != (u = null == S || null == (t = S.plans[0]) ? void 0 : t.id) ? u : null == k ? void 0 : k.planId,
        ),
        q = (function (e, t, n, l) {
            var a, r, s, o, c, u, d, m;
            let v = (0, i.e7)([g.Z], () => {
                    var t;
                    return null == (t = g.Z.getStateForGuild(e)) ? void 0 : t.entitlements;
                }),
                f = null != (d = null == t || null == (a = t.plans.find((e) => e.id === n)) ? void 0 : a.cost) ? d : 0;
            return null == l
                ? f
                : f -
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
        })(P, R, K, A),
        X = a.useCallback((e, t) => {
            var n;
            F(null == e ? void 0 : e.id), V(null != t ? t : null == e || null == (n = e.plans[0]) ? void 0 : n.id);
        }, []),
        Y = a.useCallback(
            (e) => {
                var t, n, l;
                U(e);
                let a =
                    null == Z || null == (l = Z.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != a && F(a), V(e.planId), W(e.name), ee(e.regionId);
            },
            [null == Z ? void 0 : Z.entitlements],
        ),
        [H, J] = a.useState(),
        [Q, W] = a.useState(null != (x = null == k ? void 0 : k.name) ? x : ""),
        [$, ee] = a.useState(null != (y = null == k ? void 0 : k.regionId) ? y : ""),
        [et, en] = a.useState(!1),
        el = a.useCallback(() => {
            if ((M(void 0), null == _ || null == R || "" === Q || "" === $ || null == K)) return;
            let e = () => {
                en(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), p.cF);
                });
                Promise.all([null != A ? (0, f.EY)(_.id, A.entitlementId, K, Q) : (0, f.NE)(_.id, K, Q, $), e])
                    .then(() => {
                        C(),
                            (null == A ? void 0 : A.planId) !== K &&
                                (0, b.Z)(_.id, R, null == A ? "created" : "updated");
                    })
                    .catch((e) => {
                        var t, n;
                        M(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                    })
                    .finally(() => {
                        en(!1);
                    });
            };
            D < q
                ? (0, s.u)({
                      analyticsLocation: N,
                      numberOfBoostsToAdd: q - D,
                      analyticsLocations: T,
                      guild: _,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          en(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [T, _, D, K, N, R, Q, $, C, q, A]),
        ea = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        C();
                        break;
                    case "go-to-step":
                        z(e.step);
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
            portkeyGames: null != (O = null == Z ? void 0 : Z.catalog) ? O : {},
            instances: Object.values(null != (h = null == Z ? void 0 : Z.instances) ? h : {}),
            currentGame: R,
            setCurrentGame: X,
            portkeyInstance: A,
            setPortkeyInstance: Y,
            name: Q,
            setName: W,
            regionId: $,
            setRegionId: ee,
            planCost: q,
            planId: K,
            setPlanId: V,
            footerNode: H,
            setFooterNode: J,
            availableBoostCount: D,
            error: L,
            gameProvider: es.size > 0 ? Array.from(es)[0] : null,
        },
        children: I,
    });
}
