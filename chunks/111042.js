n.d(t, {
    A: () => S,
    e: () => f,
});
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var f = (function (e) {
    return (e[(e.FETCHING = 0)] = "FETCHING"), (e[(e.FETCHED = 1)] = "FETCHED"), (e[(e.ERROR = 2)] = "ERROR"), e;
})({});
let p = [],
    _ = {},
    h = {},
    m = {};
function g(e) {
    let { surface: t, activeState: n } = e;
    return "surface:".concat(t, " activeState:").concat(n);
}
function E(e) {
    let { surface: t, activeState: n } = e;
    h = d(c({}, h), {
        [g({
            surface: t,
            activeState: n,
        })]: 0,
    });
}
function b(e) {
    return a().sortBy(e, ["position", "id"]);
}
function y(e) {
    return a().sortBy(e, ["position", "id"]);
}
function O(e) {
    let { collections: t, surface: n, activeState: r } = e,
        i = g({
            surface: n,
            activeState: r,
        }),
        a = b(
            t.map((e) => ((e.application_directory_collection_items = y(e.application_directory_collection_items)), e)),
        );
    (_ = d(c({}, _), { [i]: a })), (h = d(c({}, h), { [i]: 1 }));
    let s = Date.now();
    m = d(c({}, m), { [i]: s });
}
function A(e) {
    let { surface: t, activeState: n } = e;
    h = d(c({}, h), {
        [g({
            surface: t,
            activeState: n,
        })]: 2,
    });
}
class v extends (r = s.Ay.Store) {
    getLastFetchTimeMs(e) {
        let { surface: t, activeState: n } = e;
        return m[
            g({
                surface: t,
                activeState: n,
            })
        ];
    }
    getFetchState(e) {
        let { surface: t, activeState: n } = e;
        return h[
            g({
                surface: t,
                activeState: n,
            })
        ];
    }
    getCollections(e) {
        var t;
        let { surface: n, activeState: r } = e;
        return null !=
            (t =
                _[
                    g({
                        surface: n,
                        activeState: r,
                    })
                ])
            ? t
            : p;
    }
}
l(v, "displayName", void 0);
let S = new v(o.h, {
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS: E,
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: O,
    APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: A,
});
