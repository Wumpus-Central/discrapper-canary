"use strict";
n.d(t, { A: () => c });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153);
let o = {},
    l = {};
function u(e) {
    let { assets: t } = e,
        n = { ...o };
    for (let e in t) {
        let r = t[e];
        (n[e] = 2), (l[e] = { assets: i().keyBy(r, "name") ?? {}, lastUpdated: Date.now() });
    }
    o = n;
}
class d extends s.Ay.Store {
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
let c = new d(a.h, {
    APPLICATION_ASSETS_FETCH: function (e) {
        let { applicationId: t } = e;
        o = { ...o, [t]: 1 };
    },
    APPLICATION_ASSETS_FETCH_SUCCESS: function (e) {
        let { applicationId: t } = e;
        o = { ...o, [t]: 2 };
    },
    APPLICATION_ASSETS_UPDATE: function (e) {
        let { applicationId: t, assets: n } = e;
        null != n ? (l[t] = { assets: i().keyBy(n, "name") ?? {}, lastUpdated: Date.now() }) : delete l[t];
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: u,
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: u,
});
