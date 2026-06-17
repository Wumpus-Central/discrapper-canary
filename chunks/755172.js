"use strict";
n.d(t, { y: () => h });
var i = n(64700),
    r = n(635358),
    s = n(17928),
    a = n(736056),
    o = n(564064),
    l = n(590180),
    u = n(295811),
    c = n(651162),
    d = n(652215),
    _ = n(758836);
function h(e, t, n) {
    let h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        f = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments),
        p = (0, s.bG)([l.A], () => l.A.skipNumCategories),
        [E, m, g, A, I, T, S, y] = (0, s.yK)([u.A], () => [
            u.A.getShopBlocks(e),
            u.A.getLastSuccessfulFetch(e) ?? 0,
            u.A.getLastErrorTimestamp(e) ?? 0,
            u.A.getLastFetchOptions(e),
            u.A.getFetchShopHomeError(e),
            u.A.getIsFetchingShopHome(e),
            u.A.getHasKnownStaleData(e),
            u.A.getShopHomeConfigOverride(),
        ]),
        C = (0, i.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: y,
                skipNumCategories: p,
            }),
            [t, y, p],
        ),
        N = (0, i.useMemo)(() => !(0, o.gn)(A, C), [A, C]),
        v = ((e, t, n) => {
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
        })(E, T ?? !1, h),
        R = (0, i.useMemo)(() => !v && Date.now() - m < _.i0, [m, v]);
    return (
        (0, i.useEffect)(() => {
            if (!f || T) return;
            let t = Date.now() - g < _.Zq;
            (null != I && t) || ((N || !R || S) && (0, o.h$)(e, C, n));
        }, [f, T, I, g, R, S, N, C, e, n]),
        {
            isFetchingShopHome: T,
            fetchShopHomeError: I,
            shopBlocks: E,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, o.h$)(e, C, n);
            }, [e, C, n]),
        }
    );
}
