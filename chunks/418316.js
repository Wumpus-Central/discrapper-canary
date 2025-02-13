n.d(t, { Z: () => h });
var i = n(512722),
    l = n.n(i),
    a = n(924301),
    r = n(430824),
    s = n(699516),
    o = n(594174),
    c = n(624138),
    d = n(51144),
    u = n(497089),
    m = n(981631),
    _ = n(388032);
function h(e) {
    var t, n, i, h, p, g, f, x, C, v, E, I, N, S, T;
    let { item: b, renderApplication: A } = e,
        j = null !== (i = null === (t = b.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : m.lds,
        y = d.ZP.getName(o.default.getUser(null === (n = b.other_user) || void 0 === n ? void 0 : n.id)),
        Z = b.applicationId;
    switch (b.type) {
        case u.O7.INCOMING_FRIEND_REQUESTS:
            return _.intl.format(_.t.uIomX1, { username: y });
        case u.O7.FRIEND_REQUESTS_GROUPED:
            let R = d.ZP.getName(o.default.getUser(null === (p = b.other_users) || void 0 === p ? void 0 : null === (h = p[0]) || void 0 === h ? void 0 : h.id)),
                L = d.ZP.getName(o.default.getUser(null === (f = b.other_users) || void 0 === f ? void 0 : null === (g = f[1]) || void 0 === g ? void 0 : g.id)),
                P = Math.max((null !== (C = null === (x = b.other_users) || void 0 === x ? void 0 : x.length) && void 0 !== C ? C : 0) - 2, 0);
            return _.intl.format(_.t.g5xyIC, {
                user: R,
                user2: L,
                count: P
            });
        case u.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let k = null !== (E = null === (v = b.local_id) || void 0 === v ? void 0 : v.split('_').pop()) && void 0 !== E ? E : 'unknown';
            return 'Update to build '.concat(k, ' available!');
        case u.DY.FRIEND_SUGGESTION_CREATED:
            return s.Z.getRelationshipType(j), m.OGo.PENDING_OUTGOING, null !== (I = b.body) && void 0 !== I ? I : '';
        case u.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let M = b.guild_scheduled_event_id,
                O = null != M ? a.ZP.getGuildScheduledEvent(M) : null,
                D = null == O ? void 0 : O.name,
                w = null === (N = r.Z.getGuild(null == O ? void 0 : O.guild_id)) || void 0 === N ? void 0 : N.name,
                F = (0, a.Z2)(null != O ? O : void 0);
            return (0, c.Ew)(w) || (0, c.Ew)(D) || !F
                ? null !== (S = b.body) && void 0 !== S
                    ? S
                    : ''
                : _.intl.format(_.t.AyvfXV, {
                      event_name: D,
                      guild_name: w
                  });
        case u.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return _.intl.format(_.t['5Uzkdn'], { username: y });
        case u.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                l()(null != Z, 'Expected application id for '.concat(b.type)),
                _.intl.format(_.t['JeG/vL'], {
                    username: y,
                    applicationName: () => A(Z)
                })
            );
        case u.O7.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                l()(null != Z, 'Expected application id for '.concat(b.type)),
                _.intl.format(_.t['24wRy8'], {
                    username: y,
                    applicationName: () => A(Z)
                })
            );
        case u.DY.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == Z) return b.body;
            return _.intl.format(_.t.W37RjI, {
                username: y,
                applicationName: () => A(Z)
            });
    }
    return null !== (T = b.body) && void 0 !== T ? T : '';
}
