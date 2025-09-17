t.d(n, {
    KO: () => b,
    aj: () => v,
}),
    t(388685);
var i = t(951288),
    r = t(647438),
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
        initialPortkeyInstance: O,
        initialPortkeyGame: y,
        stepConfig: N = p.T9,
        children: S,
        onClose: P,
        analyticsLocation: w,
    } = e;
    r.useEffect(() => {
        (0, m.po)(C), (0, m.EC)(C);
    }, [C]);
    let k = (0, a.e7)([g.Z], () => g.Z.getStateForGuild(C)),
        T = (0, a.e7)([c.Z], () => c.Z.getGuild(C)),
        { analyticsLocations: E } = (0, l.ZP)(w),
        [I, Z] = r.useState(null != (t = N.initialStep) ? t : Object.keys(N.steps)[0]),
        G = (0, u.Td)(C, void 0),
        D = N.steps[I],
        [R, B] = r.useState(null != (d = null == y ? void 0 : y.id) ? d : null == O ? void 0 : O.gameId),
        L = r.useMemo(() => {
            var e;
            if (null != R)
                return Object.values(null != (e = null == k ? void 0 : k.catalog) ? e : {}).find((e) => e.id === R);
        }, [null == k ? void 0 : k.catalog, R]),
        [M, z] = r.useState(O),
        [F, A] = r.useState(
            null != (v = null == y || null == (n = y.plans[0]) ? void 0 : n.id) ? v : null == O ? void 0 : O.planId,
        ),
        V = (function (e, n, t, i) {
            var r, l, o, s, c, d, u, m;
            let f = (0, a.e7)([g.Z], () => {
                    var n;
                    return null == (n = g.Z.getStateForGuild(e)) ? void 0 : n.entitlements;
                }),
                p = null != (u = null == n || null == (r = n.plans.find((e) => e.id === t)) ? void 0 : r.cost) ? u : 0;
            return null == i
                ? p
                : p -
                      (null !=
                      (m =
                          null == f ||
                          null == (d = f[i.entitlementId]) ||
                          null == (c = d.sku) ||
                          null == (s = c.tenant_metadata) ||
                          null == (o = s.guild_monetization) ||
                          null == (l = o.game_server)
                              ? void 0
                              : l.boost_price)
                          ? m
                          : 0);
        })(C, L, F, M),
        U = r.useCallback((e, n) => {
            var t;
            B(null == e ? void 0 : e.id), A(null != n ? n : null == e || null == (t = e.plans[0]) ? void 0 : t.id);
        }, []),
        K = r.useCallback((e) => {
            z(e), B(e.gameId), A(e.planId), X(e.name), Q(e.location);
        }, []),
        [W, H] = r.useState(),
        [q, X] = r.useState(null != (b = null == O ? void 0 : O.name) ? b : ""),
        [Y, Q] = r.useState(null != (j = null == O ? void 0 : O.location) ? j : ""),
        [$, J] = r.useState(!1),
        ee = r.useCallback(() => {
            0 !== V &&
                null != T &&
                null != L &&
                null != F &&
                (G < V
                    ? (0, o.u)({
                          analyticsLocation: w,
                          numberOfBoostsToAdd: V - G,
                          analyticsLocations: E,
                          guild: T,
                          intent: s.P.PERK,
                          onLoading: (e) => {
                              J(e);
                          },
                          onSubscribeComplete: () => {
                              (0, m.NE)(T.id, F, q, Y).then(() => {
                                  P(), (0, f.Z)(T.id, L);
                              });
                          },
                      })
                    : (0, m.NE)(T.id, F, q, Y).then(() => {
                          P(), (0, f.Z)(T.id, L);
                      }));
        }, [E, T, G, F, w, L, q, Y, P, V]),
        en = r.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        P();
                        break;
                    case "go-to-step":
                        Z(e.step);
                        break;
                    case "save":
                        ee();
                }
            },
            [P, ee],
        ),
        et = r.useCallback(() => {
            null != D && en(D.onBack);
        }, [D, en]),
        ei = r.useCallback(() => {
            null != D && en(D.onNext);
        }, [D, en]);
    return (0, i.jsx)(x.Provider, {
        value: {
            guildId: C,
            step: I,
            stepAction: D,
            stepLoading: $,
            onBack: et,
            onNext: ei,
            portkeyGames: null != (h = null == k ? void 0 : k.catalog) ? h : {},
            instances: Object.values(null != (_ = null == k ? void 0 : k.instances) ? _ : {}),
            currentGame: L,
            setCurrentGame: U,
            portkeyInstance: M,
            setPortkeyInstance: K,
            name: q,
            setName: X,
            locationId: Y,
            setLocationId: Q,
            planCost: V,
            planId: F,
            setPlanId: A,
            footerNode: W,
            setFooterNode: H,
            availableBoostCount: G,
        },
        children: S,
    });
}
