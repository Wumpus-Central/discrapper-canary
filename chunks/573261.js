n.d(t, { Z: () => u });
var r = n(544891),
    i = n(626135);
function a(e, t, n) {
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
function o(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = l(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function c(e, t, n) {
    let { trackedActionData: r } = t,
        a = s(t, ['trackedActionData']),
        l = {
            url: a.url,
            request_method: n
        };
    return new Promise((t, n) => {
        e(a)
            .then((e) => {
                let n = r.properties;
                'function' == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, o({ status_code: e.status }, l, n)), t(e);
            })
            .catch((e) => {
                var t, a;
                let s = r.properties;
                'function' == typeof r.properties && (s = r.properties(e)),
                    (0, i.trackNetworkAction)(
                        r.event,
                        o(
                            {
                                status_code: e.status,
                                error_code: null == (t = e.body) ? void 0 : t.code,
                                error_message: null == (a = e.body) ? void 0 : a.message
                            },
                            l,
                            s
                        )
                    ),
                    n(e);
            });
    });
}
let u = {
    get: function (e) {
        return c(r.tn.get, e, 'get');
    },
    post: function (e) {
        return c(r.tn.post, e, 'post');
    },
    put: function (e) {
        return c(r.tn.put, e, 'put');
    },
    patch: function (e) {
        return c(r.tn.patch, e, 'patch');
    },
    delete: function (e) {
        return c(r.tn.del, e, 'del');
    }
};
