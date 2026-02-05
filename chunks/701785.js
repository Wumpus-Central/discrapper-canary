"use strict";
n.d(t, { A: () => a, h: () => A });
var r = n(311907),
    i = n(73153);
let a = { enabled: !1 },
    s = [],
    o = {},
    l = new Set(),
    u = {};
function c(e) {
    let t = o[e]?.newMemberActions;
    return null == t ? null : ((u[e] = t), u[e]);
}
function d(e) {
    let { homeSettings: t, guildId: n } = e;
    null != n && (null == t && (o[n] = a), (o[n] = t), c(n), l.delete(n));
}
function _(e) {
    let { guildId: t } = e;
    l.add(t);
}
function f(e) {
    let { guildId: t } = e;
    l.delete(t);
}
function p(e) {
    let { guildId: t, enabled: n } = e,
        r = o[t];
    if (null == r) return !1;
    r.enabled = n;
}
function h(e) {
    let { guild: t } = e;
    if (null == o[t.id]) return !1;
    delete o[t.id], delete u[t.id];
}
function m(e) {
    let { guildId: t, resourceChannel: n } = e,
        r = o[t];
    if (null == r) return !1;
    r.resourceChannels = r.resourceChannels ?? [];
    let i = r.resourceChannels.findIndex((e) => e.channelId === n.channelId);
    return -1 !== i && ((r.resourceChannels[i] = { ...n }), !0);
}
function g(e) {
    let { guildId: t, action: n } = e,
        r = o[t];
    if (null == r) return !1;
    r.newMemberActions = r.newMemberActions ?? [];
    let i = r.newMemberActions.findIndex((e) => e.channelId === n.channelId);
    return -1 !== i && ((r.newMemberActions[i] = { ...n }), !0);
}
class E extends r.Ay.Store {
    static displayName = "GuildOnboardingHomeSettingsStore";
    getSettings(e) {
        return null == e ? null : (o[e] ?? a);
    }
    getNewMemberActions(e) {
        return null == e || this.getSettings(e)?.newMemberActions == null ? null : null == u[e] ? c(e) : u[e];
    }
    getActionForChannel(e, t) {
        let n = this.getSettings(e);
        return null == n ? null : (n.newMemberActions ?? []).find((e) => e.channelId === t);
    }
    hasMemberAction(e, t) {
        return null != this.getActionForChannel(e, t);
    }
    getResourceChannels(e) {
        return o[e]?.resourceChannels ?? s;
    }
    getResourceForChannel(e, t) {
        if (null == e) return null;
        let n = this.getResourceChannels(e);
        return n === s ? null : n.find((e) => e.channelId === t);
    }
    getIsLoading(e) {
        return null != e && l.has(e);
    }
    getWelcomeMessage(e) {
        if (null != e) return o[e]?.welcomeMessage;
    }
    hasSettings(e) {
        return null != e && null != o[e];
    }
    getEnabled(e) {
        return null != e && (o[e]?.enabled ?? !1);
    }
    getNewMemberAction(e, t) {
        return null == e || null == t ? null : (o[e]?.newMemberActions?.find((e) => e.channelId === t) ?? null);
    }
}
let A = new E(i.h, {
    GUILD_HOME_SETTINGS_FETCH_START: _,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: d,
    GUILD_HOME_SETTINGS_FETCH_FAIL: f,
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: d,
    GUILD_HOME_SETTINGS_TOGGLE_ENABLED: p,
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: m,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: g,
    GUILD_DELETE: h,
});
