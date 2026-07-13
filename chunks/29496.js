"use strict";
n.d(t, { A: () => c });
var i = n(735438),
    r = n(17928),
    a = n(228366);
let s = new Map();
function l(e) {
    let t = !1;
    return (
        Object.entries((0, i.groupBy)(e, (e) => e.application_id))
            .map((e) => {
                let [t, n] = e;
                return [
                    t,
                    n
                        .flatMap((e) => e.resolved_assets ?? [])
                        .filter((e) => {
                            let n;
                            return null == (n = s.get(t)?.[e.key]) || new Date(e.updated_at) > new Date(n.updated_at);
                        }),
                ];
            })
            .filter((e) => {
                let [t, n] = e;
                return n.length > 0;
            })
            .forEach((e) => {
                let [n, i] = e;
                return (t = !0), s.set(n, { ...s.get(n), ...Object.fromEntries(i.map((e) => [e.key, e])) });
            }),
        t
    );
}
function o(e) {
    return l(Object.values(e.configs).flat());
}
class d extends r.Ay.Store {
    static displayName = "ApplicationAssetsV2Store";
    getAssets(e) {
        return s.get(e);
    }
}
let c = new d(a.h, {
    LOGOUT: function () {
        s.clear();
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        return l(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: o,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: o,
});
