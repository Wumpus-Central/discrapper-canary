n.d(t, { bv: () => h, mf: () => N });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(688810),
    r = n(987144),
    d = n(71393),
    c = n(786300),
    o = n(403362),
    u = n(942975),
    m = n(864310),
    g = n(665171),
    f = n(397400),
    v = n(522055),
    x = n(494316),
    _ = n(568065),
    p = n(800007),
    j = n(294726),
    b = n(985018);
let [A, h] = (0, c.A)();
function S(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id;
}
function N(e) {
    let t,
        n,
        {
            guildId: c,
            initialGameServerInstance: h,
            initialGameServerGame: N,
            stepConfig: E = p.ZN,
            children: I,
            onClose: k,
            analyticsLocation: T,
        } = e;
    i.useEffect(() => {
        (0, g.z9)(c), (0, u.Xd)(c, !0), null == h && (0, g.cq)(c);
    }, [c, h]);
    let C = (0, s.bG)([v.A], () => v.A.getStateForGuild(c)),
        G = (0, s.bG)([d.A], () => d.A.getGuild(c)),
        { analyticsLocations: y } = (0, l.Ay)(T),
        [P, L] = i.useState(E.initialStep ?? Object.keys(E.steps)[0]),
        { available: R } = (0, m.A)(c),
        O = E.steps[P],
        [w, U] = i.useState(N?.id);
    i.useEffect(() => {
        if (null != w || h?.entitlementId == null) return;
        let e = C?.entitlements?.[h.entitlementId]?.sku?.product_id;
        null != e && U(e);
    }, [C?.entitlements, h?.entitlementId, w]);
    let [M, D] = i.useState(void 0),
        H = i.useMemo(() => {
            if (null != w) return Object.values(C?.catalog ?? {}).find((e) => e.id === w);
        }, [C?.catalog, w]),
        [V, B] = i.useState(h),
        [z, K] = i.useState(S(N) ?? h?.planId),
        W =
            ((t = (0, s.bG)([v.A], () => v.A.getStateForGuild(c)?.entitlements)),
            (n = H?.plans.find((e) => e.id === z)?.cost ?? 0),
            null == V
                ? n
                : n - (t?.[V.entitlementId]?.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price ?? 0)),
        q = i.useCallback(
            (e) => {
                B(e);
                let t = C?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                null != t && U(t), K(e?.planId), Y(e?.name ?? ""), Q(e?.regionId ?? "");
            },
            [C?.entitlements],
        ),
        J = i.useCallback(
            (e, t) => {
                q(void 0), U(e?.id), K(t ?? S(e));
            },
            [q],
        ),
        [$, F] = i.useState(),
        [X, Y] = i.useState(h?.name ?? ""),
        [Z, Q] = i.useState(h?.regionId ?? ""),
        [ee, et] = i.useState(!1),
        en = i.useRef(!1),
        ea = i.useCallback(() => {
            if ((D(void 0), null == G || null == H || "" === X || "" === Z || null == z)) return;
            let e = H.plans.find((e) => e.id === z);
            (0, f.Jh)({
                guildId: G.id,
                productId: H.id,
                productName: H.name,
                skuId: z,
                planName: e?.name ?? "",
                planCost: e?.cost ?? 0,
                previousPlanCost: null == V ? 0 : (e?.cost ?? 0) + W,
                region: Z,
                type: null == V ? "create" : "edit",
            });
            let t = () => {
                if (en.current) return;
                (en.current = !0), et(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), p.PH);
                });
                Promise.all([null != V ? (0, g.pj)(G.id, V.entitlementId, z, X) : (0, g.jL)(G.id, z, X, Z), e])
                    .then(() => {
                        k(), V?.planId !== z && (0, x.A)(G.id, H, null == V ? "created" : "updated");
                    })
                    .catch((e) => {
                        D(e.body?.message ?? b.intl.string(j.default.gvNWWr)), (en.current = !1);
                    })
                    .finally(() => {
                        et(!1);
                    });
            };
            R < W
                ? (0, r.g)({
                      analyticsLocation: T,
                      numberOfBoostsToAdd: W - R,
                      analyticsLocations: y,
                      guild: G,
                      intent: _.Pn.PERK,
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
        }, [y, G, R, z, T, H, X, Z, k, W, V]),
        ei = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        k();
                        break;
                    case "go-to-step":
                        L(e.step);
                        break;
                    case "save":
                        ea();
                }
            },
            [k, ea],
        ),
        es = i.useCallback(() => {
            null != O && ei(O.onBack);
        }, [O, ei]),
        el = i.useCallback(() => {
            null != O && ei(O.onNext);
        }, [O, ei]),
        er = i.useMemo(
            () =>
                new Set(
                    Object.values(C?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(o.Vq),
                ),
            [C?.catalog],
        );
    return (0, a.jsx)(A.Provider, {
        value: {
            guildId: c,
            step: P,
            stepAction: O,
            stepLoading: ee,
            onBack: es,
            onNext: el,
            gameServerGames: C?.catalog ?? {},
            instances: Object.values(C?.instances ?? {}),
            currentGame: H,
            setCurrentGame: J,
            gameServerInstance: V,
            setGameServerInstance: q,
            name: X,
            setName: Y,
            regionId: Z,
            setRegionId: Q,
            planCost: W,
            planId: z,
            setPlanId: K,
            footerNode: $,
            setFooterNode: F,
            availableBoostCount: R,
            error: M,
            gameProvider: er.size > 0 ? Array.from(er)[0] : null,
        },
        children: I,
    });
}
