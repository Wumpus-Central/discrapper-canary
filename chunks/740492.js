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
    _ = n(969943);
function p(e, t, n) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = (window.innerWidth - d.PrS) / 2,
    g = 'standard',
    E = null;
function b() {
    return null == E && (E = Math.max((window.innerWidth - d.PrS) * 0.4, d.$Y6)), E;
}
let y = {};
function v(e) {
    y = h({}, y, e.settings);
}
function O() {
    y = {
        useSystemTheme: y.useSystemTheme,
        darkSidebar: y.darkSidebar
    };
}
function I() {
    null == y && (y = {});
}
function S() {}
function T() {
    return (y.darkSidebar = !y.darkSidebar), !0;
}
function N() {
    var e;
    let t = a.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
    return null != (e = null == t ? void 0 : t.darkSidebar) && e;
}
class A extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        var t;
        (y = null != e ? e : {}).darkSidebar = null != (t = y.darkSidebar) ? t : N();
    }
    getUserAgnosticState() {
        return y;
    }
    get displayCompactAvatars() {
        var e;
        return null != (e = y.displayCompactAvatars) && e;
    }
    get lowQualityImageMode() {
        var e;
        return null != (e = y.lowQualityImageMode) && e;
    }
    get videoUploadQuality() {
        var e;
        return null != (e = y.videoUploadQuality) ? e : g;
    }
    get dataSavingMode() {
        var e, t;
        return null != (t = null != (e = y.dataSavingMode) ? e : y.lowQualityImageMode) && t;
    }
    get expressionPickerWidth() {
        var e;
        return null != (e = y.expressionPickerWidth) ? e : f._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null != (e = y.messageRequestSidebarWidth) ? e : d.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null != (e = y.threadSidebarWidth) ? e : d.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null != (e = y.postSidebarWidth) ? e : m;
    }
    get callChatSidebarWidth() {
        var e;
        return null != (e = y.callChatSidebarWidth) ? e : d.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null != (e = y.homeSidebarWidth) ? e : b();
    }
    get callParticipantsSidebarWidth() {
        var e;
        return null != (e = y.callParticipantsSidebarWidth) ? e : c.at;
    }
    get callHeaderHeight() {
        return y.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null != (e = y.useSystemTheme) ? e : u.KW.UNSET;
    }
    get activityPanelHeight() {
        return y.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null != (e = y.disableVoiceChannelChangeAlert) && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null != (e = y.disableEmbeddedActivityPopOutAlert) && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null != (e = y.disableActivityHardwareAccelerationPrompt) && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null != (e = y.disableInviteWithTextChannelActivityLaunch) && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null != (e = y.disableHideSelfStreamAndVideoConfirmationAlert) && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null != (e = y.pushUpsellDismissed) && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null != (e = y.disableActivityHostLeftNitroUpsell) && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null != (e = y.disableCallUserConfirmationPrompt) && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null != (e = y.disableApplicationSubscriptionCancellationSurvey) && e;
    }
    get darkSidebar() {
        var e;
        return null != (e = y.darkSidebar) && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null != (e = y.useMobileChatCustomRenderer) && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null == (e = y.saveCameraUploadsToDevice) || e;
    }
    get showPlayAgain() {
        var e;
        return null == (e = y.showPlayAgain) || e;
    }
    isVisualRefreshDisabled(e) {
        var t;
        return null != (t = y.disableVisualRefresh) ? t : e;
    }
    get listDensity() {
        var e;
        return null != (e = y.listDensity) ? e : _.fx.COZY;
    }
    get chatScrollRefactorEnabled() {
        var e;
        return null == (e = y.chatScrollRefactorEnabled) || e;
    }
}
p(A, 'displayName', 'UnsyncedUserSettingsStore'),
    p(A, 'persistKey', 'UnsyncedUserSettingsStore'),
    p(A, 'migrations', [
        () => {
            let e = s.K.get('UserSettingsStore');
            return s.K.remove('UserSettingsStore'), o().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations', 'showPlayAgain');
        },
        (e) => {
            delete e.disableVisualRefresh;
        }
    ]);
let C = new A(l.Z, {
    UNSYNCED_USER_SETTINGS_UPDATE: v,
    LOGOUT: O,
    LOGIN_SUCCESS: I,
    REGISTER_SUCCESS: S,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: T
});
