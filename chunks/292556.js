r.r(n);
var i = r(570140);
n.default = {
    setDesktopType(e) {
        i.Z.dispatch({
            type: 'NOTIFICATIONS_SET_DESKTOP_TYPE',
            desktopType: e
        });
    },
    setTTSType(e) {
        i.Z.dispatch({
            type: 'NOTIFICATIONS_SET_TTS_TYPE',
            ttsType: e
        });
    },
    setDisabledSounds(e) {
        i.Z.dispatch({
            type: 'NOTIFICATIONS_SET_DISABLED_SOUNDS',
            sounds: e
        });
    },
    toggleDisableAllSounds() {
        i.Z.dispatch({ type: 'NOTIFICATIONS_TOGGLE_ALL_DISABLED' });
    },
    setDisableUnreadBadge(e) {
        i.Z.dispatch({
            type: 'NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE',
            disableUnreadBadge: e
        });
    },
    setTaskbarFlash(e) {
        i.Z.dispatch({
            type: 'NOTIFICATIONS_SET_TASKBAR_FLASH',
            taskbarFlash: e
        });
    },
    setNotifyMessagesInSelectedChannel(e) {
        i.Z.dispatch({
            type: 'NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL',
            notify: e
        });
    },
    setPermissionsState(e, n) {
        i.Z.dispatch({
            type: 'NOTIFICATIONS_SET_PERMISSION_STATE',
            enabled: e,
            source: n
        });
    },
    showNotification(e, n, r, a) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        i.Z.dispatch({
            type: 'NOTIFICATION_CREATE',
            icon: e,
            title: n,
            body: r,
            trackingProps: a,
            options: {
                ...o,
                onClick() {
                    var e;
                    null === (e = o.onClick) || void 0 === e || e.call(o), i.Z.dispatch({ type: 'NOTIFICATION_CLICK' });
                }
            }
        });
    },
    clickedNotification() {
        i.Z.dispatch({ type: 'NOTIFICATION_CLICK' });
    }
};
