n.d(t, { Z: () => g }), n(35282);
var r = n(512722),
    i = n.n(r),
    l = n(924301),
    o = n(430824),
    s = n(699516),
    a = n(594174),
    c = n(624138),
    u = n(51144),
    d = n(497089),
    h = n(981631),
    p = n(388032);
function f(e) {
    let { username: t, applicationId: n, renderApplication: r, withApplication: i, withDefault: l } = e;
    return null != n
        ? p.intl.format(i, {
              username: t,
              applicationName: () => r(n)
          })
        : p.intl.format(l, { username: t });
}
function g(e) {
    var t, n, r, g, m, b, _, O, y, v, C, j, E, S, x;
    let { item: I, renderApplication: P } = e,
        N = null != (r = null == (t = I.other_user) ? void 0 : t.id) ? r : h.lds,
        w = u.ZP.getName(a.default.getUser(null == (n = I.other_user) ? void 0 : n.id)),
        Z = I.applicationId;
    switch (I.type) {
        case d.O7.FRIEND_REQUESTS_GROUPED:
            let T = u.ZP.getName(a.default.getUser(null == (m = I.other_users) || null == (g = m[0]) ? void 0 : g.id)),
                A = u.ZP.getName(a.default.getUser(null == (_ = I.other_users) || null == (b = _[1]) ? void 0 : b.id)),
                R = Math.max((null != (y = null == (O = I.other_users) ? void 0 : O.length) ? y : 0) - 2, 0);
            return p.intl.format(p.t.g5xyIC, {
                user: T,
                user2: A,
                count: R
            });
        case d.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let D = null != (C = null == (v = I.local_id) ? void 0 : v.split('_').pop()) ? C : 'unknown';
            return 'Update to build '.concat(D, ' available!');
        case d.DY.FRIEND_SUGGESTION_CREATED:
            return s.Z.getRelationshipType(N), h.OGo.PENDING_OUTGOING, null != (j = I.body) ? j : '';
        case d.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let L = I.guild_scheduled_event_id,
                M = null != L ? l.ZP.getGuildScheduledEvent(L) : null,
                k = null == M ? void 0 : M.name,
                U = null == (E = o.Z.getGuild(null == M ? void 0 : M.guild_id)) ? void 0 : E.name,
                G = (0, l.Z2)(null != M ? M : void 0);
            return (0, c.Ew)(U) || (0, c.Ew)(k) || !G
                ? null != (S = I.body)
                    ? S
                    : ''
                : p.intl.format(p.t.AyvfXV, {
                      event_name: k,
                      guild_name: U
                  });
        case d.O7.INCOMING_FRIEND_REQUESTS:
            return f({
                username: w,
                applicationId: Z,
                renderApplication: P,
                withApplication: p.t['9Dgf1N'],
                withDefault: p.t.uIomX1
            });
        case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return f({
                username: w,
                applicationId: Z,
                renderApplication: P,
                withApplication: p.t.nnC1q6,
                withDefault: p.t['5Uzkdn']
            });
        case d.DY.FRIEND_REQUEST_ACCEPTED:
            return f({
                username: w,
                applicationId: Z,
                renderApplication: P,
                withApplication: p.t.jXlYiI,
                withDefault: p.t.McYRBg
            });
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                i()(null != Z, 'Expected application id for '.concat(I.type)),
                p.intl.format(p.t['BB/0vr'], {
                    username: w,
                    applicationName: () => P(Z)
                })
            );
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                i()(null != Z, 'Expected application id for '.concat(I.type)),
                p.intl.format(p.t['7cqOLC'], {
                    username: w,
                    applicationName: () => P(Z)
                })
            );
        case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == Z) return I.body;
            return p.intl.format(p.t.Wi64vL, {
                username: w,
                applicationName: () => P(Z)
            });
    }
    return null != (x = I.body) ? x : '';
}
