"use strict";
n.d(t, { A: () => s });
var r = n(562465),
    i = n(954571);
function a(e, t, n) {
    let { trackedActionData: r, ...a } = t,
        s = { url: a.url, request_method: n };
    return new Promise((t, n) => {
        e(a)
            .then((e) => {
                let n = r.properties;
                "function" == typeof r.properties && (n = r.properties(e)),
                    (0, i.trackNetworkAction)(r.event, { status_code: e.status, ...s, ...n }),
                    t(e);
            })
            .catch((e) => {
                let t = r.properties;
                "function" == typeof r.properties && (t = r.properties(e)),
                    (0, i.trackNetworkAction)(r.event, {
                        status_code: e.status,
                        error_code: e.body?.code,
                        error_message: e.body?.message,
                        ...s,
                        ...t,
                    }),
                    n(e);
            });
    });
}
let s = {
    get: function (e) {
        return a(r.Bo.get, e, "get");
    },
    post: function (e) {
        return a(r.Bo.post, e, "post");
    },
    put: function (e) {
        return a(r.Bo.put, e, "put");
    },
    patch: function (e) {
        return a(r.Bo.patch, e, "patch");
    },
    delete: function (e) {
        return a(r.Bo.del, e, "del");
    },
};
