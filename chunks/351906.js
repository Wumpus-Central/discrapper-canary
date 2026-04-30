"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(589051),
    a = n(174459),
    o = n(495544),
    l = n(652215);
function u(e, t) {
    a.default.track(l.HAw.STREAMER_MODE_TOGGLE, { enabled: e, automatic: t });
}
let c = {
        enabled: !1,
        autoToggle: !0,
        hideInstantInvites: !0,
        hidePersonalInformation: !0,
        disableSounds: !0,
        disableNotifications: !0,
        disabledOverlayWidgets: [],
        enableContentProtection: !1,
    },
    d = {},
    _ = { ...c };
class f extends i.Ay.PersistedStore {
    static displayName = "StreamerModeStore";
    static persistKey = "StreamerModeStore";
    static migrations = [
        (e) => {
            let t = o.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        },
    ];
    initialize(e) {
        Object.assign(d, e),
            this.syncWith([o.default], () => {
                let e,
                    t = o.default.getId();
                _ = null != t ? (null == (e = d[t]) && (e = d[t] = { ...c }), e) : { ...c };
            });
    }
    getState() {
        return d;
    }
    getSettings() {
        return _;
    }
    get enabled() {
        return _.enabled;
    }
    get autoToggle() {
        return _.autoToggle;
    }
    get hideInstantInvites() {
        return this.enabled && _.hideInstantInvites;
    }
    get hidePersonalInformation() {
        return this.enabled && _.hidePersonalInformation;
    }
    get disableSounds() {
        return this.enabled && _.disableSounds;
    }
    get disableNotifications() {
        return this.enabled && _.disableNotifications;
    }
    get enableContentProtection() {
        return this.enabled && _.enableContentProtection;
    }
    isOverlayWidgetDisabled(e) {
        return !!(0, s.zQ)("StreamerModeStore").enabled && this.enabled && _.disabledOverlayWidgets?.includes(e) === !0;
    }
}
let h = new f(r.h, {
    LOGOUT: function (e) {
        e.isSwitchingAccount || (d = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in d && delete d[e.userId];
    },
    STREAMER_MODE_UPDATE: function (e) {
        let t = { ..._ };
        return (
            Object.assign(_, { [e.key]: e.value }),
            "enabled" === e.key && "boolean" == typeof e.value
                ? u(e.value, !1)
                : a.default.track(l.HAw.UPDATE_STREAMER_MODE_SETTINGS, {
                      enabled: _.enabled,
                      automatic: _.autoToggle,
                      disable_notifications: _.disableNotifications,
                      disable_sounds: _.disableSounds,
                      hide_instant_invites: _.hideInstantInvites,
                      hide_personal_info: _.hidePersonalInformation,
                      enable_content_protection: _.enableContentProtection,
                      disabled_overlay_widgets: _.disabledOverlayWidgets?.join(",") ?? "",
                      old_enabled: t.enabled,
                      old_automatic: t.autoToggle,
                      old_disable_notifications: t.disableNotifications,
                      old_disable_sounds: t.disableSounds,
                      old_hide_instant_invites: t.hideInstantInvites,
                      old_hide_personal_info: t.hidePersonalInformation,
                      old_enable_content_protection: t.enableContentProtection,
                      old_disabled_overlay_widgets: t.disabledOverlayWidgets?.join(",") ?? "",
                  }),
            !0
        );
    },
    RUNNING_STREAMER_TOOLS_CHANGE: function (e) {
        if (!_.autoToggle) return !1;
        {
            let t = e.count > 0;
            return (_.enabled = t), u(t, !0), !0;
        }
    },
});
