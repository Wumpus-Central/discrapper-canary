"use strict";
n.d(t, { Ay: () => I });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(506774),
    l = n(228366);
n(677313);
var o = n(185928),
    d = n(355097),
    c = n(652215),
    u = n(698279);
let _ = (window.innerWidth - c.MdR) / 2,
    E = null,
    A = {};
class h extends a.Ay.DeviceSettingsStore {
    static displayName = "UnsyncedUserSettingsStore";
    static persistKey = "UnsyncedUserSettingsStore";
    static migrations = [
        () => {
            let e = s.w.get("UserSettingsStore");
            return (
                s.w.remove("UserSettingsStore"),
                r().pick(
                    e,
                    "dataSavingMode",
                    "videoUploadQuality",
                    "lowQualityImageMode",
                    "useSystemTheme",
                    "expressionPickerWidth",
                    "disableVoiceChannelChangeAlert",
                    "disableHardwareMuteSilenceAlert",
                    "disableHideSelfStreamAndVideoConfirmationAlert",
                    "pushUpsellDismissed",
                    "disableEmbeddedActivityPopOutAlert",
                    "disableActivityHardwareAccelerationPrompt",
                    "disableInviteWithTextChannelActivityLaunch",
                    "disableActivityHostLeftNitroUpsell",
                    "disableCallUserConfirmationPrompt",
                    "disableApplicationSubscriptionCancellationSurvey",
                    "enableAndroidChatListAnimations",
                )
            );
        },
        (e) => {
            delete e.disableVisualRefresh;
        },
    ];
    initialize(e) {
        (A = e ?? {}).hdrDynamicRange = A.hdrDynamicRange ?? "no-limit";
    }
    getUserAgnosticState() {
        return A;
    }
    get displayCompactAvatars() {
        return A.displayCompactAvatars ?? !1;
    }
    get lowQualityImageMode() {
        return A.lowQualityImageMode ?? !1;
    }
    get videoUploadQuality() {
        return A.videoUploadQuality ?? "standard";
    }
    get dataSavingMode() {
        return A.dataSavingMode ?? A.lowQualityImageMode ?? !1;
    }
    get expressionPickerWidth() {
        return A.expressionPickerWidth ?? u.wp.MIN;
    }
    get messageRequestSidebarWidth() {
        return A.messageRequestSidebarWidth ?? c.ItT;
    }
    get threadSidebarWidth() {
        return A.threadSidebarWidth ?? c.da6;
    }
    get postSidebarWidth() {
        return A.postSidebarWidth ?? _;
    }
    get callChatSidebarWidth() {
        return A.callChatSidebarWidth ?? c.da6;
    }
    get homeSidebarWidth() {
        return A.homeSidebarWidth ?? (null == E && (E = Math.max((window.innerWidth - c.MdR) * 0.4, c.da6)), E);
    }
    get callHeaderHeight() {
        return A.callHeaderHeight;
    }
    get useSystemTheme() {
        return A.useSystemTheme ?? o.Q_.UNSET;
    }
    get activityPanelHeight() {
        return A.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        return A.disableVoiceChannelChangeAlert ?? !1;
    }
    get disableHardwareMuteSilenceAlert() {
        return A.disableHardwareMuteSilenceAlert ?? !1;
    }
    get disableEmbeddedActivityPopOutAlert() {
        return A.disableEmbeddedActivityPopOutAlert ?? !1;
    }
    get disableActivityHardwareAccelerationPrompt() {
        return A.disableActivityHardwareAccelerationPrompt ?? !1;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        return A.disableInviteWithTextChannelActivityLaunch ?? !1;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        return A.disableHideSelfStreamAndVideoConfirmationAlert ?? !1;
    }
    get pushUpsellUserSettingsDismissed() {
        return A.pushUpsellDismissed ?? !1;
    }
    get disableActivityHostLeftNitroUpsell() {
        return A.disableActivityHostLeftNitroUpsell ?? !1;
    }
    get disableCallUserConfirmationPrompt() {
        return A.disableCallUserConfirmationPrompt ?? !1;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        return A.disableApplicationSubscriptionCancellationSurvey ?? !1;
    }
    get darkSidebar() {
        return A.darkSidebar ?? !1;
    }
    get saveCameraUploadsToDevice() {
        return A.saveCameraUploadsToDevice ?? !0;
    }
    isVisualRefreshDisabled(e) {
        return A.disableVisualRefresh ?? e;
    }
    get listDensity() {
        return A.listDensity ?? d.YP.COZY;
    }
    get hdrDynamicRange() {
        return A.hdrDynamicRange ?? "no-limit";
    }
}
let I = new h(l.h, {
    UNSYNCED_USER_SETTINGS_UPDATE: function (e) {
        A = { ...A, ...e.settings };
    },
    LOGOUT: function () {
        A = { useSystemTheme: A.useSystemTheme };
    },
    LOGIN_SUCCESS: function () {
        null == A && (A = {});
    },
    REGISTER_SUCCESS: function () {},
});
