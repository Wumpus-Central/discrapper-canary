var i,
    a,
    o,
    s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(433517),
    d = r(570140),
    f = r(540059),
    p = r(541049),
    h = r(36645),
    _ = r(874893),
    m = r(981631),
    g = r(957825),
    E = r(969943);
function v(e, n, r) {
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
!(function (e) {
    (e.DATA_SAVER = 'data_saver'), (e.STANDARD = 'standard'), (e.BEST = 'best');
})(i || (i = {})),
    !(function (e) {
        (e.VERY_LOW = 'very_low'), (e.LOW = 'low'), (e.MEDIUM = 'medium'), (e.HIGH = 'high'), (e.VERY_HIGH = 'very_high');
    })(a || (a = {}));
let y = (window.innerWidth - m.PrS) / 2,
    b = 'standard',
    I = null;
function T() {
    return null == I && (I = Math.max((window.innerWidth - m.PrS) * 0.4, m.$Y6)), I;
}
let S = {};
function A(e) {
    S = {
        ...S,
        ...e.settings
    };
}
function C() {
    S = {
        useSystemTheme: S.useSystemTheme,
        darkSidebar: S.darkSidebar
    };
}
function N() {
    null == S && (S = {});
}
function R() {}
function O() {
    return (S.darkSidebar = !S.darkSidebar), !0;
}
function D() {
    var e;
    let n = u.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
    return null !== (e = null == n ? void 0 : n.darkSidebar) && void 0 !== e && e;
}
class x extends (o = u.ZP.DeviceSettingsStore) {
    initialize(e) {
        var n;
        S = null != e ? e : {};
        S.darkSidebar = null !== (n = S.darkSidebar) && void 0 !== n ? n : D();
    }
    getUserAgnosticState() {
        return S;
    }
    get displayCompactAvatars() {
        var e;
        return null !== (e = S.displayCompactAvatars) && void 0 !== e && e;
    }
    get lowQualityImageMode() {
        var e;
        return null !== (e = S.lowQualityImageMode) && void 0 !== e && e;
    }
    get videoUploadQuality() {
        var e;
        return null !== (e = S.videoUploadQuality) && void 0 !== e ? e : b;
    }
    get dataSavingMode() {
        var e, n;
        return null !== (n = null !== (e = S.dataSavingMode) && void 0 !== e ? e : S.lowQualityImageMode) && void 0 !== n && n;
    }
    get expressionPickerWidth() {
        var e;
        return null !== (e = S.expressionPickerWidth) && void 0 !== e ? e : g._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null !== (e = S.messageRequestSidebarWidth) && void 0 !== e ? e : m.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null !== (e = S.threadSidebarWidth) && void 0 !== e ? e : m.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null !== (e = S.postSidebarWidth) && void 0 !== e ? e : y;
    }
    get callChatSidebarWidth() {
        var e;
        return null !== (e = S.callChatSidebarWidth) && void 0 !== e ? e : m.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null !== (e = S.homeSidebarWidth) && void 0 !== e ? e : T();
    }
    get callParticipantsSidebarWidth() {
        var e;
        return null !== (e = S.callParticipantsSidebarWidth) && void 0 !== e ? e : h.at;
    }
    get callHeaderHeight() {
        return S.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null !== (e = S.useSystemTheme) && void 0 !== e ? e : _.K.UNSET;
    }
    get activityPanelHeight() {
        return S.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null !== (e = S.disableVoiceChannelChangeAlert) && void 0 !== e && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null !== (e = S.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null !== (e = S.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null !== (e = S.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null !== (e = S.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null !== (e = S.pushUpsellDismissed) && void 0 !== e && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null !== (e = S.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null !== (e = S.disableCallUserConfirmationPrompt) && void 0 !== e && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null !== (e = S.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
    }
    get darkSidebar() {
        var e;
        return null !== (e = S.darkSidebar) && void 0 !== e && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null !== (e = S.useMobileChatCustomRenderer) && void 0 !== e && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null === (e = S.saveCameraUploadsToDevice) || void 0 === e || e;
    }
    get swipeToReply() {
        var e;
        return null !== (e = S.swipeToReply) && void 0 !== e && e;
    }
    get showPlayAgain() {
        var e;
        return null === (e = S.showPlayAgain) || void 0 === e || e;
    }
    get disableVisualRefresh() {
        var e;
        let n = (0, f.iT)('UnsyncedUserSettingsStore');
        return null !== (e = S.disableVisualRefresh) && void 0 !== e ? e : n;
    }
    get listDensity() {
        var e;
        return null !== (e = S.listDensity) && void 0 !== e ? e : E.fx.COZY;
    }
}
v(x, 'displayName', 'UnsyncedUserSettingsStore'),
    v(x, 'persistKey', 'UnsyncedUserSettingsStore'),
    v(x, 'migrations', [
        () => {
            let e = c.K.get('UserSettingsStore');
            return c.K.remove('UserSettingsStore'), l().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations', 'showPlayAgain');
        },
        (e) => {
            delete e.disableVisualRefresh;
        }
    ]),
    (n.ZP = new x(d.Z, {
        UNSYNCED_USER_SETTINGS_UPDATE: A,
        LOGOUT: C,
        LOGIN_SUCCESS: N,
        REGISTER_SUCCESS: R,
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: O
    }));
