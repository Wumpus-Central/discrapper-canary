"use strict";
n.d(t, { default: () => a });
var r = n(73153),
    i = n(954571),
    s = n(652215);
let a = {
    setDesktopType(e) {
        i.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { notifications_enabled: e === s.nRU.ALL }),
            r.h.dispatch({ type: "NOTIFICATIONS_SET_DESKTOP_TYPE", desktopType: e });
    },
    setTTSType(e) {
        i.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { tts_type: e.toString() }),
            r.h.dispatch({ type: "NOTIFICATIONS_SET_TTS_TYPE", ttsType: e });
    },
    setDisabledSounds(e) {
        i.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { disabled_sounds: e }),
            r.h.dispatch({ type: "NOTIFICATIONS_SET_DISABLED_SOUNDS", sounds: e });
    },
    toggleDisableAllSounds(e) {
        i.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { all_sounds_enabled: !e }),
            r.h.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
    },
    setDisableUnreadBadge(e) {
        i.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { unread_badge_enabled: !e }),
            r.h.dispatch({ type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE", disableUnreadBadge: e });
    },
    setTaskbarFlash(e) {
        i.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { show_taskbar_flash: e }),
            r.h.dispatch({ type: "NOTIFICATIONS_SET_TASKBAR_FLASH", taskbarFlash: e });
    },
    setNotifyMessagesInSelectedChannel(e) {
        i.default.track(s.HAw.LOCAL_SETTINGS_UPDATED, { notify_messages_in_selected_channel: e }),
            r.h.dispatch({ type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL", notify: e });
    },
    setPermissionsState(e, t) {
        i.default.track(s.HAw.ENABLE_NOTIFICATIONS, { enabled: e === s.kCE.ENABLED, source: t }),
            r.h.dispatch({ type: "NOTIFICATIONS_SET_PERMISSION_STATE", enabled: e, source: t });
    },
    showNotification(e, t, n, i, s) {
        r.h.dispatch({
            type: "NOTIFICATION_CREATE",
            icon: e,
            title: t,
            body: n,
            trackingProps: i,
            options: {
                ...s,
                onClick(e) {
                    s.onClick?.(e), r.h.dispatch({ type: "NOTIFICATION_CLICK" });
                },
            },
        });
    },
    clickedNotification() {
        r.h.dispatch({ type: "NOTIFICATION_CLICK" });
    },
};
