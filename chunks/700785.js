(n.d(t, {
    BT: () => W,
    Hn: () => A,
    Hu: () => H,
    I0: () => j,
    Og: () => G,
    TP: () => C,
    Uu: () => K,
    e9: () => Z,
    iJ: () => V,
    o4: () => B,
    oz: () => z,
    r6: () => F,
    uB: () => U,
    we: () => Y,
    ym: () => L
}),
    n(388685));
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
    _ = n(601964),
    p = n(345162),
    h = n(314897),
    m = n(592125),
    g = n(271383),
    E = n(485386),
    b = n(430824),
    y = n(594174),
    O = n(625137),
    v = n(709054),
    I = n(981631);
function T(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
let A = a.vB(0),
    N = a.$e(...i().values(I.Plq)),
    C = a.$e(I.Plq.CREATE_INSTANT_INVITE, I.Plq.CHANGE_NICKNAME, I.Plq.VIEW_CHANNEL, I.Plq.SEND_MESSAGES, I.Plq.EMBED_LINKS, I.Plq.ATTACH_FILES, I.Plq.READ_MESSAGE_HISTORY, I.Plq.MENTION_EVERYONE, I.Plq.USE_EXTERNAL_EMOJIS, I.Plq.USE_EXTERNAL_STICKERS, I.Plq.ADD_REACTIONS, I.Plq.CREATE_PUBLIC_THREADS, I.Plq.CREATE_PRIVATE_THREADS, I.Plq.SEND_MESSAGES_IN_THREADS, I.Plq.SEND_POLLS, I.Plq.CONNECT, I.Plq.SPEAK, I.Plq.USE_VAD, I.Plq.STREAM, I.Plq.USE_EMBEDDED_ACTIVITIES, I.Plq.USE_SOUNDBOARD, I.Plq.REQUEST_TO_SPEAK, I.Plq.USE_APPLICATION_COMMANDS, I.Plq.CREATE_GUILD_EXPRESSIONS, I.Plq.CREATE_EVENTS, I.Plq.USE_EXTERNAL_APPS),
    R = a.$e(I.Plq.VIEW_CHANNEL, I.Plq.READ_MESSAGE_HISTORY),
    P = a.$e(I.Plq.VIEW_CHANNEL, I.Plq.SEND_MESSAGES, I.Plq.CONNECT, I.Plq.SPEAK, I.Plq.STREAM, I.Plq.USE_EMBEDDED_ACTIVITIES, I.Plq.USE_EXTERNAL_APPS, I.Plq.USE_EXTERNAL_EMOJIS, I.Plq.USE_EXTERNAL_SOUNDS, I.Plq.USE_EXTERNAL_STICKERS, I.Plq.USE_SOUNDBOARD, I.Plq.USE_VAD),
    w = a.$e(I.Plq.VIEW_CHANNEL, I.Plq.READ_MESSAGE_HISTORY),
    D = a.$e(I.Plq.VIEW_CHANNEL, I.Plq.READ_MESSAGE_HISTORY, I.Plq.CHANGE_NICKNAME),
    L = a.$e(I.Plq.MANAGE_GUILD, I.Plq.MANAGE_ROLES, I.Plq.ADMINISTRATOR, I.Plq.BAN_MEMBERS, I.Plq.MANAGE_NICKNAMES, I.Plq.CREATE_GUILD_EXPRESSIONS, I.Plq.MANAGE_GUILD_EXPRESSIONS, I.Plq.MANAGE_WEBHOOKS, I.Plq.VIEW_AUDIT_LOG);
function x(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === I.BpS.ELEVATED && n === h.default.getId()) {
        var i;
        (null == (i = y.default.getCurrentUser()) ? void 0 : i.mfaEnabled) || (e = a.Od(e, I.TC2));
    }
    return e;
}
function k(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = a.Od(n, i.deny)), (n = a.IH(n, i.allow))), null != t)) {
        let e = A,
            i = A;
        for (let n = 0; n < t.roles.length; n++) {
            let o = r[t.roles[n]];
            null != o && ((e = a.IH(e, o.allow)), (i = a.IH(i, o.deny)));
        }
        ((n = a.Od(n, i)), (n = a.IH(n, e)));
        let o = r[t.userId];
        null != o && ((n = a.Od(n, o.deny)), (n = a.IH(n, o.allow)));
        let c = a.e$(n, I.Plq.ADMINISTRATOR);
        ((0, s.EY)(t) && !c && (n = a.hX(n, D)), (0, l.b)(t) && !c && (n = a.hX(n, w)));
    }
    return n;
}
function M(e) {
    let { userId: t, member: n, guild: r, overwrites: i, roles: o, checkElevated: s = !0, excludeGuildPermissions: l = !1, lurkerPermissionsMask: c = R } = e;
    if (l) return k(r.id, n, A, i);
    let d = (o = null != o ? S({}, E.Z.getUnsafeMutableRoles(r.id), o) : E.Z.getUnsafeMutableRoles(r.id))[(0, _.lV)(r)],
        f = null != d ? d.permissions : C;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = o[n.roles[e]];
            void 0 !== t && (f = a.IH(f, t.permissions));
        }
    return ((f = a.e$(f, I.Plq.ADMINISTRATOR) ? N : k(r.id, n, f, i)), (u.Z.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (f = a.hX(f, c)), g.ZP.isCurrentUserGuest(r.id) && (f = a.hX(f, P)), x(f, r, t, s));
}
function j(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: a, checkElevated: o = !0, excludeGuildPermissions: s } = e,
        l = R;
    if (r instanceof f.Sf) {
        var c;
        if (r.isScheduledForDeletion()) return A;
        if (f.Ec.has(r.type)) {
            let e = m.Z.getChannel(r.parent_id);
            return null == e
                ? A
                : G(
                      r,
                      j({
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
        ((l = null != (c = r.computeLurkerPermissionsAllowList()) ? c : l), (i = null != i ? S({}, r.permissionOverwrites, i) : r.permissionOverwrites));
        let e = r.getGuildId();
        t = null != e ? b.Z.getGuild(e) : null;
    } else ((i = null != i ? i : {}), (t = r));
    if (null == t) return A;
    let u = {
        userId: I.lds,
        nick: '',
        guildId: t.id,
        guildMemberAvatar: null,
        roles: v.default.keys(n),
        colorString: null,
        colorStrings: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
    };
    return M({
        userId: I.lds,
        member: u,
        guild: t,
        overwrites: i,
        roles: a,
        checkElevated: o,
        excludeGuildPermissions: s,
        lurkerPermissionsMask: l
    });
}
function U(e) {
    var t, n, r;
    let i,
        { user: a, context: o, overwrites: s, roles: l, checkElevated: u = !0, excludeGuildPermissions: p = !1 } = e;
    if (null == a) return A;
    let h = 'string' == typeof a ? a : a.id,
        E = R;
    if (o instanceof f.Sf) {
        if (o.isScheduledForDeletion()) return A;
        if (f.Ec.has(o.type)) {
            let e = m.Z.getChannel(o.parent_id);
            if (null == e || e.isScheduledForDeletion()) return A;
            let t = h === (null == (n = y.default.getCurrentUser()) ? void 0 : n.id) && d.Z.hasJoined(o.id);
            return G(
                o,
                U({
                    user: a,
                    context: e,
                    overwrites: s,
                    roles: l,
                    checkElevated: u,
                    excludeGuildPermissions: p
                }),
                t
            );
        }
        ((E = null != (r = o.computeLurkerPermissionsAllowList()) ? r : E), (s = null != s ? S({}, o.permissionOverwrites, s) : o.permissionOverwrites));
        let e = o.getGuildId();
        i = null != e ? b.Z.getGuild(e) : null;
    } else ((s = null != s ? s : {}), (i = o));
    if (null == i) return A;
    if (!(h === (null == (t = y.default.getCurrentUser()) ? void 0 : t.id) && c.Z.isViewingRoles(i.id)) && (0, _.eM)(i, h)) return x(N, i, h, u);
    let O = g.ZP.getMember(i.id, h);
    return M({
        userId: h,
        member: O,
        guild: i,
        overwrites: s,
        roles: l,
        checkElevated: u,
        excludeGuildPermissions: p,
        lurkerPermissionsMask: E
    });
}
function G(e, t, n) {
    return e.type !== I.d4z.PRIVATE_THREAD || n || a.e$(t, I.Plq.MANAGE_THREADS) ? (a.e$(t, I.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !a.e$(t, I.Plq.MANAGE_THREADS) ? a.Od(t, I.Plq.SEND_MESSAGES) : a.$e(t, I.Plq.SEND_MESSAGES)) : a.Od(t, I.Plq.SEND_MESSAGES)) : A;
}
function B(e, t) {
    if (f.Ec.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let r = S({}, e.permissionOverwrites),
        i = S({}, t.permissionOverwrites);
    return (
        null == r[n] && (r[n] = Y(n)),
        null == i[n] && (i[n] = Y(n)),
        Object.keys(r).length === Object.keys(i).length &&
            !Object.keys(r).some((e) => {
                let t = r[e],
                    n = i[e];
                return !(null != n && a.fS(n.deny, t.deny) && a.fS(n.allow, t.allow));
            })
    );
}
function V(e) {
    var t;
    return i().some(E.Z.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, p.Fs)(e, I.Plq.ADMINISTRATOR)) ? void 0 : null != (t = e.ownerId) ? t : void 0;
}
function F(e, t, n, r) {
    return !!(null != t && (0, _.eM)(e, t)) || (null != n && (null == r || (0, O.C$)(n, r)));
}
function Z(e, t) {
    let n = g.ZP.getMember(e.id, t);
    if (null != n) return E.Z.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}
function H(e, t) {
    return null == t.hoistRoleId ? null : E.Z.getRole(e.id, t.hoistRoleId);
}
function Y(e) {
    return {
        id: e,
        type: o.BN.ROLE,
        allow: A,
        deny: A
    };
}
function W(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: o, excludeGuildPermissions: s } = e;
    return a.e$(
        U({
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
function K(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === I.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = m.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? b.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = E.Z.getEveryoneRole(n).permissions,
        o = r[n.id];
    return (null != o && ((i = a.Od(i, o.deny)), (i = a.IH(i, o.allow))), a.e$(i, e));
}
function z(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === I.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = m.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? b.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let o = E.Z.getEveryoneRole(n);
    return !(!(0, p.Fs)(o, e) || i().some(r, (t) => a.e$(t.deny, e)));
}
