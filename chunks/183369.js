t.d(n, {
    KO: () => b,
    aj: () => j,
}),
    t(388685);
var i = t(951288),
    r = t(647438),
    l = t(442837),
    a = t(906732),
    o = t(879892),
    s = t(343649),
    c = t(430824),
    d = t(975104),
    u = t(713081),
    m = t(279604),
    g = t(744993),
    f = t(693587),
    p = t(741252),
    v = t(473682);
let [x, j] = (0, d.Z)();
function b(e) {
    var n, t, d, j, b, h, _;
    let {
        guildId: C,
        initialPortkeyInstance: y,
        initialPortkeyGame: O,
        stepConfig: N = v.T9,
        children: P,
        onClose: S,
        analyticsLocation: w,
    } = e;
    r.useEffect(() => {
        (0, g.po)(C), (0, g.EC)(C), (0, u.BN)(C, !0);
    }, [C]);
    let k = (0, l.e7)([f.Z], () => f.Z.getStateForGuild(C)),
        E = (0, l.e7)([c.Z], () => c.Z.getGuild(C)),
        { analyticsLocations: I } = (0, a.ZP)(w),
        [T, Z] = r.useState(null != (t = N.initialStep) ? t : Object.keys(N.steps)[0]),
        G = (0, m.Td)(C, void 0),
        R = N.steps[T],
        [D, B] = r.useState(null == O ? void 0 : O.id);
    r.useEffect(() => {
        var e, n, t;
        if (null != D || (null == y ? void 0 : y.entitlementId) == null) return;
        let i =
            null == k || null == (t = k.entitlements) || null == (n = t[y.entitlementId]) || null == (e = n.sku)
                ? void 0
                : e.product_id;
        null != i && B(i);
    }, [null == k ? void 0 : k.entitlements, null == y ? void 0 : y.entitlementId, D]);
    let M = r.useMemo(() => {
            var e;
            if (null != D)
                return Object.values(null != (e = null == k ? void 0 : k.catalog) ? e : {}).find((e) => e.id === D);
        }, [null == k ? void 0 : k.catalog, D]),
        [z, F] = r.useState(y),
        [A, L] = r.useState(
            null != (d = null == O || null == (n = O.plans[0]) ? void 0 : n.id) ? d : null == y ? void 0 : y.planId,
        ),
        V = (function (e, n, t, i) {
            var r, a, o, s, c, d, u, m;
            let g = (0, l.e7)([f.Z], () => {
                    var n;
                    return null == (n = f.Z.getStateForGuild(e)) ? void 0 : n.entitlements;
                }),
                p = null != (u = null == n || null == (r = n.plans.find((e) => e.id === t)) ? void 0 : r.cost) ? u : 0;
            return null == i
                ? p
                : p -
                      (null !=
                      (m =
                          null == g ||
                          null == (d = g[i.entitlementId]) ||
                          null == (c = d.sku) ||
                          null == (s = c.tenant_metadata) ||
                          null == (o = s.guild_monetization) ||
                          null == (a = o.game_server)
                              ? void 0
                              : a.boost_price)
                          ? m
                          : 0);
        })(C, M, A, z),
        U = r.useCallback((e, n) => {
            var t;
            B(null == e ? void 0 : e.id), L(null != n ? n : null == e || null == (t = e.plans[0]) ? void 0 : t.id);
        }, []),
        K = r.useCallback(
            (e) => {
                var n, t, i;
                F(e);
                let r =
                    null == k || null == (i = k.entitlements) || null == (t = i[e.entitlementId]) || null == (n = t.sku)
                        ? void 0
                        : n.product_id;
                null != r && B(r), L(e.planId), X(e.name), Q(e.regionId);
            },
            [null == k ? void 0 : k.entitlements],
        ),
        [W, H] = r.useState(),
        [q, X] = r.useState(null != (j = null == y ? void 0 : y.name) ? j : ""),
        [Y, Q] = r.useState(null != (b = null == y ? void 0 : y.regionId) ? b : ""),
        [$, J] = r.useState(!1),
        ee = r.useCallback(() => {
            0 !== V &&
                null != E &&
                null != M &&
                null != A &&
                (G < V
                    ? (0, o.u)({
                          analyticsLocation: w,
                          numberOfBoostsToAdd: V - G,
                          analyticsLocations: I,
                          guild: E,
                          intent: s.P.PERK,
                          onLoading: (e) => {
                              J(e);
                          },
                          onSubscribeComplete: () => {
                              (0, g.NE)(E.id, A, q, Y).then(() => {
                                  S(), (0, p.Z)(E.id, M);
                              });
                          },
                      })
                    : (0, g.NE)(E.id, A, q, Y).then(() => {
                          S(), (0, p.Z)(E.id, M);
                      }));
        }, [I, E, G, A, w, M, q, Y, S, V]),
        en = r.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        S();
                        break;
                    case "go-to-step":
                        Z(e.step);
                        break;
                    case "save":
                        ee();
                }
            },
            [S, ee],
        ),
        et = r.useCallback(() => {
            null != R && en(R.onBack);
        }, [R, en]),
        ei = r.useCallback(() => {
            null != R && en(R.onNext);
        }, [R, en]);
    return (0, i.jsx)(x.Provider, {
        value: {
            guildId: C,
            step: T,
            stepAction: R,
            stepLoading: $,
            onBack: et,
            onNext: ei,
            portkeyGames: null != (h = null == k ? void 0 : k.catalog) ? h : {},
            instances: Object.values(null != (_ = null == k ? void 0 : k.instances) ? _ : {}),
            currentGame: M,
            setCurrentGame: U,
            portkeyInstance: z,
            setPortkeyInstance: K,
            name: q,
            setName: X,
            regionId: Y,
            setRegionId: Q,
            planCost: V,
            planId: A,
            setPlanId: L,
            footerNode: W,
            setFooterNode: H,
            availableBoostCount: G,
        },
        children: P,
    });
}
