"use strict";
n.d(t, { A: () => s, h: () => E });
var i = n(17928),
    r = n(228366);
let s = { enabled: !1 },
    a = [],
    o = {},
    l = new Set(),
    d = {};
function _(e) {
    let t = o[e]?.newMemberActions;
    return null == t ? null : ((d[e] = t), d[e]);
}
function u(e) {
    let { homeSettings: t, guildId: n } = e;
    null != n && (null == t && (o[n] = s), (o[n] = t), _(n), l.delete(n));
}
class c extends i.Ay.Store {
    static displayName = "GuildOnboardingHomeSettingsStore";
    getSettings(e) {
        return null == e ? null : (o[e] ?? s);
    }
    getNewMemberActions(e) {
        return null == e || this.getSettings(e)?.newMemberActions == null ? null : null == d[e] ? _(e) : d[e];
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
let E = new c(r.h, {
    GUILD_HOME_SETTINGS_FETCH_START: function (e) {
        let { guildId: t } = e;
        l.add(t);
    },
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: u,
    GUILD_HOME_SETTINGS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        l.delete(t);
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: u,
    GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function (e) {
        let { guildId: t, enabled: n } = e,
            i = o[t];
        if (null == i) return !1;
        i.enabled = n;
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { guildId: t, resourceChannel: n } = e,
            i = o[t];
        if (null == i) return !1;
        i.resourceChannels = i.resourceChannels ?? [];
        let r = i.resourceChannels.findIndex((e) => e.channelId === n.channelId);
        return -1 !== r && ((i.resourceChannels[r] = { ...n }), !0);
    },
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { guildId: t, action: n } = e,
            i = o[t];
        if (null == i) return !1;
        i.newMemberActions = i.newMemberActions ?? [];
        let r = i.newMemberActions.findIndex((e) => e.channelId === n.channelId);
        return -1 !== r && ((i.newMemberActions[r] = { ...n }), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (null == o[t.id]) return !1;
        delete o[t.id], delete d[t.id];
    },
});
