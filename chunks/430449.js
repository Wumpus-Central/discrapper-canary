n.d(t, { Z: () => v }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {},
    p = {};
function _(e) {
    let { applicationId: t } = e;
    f = d(c({}, f), { [t]: 1 });
}
function h(e) {
    let { applicationId: t } = e;
    f = d(c({}, f), { [t]: 2 });
}
function m(e) {
    let { applicationId: t, assets: n } = e;
    if (null != n) {
        var r;
        p[t] = {
            assets: null !== (r = o().keyBy(n, 'name')) && void 0 !== r ? r : {},
            lastUpdated: Date.now()
        };
    } else delete p[t];
}
function g(e) {
    let { assets: t } = e,
        n = c({}, f);
    for (let e in t) {
        var r;
        let i = t[e];
        (n[e] = 2),
            (p[e] = {
                assets: null !== (r = o().keyBy(i, 'name')) && void 0 !== r ? r : {},
                lastUpdated: Date.now()
            });
    }
    f = n;
}
class E extends (r = a.ZP.Store) {
    getApplicationAssetFetchState(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : 0;
    }
    getFetchingIds() {
        return [
            ...Object.entries(f)
                .filter((e) => {
                    let [, t] = e;
                    return 1 === t;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })
        ];
    }
    getApplicationAssets(e) {
        return p[e];
    }
}
l(E, 'displayName', 'ApplicationAssetsStore');
let v = new E(s.Z, {
    APPLICATION_ASSETS_FETCH: _,
    APPLICATION_ASSETS_FETCH_SUCCESS: h,
    APPLICATION_ASSETS_UPDATE: m,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: g,
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: g
});
