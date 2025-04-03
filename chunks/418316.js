n.d(t, { Z: () => h }), n(301563);
var r = n(512722),
    i = n.n(r),
    a = n(924301),
    l = n(430824),
    o = n(699516),
    s = n(594174),
    c = n(624138),
    u = n(51144),
    d = n(497089),
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
    var t, n, r, h, g, _, b, x, y, E, v, O, N, j, C;
    let { item: I, renderApplication: S } = e,
        T = null != (r = null == (t = I.other_user) ? void 0 : t.id) ? r : p.lds,
        P = u.ZP.getName(s.default.getUser(null == (n = I.other_user) ? void 0 : n.id)),
        A = I.applicationId;
    switch (I.type) {
        case d.O7.FRIEND_REQUESTS_GROUPED:
            let w = u.ZP.getName(s.default.getUser(null == (g = I.other_users) || null == (h = g[0]) ? void 0 : h.id)),
                Z = u.ZP.getName(s.default.getUser(null == (b = I.other_users) || null == (_ = b[1]) ? void 0 : _.id)),
                k = Math.max((null != (y = null == (x = I.other_users) ? void 0 : x.length) ? y : 0) - 2, 0);
            return m.NW.format(m.t.g5xyIC, {
                user: w,
                user2: Z,
                count: k
            });
        case d.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let R = null != (v = null == (E = I.local_id) ? void 0 : E.split('_').pop()) ? v : 'unknown';
            return 'Update to build '.concat(R, ' available!');
        case d.DY.FRIEND_SUGGESTION_CREATED:
            return o.Z.getRelationshipType(T), p.OGo.PENDING_OUTGOING, null != (O = I.body) ? O : '';
        case d.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let D = I.guild_scheduled_event_id,
                L = null != D ? a.ZP.getGuildScheduledEvent(D) : null,
                M = null == L ? void 0 : L.name,
                W = null == (N = l.Z.getGuild(null == L ? void 0 : L.guild_id)) ? void 0 : N.name,
                U = (0, a.Z2)(null != L ? L : void 0);
            return (0, c.Ew)(W) || (0, c.Ew)(M) || !U
                ? null != (j = I.body)
                    ? j
                    : ''
                : m.NW.format(m.t.AyvfXV, {
                      event_name: M,
                      guild_name: W
                  });
        case d.O7.INCOMING_FRIEND_REQUESTS:
            return f({
                username: P,
                applicationId: A,
                renderApplication: S,
                withApplication: m.t['9Dgf1N'],
                withDefault: m.t.uIomX1
            });
        case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return f({
                username: P,
                applicationId: A,
                renderApplication: S,
                withApplication: m.t.nnC1q6,
                withDefault: m.t['5Uzkdn']
            });
        case d.DY.FRIEND_REQUEST_ACCEPTED:
            return f({
                username: P,
                applicationId: A,
                renderApplication: S,
                withApplication: m.t.jXlYiI,
                withDefault: m.t.McYRBg
            });
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                i()(null != A, 'Expected application id for '.concat(I.type)),
                m.NW.format(m.t['BB/0vr'], {
                    username: P,
                    applicationName: () => S(A)
                })
            );
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                i()(null != A, 'Expected application id for '.concat(I.type)),
                m.NW.format(m.t['7cqOLC'], {
                    username: P,
                    applicationName: () => S(A)
                })
            );
        case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == A) return I.body;
            return m.NW.format(m.t.Wi64vL, {
                username: P,
                applicationName: () => S(A)
            });
    }
    return null != (C = I.body) ? C : '';
}
