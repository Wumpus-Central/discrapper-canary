n.d(t, { A: () => a });
var l = n(311907),
    r = n(73153),
    i = n(652215);
let s = {},
    o = { integration: "", query: "" };
class u extends l.Ay.Store {
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
let a = new u(r.h, {
    INTEGRATION_QUERY: function (e) {
        let { integration: t, query: n } = e;
        (s[t] = s[t] ?? {}), (s[t][n] = { loading: !0, results: [] });
    },
    INTEGRATION_QUERY_SUCCESS: function (e) {
        let { integration: t, query: n, results: l } = e;
        (s[t][n] = { loading: !1, results: l.map((e) => ({ type: i.Z86[t].type, meta: e })) }),
            (o = { query: n, integration: t });
    },
    INTEGRATION_QUERY_FAILURE: function (e) {
        let { integration: t, query: n } = e;
        delete s[t][n];
    },
});
