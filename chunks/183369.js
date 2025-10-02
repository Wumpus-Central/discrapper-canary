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
    u = n(430824),
    c = n(975104),
    d = n(713081),
    m = n(279604),
    v = n(744993),
    f = n(693587),
    g = n(741252),
    b = n(473682);
let [p, j] = (0, c.Z)();
function x(e) {
    var t, n, c, j, x, y, O;
    let {
        guildId: h,
        initialPortkeyInstance: P,
        initialPortkeyGame: k,
        stepConfig: S = b.T9,
        children: w,
        onClose: C,
        analyticsLocation: I,
    } = e;
    i.useEffect(() => {
        (0, v.po)(h), (0, d.BN)(h, !0), null == P && (0, v.EC)(h);
    }, [h, P]);
    let Z = (0, a.e7)([f.Z], () => f.Z.getStateForGuild(h)),
        N = (0, a.e7)([u.Z], () => u.Z.getGuild(h)),
        { analyticsLocations: T } = (0, r.ZP)(I),
        [_, E] = i.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
        D = (0, m.Td)(h, void 0),
        z = S.steps[_],
        [G, B] = i.useState(null == k ? void 0 : k.id);
    i.useEffect(() => {
        var e, t, n;
        if (null != G || (null == P ? void 0 : P.entitlementId) == null) return;
        let l =
            null == Z || null == (n = Z.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && B(l);
    }, [null == Z ? void 0 : Z.entitlements, null == P ? void 0 : P.entitlementId, G]);
    let [F, L] = i.useState(void 0),
        M = i.useMemo(() => {
            var e;
            if (null != G)
                return Object.values(null != (e = null == Z ? void 0 : Z.catalog) ? e : {}).find((e) => e.id === G);
        }, [null == Z ? void 0 : Z.catalog, G]),
        [R, K] = i.useState(P),
        [A, V] = i.useState(
            null != (c = null == k || null == (t = k.plans[0]) ? void 0 : t.id) ? c : null == P ? void 0 : P.planId,
        ),
        Y = (function (e, t, n, l) {
            var i, r, s, o, u, c, d, m;
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
                          null == (c = v[l.entitlementId]) ||
                          null == (u = c.sku) ||
                          null == (o = u.tenant_metadata) ||
                          null == (s = o.guild_monetization) ||
                          null == (r = s.game_server)
                              ? void 0
                              : r.boost_price)
                          ? m
                          : 0);
        })(h, M, A, R),
        q = i.useCallback((e, t) => {
            var n;
            B(null == e ? void 0 : e.id), V(null != t ? t : null == e || null == (n = e.plans[0]) ? void 0 : n.id);
        }, []),
        U = i.useCallback(
            (e) => {
                var t, n, l;
                K(e);
                let i =
                    null == Z || null == (l = Z.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != i && B(i), V(e.planId), J(e.name), W(e.regionId);
            },
            [null == Z ? void 0 : Z.entitlements],
        ),
        [X, H] = i.useState(),
        [$, J] = i.useState(null != (j = null == P ? void 0 : P.name) ? j : ""),
        [Q, W] = i.useState(null != (x = null == P ? void 0 : P.regionId) ? x : ""),
        [ee, et] = i.useState(!1),
        en = i.useCallback(() => {
            if ((L(void 0), null == N || null == M || "" === $ || "" === Q || null == A)) return;
            let e = () => {
                et(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), b.cF);
                });
                Promise.all([null != R ? (0, v.EY)(N.id, R.entitlementId, A, $) : (0, v.NE)(N.id, A, $, Q), e])
                    .then(() => {
                        C(),
                            (null == R ? void 0 : R.planId) !== A &&
                                (0, g.Z)(N.id, M, null == R ? "created" : "updated");
                    })
                    .catch((e) => {
                        var t, n;
                        L(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                    })
                    .finally(() => {
                        et(!1);
                    });
            };
            D < Y
                ? (0, s.u)({
                      analyticsLocation: I,
                      numberOfBoostsToAdd: Y - D,
                      analyticsLocations: T,
                      guild: N,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          et(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [T, N, D, A, I, M, $, Q, C, Y, R]),
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
            guildId: h,
            step: _,
            stepAction: z,
            stepLoading: ee,
            onBack: ei,
            onNext: ea,
            portkeyGames: null != (y = null == Z ? void 0 : Z.catalog) ? y : {},
            instances: Object.values(null != (O = null == Z ? void 0 : Z.instances) ? O : {}),
            currentGame: M,
            setCurrentGame: q,
            portkeyInstance: R,
            setPortkeyInstance: U,
            name: $,
            setName: J,
            regionId: Q,
            setRegionId: W,
            planCost: Y,
            planId: A,
            setPlanId: V,
            footerNode: X,
            setFooterNode: H,
            availableBoostCount: D,
            error: F,
            gameProvider: b.mg.SHOCKBYTE,
        },
        children: w,
    });
}
