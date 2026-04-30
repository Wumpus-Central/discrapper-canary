"use strict";
n.d(t, { y: () => _ });
var i = n(64700),
    r = n(635358),
    s = n(17928),
    a = n(736056),
    o = n(859040),
    l = n(590180),
    u = n(295811),
    c = n(651162),
    d = n(652215);
function _(e, t, n) {
    let _ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        f = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments),
        h = (0, s.bG)([l.A], () => l.A.skipNumCategories),
        [p, E, m, g, A, I, T, S] = (0, s.yK)([u.A], () => [
            u.A.getShopBlocks(e),
            u.A.getLastSuccessfulFetch(e) ?? 0,
            u.A.getLastErrorTimestamp(e) ?? 0,
            u.A.getLastFetchOptions(e),
            u.A.getFetchShopHomeError(e),
            u.A.getIsFetchingShopHome(e),
            u.A.getHasKnownStaleData(e),
            u.A.getShopHomeConfigOverride(),
        ]),
        N = (0, i.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: S,
                skipNumCategories: h,
            }),
            [t, S, h],
        ),
        y = (0, i.useMemo)(() => !(0, o.gn)(g, N), [g, N]),
        C = ((e, t, n) => {
            let [r, s] = (0, i.useState)(!1);
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
                    if (t || n || null == r) return void s(!1);
                    let a = r - Date.now();
                    if (a <= 0) return void s(!0);
                    s(!1);
                    let o = setTimeout(
                        () => {
                            s(!0);
                        },
                        Math.min(d.mnr, a),
                    );
                    return () => clearTimeout(o);
                }, [t, n, e]),
                r
            );
        })(p, I ?? !1, _),
        v = (0, i.useMemo)(() => !C && Date.now() - E < 6e5, [E, C]);
    return (
        (0, i.useEffect)(() => {
            if (!f || I) return;
            let t = Date.now() - m < 6e5;
            (null != A && t) || ((y || !v || T) && (0, o.h$)(e, N, n));
        }, [f, I, A, m, v, T, y, N, e, n]),
        {
            isFetchingShopHome: I,
            fetchShopHomeError: A,
            shopBlocks: p,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, o.h$)(e, N, n);
            }, [e, N, n]),
        }
    );
}
