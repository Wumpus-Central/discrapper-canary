var i,
    a = r(442837),
    o = r(570140),
    s = r(981631);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = {},
    c = {
        integration: '',
        query: ''
    };
function d(e) {
    var n;
    let { integration: r, query: i } = e;
    (u[r] = null !== (n = u[r]) && void 0 !== n ? n : {}),
        (u[r][i] = {
            loading: !0,
            results: []
        });
}
function f(e) {
    let { integration: n, query: r, results: i } = e;
    (u[n][r] = {
        loading: !1,
        results: i.map((e) => ({
            type: s.nkL[n].type,
            meta: e
        }))
    }),
        (c = {
            query: r,
            integration: n
        });
}
function p(e) {
    let { integration: n, query: r } = e;
    delete u[n][r];
}
class h extends (i = a.ZP.Store) {
    getResults(e, n) {
        if (null == e || null == n) return null;
        let r = u[e];
        return null != r && null != r[n] ? r[n] : null;
    }
    getQuery() {
        return c;
    }
}
l(h, 'displayName', 'IntegrationQueryStore'),
    (n.Z = new h(o.Z, {
        INTEGRATION_QUERY: d,
        INTEGRATION_QUERY_SUCCESS: f,
        INTEGRATION_QUERY_FAILURE: p
    }));
