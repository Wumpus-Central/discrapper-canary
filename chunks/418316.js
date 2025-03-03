n.d(t, { Z: () => h }), n(301563);
var r = n(512722),
    i = n.n(r),
    a = n(924301),
    o = n(430824),
    l = n(699516),
    s = n(594174),
    c = n(624138),
    d = n(51144),
    u = n(497089),
    p = n(981631),
    m = n(388032);
function f(e) {
    let { username: t, applicationId: n, renderApplication: r, withApplication: i, withDefault: a } = e;
    return null != n
        ? m.NW.format(i, {
              username: t,
              applicationName: () => r(n)
          })
        : m.NW.format(a, { username: t });
}
function h(e) {
    var t, n, r, h, g, _, b, v, y, x, O, E, j, N, C;
    let { item: I, renderApplication: S } = e,
        T = null !== (r = null === (t = I.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : p.lds,
        P = d.ZP.getName(s.default.getUser(null === (n = I.other_user) || void 0 === n ? void 0 : n.id)),
        A = I.applicationId;
    switch (I.type) {
        case u.O7.FRIEND_REQUESTS_GROUPED:
            let w = d.ZP.getName(s.default.getUser(null === (g = I.other_users) || void 0 === g ? void 0 : null === (h = g[0]) || void 0 === h ? void 0 : h.id)),
                Z = d.ZP.getName(s.default.getUser(null === (b = I.other_users) || void 0 === b ? void 0 : null === (_ = b[1]) || void 0 === _ ? void 0 : _.id)),
                k = Math.max((null !== (y = null === (v = I.other_users) || void 0 === v ? void 0 : v.length) && void 0 !== y ? y : 0) - 2, 0);
            return m.NW.format(m.t.g5xyIC, {
                user: w,
                user2: Z,
                count: k
            });
        case u.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let R = null !== (O = null === (x = I.local_id) || void 0 === x ? void 0 : x.split('_').pop()) && void 0 !== O ? O : 'unknown';
            return 'Update to build '.concat(R, ' available!');
        case u.DY.FRIEND_SUGGESTION_CREATED:
            return l.Z.getRelationshipType(T), p.OGo.PENDING_OUTGOING, null !== (E = I.body) && void 0 !== E ? E : '';
        case u.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let L = I.guild_scheduled_event_id,
                D = null != L ? a.ZP.getGuildScheduledEvent(L) : null,
                M = null == D ? void 0 : D.name,
                W = null === (j = o.Z.getGuild(null == D ? void 0 : D.guild_id)) || void 0 === j ? void 0 : j.name,
                F = (0, a.Z2)(null != D ? D : void 0);
            return (0, c.Ew)(W) || (0, c.Ew)(M) || !F
                ? null !== (N = I.body) && void 0 !== N
                    ? N
                    : ''
                : m.NW.format(m.t.AyvfXV, {
                      event_name: M,
                      guild_name: W
                  });
        case u.O7.INCOMING_FRIEND_REQUESTS:
            return f({
                username: P,
                applicationId: A,
                renderApplication: S,
                withApplication: m.t['9Dgf1N'],
                withDefault: m.t.uIomX1
            });
        case u.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return f({
                username: P,
                applicationId: A,
                renderApplication: S,
                withApplication: m.t.nnC1q6,
                withDefault: m.t['5Uzkdn']
            });
        case u.DY.FRIEND_REQUEST_ACCEPTED:
            return f({
                username: P,
                applicationId: A,
                renderApplication: S,
                withApplication: m.t.jXlYiI,
                withDefault: m.t.McYRBg
            });
        case u.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                i()(null != A, 'Expected application id for '.concat(I.type)),
                m.NW.format(m.t['BB/0vr'], {
                    username: P,
                    applicationName: () => S(A)
                })
            );
        case u.O7.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                i()(null != A, 'Expected application id for '.concat(I.type)),
                m.NW.format(m.t['7cqOLC'], {
                    username: P,
                    applicationName: () => S(A)
                })
            );
        case u.DY.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == A) return I.body;
            return m.NW.format(m.t.Wi64vL, {
                username: P,
                applicationName: () => S(A)
            });
    }
    return null !== (C = I.body) && void 0 !== C ? C : '';
}
