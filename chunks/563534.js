n.d(t, {
    P: () => o,
    Z: () => I
}),
    n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = { enabled: !1 },
    l = [],
    u = {},
    c = new Set(),
    d = {};
function f(e) {
    var t;
    let n = null === (t = u[e]) || void 0 === t ? void 0 : t.newMemberActions;
    return null == n ? null : ((d[e] = n), d[e]);
}
function _(e) {
    let { homeSettings: t, guildId: n } = e;
    null != n && (null == t && (u[n] = o), (u[n] = t), f(n), c.delete(n));
}
function p(e) {
    let { guildId: t } = e;
    c.add(t);
}
function h(e) {
    let { guildId: t } = e;
    c.delete(t);
}
function m(e) {
    let { guildId: t, enabled: n } = e,
        i = u[t];
    if (null == i) return !1;
    i.enabled = n;
}
function g(e) {
    let { guild: t } = e;
    if (null == u[t.id]) return !1;
    delete u[t.id], delete d[t.id];
}
function E(e) {
    var t;
    let { guildId: n, resourceChannel: i } = e,
        r = u[n];
    if (null == r) return !1;
    r.resourceChannels = null !== (t = r.resourceChannels) && void 0 !== t ? t : [];
    let a = r.resourceChannels.findIndex((e) => e.channelId === i.channelId);
    return -1 !== a && ((r.resourceChannels[a] = { ...i }), !0);
}
function v(e) {
    var t;
    let { guildId: n, action: i } = e,
        r = u[n];
    if (null == r) return !1;
    r.newMemberActions = null !== (t = r.newMemberActions) && void 0 !== t ? t : [];
    let a = r.newMemberActions.findIndex((e) => e.channelId === i.channelId);
    return -1 !== a && ((r.newMemberActions[a] = { ...i }), !0);
}
class y extends (i = r.ZP.Store) {
    getSettings(e) {
        var t;
        return null == e ? null : null !== (t = u[e]) && void 0 !== t ? t : o;
    }
    getNewMemberActions(e) {
        var t;
        return null == e || (null === (t = this.getSettings(e)) || void 0 === t ? void 0 : t.newMemberActions) == null ? null : null == d[e] ? f(e) : d[e];
    }
    getActionForChannel(e, t) {
        var n;
        let i = this.getSettings(e);
        return null == i ? null : (null !== (n = i.newMemberActions) && void 0 !== n ? n : []).find((e) => e.channelId === t);
    }
    hasMemberAction(e, t) {
        return null != this.getActionForChannel(e, t);
    }
    getResourceChannels(e) {
        var t, n;
        return null !== (n = null === (t = u[e]) || void 0 === t ? void 0 : t.resourceChannels) && void 0 !== n ? n : l;
    }
    getResourceForChannel(e, t) {
        if (null == e) return null;
        let n = this.getResourceChannels(e);
        return n === l ? null : n.find((e) => e.channelId === t);
    }
    getIsLoading(e) {
        return null != e && c.has(e);
    }
    getWelcomeMessage(e) {
        var t;
        if (null != e) return null === (t = u[e]) || void 0 === t ? void 0 : t.welcomeMessage;
    }
    hasSettings(e) {
        return null != e && null != u[e];
    }
    getEnabled(e) {
        var t, n;
        return null != e && null !== (n = null === (t = u[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
    }
    getNewMemberAction(e, t) {
        var n, i, r;
        return null == e || null == t ? null : null !== (r = null === (i = u[e]) || void 0 === i ? void 0 : null === (n = i.newMemberActions) || void 0 === n ? void 0 : n.find((e) => e.channelId === t)) && void 0 !== r ? r : null;
    }
}
s(y, 'displayName', 'GuildOnboardingHomeSettingsStore');
let I = new y(a.Z, {
    GUILD_HOME_SETTINGS_FETCH_START: p,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: _,
    GUILD_HOME_SETTINGS_FETCH_FAIL: h,
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: _,
    GUILD_HOME_SETTINGS_TOGGLE_ENABLED: m,
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: E,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: v,
    GUILD_DELETE: g
});
