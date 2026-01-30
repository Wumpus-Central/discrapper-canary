n.d(t, {
    $3: () => K,
    HJ: () => H,
    Ib: () => q,
    MJ: () => z,
    TJ: () => G,
    aH: () => k,
    cc: () => U,
    li: () => Y,
    qN: () => N,
    r: () => F,
    wO: () => B,
    wT: () => V,
    x3: () => T,
    xT: () => W,
    yC: () => L,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    o = n(155718),
    s = n(229527),
    l = n(316031),
    c = n(164956),
    u = n(857071),
    d = n(152007),
    f = n(95701),
    p = n(260509),
    _ = n(34457),
    h = n(961350),
    m = n(734057),
    g = n(696451),
    E = n(317525),
    y = n(71393),
    b = n(287809),
    O = n(7864),
    v = n(661191),
    A = n(652215);

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

function S(e) {
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
let T = a.iu(0),
    C = a.kg(...i().values(A.xBc)),
    N = a.kg(
        A.xBc.CREATE_INSTANT_INVITE,
        A.xBc.CHANGE_NICKNAME,
        A.xBc.VIEW_CHANNEL,
        A.xBc.SEND_MESSAGES,
        A.xBc.EMBED_LINKS,
        A.xBc.ATTACH_FILES,
        A.xBc.READ_MESSAGE_HISTORY,
        A.xBc.MENTION_EVERYONE,
        A.xBc.USE_EXTERNAL_EMOJIS,
        A.xBc.USE_EXTERNAL_STICKERS,
        A.xBc.ADD_REACTIONS,
        A.xBc.CREATE_PUBLIC_THREADS,
        A.xBc.CREATE_PRIVATE_THREADS,
        A.xBc.SEND_MESSAGES_IN_THREADS,
        A.xBc.SEND_POLLS,
        A.xBc.CONNECT,
        A.xBc.SPEAK,
        A.xBc.USE_VAD,
        A.xBc.STREAM,
        A.xBc.USE_EMBEDDED_ACTIVITIES,
        A.xBc.USE_SOUNDBOARD,
        A.xBc.REQUEST_TO_SPEAK,
        A.xBc.USE_APPLICATION_COMMANDS,
        A.xBc.CREATE_GUILD_EXPRESSIONS,
        A.xBc.CREATE_EVENTS,
        A.xBc.USE_EXTERNAL_APPS,
    ),
    w = a.kg(A.xBc.VIEW_CHANNEL, A.xBc.READ_MESSAGE_HISTORY),
    R = a.kg(
        A.xBc.VIEW_CHANNEL,
        A.xBc.SEND_MESSAGES,
        A.xBc.CONNECT,
        A.xBc.SPEAK,
        A.xBc.STREAM,
        A.xBc.USE_EMBEDDED_ACTIVITIES,
        A.xBc.USE_EXTERNAL_APPS,
        A.xBc.USE_EXTERNAL_EMOJIS,
        A.xBc.USE_EXTERNAL_SOUNDS,
        A.xBc.USE_EXTERNAL_STICKERS,
        A.xBc.USE_SOUNDBOARD,
        A.xBc.USE_VAD,
        A.xBc.SEND_MESSAGES_IN_THREADS,
        A.xBc.EMBED_LINKS,
        A.xBc.ATTACH_FILES,
        A.xBc.ADD_REACTIONS,
    ),
    P = a.kg(A.xBc.VIEW_CHANNEL, A.xBc.READ_MESSAGE_HISTORY),
    D = a.kg(A.xBc.VIEW_CHANNEL, A.xBc.READ_MESSAGE_HISTORY, A.xBc.CHANGE_NICKNAME),
    L = a.kg(
        A.xBc.MANAGE_GUILD,
        A.xBc.MANAGE_ROLES,
        A.xBc.ADMINISTRATOR,
        A.xBc.BAN_MEMBERS,
        A.xBc.MANAGE_NICKNAMES,
        A.xBc.CREATE_GUILD_EXPRESSIONS,
        A.xBc.MANAGE_GUILD_EXPRESSIONS,
        A.xBc.MANAGE_WEBHOOKS,
        A.xBc.VIEW_AUDIT_LOG,
    );

function x(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === A.EkJ.ELEVATED && n === h.default.getId()) {
        var i;
        (null == (i = b.default.getCurrentUser()) ? void 0 : i.mfaEnabled) || (e = a.TF(e, A.Lti));
    }
    return e;
}

function M(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = a.TF(n, i.deny)), (n = a.WQ(n, i.allow))), null != t)) {
        let e = T,
            i = T;
        for (let n = 0; n < t.roles.length; n++) {
            let o = r[t.roles[n]];
            null != o && ((e = a.WQ(e, o.allow)), (i = a.WQ(i, o.deny)));
        }
        (n = a.TF(n, i)), (n = a.WQ(n, e));
        let o = r[t.userId];
        null != o && ((n = a.TF(n, o.deny)), (n = a.WQ(n, o.allow)));
        let c = a.zy(n, A.xBc.ADMINISTRATOR);
        (0, s.TR)(t) && !c && (n = a.pb(n, D)), (0, l.Z)(t) && !c && (n = a.pb(n, P));
    }
    return n;
}

function j(e) {
    let {
        userId: t,
        member: n,
        guild: r,
        overwrites: i,
        roles: o,
        checkElevated: s = !0,
        excludeGuildPermissions: l = !1,
        lurkerPermissionsMask: c = w,
    } = e;
    if (l) return M(r.id, n, T, i);
    let d = (o = null != o ? S({}, E.A.getUnsafeMutableRoles(r.id), o) : E.A.getUnsafeMutableRoles(r.id))[(0, p.af)(r)],
        f = null != d ? d.permissions : N;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = o[n.roles[e]];
            void 0 !== t && (f = a.WQ(f, t.permissions));
        }
    return (
        (f = a.zy(f, A.xBc.ADMINISTRATOR) ? C : M(r.id, n, f, i)),
        (u.A.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (f = a.pb(f, c)),
        g.Ay.isCurrentUserGuest(r.id) && (f = a.pb(f, R)),
        x(f, r, t, s)
    );
}

function k(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: a, checkElevated: o = !0, excludeGuildPermissions: s } = e,
        l = w;
    if (r instanceof f.YB) {
        var c;
        if (r.isScheduledForDeletion()) return T;
        if (f.Le.has(r.type)) {
            let e = m.A.getChannel(r.parent_id);
            return null == e
                ? T
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
            (i = null != i ? S({}, r.permissionOverwrites, i) : r.permissionOverwrites);
        let e = r.getGuildId();
        t = null != e ? y.A.getGuild(e) : null;
    } else (i = null != i ? i : {}), (t = r);
    if (null == t) return T;
    let u = {
        userId: A.dJq,
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
    return j({
        userId: A.dJq,
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
    if (null == a) return T;
    let h = "string" == typeof a ? a : a.id,
        E = w;
    if (o instanceof f.YB) {
        if (o.isScheduledForDeletion()) return T;
        if (f.Le.has(o.type)) {
            let e = m.A.getChannel(o.parent_id);
            if (null == e || e.isScheduledForDeletion()) return T;
            let t = h === (null == (n = b.default.getCurrentUser()) ? void 0 : n.id) && d.A.hasJoined(o.id);
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
                g.Ay.isCurrentUserGuest(o.guild_id),
            );
        }
        (E = null != (r = o.computeLurkerPermissionsAllowList()) ? r : E),
            (s = null != s ? S({}, o.permissionOverwrites, s) : o.permissionOverwrites);
        let e = o.getGuildId();
        i = null != e ? y.A.getGuild(e) : null;
    } else (s = null != s ? s : {}), (i = o);
    if (null == i) return T;
    if (
        !(h === (null == (t = b.default.getCurrentUser()) ? void 0 : t.id) && c.A.isViewingRoles(i.id)) &&
        (0, p.bM)(i, h)
    )
        return x(C, i, h, u);
    let O = g.Ay.getMember(i.id, h);
    return j({
        userId: h,
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
    return e.type !== A.rbe.PRIVATE_THREAD || n || r || a.zy(t, A.xBc.MANAGE_THREADS)
        ? a.zy(t, A.xBc.SEND_MESSAGES_IN_THREADS)
            ? e.isLockedThread() && !a.zy(t, A.xBc.MANAGE_THREADS)
                ? a.TF(t, A.xBc.SEND_MESSAGES)
                : a.kg(t, A.xBc.SEND_MESSAGES)
            : a.TF(t, A.xBc.SEND_MESSAGES)
        : T;
}

function F(e, t) {
    if (f.Le.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let r = S({}, e.permissionOverwrites),
        i = S({}, t.permissionOverwrites);
    return (
        null == r[n] && (r[n] = W(n)),
        null == i[n] && (i[n] = W(n)),
        Object.keys(r).length === Object.keys(i).length &&
            !Object.keys(r).some((e) => {
                let t = r[e],
                    n = i[e];
                return !(null != n && a.aI(n.deny, t.deny) && a.aI(n.allow, t.allow));
            })
    );
}

function V(e) {
    var t;
    return i().some(E.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, _._m)(e, A.xBc.ADMINISTRATOR))
        ? void 0
        : null != (t = e.ownerId)
          ? t
          : void 0;
}

function B(e, t, n, r) {
    return !!(null != t && (0, p.bM)(e, t)) || (null != n && (null == r || (0, O.zA)(n, r)));
}

function H(e, t) {
    let n = g.Ay.getMember(e.id, t);
    if (null != n) return E.A.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
}

function Y(e, t) {
    return null == t.hoistRoleId ? null : E.A.getRole(e.id, t.hoistRoleId);
}

function W(e) {
    return {
        id: e,
        type: o.r2.ROLE,
        allow: T,
        deny: T,
    };
}

function K(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: o, excludeGuildPermissions: s } = e;
    return a.zy(
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

function z(e, t) {
    let n,
        r = {};
    if (t instanceof f.YB) {
        if (t.type === A.rbe.PRIVATE_THREAD || (f.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? y.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = E.A.getEveryoneRole(n).permissions,
        o = r[n.id];
    return null != o && ((i = a.TF(i, o.deny)), (i = a.WQ(i, o.allow))), a.zy(i, e);
}

function q(e, t) {
    let n,
        r = {};
    if (t instanceof f.YB) {
        if (t.type === A.rbe.PRIVATE_THREAD || (f.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? y.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let o = E.A.getEveryoneRole(n);
    return !(!(0, _._m)(o, e) || i().some(r, (t) => a.zy(t.deny, e)));
}
