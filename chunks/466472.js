"use strict";
n.d(t, { JN: () => r, SA: () => s, UQ: () => o, a8: () => a });
var l = n(228366),
    i = n(962052);
function s(e) {
    i.A.queryDirectory(e, (t, n) => {
        null == t && null != n && l.h.dispatch({ type: "INSTALLATION_LOCATION_ADD", path: e, metadata: n });
    });
}
function r(e) {
    l.h.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: e });
}
function a(e, t) {
    let { label: n, isDefault: i } = t;
    l.h.dispatch({ type: "INSTALLATION_LOCATION_UPDATE", path: e, label: n, isDefault: i });
}
function o(e) {
    let t = {},
        n = 0;
    for (let s of e)
        null != s &&
            "string" == typeof s &&
            i.A.queryDirectory(s, (i, r) => {
                ++n,
                    null == i && null != r && (t[s] = r),
                    n === e.length &&
                        l.h.dispatch({ type: "INSTALLATION_LOCATION_FETCH_METADATA", metadataPayload: t });
            });
}
