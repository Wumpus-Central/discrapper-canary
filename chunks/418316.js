n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(924301),
    r = n(430824),
    l = n(699516),
    a = n(594174),
    o = n(624138),
    s = n(51144),
    c = n(497089),
    u = n(981631),
    d = n(388032);
function m(e) {
    var t, n, m, h, f, p, _, g, E, C, I, x, N, v, T;
    let S = null !== (m = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== m ? m : u.lds,
        A = s.ZP.getName(a.default.getUser(null === (n = e.other_user) || void 0 === n ? void 0 : n.id));
    switch (e.type) {
        case c.O7.INCOMING_FRIEND_REQUESTS:
            return d.intl.format(d.t.uIomX1, { username: A });
        case c.O7.FRIEND_REQUESTS_GROUPED:
            let b = s.ZP.getName(a.default.getUser(null === (f = e.other_users) || void 0 === f ? void 0 : null === (h = f[0]) || void 0 === h ? void 0 : h.id)),
                j = s.ZP.getName(a.default.getUser(null === (_ = e.other_users) || void 0 === _ ? void 0 : null === (p = _[1]) || void 0 === p ? void 0 : p.id)),
                R = Math.max((null !== (E = null === (g = e.other_users) || void 0 === g ? void 0 : g.length) && void 0 !== E ? E : 0) - 2, 0);
            return d.intl.format(d.t.g5xyIC, {
                user: b,
                user2: j,
                count: R
            });
        case c.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let Z = null !== (I = null === (C = e.local_id) || void 0 === C ? void 0 : C.split('_').pop()) && void 0 !== I ? I : 'unknown';
            return 'Update to build '.concat(Z, ' available!');
        case c.DY.FRIEND_SUGGESTION_CREATED:
            return l.Z.getRelationshipType(S), u.OGo.PENDING_OUTGOING, null !== (x = e.body) && void 0 !== x ? x : '';
        case c.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let P = e.guild_scheduled_event_id,
                L = null != P ? i.ZP.getGuildScheduledEvent(P) : null,
                y = null == L ? void 0 : L.name,
                O = null === (N = r.Z.getGuild(null == L ? void 0 : L.guild_id)) || void 0 === N ? void 0 : N.name,
                M = (0, i.Z2)(null != L ? L : void 0);
            return (0, o.Ew)(O) || (0, o.Ew)(y) || !M
                ? null !== (v = e.body) && void 0 !== v
                    ? v
                    : ''
                : d.intl.format(d.t.AyvfXV, {
                      event_name: y,
                      guild_name: O
                  });
        case c.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return d.intl.format(d.t['5Uzkdn'], { username: A });
    }
    return null !== (T = e.body) && void 0 !== T ? T : '';
}
