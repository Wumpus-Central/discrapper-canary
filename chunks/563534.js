r.d(n, {
    P: function () {
        return u;
    }
});
var i,
    a = r(47120);
var o = r(442837),
    s = r(570140);
function l(e, n, r) {
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
let u = { enabled: !1 },
    c = [],
    d = {},
    f = new Set(),
    p = {};
function h(e) {
    var n;
    let r = null === (n = d[e]) || void 0 === n ? void 0 : n.newMemberActions;
    return null == r ? null : ((p[e] = r), p[e]);
}
function _(e) {
    let { homeSettings: n, guildId: r } = e;
    null != r && (null == n && (d[r] = u), (d[r] = n), h(r), f.delete(r));
}
function m(e) {
    let { guildId: n } = e;
    f.add(n);
}
function g(e) {
    let { guildId: n } = e;
    f.delete(n);
}
function E(e) {
    let { guildId: n, enabled: r } = e,
        i = d[n];
    if (null == i) return !1;
    i.enabled = r;
}
function v(e) {
    let { guild: n } = e;
    if (null == d[n.id]) return !1;
    delete d[n.id], delete p[n.id];
}
function y(e) {
    var n;
    let { guildId: r, resourceChannel: i } = e,
        a = d[r];
    if (null == a) return !1;
    a.resourceChannels = null !== (n = a.resourceChannels) && void 0 !== n ? n : [];
    let o = a.resourceChannels.findIndex((e) => e.channelId === i.channelId);
    return -1 !== o && ((a.resourceChannels[o] = { ...i }), !0);
}
function b(e) {
    var n;
    let { guildId: r, action: i } = e,
        a = d[r];
    if (null == a) return !1;
    a.newMemberActions = null !== (n = a.newMemberActions) && void 0 !== n ? n : [];
    let o = a.newMemberActions.findIndex((e) => e.channelId === i.channelId);
    return -1 !== o && ((a.newMemberActions[o] = { ...i }), !0);
}
class I extends (i = o.ZP.Store) {
    getSettings(e) {
        var n;
        return null == e ? null : null !== (n = d[e]) && void 0 !== n ? n : u;
    }
    getNewMemberActions(e) {
        var n;
        return null == e || (null === (n = this.getSettings(e)) || void 0 === n ? void 0 : n.newMemberActions) == null ? null : null == p[e] ? h(e) : p[e];
    }
    getActionForChannel(e, n) {
        var r;
        let i = this.getSettings(e);
        return null == i ? null : (null !== (r = i.newMemberActions) && void 0 !== r ? r : []).find((e) => e.channelId === n);
    }
    hasMemberAction(e, n) {
        return null != this.getActionForChannel(e, n);
    }
    getResourceChannels(e) {
        var n, r;
        return null !== (r = null === (n = d[e]) || void 0 === n ? void 0 : n.resourceChannels) && void 0 !== r ? r : c;
    }
    getResourceForChannel(e, n) {
        if (null == e) return null;
        let r = this.getResourceChannels(e);
        return r === c ? null : r.find((e) => e.channelId === n);
    }
    getIsLoading(e) {
        return null != e && f.has(e);
    }
    getWelcomeMessage(e) {
        var n;
        if (null != e) return null === (n = d[e]) || void 0 === n ? void 0 : n.welcomeMessage;
    }
    hasSettings(e) {
        return null != e && null != d[e];
    }
    getEnabled(e) {
        var n, r;
        return null != e && null !== (r = null === (n = d[e]) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
    }
    getNewMemberAction(e, n) {
        var r, i, a;
        return null == e || null == n ? null : null !== (a = null === (i = d[e]) || void 0 === i ? void 0 : null === (r = i.newMemberActions) || void 0 === r ? void 0 : r.find((e) => e.channelId === n)) && void 0 !== a ? a : null;
    }
}
l(I, 'displayName', 'GuildOnboardingHomeSettingsStore'),
    (n.Z = new I(s.Z, {
        GUILD_HOME_SETTINGS_FETCH_START: m,
        GUILD_HOME_SETTINGS_FETCH_SUCCESS: _,
        GUILD_HOME_SETTINGS_FETCH_FAIL: g,
        GUILD_HOME_SETTINGS_UPDATE_SUCCESS: _,
        GUILD_HOME_SETTINGS_TOGGLE_ENABLED: E,
        GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: y,
        GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: b,
        GUILD_DELETE: v
    }));
