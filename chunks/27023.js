l.d(t, { bv: () => I, mf: () => C });
var n = l(627968),
    a = l(64700),
    s = l(311907),
    i = l(688810),
    r = l(987144),
    d = l(71393),
    o = l(786300),
    c = l(403362),
    u = l(942975),
    m = l(864310),
    v = l(410212),
    x = l(665171),
    g = l(397400),
    f = l(522055),
    j = l(494316),
    h = l(568065),
    b = l(800007),
    p = l(76660),
    N = l(985018);
let [A, I] = (0, o.A)();
function S(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id;
}
function C(e) {
    let t,
        l,
        {
            guildId: o,
            initialGameServerInstance: I,
            initialGameServerGame: C,
            stepConfig: k = b.ZN,
            children: y,
            onClose: T,
            analyticsLocation: E,
        } = e;
    a.useEffect(() => {
        (0, x.z9)(o), (0, u.Xd)(o, !0), null == I && (0, x.cq)(o);
    }, [o, I]);
    let G = (0, s.bG)([f.A], () => f.A.getStateForGuild(o)),
        L = (0, s.bG)([d.A], () => d.A.getGuild(o)),
        { analyticsLocations: P } = (0, i.Ay)(E),
        [_, w] = a.useState(k.initialStep ?? Object.keys(k.steps)[0]),
        { available: D } = (0, m.A)(o),
        O = k.steps[_],
        [M, U] = a.useState(C?.id);
    a.useEffect(() => {
        if (null != M || I?.entitlementId == null) return;
        let e = G?.entitlements?.[I.entitlementId]?.sku?.product_id;
        null != e && U(e);
    }, [G?.entitlements, I?.entitlementId, M]);
    let [B, Z] = a.useState(void 0),
        z = a.useMemo(() => {
            if (null != M) return Object.values(G?.catalog ?? {}).find((e) => e.id === M);
        }, [G?.catalog, M]),
        [$, R] = a.useState(I),
        [W, K] = a.useState(S(C) ?? I?.planId),
        q =
            ((t = (0, s.bG)([f.A], () => f.A.getStateForGuild(o)?.entitlements)),
            (l = z?.plans.find((e) => e.id === W)?.cost ?? 0),
            null == $ ? l : l - ((0, v.A)(t?.[$.entitlementId]) ?? 0)),
        F = a.useCallback(
            (e) => {
                R(e);
                let t = G?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                null != t && U(t), K(e?.planId), X(e?.name ?? ""), ee(e?.regionId ?? "");
            },
            [G?.entitlements],
        ),
        H = a.useCallback(
            (e, t) => {
                F(void 0), U(e?.id), K(t ?? S(e));
            },
            [F],
        ),
        [V, J] = a.useState(),
        [Q, X] = a.useState(I?.name ?? ""),
        [Y, ee] = a.useState(I?.regionId ?? ""),
        [et, el] = a.useState(!1),
        en = a.useRef(!1),
        ea = a.useCallback(() => {
            if ((Z(void 0), null == L || null == z || "" === Q || "" === Y || null == W)) return;
            let e = z.plans.find((e) => e.id === W);
            (0, g.Jh)({
                guildId: L.id,
                productId: z.id,
                productName: z.name,
                skuId: W,
                planName: e?.name ?? "",
                planCost: e?.cost ?? 0,
                previousPlanCost: null == $ ? 0 : (e?.cost ?? 0) + q,
                region: Y,
                type: null == $ ? "create" : "edit",
            });
            let t = () => {
                if (en.current) return;
                (en.current = !0), el(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), b.PH);
                });
                Promise.all([null != $ ? (0, x.pj)(L.id, $.entitlementId, W, Q) : (0, x.jL)(L.id, W, Q, Y), e])
                    .then(() => {
                        T(), $?.planId !== W && (0, j.A)(L.id, z, null == $ ? "created" : "updated");
                    })
                    .catch((e) => {
                        Z(e.body?.message ?? N.intl.string(p.default.gvNWWr)), (en.current = !1);
                    })
                    .finally(() => {
                        el(!1);
                    });
            };
            D < q
                ? (0, r.g)({
                      analyticsLocation: E,
                      numberOfBoostsToAdd: q - D,
                      analyticsLocations: P,
                      guild: L,
                      intent: h.Pn.PERK,
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
        }, [P, L, D, W, E, z, Q, Y, T, q, $]),
        es = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        T();
                        break;
                    case "go-to-step":
                        w(e.step);
                        break;
                    case "save":
                        ea();
                }
            },
            [T, ea],
        ),
        ei = a.useCallback(() => {
            null != O && es(O.onBack);
        }, [O, es]),
        er = a.useCallback(() => {
            null != O && es(O.onNext);
        }, [O, es]),
        ed = a.useMemo(
            () =>
                new Set(
                    Object.values(G?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(c.Vq),
                ),
            [G?.catalog],
        );
    return (0, n.jsx)(A.Provider, {
        value: {
            guildId: o,
            step: _,
            stepAction: O,
            stepLoading: et,
            onBack: ei,
            onNext: er,
            gameServerGames: G?.catalog ?? {},
            instances: Object.values(G?.instances ?? {}),
            currentGame: z,
            setCurrentGame: H,
            gameServerInstance: $,
            setGameServerInstance: F,
            name: Q,
            setName: X,
            regionId: Y,
            setRegionId: ee,
            planCost: q,
            planId: W,
            setPlanId: K,
            footerNode: V,
            setFooterNode: J,
            availableBoostCount: D,
            error: B,
            gameProvider: ed.size > 0 ? Array.from(ed)[0] : null,
        },
        children: y,
    });
}
