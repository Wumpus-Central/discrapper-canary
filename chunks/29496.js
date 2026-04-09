"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153);
let s = new Map();
function a() {
    s.clear();
}
function o(e, t) {
    let n = s.get(e)?.[t.key];
    return null == n || new Date(t.updated_at) > new Date(n.updated_at);
}
function l(e) {
    let t = !1;
    return (
        [...Map.groupBy(e, (e) => e.application_id).entries()]
            .map((e) => {
                let [t, n] = e;
                return [t, n.flatMap((e) => e.resolved_assets ?? []).filter((e) => o(t, e))];
            })
            .filter((e) => {
                let [t, n] = e;
                return n.length > 0;
            })
            .forEach((e) => {
                let [n, r] = e;
                return (t = !0), s.set(n, { ...s.get(n), ...Object.fromEntries(r.map((e) => [e.key, e])) });
            }),
        t
    );
}
function u(e) {
    return l(e.configs);
}
function c(e) {
    return l(Object.values(e.configs).flat());
}
class d extends r.Ay.Store {
    static displayName = "ApplicationAssetsV2Store";
    getAssets(e) {
        return s.get(e);
    }
}
let _ = new d(i.h, {
    LOGOUT: a,
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: u,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: c,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: c,
});
