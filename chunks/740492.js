n.d(t, { ZP: () => R });
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(540059);
n(541049);
var c = n(36645),
    d = n(874893),
    f = n(981631),
    _ = n(957825),
    p = n(969943);
function h(e, t, n) {
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
let m = (window.innerWidth - f.PrS) / 2,
    g = 'standard',
    E = null;
function v() {
    return null == E && (E = Math.max((window.innerWidth - f.PrS) * 0.4, f.$Y6)), E;
}
let y = {};
function I(e) {
    y = {
        ...y,
        ...e.settings
    };
}
function T() {
    y = {
        useSystemTheme: y.useSystemTheme,
        darkSidebar: y.darkSidebar
    };
}
function b() {
    null == y && (y = {});
}
function S() {}
function A() {
    return (y.darkSidebar = !y.darkSidebar), !0;
}
function N() {
    var e;
    let t = s.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
    return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e;
}
class C extends (i = s.ZP.DeviceSettingsStore) {
    initialize(e) {
        var t;
        (y = null != e ? e : {}).darkSidebar = null !== (t = y.darkSidebar) && void 0 !== t ? t : N();
    }
    getUserAgnosticState() {
        return y;
    }
    get displayCompactAvatars() {
        var e;
        return null !== (e = y.displayCompactAvatars) && void 0 !== e && e;
    }
    get lowQualityImageMode() {
        var e;
        return null !== (e = y.lowQualityImageMode) && void 0 !== e && e;
    }
    get videoUploadQuality() {
        var e;
        return null !== (e = y.videoUploadQuality) && void 0 !== e ? e : g;
    }
    get dataSavingMode() {
        var e, t;
        return null !== (t = null !== (e = y.dataSavingMode) && void 0 !== e ? e : y.lowQualityImageMode) && void 0 !== t && t;
    }
    get expressionPickerWidth() {
        var e;
        return null !== (e = y.expressionPickerWidth) && void 0 !== e ? e : _._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null !== (e = y.messageRequestSidebarWidth) && void 0 !== e ? e : f.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null !== (e = y.threadSidebarWidth) && void 0 !== e ? e : f.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null !== (e = y.postSidebarWidth) && void 0 !== e ? e : m;
    }
    get callChatSidebarWidth() {
        var e;
        return null !== (e = y.callChatSidebarWidth) && void 0 !== e ? e : f.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null !== (e = y.homeSidebarWidth) && void 0 !== e ? e : v();
    }
    get callParticipantsSidebarWidth() {
        var e;
        return null !== (e = y.callParticipantsSidebarWidth) && void 0 !== e ? e : c.at;
    }
    get callHeaderHeight() {
        return y.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null !== (e = y.useSystemTheme) && void 0 !== e ? e : d.K.UNSET;
    }
    get activityPanelHeight() {
        return y.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null !== (e = y.disableVoiceChannelChangeAlert) && void 0 !== e && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null !== (e = y.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null !== (e = y.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null !== (e = y.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null !== (e = y.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null !== (e = y.pushUpsellDismissed) && void 0 !== e && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null !== (e = y.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null !== (e = y.disableCallUserConfirmationPrompt) && void 0 !== e && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null !== (e = y.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
    }
    get darkSidebar() {
        var e;
        return null !== (e = y.darkSidebar) && void 0 !== e && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null !== (e = y.useMobileChatCustomRenderer) && void 0 !== e && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null === (e = y.saveCameraUploadsToDevice) || void 0 === e || e;
    }
    get swipeToReply() {
        var e;
        return null !== (e = y.swipeToReply) && void 0 !== e && e;
    }
    get showPlayAgain() {
        var e;
        return null === (e = y.showPlayAgain) || void 0 === e || e;
    }
    get disableVisualRefresh() {
        var e;
        let t = (0, u.iT)('UnsyncedUserSettingsStore');
        return null !== (e = y.disableVisualRefresh) && void 0 !== e ? e : t;
    }
    get listDensity() {
        var e;
        return null !== (e = y.listDensity) && void 0 !== e ? e : p.fx.COZY;
    }
}
h(C, 'displayName', 'UnsyncedUserSettingsStore'),
    h(C, 'persistKey', 'UnsyncedUserSettingsStore'),
    h(C, 'migrations', [
        () => {
            let e = o.K.get('UserSettingsStore');
            return o.K.remove('UserSettingsStore'), a().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations', 'showPlayAgain');
        },
        (e) => {
            delete e.disableVisualRefresh;
        }
    ]);
let R = new C(l.Z, {
    UNSYNCED_USER_SETTINGS_UPDATE: I,
    LOGOUT: T,
    LOGIN_SUCCESS: b,
    REGISTER_SUCCESS: S,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: A
});
