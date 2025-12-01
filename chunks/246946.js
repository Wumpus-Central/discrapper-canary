n.d(t, { Z: () => O });
var r,
    i = n(442837),
    a = n(570140),
    o = n(626135),
    s = n(314897),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    o.default.track(l.rMx.STREAMER_MODE_TOGGLE, {
        enabled: e,
        automatic: t,
    });
}
let f = {
        enabled: !1,
        autoToggle: !0,
        hideInstantInvites: !0,
        hidePersonalInformation: !0,
        disableSounds: !0,
        disableNotifications: !0,
        enableContentProtection: !1,
    },
    p = {},
    _ = u({}, f);
function m(e) {
    let t = p[e];
    return null == t && (t = p[e] = u({}, f)), t;
}
function h(e) {
    e.isSwitchingAccount || (p = {});
}
function g(e) {
    e.userId in p && delete p[e.userId];
}
function E(e) {
    let t = u({}, _);
    return (
        (_[e.key] = e.value),
        "enabled" === e.key
            ? d(e.value, !1)
            : o.default.track(l.rMx.UPDATE_STREAMER_MODE_SETTINGS, {
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
                  old_enable_content_protection: t.enableContentProtection,
              }),
        !0
    );
}
function b(e) {
    if (!_.autoToggle) return !1;
    {
        let t = e.count > 0;
        return (_.enabled = t), d(t, !0), !0;
    }
}
class y extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(p, e),
            this.syncWith([s.default], () => {
                let e = s.default.getId();
                _ = null != e ? m(e) : u({}, f);
            });
    }
    getState() {
        return p;
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
c(y, "displayName", "StreamerModeStore"),
    c(y, "persistKey", "StreamerModeStore"),
    c(y, "migrations", [
        (e) => {
            let t = s.default.getId();
            return null == e || null == t ? {} : { [t]: u({}, e) };
        },
    ]);
let O = new y(a.Z, {
    LOGOUT: h,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: g,
    STREAMER_MODE_UPDATE: E,
    RUNNING_STREAMER_TOOLS_CHANGE: b,
});
