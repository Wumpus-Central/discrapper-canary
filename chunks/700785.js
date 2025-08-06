(n.d(t, {
    BT: () => W,
    Hn: () => A,
    Hu: () => H,
    I0: () => j,
    Og: () => G,
    TP: () => C,
    Uu: () => K,
    e9: () => V,
    iJ: () => Z,
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
    o = n(149765),
    a = n(911969),
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
let A = o.vB(0),
    N = o.$e(...i().values(I.Plq)),
    C = o.$e(I.Plq.CREATE_INSTANT_INVITE, I.Plq.CHANGE_NICKNAME, I.Plq.VIEW_CHANNEL, I.Plq.SEND_MESSAGES, I.Plq.EMBED_LINKS, I.Plq.ATTACH_FILES, I.Plq.READ_MESSAGE_HISTORY, I.Plq.MENTION_EVERYONE, I.Plq.USE_EXTERNAL_EMOJIS, I.Plq.USE_EXTERNAL_STICKERS, I.Plq.ADD_REACTIONS, I.Plq.CREATE_PUBLIC_THREADS, I.Plq.CREATE_PRIVATE_THREADS, I.Plq.SEND_MESSAGES_IN_THREADS, I.Plq.SEND_POLLS, I.Plq.CONNECT, I.Plq.SPEAK, I.Plq.USE_VAD, I.Plq.STREAM, I.Plq.USE_EMBEDDED_ACTIVITIES, I.Plq.USE_SOUNDBOARD, I.Plq.REQUEST_TO_SPEAK, I.Plq.USE_APPLICATION_COMMANDS, I.Plq.CREATE_GUILD_EXPRESSIONS, I.Plq.CREATE_EVENTS, I.Plq.USE_EXTERNAL_APPS),
    R = o.$e(I.Plq.VIEW_CHANNEL, I.Plq.READ_MESSAGE_HISTORY),
    P = o.$e(I.Plq.VIEW_CHANNEL, I.Plq.SEND_MESSAGES, I.Plq.CONNECT, I.Plq.SPEAK, I.Plq.STREAM, I.Plq.USE_EMBEDDED_ACTIVITIES, I.Plq.USE_EXTERNAL_APPS, I.Plq.USE_EXTERNAL_EMOJIS, I.Plq.USE_EXTERNAL_SOUNDS, I.Plq.USE_EXTERNAL_STICKERS, I.Plq.USE_SOUNDBOARD, I.Plq.USE_VAD),
    w = o.$e(I.Plq.VIEW_CHANNEL, I.Plq.READ_MESSAGE_HISTORY),
    D = o.$e(I.Plq.VIEW_CHANNEL, I.Plq.READ_MESSAGE_HISTORY, I.Plq.CHANGE_NICKNAME),
    L = o.$e(I.Plq.MANAGE_GUILD, I.Plq.MANAGE_ROLES, I.Plq.ADMINISTRATOR, I.Plq.BAN_MEMBERS, I.Plq.MANAGE_NICKNAMES, I.Plq.CREATE_GUILD_EXPRESSIONS, I.Plq.MANAGE_GUILD_EXPRESSIONS, I.Plq.MANAGE_WEBHOOKS, I.Plq.VIEW_AUDIT_LOG);
function x(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === I.BpS.ELEVATED && n === h.default.getId()) {
        var i;
        (null == (i = y.default.getCurrentUser()) ? void 0 : i.mfaEnabled) || (e = o.Od(e, I.TC2));
    }
    return e;
}
function M(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = o.Od(n, i.deny)), (n = o.IH(n, i.allow))), null != t)) {
        let e = A,
            i = A;
        for (let n = 0; n < t.roles.length; n++) {
            let a = r[t.roles[n]];
            null != a && ((e = o.IH(e, a.allow)), (i = o.IH(i, a.deny)));
        }
        ((n = o.Od(n, i)), (n = o.IH(n, e)));
        let a = r[t.userId];
        null != a && ((n = o.Od(n, a.deny)), (n = o.IH(n, a.allow)));
        let c = o.e$(n, I.Plq.ADMINISTRATOR);
        ((0, s.EY)(t) && !c && (n = o.hX(n, D)), (0, l.b)(t) && !c && (n = o.hX(n, w)));
    }
    return n;
}
function k(e) {
    let { userId: t, member: n, guild: r, overwrites: i, roles: a, checkElevated: s = !0, excludeGuildPermissions: l = !1, lurkerPermissionsMask: c = R } = e;
    if (l) return M(r.id, n, A, i);
    let d = (a = null != a ? S({}, E.Z.getUnsafeMutableRoles(r.id), a) : E.Z.getUnsafeMutableRoles(r.id))[(0, _.lV)(r)],
        f = null != d ? d.permissions : C;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = a[n.roles[e]];
            void 0 !== t && (f = o.IH(f, t.permissions));
        }
    return ((f = o.e$(f, I.Plq.ADMINISTRATOR) ? N : M(r.id, n, f, i)), (u.Z.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (f = o.hX(f, c)), g.ZP.isCurrentUserGuest(r.id) && (f = o.hX(f, P)), x(f, r, t, s));
}
function j(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: o, checkElevated: a = !0, excludeGuildPermissions: s } = e,
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
                          roles: o,
                          checkElevated: a,
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
    return k({
        userId: I.lds,
        member: u,
        guild: t,
        overwrites: i,
        roles: o,
        checkElevated: a,
        excludeGuildPermissions: s,
        lurkerPermissionsMask: l
    });
}
function U(e) {
    var t, n, r;
    let i,
        { user: o, context: a, overwrites: s, roles: l, checkElevated: u = !0, excludeGuildPermissions: p = !1 } = e;
    if (null == o) return A;
    let h = 'string' == typeof o ? o : o.id,
        E = R;
    if (a instanceof f.Sf) {
        if (a.isScheduledForDeletion()) return A;
        if (f.Ec.has(a.type)) {
            let e = m.Z.getChannel(a.parent_id);
            if (null == e || e.isScheduledForDeletion()) return A;
            let t = h === (null == (n = y.default.getCurrentUser()) ? void 0 : n.id) && d.Z.hasJoined(a.id);
            return G(
                a,
                U({
                    user: o,
                    context: e,
                    overwrites: s,
                    roles: l,
                    checkElevated: u,
                    excludeGuildPermissions: p
                }),
                t
            );
        }
        ((E = null != (r = a.computeLurkerPermissionsAllowList()) ? r : E), (s = null != s ? S({}, a.permissionOverwrites, s) : a.permissionOverwrites));
        let e = a.getGuildId();
        i = null != e ? b.Z.getGuild(e) : null;
    } else ((s = null != s ? s : {}), (i = a));
    if (null == i) return A;
    if (!(h === (null == (t = y.default.getCurrentUser()) ? void 0 : t.id) && c.Z.isViewingRoles(i.id)) && (0, _.eM)(i, h)) return x(N, i, h, u);
    let O = g.ZP.getMember(i.id, h);
    return k({
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
    return e.type !== I.d4z.PRIVATE_THREAD || n || o.e$(t, I.Plq.MANAGE_THREADS) ? (o.e$(t, I.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !o.e$(t, I.Plq.MANAGE_THREADS) ? o.Od(t, I.Plq.SEND_MESSAGES) : o.$e(t, I.Plq.SEND_MESSAGES)) : o.Od(t, I.Plq.SEND_MESSAGES)) : A;
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
                return !(null != n && o.fS(n.deny, t.deny) && o.fS(n.allow, t.allow));
            })
    );
}
function Z(e) {
    var t;
    return i().some(E.Z.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, p.Fs)(e, I.Plq.ADMINISTRATOR)) ? void 0 : null != (t = e.ownerId) ? t : void 0;
}
function F(e, t, n, r) {
    return !!(null != t && (0, _.eM)(e, t)) || (null != n && (null == r || (0, O.C$)(n, r)));
}
function V(e, t) {
    let n = g.ZP.getMember(e.id, t);
    if (null != n) return E.Z.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}
function H(e, t) {
    return null == t.hoistRoleId ? null : E.Z.getRole(e.id, t.hoistRoleId);
}
function Y(e) {
    return {
        id: e,
        type: a.BN.ROLE,
        allow: A,
        deny: A
    };
}
function W(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: a, excludeGuildPermissions: s } = e;
    return o.e$(
        U({
            user: n,
            context: r,
            overwrites: i,
            roles: a,
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
        a = r[n.id];
    return (null != a && ((i = o.Od(i, a.deny)), (i = o.IH(i, a.allow))), o.e$(i, e));
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
    let a = E.Z.getEveryoneRole(n);
    return !(!(0, p.Fs)(a, e) || i().some(r, (t) => o.e$(t.deny, e)));
}
