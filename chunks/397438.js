"use strict";
n.d(t, { A: () => g });
var r = n(311907),
    i = n(506774),
    a = n(73153),
    s = n(617617);
let o = {},
    l = {};
function u() {
    let e = s.A.settings;
    return {
        gifAutoPlay: e.textAndImages?.gifAutoPlay?.value,
        animateEmoji: e.textAndImages?.animateEmoji?.value,
        animateStickers: e.textAndImages?.animateStickers?.value,
    };
}
function c() {
    return (l = u()), !1;
}
function d() {
    o = {};
}
function _() {
    o = {};
}
function f(e) {
    let { settings: t } = e;
    o = { ...o, ...t };
}
function p(e) {
    let { settings: t } = e;
    for (let e of t) delete o[e];
}
function h() {
    let e = u(),
        t = !1;
    for (let n in e) {
        let r = n;
        e[r] !== l[r] && (delete o[r], (t = !0));
    }
    return t;
}
class m extends r.Ay.PersistedStore {
    static displayName = "UserSettingsOverridesStore";
    static persistKey = "UserSettingsOverridesStore";
    static migrations = [
        () => {
            let e = i.w.get("UserSettingsStoreOverrides") ?? {};
            return i.w.remove("UserSettingsStoreOverrides"), e;
        },
    ];
    initialize(e) {
        (o = e ?? {}), this.syncWith([s.A], c);
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
let g = new m(a.h, {
    USER_SETTINGS_PROTO_UPDATE: h,
    USER_SETTINGS_OVERRIDE_APPLY: f,
    USER_SETTINGS_OVERRIDE_CLEAR: p,
    LOGOUT: d,
    LOGIN_SUCCESS: _,
});
