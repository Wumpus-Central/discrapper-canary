n.d(t, {
    BT: () => Z,
    Hn: () => I,
    Hu: () => V,
    I0: () => x,
    Og: () => M,
    TP: () => S,
    Uu: () => H,
    e9: () => B,
    iJ: () => U,
    o4: () => j,
    oz: () => Y,
    r6: () => G,
    uB: () => k,
    we: () => F,
    ym: () => P
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
    m = n(485386),
    g = n(430824),
    E = n(594174),
    b = n(709054),
    y = n(981631);
function O(e, t, n) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
let I = a.vB(0),
    T = a.$e(...i().values(y.Plq)),
    S = a.$e(y.Plq.CREATE_INSTANT_INVITE, y.Plq.CHANGE_NICKNAME, y.Plq.VIEW_CHANNEL, y.Plq.SEND_MESSAGES, y.Plq.EMBED_LINKS, y.Plq.ATTACH_FILES, y.Plq.READ_MESSAGE_HISTORY, y.Plq.MENTION_EVERYONE, y.Plq.USE_EXTERNAL_EMOJIS, y.Plq.USE_EXTERNAL_STICKERS, y.Plq.ADD_REACTIONS, y.Plq.CREATE_PUBLIC_THREADS, y.Plq.CREATE_PRIVATE_THREADS, y.Plq.SEND_MESSAGES_IN_THREADS, y.Plq.SEND_POLLS, y.Plq.CONNECT, y.Plq.SPEAK, y.Plq.USE_VAD, y.Plq.STREAM, y.Plq.USE_EMBEDDED_ACTIVITIES, y.Plq.USE_SOUNDBOARD, y.Plq.REQUEST_TO_SPEAK, y.Plq.USE_APPLICATION_COMMANDS, y.Plq.CREATE_GUILD_EXPRESSIONS, y.Plq.CREATE_EVENTS, y.Plq.USE_EXTERNAL_APPS),
    A = a.$e(y.Plq.VIEW_CHANNEL, y.Plq.READ_MESSAGE_HISTORY),
    N = a.$e(y.Plq.VIEW_CHANNEL, y.Plq.SEND_MESSAGES, y.Plq.CONNECT, y.Plq.SPEAK, y.Plq.STREAM, y.Plq.USE_EMBEDDED_ACTIVITIES, y.Plq.USE_EXTERNAL_APPS, y.Plq.USE_EXTERNAL_EMOJIS, y.Plq.USE_EXTERNAL_SOUNDS, y.Plq.USE_EXTERNAL_STICKERS, y.Plq.USE_SOUNDBOARD, y.Plq.USE_VAD),
    C = a.$e(y.Plq.VIEW_CHANNEL, y.Plq.READ_MESSAGE_HISTORY),
    R = a.$e(y.Plq.VIEW_CHANNEL, y.Plq.READ_MESSAGE_HISTORY, y.Plq.CHANGE_NICKNAME),
    P = a.$e(y.Plq.MANAGE_GUILD, y.Plq.MANAGE_ROLES, y.Plq.ADMINISTRATOR, y.Plq.BAN_MEMBERS, y.Plq.MANAGE_NICKNAMES, y.Plq.CREATE_GUILD_EXPRESSIONS, y.Plq.MANAGE_GUILD_EXPRESSIONS, y.Plq.MANAGE_WEBHOOKS, y.Plq.VIEW_AUDIT_LOG);
function w(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === y.BpS.ELEVATED && n === _.default.getId()) {
        var i;
        (null == (i = E.default.getCurrentUser()) ? void 0 : i.mfaEnabled) || (e = a.Od(e, y.TC2));
    }
    return e;
}
function D(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = a.Od(n, i.deny)), (n = a.IH(n, i.allow))), null != t)) {
        let e = I,
            i = I;
        for (let n = 0; n < t.roles.length; n++) {
            let o = r[t.roles[n]];
            null != o && ((e = a.IH(e, o.allow)), (i = a.IH(i, o.deny)));
        }
        (n = a.Od(n, i)), (n = a.IH(n, e));
        let o = r[t.userId];
        null != o && ((n = a.Od(n, o.deny)), (n = a.IH(n, o.allow)));
        let c = a.e$(n, y.Plq.ADMINISTRATOR);
        (0, s.EY)(t) && !c && (n = a.hX(n, R)), (0, l.b)(t) && !c && (n = a.hX(n, C));
    }
    return n;
}
function L(e) {
    let { userId: t, member: n, guild: r, overwrites: i, roles: o, checkElevated: s = !0, excludeGuildPermissions: l = !1, lurkerPermissionsMask: c = A } = e;
    if (l) return D(r.id, n, I, i);
    let d = (o = null != o ? v({}, m.Z.getRoles(r.id), o) : m.Z.getRoles(r.id))[r.getEveryoneRoleId()],
        f = null != d ? d.permissions : S;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = o[n.roles[e]];
            void 0 !== t && (f = a.IH(f, t.permissions));
        }
    return (f = a.e$(f, y.Plq.ADMINISTRATOR) ? T : D(r.id, n, f, i)), (u.Z.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (f = a.hX(f, c)), h.ZP.isCurrentUserGuest(r.id) && (f = a.hX(f, N)), w(f, r, t, s);
}
function x(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: a, checkElevated: o = !0, excludeGuildPermissions: s } = e,
        l = A;
    if (r instanceof f.Sf) {
        var c;
        if (r.isScheduledForDeletion()) return I;
        if (f.Ec.has(r.type)) {
            let e = p.Z.getChannel(r.parent_id);
            return null == e
                ? I
                : M(
                      r,
                      x({
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
        t = null != e ? g.Z.getGuild(e) : null;
    } else (i = null != i ? i : {}), (t = r);
    if (null == t) return I;
    let u = {
        userId: y.lds,
        nick: '',
        guildId: t.id,
        guildMemberAvatar: null,
        roles: b.default.keys(n),
        colorString: null,
        colorStrings: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
    };
    return L({
        userId: y.lds,
        member: u,
        guild: t,
        overwrites: i,
        roles: a,
        checkElevated: o,
        excludeGuildPermissions: s,
        lurkerPermissionsMask: l
    });
}
function k(e) {
    var t, n, r;
    let i,
        { user: a, context: o, overwrites: s, roles: l, checkElevated: u = !0, excludeGuildPermissions: _ = !1 } = e;
    if (null == a) return I;
    let m = 'string' == typeof a ? a : a.id,
        b = A;
    if (o instanceof f.Sf) {
        if (o.isScheduledForDeletion()) return I;
        if (f.Ec.has(o.type)) {
            let e = p.Z.getChannel(o.parent_id);
            if (null == e || e.isScheduledForDeletion()) return I;
            let t = m === (null == (n = E.default.getCurrentUser()) ? void 0 : n.id) && d.Z.hasJoined(o.id);
            return M(
                o,
                k({
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
        i = null != e ? g.Z.getGuild(e) : null;
    } else (s = null != s ? s : {}), (i = o);
    if (null == i) return I;
    if (!(m === (null == (t = E.default.getCurrentUser()) ? void 0 : t.id) && c.Z.isViewingRoles(i.id)) && i.isOwner(m)) return w(T, i, m, u);
    let y = h.ZP.getMember(i.id, m);
    return L({
        userId: m,
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
    return e.type !== y.d4z.PRIVATE_THREAD || n || a.e$(t, y.Plq.MANAGE_THREADS) ? (a.e$(t, y.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !a.e$(t, y.Plq.MANAGE_THREADS) ? a.Od(t, y.Plq.SEND_MESSAGES) : a.$e(t, y.Plq.SEND_MESSAGES)) : a.Od(t, y.Plq.SEND_MESSAGES)) : I;
}
function j(e, t) {
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
function U(e) {
    var t;
    return i().some(m.Z.getRoles(e.id), (e) => e.hoist && a.e$(e.permissions, y.Plq.ADMINISTRATOR)) ? void 0 : null != (t = e.ownerId) ? t : void 0;
}
function G(e, t, n, r) {
    if (null != t && e.isOwner(t)) return !0;
    if (null == n) return !1;
    let a = i()(m.Z.getRoles(e.id))
        .sortBy((e) => e.position)
        .map((e) => e.id)
        .value();
    return a.indexOf(n.id) > (null != r ? a.indexOf(r.id) : -1);
}
function B(e, t) {
    let n = h.ZP.getMember(e.id, t);
    if (null != n)
        return i()(m.Z.getRoles(e.id))
            .filter((e) => -1 !== n.roles.indexOf(e.id))
            .sortBy((e) => -e.position)
            .first();
}
function V(e, t) {
    return null == t.hoistRoleId ? null : m.Z.getRole(e.id, t.hoistRoleId);
}
function F(e) {
    return {
        id: e,
        type: o.BN.ROLE,
        allow: I,
        deny: I
    };
}
function Z(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: o, excludeGuildPermissions: s } = e;
    return a.e$(
        k({
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
function H(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === y.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = p.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? g.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = m.Z.getRole(n.id, n.getEveryoneRoleId());
    if (null == i) return !1;
    let o = i.permissions,
        s = r[n.id];
    return null != s && ((o = a.Od(o, s.deny)), (o = a.IH(o, s.allow))), a.e$(o, e);
}
function Y(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === y.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = p.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? g.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let o = m.Z.getRole(n.id, n.getEveryoneRoleId());
    return !(null == o || !a.e$(o.permissions, e) || i().some(r, (t) => a.e$(t.deny, e)));
}
