e.d(A, { JN: () => T, SA: () => p, UQ: () => u, a8: () => c });
var n = e(228366),
    i = e(962052);
function p(t) {
    i.A.queryDirectory(t, (A, e) => {
        null == A && null != e && n.h.dispatch({ type: "INSTALLATION_LOCATION_ADD", path: t, metadata: e });
    });
}
function T(t) {
    n.h.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: t });
}
function c(t, A) {
    let { label: e, isDefault: i } = A;
    n.h.dispatch({ type: "INSTALLATION_LOCATION_UPDATE", path: t, label: e, isDefault: i });
}
function u(t) {
    let A = {},
        e = 0;
    for (let p of t)
        null != p &&
            "string" == typeof p &&
            i.A.queryDirectory(p, (i, T) => {
                ++e,
                    null == i && null != T && (A[p] = T),
                    e === t.length &&
                        n.h.dispatch({ type: "INSTALLATION_LOCATION_FETCH_METADATA", metadataPayload: A });
            });
}
