n.d(t, { default: () => u });
var r = n(73153),
    i = n(954571),
    a = n(652215);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {
    setDesktopType(e) {
        i.default.track(a.HAw.LOCAL_SETTINGS_UPDATED, { notifications_enabled: e === a.nRU.ALL }),
            r.h.dispatch({
                type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
                desktopType: e,
            });
    },
    setTTSType(e) {
        i.default.track(a.HAw.LOCAL_SETTINGS_UPDATED, { tts_type: e.toString() }),
            r.h.dispatch({
                type: "NOTIFICATIONS_SET_TTS_TYPE",
                ttsType: e,
            });
    },
    setDisabledSounds(e) {
        i.default.track(a.HAw.LOCAL_SETTINGS_UPDATED, { disabled_sounds: e }),
            r.h.dispatch({
                type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
                sounds: e,
            });
    },
    toggleDisableAllSounds(e) {
        i.default.track(a.HAw.LOCAL_SETTINGS_UPDATED, { all_sounds_enabled: !e }),
            r.h.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
    },
    setDisableUnreadBadge(e) {
        i.default.track(a.HAw.LOCAL_SETTINGS_UPDATED, { unread_badge_enabled: !e }),
            r.h.dispatch({
                type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
                disableUnreadBadge: e,
            });
    },
    setTaskbarFlash(e) {
        i.default.track(a.HAw.LOCAL_SETTINGS_UPDATED, { show_taskbar_flash: e }),
            r.h.dispatch({
                type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
                taskbarFlash: e,
            });
    },
    setNotifyMessagesInSelectedChannel(e) {
        i.default.track(a.HAw.LOCAL_SETTINGS_UPDATED, { notify_messages_in_selected_channel: e }),
            r.h.dispatch({
                type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
                notify: e,
            });
    },
    setPermissionsState(e, t) {
        i.default.track(a.HAw.ENABLE_NOTIFICATIONS, {
            enabled: e === a.kCE.ENABLED,
            source: t,
        }),
            r.h.dispatch({
                type: "NOTIFICATIONS_SET_PERMISSION_STATE",
                enabled: e,
                source: t,
            });
    },
    showNotification(e, t, n, i, a) {
        r.h.dispatch({
            type: "NOTIFICATION_CREATE",
            icon: e,
            title: t,
            body: n,
            trackingProps: i,
            options: c(o({}, a), {
                onClick(e) {
                    var t;
                    null == (t = a.onClick) || t.call(a, e), r.h.dispatch({ type: "NOTIFICATION_CLICK" });
                },
            }),
        });
    },
    clickedNotification() {
        r.h.dispatch({ type: "NOTIFICATION_CLICK" });
    },
};
