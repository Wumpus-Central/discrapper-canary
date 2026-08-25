"use strict";
n.d(t, {
    $3: () => j,
    HJ: () => V,
    Ib: () => Y,
    MJ: () => W,
    TJ: () => G,
    aH: () =>
        function e(t) {
            let n,
                {
                    forceRoles: i,
                    context: r,
                    overwrites: a,
                    roles: s,
                    checkElevated: l = !0,
                    excludeGuildPermissions: o,
                } = t,
                d = L;
            if (r instanceof _.YB) {
                if (r.isScheduledForDeletion()) return C;
                if (_.Le.has(r.type)) {
                    let t = I.A.getChannel(r.parent_id);
                    return null == t
                        ? C
                        : G(
                              r,
                              e({
                                  forceRoles: i,
                                  context: t,
                                  overwrites: a,
                                  roles: s,
                                  checkElevated: l,
                                  excludeGuildPermissions: o,
                              }),
                              !1,
                              !1,
                          );
                }
                (d = r.computeLurkerPermissionsAllowList() ?? d),
                    (a = null != a ? { ...r.permissionOverwrites, ...a } : r.permissionOverwrites);
                let t = r.getGuildId();
                n = null != t ? T.A.getGuild(t) : null;
            } else (a = a ?? {}), (n = r);
            if (null == n) return C;
            let c = {
                userId: N.dJq,
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
            return U({
                userId: N.dJq,
                member: c,
                guild: n,
                overwrites: a,
                roles: s,
                checkElevated: l,
                excludeGuildPermissions: o,
                lurkerPermissionsMask: d,
            });
        },
    cc: () => w,
    li: () => B,
    qN: () => O,
    r: () => x,
    wO: () => F,
    wT: () => k,
    x3: () => C,
    xT: () => H,
    yC: () => b,
});
var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(155718),
    l = n(229527),
    o = n(316031),
    d = n(164956),
    c = n(857071),
    u = n(152007),
    _ = n(95701),
    E = n(260509),
    A = n(34457),
    h = n(280450),
    I = n(734057),
    f = n(696451),
    p = n(317525),
    T = n(71393),
    m = n(287809),
    g = n(7864),
    S = n(935208),
    N = n(652215);
let C = a.iu(0),
    R = a.kg(...r().values(N.xBc)),
    O = a.kg(
        N.xBc.CREATE_INSTANT_INVITE,
        N.xBc.CHANGE_NICKNAME,
        N.xBc.VIEW_CHANNEL,
        N.xBc.SEND_MESSAGES,
        N.xBc.EMBED_LINKS,
        N.xBc.ATTACH_FILES,
        N.xBc.READ_MESSAGE_HISTORY,
        N.xBc.MENTION_EVERYONE,
        N.xBc.USE_EXTERNAL_EMOJIS,
        N.xBc.USE_EXTERNAL_STICKERS,
        N.xBc.ADD_REACTIONS,
        N.xBc.CREATE_PUBLIC_THREADS,
        N.xBc.CREATE_PRIVATE_THREADS,
        N.xBc.SEND_MESSAGES_IN_THREADS,
        N.xBc.SEND_POLLS,
        N.xBc.CONNECT,
        N.xBc.SPEAK,
        N.xBc.USE_VAD,
        N.xBc.STREAM,
        N.xBc.USE_EMBEDDED_ACTIVITIES,
        N.xBc.USE_SOUNDBOARD,
        N.xBc.REQUEST_TO_SPEAK,
        N.xBc.USE_APPLICATION_COMMANDS,
        N.xBc.CREATE_GUILD_EXPRESSIONS,
        N.xBc.CREATE_EVENTS,
        N.xBc.USE_EXTERNAL_APPS,
    ),
    L = a.kg(N.xBc.VIEW_CHANNEL, N.xBc.READ_MESSAGE_HISTORY),
    y = a.kg(
        N.xBc.VIEW_CHANNEL,
        N.xBc.SEND_MESSAGES,
        N.xBc.CONNECT,
        N.xBc.SPEAK,
        N.xBc.STREAM,
        N.xBc.USE_EMBEDDED_ACTIVITIES,
        N.xBc.USE_EXTERNAL_APPS,
        N.xBc.USE_EXTERNAL_EMOJIS,
        N.xBc.USE_EXTERNAL_SOUNDS,
        N.xBc.USE_EXTERNAL_STICKERS,
        N.xBc.USE_SOUNDBOARD,
        N.xBc.USE_VAD,
        N.xBc.SEND_MESSAGES_IN_THREADS,
        N.xBc.EMBED_LINKS,
        N.xBc.ATTACH_FILES,
        N.xBc.ADD_REACTIONS,
    ),
    D = a.kg(N.xBc.VIEW_CHANNEL, N.xBc.READ_MESSAGE_HISTORY),
    v = a.kg(N.xBc.VIEW_CHANNEL, N.xBc.READ_MESSAGE_HISTORY, N.xBc.CHANGE_NICKNAME),
    b = a.kg(
        N.xBc.MANAGE_GUILD,
        N.xBc.MANAGE_ROLES,
        N.xBc.ADMINISTRATOR,
        N.xBc.BAN_MEMBERS,
        N.xBc.MANAGE_NICKNAMES,
        N.xBc.CREATE_GUILD_EXPRESSIONS,
        N.xBc.MANAGE_GUILD_EXPRESSIONS,
        N.xBc.MANAGE_WEBHOOKS,
        N.xBc.VIEW_AUDIT_LOG,
        N.xBc.VIEW_GUILD_ANALYTICS,
    );
function M(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        i &&
            t.mfaLevel === N.EkJ.ELEVATED &&
            n === h.default.getId() &&
            !m.default.getCurrentUser()?.mfaEnabled &&
            (e = a.TF(e, N.Lti)),
        e
    );
}
function P(e, t, n, i) {
    let r = i[e];
    if ((null != r && ((n = a.TF(n, r.deny)), (n = a.WQ(n, r.allow))), null != t)) {
        let e = C,
            r = C;
        for (let n = 0; n < t.roles.length; n++) {
            let s = i[t.roles[n]];
            null != s && ((e = a.WQ(e, s.allow)), (r = a.WQ(r, s.deny)));
        }
        (n = a.TF(n, r)), (n = a.WQ(n, e));
        let s = i[t.userId];
        null != s && ((n = a.TF(n, s.deny)), (n = a.WQ(n, s.allow)));
        let d = a.zy(n, N.xBc.ADMINISTRATOR);
        (0, l.TR)(t) && !d && (n = a.pb(n, v)), (0, o.Z)(t) && !d && (n = a.pb(n, D));
    }
    return n;
}
function U(e) {
    let {
        userId: t,
        member: n,
        guild: i,
        overwrites: r,
        roles: s,
        checkElevated: l = !0,
        excludeGuildPermissions: o = !1,
        lurkerPermissionsMask: d = L,
    } = e;
    if (o) return P(i.id, n, C, r);
    let u = (s = null != s ? { ...p.A.getUnsafeMutableRoles(i.id), ...s } : p.A.getUnsafeMutableRoles(i.id))[
            (0, E.af)(i)
        ],
        _ = null != u ? u.permissions : O;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = s[n.roles[e]];
            void 0 !== t && (_ = a.WQ(_, t.permissions));
        }
    return (
        (_ = a.zy(_, N.xBc.ADMINISTRATOR) ? R : P(i.id, n, _, r)),
        (c.A.isLurking(i.id) || n?.isPending) && (_ = a.pb(_, d)),
        f.Ay.isCurrentUserGuest(i.id) && (_ = a.pb(_, y)),
        M(_, i, t, l)
    );
}
function w(e) {
    let t,
        { user: n, context: i, overwrites: r, roles: a, checkElevated: s = !0, excludeGuildPermissions: l = !1 } = e;
    if (null == n) return C;
    let o = "string" == typeof n ? n : n.id,
        c = L;
    if (i instanceof _.YB) {
        if (i.isScheduledForDeletion()) return C;
        if (_.Le.has(i.type)) {
            let e = I.A.getChannel(i.parent_id);
            if (null == e || e.isScheduledForDeletion()) return C;
            let t = o === m.default.getCurrentUser()?.id && u.A.hasJoined(i.id);
            return G(
                i,
                w({ user: n, context: e, overwrites: r, roles: a, checkElevated: s, excludeGuildPermissions: l }),
                t,
                f.Ay.isCurrentUserGuest(i.guild_id),
            );
        }
        (c = i.computeLurkerPermissionsAllowList() ?? c),
            (r = null != r ? { ...i.permissionOverwrites, ...r } : i.permissionOverwrites);
        let e = i.getGuildId();
        t = null != e ? T.A.getGuild(e) : null;
    } else (r = r ?? {}), (t = i);
    if (null == t) return C;
    if (!(o === m.default.getCurrentUser()?.id && d.A.isViewingRoles(t.id)) && (0, E.bM)(t, o)) return M(R, t, o, s);
    let A = f.Ay.getMember(t.id, o);
    return U({
        userId: o,
        member: A,
        guild: t,
        overwrites: r,
        roles: a,
        checkElevated: s,
        excludeGuildPermissions: l,
        lurkerPermissionsMask: c,
    });
}
function G(e, t, n, i) {
    return e.type === N.rbe.MEDIA_THREAD
        ? a.kg(N.xBc.READ_MESSAGE_HISTORY, N.xBc.VIEW_CHANNEL)
        : e.type !== N.rbe.PRIVATE_THREAD || n || i || a.zy(t, N.xBc.MANAGE_THREADS)
          ? a.zy(t, N.xBc.SEND_MESSAGES_IN_THREADS)
              ? e.isLockedThread() && !a.zy(t, N.xBc.MANAGE_THREADS)
                  ? a.TF(t, N.xBc.SEND_MESSAGES)
                  : a.kg(t, N.xBc.SEND_MESSAGES)
              : a.TF(t, N.xBc.SEND_MESSAGES)
          : C;
}
function x(e, t) {
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
                return !(null != n && a.aI(n.deny, t.deny) && a.aI(n.allow, t.allow));
            })
    );
}
function k(e) {
    return r().some(p.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, A._m)(e, N.xBc.ADMINISTRATOR))
        ? void 0
        : (e.ownerId ?? void 0);
}
function F(e, t, n, i) {
    return !!(null != t && (0, E.bM)(e, t)) || (null != n && (null == i || (0, g.zA)(n, i)));
}
function V(e, t) {
    let n = f.Ay.getMember(e.id, t);
    if (null != n) return p.A.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}
function B(e, t) {
    return null == t.hoistRoleId ? null : p.A.getRole(e.id, t.hoistRoleId);
}
function H(e) {
    return { id: e, type: s.r2.ROLE, allow: C, deny: C };
}
function j(e) {
    let { permission: t, user: n, context: i, overwrites: r, roles: s, excludeGuildPermissions: l } = e;
    return a.zy(w({ user: n, context: i, overwrites: r, roles: s, checkElevated: !0, excludeGuildPermissions: l }), t);
}
function W(e, t) {
    let n,
        i = {};
    if (t instanceof _.YB) {
        if (t.type === N.rbe.PRIVATE_THREAD || (_.Le.has(t.type) && null == (t = I.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? T.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let r = p.A.getEveryoneRole(n).permissions,
        s = i[n.id];
    return null != s && ((r = a.TF(r, s.deny)), (r = a.WQ(r, s.allow))), a.zy(r, e);
}
function Y(e, t) {
    let n,
        i = {};
    if (t instanceof _.YB) {
        if (t.type === N.rbe.PRIVATE_THREAD || (_.Le.has(t.type) && null == (t = I.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? T.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let s = p.A.getEveryoneRole(n);
    return !(!(0, A._m)(s, e) || r().some(i, (t) => a.zy(t.deny, e)));
}
