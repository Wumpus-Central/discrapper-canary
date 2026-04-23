n.d(t, {
    $3: () => W,
    HJ: () => H,
    Ib: () => j,
    MJ: () => Y,
    TJ: () => B,
    aH: () =>
        function e(t) {
            let n,
                {
                    forceRoles: i,
                    context: r,
                    overwrites: a,
                    roles: s,
                    checkElevated: _ = !0,
                    excludeGuildPermissions: l,
                } = t,
                o = h;
            if (r instanceof c.YB) {
                if (r.isScheduledForDeletion()) return m;
                if (c.Le.has(r.type)) {
                    let t = T.A.getChannel(r.parent_id);
                    return null == t
                        ? m
                        : B(
                              r,
                              e({
                                  forceRoles: i,
                                  context: t,
                                  overwrites: a,
                                  roles: s,
                                  checkElevated: _,
                                  excludeGuildPermissions: l,
                              }),
                              !1,
                              !1,
                          );
                }
                (o = r.computeLurkerPermissionsAllowList() ?? o),
                    (a = null != a ? { ...r.permissionOverwrites, ...a } : r.permissionOverwrites);
                let t = r.getGuildId();
                n = null != t ? O.A.getGuild(t) : null;
            } else (a = a ?? {}), (n = r);
            if (null == n) return m;
            let E = {
                userId: p.dJq,
                nick: "",
                guildId: n.id,
                guildMemberAvatar: null,
                roles: C.default.keys(i),
                colorString: null,
                colorStrings: null,
                hoistRoleId: null,
                premiumSince: null,
                isPending: !1,
                joinedAt: new Date().toISOString(),
                communicationDisabledUntil: null,
            };
            return G({
                userId: p.dJq,
                member: E,
                guild: n,
                overwrites: a,
                roles: s,
                checkElevated: _,
                excludeGuildPermissions: l,
                lurkerPermissionsMask: o,
            });
        },
    cc: () => v,
    li: () => k,
    qN: () => D,
    r: () => w,
    wO: () => V,
    wT: () => F,
    x3: () => m,
    xT: () => x,
    yC: () => P,
});
var i = n(735438),
    r = n.n(i),
    a = n(136722),
    s = n(155718),
    _ = n(229527),
    l = n(316031),
    o = n(164956),
    E = n(857071),
    d = n(152007),
    c = n(95701),
    u = n(260509),
    I = n(34457),
    A = n(495544),
    T = n(734057),
    S = n(696451),
    N = n(317525),
    O = n(71393),
    R = n(287809),
    f = n(7864),
    C = n(935208),
    p = n(652215);
let m = a.iu(0),
    L = a.kg(...r().values(p.xBc)),
    D = a.kg(
        p.xBc.CREATE_INSTANT_INVITE,
        p.xBc.CHANGE_NICKNAME,
        p.xBc.VIEW_CHANNEL,
        p.xBc.SEND_MESSAGES,
        p.xBc.EMBED_LINKS,
        p.xBc.ATTACH_FILES,
        p.xBc.READ_MESSAGE_HISTORY,
        p.xBc.MENTION_EVERYONE,
        p.xBc.USE_EXTERNAL_EMOJIS,
        p.xBc.USE_EXTERNAL_STICKERS,
        p.xBc.ADD_REACTIONS,
        p.xBc.CREATE_PUBLIC_THREADS,
        p.xBc.CREATE_PRIVATE_THREADS,
        p.xBc.SEND_MESSAGES_IN_THREADS,
        p.xBc.SEND_POLLS,
        p.xBc.CONNECT,
        p.xBc.SPEAK,
        p.xBc.USE_VAD,
        p.xBc.STREAM,
        p.xBc.USE_EMBEDDED_ACTIVITIES,
        p.xBc.USE_SOUNDBOARD,
        p.xBc.REQUEST_TO_SPEAK,
        p.xBc.USE_APPLICATION_COMMANDS,
        p.xBc.CREATE_GUILD_EXPRESSIONS,
        p.xBc.CREATE_EVENTS,
        p.xBc.USE_EXTERNAL_APPS,
    ),
    h = a.kg(p.xBc.VIEW_CHANNEL, p.xBc.READ_MESSAGE_HISTORY),
    g = a.kg(
        p.xBc.VIEW_CHANNEL,
        p.xBc.SEND_MESSAGES,
        p.xBc.CONNECT,
        p.xBc.SPEAK,
        p.xBc.STREAM,
        p.xBc.USE_EMBEDDED_ACTIVITIES,
        p.xBc.USE_EXTERNAL_APPS,
        p.xBc.USE_EXTERNAL_EMOJIS,
        p.xBc.USE_EXTERNAL_SOUNDS,
        p.xBc.USE_EXTERNAL_STICKERS,
        p.xBc.USE_SOUNDBOARD,
        p.xBc.USE_VAD,
        p.xBc.SEND_MESSAGES_IN_THREADS,
        p.xBc.EMBED_LINKS,
        p.xBc.ATTACH_FILES,
        p.xBc.ADD_REACTIONS,
    ),
    b = a.kg(p.xBc.VIEW_CHANNEL, p.xBc.READ_MESSAGE_HISTORY),
    U = a.kg(p.xBc.VIEW_CHANNEL, p.xBc.READ_MESSAGE_HISTORY, p.xBc.CHANGE_NICKNAME),
    P = a.kg(
        p.xBc.MANAGE_GUILD,
        p.xBc.MANAGE_ROLES,
        p.xBc.ADMINISTRATOR,
        p.xBc.BAN_MEMBERS,
        p.xBc.MANAGE_NICKNAMES,
        p.xBc.CREATE_GUILD_EXPRESSIONS,
        p.xBc.MANAGE_GUILD_EXPRESSIONS,
        p.xBc.MANAGE_WEBHOOKS,
        p.xBc.VIEW_AUDIT_LOG,
        p.xBc.VIEW_GUILD_ANALYTICS,
    );
function M(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        i &&
            t.mfaLevel === p.EkJ.ELEVATED &&
            n === A.default.getId() &&
            !R.default.getCurrentUser()?.mfaEnabled &&
            (e = a.TF(e, p.Lti)),
        e
    );
}
function y(e, t, n, i) {
    let r = i[e];
    if ((null != r && ((n = a.TF(n, r.deny)), (n = a.WQ(n, r.allow))), null != t)) {
        let e = m,
            r = m;
        for (let n = 0; n < t.roles.length; n++) {
            let s = i[t.roles[n]];
            null != s && ((e = a.WQ(e, s.allow)), (r = a.WQ(r, s.deny)));
        }
        (n = a.TF(n, r)), (n = a.WQ(n, e));
        let s = i[t.userId];
        null != s && ((n = a.TF(n, s.deny)), (n = a.WQ(n, s.allow)));
        let o = a.zy(n, p.xBc.ADMINISTRATOR);
        (0, _.TR)(t) && !o && (n = a.pb(n, U)), (0, l.Z)(t) && !o && (n = a.pb(n, b));
    }
    return n;
}
function G(e) {
    let {
        userId: t,
        member: n,
        guild: i,
        overwrites: r,
        roles: s,
        checkElevated: _ = !0,
        excludeGuildPermissions: l = !1,
        lurkerPermissionsMask: o = h,
    } = e;
    if (l) return y(i.id, n, m, r);
    let d = (s = null != s ? { ...N.A.getUnsafeMutableRoles(i.id), ...s } : N.A.getUnsafeMutableRoles(i.id))[
            (0, u.af)(i)
        ],
        c = null != d ? d.permissions : D;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = s[n.roles[e]];
            void 0 !== t && (c = a.WQ(c, t.permissions));
        }
    return (
        (c = a.zy(c, p.xBc.ADMINISTRATOR) ? L : y(i.id, n, c, r)),
        (E.A.isLurking(i.id) || n?.isPending) && (c = a.pb(c, o)),
        S.Ay.isCurrentUserGuest(i.id) && (c = a.pb(c, g)),
        M(c, i, t, _)
    );
}
function v(e) {
    let t,
        { user: n, context: i, overwrites: r, roles: a, checkElevated: s = !0, excludeGuildPermissions: _ = !1 } = e;
    if (null == n) return m;
    let l = "string" == typeof n ? n : n.id,
        E = h;
    if (i instanceof c.YB) {
        if (i.isScheduledForDeletion()) return m;
        if (c.Le.has(i.type)) {
            let e = T.A.getChannel(i.parent_id);
            if (null == e || e.isScheduledForDeletion()) return m;
            let t = l === R.default.getCurrentUser()?.id && d.A.hasJoined(i.id);
            return B(
                i,
                v({ user: n, context: e, overwrites: r, roles: a, checkElevated: s, excludeGuildPermissions: _ }),
                t,
                S.Ay.isCurrentUserGuest(i.guild_id),
            );
        }
        (E = i.computeLurkerPermissionsAllowList() ?? E),
            (r = null != r ? { ...i.permissionOverwrites, ...r } : i.permissionOverwrites);
        let e = i.getGuildId();
        t = null != e ? O.A.getGuild(e) : null;
    } else (r = r ?? {}), (t = i);
    if (null == t) return m;
    if (!(l === R.default.getCurrentUser()?.id && o.A.isViewingRoles(t.id)) && (0, u.bM)(t, l)) return M(L, t, l, s);
    let I = S.Ay.getMember(t.id, l);
    return G({
        userId: l,
        member: I,
        guild: t,
        overwrites: r,
        roles: a,
        checkElevated: s,
        excludeGuildPermissions: _,
        lurkerPermissionsMask: E,
    });
}
function B(e, t, n, i) {
    return e.type !== p.rbe.PRIVATE_THREAD || n || i || a.zy(t, p.xBc.MANAGE_THREADS)
        ? a.zy(t, p.xBc.SEND_MESSAGES_IN_THREADS)
            ? e.isLockedThread() && !a.zy(t, p.xBc.MANAGE_THREADS)
                ? a.TF(t, p.xBc.SEND_MESSAGES)
                : a.kg(t, p.xBc.SEND_MESSAGES)
            : a.TF(t, p.xBc.SEND_MESSAGES)
        : m;
}
function w(e, t) {
    if (c.Le.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let i = { ...e.permissionOverwrites },
        r = { ...t.permissionOverwrites };
    return (
        null == i[n] && (i[n] = x(n)),
        null == r[n] && (r[n] = x(n)),
        Object.keys(i).length === Object.keys(r).length &&
            !Object.keys(i).some((e) => {
                let t = i[e],
                    n = r[e];
                return !(null != n && a.aI(n.deny, t.deny) && a.aI(n.allow, t.allow));
            })
    );
}
function F(e) {
    return r().some(N.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, I._m)(e, p.xBc.ADMINISTRATOR))
        ? void 0
        : (e.ownerId ?? void 0);
}
function V(e, t, n, i) {
    return !!(null != t && (0, u.bM)(e, t)) || (null != n && (null == i || (0, f.zA)(n, i)));
}
function H(e, t) {
    let n = S.Ay.getMember(e.id, t);
    if (null != n) return N.A.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}
function k(e, t) {
    return null == t.hoistRoleId ? null : N.A.getRole(e.id, t.hoistRoleId);
}
function x(e) {
    return { id: e, type: s.r2.ROLE, allow: m, deny: m };
}
function W(e) {
    let { permission: t, user: n, context: i, overwrites: r, roles: s, excludeGuildPermissions: _ } = e;
    return a.zy(v({ user: n, context: i, overwrites: r, roles: s, checkElevated: !0, excludeGuildPermissions: _ }), t);
}
function Y(e, t) {
    let n,
        i = {};
    if (t instanceof c.YB) {
        if (t.type === p.rbe.PRIVATE_THREAD || (c.Le.has(t.type) && null == (t = T.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? O.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let r = N.A.getEveryoneRole(n).permissions,
        s = i[n.id];
    return null != s && ((r = a.TF(r, s.deny)), (r = a.WQ(r, s.allow))), a.zy(r, e);
}
function j(e, t) {
    let n,
        i = {};
    if (t instanceof c.YB) {
        if (t.type === p.rbe.PRIVATE_THREAD || (c.Le.has(t.type) && null == (t = T.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? O.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let s = N.A.getEveryoneRole(n);
    return !(!(0, I._m)(s, e) || r().some(i, (t) => a.zy(t.deny, e)));
}
