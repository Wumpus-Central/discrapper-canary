n.r(t), n.d(t, { default: () => l });
var r = n(570140);
function i(e, t, n) {
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
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let l = {
    setDesktopType(e) {
        r.Z.dispatch({
            type: 'NOTIFICATIONS_SET_DESKTOP_TYPE',
            desktopType: e
        });
    },
    setTTSType(e) {
        r.Z.dispatch({
            type: 'NOTIFICATIONS_SET_TTS_TYPE',
            ttsType: e
        });
    },
    setDisabledSounds(e) {
        r.Z.dispatch({
            type: 'NOTIFICATIONS_SET_DISABLED_SOUNDS',
            sounds: e
        });
    },
    toggleDisableAllSounds() {
        r.Z.dispatch({ type: 'NOTIFICATIONS_TOGGLE_ALL_DISABLED' });
    },
    setDisableUnreadBadge(e) {
        r.Z.dispatch({
            type: 'NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE',
            disableUnreadBadge: e
        });
    },
    setTaskbarFlash(e) {
        r.Z.dispatch({
            type: 'NOTIFICATIONS_SET_TASKBAR_FLASH',
            taskbarFlash: e
        });
    },
    setNotifyMessagesInSelectedChannel(e) {
        r.Z.dispatch({
            type: 'NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL',
            notify: e
        });
    },
    setPermissionsState(e, t) {
        r.Z.dispatch({
            type: 'NOTIFICATIONS_SET_PERMISSION_STATE',
            enabled: e,
            source: t
        });
    },
    showNotification(e, t, n, i, a) {
        r.Z.dispatch({
            type: 'NOTIFICATION_CREATE',
            icon: e,
            title: t,
            body: n,
            trackingProps: i,
            options: s(o({}, a), {
                onClick() {
                    var e;
                    null === (e = a.onClick) || void 0 === e || e.call(a), r.Z.dispatch({ type: 'NOTIFICATION_CLICK' });
                }
            })
        });
    },
    clickedNotification() {
        r.Z.dispatch({ type: 'NOTIFICATION_CLICK' });
    }
};
