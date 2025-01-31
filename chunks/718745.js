n.d(t, { Z: () => p });
var i,
    r = n(442837),
    a = n(570140),
    s = n(981631);
function o(e, t, n) {
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
let l = {},
    u = {
        integration: '',
        query: ''
    };
function c(e) {
    var t;
    let { integration: n, query: i } = e;
    (l[n] = null !== (t = l[n]) && void 0 !== t ? t : {}),
        (l[n][i] = {
            loading: !0,
            results: []
        });
}
function d(e) {
    let { integration: t, query: n, results: i } = e;
    (l[t][n] = {
        loading: !1,
        results: i.map((e) => ({
            type: s.nkL[t].type,
            meta: e
        }))
    }),
        (u = {
            query: n,
            integration: t
        });
}
function f(e) {
    let { integration: t, query: n } = e;
    delete l[t][n];
}
class _ extends (i = r.ZP.Store) {
    getResults(e, t) {
        if (null == e || null == t) return null;
        let n = l[e];
        return null != n && null != n[t] ? n[t] : null;
    }
    getQuery() {
        return u;
    }
}
o(_, 'displayName', 'IntegrationQueryStore');
let p = new _(a.Z, {
    INTEGRATION_QUERY: c,
    INTEGRATION_QUERY_SUCCESS: d,
    INTEGRATION_QUERY_FAILURE: f
});
