"use strict";
n.d(t, { $u: () => S, IA: () => T, ID: () => N, Tk: () => p, Z$: () => C, rf: () => m });
var i = n(228366),
    r = n(95561),
    a = n(976860),
    s = n(734057),
    l = n(808728),
    o = n(696451),
    d = n(317525),
    c = n(576705),
    u = n(309010),
    _ = n(543465),
    E = n(174459),
    A = n(164956),
    h = n(209700),
    I = n(652215),
    f = n(746080);
function p(e, t) {
    E.default.track(I.HAw.VIEW_AS_ROLES_SELECTED, {
        num_roles: Object.keys(t.roles).length,
        ...(0, r.H$)(e),
        is_viewing_as_member: t.type === h._.NEW_MEMBER,
    }),
        i.h.dispatch({ type: "IMPERSONATE_UPDATE", guildId: e, data: t }),
        g(e);
}
function T(e, t) {
    let n = A.A.getData(e);
    null != n &&
        n.type === t.type &&
        (E.default.track(I.HAw.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(n.roles).length,
            ...(0, r.H$)(e),
            is_viewing_as_member: n.type === h._.NEW_MEMBER,
        }),
        i.h.dispatch({ type: "IMPERSONATE_UPDATE", guildId: e, data: { ...n, ...t } }),
        g(e));
}
function m(e) {
    i.h.dispatch({ type: "IMPERSONATE_STOP", guildId: e });
}
function g(e) {
    let t = u.Ay.getChannelId(e),
        n = s.A.getChannel(t);
    if (!(null != t && (0, f.jq)(t)) && !c.A.can(I.xBc.VIEW_CHANNEL, n)) {
        let t = l.Ay.getDefaultChannel(e);
        null != t && (0, a.pX)(I.BVt.CHANNEL(e, t.id));
    }
}
function S(e, t, n) {
    let i = new Set(_.Ay.getOptedInChannels(e));
    t.forEach((e) => i.add(e)), n.forEach((e) => i.delete(e)), T(e, { type: h._.NEW_MEMBER, optInChannels: i });
}
function N(e, t) {
    let n, i;
    (n = [...l.Ay.getSelectableChannelIds(e), ...l.Ay.getVocalChannelIds(e)]),
        (i = Array.from(t)),
        l.Ay.addConditionalChangeListener(() => {
            let t = o.Ay.getSelfMember(e);
            if (null == t) return !1;
            if (i.some((e) => !t.roles.includes(e))) return !0;
            let r = [...l.Ay.getSelectableChannelIds(e), ...l.Ay.getVocalChannelIds(e)].filter((e) => !n.includes(e));
            return r.length > 0 && S(e, r, []), !1;
        });
    let r = {};
    for (let n of d.A.getManyRoles(e, t)) r[n.id] = n;
    T(e, { type: h._.NEW_MEMBER, roles: r });
}
function C(e, t) {
    T(e, { type: h._.NEW_MEMBER, ...t });
}
