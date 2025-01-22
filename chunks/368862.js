r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    o = r(392711),
    s = r.n(o),
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
    p = {},
    h = {};
function _(e) {
    let { surface: n, activeState: r } = e;
    return 'surface:'.concat(n, ' activeState:').concat(r);
}
function m(e) {
    let { surface: n, activeState: r } = e;
    p = {
        ...p,
        [_({
            surface: n,
            activeState: r
        })]: 0
    };
}
function g(e) {
    return s().sortBy(e, ['position', 'id']);
}
function E(e) {
    return s().sortBy(e, ['position', 'id']);
}
function v(e) {
    let { collections: n, surface: r, activeState: i } = e,
        a = _({
            surface: r,
            activeState: i
        }),
        o = g(n.map((e) => ((e.application_directory_collection_items = E(e.application_directory_collection_items)), e)));
    (f = {
        ...f,
        [a]: o
    }),
        (p = {
            ...p,
            [a]: 1
        });
    let s = Date.now();
    h = {
        ...h,
        [a]: s
    };
}
function y(e) {
    let { surface: n, activeState: r } = e;
    p = {
        ...p,
        [_({
            surface: n,
            activeState: r
        })]: 2
    };
}
class b extends (a = l.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { surface: n, activeState: r } = e;
        return h[
            _({
                surface: n,
                activeState: r
            })
        ];
    }
    getFetchState(e) {
        let { surface: n, activeState: r } = e;
        return p[
            _({
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
                    _({
                        surface: r,
                        activeState: i
                    })
                ]) && void 0 !== n
            ? n
            : d;
    }
}
c(b, 'displayName', void 0),
    (n.Z = new b(u.Z, {
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS: m,
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: v,
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: y
    }));
