var i,
    a = r(653041);
var o = r(47120);
var s = r(442837),
    l = r(570140);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = [],
    d = !1,
    f = c;
function p(e) {
    d = e.persistentCodesEnabled;
}
function h(e) {
    let n = [];
    for (let r of f) {
        if (r === e.keyVersion) return;
        n.push(r);
    }
    n.push(e.keyVersion), (f = n);
}
function _() {
    f = c;
}
class m extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        var n, r;
        (d = null !== (n = null == e ? void 0 : e.persistentCodesEnabled) && void 0 !== n && n), (f = null !== (r = null == e ? void 0 : e.uploadedKeyVersions) && void 0 !== r ? r : c);
    }
    getState() {
        return {
            persistentCodesEnabled: d,
            uploadedKeyVersions: f
        };
    }
    getPersistentCodesEnabled() {
        return d;
    }
    getUploadedKeyVersionsCached() {
        return f;
    }
}
u(m, 'displayName', 'SecureFramesPersistedStore'),
    u(m, 'persistKey', 'SecureFramesPersistedStore'),
    (n.Z = new m(l.Z, {
        SECURE_FRAMES_SETTINGS_UPDATE: p,
        SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: h,
        SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: _
    }));
