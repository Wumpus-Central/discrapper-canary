"use strict";
n.d(t, { Ay: () => E });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(506774),
    o = n(228366);
n(677313);
var l = n(185928),
    u = n(355097),
    c = n(652215),
    d = n(698279);
let _ = (window.innerWidth - c.MdR) / 2,
    h = null,
    f = {};
class p extends s.Ay.DeviceSettingsStore {
    static displayName = "UnsyncedUserSettingsStore";
    static persistKey = "UnsyncedUserSettingsStore";
    static migrations = [
        () => {
            let e = a.w.get("UserSettingsStore");
            return (
                a.w.remove("UserSettingsStore"),
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
        (f = e ?? {}).hdrDynamicRange = f.hdrDynamicRange ?? "no-limit";
    }
    getUserAgnosticState() {
        return f;
    }
    get displayCompactAvatars() {
        return f.displayCompactAvatars ?? !1;
    }
    get lowQualityImageMode() {
        return f.lowQualityImageMode ?? !1;
    }
    get videoUploadQuality() {
        return f.videoUploadQuality ?? "standard";
    }
    get dataSavingMode() {
        return f.dataSavingMode ?? f.lowQualityImageMode ?? !1;
    }
    get expressionPickerWidth() {
        return f.expressionPickerWidth ?? d.wp.MIN;
    }
    get messageRequestSidebarWidth() {
        return f.messageRequestSidebarWidth ?? c.ItT;
    }
    get threadSidebarWidth() {
        return f.threadSidebarWidth ?? c.da6;
    }
    get postSidebarWidth() {
        return f.postSidebarWidth ?? _;
    }
    get callChatSidebarWidth() {
        return f.callChatSidebarWidth ?? c.da6;
    }
    get homeSidebarWidth() {
        return f.homeSidebarWidth ?? (null == h && (h = Math.max((window.innerWidth - c.MdR) * 0.4, c.da6)), h);
    }
    get callHeaderHeight() {
        return f.callHeaderHeight;
    }
    get useSystemTheme() {
        return f.useSystemTheme ?? l.Q_.UNSET;
    }
    get activityPanelHeight() {
        return f.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        return f.disableVoiceChannelChangeAlert ?? !1;
    }
    get disableHardwareMuteSilenceAlert() {
        return f.disableHardwareMuteSilenceAlert ?? !1;
    }
    get disableEmbeddedActivityPopOutAlert() {
        return f.disableEmbeddedActivityPopOutAlert ?? !1;
    }
    get disableActivityHardwareAccelerationPrompt() {
        return f.disableActivityHardwareAccelerationPrompt ?? !1;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        return f.disableInviteWithTextChannelActivityLaunch ?? !1;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        return f.disableHideSelfStreamAndVideoConfirmationAlert ?? !1;
    }
    get pushUpsellUserSettingsDismissed() {
        return f.pushUpsellDismissed ?? !1;
    }
    get disableActivityHostLeftNitroUpsell() {
        return f.disableActivityHostLeftNitroUpsell ?? !1;
    }
    get disableCallUserConfirmationPrompt() {
        return f.disableCallUserConfirmationPrompt ?? !1;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        return f.disableApplicationSubscriptionCancellationSurvey ?? !1;
    }
    get darkSidebar() {
        return f.darkSidebar ?? !1;
    }
    get saveCameraUploadsToDevice() {
        return f.saveCameraUploadsToDevice ?? !0;
    }
    isVisualRefreshDisabled(e) {
        return f.disableVisualRefresh ?? e;
    }
    get listDensity() {
        return f.listDensity ?? u.YP.COZY;
    }
    get hdrDynamicRange() {
        return f.hdrDynamicRange ?? "no-limit";
    }
}
let E = new p(o.h, {
    UNSYNCED_USER_SETTINGS_UPDATE: function (e) {
        f = { ...f, ...e.settings };
    },
    LOGOUT: function () {
        f = { useSystemTheme: f.useSystemTheme };
    },
    LOGIN_SUCCESS: function () {
        null == f && (f = {});
    },
    REGISTER_SUCCESS: function () {},
});
