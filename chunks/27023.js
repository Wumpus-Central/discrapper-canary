n.d(t, { bv: () => S, mf: () => C });
var a = n(627968),
    l = n(64700),
    s = n(311907),
    i = n(688810),
    r = n(987144),
    d = n(71393),
    o = n(786300),
    c = n(403362),
    u = n(942975),
    m = n(864310),
    x = n(410212),
    v = n(665171),
    g = n(397400),
    f = n(522055),
    b = n(494316),
    j = n(568065),
    p = n(800007),
    h = n(294726),
    N = n(985018);
let [A, S] = (0, o.A)();
function I(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id;
}
function C(e) {
    let t,
        n,
        {
            guildId: o,
            initialGameServerInstance: S,
            initialGameServerGame: C,
            stepConfig: k = p.ZN,
            children: T,
            onClose: y,
            analyticsLocation: G,
        } = e;
    l.useEffect(() => {
        (0, v.z9)(o), (0, u.Xd)(o, !0), null == S && (0, v.cq)(o);
    }, [o, S]);
    let L = (0, s.bG)([f.A], () => f.A.getStateForGuild(o)),
        P = (0, s.bG)([d.A], () => d.A.getGuild(o)),
        { analyticsLocations: _ } = (0, i.Ay)(G),
        [U, O] = l.useState(k.initialStep ?? Object.keys(k.steps)[0]),
        { available: E } = (0, m.A)(o),
        w = k.steps[U],
        [B, D] = l.useState(C?.id);
    l.useEffect(() => {
        if (null != B || S?.entitlementId == null) return;
        let e = L?.entitlements?.[S.entitlementId]?.sku?.product_id;
        null != e && D(e);
    }, [L?.entitlements, S?.entitlementId, B]);
    let [H, M] = l.useState(void 0),
        R = l.useMemo(() => {
            if (null != B) return Object.values(L?.catalog ?? {}).find((e) => e.id === B);
        }, [L?.catalog, B]),
        [z, W] = l.useState(S),
        [q, K] = l.useState(I(C) ?? S?.planId),
        $ =
            ((t = (0, s.bG)([f.A], () => f.A.getStateForGuild(o)?.entitlements)),
            (n = R?.plans.find((e) => e.id === q)?.cost ?? 0),
            null == z ? n : n - ((0, x.A)(t?.[z.entitlementId]) ?? 0)),
        F = l.useCallback(
            (e) => {
                W(e);
                let t = L?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                null != t && D(t), K(e?.planId), Z(e?.name ?? ""), ee(e?.regionId ?? "");
            },
            [L?.entitlements],
        ),
        J = l.useCallback(
            (e, t) => {
                F(void 0), D(e?.id), K(t ?? I(e));
            },
            [F],
        ),
        [V, X] = l.useState(),
        [Y, Z] = l.useState(S?.name ?? ""),
        [Q, ee] = l.useState(S?.regionId ?? ""),
        [et, en] = l.useState(!1),
        ea = l.useRef(!1),
        el = l.useCallback(() => {
            if ((M(void 0), null == P || null == R || "" === Y || "" === Q || null == q)) return;
            let e = R.plans.find((e) => e.id === q);
            (0, g.Jh)({
                guildId: P.id,
                productId: R.id,
                productName: R.name,
                skuId: q,
                planName: e?.name ?? "",
                planCost: e?.cost ?? 0,
                previousPlanCost: null == z ? 0 : (e?.cost ?? 0) + $,
                region: Q,
                type: null == z ? "create" : "edit",
            });
            let t = () => {
                if (ea.current) return;
                (ea.current = !0), en(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), p.PH);
                });
                Promise.all([null != z ? (0, v.pj)(P.id, z.entitlementId, q, Y) : (0, v.jL)(P.id, q, Y, Q), e])
                    .then(() => {
                        y(), z?.planId !== q && (0, b.A)(P.id, R, null == z ? "created" : "updated");
                    })
                    .catch((e) => {
                        M(e.body?.message ?? N.intl.string(h.default.gvNWWr)), (ea.current = !1);
                    })
                    .finally(() => {
                        en(!1);
                    });
            };
            E < $
                ? (0, r.g)({
                      analyticsLocation: G,
                      numberOfBoostsToAdd: $ - E,
                      analyticsLocations: _,
                      guild: P,
                      intent: j.Pn.PERK,
                      onLoading: (e) => {
                          en(e);
                      },
                      onSubscribeComplete: () => {
                          t();
                      },
                      handleSubscribeModalClose: (e) => {
                          e && t();
                      },
                  })
                : t();
        }, [_, P, E, q, G, R, Y, Q, y, $, z]),
        es = l.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        y();
                        break;
                    case "go-to-step":
                        O(e.step);
                        break;
                    case "save":
                        el();
                }
            },
            [y, el],
        ),
        ei = l.useCallback(() => {
            null != w && es(w.onBack);
        }, [w, es]),
        er = l.useCallback(() => {
            null != w && es(w.onNext);
        }, [w, es]),
        ed = l.useMemo(
            () =>
                new Set(
                    Object.values(L?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(c.Vq),
                ),
            [L?.catalog],
        );
    return (0, a.jsx)(A.Provider, {
        value: {
            guildId: o,
            step: U,
            stepAction: w,
            stepLoading: et,
            onBack: ei,
            onNext: er,
            gameServerGames: L?.catalog ?? {},
            instances: Object.values(L?.instances ?? {}),
            currentGame: R,
            setCurrentGame: J,
            gameServerInstance: z,
            setGameServerInstance: F,
            name: Y,
            setName: Z,
            regionId: Q,
            setRegionId: ee,
            planCost: $,
            planId: q,
            setPlanId: K,
            footerNode: V,
            setFooterNode: X,
            availableBoostCount: E,
            error: H,
            gameProvider: ed.size > 0 ? Array.from(ed)[0] : null,
        },
        children: T,
    });
}
