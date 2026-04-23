"use strict";
n.d(t, { $u: () => S, IA: () => A, ID: () => N, Tk: () => p, Z$: () => C, rf: () => I });
var i = n(228366),
    r = n(58149),
    s = n(976860),
    a = n(734057),
    o = n(808728),
    l = n(696451),
    d = n(317525),
    _ = n(576705),
    u = n(309010),
    c = n(543465),
    E = n(954571),
    h = n(164956),
    m = n(209700),
    f = n(652215),
    g = n(746080);
function p(e, t) {
    E.default.track(f.HAw.VIEW_AS_ROLES_SELECTED, {
        num_roles: Object.keys(t.roles).length,
        ...(0, r.H$)(e),
        is_viewing_as_member: t.type === m._.NEW_MEMBER,
    }),
        i.h.dispatch({ type: "IMPERSONATE_UPDATE", guildId: e, data: t }),
        T(e);
}
function A(e, t) {
    let n = h.A.getData(e);
    null != n &&
        n.type === t.type &&
        (E.default.track(f.HAw.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(n.roles).length,
            ...(0, r.H$)(e),
            is_viewing_as_member: n.type === m._.NEW_MEMBER,
        }),
        i.h.dispatch({ type: "IMPERSONATE_UPDATE", guildId: e, data: { ...n, ...t } }),
        T(e));
}
function I(e) {
    i.h.dispatch({ type: "IMPERSONATE_STOP", guildId: e });
}
function T(e) {
    let t = u.A.getChannelId(e),
        n = a.A.getChannel(t);
    if (!(null != t && (0, g.jq)(t)) && !_.A.can(f.xBc.VIEW_CHANNEL, n)) {
        let t = o.Ay.getDefaultChannel(e);
        null != t && (0, s.pX)(f.BVt.CHANNEL(e, t.id));
    }
}
function S(e, t, n) {
    let i = new Set(c.Ay.getOptedInChannels(e));
    t.forEach((e) => i.add(e)), n.forEach((e) => i.delete(e)), A(e, { type: m._.NEW_MEMBER, optInChannels: i });
}
function N(e, t) {
    let n, i;
    (n = [...o.Ay.getSelectableChannelIds(e), ...o.Ay.getVocalChannelIds(e)]),
        (i = Array.from(t)),
        o.Ay.addConditionalChangeListener(() => {
            let t = l.Ay.getSelfMember(e);
            if (null == t) return !1;
            if (i.some((e) => !t.roles.includes(e))) return !0;
            let r = [...o.Ay.getSelectableChannelIds(e), ...o.Ay.getVocalChannelIds(e)].filter((e) => !n.includes(e));
            return r.length > 0 && S(e, r, []), !1;
        });
    let r = {};
    for (let n of d.A.getManyRoles(e, t)) r[n.id] = n;
    A(e, { type: m._.NEW_MEMBER, roles: r });
}
function C(e, t) {
    A(e, { type: m._.NEW_MEMBER, ...t });
}
