n.d(t, { Z: () => p });
var r,
    i = n(442837),
    l = n(570140),
    o = n(592125),
    a = n(176505);
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
let c = {},
    u = {};
class d extends (r = i.ZP.PersistedStore) {
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
        return null == e ? null : null !== (t = c[e]) && void 0 !== t ? t : u[e];
    }
}
s(d, 'displayName', 'GuildOnboardingHomeNavigationStore'), s(d, 'persistKey', 'GuildOnboardingHomeNavigationStore');
let p = new d(l.Z, {
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (null == n || t === a.oC.GUILD_HOME) return;
        let r = o.Z.getChannel(t),
            i = c[n],
            l = u[n];
        !((null == r ? void 0 : r.isThread()) && (null == r ? void 0 : r.parent_id) != null && [l, i].includes(null == r ? void 0 : r.parent_id)) && (t !== i && delete c[n], t !== l && delete u[n]);
    },
    SELECT_HOME_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, guildId: n } = e;
        null == t ? delete u[n] : (c[n] = t), delete u[n];
    },
    SELECT_NEW_MEMBER_ACTION_CHANNEL: function (e) {
        let { channelId: t, guildId: n } = e;
        delete c[n], (u[n] = t);
    }
});
