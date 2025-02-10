n.r(t), n.d(t, { default: () => r });
var i = n(570140);
let r = {
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
    setPermissionsState(e, t) {
        i.Z.dispatch({
            type: 'NOTIFICATIONS_SET_PERMISSION_STATE',
            enabled: e,
            source: t
        });
    },
    showNotification(e, t, n, r, a) {
        i.Z.dispatch({
            type: 'NOTIFICATION_CREATE',
            icon: e,
            title: t,
            body: n,
            trackingProps: r,
            options: {
                ...a,
                onClick() {
                    var e;
                    null === (e = a.onClick) || void 0 === e || e.call(a), i.Z.dispatch({ type: 'NOTIFICATION_CLICK' });
                }
            }
        });
    },
    clickedNotification() {
        i.Z.dispatch({ type: 'NOTIFICATION_CLICK' });
    }
};
