n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366);
let a = new Map();
function l(e) {
    let t = !1;
    return (
        [...Map.groupBy(e, (e) => e.application_id).entries()]
            .map((e) => {
                let [t, n] = e;
                return [
                    t,
                    n
                        .flatMap((e) => e.resolved_assets ?? [])
                        .filter((e) => {
                            let n;
                            return null == (n = a.get(t)?.[e.key]) || new Date(e.updated_at) > new Date(n.updated_at);
                        }),
                ];
            })
            .filter((e) => {
                let [t, n] = e;
                return n.length > 0;
            })
            .forEach((e) => {
                let [n, i] = e;
                return (t = !0), a.set(n, { ...a.get(n), ...Object.fromEntries(i.map((e) => [e.key, e])) });
            }),
        t
    );
}
function s(e) {
    return l(Object.values(e.configs).flat());
}
class o extends i.Ay.Store {
    static displayName = "ApplicationAssetsV2Store";
    getAssets(e) {
        return a.get(e);
    }
}
let u = new o(r.h, {
    LOGOUT: function () {
        a.clear();
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        return l(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: s,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: s,
});
