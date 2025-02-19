n.d(t, { ZP: () => C });
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(433517),
    l = n(570140);
n(541049);
var c = n(36645),
    u = n(874893),
    d = n(981631),
    f = n(957825),
    p = n(969943);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let m = (window.innerWidth - d.PrS) / 2,
    g = 'standard',
    E = null;
function v() {
    return null == E && (E = Math.max((window.innerWidth - d.PrS) * 0.4, d.$Y6)), E;
}
let b = {};
function y(e) {
    b = h({}, b, e.settings);
}
function O() {
    b = {
        useSystemTheme: b.useSystemTheme,
        darkSidebar: b.darkSidebar
    };
}
function S() {
    null == b && (b = {});
}
function I() {}
function T() {
    return (b.darkSidebar = !b.darkSidebar), !0;
}
function N() {
    var e;
    let t = a.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
    return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e;
}
class A extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        var t;
        (b = null != e ? e : {}).darkSidebar = null !== (t = b.darkSidebar) && void 0 !== t ? t : N();
    }
    getUserAgnosticState() {
        return b;
    }
    get displayCompactAvatars() {
        var e;
        return null !== (e = b.displayCompactAvatars) && void 0 !== e && e;
    }
    get lowQualityImageMode() {
        var e;
        return null !== (e = b.lowQualityImageMode) && void 0 !== e && e;
    }
    get videoUploadQuality() {
        var e;
        return null !== (e = b.videoUploadQuality) && void 0 !== e ? e : g;
    }
    get dataSavingMode() {
        var e, t;
        return null !== (t = null !== (e = b.dataSavingMode) && void 0 !== e ? e : b.lowQualityImageMode) && void 0 !== t && t;
    }
    get expressionPickerWidth() {
        var e;
        return null !== (e = b.expressionPickerWidth) && void 0 !== e ? e : f._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null !== (e = b.messageRequestSidebarWidth) && void 0 !== e ? e : d.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null !== (e = b.threadSidebarWidth) && void 0 !== e ? e : d.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null !== (e = b.postSidebarWidth) && void 0 !== e ? e : m;
    }
    get callChatSidebarWidth() {
        var e;
        return null !== (e = b.callChatSidebarWidth) && void 0 !== e ? e : d.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null !== (e = b.homeSidebarWidth) && void 0 !== e ? e : v();
    }
    get callParticipantsSidebarWidth() {
        var e;
        return null !== (e = b.callParticipantsSidebarWidth) && void 0 !== e ? e : c.at;
    }
    get callHeaderHeight() {
        return b.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null !== (e = b.useSystemTheme) && void 0 !== e ? e : u.K.UNSET;
    }
    get activityPanelHeight() {
        return b.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null !== (e = b.disableVoiceChannelChangeAlert) && void 0 !== e && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null !== (e = b.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null !== (e = b.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null !== (e = b.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null !== (e = b.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null !== (e = b.pushUpsellDismissed) && void 0 !== e && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null !== (e = b.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null !== (e = b.disableCallUserConfirmationPrompt) && void 0 !== e && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null !== (e = b.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
    }
    get darkSidebar() {
        var e;
        return null !== (e = b.darkSidebar) && void 0 !== e && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null !== (e = b.useMobileChatCustomRenderer) && void 0 !== e && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null === (e = b.saveCameraUploadsToDevice) || void 0 === e || e;
    }
    get swipeToReply() {
        var e;
        return null !== (e = b.swipeToReply) && void 0 !== e && e;
    }
    get showPlayAgain() {
        var e;
        return null === (e = b.showPlayAgain) || void 0 === e || e;
    }
    isVisualRefreshDisabled(e) {
        var t;
        return null !== (t = b.disableVisualRefresh) && void 0 !== t ? t : e;
    }
    get listDensity() {
        var e;
        return null !== (e = b.listDensity) && void 0 !== e ? e : p.fx.COZY;
    }
}
_(A, 'displayName', 'UnsyncedUserSettingsStore'),
    _(A, 'persistKey', 'UnsyncedUserSettingsStore'),
    _(A, 'migrations', [
        () => {
            let e = s.K.get('UserSettingsStore');
            return s.K.remove('UserSettingsStore'), o().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations', 'showPlayAgain');
        },
        (e) => {
            delete e.disableVisualRefresh;
        }
    ]);
let C = new A(l.Z, {
    UNSYNCED_USER_SETTINGS_UPDATE: y,
    LOGOUT: O,
    LOGIN_SUCCESS: S,
    REGISTER_SUCCESS: I,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: T
});
