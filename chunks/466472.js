"use strict";
n.d(t, { JN: () => r, SA: () => l, UQ: () => o, a8: () => a });
var i = n(73153),
    s = n(962052);
function l(e) {
    s.A.queryDirectory(e, (t, n) => {
        null == t && null != n && i.h.dispatch({ type: "INSTALLATION_LOCATION_ADD", path: e, metadata: n });
    });
}
function r(e) {
    i.h.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: e });
}
function a(e, t) {
    let { label: n, isDefault: s } = t;
    i.h.dispatch({ type: "INSTALLATION_LOCATION_UPDATE", path: e, label: n, isDefault: s });
}
function o(e) {
    let t = {},
        n = 0;
    for (let l of e)
        null != l &&
            "string" == typeof l &&
            s.A.queryDirectory(l, (s, r) => {
                ++n,
                    null == s && null != r && (t[l] = r),
                    n === e.length &&
                        i.h.dispatch({ type: "INSTALLATION_LOCATION_FETCH_METADATA", metadataPayload: t });
            });
}
