"use strict";
n.d(t, { A: () => h, e: () => l });
var r,
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    l = (((r = {})[(r.FETCHING = 0)] = "FETCHING"), (r[(r.FETCHED = 1)] = "FETCHED"), (r[(r.ERROR = 2)] = "ERROR"), r);
let u = [],
    d = {},
    c = {},
    _ = {};
function f(e) {
    let { surface: t, activeState: n } = e;
    return `surface:${t} activeState:${n}`;
}
class E extends a.Ay.Store {
    static displayName;
    getLastFetchTimeMs(e) {
        let { surface: t, activeState: n } = e;
        return _[f({ surface: t, activeState: n })];
    }
    getFetchState(e) {
        let { surface: t, activeState: n } = e;
        return c[f({ surface: t, activeState: n })];
    }
    getCollections(e) {
        let { surface: t, activeState: n } = e;
        return d[f({ surface: t, activeState: n })] ?? u;
    }
}
let h = new E(o.h, {
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function (e) {
        let { surface: t, activeState: n } = e;
        c = { ...c, [f({ surface: t, activeState: n })]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function (e) {
        var t;
        let { collections: n, surface: r, activeState: i } = e,
            a = f({ surface: r, activeState: i }),
            o =
                ((t = n.map((e) => {
                    var t;
                    return (
                        (t = e.application_directory_collection_items),
                        (e.application_directory_collection_items = s().sortBy(t, ["position", "id"])),
                        e
                    );
                })),
                s().sortBy(t, ["position", "id"]));
        (d = { ...d, [a]: o }), (c = { ...c, [a]: 1 });
        let l = Date.now();
        _ = { ..._, [a]: l };
    },
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function (e) {
        let { surface: t, activeState: n } = e;
        c = { ...c, [f({ surface: t, activeState: n })]: 2 };
    },
});
