n.d(t, {
    A: () => _,
}),
    n(321073),
    n(896048);
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = [],
    l = !1,
    c = o;

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
    c = o;
}
class p extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t, n;
        (l = null != (t = null == e ? void 0 : e.persistentCodesEnabled) && t),
            (c = null != (n = null == e ? void 0 : e.uploadedKeyVersions) ? n : o);
    }
    getState() {
        return {
            persistentCodesEnabled: l,
            uploadedKeyVersions: c,
        };
    }
    getPersistentCodesEnabled() {
        return l;
    }
    getUploadedKeyVersionsCached() {
        return c;
    }
}
s(p, "displayName", "SecureFramesPersistedStore"), s(p, "persistKey", "SecureFramesPersistedStore");
let _ = new p(a.h, {
    SECURE_FRAMES_SETTINGS_UPDATE: u,
    SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: d,
    SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: f,
});
