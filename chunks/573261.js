var i = r(544891),
    a = r(626135);
function o(e, n, r) {
    let { trackedActionData: i, ...o } = n,
        s = {
            url: o.url,
            request_method: r
        };
    return new Promise((n, r) => {
        e(o)
            .then((e) => {
                let r = i.properties;
                'function' == typeof i.properties && (r = i.properties(e)),
                    (0, a.trackNetworkAction)(i.event, {
                        status_code: e.status,
                        ...s,
                        ...r
                    }),
                    n(e);
            })
            .catch((e) => {
                var n, o;
                let l = i.properties;
                'function' == typeof i.properties && (l = i.properties(e)),
                    (0, a.trackNetworkAction)(i.event, {
                        status_code: e.status,
                        error_code: null === (n = e.body) || void 0 === n ? void 0 : n.code,
                        error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message,
                        ...s,
                        ...l
                    }),
                    r(e);
            });
    });
}
let s = {
    get: function e(e) {
        return o(i.tn.get, e, 'get');
    },
    post: function e(e) {
        return o(i.tn.post, e, 'post');
    },
    put: function e(e) {
        return o(i.tn.put, e, 'put');
    },
    patch: function e(e) {
        return o(i.tn.patch, e, 'patch');
    },
    delete: function e(e) {
        return o(i.tn.del, e, 'del');
    }
};
n.Z = s;
