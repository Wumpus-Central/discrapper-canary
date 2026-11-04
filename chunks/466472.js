var n = e(73153),
    i = e(962052);
e.d(
    A,
    {},
    {
        JN: function (t) {
            n.h.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: t });
        },
        SA: function (t) {
            i.A.queryDirectory(t, (A, e) => {
                null == A && null != e && n.h.dispatch({ type: "INSTALLATION_LOCATION_ADD", path: t, metadata: e });
            });
        },
        UQ: function (t) {
            let A = {},
                e = 0;
            for (let p of t)
                null != p &&
                    "string" == typeof p &&
                    i.A.queryDirectory(p, (i, T) => {
                        (++e,
                            null == i && null != T && (A[p] = T),
                            e === t.length &&
                                n.h.dispatch({ type: "INSTALLATION_LOCATION_FETCH_METADATA", metadataPayload: A }));
                    });
        },
        a8: function (t, A) {
            let { label: e, isDefault: i } = A;
            n.h.dispatch({ type: "INSTALLATION_LOCATION_UPDATE", path: t, label: e, isDefault: i });
        },
    },
);
