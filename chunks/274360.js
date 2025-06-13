n.d(t, { f: () => p });
var r = n(579806),
    i = n(933557),
    l = n(710845),
    a = n(592125),
    o = n(430824),
    s = n(699516),
    c = n(594174),
    u = n(403011);
let d = new l.Z('UserActivity');
function p(e) {
    var t, n;
    if (!u.Z.getCurrentConfig({ location: 'updateUserActivity' }).activityEnabled) return;
    let l = a.Z.getChannel(null == e || null == (t = e.params) ? void 0 : t.channelId);
    if (null == e || null == l) {
        try {
            r.Z.ipc.invoke('DISCORD_INTENTS_RESIGN_ACTIVITY');
        } catch (e) {
            d.warn('updateUserActivity: resign: '.concat(e));
        }
        return;
    }
    let p = o.Z.getGuild(null == e || null == (n = e.params) ? void 0 : n.guildId),
        h = (0, i.F6)(l, c.default, s.Z, !0) + ((null == p ? void 0 : p.name) != null ? ' (' + p.name + ')' : ''),
        f = {
            webpageURL: 'https://discord.com' + e.url,
            relatedUniqueIdentifier: e.url,
            eligibleForHandoff: !0,
            eligibleForSearch: !0,
            title: h,
            displayName: h,
            type: 'com.discord.view-channel'
        };
    try {
        r.Z.ipc.invoke('DISCORD_INTENTS_SET_ACTIVITY', f);
    } catch (e) {
        d.warn('updateUserActivity: set: '.concat(e));
    }
}
