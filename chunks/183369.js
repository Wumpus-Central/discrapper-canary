n.d(t, {
    KO: () => x,
    aj: () => p,
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
    g = n(693587),
    b = n(741252),
    f = n(473682);
let [j, p] = (0, u.Z)();
function x(e) {
    var t, n, u, p, x, y, h;
    let {
        guildId: O,
        initialPortkeyInstance: P,
        initialPortkeyGame: k,
        stepConfig: C = f.T9,
        children: S,
        onClose: w,
        analyticsLocation: N,
    } = e;
    i.useEffect(() => {
        (0, v.po)(O), (0, v.EC)(O), (0, d.BN)(O, !0);
    }, [O]);
    let I = (0, a.e7)([g.Z], () => g.Z.getStateForGuild(O)),
        Z = (0, a.e7)([c.Z], () => c.Z.getGuild(O)),
        { analyticsLocations: T } = (0, r.ZP)(N),
        [E, _] = i.useState(null != (n = C.initialStep) ? n : Object.keys(C.steps)[0]),
        D = (0, m.Td)(O, void 0),
        z = C.steps[E],
        [B, F] = i.useState(null == k ? void 0 : k.id);
    i.useEffect(() => {
        var e, t, n;
        if (null != B || (null == P ? void 0 : P.entitlementId) == null) return;
        let l =
            null == I || null == (n = I.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && F(l);
    }, [null == I ? void 0 : I.entitlements, null == P ? void 0 : P.entitlementId, B]);
    let [G, L] = i.useState(void 0),
        M = i.useMemo(() => {
            var e;
            if (null != B)
                return Object.values(null != (e = null == I ? void 0 : I.catalog) ? e : {}).find((e) => e.id === B);
        }, [null == I ? void 0 : I.catalog, B]),
        [R, A] = i.useState(P),
        [K, V] = i.useState(
            null != (u = null == k || null == (t = k.plans[0]) ? void 0 : t.id) ? u : null == P ? void 0 : P.planId,
        ),
        q = (function (e, t, n, l) {
            var i, r, s, o, c, u, d, m;
            let v = (0, a.e7)([g.Z], () => {
                    var t;
                    return null == (t = g.Z.getStateForGuild(e)) ? void 0 : t.entitlements;
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
        })(O, M, K, R),
        X = i.useCallback((e, t) => {
            var n;
            F(null == e ? void 0 : e.id), V(null != t ? t : null == e || null == (n = e.plans[0]) ? void 0 : n.id);
        }, []),
        U = i.useCallback(
            (e) => {
                var t, n, l;
                A(e);
                let i =
                    null == I || null == (l = I.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != i && F(i), V(e.planId), H(e.name), J(e.regionId);
            },
            [null == I ? void 0 : I.entitlements],
        ),
        [W, Y] = i.useState(),
        [$, H] = i.useState(null != (p = null == P ? void 0 : P.name) ? p : ""),
        [Q, J] = i.useState(null != (x = null == P ? void 0 : P.regionId) ? x : ""),
        [ee, et] = i.useState(!1),
        en = i.useCallback(() => {
            if ((L(void 0), 0 === q || null == Z || null == M || null == K)) return;
            let e = () => {
                et(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), f.cF);
                });
                Promise.all([(0, v.NE)(Z.id, K, $, Q), e])
                    .then(() => {
                        w(), (0, b.Z)(Z.id, M);
                    })
                    .catch((e) => {
                        var t, n;
                        L(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                    })
                    .finally(() => {
                        et(!1);
                    });
            };
            D < q
                ? (0, s.u)({
                      analyticsLocation: N,
                      numberOfBoostsToAdd: q - D,
                      analyticsLocations: T,
                      guild: Z,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          et(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [T, Z, D, K, N, M, $, Q, w, q]),
        el = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        w();
                        break;
                    case "go-to-step":
                        _(e.step);
                        break;
                    case "save":
                        en();
                }
            },
            [w, en],
        ),
        ei = i.useCallback(() => {
            null != z && el(z.onBack);
        }, [z, el]),
        ea = i.useCallback(() => {
            null != z && el(z.onNext);
        }, [z, el]);
    return (0, l.jsx)(j.Provider, {
        value: {
            guildId: O,
            step: E,
            stepAction: z,
            stepLoading: ee,
            onBack: ei,
            onNext: ea,
            portkeyGames: null != (y = null == I ? void 0 : I.catalog) ? y : {},
            instances: Object.values(null != (h = null == I ? void 0 : I.instances) ? h : {}),
            currentGame: M,
            setCurrentGame: X,
            portkeyInstance: R,
            setPortkeyInstance: U,
            name: $,
            setName: H,
            regionId: Q,
            setRegionId: J,
            planCost: q,
            planId: K,
            setPlanId: V,
            footerNode: W,
            setFooterNode: Y,
            availableBoostCount: D,
            error: G,
        },
        children: S,
    });
}
