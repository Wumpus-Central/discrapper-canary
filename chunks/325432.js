n.d(t, {
    RY: function () {
        return l;
    },
    Tb: function () {
        return s;
    },
    ec: function () {
        return o;
    },
    iD: function () {
        return a;
    }
}),
    n(47120);
var i = n(570140),
    r = n(830168);
function l(e) {
    r.Z.queryDirectory(e, (t, n) => {
        if (null == t && null != n)
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
    let { label: n, isDefault: r } = t;
    i.Z.dispatch({
        type: 'INSTALLATION_LOCATION_UPDATE',
        path: e,
        label: n,
        isDefault: r
    });
}
function o(e) {
    let t = {},
        n = 0;
    for (let l of e) {
        if (null != l && 'string' == typeof l)
            r.Z.queryDirectory(l, (r, a) => {
                ++n,
                    null == r && null != a && (t[l] = a),
                    n === e.length &&
                        i.Z.dispatch({
                            type: 'INSTALLATION_LOCATION_FETCH_METADATA',
                            metadataPayload: t
                        });
            });
    }
}
