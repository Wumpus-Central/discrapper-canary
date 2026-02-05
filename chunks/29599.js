"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(652215);
let s = {},
    o = { integration: "", query: "" };
function l(e) {
    let { integration: t, query: n } = e;
    (s[t] = s[t] ?? {}), (s[t][n] = { loading: !0, results: [] });
}
function u(e) {
    let { integration: t, query: n, results: r } = e;
    (s[t][n] = { loading: !1, results: r.map((e) => ({ type: a.Z86[t].type, meta: e })) }),
        (o = { query: n, integration: t });
}
function c(e) {
    let { integration: t, query: n } = e;
    delete s[t][n];
}
class d extends r.Ay.Store {
    static displayName = "IntegrationQueryStore";
    getResults(e, t) {
        if (null == e || null == t) return null;
        let n = s[e];
        return null != n && null != n[t] ? n[t] : null;
    }
    getQuery() {
        return o;
    }
}
let _ = new d(i.h, { INTEGRATION_QUERY: l, INTEGRATION_QUERY_SUCCESS: u, INTEGRATION_QUERY_FAILURE: c });
