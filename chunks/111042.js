"use strict";
n.d(t, { A: () => m, e: () => l });
var i,
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = (((i = {})[(i.FETCHING = 0)] = "FETCHING"), (i[(i.FETCHED = 1)] = "FETCHED"), (i[(i.ERROR = 2)] = "ERROR"), i);
let d = [],
    _ = {},
    u = {},
    c = {};
function E(e) {
    let { surface: t, activeState: n } = e;
    return `surface:${t} activeState:${n}`;
}
class h extends a.Ay.Store {
    static displayName;
    getLastFetchTimeMs(e) {
        let { surface: t, activeState: n } = e;
        return c[E({ surface: t, activeState: n })];
    }
    getFetchState(e) {
        let { surface: t, activeState: n } = e;
        return u[E({ surface: t, activeState: n })];
    }
    getCollections(e) {
        let { surface: t, activeState: n } = e;
        return _[E({ surface: t, activeState: n })] ?? d;
    }
}
let m = new h(o.h, {
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function (e) {
        let { surface: t, activeState: n } = e;
        u = { ...u, [E({ surface: t, activeState: n })]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function (e) {
        var t;
        let { collections: n, surface: i, activeState: r } = e,
            a = E({ surface: i, activeState: r }),
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
        (_ = { ..._, [a]: o }), (u = { ...u, [a]: 1 });
        let l = Date.now();
        c = { ...c, [a]: l };
    },
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function (e) {
        let { surface: t, activeState: n } = e;
        u = { ...u, [E({ surface: t, activeState: n })]: 2 };
    },
});
