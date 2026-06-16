"use strict";
n.d(t, { A: () => p, e: () => l });
var i,
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = (((i = {})[(i.FETCHING = 0)] = "FETCHING"), (i[(i.FETCHED = 1)] = "FETCHED"), (i[(i.ERROR = 2)] = "ERROR"), i);
let u = [],
    c = {},
    d = {},
    _ = {};
function h(e) {
    let { surface: t, activeState: n } = e;
    return `surface:${t} activeState:${n}`;
}
class f extends a.Ay.Store {
    static displayName;
    getLastFetchTimeMs(e) {
        let { surface: t, activeState: n } = e;
        return _[h({ surface: t, activeState: n })];
    }
    getFetchState(e) {
        let { surface: t, activeState: n } = e;
        return d[h({ surface: t, activeState: n })];
    }
    getCollections(e) {
        let { surface: t, activeState: n } = e;
        return c[h({ surface: t, activeState: n })] ?? u;
    }
}
let p = new f(o.h, {
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function (e) {
        let { surface: t, activeState: n } = e;
        d = { ...d, [h({ surface: t, activeState: n })]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function (e) {
        var t;
        let { collections: n, surface: i, activeState: r } = e,
            a = h({ surface: i, activeState: r }),
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
        (c = { ...c, [a]: o }), (d = { ...d, [a]: 1 });
        let l = Date.now();
        _ = { ..._, [a]: l };
    },
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function (e) {
        let { surface: t, activeState: n } = e;
        d = { ...d, [h({ surface: t, activeState: n })]: 2 };
    },
});
