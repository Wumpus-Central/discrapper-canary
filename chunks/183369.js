t.d(n, {
    KO: () => b,
    aj: () => v,
}),
    t(388685);
var r = t(951288),
    i = t(647438),
    a = t(442837),
    l = t(906732),
    o = t(879892),
    s = t(343649),
    c = t(430824),
    d = t(975104),
    u = t(279604),
    m = t(744993),
    g = t(693587),
    f = t(741252),
    p = t(473682);
let [x, v] = (0, d.Z)();
function b(e) {
    var n, t, d, v, b, j, h, _;
    let {
        guildId: C,
        initialPortkeyInstance: y,
        initialPortkeyGame: O,
        stepConfig: N = p.T9,
        children: P,
        onClose: S,
        analyticsLocation: w,
    } = e;
    i.useEffect(() => {
        (0, m.po)(C), (0, m.EC)(C);
    }, [C]);
    let k = (0, a.e7)([g.Z], () => g.Z.getStateForGuild(C)),
        T = (0, a.e7)([c.Z], () => c.Z.getGuild(C)),
        { analyticsLocations: E } = (0, l.ZP)(w),
        [I, Z] = i.useState(null != (t = N.initialStep) ? t : Object.keys(N.steps)[0]),
        G = (0, u.Td)(C, void 0),
        R = N.steps[I],
        [D, B] = i.useState(null != (d = null == O ? void 0 : O.id) ? d : null == y ? void 0 : y.gameId),
        M = i.useMemo(() => {
            var e;
            if (null != D)
                return Object.values(null != (e = null == k ? void 0 : k.catalog) ? e : {}).find((e) => e.id === D);
        }, [null == k ? void 0 : k.catalog, D]),
        [z, F] = i.useState(y),
        [V, A] = i.useState(
            null != (v = null == O || null == (n = O.plans[0]) ? void 0 : n.id) ? v : null == y ? void 0 : y.planId,
        ),
        L = (function (e, n, t, r) {
            var i, l, o, s, c, d, u, m;
            let f = (0, a.e7)([g.Z], () => {
                    var n;
                    return null == (n = g.Z.getStateForGuild(e)) ? void 0 : n.entitlements;
                }),
                p = null != (u = null == n || null == (i = n.plans.find((e) => e.id === t)) ? void 0 : i.cost) ? u : 0;
            return null == r
                ? p
                : p -
                      (null !=
                      (m =
                          null == f ||
                          null == (d = f[r.entitlementId]) ||
                          null == (c = d.sku) ||
                          null == (s = c.tenant_metadata) ||
                          null == (o = s.guild_monetization) ||
                          null == (l = o.game_server)
                              ? void 0
                              : l.boost_price)
                          ? m
                          : 0);
        })(C, M, V, z),
        U = i.useCallback((e, n) => {
            var t;
            B(null == e ? void 0 : e.id), A(null != n ? n : null == e || null == (t = e.plans[0]) ? void 0 : t.id);
        }, []),
        K = i.useCallback((e) => {
            F(e), B(e.gameId), A(e.planId), X(e.name), Q(e.regionId);
        }, []),
        [W, H] = i.useState(),
        [q, X] = i.useState(null != (b = null == y ? void 0 : y.name) ? b : ""),
        [Y, Q] = i.useState(null != (j = null == y ? void 0 : y.regionId) ? j : ""),
        [$, J] = i.useState(!1),
        ee = i.useCallback(() => {
            0 !== L &&
                null != T &&
                null != M &&
                null != V &&
                (G < L
                    ? (0, o.u)({
                          analyticsLocation: w,
                          numberOfBoostsToAdd: L - G,
                          analyticsLocations: E,
                          guild: T,
                          intent: s.P.PERK,
                          onLoading: (e) => {
                              J(e);
                          },
                          onSubscribeComplete: () => {
                              (0, m.NE)(T.id, V, q, Y).then(() => {
                                  S(), (0, f.Z)(T.id, M);
                              });
                          },
                      })
                    : (0, m.NE)(T.id, V, q, Y).then(() => {
                          S(), (0, f.Z)(T.id, M);
                      }));
        }, [E, T, G, V, w, M, q, Y, S, L]),
        en = i.useCallback(
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
        et = i.useCallback(() => {
            null != R && en(R.onBack);
        }, [R, en]),
        er = i.useCallback(() => {
            null != R && en(R.onNext);
        }, [R, en]);
    return (0, r.jsx)(x.Provider, {
        value: {
            guildId: C,
            step: I,
            stepAction: R,
            stepLoading: $,
            onBack: et,
            onNext: er,
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
            planCost: L,
            planId: V,
            setPlanId: A,
            footerNode: W,
            setFooterNode: H,
            availableBoostCount: G,
        },
        children: P,
    });
}
