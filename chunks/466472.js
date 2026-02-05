n.d(t, { JN: () => l, SA: () => a, UQ: () => o, a8: () => s });
var i = n(73153),
    r = n(962052);
function a(e) {
    r.A.queryDirectory(e, (t, n) => {
        null == t && null != n && i.h.dispatch({ type: "INSTALLATION_LOCATION_ADD", path: e, metadata: n });
    });
}
function l(e) {
    i.h.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: e });
}
function s(e, t) {
    let { label: n, isDefault: r } = t;
    i.h.dispatch({ type: "INSTALLATION_LOCATION_UPDATE", path: e, label: n, isDefault: r });
}
function o(e) {
    let t = {},
        n = 0;
    for (let a of e)
        null != a &&
            "string" == typeof a &&
            r.A.queryDirectory(a, (r, l) => {
                ++n,
                    null == r && null != l && (t[a] = l),
                    n === e.length &&
                        i.h.dispatch({ type: "INSTALLATION_LOCATION_FETCH_METADATA", metadataPayload: t });
            });
}
