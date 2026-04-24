l.d(e, { A: () => x }), l(938796);
var i = l(64700),
    n = l(284009),
    a = l.n(n),
    s = l(17928),
    r = l(228366),
    o = l(73825),
    d = l(688810),
    u = l(376374),
    c = l(627363),
    A = l(897100),
    p = l(97352),
    h = l(67480),
    I = l(328968),
    m = l(169820),
    f = l(607940),
    g = l(163437),
    v = l(638643);
function x(t) {
    let { initialSubscribeForGuild: e, analyticsLocation: l, skuId: n, onComplete: x, disableGuildSelector: S } = t,
        E = (0, s.bG)([h.A], () => (null != n ? h.A.get(n) : void 0), [n]),
        N = (0, s.bG)([I.A], () => (null != n ? I.A.getForSKU(n) : void 0), [n]),
        P = (0, s.yK)([p.A], () => (null != n ? p.A.getForSKU(n) : []), [n]),
        L = P[0]?.id,
        w = (0, s.bG)([h.A], () => (null != n ? h.A.getParentSKU(n) : void 0), [n]),
        C = w?.bundledSkuIds,
        _ = (0, s.yK)([p.A], () => C?.flatMap(p.A.getForSKU) ?? [], [C]),
        b = i.useMemo(() => _.map((t) => t.id), [_]),
        k = (0, g.PJ)(E?.flags ?? 0),
        T = (0, s.bG)(
            [f.A],
            () => null != e && !1 !== k && f.A.getEntitlementsForGuild(e, !0).some((t) => t.skuId === n),
            [k, n, e],
        ),
        F = E?.applicationId,
        j = N?.published === !0 && E?.isAvailable() === !0,
        { app: O } = (0, c.NP)(F),
        { analyticsLocations: R } = (0, d.Ay)(),
        U = (0, m.GD)(w, e ?? void 0),
        G = U?.subscription,
        y = U?.subscriptionPlan,
        M = (0, m.Ko)(w, e ?? void 0),
        B = M?.subscriptionPlan,
        { entitlementsLoaded: D } = (0, m.CZ)({ guildId: e });
    null == e && (D = !0);
    let K = (0, A.A)(),
        V = null != G && (0, g.Uo)(G, E),
        z = i.useMemo(() => {
            if (!D || null == O || null == n) return u.wF.LOADING;
            if (!j) return u.wF.UNAVAILABLE;
            if (!k) {
                if (y?.skuId === n) return u.wF.SUBSCRIBED;
                if (B?.skuId === n && !1 === V) return u.wF.UPCOMING_PLAN;
            }
            return u.wF.AVAILABLE;
        }, [y?.skuId, j, O, D, V, k, B?.skuId, n]);
    return (
        i.useEffect(() => {
            j &&
                null != n &&
                K &&
                (p.A.isFetchingForSKU(n) ||
                    p.A.isLoadedForSKU(n) ||
                    r.h.wait(() => {
                        (0, o.ur)(n);
                    }));
        }, [j, n, K]),
        {
            openModal: i.useCallback(() => {
                a()(null != O, "No application"),
                    a()(null != n, "No SKU ID"),
                    a()(j, "Cannot purchase this unpublished plan"),
                    (0, v.w)({
                        subscriptionPlanId: L,
                        sku: E,
                        subscriptionGroupPlanIds: b,
                        initialSubscribeForGuild: e,
                        disableGuildSelector: S,
                        analyticsLocations: R,
                        analyticsLocation: l,
                    }).then(() => {
                        x?.();
                    });
            }, [O, n, j, L, E, b, e, S, R, l, x]),
            subscriptionPurchaseButtonState: z,
            isGuildSubscribed: T,
        }
    );
}
