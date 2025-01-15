r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR');
})(i || (i = {}));
let d = [],
    f = {},
    _ = {},
    h = {};
function p(e) {
    let { surface: n, activeState: r } = e;
    return 'surface:'.concat(n, ' activeState:').concat(r);
}
function m(e) {
    let { surface: n, activeState: r } = e;
    _ = {
        ..._,
        [p({
            surface: n,
            activeState: r
        })]: 0
    };
}
function g(e) {
    return o().sortBy(e, ['position', 'id']);
}
function E(e) {
    return o().sortBy(e, ['position', 'id']);
}
function v(e) {
    let { collections: n, surface: r, activeState: i } = e,
        a = p({
            surface: r,
            activeState: i
        }),
        s = g(n.map((e) => ((e.application_directory_collection_items = E(e.application_directory_collection_items)), e)));
    (f = {
        ...f,
        [a]: s
    }),
        (_ = {
            ..._,
            [a]: 1
        });
    let o = Date.now();
    h = {
        ...h,
        [a]: o
    };
}
function I(e) {
    let { surface: n, activeState: r } = e;
    _ = {
        ..._,
        [p({
            surface: n,
            activeState: r
        })]: 2
    };
}
class T extends (a = l.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { surface: n, activeState: r } = e;
        return h[
            p({
                surface: n,
                activeState: r
            })
        ];
    }
    getFetchState(e) {
        let { surface: n, activeState: r } = e;
        return _[
            p({
                surface: n,
                activeState: r
            })
        ];
    }
    getCollections(e) {
        var n;
        let { surface: r, activeState: i } = e;
        return null !==
            (n =
                f[
                    p({
                        surface: r,
                        activeState: i
                    })
                ]) && void 0 !== n
            ? n
            : d;
    }
}
c(T, 'displayName', void 0),
    (n.Z = new T(u.Z, {
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS: m,
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: v,
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: I
    }));
