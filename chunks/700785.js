r.d(n, {
    BT: function () {
        return V;
    },
    Hn: function () {
        return b;
    },
    Hu: function () {
        return Z;
    },
    I0: function () {
        return w;
    },
    Og: function () {
        return M;
    },
    TP: function () {
        return S;
    },
    Uu: function () {
        return j;
    },
    e9: function () {
        return G;
    },
    iJ: function () {
        return U;
    },
    o4: function () {
        return k;
    },
    oz: function () {
        return H;
    },
    r6: function () {
        return B;
    },
    uB: function () {
        return P;
    },
    we: function () {
        return F;
    },
    ym: function () {
        return O;
    }
});
var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(149765),
    l = r(911969),
    u = r(715903),
    c = r(69882),
    d = r(160404),
    f = r(41776),
    _ = r(569471),
    h = r(131704),
    p = r(314897),
    m = r(592125),
    g = r(271383),
    E = r(430824),
    v = r(594174),
    I = r(709054),
    T = r(981631);
let b = o.vB(0),
    y = o.$e(...s().values(T.Plq)),
    S = o.$e(T.Plq.CREATE_INSTANT_INVITE, T.Plq.CHANGE_NICKNAME, T.Plq.VIEW_CHANNEL, T.Plq.SEND_MESSAGES, T.Plq.EMBED_LINKS, T.Plq.ATTACH_FILES, T.Plq.READ_MESSAGE_HISTORY, T.Plq.MENTION_EVERYONE, T.Plq.USE_EXTERNAL_EMOJIS, T.Plq.USE_EXTERNAL_STICKERS, T.Plq.ADD_REACTIONS, T.Plq.CREATE_PUBLIC_THREADS, T.Plq.CREATE_PRIVATE_THREADS, T.Plq.SEND_MESSAGES_IN_THREADS, T.Plq.SEND_POLLS, T.Plq.CONNECT, T.Plq.SPEAK, T.Plq.USE_VAD, T.Plq.STREAM, T.Plq.USE_EMBEDDED_ACTIVITIES, T.Plq.USE_SOUNDBOARD, T.Plq.REQUEST_TO_SPEAK, T.Plq.USE_APPLICATION_COMMANDS, T.Plq.CREATE_GUILD_EXPRESSIONS, T.Plq.CREATE_EVENTS, T.Plq.USE_EXTERNAL_APPS),
    A = o.$e(T.Plq.VIEW_CHANNEL, T.Plq.READ_MESSAGE_HISTORY),
    N = o.$e(T.Plq.VIEW_CHANNEL, T.Plq.SEND_MESSAGES, T.Plq.CONNECT, T.Plq.SPEAK, T.Plq.STREAM, T.Plq.USE_EMBEDDED_ACTIVITIES, T.Plq.USE_EXTERNAL_APPS, T.Plq.USE_EXTERNAL_EMOJIS, T.Plq.USE_EXTERNAL_SOUNDS, T.Plq.USE_EXTERNAL_STICKERS, T.Plq.USE_SOUNDBOARD, T.Plq.USE_VAD),
    C = o.$e(T.Plq.VIEW_CHANNEL, T.Plq.READ_MESSAGE_HISTORY),
    R = o.$e(T.Plq.VIEW_CHANNEL, T.Plq.READ_MESSAGE_HISTORY, T.Plq.CHANGE_NICKNAME),
    O = o.$e(T.Plq.MANAGE_GUILD, T.Plq.MANAGE_ROLES, T.Plq.ADMINISTRATOR, T.Plq.BAN_MEMBERS, T.Plq.MANAGE_NICKNAMES, T.Plq.CREATE_GUILD_EXPRESSIONS, T.Plq.MANAGE_GUILD_EXPRESSIONS, T.Plq.MANAGE_WEBHOOKS, T.Plq.VIEW_AUDIT_LOG);
function D(e, n, r) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (i && n.mfaLevel === T.BpS.ELEVATED && r === p.default.getId()) {
        var a;
        !(null === (a = v.default.getCurrentUser()) || void 0 === a ? void 0 : a.mfaEnabled) && (e = o.Od(e, T.TC2));
    }
    return e;
}
function L(e, n, r, i) {
    let a = i[e];
    if ((null != a && ((r = o.Od(r, a.deny)), (r = o.IH(r, a.allow))), null != n)) {
        let e = b,
            a = b;
        for (let r = 0; r < n.roles.length; r++) {
            let s = i[n.roles[r]];
            null != s && ((e = o.IH(e, s.allow)), (a = o.IH(a, s.deny)));
        }
        (r = o.Od(r, a)), (r = o.IH(r, e));
        let s = i[n.userId];
        null != s && ((r = o.Od(r, s.deny)), (r = o.IH(r, s.allow)));
        let l = o.e$(r, T.Plq.ADMINISTRATOR);
        (0, u.EY)(n) && !l && (r = o.hX(r, R)), (0, c.b)(n) && !l && (r = o.hX(r, C));
    }
    return r;
}
function x(e) {
    let { userId: n, member: r, guild: i, overwrites: a, roles: s, checkElevated: l = !0, excludeGuildPermissions: u = !1, lurkerPermissionsMask: c = A } = e;
    if (u) return L(i.id, r, b, a);
    let d = (s =
            null != s
                ? {
                      ...E.Z.getRoles(i.id),
                      ...s
                  }
                : E.Z.getRoles(i.id))[i.getEveryoneRoleId()],
        _ = null != d ? d.permissions : S;
    if (null != r)
        for (let e = 0; e < r.roles.length; e++) {
            let n = s[r.roles[e]];
            void 0 !== n && (_ = o.IH(_, n.permissions));
        }
    return (_ = o.e$(_, T.Plq.ADMINISTRATOR) ? y : L(i.id, r, _, a)), (f.Z.isLurking(i.id) || (null == r ? void 0 : r.isPending)) && (_ = o.hX(_, c)), g.ZP.isCurrentUserGuest(i.id) && (_ = o.hX(_, N)), D(_, i, n, l);
}
function w(e) {
    let n,
        { forceRoles: r, context: i, overwrites: a, roles: s, checkElevated: o = !0, excludeGuildPermissions: l } = e,
        u = A;
    if (i instanceof h.Sf) {
        var c;
        if (i.isScheduledForDeletion()) return b;
        if (h.Ec.has(i.type)) {
            let e = m.Z.getChannel(i.parent_id);
            return null == e
                ? b
                : M(
                      i,
                      w({
                          forceRoles: r,
                          context: e,
                          overwrites: a,
                          roles: s,
                          checkElevated: o,
                          excludeGuildPermissions: l
                      }),
                      !1
                  );
        }
        u = null !== (c = i.computeLurkerPermissionsAllowList()) && void 0 !== c ? c : u;
        a =
            null != a
                ? {
                      ...i.permissionOverwrites,
                      ...a
                  }
                : i.permissionOverwrites;
        let e = i.getGuildId();
        n = null != e ? E.Z.getGuild(e) : null;
    } else (a = null != a ? a : {}), (n = i);
    if (null == n) return b;
    let d = {
        userId: T.lds,
        nick: '',
        guildId: n.id,
        guildMemberAvatar: null,
        roles: I.default.keys(r),
        colorString: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
    };
    return x({
        userId: T.lds,
        member: d,
        guild: n,
        overwrites: a,
        roles: s,
        checkElevated: o,
        excludeGuildPermissions: l,
        lurkerPermissionsMask: u
    });
}
function P(e) {
    var n, r, i;
    let a,
        { user: s, context: o, overwrites: l, roles: u, checkElevated: c = !0, excludeGuildPermissions: f = !1 } = e;
    if (null == s) return b;
    let p = 'string' == typeof s ? s : s.id,
        I = A;
    if (o instanceof h.Sf) {
        if (o.isScheduledForDeletion()) return b;
        if (h.Ec.has(o.type)) {
            let e = m.Z.getChannel(o.parent_id);
            if (null == e || e.isScheduledForDeletion()) return b;
            let n = p === (null === (r = v.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) && _.Z.hasJoined(o.id);
            return M(
                o,
                P({
                    user: s,
                    context: e,
                    overwrites: l,
                    roles: u,
                    checkElevated: c,
                    excludeGuildPermissions: f
                }),
                n
            );
        }
        I = null !== (i = o.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : I;
        l =
            null != l
                ? {
                      ...o.permissionOverwrites,
                      ...l
                  }
                : o.permissionOverwrites;
        let e = o.getGuildId();
        a = null != e ? E.Z.getGuild(e) : null;
    } else (l = null != l ? l : {}), (a = o);
    if (null == a) return b;
    if (!(p === (null === (n = v.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && d.Z.isViewingRoles(a.id)) && a.isOwner(p)) return D(y, a, p, c);
    let T = g.ZP.getMember(a.id, p);
    return x({
        userId: p,
        member: T,
        guild: a,
        overwrites: l,
        roles: u,
        checkElevated: c,
        excludeGuildPermissions: f,
        lurkerPermissionsMask: I
    });
}
function M(e, n, r) {
    return e.type !== T.d4z.PRIVATE_THREAD || r || o.e$(n, T.Plq.MANAGE_THREADS) ? (o.e$(n, T.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !o.e$(n, T.Plq.MANAGE_THREADS) ? o.Od(n, T.Plq.SEND_MESSAGES) : o.$e(n, T.Plq.SEND_MESSAGES)) : o.Od(n, T.Plq.SEND_MESSAGES)) : b;
}
function k(e, n) {
    if (h.Ec.has(e.type)) return !0;
    let { guild_id: r } = e;
    if (null == n || null == r || r !== n.guild_id) return !1;
    let i = { ...e.permissionOverwrites },
        a = { ...n.permissionOverwrites };
    return (
        null == i[r] && (i[r] = F(r)),
        null == a[r] && (a[r] = F(r)),
        Object.keys(i).length === Object.keys(a).length &&
            !Object.keys(i).some((e) => {
                let n = i[e],
                    r = a[e];
                return !(null != r && o.fS(r.deny, n.deny) && o.fS(r.allow, n.allow)) && !0;
            })
    );
}
function U(e) {
    var n;
    return s().some(E.Z.getRoles(e.id), (e) => e.hoist && o.e$(e.permissions, T.Plq.ADMINISTRATOR)) ? void 0 : null !== (n = e.ownerId) && void 0 !== n ? n : void 0;
}
function B(e, n, r, i) {
    if (null != n && e.isOwner(n)) return !0;
    if (null == r) return !1;
    let a = s()(E.Z.getRoles(e.id))
        .sortBy((e) => e.position)
        .map((e) => e.id)
        .value();
    return a.indexOf(r.id) > (null != i ? a.indexOf(i.id) : -1);
}
function G(e, n) {
    let r = g.ZP.getMember(e.id, n);
    if (null != r)
        return s()(E.Z.getRoles(e.id))
            .filter((e) => -1 !== r.roles.indexOf(e.id))
            .sortBy((e) => -e.position)
            .first();
}
function Z(e, n) {
    return null == n.hoistRoleId ? null : E.Z.getRole(e.id, n.hoistRoleId);
}
function F(e) {
    return {
        id: e,
        type: l.BN.ROLE,
        allow: b,
        deny: b
    };
}
function V(e) {
    let { permission: n, user: r, context: i, overwrites: a, roles: s, excludeGuildPermissions: l } = e;
    return o.e$(
        P({
            user: r,
            context: i,
            overwrites: a,
            roles: s,
            checkElevated: !0,
            excludeGuildPermissions: l
        }),
        n
    );
}
function j(e, n) {
    let r;
    let i = {};
    if (n instanceof h.Sf) {
        if (n.type === T.d4z.PRIVATE_THREAD || (h.Ec.has(n.type) && null == (n = m.Z.getChannel(n.parent_id)))) return !1;
        i = n.permissionOverwrites;
        let e = n.getGuildId();
        r = null != e ? E.Z.getGuild(e) : null;
    } else r = n;
    if (null == r) return !1;
    let a = E.Z.getRole(r.id, r.getEveryoneRoleId());
    if (null == a) return !1;
    let s = a.permissions,
        l = i[r.id];
    return null != l && ((s = o.Od(s, l.deny)), (s = o.IH(s, l.allow))), o.e$(s, e);
}
function H(e, n) {
    let r;
    let i = {};
    if (n instanceof h.Sf) {
        if (n.type === T.d4z.PRIVATE_THREAD || (h.Ec.has(n.type) && null == (n = m.Z.getChannel(n.parent_id)))) return !1;
        i = n.permissionOverwrites;
        let e = n.getGuildId();
        r = null != e ? E.Z.getGuild(e) : null;
    } else r = n;
    if (null == r) return !1;
    let a = E.Z.getRole(r.id, r.getEveryoneRoleId());
    return !(null == a || !o.e$(a.permissions, e) || s().some(i, (n) => o.e$(n.deny, e))) && !0;
}
