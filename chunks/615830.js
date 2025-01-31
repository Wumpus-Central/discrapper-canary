n.d(t, { Z: () => p }), n(653041), n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = [],
    l = !1,
    u = o;
function c(e) {
    l = e.persistentCodesEnabled;
}
function d(e) {
    let t = [];
    for (let n of u) {
        if (n === e.keyVersion) return;
        t.push(n);
    }
    t.push(e.keyVersion), (u = t);
}
function f() {
    u = o;
}
class _ extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        (l = null !== (t = null == e ? void 0 : e.persistentCodesEnabled) && void 0 !== t && t), (u = null !== (n = null == e ? void 0 : e.uploadedKeyVersions) && void 0 !== n ? n : o);
    }
    getState() {
        return {
            persistentCodesEnabled: l,
            uploadedKeyVersions: u
        };
    }
    getPersistentCodesEnabled() {
        return l;
    }
    getUploadedKeyVersionsCached() {
        return u;
    }
}
s(_, 'displayName', 'SecureFramesPersistedStore'), s(_, 'persistKey', 'SecureFramesPersistedStore');
let p = new _(a.Z, {
    SECURE_FRAMES_SETTINGS_UPDATE: c,
    SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: d,
    SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: f
});
