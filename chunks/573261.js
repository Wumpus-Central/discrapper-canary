n.d(t, { Z: () => s });
var i = n(544891),
    r = n(626135);
function a(e, t, n) {
    let { trackedActionData: i, ...a } = t,
        s = {
            url: a.url,
            request_method: n
        };
    return new Promise((t, n) => {
        e(a)
            .then((e) => {
                let n = i.properties;
                'function' == typeof i.properties && (n = i.properties(e)),
                    (0, r.trackNetworkAction)(i.event, {
                        status_code: e.status,
                        ...s,
                        ...n
                    }),
                    t(e);
            })
            .catch((e) => {
                var t, a;
                let o = i.properties;
                'function' == typeof i.properties && (o = i.properties(e)),
                    (0, r.trackNetworkAction)(i.event, {
                        status_code: e.status,
                        error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                        error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                        ...s,
                        ...o
                    }),
                    n(e);
            });
    });
}
let s = {
    get: function (e) {
        return a(i.tn.get, e, 'get');
    },
    post: function (e) {
        return a(i.tn.post, e, 'post');
    },
    put: function (e) {
        return a(i.tn.put, e, 'put');
    },
    patch: function (e) {
        return a(i.tn.patch, e, 'patch');
    },
    delete: function (e) {
        return a(i.tn.del, e, 'del');
    }
};
