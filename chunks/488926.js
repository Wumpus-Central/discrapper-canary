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
    r: () => V,
    wO: () => B,
    wT: () => F,
    x3: () => T,
    xT: () => W,
    yC: () => x,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    s = n(155718),
    o = n(229527),
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
    b = n(71393),
    y = n(287809),
    O = n(7864),
    A = n(661191),
    v = n(652215);

function S(e, t, n) {
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

function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let T = a.iu(0),
    C = a.kg(...i().values(v.xBc)),
    N = a.kg(
        v.xBc.CREATE_INSTANT_INVITE,
        v.xBc.CHANGE_NICKNAME,
        v.xBc.VIEW_CHANNEL,
        v.xBc.SEND_MESSAGES,
        v.xBc.EMBED_LINKS,
        v.xBc.ATTACH_FILES,
        v.xBc.READ_MESSAGE_HISTORY,
        v.xBc.MENTION_EVERYONE,
        v.xBc.USE_EXTERNAL_EMOJIS,
        v.xBc.USE_EXTERNAL_STICKERS,
        v.xBc.ADD_REACTIONS,
        v.xBc.CREATE_PUBLIC_THREADS,
        v.xBc.CREATE_PRIVATE_THREADS,
        v.xBc.SEND_MESSAGES_IN_THREADS,
        v.xBc.SEND_POLLS,
        v.xBc.CONNECT,
        v.xBc.SPEAK,
        v.xBc.USE_VAD,
        v.xBc.STREAM,
        v.xBc.USE_EMBEDDED_ACTIVITIES,
        v.xBc.USE_SOUNDBOARD,
        v.xBc.REQUEST_TO_SPEAK,
        v.xBc.USE_APPLICATION_COMMANDS,
        v.xBc.CREATE_GUILD_EXPRESSIONS,
        v.xBc.CREATE_EVENTS,
        v.xBc.USE_EXTERNAL_APPS,
    ),
    R = a.kg(v.xBc.VIEW_CHANNEL, v.xBc.READ_MESSAGE_HISTORY),
    w = a.kg(
        v.xBc.VIEW_CHANNEL,
        v.xBc.SEND_MESSAGES,
        v.xBc.CONNECT,
        v.xBc.SPEAK,
        v.xBc.STREAM,
        v.xBc.USE_EMBEDDED_ACTIVITIES,
        v.xBc.USE_EXTERNAL_APPS,
        v.xBc.USE_EXTERNAL_EMOJIS,
        v.xBc.USE_EXTERNAL_SOUNDS,
        v.xBc.USE_EXTERNAL_STICKERS,
        v.xBc.USE_SOUNDBOARD,
        v.xBc.USE_VAD,
        v.xBc.SEND_MESSAGES_IN_THREADS,
    ),
    P = a.kg(v.xBc.VIEW_CHANNEL, v.xBc.READ_MESSAGE_HISTORY),
    D = a.kg(v.xBc.VIEW_CHANNEL, v.xBc.READ_MESSAGE_HISTORY, v.xBc.CHANGE_NICKNAME),
    x = a.kg(
        v.xBc.MANAGE_GUILD,
        v.xBc.MANAGE_ROLES,
        v.xBc.ADMINISTRATOR,
        v.xBc.BAN_MEMBERS,
        v.xBc.MANAGE_NICKNAMES,
        v.xBc.CREATE_GUILD_EXPRESSIONS,
        v.xBc.MANAGE_GUILD_EXPRESSIONS,
        v.xBc.MANAGE_WEBHOOKS,
        v.xBc.VIEW_AUDIT_LOG,
    );

function L(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === v.EkJ.ELEVATED && n === h.default.getId()) {
        var i;
        (null == (i = y.default.getCurrentUser()) ? void 0 : i.mfaEnabled) || (e = a.TF(e, v.Lti));
    }
    return e;
}

function j(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = a.TF(n, i.deny)), (n = a.WQ(n, i.allow))), null != t)) {
        let e = T,
            i = T;
        for (let n = 0; n < t.roles.length; n++) {
            let s = r[t.roles[n]];
            null != s && ((e = a.WQ(e, s.allow)), (i = a.WQ(i, s.deny)));
        }
        (n = a.TF(n, i)), (n = a.WQ(n, e));
        let s = r[t.userId];
        null != s && ((n = a.TF(n, s.deny)), (n = a.WQ(n, s.allow)));
        let c = a.zy(n, v.xBc.ADMINISTRATOR);
        (0, o.TR)(t) && !c && (n = a.pb(n, D)), (0, l.Z)(t) && !c && (n = a.pb(n, P));
    }
    return n;
}

function M(e) {
    let {
        userId: t,
        member: n,
        guild: r,
        overwrites: i,
        roles: s,
        checkElevated: o = !0,
        excludeGuildPermissions: l = !1,
        lurkerPermissionsMask: c = R,
    } = e;
    if (l) return j(r.id, n, T, i);
    let d = (s = null != s ? I({}, E.A.getUnsafeMutableRoles(r.id), s) : E.A.getUnsafeMutableRoles(r.id))[(0, p.af)(r)],
        f = null != d ? d.permissions : N;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = s[n.roles[e]];
            void 0 !== t && (f = a.WQ(f, t.permissions));
        }
    return (
        (f = a.zy(f, v.xBc.ADMINISTRATOR) ? C : j(r.id, n, f, i)),
        (u.A.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (f = a.pb(f, c)),
        g.Ay.isCurrentUserGuest(r.id) && (f = a.pb(f, w)),
        L(f, r, t, o)
    );
}

function k(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: a, checkElevated: s = !0, excludeGuildPermissions: o } = e,
        l = R;
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
                          checkElevated: s,
                          excludeGuildPermissions: o,
                      }),
                      !1,
                      !1,
                  );
        }
        (l = null != (c = r.computeLurkerPermissionsAllowList()) ? c : l),
            (i = null != i ? I({}, r.permissionOverwrites, i) : r.permissionOverwrites);
        let e = r.getGuildId();
        t = null != e ? b.A.getGuild(e) : null;
    } else (i = null != i ? i : {}), (t = r);
    if (null == t) return T;
    let u = {
        userId: v.dJq,
        nick: "",
        guildId: t.id,
        guildMemberAvatar: null,
        roles: A.default.keys(n),
        colorString: null,
        colorStrings: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null,
    };
    return M({
        userId: v.dJq,
        member: u,
        guild: t,
        overwrites: i,
        roles: a,
        checkElevated: s,
        excludeGuildPermissions: o,
        lurkerPermissionsMask: l,
    });
}

function U(e) {
    var t, n, r;
    let i,
        { user: a, context: s, overwrites: o, roles: l, checkElevated: u = !0, excludeGuildPermissions: _ = !1 } = e;
    if (null == a) return T;
    let h = "string" == typeof a ? a : a.id,
        E = R;
    if (s instanceof f.YB) {
        if (s.isScheduledForDeletion()) return T;
        if (f.Le.has(s.type)) {
            let e = m.A.getChannel(s.parent_id);
            if (null == e || e.isScheduledForDeletion()) return T;
            let t = h === (null == (n = y.default.getCurrentUser()) ? void 0 : n.id) && d.A.hasJoined(s.id);
            return G(
                s,
                U({
                    user: a,
                    context: e,
                    overwrites: o,
                    roles: l,
                    checkElevated: u,
                    excludeGuildPermissions: _,
                }),
                t,
                g.Ay.isCurrentUserGuest(s.guild_id),
            );
        }
        (E = null != (r = s.computeLurkerPermissionsAllowList()) ? r : E),
            (o = null != o ? I({}, s.permissionOverwrites, o) : s.permissionOverwrites);
        let e = s.getGuildId();
        i = null != e ? b.A.getGuild(e) : null;
    } else (o = null != o ? o : {}), (i = s);
    if (null == i) return T;
    if (
        !(h === (null == (t = y.default.getCurrentUser()) ? void 0 : t.id) && c.A.isViewingRoles(i.id)) &&
        (0, p.bM)(i, h)
    )
        return L(C, i, h, u);
    let O = g.Ay.getMember(i.id, h);
    return M({
        userId: h,
        member: O,
        guild: i,
        overwrites: o,
        roles: l,
        checkElevated: u,
        excludeGuildPermissions: _,
        lurkerPermissionsMask: E,
    });
}

function G(e, t, n, r) {
    return e.type !== v.rbe.PRIVATE_THREAD || n || r || a.zy(t, v.xBc.MANAGE_THREADS)
        ? a.zy(t, v.xBc.SEND_MESSAGES_IN_THREADS)
            ? e.isLockedThread() && !a.zy(t, v.xBc.MANAGE_THREADS)
                ? a.TF(t, v.xBc.SEND_MESSAGES)
                : a.kg(t, v.xBc.SEND_MESSAGES)
            : a.TF(t, v.xBc.SEND_MESSAGES)
        : T;
}

function V(e, t) {
    if (f.Le.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let r = I({}, e.permissionOverwrites),
        i = I({}, t.permissionOverwrites);
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

function F(e) {
    var t;
    return i().some(E.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, _._m)(e, v.xBc.ADMINISTRATOR))
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
        type: s.r2.ROLE,
        allow: T,
        deny: T,
    };
}

function K(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: s, excludeGuildPermissions: o } = e;
    return a.zy(
        U({
            user: n,
            context: r,
            overwrites: i,
            roles: s,
            checkElevated: !0,
            excludeGuildPermissions: o,
        }),
        t,
    );
}

function z(e, t) {
    let n,
        r = {};
    if (t instanceof f.YB) {
        if (t.type === v.rbe.PRIVATE_THREAD || (f.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? b.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = E.A.getEveryoneRole(n).permissions,
        s = r[n.id];
    return null != s && ((i = a.TF(i, s.deny)), (i = a.WQ(i, s.allow))), a.zy(i, e);
}

function q(e, t) {
    let n,
        r = {};
    if (t instanceof f.YB) {
        if (t.type === v.rbe.PRIVATE_THREAD || (f.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))))
            return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? b.A.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let s = E.A.getEveryoneRole(n);
    return !(!(0, _._m)(s, e) || i().some(r, (t) => a.zy(t.deny, e)));
}
