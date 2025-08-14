n.d(t, { Z: () => g }), n(35282);
var r = n(512722),
    i = n.n(r),
    l = n(924301),
    o = n(430824),
    a = n(699516),
    s = n(594174),
    c = n(624138),
    u = n(51144),
    d = n(497089),
    p = n(981631),
    f = n(388032);
function h(e) {
    let { username: t, applicationId: n, renderApplication: r, withApplication: i, withDefault: l } = e;
    return null != n
        ? f.intl.format(i, {
              username: t,
              applicationName: () => r(n),
          })
        : f.intl.format(l, { username: t });
}
function g(e) {
    var t, n, r, g, m, b, O, _, y, v, j, C, E, x, S;
    let { item: P, renderApplication: I } = e,
        N = null != (r = null == (t = P.other_user) ? void 0 : t.id) ? r : p.lds,
        w = u.ZP.getName(s.default.getUser(null == (n = P.other_user) ? void 0 : n.id)),
        Z = P.applicationId;
    switch (P.type) {
        case d.O7.FRIEND_REQUESTS_GROUPED:
            let T = u.ZP.getName(s.default.getUser(null == (m = P.other_users) || null == (g = m[0]) ? void 0 : g.id)),
                A = u.ZP.getName(s.default.getUser(null == (O = P.other_users) || null == (b = O[1]) ? void 0 : b.id)),
                R = Math.max((null != (y = null == (_ = P.other_users) ? void 0 : _.length) ? y : 0) - 2, 0);
            return f.intl.format(f.t.g5xyIC, {
                user: T,
                user2: A,
                count: R,
            });
        case d.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let D = null != (j = null == (v = P.local_id) ? void 0 : v.split("_").pop()) ? j : "unknown";
            return "Update to build ".concat(D, " available!");
        case d.DY.FRIEND_SUGGESTION_CREATED:
            return a.Z.getRelationshipType(N), p.OGo.PENDING_OUTGOING, null != (C = P.body) ? C : "";
        case d.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let L = P.guild_scheduled_event_id,
                M = null != L ? l.ZP.getGuildScheduledEvent(L) : null,
                k = null == M ? void 0 : M.name,
                U = null == (E = o.Z.getGuild(null == M ? void 0 : M.guild_id)) ? void 0 : E.name,
                G = (0, l.Z2)(null != M ? M : void 0);
            return (0, c.Ew)(U) || (0, c.Ew)(k) || !G
                ? null != (x = P.body)
                    ? x
                    : ""
                : f.intl.format(f.t.AyvfXV, {
                      event_name: k,
                      guild_name: U,
                  });
        case d.O7.INCOMING_FRIEND_REQUESTS:
            return h({
                username: w,
                applicationId: Z,
                renderApplication: I,
                withApplication: f.t["9Dgf1N"],
                withDefault: f.t.uIomX1,
            });
        case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return h({
                username: w,
                applicationId: Z,
                renderApplication: I,
                withApplication: f.t.nnC1q6,
                withDefault: f.t["5Uzkdn"],
            });
        case d.DY.FRIEND_REQUEST_ACCEPTED:
            return h({
                username: w,
                applicationId: Z,
                renderApplication: I,
                withApplication: f.t.jXlYiI,
                withDefault: f.t.McYRBg,
            });
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                i()(null != Z, "Expected application id for ".concat(P.type)),
                f.intl.format(f.t["BB/0vr"], {
                    username: w,
                    applicationName: () => I(Z),
                })
            );
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                i()(null != Z, "Expected application id for ".concat(P.type)),
                f.intl.format(f.t["7cqOLC"], {
                    username: w,
                    applicationName: () => I(Z),
                })
            );
        case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == Z) return P.body;
            return f.intl.format(f.t.Wi64vL, {
                username: w,
                applicationName: () => I(Z),
            });
    }
    return null != (S = P.body) ? S : "";
}
