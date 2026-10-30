l.d(t, { mf: () => N, bv: () => y });
var n = l(477900),
    a = l(582128),
    s = l(17928),
    u = l(688810),
    i = l(987144),
    d = l(868652),
    o = l(864310),
    r = l(410212),
    c = l(71393),
    m = l(786300),
    p = l(403362),
    b = l(498480),
    f = l(907878),
    g = l(475669),
    v = l(192308);
function k(e, t, a) {
    (0, v.openModalLazy)(async () => {
        let { default: s } = await Promise.all([l.e("720969"), l.e("413634")]).then(l.bind(l, 483225));
        return (l) => (0, n.jsx)(s, { gameServerGame: t, guildId: e, status: a, ...l });
    });
}
var S = l(628049),
    I = l(568065),
    h = l(135570),
    C = l(105292);
let [A, y] = (0, m.A)();
function j(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id;
}
function N(e) {
    let t,
        l,
        {
            guildId: m,
            initialGameServerInstance: v,
            initialGameServerGame: y,
            stepConfig: N = S.ZN,
            children: P,
            onClose: G,
            analyticsLocation: M,
        } = e;
    a.useEffect(() => {
        ((0, b.z9)(m), (0, d.Xd)(m, !0), null == v && (0, b.cq)(m));
    }, [m, v]);
    let x = (0, s.bG)([g.A], () => g.A.getStateForGuild(m)),
        w = (0, s.bG)([c.A], () => c.A.getGuild(m)),
        { analyticsLocations: O } = (0, u.Ay)(M),
        [E, q] = a.useState(N.initialStep ?? Object.keys(N.steps)[0]),
        { available: J } = (0, o.A)(m),
        L = N.steps[E],
        [R, T] = a.useState(y?.id);
    a.useEffect(() => {
        if (null != R || v?.entitlementId == null) return;
        let e = x?.entitlements?.[v.entitlementId]?.sku?.product_id;
        null != e && T(e);
    }, [x?.entitlements, v?.entitlementId, R]);
    let [_, z] = a.useState(void 0),
        B = a.useMemo(() => {
            if (null != R) return Object.values(x?.catalog ?? {}).find((e) => e.id === R);
        }, [x?.catalog, R]),
        [H, X] = a.useState(v),
        [F, K] = a.useState(j(y) ?? v?.planId),
        W =
            ((t = (0, s.bG)([g.A], () => g.A.getStateForGuild(m)?.entitlements)),
            (l = B?.plans.find((e) => e.id === F)?.cost ?? 0),
            null == H ? l : l - ((0, r.A)(t?.[H.entitlementId]) ?? 0)),
        Y = a.useCallback(
            (e) => {
                X(e);
                let t = x?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                (null != t && T(t), K(e?.planId), U(e?.name ?? ""), ee(e?.regionId ?? ""));
            },
            [x?.entitlements],
        ),
        Q = a.useCallback(
            (e, t) => {
                (Y(void 0), T(e?.id), K(t ?? j(e)));
            },
            [Y],
        ),
        [V, Z] = a.useState(),
        [D, U] = a.useState(v?.name ?? ""),
        [$, ee] = a.useState(v?.regionId ?? ""),
        [et, el] = a.useState(!1),
        en = a.useRef(!1),
        ea = a.useCallback(
            (e) => {
                let { doRequest: t, onSuccess: l } = e;
                function n() {
                    if (en.current) return;
                    ((en.current = !0), el(!0));
                    let e = new Promise((e) => {
                        setTimeout(() => e(void 0), S.PH);
                    });
                    Promise.all([t(), e])
                        .then(() => {
                            (G(), l());
                        })
                        .catch((e) => {
                            (z(e.body?.message ?? C.intl.string(h.default.gvNWWr)), (en.current = !1));
                        })
                        .finally(() => {
                            el(!1);
                        });
                }
                null != w &&
                    (J < W
                        ? (0, i.g)({
                              analyticsLocation: M,
                              numberOfBoostsToAdd: W - J,
                              analyticsLocations: O,
                              guild: w,
                              intent: I.Pn.PERK,
                              onLoading: (e) => {
                                  el(e);
                              },
                              onSubscribeComplete: () => {
                                  n();
                              },
                              handleSubscribeModalClose: (e) => {
                                  e && n();
                              },
                          })
                        : n());
            },
            [M, O, J, w, G, W],
        ),
        es = a.useCallback(() => {
            if ((z(void 0), null == w || null == B || "" === D || null == F || "" === $)) return;
            let e = B.plans.find((e) => e.id === F);
            ((0, f.Jh)({
                guildId: w.id,
                productId: B.id,
                productName: B.name,
                skuId: F,
                planName: e?.name ?? "",
                planCost: e?.cost ?? 0,
                previousPlanCost: 0,
                region: $,
                type: "create",
            }),
                ea({ doRequest: () => (0, b.jL)(w.id, F, D, $), onSuccess: () => k(w.id, B, "created") }));
        }, [w, B, D, $, F, ea]),
        eu = a.useCallback(
            (e) => {
                if ((z(void 0), null == w || null == B || "" === D || null == F)) return;
                let t = B.plans.find((e) => e.id === F);
                ((0, f.Jh)({
                    guildId: w.id,
                    productId: B.id,
                    productName: B.name,
                    skuId: F,
                    planName: t?.name ?? "",
                    planCost: t?.cost ?? 0,
                    previousPlanCost: (t?.cost ?? 0) + W,
                    region: e.regionId,
                    type: "edit",
                }),
                    ea({
                        doRequest: () => (0, b.pj)(w.id, e.entitlementId, F, D),
                        onSuccess: () => {
                            e.planId !== F && k(w.id, B, "updated");
                        },
                    }));
            },
            [w, B, D, F, W, ea],
        ),
        ei = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        G();
                        break;
                    case "go-to-step":
                        q(e.step);
                        break;
                    case "save":
                        null != H ? eu(H) : es();
                }
            },
            [G, H, es, eu],
        ),
        ed = a.useCallback(() => {
            null != L && ei(L.onBack);
        }, [L, ei]),
        eo = a.useCallback(() => {
            null != L && ei(L.onNext);
        }, [L, ei]),
        er = a.useMemo(
            () =>
                new Set(
                    Object.values(x?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(p.Vq),
                ),
            [x?.catalog],
        ),
        ec = x?.catalog,
        em = a.useMemo(() => ec ?? {}, [ec]),
        ep = a.useMemo(() => Object.values(x?.instances ?? {}), [x]),
        eb = er.size > 0 ? Array.from(er)[0] : null,
        ef = a.useMemo(
            () => ({
                guildId: m,
                step: E,
                stepAction: L,
                stepLoading: et,
                onBack: ed,
                onNext: eo,
                gameServerGames: em,
                instances: ep,
                currentGame: B,
                setCurrentGame: Q,
                gameServerInstance: H,
                setGameServerInstance: Y,
                name: D,
                setName: U,
                regionId: $,
                setRegionId: ee,
                planCost: W,
                planId: F,
                setPlanId: K,
                footerNode: V,
                setFooterNode: Z,
                availableBoostCount: J,
                error: _,
                gameProvider: eb,
            }),
            [m, E, L, et, ed, eo, em, ep, B, Q, H, Y, D, $, W, F, V, J, _, eb],
        );
    return (0, n.jsx)(A.Provider, { value: ef, children: P });
}
