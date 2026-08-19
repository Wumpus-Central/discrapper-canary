"use strict";
n.d(t, { A: () => d }), n(321073);
var i = n(17928),
    r = n(228366);
let a = [],
    s = !1,
    l = a;
class o extends i.Ay.PersistedStore {
    static displayName = "SecureFramesPersistedStore";
    static persistKey = "SecureFramesPersistedStore";
    initialize(e) {
        (s = e?.persistentCodesEnabled ?? !1), (l = e?.uploadedKeyVersions ?? a);
    }
    getState() {
        return { persistentCodesEnabled: s, uploadedKeyVersions: l };
    }
    getPersistentCodesEnabled() {
        return s;
    }
    getUploadedKeyVersionsCached() {
        return l;
    }
}
let d = new o(r.h, {
    SECURE_FRAMES_SETTINGS_UPDATE: function (e) {
        s = e.persistentCodesEnabled;
    },
    SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: function (e) {
        let t = [];
        for (let n of l) {
            if (n === e.keyVersion) return;
            t.push(n);
        }
        t.push(e.keyVersion), (l = t);
    },
    SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: function () {
        l = a;
    },
});
