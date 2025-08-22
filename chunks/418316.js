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
    h = n(388032);
function f(e) {
    let { username: t, applicationId: n, renderApplication: r, withApplication: i, withDefault: l } = e;
    return null != n
        ? h.intl.format(i, {
              username: t,
              applicationName: () => r(n),
          })
        : h.intl.format(l, { username: t });
}
function g(e) {
    var t, n, r, g, m, b, O, y, _, j, v, x, C, E, S;
    let { item: P, renderApplication: I } = e,
        N = null != (r = null == (t = P.other_user) ? void 0 : t.id) ? r : p.lds,
        w = u.ZP.getName(s.default.getUser(null == (n = P.other_user) ? void 0 : n.id)),
        Z = P.applicationId;
    switch (P.type) {
        case d.O7.FRIEND_REQUESTS_GROUPED:
            let T = u.ZP.getName(s.default.getUser(null == (m = P.other_users) || null == (g = m[0]) ? void 0 : g.id)),
                A = u.ZP.getName(s.default.getUser(null == (O = P.other_users) || null == (b = O[1]) ? void 0 : b.id)),
                R = Math.max((null != (_ = null == (y = P.other_users) ? void 0 : y.length) ? _ : 0) - 2, 0);
            return h.intl.format(h.t.g5xyIC, {
                user: T,
                user2: A,
                count: R,
            });
        case d.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let D = null != (v = null == (j = P.local_id) ? void 0 : j.split("_").pop()) ? v : "unknown";
            return "Update to build ".concat(D, " available!");
        case d.DY.FRIEND_SUGGESTION_CREATED:
            return a.Z.getRelationshipType(N), p.OGo.PENDING_OUTGOING, null != (x = P.body) ? x : "";
        case d.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let M = P.guild_scheduled_event_id,
                L = null != M ? l.ZP.getGuildScheduledEvent(M) : null,
                k = null == L ? void 0 : L.name,
                U = null == (C = o.Z.getGuild(null == L ? void 0 : L.guild_id)) ? void 0 : C.name,
                G = (0, l.Z2)(null != L ? L : void 0);
            return (0, c.Ew)(U) || (0, c.Ew)(k) || !G
                ? null != (E = P.body)
                    ? E
                    : ""
                : h.intl.format(h.t.AyvfXV, {
                      event_name: k,
                      guild_name: U,
                  });
        case d.O7.INCOMING_FRIEND_REQUESTS:
            return f({
                username: w,
                applicationId: Z,
                renderApplication: I,
                withApplication: h.t["9Dgf1N"],
                withDefault: h.t.uIomX1,
            });
        case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return f({
                username: w,
                applicationId: Z,
                renderApplication: I,
                withApplication: h.t.nnC1q6,
                withDefault: h.t["5Uzkdn"],
            });
        case d.DY.FRIEND_REQUEST_ACCEPTED:
            return f({
                username: w,
                applicationId: Z,
                renderApplication: I,
                withApplication: h.t.jXlYiI,
                withDefault: h.t.McYRBg,
            });
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                i()(null != Z, "Expected application id for ".concat(P.type)),
                h.intl.format(h.t["BB/0vr"], {
                    username: w,
                    applicationName: () => I(Z),
                })
            );
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                i()(null != Z, "Expected application id for ".concat(P.type)),
                h.intl.format(h.t["7cqOLC"], {
                    username: w,
                    applicationName: () => I(Z),
                })
            );
        case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == Z) return P.body;
            return h.intl.format(h.t.Wi64vL, {
                username: w,
                applicationName: () => I(Z),
            });
    }
    return null != (S = P.body) ? S : "";
}
