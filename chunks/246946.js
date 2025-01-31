n.d(t, { Z: () => y });
var i,
    r = n(442837),
    a = n(570140),
    s = n(626135),
    o = n(314897),
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
function c(e, t) {
    s.default.track(l.rMx.STREAMER_MODE_TOGGLE, {
        enabled: e,
        automatic: t
    });
}
let d = {
        enabled: !1,
        autoToggle: !0,
        hideInstantInvites: !0,
        hidePersonalInformation: !0,
        disableSounds: !0,
        disableNotifications: !0,
        enableContentProtection: !1
    },
    f = {},
    _ = { ...d };
function p(e) {
    let t = f[e];
    return null == t && (t = f[e] = { ...d }), t;
}
function h(e) {
    e.isSwitchingAccount || (f = {});
}
function m(e) {
    e.userId in f && delete f[e.userId];
}
function g(e) {
    let t = { ..._ };
    return (
        (_[e.key] = e.value),
        'enabled' === e.key
            ? c(e.value, !1)
            : s.default.track(l.rMx.UPDATE_STREAMER_MODE_SETTINGS, {
                  enabled: _.enabled,
                  automatic: _.autoToggle,
                  disable_notifications: _.disableNotifications,
                  disable_sounds: _.disableSounds,
                  hide_instant_invites: _.hideInstantInvites,
                  hide_personal_info: _.hidePersonalInformation,
                  enable_content_protection: _.enableContentProtection,
                  old_enabled: t.enabled,
                  old_automatic: t.autoToggle,
                  old_disable_notifications: t.disableNotifications,
                  old_disable_sounds: t.disableSounds,
                  old_hide_instant_invites: t.hideInstantInvites,
                  old_hide_personal_info: t.hidePersonalInformation,
                  old_enable_content_protection: t.enableContentProtection
              }),
        !0
    );
}
function E(e) {
    if (!_.autoToggle) return !1;
    {
        let t = e.count > 0;
        return (_.enabled = t), c(t, !0), !0;
    }
}
class v extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(f, e),
            this.syncWith([o.default], () => {
                let e = o.default.getId();
                _ = null != e ? p(e) : { ...d };
            });
    }
    getState() {
        return f;
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
}
u(v, 'displayName', 'StreamerModeStore'),
    u(v, 'persistKey', 'StreamerModeStore'),
    u(v, 'migrations', [
        (e) => {
            let t = o.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        }
    ]);
let y = new v(a.Z, {
    LOGOUT: h,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: m,
    STREAMER_MODE_UPDATE: g,
    RUNNING_STREAMER_TOOLS_CHANGE: E
});
