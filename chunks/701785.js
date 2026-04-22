"use strict";
n.d(t, { A: () => s, h: () => f });
var r = n(311907),
    i = n(73153);
let s = { enabled: !1 },
    a = [],
    o = {},
    l = new Set(),
    u = {};
function d(e) {
    let t = o[e]?.newMemberActions;
    return null == t ? null : ((u[e] = t), u[e]);
}
function c(e) {
    let { homeSettings: t, guildId: n } = e;
    null != n && (null == t && (o[n] = s), (o[n] = t), d(n), l.delete(n));
}
class _ extends r.Ay.Store {
    static displayName = "GuildOnboardingHomeSettingsStore";
    getSettings(e) {
        return null == e ? null : (o[e] ?? s);
    }
    getNewMemberActions(e) {
        return null == e || this.getSettings(e)?.newMemberActions == null ? null : null == u[e] ? d(e) : u[e];
    }
    getActionForChannel(e, t) {
        let n = this.getSettings(e);
        return null == n ? null : (n.newMemberActions ?? []).find((e) => e.channelId === t);
    }
    hasMemberAction(e, t) {
        return null != this.getActionForChannel(e, t);
    }
    getResourceChannels(e) {
        return o[e]?.resourceChannels ?? a;
    }
    getResourceForChannel(e, t) {
        if (null == e) return null;
        let n = this.getResourceChannels(e);
        return n === a ? null : n.find((e) => e.channelId === t);
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
let f = new _(i.h, {
    GUILD_HOME_SETTINGS_FETCH_START: function (e) {
        let { guildId: t } = e;
        l.add(t);
    },
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: c,
    GUILD_HOME_SETTINGS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        l.delete(t);
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: c,
    GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function (e) {
        let { guildId: t, enabled: n } = e,
            r = o[t];
        if (null == r) return !1;
        r.enabled = n;
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { guildId: t, resourceChannel: n } = e,
            r = o[t];
        if (null == r) return !1;
        r.resourceChannels = r.resourceChannels ?? [];
        let i = r.resourceChannels.findIndex((e) => e.channelId === n.channelId);
        return -1 !== i && ((r.resourceChannels[i] = { ...n }), !0);
    },
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { guildId: t, action: n } = e,
            r = o[t];
        if (null == r) return !1;
        r.newMemberActions = r.newMemberActions ?? [];
        let i = r.newMemberActions.findIndex((e) => e.channelId === n.channelId);
        return -1 !== i && ((r.newMemberActions[i] = { ...n }), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (null == o[t.id]) return !1;
        delete o[t.id], delete u[t.id];
    },
});
