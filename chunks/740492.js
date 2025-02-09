n.d(t, { ZP: () => C });
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    l = n(570140);
n(541049);
var u = n(36645),
    c = n(874893),
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
let h = (window.innerWidth - d.PrS) / 2,
    m = 'standard',
    g = null;
function E() {
    return null == g && (g = Math.max((window.innerWidth - d.PrS) * 0.4, d.$Y6)), g;
}
let v = {};
function y(e) {
    v = {
        ...v,
        ...e.settings
    };
}
function I() {
    v = {
        useSystemTheme: v.useSystemTheme,
        darkSidebar: v.darkSidebar
    };
}
function T() {
    null == v && (v = {});
}
function b() {}
function S() {
    return (v.darkSidebar = !v.darkSidebar), !0;
}
function A() {
    var e;
    let t = s.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
    return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e;
}
class N extends (i = s.ZP.DeviceSettingsStore) {
    initialize(e) {
        var t;
        (v = null != e ? e : {}).darkSidebar = null !== (t = v.darkSidebar) && void 0 !== t ? t : A();
    }
    getUserAgnosticState() {
        return v;
    }
    get displayCompactAvatars() {
        var e;
        return null !== (e = v.displayCompactAvatars) && void 0 !== e && e;
    }
    get lowQualityImageMode() {
        var e;
        return null !== (e = v.lowQualityImageMode) && void 0 !== e && e;
    }
    get videoUploadQuality() {
        var e;
        return null !== (e = v.videoUploadQuality) && void 0 !== e ? e : m;
    }
    get dataSavingMode() {
        var e, t;
        return null !== (t = null !== (e = v.dataSavingMode) && void 0 !== e ? e : v.lowQualityImageMode) && void 0 !== t && t;
    }
    get expressionPickerWidth() {
        var e;
        return null !== (e = v.expressionPickerWidth) && void 0 !== e ? e : f._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null !== (e = v.messageRequestSidebarWidth) && void 0 !== e ? e : d.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null !== (e = v.threadSidebarWidth) && void 0 !== e ? e : d.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null !== (e = v.postSidebarWidth) && void 0 !== e ? e : h;
    }
    get callChatSidebarWidth() {
        var e;
        return null !== (e = v.callChatSidebarWidth) && void 0 !== e ? e : d.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null !== (e = v.homeSidebarWidth) && void 0 !== e ? e : E();
    }
    get callParticipantsSidebarWidth() {
        var e;
        return null !== (e = v.callParticipantsSidebarWidth) && void 0 !== e ? e : u.at;
    }
    get callHeaderHeight() {
        return v.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null !== (e = v.useSystemTheme) && void 0 !== e ? e : c.K.UNSET;
    }
    get activityPanelHeight() {
        return v.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null !== (e = v.disableVoiceChannelChangeAlert) && void 0 !== e && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null !== (e = v.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null !== (e = v.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null !== (e = v.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null !== (e = v.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null !== (e = v.pushUpsellDismissed) && void 0 !== e && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null !== (e = v.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null !== (e = v.disableCallUserConfirmationPrompt) && void 0 !== e && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null !== (e = v.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
    }
    get darkSidebar() {
        var e;
        return null !== (e = v.darkSidebar) && void 0 !== e && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null !== (e = v.useMobileChatCustomRenderer) && void 0 !== e && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null === (e = v.saveCameraUploadsToDevice) || void 0 === e || e;
    }
    get swipeToReply() {
        var e;
        return null !== (e = v.swipeToReply) && void 0 !== e && e;
    }
    get showPlayAgain() {
        var e;
        return null === (e = v.showPlayAgain) || void 0 === e || e;
    }
    isVisualRefreshDisabled(e) {
        var t;
        return null !== (t = v.disableVisualRefresh) && void 0 !== t ? t : e;
    }
    get listDensity() {
        var e;
        return null !== (e = v.listDensity) && void 0 !== e ? e : _.fx.COZY;
    }
}
p(N, 'displayName', 'UnsyncedUserSettingsStore'),
    p(N, 'persistKey', 'UnsyncedUserSettingsStore'),
    p(N, 'migrations', [
        () => {
            let e = o.K.get('UserSettingsStore');
            return o.K.remove('UserSettingsStore'), a().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations', 'showPlayAgain');
        },
        (e) => {
            delete e.disableVisualRefresh;
        }
    ]);
let C = new N(l.Z, {
    UNSYNCED_USER_SETTINGS_UPDATE: y,
    LOGOUT: I,
    LOGIN_SUCCESS: T,
    REGISTER_SUCCESS: b,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: S
});
