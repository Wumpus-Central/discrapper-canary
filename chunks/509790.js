l.d(t, { mf: () => C, bv: () => A });
var s = l(627968),
    a = l(64700),
    n = l(17928),
    i = l(688810),
    r = l(987144),
    d = l(71393),
    c = l(786300),
    o = l(403362),
    u = l(942975),
    m = l(864310),
    v = l(410212),
    x = l(665171),
    g = l(397400),
    f = l(522055),
    j = l(192308),
    h = l(568065),
    b = l(800007),
    p = l(576709),
    N = l(985018);
let [I, A] = (0, c.A)();
function S(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id;
}
function C(e) {
    let t,
        c,
        {
            guildId: A,
            initialGameServerInstance: C,
            initialGameServerGame: k,
            stepConfig: y = b.ZN,
            children: T,
            onClose: E,
            analyticsLocation: G,
        } = e;
    a.useEffect(() => {
        (0, x.z9)(A), (0, u.Xd)(A, !0), null == C && (0, x.cq)(A);
    }, [A, C]);
    let L = (0, n.bG)([f.A], () => f.A.getStateForGuild(A)),
        P = (0, n.bG)([d.A], () => d.A.getGuild(A)),
        { analyticsLocations: _ } = (0, i.Ay)(G),
        [w, D] = a.useState(y.initialStep ?? Object.keys(y.steps)[0]),
        { available: O } = (0, m.A)(A),
        M = y.steps[w],
        [U, B] = a.useState(k?.id);
    a.useEffect(() => {
        if (null != U || C?.entitlementId == null) return;
        let e = L?.entitlements?.[C.entitlementId]?.sku?.product_id;
        null != e && B(e);
    }, [L?.entitlements, C?.entitlementId, U]);
    let [Z, z] = a.useState(void 0),
        $ = a.useMemo(() => {
            if (null != U) return Object.values(L?.catalog ?? {}).find((e) => e.id === U);
        }, [L?.catalog, U]),
        [R, W] = a.useState(C),
        [K, q] = a.useState(S(k) ?? C?.planId),
        F =
            ((t = (0, n.bG)([f.A], () => f.A.getStateForGuild(A)?.entitlements)),
            (c = $?.plans.find((e) => e.id === K)?.cost ?? 0),
            null == R ? c : c - ((0, v.A)(t?.[R.entitlementId]) ?? 0)),
        H = a.useCallback(
            (e) => {
                W(e);
                let t = L?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                null != t && B(t), q(e?.planId), Y(e?.name ?? ""), et(e?.regionId ?? "");
            },
            [L?.entitlements],
        ),
        V = a.useCallback(
            (e, t) => {
                H(void 0), B(e?.id), q(t ?? S(e));
            },
            [H],
        ),
        [J, Q] = a.useState(),
        [X, Y] = a.useState(C?.name ?? ""),
        [ee, et] = a.useState(C?.regionId ?? ""),
        [el, es] = a.useState(!1),
        ea = a.useRef(!1),
        en = a.useCallback(() => {
            if ((z(void 0), null == P || null == $ || "" === X || "" === ee || null == K)) return;
            let e = $.plans.find((e) => e.id === K);
            (0, g.Jh)({
                guildId: P.id,
                productId: $.id,
                productName: $.name,
                skuId: K,
                planName: e?.name ?? "",
                planCost: e?.cost ?? 0,
                previousPlanCost: null == R ? 0 : (e?.cost ?? 0) + F,
                region: ee,
                type: null == R ? "create" : "edit",
            });
            let t = () => {
                if (ea.current) return;
                (ea.current = !0), es(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), b.PH);
                });
                Promise.all([null != R ? (0, x.pj)(P.id, R.entitlementId, K, X) : (0, x.jL)(P.id, K, X, ee), e])
                    .then(() => {
                        var e, t;
                        E(),
                            R?.planId !== K &&
                                ((e = P.id),
                                (t = null == R ? "created" : "updated"),
                                (0, j.openModalLazy)(async () => {
                                    let { default: a } = await l.e("27188").then(l.bind(l, 796415));
                                    return (l) => (0, s.jsx)(a, { gameServerGame: $, guildId: e, status: t, ...l });
                                }));
                    })
                    .catch((e) => {
                        z(e.body?.message ?? N.intl.string(p.default.gvNWWr)), (ea.current = !1);
                    })
                    .finally(() => {
                        es(!1);
                    });
            };
            O < F
                ? (0, r.g)({
                      analyticsLocation: G,
                      numberOfBoostsToAdd: F - O,
                      analyticsLocations: _,
                      guild: P,
                      intent: h.Pn.PERK,
                      onLoading: (e) => {
                          es(e);
                      },
                      onSubscribeComplete: () => {
                          t();
                      },
                      handleSubscribeModalClose: (e) => {
                          e && t();
                      },
                  })
                : t();
        }, [_, P, O, K, G, $, X, ee, E, F, R]),
        ei = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        E();
                        break;
                    case "go-to-step":
                        D(e.step);
                        break;
                    case "save":
                        en();
                }
            },
            [E, en],
        ),
        er = a.useCallback(() => {
            null != M && ei(M.onBack);
        }, [M, ei]),
        ed = a.useCallback(() => {
            null != M && ei(M.onNext);
        }, [M, ei]),
        ec = a.useMemo(
            () =>
                new Set(
                    Object.values(L?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(o.Vq),
                ),
            [L?.catalog],
        );
    return (0, s.jsx)(I.Provider, {
        value: {
            guildId: A,
            step: w,
            stepAction: M,
            stepLoading: el,
            onBack: er,
            onNext: ed,
            gameServerGames: L?.catalog ?? {},
            instances: Object.values(L?.instances ?? {}),
            currentGame: $,
            setCurrentGame: V,
            gameServerInstance: R,
            setGameServerInstance: H,
            name: X,
            setName: Y,
            regionId: ee,
            setRegionId: et,
            planCost: F,
            planId: K,
            setPlanId: q,
            footerNode: J,
            setFooterNode: Q,
            availableBoostCount: O,
            error: Z,
            gameProvider: ec.size > 0 ? Array.from(ec)[0] : null,
        },
        children: T,
    });
}
