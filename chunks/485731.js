let i;
n.d(t, { Z: () => A });
var r,
    a = n(442837),
    s = n(570140),
    o = n(314897),
    l = n(979651),
    u = n(1163);
function c(e, t, n) {
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
let d = 5,
    f = {
        hqStreamingFrameAnimationPlayed: !1,
        hqStreamingPopoutDismissed: !1,
        hqStreamingOptInPopoutDismissedCount: 0,
        hqStreamingOptInPopoutDismissed: !1,
        hqStreamingIsEnabled: !1,
        hqStreamingDidEnable: !1
    },
    _ = !1,
    p = f;
function h(e) {
    p = {
        ...p,
        ...(null == e ? void 0 : e(p))
    };
}
function m() {
    h(() => ({ hqStreamingFrameAnimationPlayed: !0 }));
}
function g() {
    h(() => ({ hqStreamingPopoutDismissed: !0 }));
}
function E() {
    p.hqStreamingOptInPopoutDismissed ||
        h((e) => ({
            hqStreamingOptInPopoutDismissedCount: e.hqStreamingOptInPopoutDismissedCount + 1,
            hqStreamingOptInPopoutDismissed: !0
        }));
}
function v(e) {
    let { shouldShow: t } = e,
        n = null != i && i.extendedOptInDuration ? d : 1;
    _ = t && p.hqStreamingOptInPopoutDismissedCount < n;
}
function y(e) {
    let { enabled: t } = e;
    h((e) => ({
        hqStreamingIsEnabled: t,
        hqStreamingDidEnable: t || e.hqStreamingDidEnable
    }));
}
function I() {
    h(() => f);
}
function b() {
    null == l.Z.getVoiceStateForUser(o.default.getId()) &&
        h(() => ({
            hqStreamingOptInPopoutDismissed: !1,
            hqStreamingFrameAnimationPlayed: !1
        }));
}
function T() {
    i = u.Z.getCurrentConfig({ location: 'handleExperimentFetch' }, { autoTrackExposure: !1 });
}
class S extends (r = a.ZP.PersistedStore) {
    getState() {
        return p;
    }
    shouldShowOptInPopout() {
        return _;
    }
    initialize(e) {
        null != e && (p = e);
    }
}
c(S, 'displayName', 'PerksDemosUIState'), c(S, 'persistKey', 'PerksDemosUIState');
let A = new S(s.Z, {
    PERMIUM_PERKS_DEMO_FRAME_ANIMATION_PLAYED: m,
    PREMIUM_PERKS_DEMO_POPOUT_DISMISSED: g,
    PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_DISMISSED: E,
    PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_SHOULD_SHOW: v,
    PREMIUM_PERKS_DEMO_ENABLED: y,
    PREMIUM_PERKS_DEMO_UI_RESET: I,
    VOICE_STATE_UPDATES: b,
    CONNECTION_OPEN: T,
    EXPERIMENTS_FETCH_SUCCESS: T,
    EXPERIMENT_OVERRIDE_BUCKET: T,
    LOGOUT: I
});
