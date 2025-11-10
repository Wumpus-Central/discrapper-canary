n.d(t, {
    BT: () => y,
    JL: () => h,
}),
    n(388685),
    n(457542);
var l = n(951288),
    i = n(647438),
    a = n(442837),
    r = n(906732),
    s = n(879892),
    u = n(343649),
    o = n(430824),
    c = n(975104),
    d = n(823379),
    m = n(713081),
    v = n(279604),
    g = n(905551),
    f = n(578756),
    p = n(60482),
    b = n(627045),
    _ = n(619733),
    x = n(269794),
    j = n(388032);
let [E, h] = (0, c.Z)();
function S(e) {
    var t;
    return null == e || null == (t = e.plans[Math.floor(((null == e ? void 0 : e.plans.length) - 1) / 2)])
        ? void 0
        : t.id;
}
function y(e) {
    var t, n, c, h, y, O;
    let {
        guildId: I,
        initialGameServerInstance: k,
        initialGameServerGame: C,
        stepConfig: P = _.IX,
        children: N,
        onClose: Z,
        analyticsLocation: w,
    } = e;
    i.useEffect(() => {
        (0, g.ce)(I), (0, m.BN)(I, !0), null == k && (0, g.mF)(I);
    }, [I, k]);
    let M = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(I)),
        T = (0, a.e7)([o.Z], () => o.Z.getGuild(I)),
        { analyticsLocations: G } = (0, r.ZP)(w),
        [L, R] = i.useState(null != (t = P.initialStep) ? t : Object.keys(P.steps)[0]),
        A = (0, v.Td)(I, void 0),
        D = P.steps[L],
        [B, V] = i.useState(null == C ? void 0 : C.id);
    i.useEffect(() => {
        var e, t, n;
        if (null != B || (null == k ? void 0 : k.entitlementId) == null) return;
        let l =
            null == M || null == (n = M.entitlements) || null == (t = n[k.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && V(l);
    }, [null == M ? void 0 : M.entitlements, null == k ? void 0 : k.entitlementId, B]);
    let [z, K] = i.useState(void 0),
        J = i.useMemo(() => {
            var e;
            if (null != B)
                return Object.values(null != (e = null == M ? void 0 : M.catalog) ? e : {}).find((e) => e.id === B);
        }, [null == M ? void 0 : M.catalog, B]),
        [U, F] = i.useState(k),
        [Y, H] = i.useState(null != (n = S(C)) ? n : null == k ? void 0 : k.planId),
        W = (function (e, t, n, l) {
            var i, r, s, u, o, c, d, m;
            let v = (0, a.e7)([p.Z], () => {
                    var t;
                    return null == (t = p.Z.getStateForGuild(e)) ? void 0 : t.entitlements;
                }),
                g = null != (d = null == t || null == (i = t.plans.find((e) => e.id === n)) ? void 0 : i.cost) ? d : 0;
            return null == l
                ? g
                : g -
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
        })(I, J, Y, U),
        X = i.useCallback(
            (e) => {
                var t, n, l, i, a, r;
                F(e);
                let s =
                    null == M ||
                    null == (l = M.entitlements) ||
                    null == (n = l[null != (i = null == e ? void 0 : e.entitlementId) ? i : ""]) ||
                    null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != s && V(s),
                    H(null == e ? void 0 : e.planId),
                    et(null != (a = null == e ? void 0 : e.name) ? a : ""),
                    el(null != (r = null == e ? void 0 : e.regionId) ? r : "");
            },
            [null == M ? void 0 : M.entitlements],
        ),
        q = i.useCallback(
            (e, t) => {
                X(void 0), V(null == e ? void 0 : e.id), H(null != t ? t : S(e));
            },
            [X],
        ),
        [$, Q] = i.useState(),
        [ee, et] = i.useState(null != (c = null == k ? void 0 : k.name) ? c : ""),
        [en, el] = i.useState(null != (h = null == k ? void 0 : k.regionId) ? h : ""),
        [ei, ea] = i.useState(!1),
        er = i.useRef(!1),
        es = i.useCallback(() => {
            var e, t, n;
            if ((K(void 0), null == T || null == J || "" === ee || "" === en || null == Y)) return;
            let l = J.plans.find((e) => e.id === Y);
            (0, f.g$)({
                guildId: T.id,
                productId: J.id,
                productName: J.name,
                skuId: Y,
                planName: null != (e = null == l ? void 0 : l.name) ? e : "",
                planCost: null != (t = null == l ? void 0 : l.cost) ? t : 0,
                previousPlanCost: null == U ? 0 : (null != (n = null == l ? void 0 : l.cost) ? n : 0) + W,
                region: en,
                type: null == U ? "create" : "edit",
            });
            let i = () => {
                if (er.current) return;
                (er.current = !0), ea(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), _.tq);
                });
                Promise.all([null != U ? (0, g.EY)(T.id, U.entitlementId, Y, ee) : (0, g.NE)(T.id, Y, ee, en), e])
                    .then(() => {
                        Z(),
                            (null == U ? void 0 : U.planId) !== Y &&
                                (0, b.Z)(T.id, J, null == U ? "created" : "updated");
                    })
                    .catch((e) => {
                        var t, n;
                        K(
                            null != (n = null == (t = e.body) ? void 0 : t.message)
                                ? n
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
        }, [G, T, A, Y, w, J, ee, en, Z, W, U]),
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
            guildId: I,
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
            setName: et,
            regionId: en,
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
