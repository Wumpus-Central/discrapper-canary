n.d(t, { Z: () => m });
var r,
    i = n(392711),
    a = n(442837),
    o = n(570140),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
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
    _ = (0, i.cloneDeep)(d);
function f(e) {
    let { settings: t } = e;
    _ = c({}, _, t);
}
function p() {
    u = !0;
}
class h extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        _ = c({}, _, e);
    }
    getUserAgnosticState() {
        return _;
    }
    get settingsVisible() {
        return _.settingsVisible;
    }
    isEnabled() {
        let { confettiLocation: e, shakeLocation: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null == e || (_.confettiEnabled && _.confettiEnabledLocations[e]),
            r = null == t || (_.screenshakeEnabled && _.screenshakeEnabledLocations[t]);
        return this.settingsVisible && !u && _.enabled && n && r;
    }
    get shakeIntensity() {
        return this.isEnabled() ? _.shakeIntensity : 0;
    }
    get combosRequiredCount() {
        return this.isEnabled() ? _.combosRequiredCount : 0;
    }
    get screenshakeEnabled() {
        return _.screenshakeEnabled;
    }
    get screenshakeEnabledLocations() {
        return _.screenshakeEnabledLocations;
    }
    get combosEnabled() {
        return _.combosEnabled;
    }
    get comboSoundsEnabled() {
        return _.comboSoundsEnabled;
    }
}
(l(h, 'displayName', 'PoggermodeSettingsStore'), l(h, 'persistKey', 'PoggermodeSettingsStore'));
let m = new h(o.Z, {
    POGGERMODE_SETTINGS_UPDATE: f,
    POGGERMODE_TEMPORARILY_DISABLED: p
});
