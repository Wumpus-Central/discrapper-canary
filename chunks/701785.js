n.d(t, {
    A: () => l,
    h: () => A,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
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
function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
let l = { enabled: !1 },
    c = [],
    u = {},
    d = new Set(),
    f = {};
function p(e) {
    var t;
    let n = null == (t = u[e]) ? void 0 : t.newMemberActions;
    return null == n ? null : ((f[e] = n), f[e]);
}
function _(e) {
    let { homeSettings: t, guildId: n } = e;
    null != n && (null == t && (u[n] = l), (u[n] = t), p(n), d.delete(n));
}
function h(e) {
    let { guildId: t } = e;
    d.add(t);
}
function m(e) {
    let { guildId: t } = e;
    d.delete(t);
}
function g(e) {
    let { guildId: t, enabled: n } = e,
        r = u[t];
    if (null == r) return !1;
    r.enabled = n;
}
function E(e) {
    let { guild: t } = e;
    if (null == u[t.id]) return !1;
    delete u[t.id], delete f[t.id];
}
function b(e) {
    var t;
    let { guildId: n, resourceChannel: r } = e,
        i = u[n];
    if (null == i) return !1;
    i.resourceChannels = null != (t = i.resourceChannels) ? t : [];
    let a = i.resourceChannels.findIndex((e) => e.channelId === r.channelId);
    return -1 !== a && ((i.resourceChannels[a] = o({}, r)), !0);
}
function y(e) {
    var t;
    let { guildId: n, action: r } = e,
        i = u[n];
    if (null == i) return !1;
    i.newMemberActions = null != (t = i.newMemberActions) ? t : [];
    let a = i.newMemberActions.findIndex((e) => e.channelId === r.channelId);
    return -1 !== a && ((i.newMemberActions[a] = o({}, r)), !0);
}
class O extends (r = i.Ay.Store) {
    getSettings(e) {
        var t;
        return null == e ? null : null != (t = u[e]) ? t : l;
    }
    getNewMemberActions(e) {
        var t;
        return null == e || (null == (t = this.getSettings(e)) ? void 0 : t.newMemberActions) == null
            ? null
            : null == f[e]
              ? p(e)
              : f[e];
    }
    getActionForChannel(e, t) {
        var n;
        let r = this.getSettings(e);
        return null == r ? null : (null != (n = r.newMemberActions) ? n : []).find((e) => e.channelId === t);
    }
    hasMemberAction(e, t) {
        return null != this.getActionForChannel(e, t);
    }
    getResourceChannels(e) {
        var t, n;
        return null != (t = null == (n = u[e]) ? void 0 : n.resourceChannels) ? t : c;
    }
    getResourceForChannel(e, t) {
        if (null == e) return null;
        let n = this.getResourceChannels(e);
        return n === c ? null : n.find((e) => e.channelId === t);
    }
    getIsLoading(e) {
        return null != e && d.has(e);
    }
    getWelcomeMessage(e) {
        var t;
        if (null != e) return null == (t = u[e]) ? void 0 : t.welcomeMessage;
    }
    hasSettings(e) {
        return null != e && null != u[e];
    }
    getEnabled(e) {
        var t, n;
        return null != e && null != (t = null == (n = u[e]) ? void 0 : n.enabled) && t;
    }
    getNewMemberAction(e, t) {
        var n, r, i;
        return null == e || null == t
            ? null
            : null !=
                (n = null == (i = u[e]) || null == (r = i.newMemberActions) ? void 0 : r.find((e) => e.channelId === t))
              ? n
              : null;
    }
}
s(O, "displayName", "GuildOnboardingHomeSettingsStore");
let A = new O(a.h, {
    GUILD_HOME_SETTINGS_FETCH_START: h,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: _,
    GUILD_HOME_SETTINGS_FETCH_FAIL: m,
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: _,
    GUILD_HOME_SETTINGS_TOGGLE_ENABLED: g,
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: b,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: y,
    GUILD_DELETE: E,
});
