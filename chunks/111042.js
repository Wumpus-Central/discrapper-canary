"use strict";
n.d(t, { A: () => A, e: () => o });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = (function (e) {
        return (e[(e.FETCHING = 0)] = "FETCHING"), (e[(e.FETCHED = 1)] = "FETCHED"), (e[(e.ERROR = 2)] = "ERROR"), e;
    })({});
let l = [],
    u = {},
    c = {},
    d = {};
function _(e) {
    let { surface: t, activeState: n } = e;
    return `surface:${t} activeState:${n}`;
}
function f(e) {
    let { surface: t, activeState: n } = e;
    c = { ...c, [_({ surface: t, activeState: n })]: 0 };
}
function p(e) {
    return i().sortBy(e, ["position", "id"]);
}
function h(e) {
    return i().sortBy(e, ["position", "id"]);
}
function m(e) {
    let { collections: t, surface: n, activeState: r } = e,
        i = _({ surface: n, activeState: r }),
        a = p(
            t.map((e) => ((e.application_directory_collection_items = h(e.application_directory_collection_items)), e)),
        );
    (u = { ...u, [i]: a }), (c = { ...c, [i]: 1 });
    let s = Date.now();
    d = { ...d, [i]: s };
}
function g(e) {
    let { surface: t, activeState: n } = e;
    c = { ...c, [_({ surface: t, activeState: n })]: 2 };
}
class E extends a.Ay.Store {
    static displayName;
    getLastFetchTimeMs(e) {
        let { surface: t, activeState: n } = e;
        return d[_({ surface: t, activeState: n })];
    }
    getFetchState(e) {
        let { surface: t, activeState: n } = e;
        return c[_({ surface: t, activeState: n })];
    }
    getCollections(e) {
        let { surface: t, activeState: n } = e;
        return u[_({ surface: t, activeState: n })] ?? l;
    }
}
let A = new E(s.h, {
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS: f,
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: m,
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: g,
});
