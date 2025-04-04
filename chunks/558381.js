n.d(t, {
    Hq: () => y,
    M9: () => O,
    Oj: () => I,
    cj: () => v,
    km: () => E,
    oJ: () => g,
    rV: () => b,
    yt: () => S
});
var r = n(544891),
    i = n(570140),
    o = n(115130);
n(812206);
var a = n(703656),
    s = n(55563);
n(551428);
var l = n(695103),
    c = n(73346),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    let t = { application_id: e };
    return (0, c.Kb)({
        url: u.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
        query: t,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(
        (e) => (
            i.Z.dispatch({
                type: 'STORE_LISTINGS_FETCH_SUCCESS',
                storeListings: e.body.map((e) => p(f({}, e), { published: !0 }))
            }),
            e.body
        )
    );
}
function E(e) {
    let t = s.Z.get(e),
        n = null != t && (l.Z.inTestModeForApplication(t.applicationId) || o.Z.inDevModeForApplication(t.applicationId));
    return (
        i.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_START',
            skuId: e
        }),
        (0, c.Kb)({
            url: n ? u.ANM.STORE_LISTINGS_SKU(e) : u.ANM.STORE_PUBLISHED_LISTINGS_SKU(e),
            rejectWithError: !1
        })
            .then((e) => {
                n
                    ? i.Z.dispatch({
                          type: 'STORE_LISTINGS_FETCH_SUCCESS',
                          storeListings: e.body
                      })
                    : i.Z.dispatch({
                          type: 'STORE_LISTING_FETCH_SUCCESS',
                          storeListing: e.body
                      });
            })
            .catch(() => {
                i.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: e
                });
            })
    );
}
function b(e) {
    return (0, c.Kb)({
        url: u.ANM.STORE_LISTING(e),
        rejectWithError: !1
    }).then((e) => {
        i.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function y(e) {
    return (0, c.Kb)({
        url: u.ANM.STORE_PUBLISHED_LISTINGS_APPLICATION(e),
        rejectWithError: !1
    }).then((e) => {
        i.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function v() {
    i.Z.dispatch({ type: 'APPLICATION_STORE_MATURE_AGREE' });
}
function O() {
    (0, a.uL)(u.Z5c.APPLICATION_STORE);
}
function I(e) {
    return r.tn.post({
        url: u.ANM.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function S(e, t) {
    let n = (0, c.ZI)(e, t),
        { pathname: r } = n,
        i = h(n, ['pathname']);
    (0, a.uL)(r, i);
}
