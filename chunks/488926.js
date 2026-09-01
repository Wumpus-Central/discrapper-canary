"use strict";
n.d(t, {
    $3: () => Y,
    HJ: () => H,
    Ib: () => $,
    MJ: () => K,
    TJ: () => x,
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
                d = y;
            if (r instanceof E.YB) {
                if (r.isScheduledForDeletion()) return O;
                if (E.Le.has(r.type)) {
                    let t = f.A.getChannel(r.parent_id);
                    return null == t
                        ? O
                        : x(
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
                n = null != t ? m.A.getGuild(t) : null;
            } else (a = a ?? {}), (n = r);
            if (null == n) return O;
            let c = {
                userId: C.dJq,
                nick: "",
                guildId: n.id,
                guildMemberAvatar: null,
                roles: N.default.keys(i),
                colorString: null,
                colorStrings: null,
                hoistRoleId: null,
                premiumSince: null,
                isPending: !1,
                joinedAt: new Date().toISOString(),
                communicationDisabledUntil: null,
            };
            return w({
                userId: C.dJq,
                member: c,
                guild: n,
                overwrites: a,
                roles: s,
                checkElevated: l,
                excludeGuildPermissions: o,
                lurkerPermissionsMask: d,
            });
        },
    cc: () => G,
    li: () => j,
    qN: () => L,
    r: () => F,
    s9: () => k,
    wO: () => B,
    wT: () => V,
    x3: () => O,
    xT: () => W,
    yC: () => M,
});
var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(155718),
    l = n(547683),
    o = n(229527),
    d = n(316031),
    c = n(164956),
    u = n(857071),
    _ = n(152007),
    E = n(95701),
    A = n(260509),
    h = n(34457),
    I = n(280450),
    f = n(734057),
    p = n(696451),
    T = n(317525),
    m = n(71393),
    g = n(287809),
    S = n(7864),
    N = n(935208),
    C = n(652215);
let O = a.iu(0),
    R = a.kg(...r().values(C.xBc)),
    L = a.kg(
        C.xBc.CREATE_INSTANT_INVITE,
        C.xBc.CHANGE_NICKNAME,
        C.xBc.VIEW_CHANNEL,
        C.xBc.SEND_MESSAGES,
        C.xBc.EMBED_LINKS,
        C.xBc.ATTACH_FILES,
        C.xBc.READ_MESSAGE_HISTORY,
        C.xBc.MENTION_EVERYONE,
        C.xBc.USE_EXTERNAL_EMOJIS,
        C.xBc.USE_EXTERNAL_STICKERS,
        C.xBc.ADD_REACTIONS,
        C.xBc.CREATE_PUBLIC_THREADS,
        C.xBc.CREATE_PRIVATE_THREADS,
        C.xBc.SEND_MESSAGES_IN_THREADS,
        C.xBc.SEND_POLLS,
        C.xBc.CONNECT,
        C.xBc.SPEAK,
        C.xBc.USE_VAD,
        C.xBc.STREAM,
        C.xBc.USE_EMBEDDED_ACTIVITIES,
        C.xBc.USE_SOUNDBOARD,
        C.xBc.REQUEST_TO_SPEAK,
        C.xBc.USE_APPLICATION_COMMANDS,
        C.xBc.CREATE_GUILD_EXPRESSIONS,
        C.xBc.CREATE_EVENTS,
        C.xBc.USE_EXTERNAL_APPS,
    ),
    y = a.kg(C.xBc.VIEW_CHANNEL, C.xBc.READ_MESSAGE_HISTORY),
    D = a.kg(
        C.xBc.VIEW_CHANNEL,
        C.xBc.SEND_MESSAGES,
        C.xBc.CONNECT,
        C.xBc.SPEAK,
        C.xBc.STREAM,
        C.xBc.USE_EMBEDDED_ACTIVITIES,
        C.xBc.USE_EXTERNAL_APPS,
        C.xBc.USE_EXTERNAL_EMOJIS,
        C.xBc.USE_EXTERNAL_SOUNDS,
        C.xBc.USE_EXTERNAL_STICKERS,
        C.xBc.USE_SOUNDBOARD,
        C.xBc.USE_VAD,
        C.xBc.SEND_MESSAGES_IN_THREADS,
        C.xBc.EMBED_LINKS,
        C.xBc.ATTACH_FILES,
        C.xBc.ADD_REACTIONS,
    ),
    v = a.kg(C.xBc.VIEW_CHANNEL, C.xBc.READ_MESSAGE_HISTORY),
    b = a.kg(C.xBc.VIEW_CHANNEL, C.xBc.READ_MESSAGE_HISTORY, C.xBc.CHANGE_NICKNAME),
    M = a.kg(
        C.xBc.MANAGE_GUILD,
        C.xBc.MANAGE_ROLES,
        C.xBc.ADMINISTRATOR,
        C.xBc.BAN_MEMBERS,
        C.xBc.MANAGE_NICKNAMES,
        C.xBc.CREATE_GUILD_EXPRESSIONS,
        C.xBc.MANAGE_GUILD_EXPRESSIONS,
        C.xBc.MANAGE_WEBHOOKS,
        C.xBc.VIEW_AUDIT_LOG,
        C.xBc.VIEW_GUILD_ANALYTICS,
    );
function P(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        i &&
            t.mfaLevel === C.EkJ.ELEVATED &&
            n === I.default.getId() &&
            !g.default.getCurrentUser()?.mfaEnabled &&
            (e = a.TF(e, C.Lti)),
        e
    );
}
function U(e, t, n, i) {
    let r = i[e];
    if ((null != r && ((n = a.TF(n, r.deny)), (n = a.WQ(n, r.allow))), null != t)) {
        let e = O,
            r = O;
        for (let n = 0; n < t.roles.length; n++) {
            let s = i[t.roles[n]];
            null != s && ((e = a.WQ(e, s.allow)), (r = a.WQ(r, s.deny)));
        }
        (n = a.TF(n, r)), (n = a.WQ(n, e));
        let s = i[t.userId];
        null != s && ((n = a.TF(n, s.deny)), (n = a.WQ(n, s.allow)));
        let l = a.zy(n, C.xBc.ADMINISTRATOR);
        (0, o.TR)(t) && !l && (n = a.pb(n, b)), (0, d.Z)(t) && !l && (n = a.pb(n, v));
    }
    return n;
}
function w(e) {
    let {
        userId: t,
        member: n,
        guild: i,
        overwrites: r,
        roles: s,
        checkElevated: l = !0,
        excludeGuildPermissions: o = !1,
        lurkerPermissionsMask: d = y,
    } = e;
    if (o) return U(i.id, n, O, r);
    let c = (s = null != s ? { ...T.A.getUnsafeMutableRoles(i.id), ...s } : T.A.getUnsafeMutableRoles(i.id))[
            (0, A.af)(i)
        ],
        _ = null != c ? c.permissions : L;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = s[n.roles[e]];
            void 0 !== t && (_ = a.WQ(_, t.permissions));
        }
    return (
        (_ = a.zy(_, C.xBc.ADMINISTRATOR) ? R : U(i.id, n, _, r)),
        (u.A.isLurking(i.id) || n?.isPending) && (_ = a.pb(_, d)),
        p.Ay.isCurrentUserGuest(i.id) && (_ = a.pb(_, D)),
        P(_, i, t, l)
    );
}
function G(e) {
    let t,
        { user: n, context: i, overwrites: r, roles: a, checkElevated: s = !0, excludeGuildPermissions: l = !1 } = e;
    if (null == n) return O;
    let o = "string" == typeof n ? n : n.id,
        d = y;
    if (i instanceof E.YB) {
        if (i.isScheduledForDeletion()) return O;
        if (E.Le.has(i.type)) {
            let e = f.A.getChannel(i.parent_id);
            if (null == e || e.isScheduledForDeletion()) return O;
            let t = o === g.default.getCurrentUser()?.id && _.A.hasJoined(i.id);
            return x(
                i,
                G({ user: n, context: e, overwrites: r, roles: a, checkElevated: s, excludeGuildPermissions: l }),
                t,
                p.Ay.isCurrentUserGuest(i.guild_id),
            );
        }
        (d = i.computeLurkerPermissionsAllowList() ?? d),
            (r = null != r ? { ...i.permissionOverwrites, ...r } : i.permissionOverwrites);
        let e = i.getGuildId();
        t = null != e ? m.A.getGuild(e) : null;
    } else (r = r ?? {}), (t = i);
    if (null == t) return O;
    if (!(o === g.default.getCurrentUser()?.id && c.A.isViewingRoles(t.id)) && (0, A.bM)(t, o)) return P(R, t, o, s);
    let u = p.Ay.getMember(t.id, o);
    return w({
        userId: o,
        member: u,
        guild: t,
        overwrites: r,
        roles: a,
        checkElevated: s,
        excludeGuildPermissions: l,
        lurkerPermissionsMask: d,
    });
}
function x(e, t, n, i) {
    return e.type === C.rbe.MEDIA_THREAD
        ? a.kg(C.xBc.READ_MESSAGE_HISTORY, C.xBc.VIEW_CHANNEL)
        : e.type !== C.rbe.PRIVATE_THREAD || n || i || a.zy(t, C.xBc.MANAGE_THREADS)
          ? a.zy(t, C.xBc.SEND_MESSAGES_IN_THREADS)
              ? e.isLockedThread() && !a.zy(t, C.xBc.MANAGE_THREADS)
                  ? a.TF(t, C.xBc.SEND_MESSAGES)
                  : a.kg(t, C.xBc.SEND_MESSAGES)
              : a.TF(t, C.xBc.SEND_MESSAGES)
          : O;
}
function k(e, t) {
    let { guild_id: n } = e,
        i = { ...e.permissionOverwrites };
    if ((null != n && null == i[n] && (i[n] = W(n)), null != t)) {
        let e = i[t];
        i[t] = { id: t, type: s.r2.MEMBER, allow: a.WQ(e?.allow ?? O, l.yZ), deny: a.TF(e?.deny ?? O, l.yZ) };
    }
    return i;
}
function F(e, t, n) {
    if (E.Le.has(e.type)) return !0;
    let { guild_id: i } = e;
    if (null == t || null == i || i !== t.guild_id) return !1;
    let r = { ...e.permissionOverwrites },
        s = k(t, n);
    return (
        null == r[i] && (r[i] = W(i)),
        Object.keys(r).length === Object.keys(s).length &&
            !Object.keys(r).some((e) => {
                let t = r[e],
                    n = s[e];
                return !(null != n && a.aI(n.deny, t.deny) && a.aI(n.allow, t.allow));
            })
    );
}
function V(e) {
    return r().some(T.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, h._m)(e, C.xBc.ADMINISTRATOR))
        ? void 0
        : (e.ownerId ?? void 0);
}
function B(e, t, n, i) {
    return !!(null != t && (0, A.bM)(e, t)) || (null != n && (null == i || (0, S.zA)(n, i)));
}
function H(e, t) {
    let n = p.Ay.getMember(e.id, t);
    if (null != n) return T.A.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}
function j(e, t) {
    return null == t.hoistRoleId ? null : T.A.getRole(e.id, t.hoistRoleId);
}
function W(e) {
    return { id: e, type: s.r2.ROLE, allow: O, deny: O };
}
function Y(e) {
    let { permission: t, user: n, context: i, overwrites: r, roles: s, excludeGuildPermissions: l } = e;
    return a.zy(G({ user: n, context: i, overwrites: r, roles: s, checkElevated: !0, excludeGuildPermissions: l }), t);
}
function K(e, t) {
    let n,
        i = {};
    if (t instanceof E.YB) {
        if (t.type === C.rbe.PRIVATE_THREAD || (E.Le.has(t.type) && null == (t = f.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let r = T.A.getEveryoneRole(n).permissions,
        s = i[n.id];
    return null != s && ((r = a.TF(r, s.deny)), (r = a.WQ(r, s.allow))), a.zy(r, e);
}
function $(e, t) {
    let n,
        i = {};
    if (t instanceof E.YB) {
        if (t.type === C.rbe.PRIVATE_THREAD || (E.Le.has(t.type) && null == (t = f.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let s = T.A.getEveryoneRole(n);
    return !(!(0, h._m)(s, e) || r().some(i, (t) => a.zy(t.deny, e)));
}
