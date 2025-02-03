n.d(t, { Z: () => b });
var i,
    r = n(442837),
    a = n(570140),
    s = n(626135),
    o = n(358085),
    l = n(981631);
function u(e, t, n) {
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
let c = {
        desktopType: o.isPlatformEmbedded ? l.qrD.ALL : l.qrD.NEVER,
        disableAllSounds: !1,
        disabledSounds: [],
        ttsType: l.PrB.NEVER,
        disableUnreadBadge: !1,
        taskbarFlash: !0,
        notifyMessagesInSelectedChannel: !1
    },
    d = c;
function f(e, t) {
    __OVERLAY__ || s.default.track(e, t);
}
function _(e) {
    let { desktopType: t } = e;
    (d.desktopType = t), f(l.rMx.LOCAL_SETTINGS_UPDATED, { notifications_enabled: t === l.qrD.ALL });
}
function p(e) {
    let { sounds: t } = e;
    d.disabledSounds = t;
}
function h() {
    d.disableAllSounds = !d.disableAllSounds;
}
function m(e) {
    let { ttsType: t } = e;
    d.ttsType = t;
}
function g(e) {
    let { disableUnreadBadge: t } = e;
    d.disableUnreadBadge = t;
}
function E(e) {
    let { taskbarFlash: t } = e;
    d.taskbarFlash = t;
}
function v(e) {
    let { notify: t } = e;
    d.notifyMessagesInSelectedChannel = t;
}
function y(e) {
    let { enabled: t, source: n } = e;
    f(l.rMx.ENABLE_NOTIFICATIONS, {
        enabled: t === l.$Ab.ENABLED,
        source: n
    }),
        t === l.$Ab.BLOCKED ? _({ desktopType: l.qrD.NEVER }) : t === l.$Ab.ENABLED && _({ desktopType: l.qrD.ALL });
}
class I extends (i = r.ZP.DeviceSettingsStore) {
    initialize(e) {
        d = {
            ...c,
            ...e
        };
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
u(I, 'displayName', 'NotificationSettingsStore'),
    u(I, 'persistKey', 'notifications'),
    u(I, 'migrations', [
        (e) => {
            let t = { ...e };
            return (t.disabledSounds = t.disabledSounds || []), (t.disableUnreadBadge = t.disableUnreadBadge || !1), (t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash), (t.ttsType = t.ttsType || l.PrB.NEVER), null == t.desktopType && (t.desktopType = o.isPlatformEmbedded ? l.qrD.ALL : l.qrD.NEVER), t;
        }
    ]);
let b = new I(a.Z, {
    NOTIFICATIONS_SET_DESKTOP_TYPE: _,
    NOTIFICATIONS_SET_TTS_TYPE: m,
    NOTIFICATIONS_SET_DISABLED_SOUNDS: p,
    NOTIFICATIONS_TOGGLE_ALL_DISABLED: h,
    NOTIFICATIONS_SET_PERMISSION_STATE: y,
    NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: g,
    NOTIFICATIONS_SET_TASKBAR_FLASH: E,
    NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: v
});
