n.d(t, { Z: () => p }), n(653041), n(47120);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = [],
    l = !1,
    c = s;
function u(e) {
    l = e.persistentCodesEnabled;
}
function d(e) {
    let t = [];
    for (let n of c) {
        if (n === e.keyVersion) return;
        t.push(n);
    }
    t.push(e.keyVersion), (c = t);
}
function f() {
    c = s;
}
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        (l = null != (t = null == e ? void 0 : e.persistentCodesEnabled) && t), (c = null != (n = null == e ? void 0 : e.uploadedKeyVersions) ? n : s);
    }
    getState() {
        return {
            persistentCodesEnabled: l,
            uploadedKeyVersions: c
        };
    }
    getPersistentCodesEnabled() {
        return l;
    }
    getUploadedKeyVersionsCached() {
        return c;
    }
}
a(_, 'displayName', 'SecureFramesPersistedStore'), a(_, 'persistKey', 'SecureFramesPersistedStore');
let p = new _(o.Z, {
    SECURE_FRAMES_SETTINGS_UPDATE: u,
    SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: d,
    SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: f
});
