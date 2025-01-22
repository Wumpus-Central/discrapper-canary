r.d(n, {
    BT: function () {
        return V;
    },
    Hn: function () {
        return I;
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
    o = r.n(a),
    s = r(149765),
    l = r(911969),
    u = r(715903),
    c = r(69882),
    d = r(160404),
    f = r(41776),
    p = r(569471),
    h = r(131704),
    _ = r(314897),
    m = r(592125),
    g = r(271383),
    E = r(430824),
    v = r(594174),
    y = r(709054),
    b = r(981631);
let I = s.vB(0),
    T = s.$e(...o().values(b.Plq)),
    S = s.$e(b.Plq.CREATE_INSTANT_INVITE, b.Plq.CHANGE_NICKNAME, b.Plq.VIEW_CHANNEL, b.Plq.SEND_MESSAGES, b.Plq.EMBED_LINKS, b.Plq.ATTACH_FILES, b.Plq.READ_MESSAGE_HISTORY, b.Plq.MENTION_EVERYONE, b.Plq.USE_EXTERNAL_EMOJIS, b.Plq.USE_EXTERNAL_STICKERS, b.Plq.ADD_REACTIONS, b.Plq.CREATE_PUBLIC_THREADS, b.Plq.CREATE_PRIVATE_THREADS, b.Plq.SEND_MESSAGES_IN_THREADS, b.Plq.SEND_POLLS, b.Plq.CONNECT, b.Plq.SPEAK, b.Plq.USE_VAD, b.Plq.STREAM, b.Plq.USE_EMBEDDED_ACTIVITIES, b.Plq.USE_SOUNDBOARD, b.Plq.REQUEST_TO_SPEAK, b.Plq.USE_APPLICATION_COMMANDS, b.Plq.CREATE_GUILD_EXPRESSIONS, b.Plq.CREATE_EVENTS, b.Plq.USE_EXTERNAL_APPS),
    A = s.$e(b.Plq.VIEW_CHANNEL, b.Plq.READ_MESSAGE_HISTORY),
    C = s.$e(b.Plq.VIEW_CHANNEL, b.Plq.SEND_MESSAGES, b.Plq.CONNECT, b.Plq.SPEAK, b.Plq.STREAM, b.Plq.USE_EMBEDDED_ACTIVITIES, b.Plq.USE_EXTERNAL_APPS, b.Plq.USE_EXTERNAL_EMOJIS, b.Plq.USE_EXTERNAL_SOUNDS, b.Plq.USE_EXTERNAL_STICKERS, b.Plq.USE_SOUNDBOARD, b.Plq.USE_VAD),
    N = s.$e(b.Plq.VIEW_CHANNEL, b.Plq.READ_MESSAGE_HISTORY),
    R = s.$e(b.Plq.VIEW_CHANNEL, b.Plq.READ_MESSAGE_HISTORY, b.Plq.CHANGE_NICKNAME),
    O = s.$e(b.Plq.MANAGE_GUILD, b.Plq.MANAGE_ROLES, b.Plq.ADMINISTRATOR, b.Plq.BAN_MEMBERS, b.Plq.MANAGE_NICKNAMES, b.Plq.CREATE_GUILD_EXPRESSIONS, b.Plq.MANAGE_GUILD_EXPRESSIONS, b.Plq.MANAGE_WEBHOOKS, b.Plq.VIEW_AUDIT_LOG);
function D(e, n, r) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (i && n.mfaLevel === b.BpS.ELEVATED && r === _.default.getId()) {
        var a;
        !(null === (a = v.default.getCurrentUser()) || void 0 === a ? void 0 : a.mfaEnabled) && (e = s.Od(e, b.TC2));
    }
    return e;
}
function x(e, n, r, i) {
    let a = i[e];
    if ((null != a && ((r = s.Od(r, a.deny)), (r = s.IH(r, a.allow))), null != n)) {
        let e = I,
            a = I;
        for (let r = 0; r < n.roles.length; r++) {
            let o = i[n.roles[r]];
            null != o && ((e = s.IH(e, o.allow)), (a = s.IH(a, o.deny)));
        }
        (r = s.Od(r, a)), (r = s.IH(r, e));
        let o = i[n.userId];
        null != o && ((r = s.Od(r, o.deny)), (r = s.IH(r, o.allow)));
        let l = s.e$(r, b.Plq.ADMINISTRATOR);
        (0, u.EY)(n) && !l && (r = s.hX(r, R)), (0, c.b)(n) && !l && (r = s.hX(r, N));
    }
    return r;
}
function L(e) {
    let { userId: n, member: r, guild: i, overwrites: a, roles: o, checkElevated: l = !0, excludeGuildPermissions: u = !1, lurkerPermissionsMask: c = A } = e;
    if (u) return x(i.id, r, I, a);
    let d = (o =
            null != o
                ? {
                      ...E.Z.getRoles(i.id),
                      ...o
                  }
                : E.Z.getRoles(i.id))[i.getEveryoneRoleId()],
        p = null != d ? d.permissions : S;
    if (null != r)
        for (let e = 0; e < r.roles.length; e++) {
            let n = o[r.roles[e]];
            void 0 !== n && (p = s.IH(p, n.permissions));
        }
    return (p = s.e$(p, b.Plq.ADMINISTRATOR) ? T : x(i.id, r, p, a)), (f.Z.isLurking(i.id) || (null == r ? void 0 : r.isPending)) && (p = s.hX(p, c)), g.ZP.isCurrentUserGuest(i.id) && (p = s.hX(p, C)), D(p, i, n, l);
}
function w(e) {
    let n,
        { forceRoles: r, context: i, overwrites: a, roles: o, checkElevated: s = !0, excludeGuildPermissions: l } = e,
        u = A;
    if (i instanceof h.Sf) {
        var c;
        if (i.isScheduledForDeletion()) return I;
        if (h.Ec.has(i.type)) {
            let e = m.Z.getChannel(i.parent_id);
            return null == e
                ? I
                : M(
                      i,
                      w({
                          forceRoles: r,
                          context: e,
                          overwrites: a,
                          roles: o,
                          checkElevated: s,
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
    if (null == n) return I;
    let d = {
        userId: b.lds,
        nick: '',
        guildId: n.id,
        guildMemberAvatar: null,
        roles: y.default.keys(r),
        colorString: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
    };
    return L({
        userId: b.lds,
        member: d,
        guild: n,
        overwrites: a,
        roles: o,
        checkElevated: s,
        excludeGuildPermissions: l,
        lurkerPermissionsMask: u
    });
}
function P(e) {
    var n, r, i;
    let a,
        { user: o, context: s, overwrites: l, roles: u, checkElevated: c = !0, excludeGuildPermissions: f = !1 } = e;
    if (null == o) return I;
    let _ = 'string' == typeof o ? o : o.id,
        y = A;
    if (s instanceof h.Sf) {
        if (s.isScheduledForDeletion()) return I;
        if (h.Ec.has(s.type)) {
            let e = m.Z.getChannel(s.parent_id);
            if (null == e || e.isScheduledForDeletion()) return I;
            let n = _ === (null === (r = v.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) && p.Z.hasJoined(s.id);
            return M(
                s,
                P({
                    user: o,
                    context: e,
                    overwrites: l,
                    roles: u,
                    checkElevated: c,
                    excludeGuildPermissions: f
                }),
                n
            );
        }
        y = null !== (i = s.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : y;
        l =
            null != l
                ? {
                      ...s.permissionOverwrites,
                      ...l
                  }
                : s.permissionOverwrites;
        let e = s.getGuildId();
        a = null != e ? E.Z.getGuild(e) : null;
    } else (l = null != l ? l : {}), (a = s);
    if (null == a) return I;
    if (!(_ === (null === (n = v.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && d.Z.isViewingRoles(a.id)) && a.isOwner(_)) return D(T, a, _, c);
    let b = g.ZP.getMember(a.id, _);
    return L({
        userId: _,
        member: b,
        guild: a,
        overwrites: l,
        roles: u,
        checkElevated: c,
        excludeGuildPermissions: f,
        lurkerPermissionsMask: y
    });
}
function M(e, n, r) {
    return e.type !== b.d4z.PRIVATE_THREAD || r || s.e$(n, b.Plq.MANAGE_THREADS) ? (s.e$(n, b.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !s.e$(n, b.Plq.MANAGE_THREADS) ? s.Od(n, b.Plq.SEND_MESSAGES) : s.$e(n, b.Plq.SEND_MESSAGES)) : s.Od(n, b.Plq.SEND_MESSAGES)) : I;
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
                return !(null != r && s.fS(r.deny, n.deny) && s.fS(r.allow, n.allow)) && !0;
            })
    );
}
function U(e) {
    var n;
    return o().some(E.Z.getRoles(e.id), (e) => e.hoist && s.e$(e.permissions, b.Plq.ADMINISTRATOR)) ? void 0 : null !== (n = e.ownerId) && void 0 !== n ? n : void 0;
}
function B(e, n, r, i) {
    if (null != n && e.isOwner(n)) return !0;
    if (null == r) return !1;
    let a = o()(E.Z.getRoles(e.id))
        .sortBy((e) => e.position)
        .map((e) => e.id)
        .value();
    return a.indexOf(r.id) > (null != i ? a.indexOf(i.id) : -1);
}
function G(e, n) {
    let r = g.ZP.getMember(e.id, n);
    if (null != r)
        return o()(E.Z.getRoles(e.id))
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
        allow: I,
        deny: I
    };
}
function V(e) {
    let { permission: n, user: r, context: i, overwrites: a, roles: o, excludeGuildPermissions: l } = e;
    return s.e$(
        P({
            user: r,
            context: i,
            overwrites: a,
            roles: o,
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
        if (n.type === b.d4z.PRIVATE_THREAD || (h.Ec.has(n.type) && null == (n = m.Z.getChannel(n.parent_id)))) return !1;
        i = n.permissionOverwrites;
        let e = n.getGuildId();
        r = null != e ? E.Z.getGuild(e) : null;
    } else r = n;
    if (null == r) return !1;
    let a = E.Z.getRole(r.id, r.getEveryoneRoleId());
    if (null == a) return !1;
    let o = a.permissions,
        l = i[r.id];
    return null != l && ((o = s.Od(o, l.deny)), (o = s.IH(o, l.allow))), s.e$(o, e);
}
function H(e, n) {
    let r;
    let i = {};
    if (n instanceof h.Sf) {
        if (n.type === b.d4z.PRIVATE_THREAD || (h.Ec.has(n.type) && null == (n = m.Z.getChannel(n.parent_id)))) return !1;
        i = n.permissionOverwrites;
        let e = n.getGuildId();
        r = null != e ? E.Z.getGuild(e) : null;
    } else r = n;
    if (null == r) return !1;
    let a = E.Z.getRole(r.id, r.getEveryoneRoleId());
    return !(null == a || !s.e$(a.permissions, e) || o().some(i, (n) => s.e$(n.deny, e))) && !0;
}
