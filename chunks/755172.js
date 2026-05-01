n.d(t, { y: () => E });
var i = n(64700),
    a = n(635358),
    r = n(17928),
    s = n(736056),
    l = n(693477),
    o = n(590180),
    d = n(295811),
    c = n(651162),
    _ = n(652215);
function E(e, t, n) {
    let E = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, r.bG)([s.A], () => s.A.hasLoadedExperiments),
        A = (0, r.bG)([o.A], () => o.A.skipNumCategories),
        [I, T, h, S, N, f, p, m] = (0, r.yK)([d.A], () => [
            d.A.getShopBlocks(e),
            d.A.getLastSuccessfulFetch(e) ?? 0,
            d.A.getLastErrorTimestamp(e) ?? 0,
            d.A.getLastFetchOptions(e),
            d.A.getFetchShopHomeError(e),
            d.A.getIsFetchingShopHome(e),
            d.A.getHasKnownStaleData(e),
            d.A.getShopHomeConfigOverride(),
        ]),
        O = (0, i.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: a.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: m,
                skipNumCategories: A,
            }),
            [t, m, A],
        ),
        C = (0, i.useMemo)(() => !(0, l.gn)(S, O), [S, O]),
        R = ((e, t, n) => {
            let [a, r] = (0, i.useState)(!1);
            return (
                (0, i.useEffect)(() => {
                    let i,
                        a =
                            ((i = null),
                            e.forEach((e) => {
                                let t = null;
                                e.type === c.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === c.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == i || (null != t && t < i)) && (i = t);
                            }),
                            i);
                    if (t || n || null == a) return void r(!1);
                    let s = a - Date.now();
                    if (s <= 0) return void r(!0);
                    r(!1);
                    let l = setTimeout(
                        () => {
                            r(!0);
                        },
                        Math.min(_.mnr, s),
                    );
                    return () => clearTimeout(l);
                }, [t, n, e]),
                a
            );
        })(I, f ?? !1, E),
        g = (0, i.useMemo)(() => !R && Date.now() - T < 6e5, [T, R]);
    return (
        (0, i.useEffect)(() => {
            if (!u || f) return;
            let t = Date.now() - h < 6e5;
            (null != N && t) || ((C || !g || p) && (0, l.h$)(e, O, n));
        }, [u, f, N, h, g, p, C, O, e, n]),
        {
            isFetchingShopHome: f,
            fetchShopHomeError: N,
            shopBlocks: I,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, l.h$)(e, O, n);
            }, [e, O, n]),
        }
    );
}
