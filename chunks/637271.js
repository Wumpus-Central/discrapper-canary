n.d(t, { Z: () => p });
var i,
    r = n(442837),
    l = n(570140),
    a = n(592125),
    o = n(176505);
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
let c = {},
    u = {};
class d extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(a.Z), (c = null != (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) ? t : {});
    }
    getState() {
        return { selectedResourceChannelIdByGuildId: c };
    }
    getSelectedResourceChannelId(e) {
        return null == e ? null : c[e];
    }
    getHomeNavigationChannelId(e) {
        var t;
        return null == e ? null : null != (t = c[e]) ? t : u[e];
    }
}
s(d, "displayName", "GuildOnboardingHomeNavigationStore"), s(d, "persistKey", "GuildOnboardingHomeNavigationStore");
let p = new d(l.Z, {
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (null == n || t === o.oC.GUILD_HOME) return;
        let i = a.Z.getChannel(t),
            r = c[n],
            l = u[n];
        ((null == i ? void 0 : i.isThread()) &&
            (null == i ? void 0 : i.parent_id) != null &&
            [l, r].includes(null == i ? void 0 : i.parent_id)) ||
            (t !== r && delete c[n], t !== l && delete u[n]);
    },
    SELECT_HOME_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, guildId: n } = e;
        null == t ? delete u[n] : (c[n] = t), delete u[n];
    },
    SELECT_NEW_MEMBER_ACTION_CHANNEL: function (e) {
        let { channelId: t, guildId: n } = e;
        delete c[n], (u[n] = t);
    },
});
