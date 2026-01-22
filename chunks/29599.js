n.d(t, { A: () => _ });
var r,
    i = n(311907),
    a = n(73153),
    s = n(652215);
function o(e, t, n) {
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
let l = {},
    c = {
        integration: "",
        query: "",
    };
function u(e) {
    var t;
    let { integration: n, query: r } = e;
    (l[n] = null != (t = l[n]) ? t : {}),
        (l[n][r] = {
            loading: !0,
            results: [],
        });
}
function d(e) {
    let { integration: t, query: n, results: r } = e;
    (l[t][n] = {
        loading: !1,
        results: r.map((e) => ({
            type: s.Z86[t].type,
            meta: e,
        })),
    }),
        (c = {
            query: n,
            integration: t,
        });
}
function f(e) {
    let { integration: t, query: n } = e;
    delete l[t][n];
}
class p extends (r = i.Ay.Store) {
    getResults(e, t) {
        if (null == e || null == t) return null;
        let n = l[e];
        return null != n && null != n[t] ? n[t] : null;
    }
    getQuery() {
        return c;
    }
}
o(p, "displayName", "IntegrationQueryStore");
let _ = new p(a.h, {
    INTEGRATION_QUERY: u,
    INTEGRATION_QUERY_SUCCESS: d,
    INTEGRATION_QUERY_FAILURE: f,
});
