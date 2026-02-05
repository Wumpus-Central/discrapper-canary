"use strict";
n.d(t, { A: () => p });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153);
let o = {},
    l = {};
function u(e) {
    let { applicationId: t } = e;
    o = { ...o, [t]: 1 };
}
function c(e) {
    let { applicationId: t } = e;
    o = { ...o, [t]: 2 };
}
function d(e) {
    let { applicationId: t, assets: n } = e;
    null != n ? (l[t] = { assets: i().keyBy(n, "name") ?? {}, lastUpdated: Date.now() }) : delete l[t];
}
function _(e) {
    let { assets: t } = e,
        n = { ...o };
    for (let e in t) {
        let r = t[e];
        (n[e] = 2), (l[e] = { assets: i().keyBy(r, "name") ?? {}, lastUpdated: Date.now() });
    }
    o = n;
}
class f extends a.Ay.Store {
    static displayName = "ApplicationAssetsStore";
    getApplicationAssetFetchState(e) {
        return o[e] ?? 0;
    }
    getFetchingIds() {
        return [
            ...Object.entries(o)
                .filter((e) => {
                    let [, t] = e;
                    return 1 === t;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                }),
        ];
    }
    getApplicationAssets(e) {
        return l[e];
    }
}
let p = new f(s.h, {
    APPLICATION_ASSETS_FETCH: u,
    APPLICATION_ASSETS_FETCH_SUCCESS: c,
    APPLICATION_ASSETS_UPDATE: d,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: _,
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: _,
});
