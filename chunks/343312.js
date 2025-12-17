t.d(n, {
    BT: () => y,
    JL: () => h,
}),
    t(388685),
    t(457542);
var l = t(54381),
    i = t(473749),
    a = t(442837),
    r = t(906732),
    s = t(879892),
    u = t(343649),
    o = t(430824),
    c = t(975104),
    d = t(823379),
    m = t(713081),
    v = t(473952),
    f = t(905551),
    g = t(578756),
    p = t(60482),
    b = t(627045),
    _ = t(619733),
    x = t(914820),
    j = t(388032);
let [E, h] = (0, c.Z)();
function S(e) {
    var n;
    return null == e || null == (n = e.plans[Math.floor(((null == e ? void 0 : e.plans.length) - 1) / 2)])
        ? void 0
        : n.id;
}
function y(e) {
    var n, t, c, h, y, O;
    let {
        guildId: k,
        initialGameServerInstance: I,
        initialGameServerGame: C,
        stepConfig: P = _.IX,
        children: N,
        onClose: Z,
        analyticsLocation: w,
    } = e;
    i.useEffect(() => {
        (0, f.ce)(k), (0, m.BN)(k, !0), null == I && (0, f.mF)(k);
    }, [k, I]);
    let M = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(k)),
        T = (0, a.e7)([o.Z], () => o.Z.getGuild(k)),
        { analyticsLocations: G } = (0, r.ZP)(w),
        [L, R] = i.useState(null != (n = P.initialStep) ? n : Object.keys(P.steps)[0]),
        A = (0, v.Z)(k, void 0),
        D = P.steps[L],
        [B, V] = i.useState(null == C ? void 0 : C.id);
    i.useEffect(() => {
        var e, n, t;
        if (null != B || (null == I ? void 0 : I.entitlementId) == null) return;
        let l =
            null == M || null == (t = M.entitlements) || null == (n = t[I.entitlementId]) || null == (e = n.sku)
                ? void 0
                : e.product_id;
        null != l && V(l);
    }, [null == M ? void 0 : M.entitlements, null == I ? void 0 : I.entitlementId, B]);
    let [z, K] = i.useState(void 0),
        J = i.useMemo(() => {
            var e;
            if (null != B)
                return Object.values(null != (e = null == M ? void 0 : M.catalog) ? e : {}).find((e) => e.id === B);
        }, [null == M ? void 0 : M.catalog, B]),
        [U, F] = i.useState(I),
        [Y, H] = i.useState(null != (t = S(C)) ? t : null == I ? void 0 : I.planId),
        W = (function (e, n, t, l) {
            var i, r, s, u, o, c, d, m;
            let v = (0, a.e7)([p.Z], () => {
                    var n;
                    return null == (n = p.Z.getStateForGuild(e)) ? void 0 : n.entitlements;
                }),
                f = null != (d = null == n || null == (i = n.plans.find((e) => e.id === t)) ? void 0 : i.cost) ? d : 0;
            return null == l
                ? f
                : f -
                      (null !=
                      (m =
                          null == v ||
                          null == (c = v[l.entitlementId]) ||
                          null == (o = c.sku) ||
                          null == (u = o.tenant_metadata) ||
                          null == (s = u.guild_monetization) ||
                          null == (r = s.game_server)
                              ? void 0
                              : r.boost_price)
                          ? m
                          : 0);
        })(k, J, Y, U),
        X = i.useCallback(
            (e) => {
                var n, t, l, i, a, r;
                F(e);
                let s =
                    null == M ||
                    null == (l = M.entitlements) ||
                    null == (t = l[null != (i = null == e ? void 0 : e.entitlementId) ? i : ""]) ||
                    null == (n = t.sku)
                        ? void 0
                        : n.product_id;
                null != s && V(s),
                    H(null == e ? void 0 : e.planId),
                    en(null != (a = null == e ? void 0 : e.name) ? a : ""),
                    el(null != (r = null == e ? void 0 : e.regionId) ? r : "");
            },
            [null == M ? void 0 : M.entitlements],
        ),
        q = i.useCallback(
            (e, n) => {
                X(void 0), V(null == e ? void 0 : e.id), H(null != n ? n : S(e));
            },
            [X],
        ),
        [$, Q] = i.useState(),
        [ee, en] = i.useState(null != (c = null == I ? void 0 : I.name) ? c : ""),
        [et, el] = i.useState(null != (h = null == I ? void 0 : I.regionId) ? h : ""),
        [ei, ea] = i.useState(!1),
        er = i.useRef(!1),
        es = i.useCallback(() => {
            var e, n, t;
            if ((K(void 0), null == T || null == J || "" === ee || "" === et || null == Y)) return;
            let l = J.plans.find((e) => e.id === Y);
            (0, g.g$)({
                guildId: T.id,
                productId: J.id,
                productName: J.name,
                skuId: Y,
                planName: null != (e = null == l ? void 0 : l.name) ? e : "",
                planCost: null != (n = null == l ? void 0 : l.cost) ? n : 0,
                previousPlanCost: null == U ? 0 : (null != (t = null == l ? void 0 : l.cost) ? t : 0) + W,
                region: et,
                type: null == U ? "create" : "edit",
            });
            let i = () => {
                if (er.current) return;
                (er.current = !0), ea(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), _.tq);
                });
                Promise.all([null != U ? (0, f.EY)(T.id, U.entitlementId, Y, ee) : (0, f.NE)(T.id, Y, ee, et), e])
                    .then(() => {
                        Z(),
                            (null == U ? void 0 : U.planId) !== Y &&
                                (0, b.Z)(T.id, J, null == U ? "created" : "updated");
                    })
                    .catch((e) => {
                        var n, t;
                        K(
                            null != (t = null == (n = e.body) ? void 0 : n.message)
                                ? t
                                : j.intl.string(x.default.gvNWWr),
                        ),
                            (er.current = !1);
                    })
                    .finally(() => {
                        ea(!1);
                    });
            };
            A < W
                ? (0, s.u)({
                      analyticsLocation: w,
                      numberOfBoostsToAdd: W - A,
                      analyticsLocations: G,
                      guild: T,
                      intent: u.P.PERK,
                      onLoading: (e) => {
                          ea(e);
                      },
                      onSubscribeComplete: () => {
                          i();
                      },
                      handleSubscribeModalClose: (e) => {
                          e && i();
                      },
                  })
                : i();
        }, [G, T, A, Y, w, J, ee, et, Z, W, U]),
        eu = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        Z();
                        break;
                    case "go-to-step":
                        R(e.step);
                        break;
                    case "save":
                        es();
                }
            },
            [Z, es],
        ),
        eo = i.useCallback(() => {
            null != D && eu(D.onBack);
        }, [D, eu]),
        ec = i.useCallback(() => {
            null != D && eu(D.onNext);
        }, [D, eu]),
        ed = i.useMemo(() => {
            var e;
            return new Set(
                Object.values(null != (e = null == M ? void 0 : M.catalog) ? e : {})
                    .map((e) => e.provider)
                    .filter(d.lm),
            );
        }, [null == M ? void 0 : M.catalog]);
    return (0, l.jsx)(E.Provider, {
        value: {
            guildId: k,
            step: L,
            stepAction: D,
            stepLoading: ei,
            onBack: eo,
            onNext: ec,
            gameServerGames: null != (y = null == M ? void 0 : M.catalog) ? y : {},
            instances: Object.values(null != (O = null == M ? void 0 : M.instances) ? O : {}),
            currentGame: J,
            setCurrentGame: q,
            gameServerInstance: U,
            setGameServerInstance: X,
            name: ee,
            setName: en,
            regionId: et,
            setRegionId: el,
            planCost: W,
            planId: Y,
            setPlanId: H,
            footerNode: $,
            setFooterNode: Q,
            availableBoostCount: A,
            error: z,
            gameProvider: ed.size > 0 ? Array.from(ed)[0] : null,
        },
        children: N,
    });
}
