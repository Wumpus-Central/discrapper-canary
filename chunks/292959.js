n.d(t, { Z: () => S });
var r,
    i = n(442837),
    o = n(570140),
    a = n(626135),
    s = n(358085),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = {
        desktopType: s.isPlatformEmbedded ? l.qrD.ALL : l.qrD.NEVER,
        disableAllSounds: !1,
        disabledSounds: [],
        ttsType: l.PrB.NEVER,
        disableUnreadBadge: !1,
        taskbarFlash: !0,
        notifyMessagesInSelectedChannel: !1
    },
    f = d;
function p(e, t) {
    __OVERLAY__ || a.default.track(e, t);
}
function _(e) {
    let { desktopType: t } = e;
    (f.desktopType = t), p(l.rMx.LOCAL_SETTINGS_UPDATED, { notifications_enabled: t === l.qrD.ALL });
}
function h(e) {
    let { sounds: t } = e;
    f.disabledSounds = t;
}
function m() {
    f.disableAllSounds = !f.disableAllSounds;
}
function g(e) {
    let { ttsType: t } = e;
    f.ttsType = t;
}
function E(e) {
    let { disableUnreadBadge: t } = e;
    f.disableUnreadBadge = t;
}
function v(e) {
    let { taskbarFlash: t } = e;
    f.taskbarFlash = t;
}
function b(e) {
    let { notify: t } = e;
    f.notifyMessagesInSelectedChannel = t;
}
function y(e) {
    let { enabled: t, source: n } = e;
    p(l.rMx.ENABLE_NOTIFICATIONS, {
        enabled: t === l.$Ab.ENABLED,
        source: n
    }),
        t === l.$Ab.BLOCKED ? _({ desktopType: l.qrD.NEVER }) : t === l.$Ab.ENABLED && _({ desktopType: l.qrD.ALL });
}
class O extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        f = u({}, d, e);
    }
    getUserAgnosticState() {
        return f;
    }
    getDesktopType() {
        return f.desktopType;
    }
    getTTSType() {
        return f.ttsType;
    }
    getDisabledSounds() {
        return f.disabledSounds;
    }
    getDisableAllSounds() {
        return f.disableAllSounds;
    }
    getDisableUnreadBadge() {
        return f.disableUnreadBadge;
    }
    getNotifyMessagesInSelectedChannel() {
        return f.notifyMessagesInSelectedChannel;
    }
    get taskbarFlash() {
        return f.taskbarFlash;
    }
    isSoundDisabled(e) {
        return f.disableAllSounds || -1 !== f.disabledSounds.indexOf(e);
    }
}
c(O, 'displayName', 'NotificationSettingsStore'),
    c(O, 'persistKey', 'notifications'),
    c(O, 'migrations', [
        (e) => {
            let t = u({}, e);
            return (t.disabledSounds = t.disabledSounds || []), (t.disableUnreadBadge = t.disableUnreadBadge || !1), (t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash), (t.ttsType = t.ttsType || l.PrB.NEVER), null == t.desktopType && (t.desktopType = s.isPlatformEmbedded ? l.qrD.ALL : l.qrD.NEVER), t;
        }
    ]);
let S = new O(o.Z, {
    NOTIFICATIONS_SET_DESKTOP_TYPE: _,
    NOTIFICATIONS_SET_TTS_TYPE: g,
    NOTIFICATIONS_SET_DISABLED_SOUNDS: h,
    NOTIFICATIONS_TOGGLE_ALL_DISABLED: m,
    NOTIFICATIONS_SET_PERMISSION_STATE: y,
    NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: E,
    NOTIFICATIONS_SET_TASKBAR_FLASH: v,
    NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: b
});
