t.d(n, {
    KO: () => b,
    aj: () => x,
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
    p = t(741252),
    f = t(473682);
let [v, x] = (0, d.Z)();
function b(e) {
    var n, t, d, x, b, j, h, _;
    let {
        guildId: C,
        initialPortkeyInstance: y,
        initialPortkeyGame: O,
        stepConfig: N = f.T9,
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
        [B, L] = r.useState(null != (d = null == O ? void 0 : O.id) ? d : null == y ? void 0 : y.gameId),
        M = r.useMemo(() => {
            var e;
            if (null != B)
                return Object.values(null != (e = null == k ? void 0 : k.catalog) ? e : {}).find((e) => e.id === B);
        }, [null == k ? void 0 : k.catalog, B]),
        [z, R] = r.useState(y),
        [V, A] = r.useState(
            null != (x = null == O || null == (n = O.plans[0]) ? void 0 : n.id) ? x : null == y ? void 0 : y.planId,
        ),
        F = (function (e, n, t, i) {
            var r, l, o, s, c, d, u, m;
            let p = (0, a.e7)([g.Z], () => {
                    var n;
                    return null == (n = g.Z.getStateForGuild(e)) ? void 0 : n.entitlements;
                }),
                f = null != (u = null == n || null == (r = n.plans.find((e) => e.id === t)) ? void 0 : r.cost) ? u : 0;
            return null == i
                ? f
                : f -
                      (null !=
                      (m =
                          null == p ||
                          null == (d = p[i.entitlementId]) ||
                          null == (c = d.sku) ||
                          null == (s = c.tenant_metadata) ||
                          null == (o = s.guild_monetization) ||
                          null == (l = o.game_server)
                              ? void 0
                              : l.boost_price)
                          ? m
                          : 0);
        })(C, M, V, z),
        W = r.useCallback((e, n) => {
            var t;
            L(null == e ? void 0 : e.id), A(null != n ? n : null == e || null == (t = e.plans[0]) ? void 0 : t.id);
        }, []),
        U = r.useCallback((e) => {
            R(e), L(e.gameId), A(e.planId), X(e.name), Y(e.location);
        }, []),
        [q, H] = r.useState(),
        [K, X] = r.useState(null != (b = null == y ? void 0 : y.name) ? b : ""),
        [Q, Y] = r.useState(null != (j = null == y ? void 0 : y.location) ? j : ""),
        [$, J] = r.useState(!1),
        ee = r.useCallback(() => {
            0 !== F &&
                null != T &&
                null != M &&
                null != V &&
                (G < F
                    ? (0, o.u)({
                          analyticsLocation: w,
                          numberOfBoostsToAdd: F - G,
                          analyticsLocations: E,
                          guild: T,
                          intent: s.P.PERK,
                          onLoading: (e) => {
                              J(e);
                          },
                          onSubscribeComplete: () => {
                              (0, m.NE)(T.id, V, K, Q).then(() => {
                                  P(), (0, p.Z)(T.id, M);
                              });
                          },
                      })
                    : (0, m.NE)(T.id, V, K, Q).then(() => {
                          P(), (0, p.Z)(T.id, M);
                      }));
        }, [E, T, G, V, w, M, K, Q, P, F]),
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
    return (0, i.jsx)(v.Provider, {
        value: {
            guildId: C,
            step: I,
            stepAction: D,
            stepLoading: $,
            onBack: et,
            onNext: ei,
            portkeyGames: null != (h = null == k ? void 0 : k.catalog) ? h : {},
            instances: Object.values(null != (_ = null == k ? void 0 : k.instances) ? _ : {}),
            currentGame: M,
            setCurrentGame: W,
            portkeyInstance: z,
            setPortkeyInstance: U,
            name: K,
            setName: X,
            location: Q,
            setLocation: Y,
            planCost: F,
            planId: V,
            setPlanId: A,
            footerNode: q,
            setFooterNode: H,
            availableBoostCount: G,
        },
        children: S,
    });
}
