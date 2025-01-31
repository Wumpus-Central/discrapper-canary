n.d(t, {
    M: () => u,
    Z: () => I
});
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var u = (function (e) {
    return (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR'), e;
})({});
let c = [],
    d = {},
    f = {},
    _ = {};
function p(e) {
    let { surface: t, activeState: n } = e;
    return 'surface:'.concat(t, ' activeState:').concat(n);
}
function h(e) {
    let { surface: t, activeState: n } = e;
    f = {
        ...f,
        [p({
            surface: t,
            activeState: n
        })]: 0
    };
}
function m(e) {
    return a().sortBy(e, ['position', 'id']);
}
function g(e) {
    return a().sortBy(e, ['position', 'id']);
}
function E(e) {
    let { collections: t, surface: n, activeState: i } = e,
        r = p({
            surface: n,
            activeState: i
        }),
        a = m(t.map((e) => ((e.application_directory_collection_items = g(e.application_directory_collection_items)), e)));
    (d = {
        ...d,
        [r]: a
    }),
        (f = {
            ...f,
            [r]: 1
        });
    let s = Date.now();
    _ = {
        ..._,
        [r]: s
    };
}
function v(e) {
    let { surface: t, activeState: n } = e;
    f = {
        ...f,
        [p({
            surface: t,
            activeState: n
        })]: 2
    };
}
class y extends (i = s.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { surface: t, activeState: n } = e;
        return _[
            p({
                surface: t,
                activeState: n
            })
        ];
    }
    getFetchState(e) {
        let { surface: t, activeState: n } = e;
        return f[
            p({
                surface: t,
                activeState: n
            })
        ];
    }
    getCollections(e) {
        var t;
        let { surface: n, activeState: i } = e;
        return null !==
            (t =
                d[
                    p({
                        surface: n,
                        activeState: i
                    })
                ]) && void 0 !== t
            ? t
            : c;
    }
}
l(y, 'displayName', void 0);
let I = new y(o.Z, {
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS: h,
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: E,
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: v
});
