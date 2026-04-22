"use strict";
n.d(t, { $u: () => S, IA: () => A, ID: () => y, Tk: () => g, Z$: () => N, rf: () => I });
var r = n(73153),
    i = n(58149),
    s = n(976860),
    a = n(734057),
    o = n(808728),
    l = n(696451),
    u = n(317525),
    d = n(576705),
    c = n(309010),
    _ = n(543465),
    f = n(954571),
    E = n(164956),
    h = n(209700),
    p = n(652215),
    m = n(746080);
function g(e, t) {
    f.default.track(p.HAw.VIEW_AS_ROLES_SELECTED, {
        num_roles: Object.keys(t.roles).length,
        ...(0, i.H$)(e),
        is_viewing_as_member: t.type === h._.NEW_MEMBER,
    }),
        r.h.dispatch({ type: "IMPERSONATE_UPDATE", guildId: e, data: t }),
        T(e);
}
function A(e, t) {
    let n = E.A.getData(e);
    null != n &&
        n.type === t.type &&
        (f.default.track(p.HAw.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(n.roles).length,
            ...(0, i.H$)(e),
            is_viewing_as_member: n.type === h._.NEW_MEMBER,
        }),
        r.h.dispatch({ type: "IMPERSONATE_UPDATE", guildId: e, data: { ...n, ...t } }),
        T(e));
}
function I(e) {
    r.h.dispatch({ type: "IMPERSONATE_STOP", guildId: e });
}
function T(e) {
    let t = c.A.getChannelId(e),
        n = a.A.getChannel(t);
    if (!(null != t && (0, m.jq)(t)) && !d.A.can(p.xBc.VIEW_CHANNEL, n)) {
        let t = o.Ay.getDefaultChannel(e);
        null != t && (0, s.pX)(p.BVt.CHANNEL(e, t.id));
    }
}
function S(e, t, n) {
    let r = new Set(_.Ay.getOptedInChannels(e));
    t.forEach((e) => r.add(e)), n.forEach((e) => r.delete(e)), A(e, { type: h._.NEW_MEMBER, optInChannels: r });
}
function y(e, t) {
    let n, r;
    (n = [...o.Ay.getSelectableChannelIds(e), ...o.Ay.getVocalChannelIds(e)]),
        (r = Array.from(t)),
        o.Ay.addConditionalChangeListener(() => {
            let t = l.Ay.getSelfMember(e);
            if (null == t) return !1;
            if (r.some((e) => !t.roles.includes(e))) return !0;
            let i = [...o.Ay.getSelectableChannelIds(e), ...o.Ay.getVocalChannelIds(e)].filter((e) => !n.includes(e));
            return i.length > 0 && S(e, i, []), !1;
        });
    let i = {};
    for (let n of u.A.getManyRoles(e, t)) i[n.id] = n;
    A(e, { type: h._.NEW_MEMBER, roles: i });
}
function N(e, t) {
    A(e, { type: h._.NEW_MEMBER, ...t });
}
