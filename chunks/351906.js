"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    a = n(954571),
    s = n(961350),
    o = n(652215);
function l(e, t) {
    a.default.track(o.HAw.STREAMER_MODE_TOGGLE, { enabled: e, automatic: t });
}
let u = {
        enabled: !1,
        autoToggle: !0,
        hideInstantInvites: !0,
        hidePersonalInformation: !0,
        disableSounds: !0,
        disableNotifications: !0,
        enableContentProtection: !1,
    },
    c = {},
    d = { ...u };
function _(e) {
    let t = c[e];
    return null == t && (t = c[e] = { ...u }), t;
}
function f(e) {
    e.isSwitchingAccount || (c = {});
}
function p(e) {
    e.userId in c && delete c[e.userId];
}
function h(e) {
    let t = { ...d };
    return (
        (d[e.key] = e.value),
        "enabled" === e.key
            ? l(e.value, !1)
            : a.default.track(o.HAw.UPDATE_STREAMER_MODE_SETTINGS, {
                  enabled: d.enabled,
                  automatic: d.autoToggle,
                  disable_notifications: d.disableNotifications,
                  disable_sounds: d.disableSounds,
                  hide_instant_invites: d.hideInstantInvites,
                  hide_personal_info: d.hidePersonalInformation,
                  enable_content_protection: d.enableContentProtection,
                  old_enabled: t.enabled,
                  old_automatic: t.autoToggle,
                  old_disable_notifications: t.disableNotifications,
                  old_disable_sounds: t.disableSounds,
                  old_hide_instant_invites: t.hideInstantInvites,
                  old_hide_personal_info: t.hidePersonalInformation,
                  old_enable_content_protection: t.enableContentProtection,
              }),
        !0
    );
}
function m(e) {
    if (!d.autoToggle) return !1;
    {
        let t = e.count > 0;
        return (d.enabled = t), l(t, !0), !0;
    }
}
class g extends r.Ay.PersistedStore {
    static displayName = "StreamerModeStore";
    static persistKey = "StreamerModeStore";
    static migrations = [
        (e) => {
            let t = s.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        },
    ];
    initialize(e) {
        Object.assign(c, e),
            this.syncWith([s.default], () => {
                let e = s.default.getId();
                d = null != e ? _(e) : { ...u };
            });
    }
    getState() {
        return c;
    }
    getSettings() {
        return d;
    }
    get enabled() {
        return d.enabled;
    }
    get autoToggle() {
        return d.autoToggle;
    }
    get hideInstantInvites() {
        return this.enabled && d.hideInstantInvites;
    }
    get hidePersonalInformation() {
        return this.enabled && d.hidePersonalInformation;
    }
    get disableSounds() {
        return this.enabled && d.disableSounds;
    }
    get disableNotifications() {
        return this.enabled && d.disableNotifications;
    }
    get enableContentProtection() {
        return this.enabled && d.enableContentProtection;
    }
}
let E = new g(i.h, {
    LOGOUT: f,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: p,
    STREAMER_MODE_UPDATE: h,
    RUNNING_STREAMER_TOOLS_CHANGE: m,
});
