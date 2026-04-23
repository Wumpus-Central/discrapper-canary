"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(506774),
    s = n(228366),
    a = n(617617);
let o = {},
    l = {};
function d() {
    let e = a.A.settings;
    return {
        gifAutoPlay: e.textAndImages?.gifAutoPlay?.value,
        animateEmoji: e.textAndImages?.animateEmoji?.value,
        animateStickers: e.textAndImages?.animateStickers?.value,
    };
}
function _() {
    return (l = d()), !1;
}
class u extends i.Ay.PersistedStore {
    static displayName = "UserSettingsOverridesStore";
    static persistKey = "UserSettingsOverridesStore";
    static migrations = [
        () => {
            let e = r.w.get("UserSettingsStoreOverrides") ?? {};
            return r.w.remove("UserSettingsStoreOverrides"), e;
        },
    ];
    initialize(e) {
        (o = e ?? {}), this.syncWith([a.A], _);
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
let c = new u(s.h, {
    USER_SETTINGS_PROTO_UPDATE: function () {
        let e = d(),
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
