t.d(n, {
    KO: () => b,
    aj: () => j,
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
    p = t(985862),
    f = t(741252),
    v = t(473682);
let [x, j] = (0, d.Z)();
function b(e) {
    var n, t, d, j, b, h, _, C, y;
    let {
        guildId: O,
        initialPortkeyInstance: N,
        initialPortkeyGame: S,
        stepConfig: P = v.T9,
        children: w,
        onClose: k,
        analyticsLocation: T,
    } = e;
    i.useEffect(() => {
        (0, m.po)(O), (0, m.EC)(O);
    }, [O]);
    let E = (0, a.e7)([g.Z], () => g.Z.getStateForGuild(O)),
        I = (0, a.e7)([c.Z], () => c.Z.getGuild(O)),
        { analyticsLocations: Z } = (0, l.ZP)(T),
        [G, D] = i.useState(null != (d = P.initialStep) ? d : Object.keys(P.steps)[0]),
        B = (0, u.Td)(O, void 0),
        M = P.steps[G],
        [L, R] = i.useState(null != (j = null == S ? void 0 : S.id) ? j : null == N ? void 0 : N.gameId),
        [V, z] = i.useState(N),
        [A, F] = i.useState(
            null != (b = null == S || null == (n = S.plans[0]) ? void 0 : n.id)
                ? b
                : null == N || null == (t = N.plan)
                  ? void 0
                  : t.id,
        ),
        K = i.useCallback((e, n) => {
            var t;
            R(null == e ? void 0 : e.id), F(null != n ? n : null == e || null == (t = e.plans[0]) ? void 0 : t.id);
        }, []),
        W = i.useCallback((e) => {
            z(e), R(e.gameId), F(e.plan.id), Q(e.name), $(e.location);
        }, []),
        U = i.useMemo(() => {
            var e;
            if (null != L)
                return Object.values(null != (e = null == E ? void 0 : E.catalog) ? e : {}).find((e) => e.id === L);
        }, [null == E ? void 0 : E.catalog, L]),
        [H, X] = i.useState(),
        [q, Q] = i.useState(null != (h = null == N ? void 0 : N.name) ? h : ""),
        [Y, $] = i.useState(null != (_ = null == N ? void 0 : N.location) ? _ : ""),
        [J, ee] = i.useState(!1),
        en = i.useCallback(() => {
            let e = (0, p.K)(A, V, U);
            0 !== e &&
                null != I &&
                null != U &&
                (B < e
                    ? (0, o.u)({
                          analyticsLocation: T,
                          numberOfBoostsToAdd: e - B,
                          analyticsLocations: Z,
                          guild: I,
                          intent: s.P.PERK,
                          onLoading: (e) => {
                              ee(e);
                          },
                          onSubscribeComplete: () => {
                              (0, f.Z)(I.id, U);
                          },
                      })
                    : (0, f.Z)(I.id, U));
        }, [Z, I, B, A, T, U, V]),
        et = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        k();
                        break;
                    case "go-to-step":
                        D(e.step);
                        break;
                    case "save":
                        en();
                }
            },
            [k, en],
        ),
        er = i.useCallback(() => {
            null != M && et(M.onBack);
        }, [M, et]),
        ei = i.useCallback(() => {
            null != M && et(M.onNext);
        }, [M, et]);
    return (0, r.jsx)(x.Provider, {
        value: {
            guildId: O,
            step: G,
            stepAction: M,
            stepLoading: J,
            onBack: er,
            onNext: ei,
            portkeyGames: null != (C = null == E ? void 0 : E.catalog) ? C : {},
            instances: Object.values(null != (y = null == E ? void 0 : E.instances) ? y : {}),
            currentGame: U,
            setCurrentGame: K,
            portkeyInstance: V,
            setPortkeyInstance: W,
            name: q,
            setName: Q,
            location: Y,
            setLocation: $,
            planId: A,
            setPlanId: F,
            footerNode: H,
            setFooterNode: X,
            availableBoostCount: B,
        },
        children: w,
    });
}
