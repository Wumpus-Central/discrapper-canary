n.d(t, {
    $3: () => j,
    HJ: () => F,
    Ib: () => W,
    MJ: () => Y,
    TJ: () => w,
    aH: () =>
        function e(t) {
            let n,
                {
                    forceRoles: i,
                    context: a,
                    overwrites: r,
                    roles: s,
                    checkElevated: l = !0,
                    excludeGuildPermissions: o,
                } = t,
                d = L;
            if (a instanceof E.YB) {
                if (a.isScheduledForDeletion()) return C;
                if (E.Le.has(a.type)) {
                    let t = T.A.getChannel(a.parent_id);
                    return null == t
                        ? C
                        : w(
                              a,
                              e({
                                  forceRoles: i,
                                  context: t,
                                  overwrites: r,
                                  roles: s,
                                  checkElevated: l,
                                  excludeGuildPermissions: o,
                              }),
                              !1,
                              !1,
                          );
                }
                (d = a.computeLurkerPermissionsAllowList() ?? d),
                    (r = null != r ? { ...a.permissionOverwrites, ...r } : a.permissionOverwrites);
                let t = a.getGuildId();
                n = null != t ? N.A.getGuild(t) : null;
            } else (r = r ?? {}), (n = a);
            if (null == n) return C;
            let c = {
                userId: O.dJq,
                nick: "",
                guildId: n.id,
                guildMemberAvatar: null,
                roles: m.default.keys(i),
                colorString: null,
                colorStrings: null,
                hoistRoleId: null,
                premiumSince: null,
                isPending: !1,
                joinedAt: new Date().toISOString(),
                communicationDisabledUntil: null,
            };
            return y({
                userId: O.dJq,
                member: c,
                guild: n,
                overwrites: r,
                roles: s,
                checkElevated: l,
                excludeGuildPermissions: o,
                lurkerPermissionsMask: d,
            });
        },
    cc: () => G,
    li: () => k,
    qN: () => g,
    r: () => x,
    wO: () => B,
    wT: () => V,
    x3: () => C,
    xT: () => H,
    yC: () => P,
});
var i = n(735438),
    a = n.n(i),
    r = n(136722),
    s = n(155718),
    l = n(229527),
    o = n(316031),
    d = n(164956),
    c = n(857071),
    _ = n(152007),
    E = n(95701),
    u = n(260509),
    A = n(34457),
    I = n(495544),
    T = n(734057),
    h = n(696451),
    S = n(317525),
    N = n(71393),
    f = n(287809),
    p = n(7864),
    m = n(935208),
    O = n(652215);
let C = r.iu(0),
    R = r.kg(...a().values(O.xBc)),
    g = r.kg(
        O.xBc.CREATE_INSTANT_INVITE,
        O.xBc.CHANGE_NICKNAME,
        O.xBc.VIEW_CHANNEL,
        O.xBc.SEND_MESSAGES,
        O.xBc.EMBED_LINKS,
        O.xBc.ATTACH_FILES,
        O.xBc.READ_MESSAGE_HISTORY,
        O.xBc.MENTION_EVERYONE,
        O.xBc.USE_EXTERNAL_EMOJIS,
        O.xBc.USE_EXTERNAL_STICKERS,
        O.xBc.ADD_REACTIONS,
        O.xBc.CREATE_PUBLIC_THREADS,
        O.xBc.CREATE_PRIVATE_THREADS,
        O.xBc.SEND_MESSAGES_IN_THREADS,
        O.xBc.SEND_POLLS,
        O.xBc.CONNECT,
        O.xBc.SPEAK,
        O.xBc.USE_VAD,
        O.xBc.STREAM,
        O.xBc.USE_EMBEDDED_ACTIVITIES,
        O.xBc.USE_SOUNDBOARD,
        O.xBc.REQUEST_TO_SPEAK,
        O.xBc.USE_APPLICATION_COMMANDS,
        O.xBc.CREATE_GUILD_EXPRESSIONS,
        O.xBc.CREATE_EVENTS,
        O.xBc.USE_EXTERNAL_APPS,
    ),
    L = r.kg(O.xBc.VIEW_CHANNEL, O.xBc.READ_MESSAGE_HISTORY),
    D = r.kg(
        O.xBc.VIEW_CHANNEL,
        O.xBc.SEND_MESSAGES,
        O.xBc.CONNECT,
        O.xBc.SPEAK,
        O.xBc.STREAM,
        O.xBc.USE_EMBEDDED_ACTIVITIES,
        O.xBc.USE_EXTERNAL_APPS,
        O.xBc.USE_EXTERNAL_EMOJIS,
        O.xBc.USE_EXTERNAL_SOUNDS,
        O.xBc.USE_EXTERNAL_STICKERS,
        O.xBc.USE_SOUNDBOARD,
        O.xBc.USE_VAD,
        O.xBc.SEND_MESSAGES_IN_THREADS,
        O.xBc.EMBED_LINKS,
        O.xBc.ATTACH_FILES,
        O.xBc.ADD_REACTIONS,
    ),
    b = r.kg(O.xBc.VIEW_CHANNEL, O.xBc.READ_MESSAGE_HISTORY),
    M = r.kg(O.xBc.VIEW_CHANNEL, O.xBc.READ_MESSAGE_HISTORY, O.xBc.CHANGE_NICKNAME),
    P = r.kg(
        O.xBc.MANAGE_GUILD,
        O.xBc.MANAGE_ROLES,
        O.xBc.ADMINISTRATOR,
        O.xBc.BAN_MEMBERS,
        O.xBc.MANAGE_NICKNAMES,
        O.xBc.CREATE_GUILD_EXPRESSIONS,
        O.xBc.MANAGE_GUILD_EXPRESSIONS,
        O.xBc.MANAGE_WEBHOOKS,
        O.xBc.VIEW_AUDIT_LOG,
        O.xBc.VIEW_GUILD_ANALYTICS,
    );
function U(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        i &&
            t.mfaLevel === O.EkJ.ELEVATED &&
            n === I.default.getId() &&
            !f.default.getCurrentUser()?.mfaEnabled &&
            (e = r.TF(e, O.Lti)),
        e
    );
}
function v(e, t, n, i) {
    let a = i[e];
    if ((null != a && ((n = r.TF(n, a.deny)), (n = r.WQ(n, a.allow))), null != t)) {
        let e = C,
            a = C;
        for (let n = 0; n < t.roles.length; n++) {
            let s = i[t.roles[n]];
            null != s && ((e = r.WQ(e, s.allow)), (a = r.WQ(a, s.deny)));
        }
        (n = r.TF(n, a)), (n = r.WQ(n, e));
        let s = i[t.userId];
        null != s && ((n = r.TF(n, s.deny)), (n = r.WQ(n, s.allow)));
        let d = r.zy(n, O.xBc.ADMINISTRATOR);
        (0, l.TR)(t) && !d && (n = r.pb(n, M)), (0, o.Z)(t) && !d && (n = r.pb(n, b));
    }
    return n;
}
function y(e) {
    let {
        userId: t,
        member: n,
        guild: i,
        overwrites: a,
        roles: s,
        checkElevated: l = !0,
        excludeGuildPermissions: o = !1,
        lurkerPermissionsMask: d = L,
    } = e;
    if (o) return v(i.id, n, C, a);
    let _ = (s = null != s ? { ...S.A.getUnsafeMutableRoles(i.id), ...s } : S.A.getUnsafeMutableRoles(i.id))[
            (0, u.af)(i)
        ],
        E = null != _ ? _.permissions : g;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = s[n.roles[e]];
            void 0 !== t && (E = r.WQ(E, t.permissions));
        }
    return (
        (E = r.zy(E, O.xBc.ADMINISTRATOR) ? R : v(i.id, n, E, a)),
        (c.A.isLurking(i.id) || n?.isPending) && (E = r.pb(E, d)),
        h.Ay.isCurrentUserGuest(i.id) && (E = r.pb(E, D)),
        U(E, i, t, l)
    );
}
function G(e) {
    let t,
        { user: n, context: i, overwrites: a, roles: r, checkElevated: s = !0, excludeGuildPermissions: l = !1 } = e;
    if (null == n) return C;
    let o = "string" == typeof n ? n : n.id,
        c = L;
    if (i instanceof E.YB) {
        if (i.isScheduledForDeletion()) return C;
        if (E.Le.has(i.type)) {
            let e = T.A.getChannel(i.parent_id);
            if (null == e || e.isScheduledForDeletion()) return C;
            let t = o === f.default.getCurrentUser()?.id && _.A.hasJoined(i.id);
            return w(
                i,
                G({ user: n, context: e, overwrites: a, roles: r, checkElevated: s, excludeGuildPermissions: l }),
                t,
                h.Ay.isCurrentUserGuest(i.guild_id),
            );
        }
        (c = i.computeLurkerPermissionsAllowList() ?? c),
            (a = null != a ? { ...i.permissionOverwrites, ...a } : i.permissionOverwrites);
        let e = i.getGuildId();
        t = null != e ? N.A.getGuild(e) : null;
    } else (a = a ?? {}), (t = i);
    if (null == t) return C;
    if (!(o === f.default.getCurrentUser()?.id && d.A.isViewingRoles(t.id)) && (0, u.bM)(t, o)) return U(R, t, o, s);
    let A = h.Ay.getMember(t.id, o);
    return y({
        userId: o,
        member: A,
        guild: t,
        overwrites: a,
        roles: r,
        checkElevated: s,
        excludeGuildPermissions: l,
        lurkerPermissionsMask: c,
    });
}
function w(e, t, n, i) {
    return e.type !== O.rbe.PRIVATE_THREAD || n || i || r.zy(t, O.xBc.MANAGE_THREADS)
        ? r.zy(t, O.xBc.SEND_MESSAGES_IN_THREADS)
            ? e.isLockedThread() && !r.zy(t, O.xBc.MANAGE_THREADS)
                ? r.TF(t, O.xBc.SEND_MESSAGES)
                : r.kg(t, O.xBc.SEND_MESSAGES)
            : r.TF(t, O.xBc.SEND_MESSAGES)
        : C;
}
function x(e, t) {
    if (E.Le.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let i = { ...e.permissionOverwrites },
        a = { ...t.permissionOverwrites };
    return (
        null == i[n] && (i[n] = H(n)),
        null == a[n] && (a[n] = H(n)),
        Object.keys(i).length === Object.keys(a).length &&
            !Object.keys(i).some((e) => {
                let t = i[e],
                    n = a[e];
                return !(null != n && r.aI(n.deny, t.deny) && r.aI(n.allow, t.allow));
            })
    );
}
function V(e) {
    return a().some(S.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, A._m)(e, O.xBc.ADMINISTRATOR))
        ? void 0
        : (e.ownerId ?? void 0);
}
function B(e, t, n, i) {
    return !!(null != t && (0, u.bM)(e, t)) || (null != n && (null == i || (0, p.zA)(n, i)));
}
function F(e, t) {
    let n = h.Ay.getMember(e.id, t);
    if (null != n) return S.A.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}
function k(e, t) {
    return null == t.hoistRoleId ? null : S.A.getRole(e.id, t.hoistRoleId);
}
function H(e) {
    return { id: e, type: s.r2.ROLE, allow: C, deny: C };
}
function j(e) {
    let { permission: t, user: n, context: i, overwrites: a, roles: s, excludeGuildPermissions: l } = e;
    return r.zy(G({ user: n, context: i, overwrites: a, roles: s, checkElevated: !0, excludeGuildPermissions: l }), t);
}
function Y(e, t) {
    let n,
        i = {};
    if (t instanceof E.YB) {
        if (t.type === O.rbe.PRIVATE_THREAD || (E.Le.has(t.type) && null == (t = T.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? N.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let a = S.A.getEveryoneRole(n).permissions,
        s = i[n.id];
    return null != s && ((a = r.TF(a, s.deny)), (a = r.WQ(a, s.allow))), r.zy(a, e);
}
function W(e, t) {
    let n,
        i = {};
    if (t instanceof E.YB) {
        if (t.type === O.rbe.PRIVATE_THREAD || (E.Le.has(t.type) && null == (t = T.A.getChannel(t.parent_id))))
            return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? N.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let s = S.A.getEveryoneRole(n);
    return !(!(0, A._m)(s, e) || a().some(i, (t) => r.zy(t.deny, e)));
}
