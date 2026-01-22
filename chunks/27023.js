n.d(t, {
    bv: () => h,
    mf: () => A,
}),
    n(896048),
    n(492834);
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(688810),
    s = n(987144),
    u = n(71393),
    o = n(786300),
    d = n(403362),
    c = n(942975),
    m = n(864310),
    v = n(665171),
    f = n(397400),
    g = n(522055),
    b = n(494316),
    p = n(568065),
    _ = n(800007),
    j = n(294726),
    x = n(985018);
let [E, h] = (0, o.A)();

function y(e) {
    var t;
    return null == e || null == (t = e.plans[Math.floor(((null == e ? void 0 : e.plans.length) - 1) / 2)])
        ? void 0
        : t.id;
}

function A(e) {
    var t, n, o, h, A, S, O, k, I, N, P, C, w, G;
    let T,
        R,
        {
            guildId: M,
            initialGameServerInstance: D,
            initialGameServerGame: L,
            stepConfig: H = _.ZN,
            children: U,
            onClose: V,
            analyticsLocation: B,
        } = e;
    i.useEffect(() => {
        (0, v.z9)(M), (0, c.Xd)(M, !0), null == D && (0, v.cq)(M);
    }, [M, D]);
    let K = (0, a.bG)([g.A], () => g.A.getStateForGuild(M)),
        z = (0, a.bG)([u.A], () => u.A.getGuild(M)),
        { analyticsLocations: J } = (0, r.Ay)(B),
        [F, W] = i.useState(null != (t = H.initialStep) ? t : Object.keys(H.steps)[0]),
        { available: q } = (0, m.A)(M),
        X = H.steps[F],
        [Y, Z] = i.useState(null == L ? void 0 : L.id);
    i.useEffect(() => {
        var e, t, n;
        if (null != Y || (null == D ? void 0 : D.entitlementId) == null) return;
        let l =
            null == K || null == (n = K.entitlements) || null == (t = n[D.entitlementId]) || null == (e = t.sku)
                ? void 0
                : e.product_id;
        null != l && Z(l);
    }, [null == K ? void 0 : K.entitlements, null == D ? void 0 : D.entitlementId, Y]);
    let [Q, $] = i.useState(void 0),
        ee = i.useMemo(() => {
            var e;
            if (null != Y)
                return Object.values(null != (e = null == K ? void 0 : K.catalog) ? e : {}).find((e) => e.id === Y);
        }, [null == K ? void 0 : K.catalog, Y]),
        [et, en] = i.useState(D),
        [el, ei] = i.useState(null != (n = y(L)) ? n : null == D ? void 0 : D.planId),
        ea =
            ((T = (0, a.bG)([g.A], () => {
                var e;
                return null == (e = g.A.getStateForGuild(M)) ? void 0 : e.entitlements;
            })),
            (R = null != (O = null == ee || null == (I = ee.plans.find((e) => e.id === el)) ? void 0 : I.cost) ? O : 0),
            null == et
                ? R
                : R -
                  (null !=
                  (k =
                      null == T ||
                      null == (G = T[et.entitlementId]) ||
                      null == (w = G.sku) ||
                      null == (C = w.tenant_metadata) ||
                      null == (P = C.guild_monetization) ||
                      null == (N = P.game_server)
                          ? void 0
                          : N.boost_price)
                      ? k
                      : 0)),
        er = i.useCallback(
            (e) => {
                var t, n, l, i, a, r;
                en(e);
                let s =
                    null == K ||
                    null == (r = K.entitlements) ||
                    null == (a = r[null != (t = null == e ? void 0 : e.entitlementId) ? t : ""]) ||
                    null == (i = a.sku)
                        ? void 0
                        : i.product_id;
                null != s && Z(s),
                    ei(null == e ? void 0 : e.planId),
                    ec(null != (n = null == e ? void 0 : e.name) ? n : ""),
                    ev(null != (l = null == e ? void 0 : e.regionId) ? l : "");
            },
            [null == K ? void 0 : K.entitlements],
        ),
        es = i.useCallback(
            (e, t) => {
                er(void 0), Z(null == e ? void 0 : e.id), ei(null != t ? t : y(e));
            },
            [er],
        ),
        [eu, eo] = i.useState(),
        [ed, ec] = i.useState(null != (o = null == D ? void 0 : D.name) ? o : ""),
        [em, ev] = i.useState(null != (h = null == D ? void 0 : D.regionId) ? h : ""),
        [ef, eg] = i.useState(!1),
        eb = i.useRef(!1),
        ep = i.useCallback(() => {
            var e, t, n;
            if (($(void 0), null == z || null == ee || "" === ed || "" === em || null == el)) return;
            let l = ee.plans.find((e) => e.id === el);
            (0, f.Jh)({
                guildId: z.id,
                productId: ee.id,
                productName: ee.name,
                skuId: el,
                planName: null != (e = null == l ? void 0 : l.name) ? e : "",
                planCost: null != (t = null == l ? void 0 : l.cost) ? t : 0,
                previousPlanCost: null == et ? 0 : (null != (n = null == l ? void 0 : l.cost) ? n : 0) + ea,
                region: em,
                type: null == et ? "create" : "edit",
            });
            let i = () => {
                if (eb.current) return;
                (eb.current = !0), eg(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), _.PH);
                });
                Promise.all([null != et ? (0, v.pj)(z.id, et.entitlementId, el, ed) : (0, v.jL)(z.id, el, ed, em), e])
                    .then(() => {
                        V(),
                            (null == et ? void 0 : et.planId) !== el &&
                                (0, b.A)(z.id, ee, null == et ? "created" : "updated");
                    })
                    .catch((e) => {
                        var t, n;
                        $(
                            null != (t = null == (n = e.body) ? void 0 : n.message)
                                ? t
                                : x.intl.string(j.default.gvNWWr),
                        ),
                            (eb.current = !1);
                    })
                    .finally(() => {
                        eg(!1);
                    });
            };
            q < ea
                ? (0, s.g)({
                      analyticsLocation: B,
                      numberOfBoostsToAdd: ea - q,
                      analyticsLocations: J,
                      guild: z,
                      intent: p.Pn.PERK,
                      onLoading: (e) => {
                          eg(e);
                      },
                      onSubscribeComplete: () => {
                          i();
                      },
                      handleSubscribeModalClose: (e) => {
                          e && i();
                      },
                  })
                : i();
        }, [J, z, q, el, B, ee, ed, em, V, ea, et]),
        e_ = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        V();
                        break;
                    case "go-to-step":
                        W(e.step);
                        break;
                    case "save":
                        ep();
                }
            },
            [V, ep],
        ),
        ej = i.useCallback(() => {
            null != X && e_(X.onBack);
        }, [X, e_]),
        ex = i.useCallback(() => {
            null != X && e_(X.onNext);
        }, [X, e_]),
        eE = i.useMemo(() => {
            var e;
            return new Set(
                Object.values(null != (e = null == K ? void 0 : K.catalog) ? e : {})
                    .map((e) => e.provider)
                    .filter(d.Vq),
            );
        }, [null == K ? void 0 : K.catalog]);
    return (0, l.jsx)(E.Provider, {
        value: {
            guildId: M,
            step: F,
            stepAction: X,
            stepLoading: ef,
            onBack: ej,
            onNext: ex,
            gameServerGames: null != (A = null == K ? void 0 : K.catalog) ? A : {},
            instances: Object.values(null != (S = null == K ? void 0 : K.instances) ? S : {}),
            currentGame: ee,
            setCurrentGame: es,
            gameServerInstance: et,
            setGameServerInstance: er,
            name: ed,
            setName: ec,
            regionId: em,
            setRegionId: ev,
            planCost: ea,
            planId: el,
            setPlanId: ei,
            footerNode: eu,
            setFooterNode: eo,
            availableBoostCount: q,
            error: Q,
            gameProvider: eE.size > 0 ? Array.from(eE)[0] : null,
        },
        children: U,
    });
}
