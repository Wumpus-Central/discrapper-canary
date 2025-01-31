n.d(t, {
    BT: () => Z,
    Hn: () => y,
    Hu: () => G,
    I0: () => x,
    Og: () => P,
    TP: () => b,
    Uu: () => F,
    e9: () => U,
    iJ: () => M,
    o4: () => w,
    oz: () => V,
    r6: () => k,
    uB: () => L,
    we: () => B,
    ym: () => C
}),
    n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(149765),
    s = n(911969),
    o = n(715903),
    l = n(69882),
    u = n(160404),
    c = n(41776),
    d = n(569471),
    f = n(131704),
    _ = n(314897),
    p = n(592125),
    h = n(271383),
    m = n(430824),
    g = n(594174),
    E = n(709054),
    v = n(981631);
let y = a.vB(0),
    I = a.$e(...r().values(v.Plq)),
    b = a.$e(v.Plq.CREATE_INSTANT_INVITE, v.Plq.CHANGE_NICKNAME, v.Plq.VIEW_CHANNEL, v.Plq.SEND_MESSAGES, v.Plq.EMBED_LINKS, v.Plq.ATTACH_FILES, v.Plq.READ_MESSAGE_HISTORY, v.Plq.MENTION_EVERYONE, v.Plq.USE_EXTERNAL_EMOJIS, v.Plq.USE_EXTERNAL_STICKERS, v.Plq.ADD_REACTIONS, v.Plq.CREATE_PUBLIC_THREADS, v.Plq.CREATE_PRIVATE_THREADS, v.Plq.SEND_MESSAGES_IN_THREADS, v.Plq.SEND_POLLS, v.Plq.CONNECT, v.Plq.SPEAK, v.Plq.USE_VAD, v.Plq.STREAM, v.Plq.USE_EMBEDDED_ACTIVITIES, v.Plq.USE_SOUNDBOARD, v.Plq.REQUEST_TO_SPEAK, v.Plq.USE_APPLICATION_COMMANDS, v.Plq.CREATE_GUILD_EXPRESSIONS, v.Plq.CREATE_EVENTS, v.Plq.USE_EXTERNAL_APPS),
    T = a.$e(v.Plq.VIEW_CHANNEL, v.Plq.READ_MESSAGE_HISTORY),
    S = a.$e(v.Plq.VIEW_CHANNEL, v.Plq.SEND_MESSAGES, v.Plq.CONNECT, v.Plq.SPEAK, v.Plq.STREAM, v.Plq.USE_EMBEDDED_ACTIVITIES, v.Plq.USE_EXTERNAL_APPS, v.Plq.USE_EXTERNAL_EMOJIS, v.Plq.USE_EXTERNAL_SOUNDS, v.Plq.USE_EXTERNAL_STICKERS, v.Plq.USE_SOUNDBOARD, v.Plq.USE_VAD),
    A = a.$e(v.Plq.VIEW_CHANNEL, v.Plq.READ_MESSAGE_HISTORY),
    N = a.$e(v.Plq.VIEW_CHANNEL, v.Plq.READ_MESSAGE_HISTORY, v.Plq.CHANGE_NICKNAME),
    C = a.$e(v.Plq.MANAGE_GUILD, v.Plq.MANAGE_ROLES, v.Plq.ADMINISTRATOR, v.Plq.BAN_MEMBERS, v.Plq.MANAGE_NICKNAMES, v.Plq.CREATE_GUILD_EXPRESSIONS, v.Plq.MANAGE_GUILD_EXPRESSIONS, v.Plq.MANAGE_WEBHOOKS, v.Plq.VIEW_AUDIT_LOG);
function R(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (i && t.mfaLevel === v.BpS.ELEVATED && n === _.default.getId()) {
        var r;
        (null === (r = g.default.getCurrentUser()) || void 0 === r ? void 0 : r.mfaEnabled) || (e = a.Od(e, v.TC2));
    }
    return e;
}
function O(e, t, n, i) {
    let r = i[e];
    if ((null != r && ((n = a.Od(n, r.deny)), (n = a.IH(n, r.allow))), null != t)) {
        let e = y,
            r = y;
        for (let n = 0; n < t.roles.length; n++) {
            let s = i[t.roles[n]];
            null != s && ((e = a.IH(e, s.allow)), (r = a.IH(r, s.deny)));
        }
        (n = a.Od(n, r)), (n = a.IH(n, e));
        let s = i[t.userId];
        null != s && ((n = a.Od(n, s.deny)), (n = a.IH(n, s.allow)));
        let u = a.e$(n, v.Plq.ADMINISTRATOR);
        (0, o.EY)(t) && !u && (n = a.hX(n, N)), (0, l.b)(t) && !u && (n = a.hX(n, A));
    }
    return n;
}
function D(e) {
    let { userId: t, member: n, guild: i, overwrites: r, roles: s, checkElevated: o = !0, excludeGuildPermissions: l = !1, lurkerPermissionsMask: u = T } = e;
    if (l) return O(i.id, n, y, r);
    let d = (s =
            null != s
                ? {
                      ...m.Z.getRoles(i.id),
                      ...s
                  }
                : m.Z.getRoles(i.id))[i.getEveryoneRoleId()],
        f = null != d ? d.permissions : b;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = s[n.roles[e]];
            void 0 !== t && (f = a.IH(f, t.permissions));
        }
    return (f = a.e$(f, v.Plq.ADMINISTRATOR) ? I : O(i.id, n, f, r)), (c.Z.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (f = a.hX(f, u)), h.ZP.isCurrentUserGuest(i.id) && (f = a.hX(f, S)), R(f, i, t, o);
}
function x(e) {
    let t,
        { forceRoles: n, context: i, overwrites: r, roles: a, checkElevated: s = !0, excludeGuildPermissions: o } = e,
        l = T;
    if (i instanceof f.Sf) {
        var u;
        if (i.isScheduledForDeletion()) return y;
        if (f.Ec.has(i.type)) {
            let e = p.Z.getChannel(i.parent_id);
            return null == e
                ? y
                : P(
                      i,
                      x({
                          forceRoles: n,
                          context: e,
                          overwrites: r,
                          roles: a,
                          checkElevated: s,
                          excludeGuildPermissions: o
                      }),
                      !1
                  );
        }
        (l = null !== (u = i.computeLurkerPermissionsAllowList()) && void 0 !== u ? u : l),
            (r =
                null != r
                    ? {
                          ...i.permissionOverwrites,
                          ...r
                      }
                    : i.permissionOverwrites);
        let e = i.getGuildId();
        t = null != e ? m.Z.getGuild(e) : null;
    } else (r = null != r ? r : {}), (t = i);
    if (null == t) return y;
    let c = {
        userId: v.lds,
        nick: '',
        guildId: t.id,
        guildMemberAvatar: null,
        roles: E.default.keys(n),
        colorString: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
    };
    return D({
        userId: v.lds,
        member: c,
        guild: t,
        overwrites: r,
        roles: a,
        checkElevated: s,
        excludeGuildPermissions: o,
        lurkerPermissionsMask: l
    });
}
function L(e) {
    var t, n, i;
    let r,
        { user: a, context: s, overwrites: o, roles: l, checkElevated: c = !0, excludeGuildPermissions: _ = !1 } = e;
    if (null == a) return y;
    let E = 'string' == typeof a ? a : a.id,
        v = T;
    if (s instanceof f.Sf) {
        if (s.isScheduledForDeletion()) return y;
        if (f.Ec.has(s.type)) {
            let e = p.Z.getChannel(s.parent_id);
            if (null == e || e.isScheduledForDeletion()) return y;
            let t = E === (null === (n = g.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && d.Z.hasJoined(s.id);
            return P(
                s,
                L({
                    user: a,
                    context: e,
                    overwrites: o,
                    roles: l,
                    checkElevated: c,
                    excludeGuildPermissions: _
                }),
                t
            );
        }
        (v = null !== (i = s.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : v),
            (o =
                null != o
                    ? {
                          ...s.permissionOverwrites,
                          ...o
                      }
                    : s.permissionOverwrites);
        let e = s.getGuildId();
        r = null != e ? m.Z.getGuild(e) : null;
    } else (o = null != o ? o : {}), (r = s);
    if (null == r) return y;
    if (!(E === (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.Z.isViewingRoles(r.id)) && r.isOwner(E)) return R(I, r, E, c);
    let b = h.ZP.getMember(r.id, E);
    return D({
        userId: E,
        member: b,
        guild: r,
        overwrites: o,
        roles: l,
        checkElevated: c,
        excludeGuildPermissions: _,
        lurkerPermissionsMask: v
    });
}
function P(e, t, n) {
    return e.type !== v.d4z.PRIVATE_THREAD || n || a.e$(t, v.Plq.MANAGE_THREADS) ? (a.e$(t, v.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !a.e$(t, v.Plq.MANAGE_THREADS) ? a.Od(t, v.Plq.SEND_MESSAGES) : a.$e(t, v.Plq.SEND_MESSAGES)) : a.Od(t, v.Plq.SEND_MESSAGES)) : y;
}
function w(e, t) {
    if (f.Ec.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let i = { ...e.permissionOverwrites },
        r = { ...t.permissionOverwrites };
    return (
        null == i[n] && (i[n] = B(n)),
        null == r[n] && (r[n] = B(n)),
        Object.keys(i).length === Object.keys(r).length &&
            !Object.keys(i).some((e) => {
                let t = i[e],
                    n = r[e];
                return !(null != n && a.fS(n.deny, t.deny) && a.fS(n.allow, t.allow));
            })
    );
}
function M(e) {
    var t;
    return r().some(m.Z.getRoles(e.id), (e) => e.hoist && a.e$(e.permissions, v.Plq.ADMINISTRATOR)) ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0;
}
function k(e, t, n, i) {
    if (null != t && e.isOwner(t)) return !0;
    if (null == n) return !1;
    let a = r()(m.Z.getRoles(e.id))
        .sortBy((e) => e.position)
        .map((e) => e.id)
        .value();
    return a.indexOf(n.id) > (null != i ? a.indexOf(i.id) : -1);
}
function U(e, t) {
    let n = h.ZP.getMember(e.id, t);
    if (null != n)
        return r()(m.Z.getRoles(e.id))
            .filter((e) => -1 !== n.roles.indexOf(e.id))
            .sortBy((e) => -e.position)
            .first();
}
function G(e, t) {
    return null == t.hoistRoleId ? null : m.Z.getRole(e.id, t.hoistRoleId);
}
function B(e) {
    return {
        id: e,
        type: s.BN.ROLE,
        allow: y,
        deny: y
    };
}
function Z(e) {
    let { permission: t, user: n, context: i, overwrites: r, roles: s, excludeGuildPermissions: o } = e;
    return a.e$(
        L({
            user: n,
            context: i,
            overwrites: r,
            roles: s,
            checkElevated: !0,
            excludeGuildPermissions: o
        }),
        t
    );
}
function F(e, t) {
    let n;
    let i = {};
    if (t instanceof f.Sf) {
        if (t.type === v.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = p.Z.getChannel(t.parent_id)))) return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let r = m.Z.getRole(n.id, n.getEveryoneRoleId());
    if (null == r) return !1;
    let s = r.permissions,
        o = i[n.id];
    return null != o && ((s = a.Od(s, o.deny)), (s = a.IH(s, o.allow))), a.e$(s, e);
}
function V(e, t) {
    let n;
    let i = {};
    if (t instanceof f.Sf) {
        if (t.type === v.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = p.Z.getChannel(t.parent_id)))) return !1;
        i = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let s = m.Z.getRole(n.id, n.getEveryoneRoleId());
    return !(null == s || !a.e$(s.permissions, e) || r().some(i, (t) => a.e$(t.deny, e)));
}
