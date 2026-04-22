"use strict";
n.d(t, {
    $3: () => Y,
    HJ: () => F,
    Ib: () => j,
    MJ: () => W,
    TJ: () => k,
    aH: () =>
        function e(t) {
            let n,
                {
                    forceRoles: r,
                    context: i,
                    overwrites: s,
                    roles: a,
                    checkElevated: o = !0,
                    excludeGuildPermissions: l,
                } = t,
                u = v;
            if (i instanceof _.YB) {
                if (i.isScheduledForDeletion()) return N;
                if (_.Le.has(i.type)) {
                    let t = p.A.getChannel(i.parent_id);
                    return null == t
                        ? N
                        : k(
                              i,
                              e({
                                  forceRoles: r,
                                  context: t,
                                  overwrites: s,
                                  roles: a,
                                  checkElevated: o,
                                  excludeGuildPermissions: l,
                              }),
                              !1,
                              !1,
                          );
                }
                (u = i.computeLurkerPermissionsAllowList() ?? u),
                    (s = null != s ? { ...i.permissionOverwrites, ...s } : i.permissionOverwrites);
                let t = i.getGuildId();
                n = null != t ? A.A.getGuild(t) : null;
            } else (s = s ?? {}), (n = i);
            if (null == n) return N;
            let d = {
                userId: y.dJq,
                nick: "",
                guildId: n.id,
                guildMemberAvatar: null,
                roles: S.default.keys(r),
                colorString: null,
                colorStrings: null,
                hoistRoleId: null,
                premiumSince: null,
                isPending: !1,
                joinedAt: new Date().toISOString(),
                communicationDisabledUntil: null,
            };
            return P({
                userId: y.dJq,
                member: d,
                guild: n,
                overwrites: s,
                roles: a,
                checkElevated: o,
                excludeGuildPermissions: l,
                lurkerPermissionsMask: u,
            });
        },
    cc: () => U,
    li: () => B,
    qN: () => R,
    r: () => x,
    wO: () => V,
    wT: () => G,
    x3: () => N,
    xT: () => H,
    yC: () => L,
});
var r = n(735438),
    i = n.n(r),
    s = n(136722),
    a = n(155718),
    o = n(229527),
    l = n(316031),
    u = n(164956),
    d = n(857071),
    c = n(152007),
    _ = n(95701),
    f = n(260509),
    E = n(34457),
    h = n(961350),
    p = n(734057),
    m = n(696451),
    g = n(317525),
    A = n(71393),
    I = n(287809),
    T = n(7864),
    S = n(661191),
    y = n(652215);
let N = s.iu(0),
    O = s.kg(...i().values(y.xBc)),
    R = s.kg(
        y.xBc.CREATE_INSTANT_INVITE,
        y.xBc.CHANGE_NICKNAME,
        y.xBc.VIEW_CHANNEL,
        y.xBc.SEND_MESSAGES,
        y.xBc.EMBED_LINKS,
        y.xBc.ATTACH_FILES,
        y.xBc.READ_MESSAGE_HISTORY,
        y.xBc.MENTION_EVERYONE,
        y.xBc.USE_EXTERNAL_EMOJIS,
        y.xBc.USE_EXTERNAL_STICKERS,
        y.xBc.ADD_REACTIONS,
        y.xBc.CREATE_PUBLIC_THREADS,
        y.xBc.CREATE_PRIVATE_THREADS,
        y.xBc.SEND_MESSAGES_IN_THREADS,
        y.xBc.SEND_POLLS,
        y.xBc.CONNECT,
        y.xBc.SPEAK,
        y.xBc.USE_VAD,
        y.xBc.STREAM,
        y.xBc.USE_EMBEDDED_ACTIVITIES,
        y.xBc.USE_SOUNDBOARD,
        y.xBc.REQUEST_TO_SPEAK,
        y.xBc.USE_APPLICATION_COMMANDS,
        y.xBc.CREATE_GUILD_EXPRESSIONS,
        y.xBc.CREATE_EVENTS,
        y.xBc.USE_EXTERNAL_APPS,
    ),
    v = s.kg(y.xBc.VIEW_CHANNEL, y.xBc.READ_MESSAGE_HISTORY),
    C = s.kg(
        y.xBc.VIEW_CHANNEL,
        y.xBc.SEND_MESSAGES,
        y.xBc.CONNECT,
        y.xBc.SPEAK,
        y.xBc.STREAM,
        y.xBc.USE_EMBEDDED_ACTIVITIES,
        y.xBc.USE_EXTERNAL_APPS,
        y.xBc.USE_EXTERNAL_EMOJIS,
        y.xBc.USE_EXTERNAL_SOUNDS,
        y.xBc.USE_EXTERNAL_STICKERS,
        y.xBc.USE_SOUNDBOARD,
        y.xBc.USE_VAD,
        y.xBc.SEND_MESSAGES_IN_THREADS,
        y.xBc.EMBED_LINKS,
        y.xBc.ATTACH_FILES,
        y.xBc.ADD_REACTIONS,
    ),
    b = s.kg(y.xBc.VIEW_CHANNEL, y.xBc.READ_MESSAGE_HISTORY),
    D = s.kg(y.xBc.VIEW_CHANNEL, y.xBc.READ_MESSAGE_HISTORY, y.xBc.CHANGE_NICKNAME),
    L = s.kg(
        y.xBc.MANAGE_GUILD,
        y.xBc.MANAGE_ROLES,
        y.xBc.ADMINISTRATOR,
        y.xBc.BAN_MEMBERS,
        y.xBc.MANAGE_NICKNAMES,
        y.xBc.CREATE_GUILD_EXPRESSIONS,
        y.xBc.MANAGE_GUILD_EXPRESSIONS,
        y.xBc.MANAGE_WEBHOOKS,
        y.xBc.VIEW_AUDIT_LOG,
        y.xBc.VIEW_GUILD_ANALYTICS,
    );
function w(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        r &&
            t.mfaLevel === y.EkJ.ELEVATED &&
            n === h.default.getId() &&
            !I.default.getCurrentUser()?.mfaEnabled &&
            (e = s.TF(e, y.Lti)),
        e
    );
}
function M(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = s.TF(n, i.deny)), (n = s.WQ(n, i.allow))), null != t)) {
        let e = N,
            i = N;
        for (let n = 0; n < t.roles.length; n++) {
            let a = r[t.roles[n]];
            null != a && ((e = s.WQ(e, a.allow)), (i = s.WQ(i, a.deny)));
        }
        (n = s.TF(n, i)), (n = s.WQ(n, e));
        let a = r[t.userId];
        null != a && ((n = s.TF(n, a.deny)), (n = s.WQ(n, a.allow)));
        let u = s.zy(n, y.xBc.ADMINISTRATOR);
        (0, o.TR)(t) && !u && (n = s.pb(n, D)), (0, l.Z)(t) && !u && (n = s.pb(n, b));
    }
    return n;
}
function P(e) {
    let {
        userId: t,
        member: n,
        guild: r,
        overwrites: i,
        roles: a,
        checkElevated: o = !0,
        excludeGuildPermissions: l = !1,
        lurkerPermissionsMask: u = v,
    } = e;
    if (l) return M(r.id, n, N, i);
    let c = (a = null != a ? { ...g.A.getUnsafeMutableRoles(r.id), ...a } : g.A.getUnsafeMutableRoles(r.id))[
            (0, f.af)(r)
        ],
        _ = null != c ? c.permissions : R;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = a[n.roles[e]];
            void 0 !== t && (_ = s.WQ(_, t.permissions));
        }
    return (
        (_ = s.zy(_, y.xBc.ADMINISTRATOR) ? O : M(r.id, n, _, i)),
        (d.A.isLurking(r.id) || n?.isPending) && (_ = s.pb(_, u)),
        m.Ay.isCurrentUserGuest(r.id) && (_ = s.pb(_, C)),
        w(_, r, t, o)
    );
}
function U(e) {
    let t,
        { user: n, context: r, overwrites: i, roles: s, checkElevated: a = !0, excludeGuildPermissions: o = !1 } = e;
    if (null == n) return N;
    let l = "string" == typeof n ? n : n.id,
        d = v;
    if (r instanceof _.YB) {
        if (r.isScheduledForDeletion()) return N;
        if (_.Le.has(r.type)) {
            let e = p.A.getChannel(r.parent_id);
            if (null == e || e.isScheduledForDeletion()) return N;
            let t = l === I.default.getCurrentUser()?.id && c.A.hasJoined(r.id);
            return k(
                r,
                U({ user: n, context: e, overwrites: i, roles: s, checkElevated: a, excludeGuildPermissions: o }),
                t,
                m.Ay.isCurrentUserGuest(r.guild_id),
            );
        }
        (d = r.computeLurkerPermissionsAllowList() ?? d),
            (i = null != i ? { ...r.permissionOverwrites, ...i } : r.permissionOverwrites);
        let e = r.getGuildId();
        t = null != e ? A.A.getGuild(e) : null;
    } else (i = i ?? {}), (t = r);
    if (null == t) return N;
    if (!(l === I.default.getCurrentUser()?.id && u.A.isViewingRoles(t.id)) && (0, f.bM)(t, l)) return w(O, t, l, a);
    let E = m.Ay.getMember(t.id, l);
    return P({
        userId: l,
        member: E,
        guild: t,
        overwrites: i,
        roles: s,
        checkElevated: a,
        excludeGuildPermissions: o,
        lurkerPermissionsMask: d,
    });
}
function k(e, t, n, r) {
    return e.type !== y.rbe.PRIVATE_THREAD || n || r || s.zy(t, y.xBc.MANAGE_THREADS)
        ? s.zy(t, y.xBc.SEND_MESSAGES_IN_THREADS)
            ? e.isLockedThread() && !s.zy(t, y.xBc.MANAGE_THREADS)
                ? s.TF(t, y.xBc.SEND_MESSAGES)
                : s.kg(t, y.xBc.SEND_MESSAGES)
            : s.TF(t, y.xBc.SEND_MESSAGES)
        : N;
}
function x(e, t) {
    if (_.Le.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let r = { ...e.permissionOverwrites },
        i = { ...t.permissionOverwrites };
    return (
        null == r[n] && (r[n] = H(n)),
        null == i[n] && (i[n] = H(n)),
        Object.keys(r).length === Object.keys(i).length &&
            !Object.keys(r).some((e) => {
                let t = r[e],
                    n = i[e];
                return !(null != n && s.aI(n.deny, t.deny) && s.aI(n.allow, t.allow));
            })
    );
}
function G(e) {
    return i().some(g.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, E._m)(e, y.xBc.ADMINISTRATOR))
        ? void 0
        : (e.ownerId ?? void 0);
}
function V(e, t, n, r) {
    return !!(null != t && (0, f.bM)(e, t)) || (null != n && (null == r || (0, T.zA)(n, r)));
}
function F(e, t) {
    let n = m.Ay.getMember(e.id, t);
    if (null != n) return g.A.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}
function B(e, t) {
    return null == t.hoistRoleId ? null : g.A.getRole(e.id, t.hoistRoleId);
}
function H(e) {
    return { id: e, type: a.r2.ROLE, allow: N, deny: N };
}
function Y(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: a, excludeGuildPermissions: o } = e;
    return s.zy(U({ user: n, context: r, overwrites: i, roles: a, checkElevated: !0, excludeGuildPermissions: o }), t);
}
function W(e, t) {
    let n,
        r = {};
    if (t instanceof _.YB) {
        if (t.type === y.rbe.PRIVATE_THREAD || (_.Le.has(t.type) && null == (t = p.A.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? A.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = g.A.getEveryoneRole(n).permissions,
        a = r[n.id];
    return null != a && ((i = s.TF(i, a.deny)), (i = s.WQ(i, a.allow))), s.zy(i, e);
}
function j(e, t) {
    let n,
        r = {};
    if (t instanceof _.YB) {
        if (t.type === y.rbe.PRIVATE_THREAD || (_.Le.has(t.type) && null == (t = p.A.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? A.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let a = g.A.getEveryoneRole(n);
    return !(!(0, E._m)(a, e) || i().some(r, (t) => s.zy(t.deny, e)));
}
