n.d(t, { Z: () => v });
var r,
    i = n(442837),
    o = n(570140),
    a = n(358085),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {
        desktopType: a.isPlatformEmbedded ? s.qrD.ALL : s.qrD.NEVER,
        disableAllSounds: !1,
        disabledSounds: [],
        ttsType: s.PrB.NEVER,
        disableUnreadBadge: !1,
        taskbarFlash: !0,
        notifyMessagesInSelectedChannel: !1
    },
    d = u;
function f(e) {
    let { desktopType: t } = e;
    d.desktopType = t;
}
function _(e) {
    let { sounds: t } = e;
    d.disabledSounds = t;
}
function p() {
    d.disableAllSounds = !d.disableAllSounds;
}
function h(e) {
    let { ttsType: t } = e;
    d.ttsType = t;
}
function m(e) {
    let { disableUnreadBadge: t } = e;
    d.disableUnreadBadge = t;
}
function g(e) {
    let { taskbarFlash: t } = e;
    d.taskbarFlash = t;
}
function E(e) {
    let { notify: t } = e;
    d.notifyMessagesInSelectedChannel = t;
}
function b(e) {
    let { enabled: t } = e;
    t === s.$Ab.BLOCKED ? f({ desktopType: s.qrD.NEVER }) : t === s.$Ab.ENABLED && f({ desktopType: s.qrD.ALL });
}
class y extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        d = c({}, u, e);
    }
    getUserAgnosticState() {
        return d;
    }
    getDesktopType() {
        return d.desktopType;
    }
    getTTSType() {
        return d.ttsType;
    }
    getDisabledSounds() {
        return d.disabledSounds;
    }
    getDisableAllSounds() {
        return d.disableAllSounds;
    }
    getDisableUnreadBadge() {
        return d.disableUnreadBadge;
    }
    getNotifyMessagesInSelectedChannel() {
        return d.notifyMessagesInSelectedChannel;
    }
    get taskbarFlash() {
        return d.taskbarFlash;
    }
    isSoundDisabled(e) {
        return d.disableAllSounds || -1 !== d.disabledSounds.indexOf(e);
    }
}
l(y, 'displayName', 'NotificationSettingsStore'),
    l(y, 'persistKey', 'notifications'),
    l(y, 'migrations', [
        (e) => {
            let t = c({}, e);
            return (t.disabledSounds = t.disabledSounds || []), (t.disableUnreadBadge = t.disableUnreadBadge || !1), (t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash), (t.ttsType = t.ttsType || s.PrB.NEVER), null == t.desktopType && (t.desktopType = a.isPlatformEmbedded ? s.qrD.ALL : s.qrD.NEVER), t;
        }
    ]);
let v = new y(o.Z, {
    NOTIFICATIONS_SET_DESKTOP_TYPE: f,
    NOTIFICATIONS_SET_TTS_TYPE: h,
    NOTIFICATIONS_SET_DISABLED_SOUNDS: _,
    NOTIFICATIONS_TOGGLE_ALL_DISABLED: p,
    NOTIFICATIONS_SET_PERMISSION_STATE: b,
    NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: m,
    NOTIFICATIONS_SET_TASKBAR_FLASH: g,
    NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: E
});
