n.d(t, {
    RY: () => r,
    Tb: () => s,
    ec: () => o,
    iD: () => a
}),
    n(47120);
var i = n(570140),
    l = n(830168);
function r(e) {
    l.Z.queryDirectory(e, (t, n) => {
        null == t &&
            null != n &&
            i.Z.dispatch({
                type: 'INSTALLATION_LOCATION_ADD',
                path: e,
                metadata: n
            });
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'INSTALLATION_LOCATION_REMOVE',
        path: e
    });
}
function s(e, t) {
    let { label: n, isDefault: l } = t;
    i.Z.dispatch({
        type: 'INSTALLATION_LOCATION_UPDATE',
        path: e,
        label: n,
        isDefault: l
    });
}
function o(e) {
    let t = {},
        n = 0;
    for (let r of e)
        null != r &&
            'string' == typeof r &&
            l.Z.queryDirectory(r, (l, a) => {
                ++n,
                    null == l && null != a && (t[r] = a),
                    n === e.length &&
                        i.Z.dispatch({
                            type: 'INSTALLATION_LOCATION_FETCH_METADATA',
                            metadataPayload: t
                        });
            });
}
