(n.d(t, {
    BT: () => H,
    Hn: () => T,
    Hu: () => F,
    I0: () => k,
    Og: () => j,
    TP: () => A,
    Uu: () => Y,
    e9: () => V,
    iJ: () => G,
    o4: () => U,
    oz: () => W,
    r6: () => B,
    uB: () => M,
    we: () => Z,
    ym: () => w
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
    p = n(314897),
    h = n(592125),
    m = n(271383),
    g = n(485386),
    E = n(430824),
    b = n(594174),
    y = n(709054),
    O = n(981631);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            }));
    }
    return e;
}
let T = a.vB(0),
    S = a.$e(...i().values(O.Plq)),
    A = a.$e(O.Plq.CREATE_INSTANT_INVITE, O.Plq.CHANGE_NICKNAME, O.Plq.VIEW_CHANNEL, O.Plq.SEND_MESSAGES, O.Plq.EMBED_LINKS, O.Plq.ATTACH_FILES, O.Plq.READ_MESSAGE_HISTORY, O.Plq.MENTION_EVERYONE, O.Plq.USE_EXTERNAL_EMOJIS, O.Plq.USE_EXTERNAL_STICKERS, O.Plq.ADD_REACTIONS, O.Plq.CREATE_PUBLIC_THREADS, O.Plq.CREATE_PRIVATE_THREADS, O.Plq.SEND_MESSAGES_IN_THREADS, O.Plq.SEND_POLLS, O.Plq.CONNECT, O.Plq.SPEAK, O.Plq.USE_VAD, O.Plq.STREAM, O.Plq.USE_EMBEDDED_ACTIVITIES, O.Plq.USE_SOUNDBOARD, O.Plq.REQUEST_TO_SPEAK, O.Plq.USE_APPLICATION_COMMANDS, O.Plq.CREATE_GUILD_EXPRESSIONS, O.Plq.CREATE_EVENTS, O.Plq.USE_EXTERNAL_APPS),
    N = a.$e(O.Plq.VIEW_CHANNEL, O.Plq.READ_MESSAGE_HISTORY),
    C = a.$e(O.Plq.VIEW_CHANNEL, O.Plq.SEND_MESSAGES, O.Plq.CONNECT, O.Plq.SPEAK, O.Plq.STREAM, O.Plq.USE_EMBEDDED_ACTIVITIES, O.Plq.USE_EXTERNAL_APPS, O.Plq.USE_EXTERNAL_EMOJIS, O.Plq.USE_EXTERNAL_SOUNDS, O.Plq.USE_EXTERNAL_STICKERS, O.Plq.USE_SOUNDBOARD, O.Plq.USE_VAD),
    R = a.$e(O.Plq.VIEW_CHANNEL, O.Plq.READ_MESSAGE_HISTORY),
    P = a.$e(O.Plq.VIEW_CHANNEL, O.Plq.READ_MESSAGE_HISTORY, O.Plq.CHANGE_NICKNAME),
    w = a.$e(O.Plq.MANAGE_GUILD, O.Plq.MANAGE_ROLES, O.Plq.ADMINISTRATOR, O.Plq.BAN_MEMBERS, O.Plq.MANAGE_NICKNAMES, O.Plq.CREATE_GUILD_EXPRESSIONS, O.Plq.MANAGE_GUILD_EXPRESSIONS, O.Plq.MANAGE_WEBHOOKS, O.Plq.VIEW_AUDIT_LOG);
function D(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === O.BpS.ELEVATED && n === p.default.getId()) {
        var i;
        (null == (i = b.default.getCurrentUser()) ? void 0 : i.mfaEnabled) || (e = a.Od(e, O.TC2));
    }
    return e;
}
function L(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = a.Od(n, i.deny)), (n = a.IH(n, i.allow))), null != t)) {
        let e = T,
            i = T;
        for (let n = 0; n < t.roles.length; n++) {
            let o = r[t.roles[n]];
            null != o && ((e = a.IH(e, o.allow)), (i = a.IH(i, o.deny)));
        }
        ((n = a.Od(n, i)), (n = a.IH(n, e)));
        let o = r[t.userId];
        null != o && ((n = a.Od(n, o.deny)), (n = a.IH(n, o.allow)));
        let c = a.e$(n, O.Plq.ADMINISTRATOR);
        ((0, s.EY)(t) && !c && (n = a.hX(n, P)), (0, l.b)(t) && !c && (n = a.hX(n, R)));
    }
    return n;
}
function x(e) {
    let { userId: t, member: n, guild: r, overwrites: i, roles: o, checkElevated: s = !0, excludeGuildPermissions: l = !1, lurkerPermissionsMask: c = N } = e;
    if (l) return L(r.id, n, T, i);
    let d = (o = null != o ? I({}, g.Z.getRoles(r.id), o) : g.Z.getRoles(r.id))[(0, _.lV)(r)],
        f = null != d ? d.permissions : A;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = o[n.roles[e]];
            void 0 !== t && (f = a.IH(f, t.permissions));
        }
    return ((f = a.e$(f, O.Plq.ADMINISTRATOR) ? S : L(r.id, n, f, i)), (u.Z.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (f = a.hX(f, c)), m.ZP.isCurrentUserGuest(r.id) && (f = a.hX(f, C)), D(f, r, t, s));
}
function k(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: a, checkElevated: o = !0, excludeGuildPermissions: s } = e,
        l = N;
    if (r instanceof f.Sf) {
        var c;
        if (r.isScheduledForDeletion()) return T;
        if (f.Ec.has(r.type)) {
            let e = h.Z.getChannel(r.parent_id);
            return null == e
                ? T
                : j(
                      r,
                      k({
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
        ((l = null != (c = r.computeLurkerPermissionsAllowList()) ? c : l), (i = null != i ? I({}, r.permissionOverwrites, i) : r.permissionOverwrites));
        let e = r.getGuildId();
        t = null != e ? E.Z.getGuild(e) : null;
    } else ((i = null != i ? i : {}), (t = r));
    if (null == t) return T;
    let u = {
        userId: O.lds,
        nick: '',
        guildId: t.id,
        guildMemberAvatar: null,
        roles: y.default.keys(n),
        colorString: null,
        colorStrings: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
    };
    return x({
        userId: O.lds,
        member: u,
        guild: t,
        overwrites: i,
        roles: a,
        checkElevated: o,
        excludeGuildPermissions: s,
        lurkerPermissionsMask: l
    });
}
function M(e) {
    var t, n, r;
    let i,
        { user: a, context: o, overwrites: s, roles: l, checkElevated: u = !0, excludeGuildPermissions: p = !1 } = e;
    if (null == a) return T;
    let g = 'string' == typeof a ? a : a.id,
        y = N;
    if (o instanceof f.Sf) {
        if (o.isScheduledForDeletion()) return T;
        if (f.Ec.has(o.type)) {
            let e = h.Z.getChannel(o.parent_id);
            if (null == e || e.isScheduledForDeletion()) return T;
            let t = g === (null == (n = b.default.getCurrentUser()) ? void 0 : n.id) && d.Z.hasJoined(o.id);
            return j(
                o,
                M({
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
        ((y = null != (r = o.computeLurkerPermissionsAllowList()) ? r : y), (s = null != s ? I({}, o.permissionOverwrites, s) : o.permissionOverwrites));
        let e = o.getGuildId();
        i = null != e ? E.Z.getGuild(e) : null;
    } else ((s = null != s ? s : {}), (i = o));
    if (null == i) return T;
    if (!(g === (null == (t = b.default.getCurrentUser()) ? void 0 : t.id) && c.Z.isViewingRoles(i.id)) && (0, _.eM)(i, g)) return D(S, i, g, u);
    let O = m.ZP.getMember(i.id, g);
    return x({
        userId: g,
        member: O,
        guild: i,
        overwrites: s,
        roles: l,
        checkElevated: u,
        excludeGuildPermissions: p,
        lurkerPermissionsMask: y
    });
}
function j(e, t, n) {
    return e.type !== O.d4z.PRIVATE_THREAD || n || a.e$(t, O.Plq.MANAGE_THREADS) ? (a.e$(t, O.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !a.e$(t, O.Plq.MANAGE_THREADS) ? a.Od(t, O.Plq.SEND_MESSAGES) : a.$e(t, O.Plq.SEND_MESSAGES)) : a.Od(t, O.Plq.SEND_MESSAGES)) : T;
}
function U(e, t) {
    if (f.Ec.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let r = I({}, e.permissionOverwrites),
        i = I({}, t.permissionOverwrites);
    return (
        null == r[n] && (r[n] = Z(n)),
        null == i[n] && (i[n] = Z(n)),
        Object.keys(r).length === Object.keys(i).length &&
            !Object.keys(r).some((e) => {
                let t = r[e],
                    n = i[e];
                return !(null != n && a.fS(n.deny, t.deny) && a.fS(n.allow, t.allow));
            })
    );
}
function G(e) {
    var t;
    return i().some(g.Z.getRoles(e.id), (e) => e.hoist && a.e$(e.permissions, O.Plq.ADMINISTRATOR)) ? void 0 : null != (t = e.ownerId) ? t : void 0;
}
function B(e, t, n, r) {
    if (null != t && (0, _.eM)(e, t)) return !0;
    if (null == n) return !1;
    let a = i()(g.Z.getRoles(e.id))
        .sortBy((e) => e.position)
        .map((e) => e.id)
        .value();
    return a.indexOf(n.id) > (null != r ? a.indexOf(r.id) : -1);
}
function V(e, t) {
    let n = m.ZP.getMember(e.id, t);
    if (null != n)
        return i()(g.Z.getRoles(e.id))
            .filter((e) => -1 !== n.roles.indexOf(e.id))
            .sortBy((e) => -e.position)
            .first();
}
function F(e, t) {
    return null == t.hoistRoleId ? null : g.Z.getRole(e.id, t.hoistRoleId);
}
function Z(e) {
    return {
        id: e,
        type: o.BN.ROLE,
        allow: T,
        deny: T
    };
}
function H(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: o, excludeGuildPermissions: s } = e;
    return a.e$(
        M({
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
function Y(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === O.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? E.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = g.Z.getEveryoneRole(n).permissions,
        o = r[n.id];
    return (null != o && ((i = a.Od(i, o.deny)), (i = a.IH(i, o.allow))), a.e$(i, e));
}
function W(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === O.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? E.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let o = g.Z.getEveryoneRole(n);
    return !(!a.e$(o.permissions, e) || i().some(r, (t) => a.e$(t.deny, e)));
}
