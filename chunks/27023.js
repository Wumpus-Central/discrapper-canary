n.d(t, { bv: () => E, mf: () => S });
var a = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(688810),
    r = n(987144),
    d = n(71393),
    u = n(786300),
    c = n(403362),
    o = n(942975),
    m = n(864310),
    g = n(665171),
    f = n(397400),
    _ = n(522055),
    v = n(494316),
    p = n(568065),
    x = n(800007),
    b = n(294726),
    j = n(985018);
let [A, E] = (0, u.A)();
function h(e) {
    return e?.plans[Math.floor((e?.plans.length - 1) / 2)]?.id;
}
function S(e) {
    let t,
        n,
        {
            guildId: u,
            initialGameServerInstance: E,
            initialGameServerGame: S,
            stepConfig: I = x.ZN,
            children: k,
            onClose: N,
            analyticsLocation: C,
        } = e;
    i.useEffect(() => {
        (0, g.z9)(u), (0, o.Xd)(u, !0), null == E && (0, g.cq)(u);
    }, [u, E]);
    let G = (0, l.bG)([_.A], () => _.A.getStateForGuild(u)),
        y = (0, l.bG)([d.A], () => d.A.getGuild(u)),
        { analyticsLocations: T } = (0, s.Ay)(C),
        [P, R] = i.useState(I.initialStep ?? Object.keys(I.steps)[0]),
        { available: O } = (0, m.A)(u),
        M = I.steps[P],
        [w, L] = i.useState(S?.id);
    i.useEffect(() => {
        if (null != w || E?.entitlementId == null) return;
        let e = G?.entitlements?.[E.entitlementId]?.sku?.product_id;
        null != e && L(e);
    }, [G?.entitlements, E?.entitlementId, w]);
    let [H, D] = i.useState(void 0),
        U = i.useMemo(() => {
            if (null != w) return Object.values(G?.catalog ?? {}).find((e) => e.id === w);
        }, [G?.catalog, w]),
        [V, B] = i.useState(E),
        [K, z] = i.useState(h(S) ?? E?.planId),
        J =
            ((t = (0, l.bG)([_.A], () => _.A.getStateForGuild(u)?.entitlements)),
            (n = U?.plans.find((e) => e.id === K)?.cost ?? 0),
            null == V
                ? n
                : n - (t?.[V.entitlementId]?.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price ?? 0)),
        F = i.useCallback(
            (e) => {
                B(e);
                let t = G?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                null != t && L(t), z(e?.planId), Y(e?.name ?? ""), Q(e?.regionId ?? "");
            },
            [G?.entitlements],
        ),
        W = i.useCallback(
            (e, t) => {
                F(void 0), L(e?.id), z(t ?? h(e));
            },
            [F],
        ),
        [$, q] = i.useState(),
        [X, Y] = i.useState(E?.name ?? ""),
        [Z, Q] = i.useState(E?.regionId ?? ""),
        [ee, et] = i.useState(!1),
        en = i.useRef(!1),
        ea = i.useCallback(() => {
            if ((D(void 0), null == y || null == U || "" === X || "" === Z || null == K)) return;
            let e = U.plans.find((e) => e.id === K);
            (0, f.Jh)({
                guildId: y.id,
                productId: U.id,
                productName: U.name,
                skuId: K,
                planName: e?.name ?? "",
                planCost: e?.cost ?? 0,
                previousPlanCost: null == V ? 0 : (e?.cost ?? 0) + J,
                region: Z,
                type: null == V ? "create" : "edit",
            });
            let t = () => {
                if (en.current) return;
                (en.current = !0), et(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), x.PH);
                });
                Promise.all([null != V ? (0, g.pj)(y.id, V.entitlementId, K, X) : (0, g.jL)(y.id, K, X, Z), e])
                    .then(() => {
                        N(), V?.planId !== K && (0, v.A)(y.id, U, null == V ? "created" : "updated");
                    })
                    .catch((e) => {
                        D(e.body?.message ?? j.intl.string(b.default.gvNWWr)), (en.current = !1);
                    })
                    .finally(() => {
                        et(!1);
                    });
            };
            O < J
                ? (0, r.g)({
                      analyticsLocation: C,
                      numberOfBoostsToAdd: J - O,
                      analyticsLocations: T,
                      guild: y,
                      intent: p.Pn.PERK,
                      onLoading: (e) => {
                          et(e);
                      },
                      onSubscribeComplete: () => {
                          t();
                      },
                      handleSubscribeModalClose: (e) => {
                          e && t();
                      },
                  })
                : t();
        }, [T, y, O, K, C, U, X, Z, N, J, V]),
        ei = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        N();
                        break;
                    case "go-to-step":
                        R(e.step);
                        break;
                    case "save":
                        ea();
                }
            },
            [N, ea],
        ),
        el = i.useCallback(() => {
            null != M && ei(M.onBack);
        }, [M, ei]),
        es = i.useCallback(() => {
            null != M && ei(M.onNext);
        }, [M, ei]),
        er = i.useMemo(
            () =>
                new Set(
                    Object.values(G?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(c.Vq),
                ),
            [G?.catalog],
        );
    return (0, a.jsx)(A.Provider, {
        value: {
            guildId: u,
            step: P,
            stepAction: M,
            stepLoading: ee,
            onBack: el,
            onNext: es,
            gameServerGames: G?.catalog ?? {},
            instances: Object.values(G?.instances ?? {}),
            currentGame: U,
            setCurrentGame: W,
            gameServerInstance: V,
            setGameServerInstance: F,
            name: X,
            setName: Y,
            regionId: Z,
            setRegionId: Q,
            planCost: J,
            planId: K,
            setPlanId: z,
            footerNode: $,
            setFooterNode: q,
            availableBoostCount: O,
            error: H,
            gameProvider: er.size > 0 ? Array.from(er)[0] : null,
        },
        children: k,
    });
}
