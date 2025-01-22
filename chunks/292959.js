var i,
    a = r(442837),
    o = r(570140),
    s = r(626135),
    l = r(358085),
    u = r(981631);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = {
        desktopType: l.isPlatformEmbedded ? u.qrD.ALL : u.qrD.NEVER,
        disableAllSounds: !1,
        disabledSounds: [],
        ttsType: u.PrB.NEVER,
        disableUnreadBadge: !1,
        taskbarFlash: !0,
        notifyMessagesInSelectedChannel: !1
    },
    f = d;
function p(e, n) {
    !__OVERLAY__ && s.default.track(e, n);
}
function h(e) {
    let { desktopType: n } = e;
    (f.desktopType = n), p(u.rMx.LOCAL_SETTINGS_UPDATED, { notifications_enabled: n === u.qrD.ALL });
}
function _(e) {
    let { sounds: n } = e;
    f.disabledSounds = n;
}
function m() {
    f.disableAllSounds = !f.disableAllSounds;
}
function g(e) {
    let { ttsType: n } = e;
    f.ttsType = n;
}
function E(e) {
    let { disableUnreadBadge: n } = e;
    f.disableUnreadBadge = n;
}
function v(e) {
    let { taskbarFlash: n } = e;
    f.taskbarFlash = n;
}
function y(e) {
    let { notify: n } = e;
    f.notifyMessagesInSelectedChannel = n;
}
function b(e) {
    let { enabled: n, source: r } = e;
    p(u.rMx.ENABLE_NOTIFICATIONS, {
        enabled: n === u.$Ab.ENABLED,
        source: r
    }),
        n === u.$Ab.BLOCKED ? h({ desktopType: u.qrD.NEVER }) : n === u.$Ab.ENABLED && h({ desktopType: u.qrD.ALL });
}
class I extends (i = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        f = {
            ...d,
            ...e
        };
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
c(I, 'displayName', 'NotificationSettingsStore'),
    c(I, 'persistKey', 'notifications'),
    c(I, 'migrations', [
        (e) => {
            let n = { ...e };
            return (n.disabledSounds = n.disabledSounds || []), (n.disableUnreadBadge = n.disableUnreadBadge || !1), (n.taskbarFlash = null == n.taskbarFlash || n.taskbarFlash), (n.ttsType = n.ttsType || u.PrB.NEVER), null == n.desktopType && (n.desktopType = l.isPlatformEmbedded ? u.qrD.ALL : u.qrD.NEVER), n;
        }
    ]),
    (n.Z = new I(o.Z, {
        NOTIFICATIONS_SET_DESKTOP_TYPE: h,
        NOTIFICATIONS_SET_TTS_TYPE: g,
        NOTIFICATIONS_SET_DISABLED_SOUNDS: _,
        NOTIFICATIONS_TOGGLE_ALL_DISABLED: m,
        NOTIFICATIONS_SET_PERMISSION_STATE: b,
        NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: E,
        NOTIFICATIONS_SET_TASKBAR_FLASH: v,
        NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: y
    }));
