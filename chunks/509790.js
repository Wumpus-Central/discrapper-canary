n.d(t, { mf: () => N, bv: () => k });
var l = n(627968),
    a = n(64700),
    s = n(17928),
    i = n(688810),
    r = n(987144),
    d = n(71393),
    o = n(786300),
    c = n(403362),
    u = n(868652),
    m = n(864310),
    v = n(410212),
    g = n(396748),
    b = n(397400),
    x = n(522055),
    f = n(192308),
    j = n(568065),
    p = n(800007),
    h = n(576709),
    C = n(375708);
let [I, k] = (0, o.A)();
function S(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id;
}
function N(e) {
    let t,
        o,
        {
            guildId: k,
            initialGameServerInstance: N,
            initialGameServerGame: A,
            stepConfig: y = p.ZN,
            children: P,
            onClose: T,
            analyticsLocation: G,
        } = e;
    a.useEffect(() => {
        (0, g.z9)(k), (0, u.Xd)(k, !0), null == N && (0, g.cq)(k);
    }, [k, N]);
    let E = (0, s.bG)([x.A], () => x.A.getStateForGuild(k)),
        L = (0, s.bG)([d.A], () => d.A.getGuild(k)),
        { analyticsLocations: _ } = (0, i.Ay)(G),
        [O, D] = a.useState(y.initialStep ?? Object.keys(y.steps)[0]),
        { available: w } = (0, m.A)(k),
        B = y.steps[O],
        [U, $] = a.useState(A?.id);
    a.useEffect(() => {
        if (null != U || N?.entitlementId == null) return;
        let e = E?.entitlements?.[N.entitlementId]?.sku?.product_id;
        null != e && $(e);
    }, [E?.entitlements, N?.entitlementId, U]);
    let [z, M] = a.useState(void 0),
        K = a.useMemo(() => {
            if (null != U) return Object.values(E?.catalog ?? {}).find((e) => e.id === U);
        }, [E?.catalog, U]),
        [F, W] = a.useState(N),
        [q, H] = a.useState(S(A) ?? N?.planId),
        R =
            ((t = (0, s.bG)([x.A], () => x.A.getStateForGuild(k)?.entitlements)),
            (o = K?.plans.find((e) => e.id === q)?.cost ?? 0),
            null == F ? o : o - ((0, v.A)(t?.[F.entitlementId]) ?? 0)),
        Z = a.useCallback(
            (e) => {
                W(e);
                let t = E?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                null != t && $(t), H(e?.planId), Y(e?.name ?? ""), et(e?.regionId ?? "");
            },
            [E?.entitlements],
        ),
        X = a.useCallback(
            (e, t) => {
                Z(void 0), $(e?.id), H(t ?? S(e));
            },
            [Z],
        ),
        [J, Q] = a.useState(),
        [V, Y] = a.useState(N?.name ?? ""),
        [ee, et] = a.useState(N?.regionId ?? ""),
        [en, el] = a.useState(!1),
        ea = a.useRef(!1),
        es = a.useCallback(() => {
            if ((M(void 0), null == L || null == K || "" === V || "" === ee || null == q)) return;
            let e = K.plans.find((e) => e.id === q);
            (0, b.Jh)({
                guildId: L.id,
                productId: K.id,
                productName: K.name,
                skuId: q,
                planName: e?.name ?? "",
                planCost: e?.cost ?? 0,
                previousPlanCost: null == F ? 0 : (e?.cost ?? 0) + R,
                region: ee,
                type: null == F ? "create" : "edit",
            });
            let t = () => {
                if (ea.current) return;
                (ea.current = !0), el(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), p.PH);
                });
                Promise.all([null != F ? (0, g.pj)(L.id, F.entitlementId, q, V) : (0, g.jL)(L.id, q, V, ee), e])
                    .then(() => {
                        var e, t;
                        T(),
                            F?.planId !== q &&
                                ((e = L.id),
                                (t = null == F ? "created" : "updated"),
                                (0, f.openModalLazy)(async () => {
                                    let { default: a } = await Promise.all([
                                        n.e("31920"),
                                        n.e("96892"),
                                        n.e("64827"),
                                        n.e("84569"),
                                        n.e("22455"),
                                        n.e("957"),
                                        n.e("24107"),
                                        n.e("27188"),
                                    ]).then(n.bind(n, 796415));
                                    return (n) => (0, l.jsx)(a, { gameServerGame: K, guildId: e, status: t, ...n });
                                }));
                    })
                    .catch((e) => {
                        M(e.body?.message ?? C.intl.string(h.default.gvNWWr)), (ea.current = !1);
                    })
                    .finally(() => {
                        el(!1);
                    });
            };
            w < R
                ? (0, r.g)({
                      analyticsLocation: G,
                      numberOfBoostsToAdd: R - w,
                      analyticsLocations: _,
                      guild: L,
                      intent: j.Pn.PERK,
                      onLoading: (e) => {
                          el(e);
                      },
                      onSubscribeComplete: () => {
                          t();
                      },
                      handleSubscribeModalClose: (e) => {
                          e && t();
                      },
                  })
                : t();
        }, [_, L, w, q, G, K, V, ee, T, R, F]),
        ei = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        T();
                        break;
                    case "go-to-step":
                        D(e.step);
                        break;
                    case "save":
                        es();
                }
            },
            [T, es],
        ),
        er = a.useCallback(() => {
            null != B && ei(B.onBack);
        }, [B, ei]),
        ed = a.useCallback(() => {
            null != B && ei(B.onNext);
        }, [B, ei]),
        eo = a.useMemo(
            () =>
                new Set(
                    Object.values(E?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(c.Vq),
                ),
            [E?.catalog],
        );
    return (0, l.jsx)(I.Provider, {
        value: {
            guildId: k,
            step: O,
            stepAction: B,
            stepLoading: en,
            onBack: er,
            onNext: ed,
            gameServerGames: E?.catalog ?? {},
            instances: Object.values(E?.instances ?? {}),
            currentGame: K,
            setCurrentGame: X,
            gameServerInstance: F,
            setGameServerInstance: Z,
            name: V,
            setName: Y,
            regionId: ee,
            setRegionId: et,
            planCost: R,
            planId: q,
            setPlanId: H,
            footerNode: J,
            setFooterNode: Q,
            availableBoostCount: w,
            error: z,
            gameProvider: eo.size > 0 ? Array.from(eo)[0] : null,
        },
        children: P,
    });
}
