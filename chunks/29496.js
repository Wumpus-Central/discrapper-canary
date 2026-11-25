var l = t(435558),
    s = t(855986),
    a = t(73153),
    i = t(385113);
let r = new Map();
function o(e) {
    let n = !1;
    return (
        Object.entries((0, l.groupBy)(e, (e) => e.application_id))
            .map((e) => {
                let [n, t] = e;
                return [
                    n,
                    t
                        .flatMap((e) => e.resolved_assets ?? [])
                        .filter((e) => {
                            let t;
                            return null == (t = r.get(n)?.[e.key]) || new Date(e.updated_at) > new Date(t.updated_at);
                        }),
                ];
            })
            .filter((e) => {
                let [n, t] = e;
                return t.length > 0;
            })
            .forEach((e) => {
                let [t, l] = e;
                return ((n = !0), r.set(t, { ...r.get(t), ...Object.fromEntries(l.map((e) => [e.key, e])) }));
            }),
        n
    );
}
function u(e) {
    return o(Object.values(e.configs).flat());
}
class c extends s.Ay.Store {
    static displayName = "ApplicationAssetsV2Store";
    initialize() {
        (this.waitFor(i.A), o(Object.values(i.A.getAllConfigsByApplication()).flat()));
    }
    getAssets(e) {
        return r.get(e);
    }
}
let d = new c(a.h, {
    LOGOUT: function () {
        r.clear();
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        return o(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: u,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: u,
});
t.d(n, {}, { A: d });
