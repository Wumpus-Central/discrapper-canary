let i;
var a,
    o = r(442837),
    s = r(570140),
    l = r(314897),
    u = r(979651),
    c = r(1163);
function d(e, n, r) {
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
let f = 5,
    p = {
        hqStreamingFrameAnimationPlayed: !1,
        hqStreamingPopoutDismissed: !1,
        hqStreamingOptInPopoutDismissedCount: 0,
        hqStreamingOptInPopoutDismissed: !1,
        hqStreamingIsEnabled: !1,
        hqStreamingDidEnable: !1
    },
    h = !1,
    _ = p;
function m(e) {
    _ = {
        ..._,
        ...(null == e ? void 0 : e(_))
    };
}
function g() {
    m(() => ({ hqStreamingFrameAnimationPlayed: !0 }));
}
function E() {
    m(() => ({ hqStreamingPopoutDismissed: !0 }));
}
function v() {
    !_.hqStreamingOptInPopoutDismissed &&
        m((e) => ({
            hqStreamingOptInPopoutDismissedCount: e.hqStreamingOptInPopoutDismissedCount + 1,
            hqStreamingOptInPopoutDismissed: !0
        }));
}
function y(e) {
    let { shouldShow: n } = e,
        r = null != i && i.extendedOptInDuration ? f : 1;
    h = n && _.hqStreamingOptInPopoutDismissedCount < r;
}
function b(e) {
    let { enabled: n } = e;
    m((e) => ({
        hqStreamingIsEnabled: n,
        hqStreamingDidEnable: n || e.hqStreamingDidEnable
    }));
}
function I() {
    m(() => p);
}
function T() {
    if (null == u.Z.getVoiceStateForUser(l.default.getId()))
        m(() => ({
            hqStreamingOptInPopoutDismissed: !1,
            hqStreamingFrameAnimationPlayed: !1
        }));
}
function S() {
    i = c.Z.getCurrentConfig({ location: 'handleExperimentFetch' }, { autoTrackExposure: !1 });
}
class A extends (a = o.ZP.PersistedStore) {
    getState() {
        return _;
    }
    shouldShowOptInPopout() {
        return h;
    }
    initialize(e) {
        null != e && (_ = e);
    }
}
d(A, 'displayName', 'PerksDemosUIState'),
    d(A, 'persistKey', 'PerksDemosUIState'),
    (n.Z = new A(s.Z, {
        PERMIUM_PERKS_DEMO_FRAME_ANIMATION_PLAYED: g,
        PREMIUM_PERKS_DEMO_POPOUT_DISMISSED: E,
        PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_DISMISSED: v,
        PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_SHOULD_SHOW: y,
        PREMIUM_PERKS_DEMO_ENABLED: b,
        PREMIUM_PERKS_DEMO_UI_RESET: I,
        VOICE_STATE_UPDATES: T,
        CONNECTION_OPEN: S,
        EXPERIMENTS_FETCH_SUCCESS: S,
        EXPERIMENT_OVERRIDE_BUCKET: S,
        LOGOUT: I
    }));
