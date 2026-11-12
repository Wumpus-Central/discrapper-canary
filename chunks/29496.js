var a = l(435558),
    n = l(855986),
    s = l(73153),
    i = l(385113);
let r = new Map();
function o(e) {
    let t = !1;
    return (
        Object.entries((0, a.groupBy)(e, (e) => e.application_id))
            .map((e) => {
                let [t, l] = e;
                return [
                    t,
                    l
                        .flatMap((e) => e.resolved_assets ?? [])
                        .filter((e) => {
                            let l;
                            return null == (l = r.get(t)?.[e.key]) || new Date(e.updated_at) > new Date(l.updated_at);
                        }),
                ];
            })
            .filter((e) => {
                let [t, l] = e;
                return l.length > 0;
            })
            .forEach((e) => {
                let [l, a] = e;
                return ((t = !0), r.set(l, { ...r.get(l), ...Object.fromEntries(a.map((e) => [e.key, e])) }));
            }),
        t
    );
}
function u(e) {
    return o(Object.values(e.configs).flat());
}
class m extends n.Ay.Store {
    static displayName = "ApplicationAssetsV2Store";
    initialize() {
        (this.waitFor(i.A), o(Object.values(i.A.getAllConfigsByApplication()).flat()));
    }
    getAssets(e) {
        return r.get(e);
    }
}
let c = new m(s.h, {
    LOGOUT: function () {
        r.clear();
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        return o(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: u,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: u,
});
l.d(t, {}, { A: c });
