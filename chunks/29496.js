"use strict";
n.d(t, { A: () => c });
var l = n(735438),
    i = n(17928),
    r = n(228366);
let s = new Map();
function a(e) {
    let t = !1;
    return (
        Object.entries((0, l.groupBy)(e, (e) => e.application_id))
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
                let [n, l] = e;
                return (t = !0), s.set(n, { ...s.get(n), ...Object.fromEntries(l.map((e) => [e.key, e])) });
            }),
        t
    );
}
function o(e) {
    return a(Object.values(e.configs).flat());
}
class u extends i.Ay.Store {
    static displayName = "ApplicationAssetsV2Store";
    getAssets(e) {
        return s.get(e);
    }
}
let c = new u(r.h, {
    LOGOUT: function () {
        s.clear();
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        return a(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: o,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: o,
});
