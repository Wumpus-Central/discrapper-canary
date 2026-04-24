a.d(t, { y: () => g });
var l = a(64700),
    r = a(635358),
    n = a(17928),
    s = a(736056),
    o = a(693477),
    i = a(590180),
    h = a(295811),
    d = a(651162),
    c = a(652215);
function g(e, t, a) {
    let g = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, n.bG)([s.A], () => s.A.hasLoadedExperiments),
        A = (0, n.bG)([i.A], () => i.A.skipNumCategories),
        [R, v, T, m, N, _, p, B] = (0, n.yK)([h.A], () => [
            h.A.getShopBlocks(e),
            h.A.getLastSuccessfulFetch(e) ?? 0,
            h.A.getLastErrorTimestamp(e) ?? 0,
            h.A.getLastFetchOptions(e),
            h.A.getFetchShopHomeError(e),
            h.A.getIsFetchingShopHome(e),
            h.A.getHasKnownStaleData(e),
            h.A.getShopHomeConfigOverride(),
        ]),
        b = (0, l.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: B,
                skipNumCategories: A,
            }),
            [t, B, A],
        ),
        E = (0, l.useMemo)(() => !(0, o.gn)(m, b), [m, b]),
        O = ((e, t, a) => {
            let [r, n] = (0, l.useState)(!1);
            return (
                (0, l.useEffect)(() => {
                    let l,
                        r =
                            ((l = null),
                            e.forEach((e) => {
                                let t = null;
                                e.type === d.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === d.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == l || (null != t && t < l)) && (l = t);
                            }),
                            l);
                    if (t || a || null == r) return void n(!1);
                    let s = r - Date.now();
                    if (s <= 0) return void n(!0);
                    n(!1);
                    let o = setTimeout(
                        () => {
                            n(!0);
                        },
                        Math.min(c.mnr, s),
                    );
                    return () => clearTimeout(o);
                }, [t, a, e]),
                r
            );
        })(R, _ ?? !1, g),
        f = (0, l.useMemo)(() => !O && Date.now() - v < 6e5, [v, O]);
    return (
        (0, l.useEffect)(() => {
            if (!u || _) return;
            let t = Date.now() - T < 6e5;
            (null != N && t) || ((E || !f || p) && (0, o.h$)(e, b, a));
        }, [u, _, N, T, f, p, E, b, e, a]),
        {
            isFetchingShopHome: _,
            fetchShopHomeError: N,
            shopBlocks: R,
            refreshShopHome: (0, l.useCallback)(() => {
                (0, o.h$)(e, b, a);
            }, [e, b, a]),
        }
    );
}
