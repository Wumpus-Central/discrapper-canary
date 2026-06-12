"use strict";
n.d(t, {
    $3: () => j,
    HJ: () => V,
    Ib: () => W,
    MJ: () => Y,
    TJ: () => k,
    aH: () =>
        function e(t) {
            let n,
                {
                    forceRoles: i,
                    context: r,
                    overwrites: s,
                    roles: a,
                    checkElevated: o = !0,
                    excludeGuildPermissions: l,
                } = t,
                u = R;
            if (r instanceof _.YB) {
                if (r.isScheduledForDeletion()) return N;
                if (_.Le.has(r.type)) {
                    let t = E.A.getChannel(r.parent_id);
                    return null == t
                        ? N
                        : k(
                              r,
                              e({
                                  forceRoles: i,
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
                (u = r.computeLurkerPermissionsAllowList() ?? u),
                    (s = null != s ? { ...r.permissionOverwrites, ...s } : r.permissionOverwrites);
                let t = r.getGuildId();
                n = null != t ? A.A.getGuild(t) : null;
            } else (s = s ?? {}), (n = r);
            if (null == n) return N;
            let c = {
                userId: y.dJq,
                nick: "",
                guildId: n.id,
                guildMemberAvatar: null,
                roles: S.default.keys(i),
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
                member: c,
                guild: n,
                overwrites: s,
                roles: a,
                checkElevated: o,
                excludeGuildPermissions: l,
                lurkerPermissionsMask: u,
            });
        },
    cc: () => x,
    li: () => B,
    qN: () => C,
    r: () => U,
    wO: () => F,
    wT: () => G,
    x3: () => N,
    xT: () => H,
    yC: () => L,
});
var i = n(735438),
    r = n.n(i),
    s = n(136722),
    a = n(155718),
    o = n(229527),
    l = n(316031),
    u = n(164956),
    c = n(857071),
    d = n(152007),
    _ = n(95701),
    h = n(260509),
    f = n(34457),
    p = n(495544),
    E = n(734057),
    m = n(696451),
    g = n(317525),
    A = n(71393),
    I = n(287809),
    T = n(7864),
    S = n(935208),
    y = n(652215);
let N = s.iu(0),
    v = s.kg(...r().values(y.xBc)),
    C = s.kg(
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
    R = s.kg(y.xBc.VIEW_CHANNEL, y.xBc.READ_MESSAGE_HISTORY),
    O = s.kg(
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
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        i &&
            t.mfaLevel === y.EkJ.ELEVATED &&
            n === p.default.getId() &&
            !I.default.getCurrentUser()?.mfaEnabled &&
            (e = s.TF(e, y.Lti)),
        e
    );
}
function M(e, t, n, i) {
    let r = i[e];
    if ((null != r && ((n = s.TF(n, r.deny)), (n = s.WQ(n, r.allow))), null != t)) {
        let e = N,
            r = N;
        for (let n = 0; n < t.roles.length; n++) {
            let a = i[t.roles[n]];
            null != a && ((e = s.WQ(e, a.allow)), (r = s.WQ(r, a.deny)));
        }
        (n = s.TF(n, r)), (n = s.WQ(n, e));
        let a = i[t.userId];
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
        guild: i,
        overwrites: r,
        roles: a,
        checkElevated: o = !0,
        excludeGuildPermissions: l = !1,
        lurkerPermissionsMask: u = R,
    } = e;
    if (l) return M(i.id, n, N, r);
    let d = (a = null != a ? { ...g.A.getUnsafeMutableRoles(i.id), ...a } : g.A.getUnsafeMutableRoles(i.id))[
            (0, h.af)(i)
        ],
        _ = null != d ? d.permissions : C;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = a[n.roles[e]];
            void 0 !== t && (_ = s.WQ(_, t.permissions));
        }
    return (
        (_ = s.zy(_, y.xBc.ADMINISTRATOR) ? v : M(i.id, n, _, r)),
        (c.A.isLurking(i.id) || n?.isPending) && (_ = s.pb(_, u)),
        m.Ay.isCurrentUserGuest(i.id) && (_ = s.pb(_, O)),
        w(_, i, t, o)
    );
}
function x(e) {
    let t,
        { user: n, context: i, overwrites: r, roles: s, checkElevated: a = !0, excludeGuildPermissions: o = !1 } = e;
    if (null == n) return N;
    let l = "string" == typeof n ? n : n.id,
        c = R;
    if (i instanceof _.YB) {
        if (i.isScheduledForDeletion()) return N;
        if (_.Le.has(i.type)) {
            let e = E.A.getChannel(i.parent_id);
            if (null == e || e.isScheduledForDeletion()) return N;
            let t = l === I.default.getCurrentUser()?.id && d.A.hasJoined(i.id);
            return k(
                i,
                x({ user: n, context: e, overwrites: r, roles: s, checkElevated: a, excludeGuildPermissions: o }),
                t,
                m.Ay.isCurrentUserGuest(i.guild_id),
            );
        }
        (c = i.computeLurkerPermissionsAllowList() ?? c),
            (r = null != r ? { ...i.permissionOverwrites, ...r } : i.permissionOverwrites);
        let e = i.getGuildId();
        t = null != e ? A.A.getGuild(e) : null;
    } else (r = r ?? {}), (t = i);
    if (null == t) return N;
    if (!(l === I.default.getCurrentUser()?.id && u.A.isViewingRoles(t.id)) && (0, h.bM)(t, l)) return w(v, t, l, a);
    let f = m.Ay.getMember(t.id, l);
    return P({
        userId: l,
        member: f,
        guild: t,
        overwrites: r,
        roles: s,
        checkElevated: a,
        excludeGuildPermissions: o,
        lurkerPermissionsMask: c,
    });
}
function k(e, t, n, i) {
    return e.type !== y.rbe.PRIVATE_THREAD || n || i || s.zy(t, y.xBc.MANAGE_THREADS)
        ? s.zy(t, y.xBc.SEND_MESSAGES_IN_THREADS)
            ? e.isLockedThread() && !s.zy(t, y.xBc.MANAGE_THREADS)
                ? s.TF(t, y.xBc.SEND_MESSAGES)
                : s.kg(t, y.xBc.SEND_MESSAGES)
            : s.TF(t, y.xBc.SEND_MESSAGES)
        : N;
}
function U(e, t) {
    if (_.Le.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let i = { ...e.permissionOverwrites },
        r = { ...t.permissionOverwrites };
    return (
        null == i[n] && (i[n] = H(n)),
        null == r[n] && (r[n] = H(n)),
        Object.keys(i).length === Object.keys(r).length &&
            !Object.keys(i).some((e) => {
                let t = i[e],
                    n = r[e];
                return !(null != n && s.aI(n.deny, t.deny) && s.aI(n.allow, t.allow));
            })
    );
}
function G(e) {
    return r().some(g.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, f._m)(e, y.xBc.ADMINISTRATOR))
        ? void 0
        : (e.ownerId ?? void 0);
}
function F(e, t, n, i) {
    return !!(null != t && (0, h.bM)(e, t)) || (null != n && (null == i || (0, T.zA)(n, i)));
}
function V(e, t) {
    let n = m.Ay.getMember(e.id, t);
    if (null != n) return g.A.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}
function B(e, t) {
    return null == t.hoistRoleId ? null : g.A.getRole(e.id, t.hoistRoleId);
}
function H(e) {
    return { id: e, type: a.r2.ROLE, allow: N, deny: N };
}
function j(e) {
    let { permission: t, user: n, context: i, overwrites: r, roles: a, excludeGuildPermissions: o } = e;
    return s.zy(x({ user: n, context: i, overwrites: r, roles: a, checkElevated: !0, excludeGuildPermissions: o }), t);
}
function Y(e, t) {
    let n,
        i = {};
    if (t instanceof _.YB) {
        if (t.type === y.rbe.PRIVATE_THREAD || (_.Le.has(t.type) && null == (t = E.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? A.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let r = g.A.getEveryoneRole(n).permissions,
        a = i[n.id];
    return null != a && ((r = s.TF(r, a.deny)), (r = s.WQ(r, a.allow))), s.zy(r, e);
}
function W(e, t) {
    let n,
        i = {};
    if (t instanceof _.YB) {
        if (t.type === y.rbe.PRIVATE_THREAD || (_.Le.has(t.type) && null == (t = E.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? A.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let a = g.A.getEveryoneRole(n);
    return !(!(0, f._m)(a, e) || r().some(i, (t) => s.zy(t.deny, e)));
}
