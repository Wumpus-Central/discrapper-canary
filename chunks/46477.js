n.d(t, { CA: () => p, _W: () => m, we: () => g, zl: () => T });
var i,
    r = n(284009),
    a = n.n(r),
    s = n(485845),
    l = n(136722),
    o = n(155718),
    d = n(457408),
    c = n(200662),
    u = n(95701),
    _ = n(71393),
    E = n(392054),
    A = n(168186),
    h = n(240591),
    I = n(73510),
    f = n(652215),
    p =
        (((i = {})[(i.ALLOWED = 0)] = "ALLOWED"),
        (i[(i.NSFW_NOT_ALLOWED = 1)] = "NSFW_NOT_ALLOWED"),
        (i[(i.WRONG_COMMAND_TYPE = 2)] = "WRONG_COMMAND_TYPE"),
        (i[(i.PREDICATE_FAILED = 3)] = "PREDICATE_FAILED"),
        (i[(i.CONTEXT_NOT_ALLOWED = 4)] = "CONTEXT_NOT_ALLOWED"),
        (i[(i.MISSING_BASE_PERMISSIONS = 5)] = "MISSING_BASE_PERMISSIONS"),
        (i[(i.CHANNEL_DENIED = 6)] = "CHANNEL_DENIED"),
        (i[(i.USER_DENIED = 7)] = "USER_DENIED"),
        i);
function T(e, t, n) {
    let {
            context: i,
            commandTypes: r,
            allowNsfw: c,
            computedPermissions: p,
            userId: T,
            roleIds: S,
            isImpersonating: N,
            hasBaseAccessPermissions: C,
            hasSendMessagesPermission: O,
        } = t,
        {
            applicationAllowedForUser: R,
            applicationAllowedForChannel: L,
            isGuildInstalled: y,
            isUserInstalled: D,
            commandBotId: v,
        } = n;
    if (!r.includes(e.type)) return 2;
    if ((e.nsfw || (0, d.A)(e.applicationId)) && !c) return 1;
    let b = null != i ? (0, h.ud)(i, v) : void 0;
    if (null != e.contexts) {
        if (null != b && !e.contexts.includes(b)) return 4;
    } else if (e.inputType === E.y$.BOT && ((!1 === e.dmPermission && b === o.OL.BOT_DM) || b === o.OL.PRIVATE_CHANNEL))
        return 4;
    if (null != e.predicate && i instanceof u.YB) {
        let t = _.A.getGuild(i.guild_id);
        if (!e.predicate({ channel: i, guild: t })) return 3;
    }
    if (e.applicationId === I.Ik.BUILT_IN) return 0;
    let M = null != i ? (0, h.wz)(i) : void 0;
    if (null == M || l.zy(p, f.xBc.ADMINISTRATOR) || (D && e.integration_types?.includes(s.b.USER_INSTALL))) return 0;
    if ((!C || !O) && y && (null == e.integration_types || e.integration_types.includes(s.b.GUILD_INSTALL))) return 5;
    if (i instanceof u.YB) {
        a()(void 0 !== L, "missing applicationAllowedForChannel");
        let t = m(e.permissions, i, M);
        if (!1 === t || (!0 !== t && !1 === L)) return 6;
    }
    let P = g(e.permissions, M, T, S, N);
    if (!0 === P) return 0;
    if (!1 === P) return 7;
    if (!1 === R) return 7;
    if (
        null != e.defaultMemberPermissions &&
        !(!l.aI(e.defaultMemberPermissions, A.Cq) && l.zy(p, e.defaultMemberPermissions))
    )
        return 7;
    return 0;
}
function m(e, t, n) {
    if (null == e) return null;
    let i = t.id;
    t.isThread() && (i = t.parent_id ?? t.id);
    let r = e[(0, c.Eu)(i, E.RA.CHANNEL)];
    if (null != r) return r.permission;
    let a = e[(0, c.Eu)((0, A.Ap)(n), E.RA.CHANNEL)];
    return null != a ? a.permission : null;
}
function g(e, t, n, i, r) {
    if (null == e) return null;
    if (!r) {
        let t = e[(0, c.Eu)(n, E.RA.USER)];
        if (null != t) return t.permission;
    }
    let a = !1;
    for (let t of i) {
        let n = e[(0, c.Eu)(t, E.RA.ROLE)];
        if (null != n) {
            if (n.permission) return !0;
            a = !0;
        }
    }
    if (a) return !1;
    let s = null != t ? e[(0, c.Eu)(t, E.RA.ROLE)] : null;
    return null != s ? s.permission : null;
}
