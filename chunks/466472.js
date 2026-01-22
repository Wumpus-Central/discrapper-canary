n.d(t, {
    JN: () => a,
    SA: () => l,
    UQ: () => o,
    a8: () => s,
}),
    n(896048);
var r = n(73153),
    i = n(962052);

function l(e) {
    i.A.queryDirectory(e, (t, n) => {
        null == t &&
            null != n &&
            r.h.dispatch({
                type: "INSTALLATION_LOCATION_ADD",
                path: e,
                metadata: n,
            });
    });
}

function a(e) {
    r.h.dispatch({
        type: "INSTALLATION_LOCATION_REMOVE",
        path: e,
    });
}

function s(e, t) {
    let { label: n, isDefault: i } = t;
    r.h.dispatch({
        type: "INSTALLATION_LOCATION_UPDATE",
        path: e,
        label: n,
        isDefault: i,
    });
}

function o(e) {
    let t = {},
        n = 0;
    for (let l of e)
        null != l &&
            "string" == typeof l &&
            i.A.queryDirectory(l, (i, a) => {
                ++n,
                    null == i && null != a && (t[l] = a),
                    n === e.length &&
                        r.h.dispatch({
                            type: "INSTALLATION_LOCATION_FETCH_METADATA",
                            metadataPayload: t,
                        });
            });
}
