l.d(t, { y: () => g });
var a = l(64700),
    r = l(635358),
    n = l(17928),
    s = l(736056),
    o = l(29292),
    i = l(590180),
    d = l(295811),
    c = l(651162),
    h = l(652215);
function g(e, t, l) {
    let g = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, n.bG)([s.A], () => s.A.hasLoadedExperiments),
        A = (0, n.bG)([i.A], () => i.A.skipNumCategories),
        [R, T, m, v, N, _, B, p] = (0, n.yK)([d.A], () => [
            d.A.getShopBlocks(e),
            d.A.getLastSuccessfulFetch(e) ?? 0,
            d.A.getLastErrorTimestamp(e) ?? 0,
            d.A.getLastFetchOptions(e),
            d.A.getFetchShopHomeError(e),
            d.A.getIsFetchingShopHome(e),
            d.A.getHasKnownStaleData(e),
            d.A.getShopHomeConfigOverride(),
        ]),
        b = (0, a.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: p,
                skipNumCategories: A,
            }),
            [t, p, A],
        ),
        E = (0, a.useMemo)(() => !(0, o.gn)(v, b), [v, b]),
        O = ((e, t, l) => {
            let [r, n] = (0, a.useState)(!1);
            return (
                (0, a.useEffect)(() => {
                    let a,
                        r =
                            ((a = null),
                            e.forEach((e) => {
                                let t = null;
                                e.type === c.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === c.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == a || (null != t && t < a)) && (a = t);
                            }),
                            a);
                    if (t || l || null == r) return void n(!1);
                    let s = r - Date.now();
                    if (s <= 0) return void n(!0);
                    n(!1);
                    let o = setTimeout(
                        () => {
                            n(!0);
                        },
                        Math.min(h.mnr, s),
                    );
                    return () => clearTimeout(o);
                }, [t, l, e]),
                r
            );
        })(R, _ ?? !1, g),
        f = (0, a.useMemo)(() => !O && Date.now() - T < 6e5, [T, O]);
    return (
        (0, a.useEffect)(() => {
            if (!u || _) return;
            let t = Date.now() - m < 6e5;
            (null != N && t) || ((E || !f || B) && (0, o.h$)(e, b, l));
        }, [u, _, N, m, f, B, E, b, e, l]),
        {
            isFetchingShopHome: _,
            fetchShopHomeError: N,
            shopBlocks: R,
            refreshShopHome: (0, a.useCallback)(() => {
                (0, o.h$)(e, b, l);
            }, [e, b, l]),
        }
    );
}
