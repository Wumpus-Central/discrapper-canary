var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(155718),
    l = n(547683),
    o = n(229527),
    d = n(316031),
    c = n(164956),
    u = n(857071),
    _ = n(152007),
    E = n(95701),
    A = n(260509),
    f = n(34457),
    h = n(46653),
    I = n(734057),
    p = n(696451),
    m = n(317525),
    T = n(71393),
    g = n(287809),
    S = n(7864),
    N = n(811091),
    C = n(652215),
    O = n(340837);
let R = a.iu(0),
    L = a.kg(...r().values(C.xBc)),
    y = a.kg(
        C.xBc.CREATE_INSTANT_INVITE,
        C.xBc.CHANGE_NICKNAME,
        C.xBc.VIEW_CHANNEL,
        C.xBc.SEND_MESSAGES,
        C.xBc.EMBED_LINKS,
        C.xBc.ATTACH_FILES,
        C.xBc.READ_MESSAGE_HISTORY,
        C.xBc.MENTION_EVERYONE,
        C.xBc.USE_EXTERNAL_EMOJIS,
        C.xBc.USE_EXTERNAL_STICKERS,
        C.xBc.ADD_REACTIONS,
        C.xBc.CREATE_PUBLIC_THREADS,
        C.xBc.CREATE_PRIVATE_THREADS,
        C.xBc.SEND_MESSAGES_IN_THREADS,
        C.xBc.SEND_POLLS,
        C.xBc.CONNECT,
        C.xBc.SPEAK,
        C.xBc.USE_VAD,
        C.xBc.STREAM,
        C.xBc.USE_EMBEDDED_ACTIVITIES,
        C.xBc.USE_SOUNDBOARD,
        C.xBc.REQUEST_TO_SPEAK,
        C.xBc.USE_APPLICATION_COMMANDS,
        C.xBc.CREATE_GUILD_EXPRESSIONS,
        C.xBc.CREATE_EVENTS,
        C.xBc.USE_EXTERNAL_APPS,
    ),
    D = a.kg(C.xBc.VIEW_CHANNEL, C.xBc.READ_MESSAGE_HISTORY),
    b = a.kg(
        C.xBc.VIEW_CHANNEL,
        C.xBc.SEND_MESSAGES,
        C.xBc.CONNECT,
        C.xBc.SPEAK,
        C.xBc.STREAM,
        C.xBc.USE_EMBEDDED_ACTIVITIES,
        C.xBc.USE_EXTERNAL_APPS,
        C.xBc.USE_EXTERNAL_EMOJIS,
        C.xBc.USE_EXTERNAL_SOUNDS,
        C.xBc.USE_EXTERNAL_STICKERS,
        C.xBc.USE_SOUNDBOARD,
        C.xBc.USE_VAD,
        C.xBc.SEND_MESSAGES_IN_THREADS,
        C.xBc.EMBED_LINKS,
        C.xBc.ATTACH_FILES,
        C.xBc.ADD_REACTIONS,
    ),
    v = a.kg(C.xBc.VIEW_CHANNEL, C.xBc.READ_MESSAGE_HISTORY),
    P = a.kg(C.xBc.VIEW_CHANNEL, C.xBc.READ_MESSAGE_HISTORY, C.xBc.CHANGE_NICKNAME),
    M = [O.D.IS_GUEST, ...o.rq].reduce((e, t) => e | t, 0),
    U = a.kg(
        C.xBc.MANAGE_GUILD,
        C.xBc.MANAGE_ROLES,
        C.xBc.ADMINISTRATOR,
        C.xBc.BAN_MEMBERS,
        C.xBc.MANAGE_NICKNAMES,
        C.xBc.CREATE_GUILD_EXPRESSIONS,
        C.xBc.MANAGE_GUILD_EXPRESSIONS,
        C.xBc.MANAGE_WEBHOOKS,
        C.xBc.VIEW_AUDIT_LOG,
        C.xBc.VIEW_GUILD_ANALYTICS,
    );
function w(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        i &&
            t.mfaLevel === C.EkJ.ELEVATED &&
            n === h.default.getId() &&
            !g.default.getCurrentUser()?.mfaEnabled &&
            (e = a.TF(e, C.Lti)),
        e
    );
}
function G(e, t, n, i) {
    let r = i[e];
    if ((null != r && ((n = a.TF(n, r.deny)), (n = a.WQ(n, r.allow))), null != t)) {
        let e = R,
            r = R;
        for (let n = 0; n < t.roles.length; n++) {
            let s = i[t.roles[n]];
            null != s && ((e = a.WQ(e, s.allow)), (r = a.WQ(r, s.deny)));
        }
        ((n = a.TF(n, r)), (n = a.WQ(n, e)));
        let s = i[t.userId];
        null != s && ((n = a.TF(n, s.deny)), (n = a.WQ(n, s.allow)));
        let l = a.zy(n, C.xBc.ADMINISTRATOR);
        ((0, o.TR)(t) && !l && (n = a.pb(n, P)), (0, d.Z)(t) && !l && (n = a.pb(n, v)));
    }
    return n;
}
function x(e) {
    let {
        userId: t,
        member: n,
        guild: i,
        overwrites: r,
        roles: s,
        checkElevated: l = !0,
        excludeGuildPermissions: o = !1,
        lurkerPermissionsMask: d = D,
    } = e;
    if (o) return G(i.id, n, R, r);
    let c = (s = null != s ? { ...m.A.getUnsafeMutableRoles(i.id), ...s } : m.A.getUnsafeMutableRoles(i.id))[
            (0, A.af)(i)
        ],
        _ = null != c ? c.permissions : y;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = s[n.roles[e]];
            void 0 !== t && (_ = a.WQ(_, t.permissions));
        }
    return (
        (_ = a.zy(_, C.xBc.ADMINISTRATOR) ? L : G(i.id, n, _, r)),
        (u.A.isLurking(i.id) || n?.isPending) && (_ = a.pb(_, d)),
        p.Ay.isCurrentUserGuest(i.id) && (_ = a.pb(_, b)),
        w(_, i, t, l)
    );
}
function k(e) {
    let t,
        { user: n, context: i, overwrites: r, roles: a, checkElevated: s = !0, excludeGuildPermissions: l = !1 } = e;
    if (null == n) return R;
    let o = "string" == typeof n ? n : n.id,
        d = D;
    if (i instanceof E.YB) {
        if (i.isScheduledForDeletion()) return R;
        if (E.Le.has(i.type)) {
            let e = I.A.getChannel(i.parent_id);
            if (null == e || e.isScheduledForDeletion()) return R;
            let t = o === g.default.getCurrentUser()?.id && _.A.hasJoined(i.id);
            return F(
                i,
                k({ user: n, context: e, overwrites: r, roles: a, checkElevated: s, excludeGuildPermissions: l }),
                t,
                p.Ay.isCurrentUserGuest(i.guild_id),
            );
        }
        ((d = i.computeLurkerPermissionsAllowList() ?? d),
            (r = null != r ? { ...i.permissionOverwrites, ...r } : i.permissionOverwrites));
        let e = i.getGuildId();
        t = null != e ? T.A.getGuild(e) : null;
    } else ((r = r ?? {}), (t = i));
    if (null == t) return R;
    if (!(o === g.default.getCurrentUser()?.id && c.A.isViewingRoles(t.id)) && (0, A.bM)(t, o)) return w(L, t, o, s);
    let u = p.Ay.getMember(t.id, o);
    return x({
        userId: o,
        member: u,
        guild: t,
        overwrites: r,
        roles: a,
        checkElevated: s,
        excludeGuildPermissions: l,
        lurkerPermissionsMask: d,
    });
}
function F(e, t, n, i) {
    return e.type === C.rbe.MEDIA_THREAD
        ? a.kg(C.xBc.READ_MESSAGE_HISTORY, C.xBc.VIEW_CHANNEL)
        : e.type !== C.rbe.PRIVATE_THREAD || n || i || a.zy(t, C.xBc.MANAGE_THREADS)
          ? a.zy(t, C.xBc.SEND_MESSAGES_IN_THREADS)
              ? e.isLockedThread() && !a.zy(t, C.xBc.MANAGE_THREADS)
                  ? a.TF(t, C.xBc.SEND_MESSAGES)
                  : a.kg(t, C.xBc.SEND_MESSAGES)
              : a.TF(t, C.xBc.SEND_MESSAGES)
          : R;
}
function B(e, t) {
    let { guild_id: n } = e,
        i = { ...e.permissionOverwrites };
    if ((null != n && null == i[n] && (i[n] = V(n)), null != t)) {
        let e = i[t];
        i[t] = { id: t, type: s.r2.MEMBER, allow: a.WQ(e?.allow ?? R, l.yZ), deny: a.TF(e?.deny ?? R, l.yZ) };
    }
    return i;
}
function V(e) {
    return { id: e, type: s.r2.ROLE, allow: R, deny: R };
}
n.d(
    t,
    {},
    {
        $3: function (e) {
            let { permission: t, user: n, context: i, overwrites: r, roles: s, excludeGuildPermissions: l } = e;
            return a.zy(
                k({ user: n, context: i, overwrites: r, roles: s, checkElevated: !0, excludeGuildPermissions: l }),
                t,
            );
        },
        HJ: function (e, t) {
            let n = p.Ay.getMember(e.id, t);
            if (null != n) return m.A.getSortedRoles(e.id).find((e) => n.roles.includes(e.id));
        },
        Ib: function (e, t) {
            let n,
                i = {};
            if (t instanceof E.YB) {
                if (t.type === C.rbe.PRIVATE_THREAD || (E.Le.has(t.type) && null == (t = I.A.getChannel(t.parent_id))))
                    return !1;
                i = t.permissionOverwrites;
                let e = t.getGuildId();
                n = null != e ? T.A.getGuild(e) : null;
            } else n = t;
            if (null == n) return !1;
            let s = m.A.getEveryoneRole(n);
            return !(!(0, f._m)(s, e) || r().some(i, (t) => a.zy(t.deny, e)));
        },
        MJ: function (e, t) {
            let n,
                i = {};
            if (t instanceof E.YB) {
                if (t.type === C.rbe.PRIVATE_THREAD || (E.Le.has(t.type) && null == (t = I.A.getChannel(t.parent_id))))
                    return !1;
                i = t.permissionOverwrites;
                let e = t.getGuildId();
                n = null != e ? T.A.getGuild(e) : null;
            } else n = t;
            if (null == n) return !1;
            let r = m.A.getEveryoneRole(n).permissions,
                s = i[n.id];
            return (null != s && ((r = a.TF(r, s.deny)), (r = a.WQ(r, s.allow))), a.zy(r, e));
        },
        Oj: M,
        TJ: F,
        aH: function e(t) {
            let n,
                {
                    forceRoles: i,
                    context: r,
                    overwrites: a,
                    roles: s,
                    checkElevated: l = !0,
                    excludeGuildPermissions: o,
                } = t,
                d = D;
            if (r instanceof E.YB) {
                if (r.isScheduledForDeletion()) return R;
                if (E.Le.has(r.type)) {
                    let t = I.A.getChannel(r.parent_id);
                    return null == t
                        ? R
                        : F(
                              r,
                              e({
                                  forceRoles: i,
                                  context: t,
                                  overwrites: a,
                                  roles: s,
                                  checkElevated: l,
                                  excludeGuildPermissions: o,
                              }),
                              !1,
                              !1,
                          );
                }
                ((d = r.computeLurkerPermissionsAllowList() ?? d),
                    (a = null != a ? { ...r.permissionOverwrites, ...a } : r.permissionOverwrites));
                let t = r.getGuildId();
                n = null != t ? T.A.getGuild(t) : null;
            } else ((a = a ?? {}), (n = r));
            return null == n
                ? R
                : x({
                      userId: "",
                      member: {
                          userId: "",
                          nick: "",
                          guildId: n.id,
                          guildMemberAvatar: null,
                          roles: N.default.keys(i),
                          colorString: null,
                          colorStrings: null,
                          hoistRoleId: null,
                          premiumSince: null,
                          isPending: !1,
                          joinedAt: new Date().toISOString(),
                          communicationDisabledUntil: null,
                      },
                      guild: n,
                      overwrites: a,
                      roles: s,
                      checkElevated: l,
                      excludeGuildPermissions: o,
                      lurkerPermissionsMask: d,
                  });
        },
        cc: k,
        li: function (e, t) {
            return null == t.hoistRoleId ? null : m.A.getRole(e.id, t.hoistRoleId);
        },
        qN: y,
        r: function (e, t, n) {
            if (E.Le.has(e.type)) return !0;
            let { guild_id: i } = e;
            if (null == t || null == i || i !== t.guild_id) return !1;
            let r = { ...e.permissionOverwrites },
                s = B(t, n);
            return (
                null == r[i] && (r[i] = V(i)),
                Object.keys(r).length === Object.keys(s).length &&
                    !Object.keys(r).some((e) => {
                        let t = r[e],
                            n = s[e];
                        return !(null != n && a.aI(n.deny, t.deny) && a.aI(n.allow, t.allow));
                    })
            );
        },
        s9: B,
        wO: function (e, t, n, i) {
            return !!(null != t && (0, A.bM)(e, t)) || (null != n && (null == i || (0, S.zA)(n, i)));
        },
        wT: function (e) {
            return r().some(m.A.getUnsafeMutableRoles(e.id), (e) => e.hoist && (0, f._m)(e, C.xBc.ADMINISTRATOR))
                ? void 0
                : (e.ownerId ?? void 0);
        },
        x3: R,
        xT: V,
        yC: U,
    },
);
