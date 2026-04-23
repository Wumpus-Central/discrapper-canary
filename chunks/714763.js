"use strict";
n.d(t, { A: () => d }), n(321073);
var i = n(17928),
    r = n(228366);
let s = [],
    a = !1,
    o = s;
class l extends i.Ay.PersistedStore {
    static displayName = "SecureFramesPersistedStore";
    static persistKey = "SecureFramesPersistedStore";
    initialize(e) {
        (a = e?.persistentCodesEnabled ?? !1), (o = e?.uploadedKeyVersions ?? s);
    }
    getState() {
        return { persistentCodesEnabled: a, uploadedKeyVersions: o };
    }
    getPersistentCodesEnabled() {
        return a;
    }
    getUploadedKeyVersionsCached() {
        return o;
    }
}
let d = new l(r.h, {
    SECURE_FRAMES_SETTINGS_UPDATE: function (e) {
        a = e.persistentCodesEnabled;
    },
    SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: function (e) {
        let t = [];
        for (let n of o) {
            if (n === e.keyVersion) return;
            t.push(n);
        }
        t.push(e.keyVersion), (o = t);
    },
    SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: function () {
        o = s;
    },
});
