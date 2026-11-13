var i = n(73153),
    r = n(149468),
    a = n(976860),
    s = n(734057),
    l = n(808728),
    o = n(696451),
    d = n(317525),
    c = n(576705),
    u = n(309010),
    _ = n(543465),
    E = n(129230),
    A = n(164956),
    f = n(209700),
    h = n(652215),
    I = n(746080);
function p(e, t) {
    let n = A.A.getData(e);
    null != n &&
        n.type === t.type &&
        (E.default.track(h.HAw.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(n.roles).length,
            ...(0, r.H$)(e),
            is_viewing_as_member: n.type === f._.NEW_MEMBER,
        }),
        i.h.dispatch({ type: "IMPERSONATE_UPDATE", guildId: e, data: { ...n, ...t } }),
        m(e));
}
function m(e) {
    let t = u.Ay.getChannelId(e),
        n = s.A.getChannel(t);
    if (!(null != t && (0, I.jq)(t)) && !c.A.can(h.xBc.VIEW_CHANNEL, n)) {
        let t = l.A.getDefaultChannel(e);
        null != t && (0, a.pX)(h.BVt.CHANNEL(e, t.id));
    }
}
function g(e, t, n) {
    let i = new Set(_.Ay.getOptedInChannels(e));
    (t.forEach((e) => i.add(e)), n.forEach((e) => i.delete(e)), p(e, { type: f._.NEW_MEMBER, optInChannels: i }));
}
n.d(
    t,
    {},
    {
        $u: g,
        IA: p,
        ID: function (e, t) {
            let n, i;
            ((n = [...l.A.getSelectableChannelIds(e), ...l.A.getVocalChannelIds(e)]),
                (i = Array.from(t)),
                l.A.addConditionalChangeListener(() => {
                    let t = o.Ay.getSelfMember(e);
                    if (null == t) return !1;
                    if (i.some((e) => !t.roles.includes(e))) return !0;
                    let r = [...l.A.getSelectableChannelIds(e), ...l.A.getVocalChannelIds(e)].filter(
                        (e) => !n.includes(e),
                    );
                    return (r.length > 0 && g(e, r, []), !1);
                }));
            let r = {};
            for (let n of d.A.getManyRoles(e, t)) r[n.id] = n;
            p(e, { type: f._.NEW_MEMBER, roles: r });
        },
        Tk: function (e, t) {
            (E.default.track(h.HAw.VIEW_AS_ROLES_SELECTED, {
                num_roles: Object.keys(t.roles).length,
                ...(0, r.H$)(e),
                is_viewing_as_member: t.type === f._.NEW_MEMBER,
            }),
                i.h.dispatch({ type: "IMPERSONATE_UPDATE", guildId: e, data: t }),
                m(e));
        },
        Z$: function (e, t) {
            p(e, { type: f._.NEW_MEMBER, ...t });
        },
        rf: function (e) {
            i.h.dispatch({ type: "IMPERSONATE_STOP", guildId: e });
        },
    },
);
