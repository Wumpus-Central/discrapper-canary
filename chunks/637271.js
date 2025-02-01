n.d(t, { Z: () => h });
var i,
    l = n(442837),
    a = n(570140),
    r = n(592125),
    s = n(176505);
function o(e, t, n) {
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
let c = {},
    d = {};
class u extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        var t;
        c = null !== (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) && void 0 !== t ? t : {};
    }
    getState() {
        return { selectedResourceChannelIdByGuildId: c };
    }
    getSelectedResourceChannelId(e) {
        return null == e ? null : c[e];
    }
    getHomeNavigationChannelId(e) {
        var t;
        return null == e ? null : null !== (t = c[e]) && void 0 !== t ? t : d[e];
    }
}
o(u, 'displayName', 'GuildOnboardingHomeNavigationStore'), o(u, 'persistKey', 'GuildOnboardingHomeNavigationStore');
let h = new u(a.Z, {
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (null == n || t === s.oC.GUILD_HOME) return;
        let i = r.Z.getChannel(t),
            l = c[n],
            a = d[n];
        !((null == i ? void 0 : i.isThread()) && (null == i ? void 0 : i.parent_id) != null && [a, l].includes(null == i ? void 0 : i.parent_id)) && (t !== l && delete c[n], t !== a && delete d[n]);
    },
    SELECT_HOME_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, guildId: n } = e;
        null == t ? delete d[n] : (c[n] = t), delete d[n];
    },
    SELECT_NEW_MEMBER_ACTION_CHANNEL: function (e) {
        let { channelId: t, guildId: n } = e;
        delete c[n], (d[n] = t);
    }
});
