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
    f = n(981631),
    h = n(388032);
function p(e) {
    let { username: t, applicationId: n, renderApplication: r, withApplication: i, withDefault: l } = e;
    return null != n
        ? h.intl.format(i, {
              username: t,
              applicationName: () => r(n),
          })
        : h.intl.format(l, { username: t });
}
function g(e) {
    var t, n, r, g, m, b, _, y, O, v, j, x, C, E, S;
    let { item: I, renderApplication: P } = e,
        N = null != (r = null == (t = I.other_user) ? void 0 : t.id) ? r : f.lds,
        Z = u.ZP.getName(s.default.getUser(null == (n = I.other_user) ? void 0 : n.id)),
        w = I.applicationId;
    switch (I.type) {
        case d.O7.FRIEND_REQUESTS_GROUPED:
            let T = u.ZP.getName(s.default.getUser(null == (m = I.other_users) || null == (g = m[0]) ? void 0 : g.id)),
                A = u.ZP.getName(s.default.getUser(null == (_ = I.other_users) || null == (b = _[1]) ? void 0 : b.id)),
                R = Math.max((null != (O = null == (y = I.other_users) ? void 0 : y.length) ? O : 0) - 2, 0);
            return h.intl.format(h.t.g5xyIC, {
                user: T,
                user2: A,
                count: R,
            });
        case d.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let D = null != (j = null == (v = I.local_id) ? void 0 : v.split("_").pop()) ? j : "unknown";
            return "Update to build ".concat(D, " available!");
        case d.DY.FRIEND_SUGGESTION_CREATED:
            return a.Z.getRelationshipType(N), f.OGo.PENDING_OUTGOING, null != (x = I.body) ? x : "";
        case d.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let M = I.guild_scheduled_event_id,
                L = null != M ? l.ZP.getGuildScheduledEvent(M) : null,
                k = null == L ? void 0 : L.name,
                G = null == (C = o.Z.getGuild(null == L ? void 0 : L.guild_id)) ? void 0 : C.name,
                U = (0, l.Z2)(null != L ? L : void 0);
            return (0, c.Ew)(G) || (0, c.Ew)(k) || !U
                ? null != (E = I.body)
                    ? E
                    : ""
                : h.intl.format(h.t.AyvfXR, {
                      event_name: k,
                      guild_name: G,
                  });
        case d.O7.INCOMING_FRIEND_REQUESTS:
            return p({
                username: Z,
                applicationId: w,
                renderApplication: P,
                withApplication: h.t["9Dgf1L"],
                withDefault: h.t.uIomXw,
            });
        case d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return p({
                username: Z,
                applicationId: w,
                renderApplication: P,
                withApplication: h.t.nnC1q9,
                withDefault: h.t["5Uzkdp"],
            });
        case d.DY.FRIEND_REQUEST_ACCEPTED:
            return p({
                username: Z,
                applicationId: w,
                renderApplication: P,
                withApplication: h.t.jXlYiF,
                withDefault: h.t.McYRBk,
            });
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                i()(null != w, "Expected application id for ".concat(I.type)),
                h.intl.format(h.t["BB/0vn"], {
                    username: Z,
                    applicationName: () => P(w),
                })
            );
        case d.O7.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                i()(null != w, "Expected application id for ".concat(I.type)),
                h.intl.format(h.t["7cqOLI"], {
                    username: Z,
                    applicationName: () => P(w),
                })
            );
        case d.DY.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == w) return I.body;
            return h.intl.format(h.t.Wi64vN, {
                username: Z,
                applicationName: () => P(w),
            });
    }
    return null != (S = I.body) ? S : "";
}
