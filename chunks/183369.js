n.d(t, {
    KO: () => y,
    aj: () => j,
}),
    n(388685),
    n(457542);
var l = n(951288),
    i = n(647438),
    a = n(442837),
    r = n(906732),
    s = n(879892),
    o = n(343649),
    c = n(430824),
    u = n(975104),
    d = n(713081),
    m = n(279604),
    v = n(744993),
    f = n(693587),
    b = n(741252),
    g = n(473682);
let [p, j] = (0, u.Z)();
function y(e) {
    var t, n, u, j, y, x, O;
    let {
        guildId: h,
        initialPortkeyInstance: P,
        initialPortkeyGame: k,
        stepConfig: S = g.T9,
        children: w,
        onClose: C,
        analyticsLocation: I,
    } = e;
    i.useEffect(() => {
        (0, v.po)(h), (0, d.BN)(h, !0), null == P && (0, v.EC)(h);
    }, [h, P]);
    let N = (0, a.e7)([f.Z], () => f.Z.getStateForGuild(h)),
        Z = (0, a.e7)([c.Z], () => c.Z.getGuild(h)),
        { analyticsLocations: _ } = (0, r.ZP)(I),
        [E, T] = i.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
        D = (0, m.Td)(h, void 0),
        z = S.steps[E],
        [G, F] = i.useState(null == k ? void 0 : k.id);
    i.useEffect(() => {
        var e, t, n;
        if (null != G || (null == P ? void 0 : P.entitlementId) == null) return;
        let l =
            null == N || null == (n = N.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && F(l);
    }, [null == N ? void 0 : N.entitlements, null == P ? void 0 : P.entitlementId, G]);
    let [B, L] = i.useState(void 0),
        M = i.useMemo(() => {
            var e;
            if (null != G)
                return Object.values(null != (e = null == N ? void 0 : N.catalog) ? e : {}).find((e) => e.id === G);
        }, [null == N ? void 0 : N.catalog, G]),
        [R, V] = i.useState(P),
        [A, q] = i.useState(
            null != (u = null == k || null == (t = k.plans[0]) ? void 0 : t.id) ? u : null == P ? void 0 : P.planId,
        ),
        K = (function (e, t, n, l) {
            var i, r, s, o, c, u, d, m;
            let v = (0, a.e7)([f.Z], () => {
                    var t;
                    return null == (t = f.Z.getStateForGuild(e)) ? void 0 : t.entitlements;
                }),
                b = null != (d = null == t || null == (i = t.plans.find((e) => e.id === n)) ? void 0 : i.cost) ? d : 0;
            return null == l
                ? b
                : b -
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
        })(h, M, A, R),
        U = i.useCallback((e, t) => {
            var n;
            F(null == e ? void 0 : e.id), q(null != t ? t : null == e || null == (n = e.plans[0]) ? void 0 : n.id);
        }, []),
        X = i.useCallback(
            (e) => {
                var t, n, l;
                V(e);
                let i =
                    null == N || null == (l = N.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != i && F(i), q(e.planId), J(e.name), H(e.regionId);
            },
            [null == N ? void 0 : N.entitlements],
        ),
        [Y, $] = i.useState(),
        [Q, J] = i.useState(null != (j = null == P ? void 0 : P.name) ? j : ""),
        [W, H] = i.useState(null != (y = null == P ? void 0 : P.regionId) ? y : ""),
        [ee, et] = i.useState(!1),
        en = i.useCallback(() => {
            if ((L(void 0), 0 === K || null == Z || null == M || null == A)) return;
            let e = () => {
                et(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), g.cF);
                });
                Promise.all([null != R ? (0, v.EY)(Z.id, R.entitlementId, A, Q) : (0, v.NE)(Z.id, A, Q, W), e])
                    .then(() => {
                        C(), (0, b.Z)(Z.id, M);
                    })
                    .catch((e) => {
                        var t, n;
                        L(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                    })
                    .finally(() => {
                        et(!1);
                    });
            };
            D < K
                ? (0, s.u)({
                      analyticsLocation: I,
                      numberOfBoostsToAdd: K - D,
                      analyticsLocations: _,
                      guild: Z,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          et(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [_, Z, D, A, I, M, Q, W, C, K, R]),
        el = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        C();
                        break;
                    case "go-to-step":
                        T(e.step);
                        break;
                    case "save":
                        en();
                }
            },
            [C, en],
        ),
        ei = i.useCallback(() => {
            null != z && el(z.onBack);
        }, [z, el]),
        ea = i.useCallback(() => {
            null != z && el(z.onNext);
        }, [z, el]);
    return (0, l.jsx)(p.Provider, {
        value: {
            guildId: h,
            step: E,
            stepAction: z,
            stepLoading: ee,
            onBack: ei,
            onNext: ea,
            portkeyGames: null != (x = null == N ? void 0 : N.catalog) ? x : {},
            instances: Object.values(null != (O = null == N ? void 0 : N.instances) ? O : {}),
            currentGame: M,
            setCurrentGame: U,
            portkeyInstance: R,
            setPortkeyInstance: X,
            name: Q,
            setName: J,
            regionId: W,
            setRegionId: H,
            planCost: K,
            planId: A,
            setPlanId: q,
            footerNode: Y,
            setFooterNode: $,
            availableBoostCount: D,
            error: B,
        },
        children: w,
    });
}
