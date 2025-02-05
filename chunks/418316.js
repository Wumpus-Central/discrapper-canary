n.d(t, { Z: () => m });
var i = n(924301),
    l = n(430824),
    a = n(699516),
    r = n(594174),
    s = n(624138),
    o = n(51144),
    c = n(497089),
    d = n(981631),
    u = n(388032);
function m(e) {
    var t, n, m, _, h, p, g, f, x, C, v, E, I, N, S;
    let T = null !== (m = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== m ? m : d.lds,
        b = o.ZP.getName(r.default.getUser(null === (n = e.other_user) || void 0 === n ? void 0 : n.id));
    switch (e.type) {
        case c.O7.INCOMING_FRIEND_REQUESTS:
            return u.intl.format(u.t.uIomX1, { username: b });
        case c.O7.FRIEND_REQUESTS_GROUPED:
            let A = o.ZP.getName(r.default.getUser(null === (h = e.other_users) || void 0 === h ? void 0 : null === (_ = h[0]) || void 0 === _ ? void 0 : _.id)),
                j = o.ZP.getName(r.default.getUser(null === (g = e.other_users) || void 0 === g ? void 0 : null === (p = g[1]) || void 0 === p ? void 0 : p.id)),
                y = Math.max((null !== (x = null === (f = e.other_users) || void 0 === f ? void 0 : f.length) && void 0 !== x ? x : 0) - 2, 0);
            return u.intl.format(u.t.g5xyIC, {
                user: A,
                user2: j,
                count: y
            });
        case c.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let Z = null !== (v = null === (C = e.local_id) || void 0 === C ? void 0 : C.split('_').pop()) && void 0 !== v ? v : 'unknown';
            return 'Update to build '.concat(Z, ' available!');
        case c.DY.FRIEND_SUGGESTION_CREATED:
            return a.Z.getRelationshipType(T), d.OGo.PENDING_OUTGOING, null !== (E = e.body) && void 0 !== E ? E : '';
        case c.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let R = e.guild_scheduled_event_id,
                L = null != R ? i.ZP.getGuildScheduledEvent(R) : null,
                P = null == L ? void 0 : L.name,
                k = null === (I = l.Z.getGuild(null == L ? void 0 : L.guild_id)) || void 0 === I ? void 0 : I.name,
                M = (0, i.Z2)(null != L ? L : void 0);
            return (0, s.Ew)(k) || (0, s.Ew)(P) || !M
                ? null !== (N = e.body) && void 0 !== N
                    ? N
                    : ''
                : u.intl.format(u.t.AyvfXV, {
                      event_name: P,
                      guild_name: k
                  });
        case c.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return u.intl.format(u.t['5Uzkdn'], { username: b });
    }
    return null !== (S = e.body) && void 0 !== S ? S : '';
}
