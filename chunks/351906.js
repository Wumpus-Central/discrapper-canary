n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    a = n(589051),
    l = n(954571),
    s = n(495544),
    o = n(652215);
function u(e, t) {
    l.default.track(o.HAw.STREAMER_MODE_TOGGLE, { enabled: e, automatic: t });
}
let _ = {
        enabled: !1,
        autoToggle: !0,
        hideInstantInvites: !0,
        hidePersonalInformation: !0,
        disableSounds: !0,
        disableNotifications: !0,
        disabledOverlayWidgets: [],
        enableContentProtection: !1,
    },
    E = {},
    A = { ..._ };
class c extends i.Ay.PersistedStore {
    static displayName = "StreamerModeStore";
    static persistKey = "StreamerModeStore";
    static migrations = [
        (e) => {
            let t = s.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        },
    ];
    initialize(e) {
        Object.assign(E, e),
            this.syncWith([s.default], () => {
                let e,
                    t = s.default.getId();
                A = null != t ? (null == (e = E[t]) && (e = E[t] = { ..._ }), e) : { ..._ };
            });
    }
    getState() {
        return E;
    }
    getSettings() {
        return A;
    }
    get enabled() {
        return A.enabled;
    }
    get autoToggle() {
        return A.autoToggle;
    }
    get hideInstantInvites() {
        return this.enabled && A.hideInstantInvites;
    }
    get hidePersonalInformation() {
        return this.enabled && A.hidePersonalInformation;
    }
    get disableSounds() {
        return this.enabled && A.disableSounds;
    }
    get disableNotifications() {
        return this.enabled && A.disableNotifications;
    }
    get enableContentProtection() {
        return this.enabled && A.enableContentProtection;
    }
    isOverlayWidgetDisabled(e) {
        return !!(0, a.zQ)("StreamerModeStore").enabled && this.enabled && A.disabledOverlayWidgets?.includes(e) === !0;
    }
}
let d = new c(r.h, {
    LOGOUT: function (e) {
        e.isSwitchingAccount || (E = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in E && delete E[e.userId];
    },
    STREAMER_MODE_UPDATE: function (e) {
        let t = { ...A };
        return (
            Object.assign(A, { [e.key]: e.value }),
            "enabled" === e.key && "boolean" == typeof e.value
                ? u(e.value, !1)
                : l.default.track(o.HAw.UPDATE_STREAMER_MODE_SETTINGS, {
                      enabled: A.enabled,
                      automatic: A.autoToggle,
                      disable_notifications: A.disableNotifications,
                      disable_sounds: A.disableSounds,
                      hide_instant_invites: A.hideInstantInvites,
                      hide_personal_info: A.hidePersonalInformation,
                      enable_content_protection: A.enableContentProtection,
                      disabled_overlay_widgets: A.disabledOverlayWidgets?.join(",") ?? "",
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
        if (!A.autoToggle) return !1;
        {
            let t = e.count > 0;
            return (A.enabled = t), u(t, !0), !0;
        }
    },
});
