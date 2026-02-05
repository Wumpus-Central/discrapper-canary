"use strict";
n.d(t, {
    $3: () => Y,
    HJ: () => B,
    Ib: () => K,
    MJ: () => W,
    TJ: () => U,
    aH: () => M,
    cc: () => k,
    li: () => j,
    qN: () => b,
    r: () => G,
    wO: () => F,
    wT: () => V,
    x3: () => v,
    xT: () => H,
    yC: () => L,
});
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    s = n(155718),
    o = n(229527),
    l = n(316031),
    u = n(164956),
    c = n(857071),
    d = n(152007),
    _ = n(95701),
    f = n(260509),
    p = n(34457),
    h = n(961350),
    m = n(734057),
    g = n(696451),
    E = n(317525),
    A = n(71393),
    I = n(287809),
    T = n(7864),
    y = n(661191),
    S = n(652215);
let v = a.iu(0),
    C = a.kg(...i().values(S.xBc)),
    b = a.kg(
        S.xBc.CREATE_INSTANT_INVITE,
        S.xBc.CHANGE_NICKNAME,
        S.xBc.VIEW_CHANNEL,
        S.xBc.SEND_MESSAGES,
        S.xBc.EMBED_LINKS,
        S.xBc.ATTACH_FILES,
        S.xBc.READ_MESSAGE_HISTORY,
        S.xBc.MENTION_EVERYONE,
        S.xBc.USE_EXTERNAL_EMOJIS,
        S.xBc.USE_EXTERNAL_STICKERS,
        S.xBc.ADD_REACTIONS,
        S.xBc.CREATE_PUBLIC_THREADS,
        S.xBc.CREATE_PRIVATE_THREADS,
        S.xBc.SEND_MESSAGES_IN_THREADS,
        S.xBc.SEND_POLLS,
        S.xBc.CONNECT,
        S.xBc.SPEAK,
        S.xBc.USE_VAD,
        S.xBc.STREAM,
        S.xBc.USE_EMBEDDED_ACTIVITIES,
        S.xBc.USE_SOUNDBOARD,
        S.xBc.REQUEST_TO_SPEAK,
        S.xBc.USE_APPLICATION_COMMANDS,
        S.xBc.CREATE_GUILD_EXPRESSIONS,
        S.xBc.CREATE_EVENTS,
        S.xBc.USE_EXTERNAL_APPS,
    ),
    N = a.kg(S.xBc.VIEW_CHANNEL, S.xBc.READ_MESSAGE_HISTORY),
    R = a.kg(
        S.xBc.VIEW_CHANNEL,
        S.xBc.SEND_MESSAGES,
        S.xBc.CONNECT,
        S.xBc.SPEAK,
        S.xBc.STREAM,
        S.xBc.USE_EMBEDDED_ACTIVITIES,
        S.xBc.USE_EXTERNAL_APPS,
        S.xBc.USE_EXTERNAL_EMOJIS,
        S.xBc.USE_EXTERNAL_SOUNDS,
        S.xBc.USE_EXTERNAL_STICKERS,
        S.xBc.USE_SOUNDBOARD,
        S.xBc.USE_VAD,
        S.xBc.SEND_MESSAGES_IN_THREADS,
        S.xBc.EMBED_LINKS,
        S.xBc.ATTACH_FILES,
        S.xBc.ADD_REACTIONS,
    ),
    O = a.kg(S.xBc.VIEW_CHANNEL, S.xBc.READ_MESSAGE_HISTORY),
    D = a.kg(S.xBc.VIEW_CHANNEL, S.xBc.READ_MESSAGE_HISTORY, S.xBc.CHANGE_NICKNAME),
    L = a.kg(
        S.xBc.MANAGE_GUILD,
        S.xBc.MANAGE_ROLES,
        S.xBc.ADMINISTRATOR,
        S.xBc.BAN_MEMBERS,
        S.xBc.MANAGE_NICKNAMES,
        S.xBc.CREATE_GUILD_EXPRESSIONS,
        S.xBc.MANAGE_GUILD_EXPRESSIONS,
        S.xBc.MANAGE_WEBHOOKS,
        S.xBc.VIEW_AUDIT_LOG,
    );
function w(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        r &&
            t.mfaLevel === S.EkJ.ELEVATED &&
            n === h.default.getId() &&
            !I.default.getCurrentUser()?.mfaEnabled &&
            (e = a.TF(e, S.Lti)),
        e
    );
}
function x(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = a.TF(n, i.deny)), (n = a.WQ(n, i.allow))), null != t)) {
        let e = v,
            i = v;
        for (let n = 0; n < t.roles.length; n++) {
            let s = r[t.roles[n]];
            null != s && ((e = a.WQ(e, s.allow)), (i = a.WQ(i, s.deny)));
        }
        (n = a.TF(n, i)), (n = a.WQ(n, e));
        let s = r[t.userId];
        null != s && ((n = a.TF(n, s.deny)), (n = a.WQ(n, s.allow)));
        let u = a.zy(n, S.xBc.ADMINISTRATOR);
        (0, o.TR)(t) && !u && (n = a.pb(n, D)), (0, l.Z)(t) && !u && (n = a.pb(n, O));
    }
    return n;
}
function P(e) {
    let {
        userId: t,
        member: n,
        guild: r,
        overwrites: i,
        roles: s,
        checkElevated: o = !0,
        excludeGuildPermissions: l = !1,
        lurkerPermissionsMask: u = N,
    } = e;
    if (l) return x(r.id, n, v, i);
    let d = (s = null != s ? { ...E.A.getUnsafeMutableRoles(r.id), ...s } : E.A.getUnsafeMutableRoles(r.id))[
            (0, f.af)(r)
        ],
        _ = null != d ? d.permissions : b;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = s[n.roles[e]];
            void 0 !== t && (_ = a.WQ(_, t.permissions));
        }
    return (
        (_ = a.zy(_, S.xBc.ADMINISTRATOR) ? C : x(r.id, n, _, i)),
        (c.A.isLurking(r.id) || n?.isPending) && (_ = a.pb(_, u)),
        g.Ay.isCurrentUserGuest(r.id) && (_ = a.pb(_, R)),
        w(_, r, t, o)
    );
}
function M(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: a, checkElevated: s = !0, excludeGuildPermissions: o } = e,
        l = N;
    if (r instanceof _.YB) {
        if (r.isScheduledForDeletion()) return v;
        if (_.Le.has(r.type)) {
            let e = m.A.getChannel(r.parent_id);
            return null == e
                ? v
                : U(
                      r,
                      M({
                          forceRoles: n,
                          context: e,
                          overwrites: i,
                          roles: a,
                          checkElevated: s,
                          excludeGuildPermissions: o,
                      }),
                      !1,
                      !1,
                  );
        }
        (l = r.computeLurkerPermissionsAllowList() ?? l),
            (i = null != i ? { ...r.permissionOverwrites, ...i } : r.permissionOverwrites);
        let e = r.getGuildId();
        t = null != e ? A.A.getGuild(e) : null;
    } else (i = i ?? {}), (t = r);
    if (null == t) return v;
    let u = {
        userId: S.dJq,
        nick: "",
        guildId: t.id,
        guildMemberAvatar: null,
        roles: y.default.keys(n),
        colorString: null,
        colorStrings: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null,
    };
    return P({
        userId: S.dJq,
        member: u,
        guild: t,
        overwrites: i,
        roles: a,
        checkElevated: s,
        excludeGuildPermissions: o,
        lurkerPermissionsMask: l,
    });
}
function k(e) {
    let t,
        { user: n, context: r, overwrites: i, roles: a, checkElevated: s = !0, excludeGuildPermissions: o = !1 } = e;
    if (null == n) return v;
    let l = "string" == typeof n ? n : n.id,
        c = N;
    if (r instanceof _.YB) {
        if (r.isScheduledForDeletion()) return v;
        if (_.Le.has(r.type)) {
            let e = m.A.getChannel(r.parent_id);
            if (null == e || e.isScheduledForDeletion()) return v;
            let t = l === I.default.getCurrentUser()?.id && d.A.hasJoined(r.id);
            return U(
                r,
                k({ user: n, context: e, overwrites: i, roles: a, checkElevated: s, excludeGuildPermissions: o }),
                t,
                g.Ay.isCurrentUserGuest(r.guild_id),
            );
        }
        (c = r.computeLurkerPermissionsAllowList() ?? c),
            (i = null != i ? { ...r.permissionOverwrites, ...i } : r.permissionOverwrites);
        let e = r.getGuildId();
        t = null != e ? A.A.getGuild(e) : null;
    } else (i = i ?? {}), (t = r);
    if (null == t) return v;
    if (!(l === I.default.getCurrentUser()?.id && u.A.isViewingRoles(t.id)) && (0, f.bM)(t, l)) return w(C, t, l, s);
    let p = g.Ay.getMember(t.id, l);
    return P({
        userId: l,
        member: p,
        guild: t,
        overwrites: i,
        roles: a,
        checkElevated: s,
        excludeGuildPermissions: o,
        lurkerPermissionsMask: c,
    });
}
function U(e, t, n, r) {
    return e.type !== S.rbe.PRIVATE_THREAD || n || r || a.zy(t, S.xBc.MANAGE_THREADS)
        ? a.zy(t, S.xBc.SEND_MESSAGES_IN_THREADS)
            ? e.isLockedThread() && !a.zy(t, S.xBc.MANAGE_THREADS)
                ? a.TF(t, S.xBc.SEND_MESSAGES)
                : a.kg(t, S.xBc.SEND_MESSAGES)
            : a.TF(t, S.xBc.SEND_MESSAGES)
        : v;
}
function G(e, t) {
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
                return !(null != n && a.aI(n.deny, t.deny) && a.aI(n.allow, t.allow));
            })
    );
}
function V(e) {
    return i().some(E.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, p._m)(e, S.xBc.ADMINISTRATOR))
        ? void 0
        : (e.ownerId ?? void 0);
}
function F(e, t, n, r) {
    return !!(null != t && (0, f.bM)(e, t)) || (null != n && (null == r || (0, T.zA)(n, r)));
}
function B(e, t) {
    let n = g.Ay.getMember(e.id, t);
    if (null != n) return E.A.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}
function j(e, t) {
    return null == t.hoistRoleId ? null : E.A.getRole(e.id, t.hoistRoleId);
}
function H(e) {
    return { id: e, type: s.r2.ROLE, allow: v, deny: v };
}
function Y(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: s, excludeGuildPermissions: o } = e;
    return a.zy(k({ user: n, context: r, overwrites: i, roles: s, checkElevated: !0, excludeGuildPermissions: o }), t);
}
function W(e, t) {
    let n,
        r = {};
    if (t instanceof _.YB) {
        if (t.type === S.rbe.PRIVATE_THREAD || (_.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? A.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = E.A.getEveryoneRole(n).permissions,
        s = r[n.id];
    return null != s && ((i = a.TF(i, s.deny)), (i = a.WQ(i, s.allow))), a.zy(i, e);
}
function K(e, t) {
    let n,
        r = {};
    if (t instanceof _.YB) {
        if (t.type === S.rbe.PRIVATE_THREAD || (_.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? A.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let s = E.A.getEveryoneRole(n);
    return !(!(0, p._m)(s, e) || i().some(r, (t) => a.zy(t.deny, e)));
}
