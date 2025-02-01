n.d(t, { Z: () => h });
var i,
    r = n(392711),
    a = n(442837),
    s = n(570140),
    o = n(524484);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = !1,
    c = {
        settingsVisible: !1,
        enabled: !1,
        combosEnabled: !0,
        combosRequiredCount: 5,
        comboSoundsEnabled: !0,
        screenshakeEnabled: !0,
        screenshakeEnabledLocations: {
            [o.oZ.CHAT_INPUT]: !0,
            [o.oZ.VOICE_USER]: !1,
            [o.oZ.MENTION]: !1
        },
        shakeIntensity: 1,
        confettiEnabled: !0,
        confettiEnabledLocations: {
            [o.Hn.CHAT_INPUT]: !0,
            [o.Hn.REACTION]: !0,
            [o.Hn.MEMBER_USER]: !0,
            [o.Hn.CALL_TILE]: !0
        },
        confettiSize: 16,
        confettiCount: 5,
        warningSeen: !1
    },
    d = (0, r.cloneDeep)(c);
function f(e) {
    let { settings: t } = e;
    d = {
        ...d,
        ...t
    };
}
function _() {
    u = !0;
}
class p extends (i = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        d = {
            ...d,
            ...e
        };
    }
    getUserAgnosticState() {
        return d;
    }
    get settingsVisible() {
        return d.settingsVisible;
    }
    isEnabled() {
        let { confettiLocation: e, shakeLocation: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null == e || (d.confettiEnabled && d.confettiEnabledLocations[e]),
            i = null == t || (d.screenshakeEnabled && d.screenshakeEnabledLocations[t]);
        return this.settingsVisible && !u && d.enabled && n && i;
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
l(p, 'displayName', 'PoggermodeSettingsStore'), l(p, 'persistKey', 'PoggermodeSettingsStore');
let h = new p(s.Z, {
    POGGERMODE_SETTINGS_UPDATE: f,
    POGGERMODE_TEMPORARILY_DISABLED: _
});
