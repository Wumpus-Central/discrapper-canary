"use strict";
n.d(t, { A: () => d });
var r = n(735438),
    i = n(311907),
    s = n(73153),
    a = n(31408);
let o = !1,
    l = {
        settingsVisible: !1,
        enabled: !1,
        combosEnabled: !0,
        combosRequiredCount: 5,
        comboSoundsEnabled: !0,
        screenshakeEnabled: !0,
        screenshakeEnabledLocations: { [a.uD.CHAT_INPUT]: !0, [a.uD.VOICE_USER]: !1, [a.uD.MENTION]: !1 },
        shakeIntensity: 1,
        confettiEnabled: !0,
        confettiEnabledLocations: {
            [a.k.CHAT_INPUT]: !0,
            [a.k.REACTION]: !0,
            [a.k.MEMBER_USER]: !0,
            [a.k.CALL_TILE]: !0,
        },
        confettiSize: 16,
        confettiCount: 5,
        warningSeen: !1,
    },
    u = (0, r.cloneDeep)(l);
class c extends i.Ay.DeviceSettingsStore {
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
let d = new c(s.h, {
    POGGERMODE_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        u = { ...u, ...t };
    },
    POGGERMODE_TEMPORARILY_DISABLED: function () {
        o = !0;
    },
});
