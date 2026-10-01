l.d(t, { A: () => c });
var n = l(435558),
    a = l(17928),
    s = l(73153);
let i = new Map();
function r(e) {
    let t = !1;
    return (
        Object.entries((0, n.groupBy)(e, (e) => e.application_id))
            .map((e) => {
                let [t, l] = e;
                return [
                    t,
                    l
                        .flatMap((e) => e.resolved_assets ?? [])
                        .filter((e) => {
                            let l;
                            return null == (l = i.get(t)?.[e.key]) || new Date(e.updated_at) > new Date(l.updated_at);
                        }),
                ];
            })
            .filter((e) => {
                let [t, l] = e;
                return l.length > 0;
            })
            .forEach((e) => {
                let [l, n] = e;
                return ((t = !0), i.set(l, { ...i.get(l), ...Object.fromEntries(n.map((e) => [e.key, e])) }));
            }),
        t
    );
}
function o(e) {
    return r(Object.values(e.configs).flat());
}
class u extends a.Ay.Store {
    static displayName = "ApplicationAssetsV2Store";
    getAssets(e) {
        return i.get(e);
    }
}
let c = new u(s.h, {
    LOGOUT: function () {
        i.clear();
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        return r(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: o,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: o,
});
