"use strict";
n.d(t, { A: () => _ }), n(321073);
var r = n(311907),
    i = n(73153);
let a = [],
    s = !1,
    o = a;
function l(e) {
    s = e.persistentCodesEnabled;
}
function u(e) {
    let t = [];
    for (let n of o) {
        if (n === e.keyVersion) return;
        t.push(n);
    }
    t.push(e.keyVersion), (o = t);
}
function c() {
    o = a;
}
class d extends r.Ay.PersistedStore {
    static displayName = "SecureFramesPersistedStore";
    static persistKey = "SecureFramesPersistedStore";
    initialize(e) {
        (s = e?.persistentCodesEnabled ?? !1), (o = e?.uploadedKeyVersions ?? a);
    }
    getState() {
        return { persistentCodesEnabled: s, uploadedKeyVersions: o };
    }
    getPersistentCodesEnabled() {
        return s;
    }
    getUploadedKeyVersionsCached() {
        return o;
    }
}
let _ = new d(i.h, {
    SECURE_FRAMES_SETTINGS_UPDATE: l,
    SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: u,
    SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: c,
});
