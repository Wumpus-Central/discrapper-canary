n.d(t, { Z: () => p });
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
    let { username: t, applicationId: n, renderApplication: i, disambiguateGameRelationships: l, withApplicationAndDisambiguation: a, withDisambiguation: r, withApplication: s, withDefault: o } = e;
    return l && null != n
        ? _.intl.format(a, {
              username: t,
              applicationName: () => i(n)
          })
        : l
          ? _.intl.format(r, { username: t })
          : null != n
            ? _.intl.format(s, {
                  username: t,
                  applicationName: () => i(n)
              })
            : _.intl.format(o, { username: t });
}
function p(e) {
    var t, n, i, p, g, f, x, C, E, v, I, N, S, T, b;
    let { item: A, renderApplication: j, disambiguateGameRelationships: y } = e,
        Z = null !== (i = null === (t = A.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : m.lds,
        R = d.ZP.getName(o.default.getUser(null === (n = A.other_user) || void 0 === n ? void 0 : n.id)),
        L = A.applicationId;
    switch (A.type) {
        case u.O7.FRIEND_REQUESTS_GROUPED:
            let P = d.ZP.getName(o.default.getUser(null === (g = A.other_users) || void 0 === g ? void 0 : null === (p = g[0]) || void 0 === p ? void 0 : p.id)),
                k = d.ZP.getName(o.default.getUser(null === (x = A.other_users) || void 0 === x ? void 0 : null === (f = x[1]) || void 0 === f ? void 0 : f.id)),
                M = Math.max((null !== (E = null === (C = A.other_users) || void 0 === C ? void 0 : C.length) && void 0 !== E ? E : 0) - 2, 0);
            return _.intl.format(_.t.g5xyIC, {
                user: P,
                user2: k,
                count: M
            });
        case u.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let O = null !== (I = null === (v = A.local_id) || void 0 === v ? void 0 : v.split('_').pop()) && void 0 !== I ? I : 'unknown';
            return 'Update to build '.concat(O, ' available!');
        case u.DY.FRIEND_SUGGESTION_CREATED:
            return s.Z.getRelationshipType(Z), m.OGo.PENDING_OUTGOING, null !== (N = A.body) && void 0 !== N ? N : '';
        case u.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let D = A.guild_scheduled_event_id,
                w = null != D ? a.ZP.getGuildScheduledEvent(D) : null,
                F = null == w ? void 0 : w.name,
                U = null === (S = r.Z.getGuild(null == w ? void 0 : w.guild_id)) || void 0 === S ? void 0 : S.name,
                B = (0, a.Z2)(null != w ? w : void 0);
            return (0, c.Ew)(U) || (0, c.Ew)(F) || !B
                ? null !== (T = A.body) && void 0 !== T
                    ? T
                    : ''
                : _.intl.format(_.t.AyvfXV, {
                      event_name: F,
                      guild_name: U
                  });
        case u.O7.INCOMING_FRIEND_REQUESTS:
            return h({
                username: R,
                applicationId: L,
                renderApplication: j,
                disambiguateGameRelationships: y,
                withApplicationAndDisambiguation: _.t.Yzf3Oz,
                withApplication: _.t['9Dgf1N'],
                withDisambiguation: _.t.I6UV2N,
                withDefault: _.t.uIomX1
            });
        case u.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return h({
                username: R,
                applicationId: L,
                renderApplication: j,
                disambiguateGameRelationships: y,
                withApplicationAndDisambiguation: _.t.pXd0yc,
                withApplication: _.t.nnC1q6,
                withDisambiguation: _.t['Iv4E6+'],
                withDefault: _.t['5Uzkdn']
            });
        case u.DY.FRIEND_REQUEST_ACCEPTED:
            return h({
                username: R,
                applicationId: L,
                renderApplication: j,
                disambiguateGameRelationships: y,
                withApplicationAndDisambiguation: _.t['nc+g/P'],
                withApplication: _.t.jXlYiI,
                withDisambiguation: _.t.T5gdaG,
                withDefault: _.t.McYRBg
            });
        case u.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                l()(null != L, 'Expected application id for '.concat(A.type)),
                _.intl.format(_.t['BB/0vr'], {
                    username: R,
                    applicationName: () => j(L)
                })
            );
        case u.O7.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                l()(null != L, 'Expected application id for '.concat(A.type)),
                _.intl.format(_.t['7cqOLC'], {
                    username: R,
                    applicationName: () => j(L)
                })
            );
        case u.DY.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == L) return A.body;
            return _.intl.format(_.t.Wi64vL, {
                username: R,
                applicationName: () => j(L)
            });
    }
    return null !== (b = A.body) && void 0 !== b ? b : '';
}
