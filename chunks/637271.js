n.d(t, { Z: () => h });
var r,
    i = n(442837),
    o = n(570140),
    a = n(592125),
    s = n(176505);
function l(e, t, n) {
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
function d(e) {
    let { channelId: t, guildId: n } = e;
    if (null == n || t === s.oC.GUILD_HOME) return;
    let r = a.Z.getChannel(t),
        i = c[n],
        o = u[n];
    ((null == r ? void 0 : r.isThread()) && (null == r ? void 0 : r.parent_id) != null && [o, i].includes(null == r ? void 0 : r.parent_id)) || (t !== i && delete c[n], t !== o && delete u[n]);
}
function f(e) {
    let { channelId: t, guildId: n } = e;
    (null == t ? delete u[n] : (c[n] = t), delete u[n]);
}
function _(e) {
    let { channelId: t, guildId: n } = e;
    (delete c[n], (u[n] = t));
}
class p extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        c = null != (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) ? t : {};
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
(l(p, 'displayName', 'GuildOnboardingHomeNavigationStore'), l(p, 'persistKey', 'GuildOnboardingHomeNavigationStore'));
let h = new p(o.Z, {
    CHANNEL_SELECT: d,
    SELECT_HOME_RESOURCE_CHANNEL: f,
    SELECT_NEW_MEMBER_ACTION_CHANNEL: _
});
