n.d(t, { A: () => o });
var l = n(562465),
    r = n(73153),
    i = n(29599),
    s = n(652215);
let o = {
    search(e, t) {
        null == i.A.getResults(e, t) &&
            (r.h.dispatch({ type: "INTEGRATION_QUERY", integration: e, query: t }),
            l.Bo.get({
                url: s.Rsh.INTEGRATION_SEARCH("tenor"),
                query: { q: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (n) => {
                    r.h.dispatch({ type: "INTEGRATION_QUERY_SUCCESS", integration: e, query: t, results: n.body });
                },
                () => r.h.dispatch({ type: "INTEGRATION_QUERY_FAILURE", integration: e, query: t }),
            ));
    },
};
