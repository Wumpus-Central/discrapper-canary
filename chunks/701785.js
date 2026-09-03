n.d(t, { A: () => a, h: () => E });
var i = n(17928),
    r = n(228366);
let a = { enabled: !1 },
    s = [],
    l = {},
    o = new Set(),
    d = {};
function c(e) {
    let t = l[e]?.newMemberActions;
    return null == t ? null : ((d[e] = t), d[e]);
}
function u(e) {
    let { homeSettings: t, guildId: n } = e;
    null != n && (null == t && (l[n] = a), (l[n] = t), c(n), o.delete(n));
}
class _ extends i.Ay.Store {
    static displayName = "GuildOnboardingHomeSettingsStore";
    getSettings(e) {
        return null == e ? null : (l[e] ?? a);
    }
    getNewMemberActions(e) {
        return null == e || this.getSettings(e)?.newMemberActions == null ? null : null == d[e] ? c(e) : d[e];
    }
    getActionForChannel(e, t) {
        let n = this.getSettings(e);
        return null == n ? null : (n.newMemberActions ?? []).find((e) => e.channelId === t);
    }
    hasMemberAction(e, t) {
        return null != this.getActionForChannel(e, t);
    }
    getResourceChannels(e) {
        return l[e]?.resourceChannels ?? s;
    }
    getResourceForChannel(e, t) {
        if (null == e) return null;
        let n = this.getResourceChannels(e);
        return n === s ? null : n.find((e) => e.channelId === t);
    }
    getIsLoading(e) {
        return null != e && o.has(e);
    }
    getWelcomeMessage(e) {
        if (null != e) return l[e]?.welcomeMessage;
    }
    hasSettings(e) {
        return null != e && null != l[e];
    }
    getEnabled(e) {
        return null != e && (l[e]?.enabled ?? !1);
    }
    getNewMemberAction(e, t) {
        return null == e || null == t ? null : (l[e]?.newMemberActions?.find((e) => e.channelId === t) ?? null);
    }
}
let E = new _(r.h, {
    GUILD_HOME_SETTINGS_FETCH_START: function (e) {
        let { guildId: t } = e;
        o.add(t);
    },
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: u,
    GUILD_HOME_SETTINGS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        o.delete(t);
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: u,
    GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function (e) {
        let { guildId: t, enabled: n } = e,
            i = l[t];
        if (null == i) return !1;
        i.enabled = n;
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { guildId: t, resourceChannel: n } = e,
            i = l[t];
        if (null == i) return !1;
        i.resourceChannels = i.resourceChannels ?? [];
        let r = i.resourceChannels.findIndex((e) => e.channelId === n.channelId);
        return -1 !== r && ((i.resourceChannels[r] = { ...n }), !0);
    },
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { guildId: t, action: n } = e,
            i = l[t];
        if (null == i) return !1;
        i.newMemberActions = i.newMemberActions ?? [];
        let r = i.newMemberActions.findIndex((e) => e.channelId === n.channelId);
        return -1 !== r && ((i.newMemberActions[r] = { ...n }), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (null == l[t.id]) return !1;
        delete l[t.id], delete d[t.id];
    },
});
