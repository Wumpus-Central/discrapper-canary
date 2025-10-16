n.d(t, { E: () => E }), n(388685);
var r = n(647438),
    i = n(311570),
    a = n(442837),
    o = n(353926),
    s = n(335131),
    l = n(597688),
    c = n(52030),
    u = n(447988);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = 600000,
    m = 600000,
    g = i.v.VARIANTS_GROUP;
function E(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
        _ = (0, a.e7)([l.Z], () => l.Z.skipNumCategories),
        [E, b, y, O, v, I, T, S] = (0, a.Wu)([c.Z], () => {
            var t, n;
            return [
                c.Z.getShopBlocks(e),
                null != (t = c.Z.getLastSuccessfulFetch(e)) ? t : 0,
                null != (n = c.Z.getLastErrorTimestamp(e)) ? n : 0,
                c.Z.getLastFetchOptions(e),
                c.Z.getFetchShopHomeError(e),
                c.Z.getIsFetchingShopHome(e),
                c.Z.getHasKnownStaleData(e),
                c.Z.getShopHomeConfigOverride(),
            ];
        }),
        A = (0, r.useMemo)(
            () =>
                p(f({}, t), {
                    variantsReturnStyle: g,
                    includePopularPicks: !0,
                    includeDynamicBlocks: !0,
                    shopHomeConfig: S,
                    skipNumCategories: _,
                }),
            [t, S, _],
        ),
        C = (0, r.useMemo)(() => !(0, s.oc)(O, A), [O, A]),
        N = (0, u.J)(E, null != I && I, i),
        R = (0, r.useMemo)(() => !N && Date.now() - b < h, [b, N]);
    return (
        (0, r.useEffect)(() => {
            if (!d || I) return;
            let t = Date.now() - y < m;
            (null == v || !t) && (C || !R || T) && (0, s.Ov)(e, A, n);
        }, [d, I, v, y, R, T, C, A, e, n]),
        {
            isFetchingShopHome: I,
            fetchShopHomeError: v,
            shopBlocks: E,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, s.Ov)(e, A, n);
            }, [e, A, n]),
        }
    );
}
