"use strict";
n.d(t, { y: () => E });
var i = n(64700),
    r = n(635358),
    a = n(17928),
    s = n(736056),
    l = n(34332),
    o = n(590180),
    d = n(295811),
    c = n(651162),
    u = n(652215),
    _ = n(758836);
function E(e, t, n) {
    let E = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        A = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
        h = (0, a.bG)([o.A], () => o.A.skipNumCategories),
        [I, f, p, T, m, g, S, N] = (0, a.yK)([d.A], () => [
            d.A.getShopBlocks(e),
            d.A.getLastSuccessfulFetch(e) ?? 0,
            d.A.getLastErrorTimestamp(e) ?? 0,
            d.A.getLastFetchOptions(e),
            d.A.getFetchShopHomeError(e),
            d.A.getIsFetchingShopHome(e),
            d.A.getHasKnownStaleData(e),
            d.A.getShopHomeConfigOverride(),
        ]),
        C = (0, i.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: N,
                skipNumCategories: h,
            }),
            [t, N, h],
        ),
        O = (0, i.useMemo)(() => !(0, l.gn)(T, C), [T, C]),
        R = ((e, t, n) => {
            let [r, a] = (0, i.useState)(!1);
            return (
                (0, i.useEffect)(() => {
                    let i,
                        r =
                            ((i = null),
                            e.forEach((e) => {
                                let t = null;
                                e.type === c.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === c.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == i || (null != t && t < i)) && (i = t);
                            }),
                            i);
                    if (t || n || null == r) return void a(!1);
                    let s = r - Date.now();
                    if (s <= 0) return void a(!0);
                    a(!1);
                    let l = setTimeout(
                        () => {
                            a(!0);
                        },
                        Math.min(u.mnr, s),
                    );
                    return () => clearTimeout(l);
                }, [t, n, e]),
                r
            );
        })(I, g ?? !1, E),
        L = (0, i.useMemo)(() => !R && Date.now() - f < _.i0, [f, R]);
    return (
        (0, i.useEffect)(() => {
            if (!A || g) return;
            let t = Date.now() - p < _.Zq;
            (null != m && t) || ((O || !L || S) && (0, l.h$)(e, C, n));
        }, [A, g, m, p, L, S, O, C, e, n]),
        {
            isFetchingShopHome: g,
            fetchShopHomeError: m,
            shopBlocks: I,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, l.h$)(e, C, n);
            }, [e, C, n]),
        }
    );
}
