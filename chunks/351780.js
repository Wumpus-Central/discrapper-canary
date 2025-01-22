var i,
    a = r(392711);
var o = r(442837),
    s = r(570140),
    l = r(524484);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = !1,
    d = {
        settingsVisible: !1,
        enabled: !1,
        combosEnabled: !0,
        combosRequiredCount: 5,
        comboSoundsEnabled: !0,
        screenshakeEnabled: !0,
        screenshakeEnabledLocations: {
            [l.oZ.CHAT_INPUT]: !0,
            [l.oZ.VOICE_USER]: !1,
            [l.oZ.MENTION]: !1
        },
        shakeIntensity: 1,
        confettiEnabled: !0,
        confettiEnabledLocations: {
            [l.Hn.CHAT_INPUT]: !0,
            [l.Hn.REACTION]: !0,
            [l.Hn.MEMBER_USER]: !0,
            [l.Hn.CALL_TILE]: !0
        },
        confettiSize: 16,
        confettiCount: 5,
        warningSeen: !1
    },
    f = (0, a.cloneDeep)(d);
function p(e) {
    let { settings: n } = e;
    f = {
        ...f,
        ...n
    };
}
function h() {
    c = !0;
}
class _ extends (i = o.ZP.DeviceSettingsStore) {
    initialize(e) {
        f = {
            ...f,
            ...e
        };
    }
    getUserAgnosticState() {
        return f;
    }
    get settingsVisible() {
        return f.settingsVisible;
    }
    isEnabled() {
        let { confettiLocation: e, shakeLocation: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = null == e || (f.confettiEnabled && f.confettiEnabledLocations[e]),
            i = null == n || (f.screenshakeEnabled && f.screenshakeEnabledLocations[n]);
        return this.settingsVisible && !c && f.enabled && r && i;
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
u(_, 'displayName', 'PoggermodeSettingsStore'),
    u(_, 'persistKey', 'PoggermodeSettingsStore'),
    (n.Z = new _(s.Z, {
        POGGERMODE_SETTINGS_UPDATE: p,
        POGGERMODE_TEMPORARILY_DISABLED: h
    }));
