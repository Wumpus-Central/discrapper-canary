l.d(t, { mf: () => j, bv: () => C });
var n = l(477900),
    a = l(582128),
    s = l(17928),
    u = l(688810),
    i = l(987144),
    d = l(868652),
    r = l(864310),
    o = l(410212),
    c = l(71393),
    m = l(786300),
    p = l(403362),
    b = l(498480),
    f = l(907878),
    g = l(475669),
    v = l(192308),
    k = l(628049),
    S = l(568065),
    h = l(394107),
    I = l(105292);
let [A, C] = (0, m.A)();
function y(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id;
}
function j(e) {
    let t,
        m,
        {
            guildId: C,
            initialGameServerInstance: j,
            initialGameServerGame: G,
            stepConfig: M = k.ZN,
            children: N,
            onClose: P,
            analyticsLocation: x,
        } = e;
    a.useEffect(() => {
        ((0, b.z9)(C), (0, d.Xd)(C, !0), null == j && (0, b.cq)(C));
    }, [C, j]);
    let w = (0, s.bG)([g.A], () => g.A.getStateForGuild(C)),
        O = (0, s.bG)([c.A], () => c.A.getGuild(C)),
        { analyticsLocations: E } = (0, u.Ay)(x),
        [L, T] = a.useState(M.initialStep ?? Object.keys(M.steps)[0]),
        { available: _ } = (0, r.A)(C),
        z = M.steps[L],
        [B, H] = a.useState(G?.id);
    a.useEffect(() => {
        if (null != B || j?.entitlementId == null) return;
        let e = w?.entitlements?.[j.entitlementId]?.sku?.product_id;
        null != e && H(e);
    }, [w?.entitlements, j?.entitlementId, B]);
    let [J, X] = a.useState(void 0),
        q = a.useMemo(() => {
            if (null != B) return Object.values(w?.catalog ?? {}).find((e) => e.id === B);
        }, [w?.catalog, B]),
        [F, K] = a.useState(j),
        [R, W] = a.useState(y(G) ?? j?.planId),
        Y =
            ((t = (0, s.bG)([g.A], () => g.A.getStateForGuild(C)?.entitlements)),
            (m = q?.plans.find((e) => e.id === R)?.cost ?? 0),
            null == F ? m : m - ((0, o.A)(t?.[F.entitlementId]) ?? 0)),
        Q = a.useCallback(
            (e) => {
                K(e);
                let t = w?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                (null != t && H(t), W(e?.planId), $(e?.name ?? ""), et(e?.regionId ?? ""));
            },
            [w?.entitlements],
        ),
        V = a.useCallback(
            (e, t) => {
                (Q(void 0), H(e?.id), W(t ?? y(e)));
            },
            [Q],
        ),
        [Z, D] = a.useState(),
        [U, $] = a.useState(j?.name ?? ""),
        [ee, et] = a.useState(j?.regionId ?? ""),
        [el, en] = a.useState(!1),
        ea = a.useRef(!1),
        es = a.useCallback(() => {
            if ((X(void 0), null == O || null == q || "" === U || "" === ee || null == R)) return;
            let e = q.plans.find((e) => e.id === R);
            function t() {
                if (null == O || null == q || null == R || ea.current) return;
                ((ea.current = !0), en(!0));
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), k.PH);
                });
                Promise.all([null != F ? (0, b.pj)(O.id, F.entitlementId, R, U) : (0, b.jL)(O.id, R, U, ee), e])
                    .then(() => {
                        var e, t;
                        (P(),
                            F?.planId !== R &&
                                ((e = O.id),
                                (t = null == F ? "created" : "updated"),
                                (0, v.openModalLazy)(async () => {
                                    let { default: a } = await Promise.all([l.e("720969"), l.e("413634")]).then(
                                        l.bind(l, 483225),
                                    );
                                    return (l) => (0, n.jsx)(a, { gameServerGame: q, guildId: e, status: t, ...l });
                                })));
                    })
                    .catch((e) => {
                        (X(e.body?.message ?? I.intl.string(h.default.gvNWWr)), (ea.current = !1));
                    })
                    .finally(() => {
                        en(!1);
                    });
            }
            ((0, f.Jh)({
                guildId: O.id,
                productId: q.id,
                productName: q.name,
                skuId: R,
                planName: e?.name ?? "",
                planCost: e?.cost ?? 0,
                previousPlanCost: null == F ? 0 : (e?.cost ?? 0) + Y,
                region: ee,
                type: null == F ? "create" : "edit",
            }),
                _ < Y
                    ? (0, i.g)({
                          analyticsLocation: x,
                          numberOfBoostsToAdd: Y - _,
                          analyticsLocations: E,
                          guild: O,
                          intent: S.Pn.PERK,
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
                    : t());
        }, [E, O, _, R, x, q, U, ee, P, Y, F]),
        eu = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        P();
                        break;
                    case "go-to-step":
                        T(e.step);
                        break;
                    case "save":
                        es();
                }
            },
            [P, es],
        ),
        ei = a.useCallback(() => {
            null != z && eu(z.onBack);
        }, [z, eu]),
        ed = a.useCallback(() => {
            null != z && eu(z.onNext);
        }, [z, eu]),
        er = a.useMemo(
            () =>
                new Set(
                    Object.values(w?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(p.Vq),
                ),
            [w?.catalog],
        ),
        eo = w?.catalog,
        ec = a.useMemo(() => eo ?? {}, [eo]),
        em = a.useMemo(() => Object.values(w?.instances ?? {}), [w]),
        ep = er.size > 0 ? Array.from(er)[0] : null,
        eb = a.useMemo(
            () => ({
                guildId: C,
                step: L,
                stepAction: z,
                stepLoading: el,
                onBack: ei,
                onNext: ed,
                gameServerGames: ec,
                instances: em,
                currentGame: q,
                setCurrentGame: V,
                gameServerInstance: F,
                setGameServerInstance: Q,
                name: U,
                setName: $,
                regionId: ee,
                setRegionId: et,
                planCost: Y,
                planId: R,
                setPlanId: W,
                footerNode: Z,
                setFooterNode: D,
                availableBoostCount: _,
                error: J,
                gameProvider: ep,
            }),
            [C, L, z, el, ei, ed, ec, em, q, V, F, Q, U, ee, Y, R, Z, _, J, ep],
        );
    return (0, n.jsx)(A.Provider, { value: eb, children: N });
}
