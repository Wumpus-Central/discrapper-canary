"use strict";
n.d(t, { default: () => a });
var i = n(228366),
    r = n(174459),
    s = n(652215);
let a = {
    setDesktopType(e) {
        r.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { notifications_enabled: e === s.nRU.ALL }),
            i.h.dispatch({ type: "NOTIFICATIONS_SET_DESKTOP_TYPE", desktopType: e });
    },
    setTTSType(e) {
        r.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { tts_type: e.toString() }),
            i.h.dispatch({ type: "NOTIFICATIONS_SET_TTS_TYPE", ttsType: e });
    },
    setDisabledSounds(e) {
        r.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { disabled_sounds: e }),
            i.h.dispatch({ type: "NOTIFICATIONS_SET_DISABLED_SOUNDS", sounds: e });
    },
    toggleDisableAllSounds(e) {
        r.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { all_sounds_enabled: !e }),
            i.h.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
    },
    setDisableUnreadBadge(e) {
        r.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { unread_badge_enabled: !e }),
            i.h.dispatch({ type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE", disableUnreadBadge: e });
    },
    setTaskbarFlash(e) {
        r.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { show_taskbar_flash: e }),
            i.h.dispatch({ type: "NOTIFICATIONS_SET_TASKBAR_FLASH", taskbarFlash: e });
    },
    setNotifyMessagesInSelectedChannel(e) {
        r.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { notify_messages_in_selected_channel: e }),
            i.h.dispatch({ type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL", notify: e });
    },
    setScreenDowntimeReminder(e) {
        r.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { screen_downtime_reminder: e }),
            i.h.dispatch({ type: "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER", screenDowntimeReminder: e });
    },
    setPermissionsState(e, t) {
        r.default.track(s.HAw.ENABLE_NOTIFICATIONS, { enabled: e === s.kCE.ENABLED, source: t }),
            i.h.dispatch({ type: "NOTIFICATIONS_SET_PERMISSION_STATE", enabled: e, source: t });
    },
    showNotification(e, t, n, r, s) {
        i.h.dispatch({
            type: "NOTIFICATION_CREATE",
            icon: e,
            title: t,
            body: n,
            trackingProps: r,
            options: {
                ...s,
                onClick(e) {
                    s.onClick?.(e), i.h.dispatch({ type: "NOTIFICATION_CLICK" });
                },
            },
        });
    },
    clickedNotification() {
        i.h.dispatch({ type: "NOTIFICATION_CLICK" });
    },
};
