"use strict";
n.d(t, { A: () => h, e: () => o });
var i,
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(228366),
    o = (((i = {})[(i.FETCHING = 0)] = "FETCHING"), (i[(i.FETCHED = 1)] = "FETCHED"), (i[(i.ERROR = 2)] = "ERROR"), i);
let d = [],
    c = {},
    u = {},
    _ = {};
function E(e) {
    let { surface: t, activeState: n } = e;
    return `surface:${t} activeState:${n}`;
}
class A extends s.Ay.Store {
    static displayName;
    getLastFetchTimeMs(e) {
        let { surface: t, activeState: n } = e;
        return _[E({ surface: t, activeState: n })];
    }
    getFetchState(e) {
        let { surface: t, activeState: n } = e;
        return u[E({ surface: t, activeState: n })];
    }
    getCollections(e) {
        let { surface: t, activeState: n } = e;
        return c[E({ surface: t, activeState: n })] ?? d;
    }
}
let h = new A(l.h, {
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function (e) {
        let { surface: t, activeState: n } = e;
        u = { ...u, [E({ surface: t, activeState: n })]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function (e) {
        var t;
        let { collections: n, surface: i, activeState: r } = e,
            s = E({ surface: i, activeState: r }),
            l =
                ((t = n.map((e) => {
                    var t;
                    return (
                        (t = e.application_directory_collection_items),
                        (e.application_directory_collection_items = a().sortBy(t, ["position", "id"])),
                        e
                    );
                })),
                a().sortBy(t, ["position", "id"]));
        (c = { ...c, [s]: l }), (u = { ...u, [s]: 1 });
        let o = Date.now();
        _ = { ..._, [s]: o };
    },
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function (e) {
        let { surface: t, activeState: n } = e;
        u = { ...u, [E({ surface: t, activeState: n })]: 2 };
    },
});
