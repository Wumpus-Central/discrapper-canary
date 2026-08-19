"use strict";
n.d(t, { A: () => u });
var i = n(435558),
    r = n(17928),
    a = n(228366),
    s = n(31408);
let l = !1,
    o = {
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
    d = (0, i.cloneDeep)(o);
class c extends r.Ay.DeviceSettingsStore {
    static displayName = "PoggermodeSettingsStore";
    static persistKey = "PoggermodeSettingsStore";
    initialize(e) {
        d = { ...d, ...e };
    }
    getUserAgnosticState() {
        return d;
    }
    get settingsVisible() {
        return d.settingsVisible;
    }
    isEnabled() {
        let { confettiLocation: e, shakeLocation: t } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null == e || (d.confettiEnabled && d.confettiEnabledLocations[e]),
            i = null == t || (d.screenshakeEnabled && d.screenshakeEnabledLocations[t]);
        return this.settingsVisible && !l && d.enabled && n && i;
    }
    get shakeIntensity() {
        return this.isEnabled() ? d.shakeIntensity : 0;
    }
    get combosRequiredCount() {
        return this.isEnabled() ? d.combosRequiredCount : 0;
    }
    get screenshakeEnabled() {
        return d.screenshakeEnabled;
    }
    get screenshakeEnabledLocations() {
        return d.screenshakeEnabledLocations;
    }
    get combosEnabled() {
        return d.combosEnabled;
    }
    get comboSoundsEnabled() {
        return d.comboSoundsEnabled;
    }
}
let u = new c(a.h, {
    POGGERMODE_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        d = { ...d, ...t };
    },
    POGGERMODE_TEMPORARILY_DISABLED: function () {
        l = !0;
    },
});
