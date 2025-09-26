n.d(t, {
    KO: () => x,
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
    g = n(741252),
    b = n(473682);
let [p, j] = (0, u.Z)();
function x(e) {
    var t, n, u, j, x, y, h;
    let {
        guildId: O,
        initialPortkeyInstance: P,
        initialPortkeyGame: k,
        stepConfig: S = b.T9,
        children: w,
        onClose: C,
        analyticsLocation: I,
    } = e;
    i.useEffect(() => {
        (0, v.po)(O), (0, v.EC)(O), (0, d.BN)(O, !0);
    }, [O]);
    let N = (0, a.e7)([f.Z], () => f.Z.getStateForGuild(O)),
        Z = (0, a.e7)([c.Z], () => c.Z.getGuild(O)),
        { analyticsLocations: _ } = (0, r.ZP)(I),
        [T, E] = i.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
        D = (0, m.Td)(O, void 0),
        z = S.steps[T],
        [G, B] = i.useState(null == k ? void 0 : k.id);
    i.useEffect(() => {
        var e, t, n;
        if (null != G || (null == P ? void 0 : P.entitlementId) == null) return;
        let l =
            null == N || null == (n = N.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && B(l);
    }, [null == N ? void 0 : N.entitlements, null == P ? void 0 : P.entitlementId, G]);
    let [F, R] = i.useState(void 0),
        L = i.useMemo(() => {
            var e;
            if (null != G)
                return Object.values(null != (e = null == N ? void 0 : N.catalog) ? e : {}).find((e) => e.id === G);
        }, [null == N ? void 0 : N.catalog, G]),
        [A, M] = i.useState(P),
        [V, q] = i.useState(
            null != (u = null == k || null == (t = k.plans[0]) ? void 0 : t.id) ? u : null == P ? void 0 : P.planId,
        ),
        X = (function (e, t, n, l) {
            var i, r, s, o, c, u, d, m;
            let v = (0, a.e7)([f.Z], () => {
                    var t;
                    return null == (t = f.Z.getStateForGuild(e)) ? void 0 : t.entitlements;
                }),
                g = null != (d = null == t || null == (i = t.plans.find((e) => e.id === n)) ? void 0 : i.cost) ? d : 0;
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
        })(O, L, V, A),
        K = i.useCallback((e, t) => {
            var n;
            B(null == e ? void 0 : e.id), q(null != t ? t : null == e || null == (n = e.plans[0]) ? void 0 : n.id);
        }, []),
        U = i.useCallback(
            (e) => {
                var t, n, l;
                M(e);
                let i =
                    null == N || null == (l = N.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != i && B(i), q(e.planId), Q(e.name), J(e.regionId);
            },
            [null == N ? void 0 : N.entitlements],
        ),
        [Y, W] = i.useState(),
        [$, Q] = i.useState(null != (j = null == P ? void 0 : P.name) ? j : ""),
        [H, J] = i.useState(null != (x = null == P ? void 0 : P.regionId) ? x : ""),
        [ee, et] = i.useState(!1),
        en = i.useCallback(() => {
            if ((R(void 0), 0 === X || null == Z || null == L || null == V)) return;
            let e = () => {
                et(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), b.cF);
                });
                Promise.all([null != A ? (0, v.EY)(Z.id, A.entitlementId, V, $) : (0, v.NE)(Z.id, V, $, H), e])
                    .then(() => {
                        C(), (0, g.Z)(Z.id, L);
                    })
                    .catch((e) => {
                        var t, n;
                        R(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                    })
                    .finally(() => {
                        et(!1);
                    });
            };
            D < X
                ? (0, s.u)({
                      analyticsLocation: I,
                      numberOfBoostsToAdd: X - D,
                      analyticsLocations: _,
                      guild: Z,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          et(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [_, Z, D, V, I, L, $, H, C, X, A]),
        el = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        C();
                        break;
                    case "go-to-step":
                        E(e.step);
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
            guildId: O,
            step: T,
            stepAction: z,
            stepLoading: ee,
            onBack: ei,
            onNext: ea,
            portkeyGames: null != (y = null == N ? void 0 : N.catalog) ? y : {},
            instances: Object.values(null != (h = null == N ? void 0 : N.instances) ? h : {}),
            currentGame: L,
            setCurrentGame: K,
            portkeyInstance: A,
            setPortkeyInstance: U,
            name: $,
            setName: Q,
            regionId: H,
            setRegionId: J,
            planCost: X,
            planId: V,
            setPlanId: q,
            footerNode: Y,
            setFooterNode: W,
            availableBoostCount: D,
            error: F,
        },
        children: w,
    });
}
