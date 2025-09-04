t.d(n, {
    KO: () => b,
    aj: () => j,
}),
    t(388685);
var a = t(951288),
    i = t(647438),
    r = t(442837),
    l = t(906732),
    s = t(879892),
    o = t(343649),
    c = t(430824),
    d = t(975104),
    u = t(279604),
    m = t(744993),
    p = t(693587),
    x = t(741252),
    g = t(473682);
let [v, j] = (0, d.Z)();
function b(e) {
    var n, t, d, j, b, f, h, _, C;
    let {
        guildId: y,
        initialPortkeyInstance: O,
        initialPortkeyGame: N,
        stepConfig: S = g.T9,
        children: P,
        onClose: w,
        analyticsLocation: k,
    } = e;
    i.useEffect(() => {
        (0, m.po)(y), (0, m.EC)(y);
    }, [y]);
    let T = (0, r.e7)([p.Z], () => p.Z.getStateForGuild(y)),
        I = (0, r.e7)([c.Z], () => c.Z.getGuild(y)),
        { analyticsLocations: E } = (0, l.ZP)(k),
        [Z, B] = i.useState(null != (d = S.initialStep) ? d : Object.keys(S.steps)[0]),
        D = (0, u.Td)(y, void 0),
        G = S.steps[Z],
        [V, R] = i.useState(null != (j = null == N ? void 0 : N.id) ? j : null == O ? void 0 : O.gameId),
        [z, M] = i.useState(O),
        [A, L] = i.useState(
            null != (b = null == N || null == (n = N.plans[0]) ? void 0 : n.id)
                ? b
                : null == O || null == (t = O.plan)
                  ? void 0
                  : t.id,
        ),
        H = i.useCallback((e, n) => {
            var t;
            R(null == e ? void 0 : e.id), L(null != n ? n : null == e || null == (t = e.plans[0]) ? void 0 : t.id);
        }, []),
        K = i.useCallback((e) => {
            M(e), R(e.gameId), L(e.plan.id), U(e.name), Y(e.location);
        }, []),
        X = i.useMemo(() => {
            var e;
            if (null != V)
                return Object.values(null != (e = null == T ? void 0 : T.catalog) ? e : {}).find((e) => e.id === V);
        }, [null == T ? void 0 : T.catalog, V]),
        [q, F] = i.useState(),
        [W, U] = i.useState(null != (f = null == O ? void 0 : O.name) ? f : ""),
        [Q, Y] = i.useState(null != (h = null == O ? void 0 : O.location) ? h : ""),
        [$, J] = i.useState(!1),
        ee = i.useCallback(() => {
            let e = null == X ? void 0 : X.plans.find((e) => e.id === A);
            null != e &&
                null != I &&
                null != X &&
                (D < e.cost
                    ? (0, s.u)({
                          analyticsLocation: k,
                          numberOfBoostsToAdd: e.cost - D,
                          analyticsLocations: E,
                          guild: I,
                          intent: o.P.PERK,
                          onLoading: (e) => {
                              J(e);
                          },
                          onSubscribeComplete: () => {
                              (0, x.Z)(I.id, X);
                          },
                      })
                    : (0, x.Z)(I.id, X));
        }, [E, I, D, A, k, X]),
        en = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        w();
                        break;
                    case "go-to-step":
                        B(e.step);
                        break;
                    case "purchase":
                        ee();
                }
            },
            [w, ee],
        ),
        et = i.useCallback(() => {
            null != G && en(G.onBack);
        }, [G, en]),
        ea = i.useCallback(() => {
            null != G && en(G.onNext);
        }, [G, en]);
    return (0, a.jsx)(v.Provider, {
        value: {
            guildId: y,
            step: Z,
            stepAction: G,
            stepLoading: $,
            onBack: et,
            onNext: ea,
            portkeyGames: null != (_ = null == T ? void 0 : T.catalog) ? _ : {},
            instances: Object.values(null != (C = null == T ? void 0 : T.instances) ? C : {}),
            currentGame: X,
            setCurrentGame: H,
            portkeyInstance: z,
            setPortkeyInstance: K,
            name: W,
            setName: U,
            location: Q,
            setLocation: Y,
            planId: A,
            setPlanId: L,
            footerNode: q,
            setFooterNode: F,
        },
        children: P,
    });
}
