n.d(t, { A: () => o });
var r = n(562465),
    i = n(73153),
    a = n(29599),
    s = n(652215);
let o = {
    search(e, t) {
        null == a.A.getResults(e, t) &&
            (i.h.dispatch({
                type: "INTEGRATION_QUERY",
                integration: e,
                query: t,
            }),
            r.Bo.get({
                url: s.Rsh.INTEGRATION_SEARCH("tenor"),
                query: { q: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (n) => {
                    i.h.dispatch({
                        type: "INTEGRATION_QUERY_SUCCESS",
                        integration: e,
                        query: t,
                        results: n.body,
                    });
                },
                () =>
                    i.h.dispatch({
                        type: "INTEGRATION_QUERY_FAILURE",
                        integration: e,
                        query: t,
                    }),
            ));
    },
};
