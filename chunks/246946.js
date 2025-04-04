n.d(t, { Z: () => v });
var r,
    i = n(442837),
    o = n(570140),
    a = n(626135),
    s = n(314897),
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
function d(e, t) {
    a.default.track(l.rMx.STREAMER_MODE_TOGGLE, {
        enabled: e,
        automatic: t
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
    _ = {},
    p = u({}, f);
function h(e) {
    let t = _[e];
    return null == t && (t = _[e] = u({}, f)), t;
}
function m(e) {
    e.isSwitchingAccount || (_ = {});
}
function g(e) {
    e.userId in _ && delete _[e.userId];
}
function E(e) {
    let t = u({}, p);
    return (
        (p[e.key] = e.value),
        'enabled' === e.key
            ? d(e.value, !1)
            : a.default.track(l.rMx.UPDATE_STREAMER_MODE_SETTINGS, {
                  enabled: p.enabled,
                  automatic: p.autoToggle,
                  disable_notifications: p.disableNotifications,
                  disable_sounds: p.disableSounds,
                  hide_instant_invites: p.hideInstantInvites,
                  hide_personal_info: p.hidePersonalInformation,
                  enable_content_protection: p.enableContentProtection,
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
function b(e) {
    if (!p.autoToggle) return !1;
    {
        let t = e.count > 0;
        return (p.enabled = t), d(t, !0), !0;
    }
}
class y extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(_, e),
            this.syncWith([s.default], () => {
                let e = s.default.getId();
                p = null != e ? h(e) : u({}, f);
            });
    }
    getState() {
        return _;
    }
    getSettings() {
        return p;
    }
    get enabled() {
        return p.enabled;
    }
    get autoToggle() {
        return p.autoToggle;
    }
    get hideInstantInvites() {
        return this.enabled && p.hideInstantInvites;
    }
    get hidePersonalInformation() {
        return this.enabled && p.hidePersonalInformation;
    }
    get disableSounds() {
        return this.enabled && p.disableSounds;
    }
    get disableNotifications() {
        return this.enabled && p.disableNotifications;
    }
    get enableContentProtection() {
        return this.enabled && p.enableContentProtection;
    }
}
c(y, 'displayName', 'StreamerModeStore'),
    c(y, 'persistKey', 'StreamerModeStore'),
    c(y, 'migrations', [
        (e) => {
            let t = s.default.getId();
            return null == e || null == t ? {} : { [t]: u({}, e) };
        }
    ]);
let v = new y(o.Z, {
    LOGOUT: m,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: g,
    STREAMER_MODE_UPDATE: E,
    RUNNING_STREAMER_TOOLS_CHANGE: b
});
