l.d(t, { mf: () => y, bv: () => C });
var n = l(477900),
    a = l(582128),
    s = l(17928),
    i = l(688810),
    u = l(987144),
    d = l(868652),
    r = l(864310),
    c = l(410212),
    o = l(71393),
    m = l(786300),
    p = l(403362),
    b = l(498480),
    f = l(907878),
    g = l(475669),
    v = l(192308),
    S = l(628049),
    k = l(568065),
    h = l(275695),
    I = l(375708);
let [A, C] = (0, m.A)();
function j(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id;
}
function y(e) {
    let t,
        m,
        {
            guildId: C,
            initialGameServerInstance: y,
            initialGameServerGame: G,
            stepConfig: P = S.ZN,
            children: N,
            onClose: x,
            analyticsLocation: w,
        } = e;
    a.useEffect(() => {
        (0, b.z9)(C), (0, d.Xd)(C, !0), null == y && (0, b.cq)(C);
    }, [C, y]);
    let O = (0, s.bG)([g.A], () => g.A.getStateForGuild(C)),
        E = (0, s.bG)([o.A], () => o.A.getGuild(C)),
        { analyticsLocations: M } = (0, i.Ay)(w),
        [L, T] = a.useState(P.initialStep ?? Object.keys(P.steps)[0]),
        { available: _ } = (0, r.A)(C),
        z = P.steps[L],
        [B, H] = a.useState(G?.id);
    a.useEffect(() => {
        if (null != B || y?.entitlementId == null) return;
        let e = O?.entitlements?.[y.entitlementId]?.sku?.product_id;
        null != e && H(e);
    }, [O?.entitlements, y?.entitlementId, B]);
    let [J, X] = a.useState(void 0),
        q = a.useMemo(() => {
            if (null != B) return Object.values(O?.catalog ?? {}).find((e) => e.id === B);
        }, [O?.catalog, B]),
        [F, K] = a.useState(y),
        [R, W] = a.useState(j(G) ?? y?.planId),
        Y =
            ((t = (0, s.bG)([g.A], () => g.A.getStateForGuild(C)?.entitlements)),
            (m = q?.plans.find((e) => e.id === R)?.cost ?? 0),
            null == F ? m : m - ((0, c.A)(t?.[F.entitlementId]) ?? 0)),
        Q = a.useCallback(
            (e) => {
                K(e);
                let t = O?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                null != t && H(t), W(e?.planId), $(e?.name ?? ""), et(e?.regionId ?? "");
            },
            [O?.entitlements],
        ),
        V = a.useCallback(
            (e, t) => {
                Q(void 0), H(e?.id), W(t ?? j(e));
            },
            [Q],
        ),
        [Z, D] = a.useState(),
        [U, $] = a.useState(y?.name ?? ""),
        [ee, et] = a.useState(y?.regionId ?? ""),
        [el, en] = a.useState(!1),
        ea = a.useRef(!1),
        es = a.useCallback(() => {
            if ((X(void 0), null == E || null == q || "" === U || "" === ee || null == R)) return;
            let e = q.plans.find((e) => e.id === R);
            function t() {
                if (null == E || null == q || null == R || ea.current) return;
                (ea.current = !0), en(!0);
                let e = new Promise((e) => {
                    setTimeout(() => e(void 0), S.PH);
                });
                Promise.all([null != F ? (0, b.pj)(E.id, F.entitlementId, R, U) : (0, b.jL)(E.id, R, U, ee), e])
                    .then(() => {
                        var e, t;
                        x(),
                            F?.planId !== R &&
                                ((e = E.id),
                                (t = null == F ? "created" : "updated"),
                                (0, v.openModalLazy)(async () => {
                                    let { default: a } = await Promise.all([
                                        l.e("97106"),
                                        l.e("64827"),
                                        l.e("84569"),
                                        l.e("22455"),
                                        l.e("957"),
                                        l.e("20969"),
                                        l.e("13634"),
                                    ]).then(l.bind(l, 483225));
                                    return (l) => (0, n.jsx)(a, { gameServerGame: q, guildId: e, status: t, ...l });
                                }));
                    })
                    .catch((e) => {
                        X(e.body?.message ?? I.intl.string(h.default.gvNWWr)), (ea.current = !1);
                    })
                    .finally(() => {
                        en(!1);
                    });
            }
            (0, f.Jh)({
                guildId: E.id,
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
                    ? (0, u.g)({
                          analyticsLocation: w,
                          numberOfBoostsToAdd: Y - _,
                          analyticsLocations: M,
                          guild: E,
                          intent: k.Pn.PERK,
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
        }, [M, E, _, R, w, q, U, ee, x, Y, F]),
        ei = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        x();
                        break;
                    case "go-to-step":
                        T(e.step);
                        break;
                    case "save":
                        es();
                }
            },
            [x, es],
        ),
        eu = a.useCallback(() => {
            null != z && ei(z.onBack);
        }, [z, ei]),
        ed = a.useCallback(() => {
            null != z && ei(z.onNext);
        }, [z, ei]),
        er = a.useMemo(
            () =>
                new Set(
                    Object.values(O?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(p.Vq),
                ),
            [O?.catalog],
        );
    return (0, n.jsx)(A.Provider, {
        value: {
            guildId: C,
            step: L,
            stepAction: z,
            stepLoading: el,
            onBack: eu,
            onNext: ed,
            gameServerGames: O?.catalog ?? {},
            instances: Object.values(O?.instances ?? {}),
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
            gameProvider: er.size > 0 ? Array.from(er)[0] : null,
        },
        children: N,
    });
}
