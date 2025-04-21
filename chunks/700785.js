n.d(t, {
    BT: () => V,
    Hn: () => O,
    Hu: () => B,
    I0: () => L,
    Og: () => M,
    TP: () => S,
    Uu: () => Z,
    e9: () => G,
    iJ: () => j,
    o4: () => k,
    oz: () => H,
    r6: () => U,
    uB: () => x,
    we: () => F,
    ym: () => R
}),
    n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(149765),
    o = n(911969),
    s = n(715903),
    l = n(69882),
    c = n(160404),
    u = n(41776),
    d = n(569471),
    f = n(131704),
    _ = n(314897),
    p = n(592125),
    h = n(271383),
    m = n(430824),
    g = n(594174),
    E = n(709054),
    b = n(981631);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
let O = a.vB(0),
    I = a.$e(...i().values(b.Plq)),
    S = a.$e(b.Plq.CREATE_INSTANT_INVITE, b.Plq.CHANGE_NICKNAME, b.Plq.VIEW_CHANNEL, b.Plq.SEND_MESSAGES, b.Plq.EMBED_LINKS, b.Plq.ATTACH_FILES, b.Plq.READ_MESSAGE_HISTORY, b.Plq.MENTION_EVERYONE, b.Plq.USE_EXTERNAL_EMOJIS, b.Plq.USE_EXTERNAL_STICKERS, b.Plq.ADD_REACTIONS, b.Plq.CREATE_PUBLIC_THREADS, b.Plq.CREATE_PRIVATE_THREADS, b.Plq.SEND_MESSAGES_IN_THREADS, b.Plq.SEND_POLLS, b.Plq.CONNECT, b.Plq.SPEAK, b.Plq.USE_VAD, b.Plq.STREAM, b.Plq.USE_EMBEDDED_ACTIVITIES, b.Plq.USE_SOUNDBOARD, b.Plq.REQUEST_TO_SPEAK, b.Plq.USE_APPLICATION_COMMANDS, b.Plq.CREATE_GUILD_EXPRESSIONS, b.Plq.CREATE_EVENTS, b.Plq.USE_EXTERNAL_APPS),
    T = a.$e(b.Plq.VIEW_CHANNEL, b.Plq.READ_MESSAGE_HISTORY),
    A = a.$e(b.Plq.VIEW_CHANNEL, b.Plq.SEND_MESSAGES, b.Plq.CONNECT, b.Plq.SPEAK, b.Plq.STREAM, b.Plq.USE_EMBEDDED_ACTIVITIES, b.Plq.USE_EXTERNAL_APPS, b.Plq.USE_EXTERNAL_EMOJIS, b.Plq.USE_EXTERNAL_SOUNDS, b.Plq.USE_EXTERNAL_STICKERS, b.Plq.USE_SOUNDBOARD, b.Plq.USE_VAD),
    N = a.$e(b.Plq.VIEW_CHANNEL, b.Plq.READ_MESSAGE_HISTORY),
    C = a.$e(b.Plq.VIEW_CHANNEL, b.Plq.READ_MESSAGE_HISTORY, b.Plq.CHANGE_NICKNAME),
    R = a.$e(b.Plq.MANAGE_GUILD, b.Plq.MANAGE_ROLES, b.Plq.ADMINISTRATOR, b.Plq.BAN_MEMBERS, b.Plq.MANAGE_NICKNAMES, b.Plq.CREATE_GUILD_EXPRESSIONS, b.Plq.MANAGE_GUILD_EXPRESSIONS, b.Plq.MANAGE_WEBHOOKS, b.Plq.VIEW_AUDIT_LOG);
function P(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === b.BpS.ELEVATED && n === _.default.getId()) {
        var i;
        (null == (i = g.default.getCurrentUser()) ? void 0 : i.mfaEnabled) || (e = a.Od(e, b.TC2));
    }
    return e;
}
function w(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = a.Od(n, i.deny)), (n = a.IH(n, i.allow))), null != t)) {
        let e = O,
            i = O;
        for (let n = 0; n < t.roles.length; n++) {
            let o = r[t.roles[n]];
            null != o && ((e = a.IH(e, o.allow)), (i = a.IH(i, o.deny)));
        }
        (n = a.Od(n, i)), (n = a.IH(n, e));
        let o = r[t.userId];
        null != o && ((n = a.Od(n, o.deny)), (n = a.IH(n, o.allow)));
        let c = a.e$(n, b.Plq.ADMINISTRATOR);
        (0, s.EY)(t) && !c && (n = a.hX(n, C)), (0, l.b)(t) && !c && (n = a.hX(n, N));
    }
    return n;
}
function D(e) {
    let { userId: t, member: n, guild: r, overwrites: i, roles: o, checkElevated: s = !0, excludeGuildPermissions: l = !1, lurkerPermissionsMask: c = T } = e;
    if (l) return w(r.id, n, O, i);
    let d = (o = null != o ? v({}, m.Z.getRoles(r.id), o) : m.Z.getRoles(r.id))[r.getEveryoneRoleId()],
        f = null != d ? d.permissions : S;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = o[n.roles[e]];
            void 0 !== t && (f = a.IH(f, t.permissions));
        }
    return (f = a.e$(f, b.Plq.ADMINISTRATOR) ? I : w(r.id, n, f, i)), (u.Z.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (f = a.hX(f, c)), h.ZP.isCurrentUserGuest(r.id) && (f = a.hX(f, A)), P(f, r, t, s);
}
function L(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: a, checkElevated: o = !0, excludeGuildPermissions: s } = e,
        l = T;
    if (r instanceof f.Sf) {
        var c;
        if (r.isScheduledForDeletion()) return O;
        if (f.Ec.has(r.type)) {
            let e = p.Z.getChannel(r.parent_id);
            return null == e
                ? O
                : M(
                      r,
                      L({
                          forceRoles: n,
                          context: e,
                          overwrites: i,
                          roles: a,
                          checkElevated: o,
                          excludeGuildPermissions: s
                      }),
                      !1
                  );
        }
        (l = null != (c = r.computeLurkerPermissionsAllowList()) ? c : l), (i = null != i ? v({}, r.permissionOverwrites, i) : r.permissionOverwrites);
        let e = r.getGuildId();
        t = null != e ? m.Z.getGuild(e) : null;
    } else (i = null != i ? i : {}), (t = r);
    if (null == t) return O;
    let u = {
        userId: b.lds,
        nick: '',
        guildId: t.id,
        guildMemberAvatar: null,
        roles: E.default.keys(n),
        colorString: null,
        colorStrings: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
    };
    return D({
        userId: b.lds,
        member: u,
        guild: t,
        overwrites: i,
        roles: a,
        checkElevated: o,
        excludeGuildPermissions: s,
        lurkerPermissionsMask: l
    });
}
function x(e) {
    var t, n, r;
    let i,
        { user: a, context: o, overwrites: s, roles: l, checkElevated: u = !0, excludeGuildPermissions: _ = !1 } = e;
    if (null == a) return O;
    let E = 'string' == typeof a ? a : a.id,
        b = T;
    if (o instanceof f.Sf) {
        if (o.isScheduledForDeletion()) return O;
        if (f.Ec.has(o.type)) {
            let e = p.Z.getChannel(o.parent_id);
            if (null == e || e.isScheduledForDeletion()) return O;
            let t = E === (null == (n = g.default.getCurrentUser()) ? void 0 : n.id) && d.Z.hasJoined(o.id);
            return M(
                o,
                x({
                    user: a,
                    context: e,
                    overwrites: s,
                    roles: l,
                    checkElevated: u,
                    excludeGuildPermissions: _
                }),
                t
            );
        }
        (b = null != (r = o.computeLurkerPermissionsAllowList()) ? r : b), (s = null != s ? v({}, o.permissionOverwrites, s) : o.permissionOverwrites);
        let e = o.getGuildId();
        i = null != e ? m.Z.getGuild(e) : null;
    } else (s = null != s ? s : {}), (i = o);
    if (null == i) return O;
    if (!(E === (null == (t = g.default.getCurrentUser()) ? void 0 : t.id) && c.Z.isViewingRoles(i.id)) && i.isOwner(E)) return P(I, i, E, u);
    let y = h.ZP.getMember(i.id, E);
    return D({
        userId: E,
        member: y,
        guild: i,
        overwrites: s,
        roles: l,
        checkElevated: u,
        excludeGuildPermissions: _,
        lurkerPermissionsMask: b
    });
}
function M(e, t, n) {
    return e.type !== b.d4z.PRIVATE_THREAD || n || a.e$(t, b.Plq.MANAGE_THREADS) ? (a.e$(t, b.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !a.e$(t, b.Plq.MANAGE_THREADS) ? a.Od(t, b.Plq.SEND_MESSAGES) : a.$e(t, b.Plq.SEND_MESSAGES)) : a.Od(t, b.Plq.SEND_MESSAGES)) : O;
}
function k(e, t) {
    if (f.Ec.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let r = v({}, e.permissionOverwrites),
        i = v({}, t.permissionOverwrites);
    return (
        null == r[n] && (r[n] = F(n)),
        null == i[n] && (i[n] = F(n)),
        Object.keys(r).length === Object.keys(i).length &&
            !Object.keys(r).some((e) => {
                let t = r[e],
                    n = i[e];
                return !(null != n && a.fS(n.deny, t.deny) && a.fS(n.allow, t.allow));
            })
    );
}
function j(e) {
    var t;
    return i().some(m.Z.getRoles(e.id), (e) => e.hoist && a.e$(e.permissions, b.Plq.ADMINISTRATOR)) ? void 0 : null != (t = e.ownerId) ? t : void 0;
}
function U(e, t, n, r) {
    if (null != t && e.isOwner(t)) return !0;
    if (null == n) return !1;
    let a = i()(m.Z.getRoles(e.id))
        .sortBy((e) => e.position)
        .map((e) => e.id)
        .value();
    return a.indexOf(n.id) > (null != r ? a.indexOf(r.id) : -1);
}
function G(e, t) {
    let n = h.ZP.getMember(e.id, t);
    if (null != n)
        return i()(m.Z.getRoles(e.id))
            .filter((e) => -1 !== n.roles.indexOf(e.id))
            .sortBy((e) => -e.position)
            .first();
}
function B(e, t) {
    return null == t.hoistRoleId ? null : m.Z.getRole(e.id, t.hoistRoleId);
}
function F(e) {
    return {
        id: e,
        type: o.BN.ROLE,
        allow: O,
        deny: O
    };
}
function V(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: o, excludeGuildPermissions: s } = e;
    return a.e$(
        x({
            user: n,
            context: r,
            overwrites: i,
            roles: o,
            checkElevated: !0,
            excludeGuildPermissions: s
        }),
        t
    );
}
function Z(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === b.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = p.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = m.Z.getRole(n.id, n.getEveryoneRoleId());
    if (null == i) return !1;
    let o = i.permissions,
        s = r[n.id];
    return null != s && ((o = a.Od(o, s.deny)), (o = a.IH(o, s.allow))), a.e$(o, e);
}
function H(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === b.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = p.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let o = m.Z.getRole(n.id, n.getEveryoneRoleId());
    return !(null == o || !a.e$(o.permissions, e) || i().some(r, (t) => a.e$(t.deny, e)));
}
