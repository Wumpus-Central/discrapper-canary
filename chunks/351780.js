n.d(t, { Z: () => m });
var r,
    i = n(392711),
    o = n(442837),
    a = n(570140),
    s = n(524484);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = !1,
    d = {
        settingsVisible: !1,
        enabled: !1,
        combosEnabled: !0,
        combosRequiredCount: 5,
        comboSoundsEnabled: !0,
        screenshakeEnabled: !0,
        screenshakeEnabledLocations: {
            [s.oZ.CHAT_INPUT]: !0,
            [s.oZ.VOICE_USER]: !1,
            [s.oZ.MENTION]: !1
        },
        shakeIntensity: 1,
        confettiEnabled: !0,
        confettiEnabledLocations: {
            [s.Hn.CHAT_INPUT]: !0,
            [s.Hn.REACTION]: !0,
            [s.Hn.MEMBER_USER]: !0,
            [s.Hn.CALL_TILE]: !0
        },
        confettiSize: 16,
        confettiCount: 5,
        warningSeen: !1
    },
    f = (0, i.cloneDeep)(d);
function _(e) {
    let { settings: t } = e;
    f = c({}, f, t);
}
function p() {
    u = !0;
}
class h extends (r = o.ZP.DeviceSettingsStore) {
    initialize(e) {
        f = c({}, f, e);
    }
    getUserAgnosticState() {
        return f;
    }
    get settingsVisible() {
        return f.settingsVisible;
    }
    isEnabled() {
        let { confettiLocation: e, shakeLocation: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null == e || (f.confettiEnabled && f.confettiEnabledLocations[e]),
            r = null == t || (f.screenshakeEnabled && f.screenshakeEnabledLocations[t]);
        return this.settingsVisible && !u && f.enabled && n && r;
    }
    get shakeIntensity() {
        return this.isEnabled() ? f.shakeIntensity : 0;
    }
    get combosRequiredCount() {
        return this.isEnabled() ? f.combosRequiredCount : 0;
    }
    get screenshakeEnabled() {
        return f.screenshakeEnabled;
    }
    get screenshakeEnabledLocations() {
        return f.screenshakeEnabledLocations;
    }
    get combosEnabled() {
        return f.combosEnabled;
    }
    get comboSoundsEnabled() {
        return f.comboSoundsEnabled;
    }
}
l(h, 'displayName', 'PoggermodeSettingsStore'), l(h, 'persistKey', 'PoggermodeSettingsStore');
let m = new h(a.Z, {
    POGGERMODE_SETTINGS_UPDATE: _,
    POGGERMODE_TEMPORARILY_DISABLED: p
});
