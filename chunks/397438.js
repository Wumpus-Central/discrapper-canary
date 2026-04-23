"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(506774),
    s = n(73153),
    a = n(617617);
let o = {},
    l = {};
function u() {
    let e = a.A.settings;
    return {
        gifAutoPlay: e.textAndImages?.gifAutoPlay?.value,
        animateEmoji: e.textAndImages?.animateEmoji?.value,
        animateStickers: e.textAndImages?.animateStickers?.value,
    };
}
function c() {
    return (l = u()), !1;
}
class d extends r.Ay.PersistedStore {
    static displayName = "UserSettingsOverridesStore";
    static persistKey = "UserSettingsOverridesStore";
    static migrations = [
        () => {
            let e = i.w.get("UserSettingsStoreOverrides") ?? {};
            return i.w.remove("UserSettingsStoreOverrides"), e;
        },
    ];
    initialize(e) {
        (o = e ?? {}), this.syncWith([a.A], c);
    }
    getState() {
        return o;
    }
    getAppliedOverrideReasonKey(e) {
        return o[e]?.reasonKey;
    }
    getOverride(e) {
        return o[e];
    }
}
let _ = new d(s.h, {
    USER_SETTINGS_PROTO_UPDATE: function () {
        let e = u(),
            t = !1;
        for (let n in e) e[n] !== l[n] && (delete o[n], (t = !0));
        return t;
    },
    USER_SETTINGS_OVERRIDE_APPLY: function (e) {
        let { settings: t } = e;
        o = { ...o, ...t };
    },
    USER_SETTINGS_OVERRIDE_CLEAR: function (e) {
        let { settings: t } = e;
        for (let e of t) delete o[e];
    },
    LOGOUT: function () {
        o = {};
    },
    LOGIN_SUCCESS: function () {
        o = {};
    },
});
