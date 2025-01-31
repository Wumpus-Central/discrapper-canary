n.d(t, { Z: () => m }), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140);
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
let u = {},
    c = {};
function d(e) {
    let { applicationId: t } = e;
    u = {
        ...u,
        [t]: 1
    };
}
function f(e) {
    let { applicationId: t } = e;
    u = {
        ...u,
        [t]: 2
    };
}
function _(e) {
    let { applicationId: t, assets: n } = e;
    if (null != n) {
        var i;
        c[t] = {
            assets: null !== (i = a().keyBy(n, 'name')) && void 0 !== i ? i : {},
            lastUpdated: Date.now()
        };
    } else delete c[t];
}
function p(e) {
    let { assets: t } = e,
        n = { ...u };
    for (let e in t) {
        var i;
        let r = t[e];
        (n[e] = 2),
            (c[e] = {
                assets: null !== (i = a().keyBy(r, 'name')) && void 0 !== i ? i : {},
                lastUpdated: Date.now()
            });
    }
    u = n;
}
class h extends (i = s.ZP.Store) {
    getApplicationAssetFetchState(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t ? t : 0;
    }
    getFetchingIds() {
        return [
            ...Object.entries(u)
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
        return c[e];
    }
}
l(h, 'displayName', 'ApplicationAssetsStore');
let m = new h(o.Z, {
    APPLICATION_ASSETS_FETCH: d,
    APPLICATION_ASSETS_FETCH_SUCCESS: f,
    APPLICATION_ASSETS_UPDATE: _,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: p,
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: p
});
