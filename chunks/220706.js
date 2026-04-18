n.d(t, { A: () => d });
var i = n(311907),
    l = n(73153),
    s = n(734057),
    a = n(746080);
let r = {},
    o = {};
class c extends i.Ay.PersistedStore {
    static displayName = "GuildOnboardingHomeNavigationStore";
    static persistKey = "GuildOnboardingHomeNavigationStore";
    initialize(e) {
        this.waitFor(s.A), (r = e?.selectedResourceChannelIdByGuildId ?? {});
    }
    getState() {
        return { selectedResourceChannelIdByGuildId: r };
    }
    getSelectedResourceChannelId(e) {
        return null == e ? null : r[e];
    }
    getHomeNavigationChannelId(e) {
        return null == e ? null : (r[e] ?? o[e]);
    }
}
let d = new c(l.h, {
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (null == n || t === a.VV.GUILD_HOME) return;
        let i = s.A.getChannel(t),
            l = r[n],
            c = o[n];
        (i?.isThread() && i?.parent_id != null && [c, l].includes(i?.parent_id)) ||
            (t !== l && delete r[n], t !== c && delete o[n]);
    },
    SELECT_HOME_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, guildId: n } = e;
        null == t ? delete o[n] : (r[n] = t), delete o[n];
    },
    SELECT_NEW_MEMBER_ACTION_CHANNEL: function (e) {
        let { channelId: t, guildId: n } = e;
        delete r[n], (o[n] = t);
    },
});
