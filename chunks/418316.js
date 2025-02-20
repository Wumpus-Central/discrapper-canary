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
    let { username: t, applicationId: n, renderApplication: r, disambiguateGameRelationships: i, withApplicationAndDisambiguation: a, withDisambiguation: o, withApplication: l, withDefault: s } = e;
    return i && null != n
        ? m.NW.format(a, {
              username: t,
              applicationName: () => r(n)
          })
        : i
          ? m.NW.format(o, { username: t })
          : null != n
            ? m.NW.format(l, {
                  username: t,
                  applicationName: () => r(n)
              })
            : m.NW.format(s, { username: t });
}
function h(e) {
    var t, n, r, h, g, _, b, v, y, x, O, E, j, N, C;
    let { item: I, renderApplication: S, disambiguateGameRelationships: P } = e,
        T = null !== (r = null === (t = I.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : p.lds,
        A = d.ZP.getName(s.default.getUser(null === (n = I.other_user) || void 0 === n ? void 0 : n.id)),
        w = I.applicationId;
    switch (I.type) {
        case u.O7.FRIEND_REQUESTS_GROUPED:
            let Z = d.ZP.getName(s.default.getUser(null === (g = I.other_users) || void 0 === g ? void 0 : null === (h = g[0]) || void 0 === h ? void 0 : h.id)),
                k = d.ZP.getName(s.default.getUser(null === (b = I.other_users) || void 0 === b ? void 0 : null === (_ = b[1]) || void 0 === _ ? void 0 : _.id)),
                R = Math.max((null !== (y = null === (v = I.other_users) || void 0 === v ? void 0 : v.length) && void 0 !== y ? y : 0) - 2, 0);
            return m.NW.format(m.t.g5xyIC, {
                user: Z,
                user2: k,
                count: R
            });
        case u.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let L = null !== (O = null === (x = I.local_id) || void 0 === x ? void 0 : x.split('_').pop()) && void 0 !== O ? O : 'unknown';
            return 'Update to build '.concat(L, ' available!');
        case u.DY.FRIEND_SUGGESTION_CREATED:
            return l.Z.getRelationshipType(T), p.OGo.PENDING_OUTGOING, null !== (E = I.body) && void 0 !== E ? E : '';
        case u.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let D = I.guild_scheduled_event_id,
                M = null != D ? a.ZP.getGuildScheduledEvent(D) : null,
                W = null == M ? void 0 : M.name,
                F = null === (j = o.Z.getGuild(null == M ? void 0 : M.guild_id)) || void 0 === j ? void 0 : j.name,
                U = (0, a.Z2)(null != M ? M : void 0);
            return (0, c.Ew)(F) || (0, c.Ew)(W) || !U
                ? null !== (N = I.body) && void 0 !== N
                    ? N
                    : ''
                : m.NW.format(m.t.AyvfXV, {
                      event_name: W,
                      guild_name: F
                  });
        case u.O7.INCOMING_FRIEND_REQUESTS:
            return f({
                username: A,
                applicationId: w,
                renderApplication: S,
                disambiguateGameRelationships: P,
                withApplicationAndDisambiguation: m.t.Yzf3Oz,
                withApplication: m.t['9Dgf1N'],
                withDisambiguation: m.t.I6UV2N,
                withDefault: m.t.uIomX1
            });
        case u.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return f({
                username: A,
                applicationId: w,
                renderApplication: S,
                disambiguateGameRelationships: P,
                withApplicationAndDisambiguation: m.t.pXd0yc,
                withApplication: m.t.nnC1q6,
                withDisambiguation: m.t['Iv4E6+'],
                withDefault: m.t['5Uzkdn']
            });
        case u.DY.FRIEND_REQUEST_ACCEPTED:
            return f({
                username: A,
                applicationId: w,
                renderApplication: S,
                disambiguateGameRelationships: P,
                withApplicationAndDisambiguation: m.t['nc+g/P'],
                withApplication: m.t.jXlYiI,
                withDisambiguation: m.t.T5gdaG,
                withDefault: m.t.McYRBg
            });
        case u.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                i()(null != w, 'Expected application id for '.concat(I.type)),
                m.NW.format(m.t['BB/0vr'], {
                    username: A,
                    applicationName: () => S(w)
                })
            );
        case u.O7.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                i()(null != w, 'Expected application id for '.concat(I.type)),
                m.NW.format(m.t['7cqOLC'], {
                    username: A,
                    applicationName: () => S(w)
                })
            );
        case u.DY.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == w) return I.body;
            return m.NW.format(m.t.Wi64vL, {
                username: A,
                applicationName: () => S(w)
            });
    }
    return null !== (C = I.body) && void 0 !== C ? C : '';
}
