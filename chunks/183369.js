n.d(t, {
    KO: () => x,
    aj: () => j,
}),
    n(388685),
    n(457542);
var l = n(951288),
    a = n(647438),
    i = n(442837),
    r = n(906732),
    s = n(879892),
    o = n(343649),
    c = n(430824),
    u = n(975104),
    d = n(713081),
    m = n(279604),
    v = n(744993),
    g = n(693587),
    f = n(741252),
    b = n(473682);
let [p, j] = (0, u.Z)();
function x(e) {
    var t, n, u, j, x, y, O;
    let {
        guildId: h,
        initialPortkeyInstance: P,
        initialPortkeyGame: k,
        stepConfig: S = b.T9,
        children: I,
        onClose: w,
        analyticsLocation: C,
    } = e;
    a.useEffect(() => {
        (0, v.po)(h), (0, d.BN)(h, !0), null == P && (0, v.EC)(h);
    }, [h, P]);
    let N = (0, i.e7)([g.Z], () => g.Z.getStateForGuild(h)),
        Z = (0, i.e7)([c.Z], () => c.Z.getGuild(h)),
        { analyticsLocations: T } = (0, r.ZP)(C),
        [_, E] = a.useState(null != (n = S.initialStep) ? n : Object.keys(S.steps)[0]),
        D = (0, m.Td)(h, void 0),
        z = S.steps[_],
        [B, G] = a.useState(null == k ? void 0 : k.id);
    a.useEffect(() => {
        var e, t, n;
        if (null != B || (null == P ? void 0 : P.entitlementId) == null) return;
        let l =
            null == N || null == (n = N.entitlements) || null == (t = n[P.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && G(l);
    }, [null == N ? void 0 : N.entitlements, null == P ? void 0 : P.entitlementId, B]);
    let [F, L] = a.useState(void 0),
        M = a.useMemo(() => {
            var e;
            if (null != B)
                return Object.values(null != (e = null == N ? void 0 : N.catalog) ? e : {}).find((e) => e.id === B);
        }, [null == N ? void 0 : N.catalog, B]),
        [R, K] = a.useState(P),
        [A, V] = a.useState(
            null != (u = null == k || null == (t = k.plans[0]) ? void 0 : t.id) ? u : null == P ? void 0 : P.planId,
        ),
        Y = (function (e, t, n, l) {
            var a, r, s, o, c, u, d, m;
            let v = (0, i.e7)([g.Z], () => {
                    var t;
                    return null == (t = g.Z.getStateForGuild(e)) ? void 0 : t.entitlements;
                }),
                f = null != (d = null == t || null == (a = t.plans.find((e) => e.id === n)) ? void 0 : a.cost) ? d : 0;
            return null == l
                ? f
                : f -
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
        })(h, M, A, R),
        q = a.useCallback((e, t) => {
            var n;
            G(null == e ? void 0 : e.id), V(null != t ? t : null == e || null == (n = e.plans[0]) ? void 0 : n.id);
        }, []),
        U = a.useCallback(
            (e) => {
                var t, n, l;
                K(e);
                let a =
                    null == N || null == (l = N.entitlements) || null == (n = l[e.entitlementId]) || null == (t = n.sku)
                        ? void 0
                        : t.product_id;
                null != a && G(a), V(e.planId), J(e.name), W(e.regionId);
            },
            [null == N ? void 0 : N.entitlements],
        ),
        [X, H] = a.useState(),
        [$, J] = a.useState(null != (j = null == P ? void 0 : P.name) ? j : ""),
        [Q, W] = a.useState(null != (x = null == P ? void 0 : P.regionId) ? x : ""),
        [ee, et] = a.useState(!1),
        en = a.useCallback(() => {
            if ((L(void 0), null == Z || null == M || "" === $ || "" === Q || null == A)) return;
            let e = () => {
                et(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), b.cF);
                });
                Promise.all([null != R ? (0, v.EY)(Z.id, R.entitlementId, A, $) : (0, v.NE)(Z.id, A, $, Q), e])
                    .then(() => {
                        w(),
                            (null == R ? void 0 : R.planId) !== A &&
                                (0, f.Z)(Z.id, M, null == R ? "created" : "updated");
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
                      analyticsLocation: C,
                      numberOfBoostsToAdd: Y - D,
                      analyticsLocations: T,
                      guild: Z,
                      intent: o.P.PERK,
                      onLoading: (e) => {
                          et(e);
                      },
                      onSubscribeComplete: e,
                  })
                : e();
        }, [T, Z, D, A, C, M, $, Q, w, Y, R]),
        el = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        w();
                        break;
                    case "go-to-step":
                        E(e.step);
                        break;
                    case "save":
                        en();
                }
            },
            [w, en],
        ),
        ea = a.useCallback(() => {
            null != z && el(z.onBack);
        }, [z, el]),
        ei = a.useCallback(() => {
            null != z && el(z.onNext);
        }, [z, el]);
    return (0, l.jsx)(p.Provider, {
        value: {
            guildId: h,
            step: _,
            stepAction: z,
            stepLoading: ee,
            onBack: ea,
            onNext: ei,
            portkeyGames: null != (y = null == N ? void 0 : N.catalog) ? y : {},
            instances: Object.values(null != (O = null == N ? void 0 : N.instances) ? O : {}),
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
        children: I,
    });
}
