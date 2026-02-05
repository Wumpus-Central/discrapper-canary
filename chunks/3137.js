"use strict";
n.d(t, { A: () => f });
var r = n(735438),
    i = n(311907),
    a = n(73153),
    s = n(31408);
let o = !1,
    l = {
        settingsVisible: !1,
        enabled: !1,
        combosEnabled: !0,
        combosRequiredCount: 5,
        comboSoundsEnabled: !0,
        screenshakeEnabled: !0,
        screenshakeEnabledLocations: { [s.uD.CHAT_INPUT]: !0, [s.uD.VOICE_USER]: !1, [s.uD.MENTION]: !1 },
        shakeIntensity: 1,
        confettiEnabled: !0,
        confettiEnabledLocations: {
            [s.k.CHAT_INPUT]: !0,
            [s.k.REACTION]: !0,
            [s.k.MEMBER_USER]: !0,
            [s.k.CALL_TILE]: !0,
        },
        confettiSize: 16,
        confettiCount: 5,
        warningSeen: !1,
    },
    u = (0, r.cloneDeep)(l);
function c(e) {
    let { settings: t } = e;
    u = { ...u, ...t };
}
function d() {
    o = !0;
}
class _ extends i.Ay.DeviceSettingsStore {
    static displayName = "PoggermodeSettingsStore";
    static persistKey = "PoggermodeSettingsStore";
    initialize(e) {
        u = { ...u, ...e };
    }
    getUserAgnosticState() {
        return u;
    }
    get settingsVisible() {
        return u.settingsVisible;
    }
    isEnabled() {
        let { confettiLocation: e, shakeLocation: t } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null == e || (u.confettiEnabled && u.confettiEnabledLocations[e]),
            r = null == t || (u.screenshakeEnabled && u.screenshakeEnabledLocations[t]);
        return this.settingsVisible && !o && u.enabled && n && r;
    }
    get shakeIntensity() {
        return this.isEnabled() ? u.shakeIntensity : 0;
    }
    get combosRequiredCount() {
        return this.isEnabled() ? u.combosRequiredCount : 0;
    }
    get screenshakeEnabled() {
        return u.screenshakeEnabled;
    }
    get screenshakeEnabledLocations() {
        return u.screenshakeEnabledLocations;
    }
    get combosEnabled() {
        return u.combosEnabled;
    }
    get comboSoundsEnabled() {
        return u.comboSoundsEnabled;
    }
}
let f = new _(a.h, { POGGERMODE_SETTINGS_UPDATE: c, POGGERMODE_TEMPORARILY_DISABLED: d });
