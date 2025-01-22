var i,
    a = r(442837),
    o = r(570140),
    s = r(626135),
    l = r(314897),
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
function d(e, n) {
    s.default.track(u.rMx.STREAMER_MODE_TOGGLE, {
        enabled: e,
        automatic: n
    });
}
let f = {
        enabled: !1,
        autoToggle: !0,
        hideInstantInvites: !0,
        hidePersonalInformation: !0,
        disableSounds: !0,
        disableNotifications: !0,
        enableContentProtection: !1
    },
    p = {},
    h = { ...f };
function _(e) {
    let n = p[e];
    return null == n && (n = p[e] = { ...f }), n;
}
function m(e) {
    !e.isSwitchingAccount && (p = {});
}
function g(e) {
    e.userId in p && delete p[e.userId];
}
function E(e) {
    let n = { ...h };
    return (
        (h[e.key] = e.value),
        'enabled' === e.key
            ? d(e.value, !1)
            : s.default.track(u.rMx.UPDATE_STREAMER_MODE_SETTINGS, {
                  enabled: h.enabled,
                  automatic: h.autoToggle,
                  disable_notifications: h.disableNotifications,
                  disable_sounds: h.disableSounds,
                  hide_instant_invites: h.hideInstantInvites,
                  hide_personal_info: h.hidePersonalInformation,
                  enable_content_protection: h.enableContentProtection,
                  old_enabled: n.enabled,
                  old_automatic: n.autoToggle,
                  old_disable_notifications: n.disableNotifications,
                  old_disable_sounds: n.disableSounds,
                  old_hide_instant_invites: n.hideInstantInvites,
                  old_hide_personal_info: n.hidePersonalInformation,
                  old_enable_content_protection: n.enableContentProtection
              }),
        !0
    );
}
function v(e) {
    if (!h.autoToggle) return !1;
    {
        let n = e.count > 0;
        return (h.enabled = n), d(n, !0), !0;
    }
}
class y extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(p, e),
            this.syncWith([l.default], () => {
                let e = l.default.getId();
                h = null != e ? _(e) : { ...f };
            });
    }
    getState() {
        return p;
    }
    getSettings() {
        return h;
    }
    get enabled() {
        return h.enabled;
    }
    get autoToggle() {
        return h.autoToggle;
    }
    get hideInstantInvites() {
        return this.enabled && h.hideInstantInvites;
    }
    get hidePersonalInformation() {
        return this.enabled && h.hidePersonalInformation;
    }
    get disableSounds() {
        return this.enabled && h.disableSounds;
    }
    get disableNotifications() {
        return this.enabled && h.disableNotifications;
    }
    get enableContentProtection() {
        return this.enabled && h.enableContentProtection;
    }
}
c(y, 'displayName', 'StreamerModeStore'),
    c(y, 'persistKey', 'StreamerModeStore'),
    c(y, 'migrations', [
        (e) => {
            let n = l.default.getId();
            return null == e || null == n ? {} : { [n]: { ...e } };
        }
    ]),
    (n.Z = new y(o.Z, {
        LOGOUT: m,
        MULTI_ACCOUNT_REMOVE_ACCOUNT: g,
        STREAMER_MODE_UPDATE: E,
        RUNNING_STREAMER_TOOLS_CHANGE: v
    }));
