n.d(t, {
    BT: () => W,
    Hn: () => C,
    Hu: () => H,
    I0: () => k,
    Og: () => G,
    TP: () => N,
    Uu: () => K,
    e9: () => V,
    iJ: () => F,
    o4: () => Z,
    oz: () => z,
    r6: () => B,
    uB: () => U,
    we: () => Y,
    ym: () => x,
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
    p = n(601964),
    _ = n(345162),
    m = n(314897),
    h = n(592125),
    g = n(271383),
    E = n(485386),
    b = n(430824),
    y = n(594174),
    O = n(625137),
    v = n(709054),
    S = n(981631);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
let C = a.vB(0),
    A = a.$e(...i().values(S.Plq)),
    N = a.$e(
        S.Plq.CREATE_INSTANT_INVITE,
        S.Plq.CHANGE_NICKNAME,
        S.Plq.VIEW_CHANNEL,
        S.Plq.SEND_MESSAGES,
        S.Plq.EMBED_LINKS,
        S.Plq.ATTACH_FILES,
        S.Plq.READ_MESSAGE_HISTORY,
        S.Plq.MENTION_EVERYONE,
        S.Plq.USE_EXTERNAL_EMOJIS,
        S.Plq.USE_EXTERNAL_STICKERS,
        S.Plq.ADD_REACTIONS,
        S.Plq.CREATE_PUBLIC_THREADS,
        S.Plq.CREATE_PRIVATE_THREADS,
        S.Plq.SEND_MESSAGES_IN_THREADS,
        S.Plq.SEND_POLLS,
        S.Plq.CONNECT,
        S.Plq.SPEAK,
        S.Plq.USE_VAD,
        S.Plq.STREAM,
        S.Plq.USE_EMBEDDED_ACTIVITIES,
        S.Plq.USE_SOUNDBOARD,
        S.Plq.REQUEST_TO_SPEAK,
        S.Plq.USE_APPLICATION_COMMANDS,
        S.Plq.CREATE_GUILD_EXPRESSIONS,
        S.Plq.CREATE_EVENTS,
        S.Plq.USE_EXTERNAL_APPS,
    ),
    P = a.$e(S.Plq.VIEW_CHANNEL, S.Plq.READ_MESSAGE_HISTORY),
    R = a.$e(
        S.Plq.VIEW_CHANNEL,
        S.Plq.SEND_MESSAGES,
        S.Plq.CONNECT,
        S.Plq.SPEAK,
        S.Plq.STREAM,
        S.Plq.USE_EMBEDDED_ACTIVITIES,
        S.Plq.USE_EXTERNAL_APPS,
        S.Plq.USE_EXTERNAL_EMOJIS,
        S.Plq.USE_EXTERNAL_SOUNDS,
        S.Plq.USE_EXTERNAL_STICKERS,
        S.Plq.USE_SOUNDBOARD,
        S.Plq.USE_VAD,
    ),
    w = a.$e(S.Plq.VIEW_CHANNEL, S.Plq.READ_MESSAGE_HISTORY),
    D = a.$e(S.Plq.VIEW_CHANNEL, S.Plq.READ_MESSAGE_HISTORY, S.Plq.CHANGE_NICKNAME),
    x = a.$e(
        S.Plq.MANAGE_GUILD,
        S.Plq.MANAGE_ROLES,
        S.Plq.ADMINISTRATOR,
        S.Plq.BAN_MEMBERS,
        S.Plq.MANAGE_NICKNAMES,
        S.Plq.CREATE_GUILD_EXPRESSIONS,
        S.Plq.MANAGE_GUILD_EXPRESSIONS,
        S.Plq.MANAGE_WEBHOOKS,
        S.Plq.VIEW_AUDIT_LOG,
    );
function L(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === S.BpS.ELEVATED && n === m.default.getId()) {
        var i;
        (null == (i = y.default.getCurrentUser()) ? void 0 : i.mfaEnabled) || (e = a.Od(e, S.TC2));
    }
    return e;
}
function j(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = a.Od(n, i.deny)), (n = a.IH(n, i.allow))), null != t)) {
        let e = C,
            i = C;
        for (let n = 0; n < t.roles.length; n++) {
            let o = r[t.roles[n]];
            null != o && ((e = a.IH(e, o.allow)), (i = a.IH(i, o.deny)));
        }
        (n = a.Od(n, i)), (n = a.IH(n, e));
        let o = r[t.userId];
        null != o && ((n = a.Od(n, o.deny)), (n = a.IH(n, o.allow)));
        let c = a.e$(n, S.Plq.ADMINISTRATOR);
        (0, s.EY)(t) && !c && (n = a.hX(n, D)), (0, l.b)(t) && !c && (n = a.hX(n, w));
    }
    return n;
}
function M(e) {
    let {
        userId: t,
        member: n,
        guild: r,
        overwrites: i,
        roles: o,
        checkElevated: s = !0,
        excludeGuildPermissions: l = !1,
        lurkerPermissionsMask: c = P,
    } = e;
    if (l) return j(r.id, n, C, i);
    let d = (o = null != o ? T({}, E.Z.getUnsafeMutableRoles(r.id), o) : E.Z.getUnsafeMutableRoles(r.id))[(0, p.lV)(r)],
        f = null != d ? d.permissions : N;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = o[n.roles[e]];
            void 0 !== t && (f = a.IH(f, t.permissions));
        }
    return (
        (f = a.e$(f, S.Plq.ADMINISTRATOR) ? A : j(r.id, n, f, i)),
        (u.Z.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (f = a.hX(f, c)),
        g.ZP.isCurrentUserGuest(r.id) && (f = a.hX(f, R)),
        L(f, r, t, s)
    );
}
function k(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: a, checkElevated: o = !0, excludeGuildPermissions: s } = e,
        l = P;
    if (r instanceof f.Sf) {
        var c;
        if (r.isScheduledForDeletion()) return C;
        if (f.Ec.has(r.type)) {
            let e = h.Z.getChannel(r.parent_id);
            return null == e
                ? C
                : G(
                      r,
                      k({
                          forceRoles: n,
                          context: e,
                          overwrites: i,
                          roles: a,
                          checkElevated: o,
                          excludeGuildPermissions: s,
                      }),
                      !1,
                      !1,
                  );
        }
        (l = null != (c = r.computeLurkerPermissionsAllowList()) ? c : l),
            (i = null != i ? T({}, r.permissionOverwrites, i) : r.permissionOverwrites);
        let e = r.getGuildId();
        t = null != e ? b.Z.getGuild(e) : null;
    } else (i = null != i ? i : {}), (t = r);
    if (null == t) return C;
    let u = {
        userId: S.lds,
        nick: "",
        guildId: t.id,
        guildMemberAvatar: null,
        roles: v.default.keys(n),
        colorString: null,
        colorStrings: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null,
    };
    return M({
        userId: S.lds,
        member: u,
        guild: t,
        overwrites: i,
        roles: a,
        checkElevated: o,
        excludeGuildPermissions: s,
        lurkerPermissionsMask: l,
    });
}
function U(e) {
    var t, n, r;
    let i,
        { user: a, context: o, overwrites: s, roles: l, checkElevated: u = !0, excludeGuildPermissions: _ = !1 } = e;
    if (null == a) return C;
    let m = "string" == typeof a ? a : a.id,
        E = P;
    if (o instanceof f.Sf) {
        if (o.isScheduledForDeletion()) return C;
        if (f.Ec.has(o.type)) {
            let e = h.Z.getChannel(o.parent_id);
            if (null == e || e.isScheduledForDeletion()) return C;
            let t = m === (null == (n = y.default.getCurrentUser()) ? void 0 : n.id) && d.Z.hasJoined(o.id);
            return G(
                o,
                U({
                    user: a,
                    context: e,
                    overwrites: s,
                    roles: l,
                    checkElevated: u,
                    excludeGuildPermissions: _,
                }),
                t,
                g.ZP.isCurrentUserGuest(o.guild_id),
            );
        }
        (E = null != (r = o.computeLurkerPermissionsAllowList()) ? r : E),
            (s = null != s ? T({}, o.permissionOverwrites, s) : o.permissionOverwrites);
        let e = o.getGuildId();
        i = null != e ? b.Z.getGuild(e) : null;
    } else (s = null != s ? s : {}), (i = o);
    if (null == i) return C;
    if (
        !(m === (null == (t = y.default.getCurrentUser()) ? void 0 : t.id) && c.Z.isViewingRoles(i.id)) &&
        (0, p.eM)(i, m)
    )
        return L(A, i, m, u);
    let O = g.ZP.getMember(i.id, m);
    return M({
        userId: m,
        member: O,
        guild: i,
        overwrites: s,
        roles: l,
        checkElevated: u,
        excludeGuildPermissions: _,
        lurkerPermissionsMask: E,
    });
}
function G(e, t, n, r) {
    return e.type !== S.d4z.PRIVATE_THREAD || n || r || a.e$(t, S.Plq.MANAGE_THREADS)
        ? a.e$(t, S.Plq.SEND_MESSAGES_IN_THREADS)
            ? e.isLockedThread() && !a.e$(t, S.Plq.MANAGE_THREADS)
                ? a.Od(t, S.Plq.SEND_MESSAGES)
                : a.$e(t, S.Plq.SEND_MESSAGES)
            : a.Od(t, S.Plq.SEND_MESSAGES)
        : C;
}
function Z(e, t) {
    if (f.Ec.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let r = T({}, e.permissionOverwrites),
        i = T({}, t.permissionOverwrites);
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
function F(e) {
    var t;
    return i().some(E.Z.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, _.Fs)(e, S.Plq.ADMINISTRATOR))
        ? void 0
        : null != (t = e.ownerId)
          ? t
          : void 0;
}
function B(e, t, n, r) {
    return !!(null != t && (0, p.eM)(e, t)) || (null != n && (null == r || (0, O.C$)(n, r)));
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
        type: o.BN.ROLE,
        allow: C,
        deny: C,
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
            excludeGuildPermissions: s,
        }),
        t,
    );
}
function K(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === S.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? b.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = E.Z.getEveryoneRole(n).permissions,
        o = r[n.id];
    return null != o && ((i = a.Od(i, o.deny)), (i = a.IH(i, o.allow))), a.e$(i, e);
}
function z(e, t) {
    let n,
        r = {};
    if (t instanceof f.Sf) {
        if (t.type === S.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? b.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let o = E.Z.getEveryoneRole(n);
    return !(!(0, _.Fs)(o, e) || i().some(r, (t) => a.e$(t.deny, e)));
}
