"use strict";
n.d(t, { CA: () => m, _W: () => A, we: () => I, zl: () => g });
var r,
    i = n(284009),
    s = n.n(i),
    a = n(485845),
    o = n(136722),
    l = n(155718),
    u = n(200662),
    d = n(95701),
    c = n(71393),
    _ = n(392054),
    f = n(168186),
    E = n(240591),
    h = n(73510),
    p = n(652215),
    m =
        (((r = {})[(r.ALLOWED = 0)] = "ALLOWED"),
        (r[(r.NSFW_NOT_ALLOWED = 1)] = "NSFW_NOT_ALLOWED"),
        (r[(r.WRONG_COMMAND_TYPE = 2)] = "WRONG_COMMAND_TYPE"),
        (r[(r.PREDICATE_FAILED = 3)] = "PREDICATE_FAILED"),
        (r[(r.CONTEXT_NOT_ALLOWED = 4)] = "CONTEXT_NOT_ALLOWED"),
        (r[(r.MISSING_BASE_PERMISSIONS = 5)] = "MISSING_BASE_PERMISSIONS"),
        (r[(r.CHANNEL_DENIED = 6)] = "CHANNEL_DENIED"),
        (r[(r.USER_DENIED = 7)] = "USER_DENIED"),
        r);
function g(e, t, n) {
    let {
            context: r,
            commandTypes: i,
            allowNsfw: u,
            computedPermissions: m,
            userId: g,
            roleIds: T,
            isImpersonating: S,
            hasBaseAccessPermissions: y,
            hasSendMessagesPermission: N,
        } = t,
        {
            applicationAllowedForUser: O,
            applicationAllowedForChannel: R,
            isGuildInstalled: v,
            isUserInstalled: C,
            commandBotId: b,
        } = n;
    if (!i.includes(e.type)) return 2;
    if (e.nsfw && !u) return 1;
    let D = null != r ? (0, E.ud)(r, b) : void 0;
    if (null != e.contexts) {
        if (null != D && !e.contexts.includes(D)) return 4;
    } else if (e.inputType === _.y$.BOT && ((!1 === e.dmPermission && D === l.OL.BOT_DM) || D === l.OL.PRIVATE_CHANNEL))
        return 4;
    if (null != e.predicate && r instanceof d.YB) {
        let t = c.A.getGuild(r.guild_id);
        if (!e.predicate({ channel: r, guild: t })) return 3;
    }
    if (e.applicationId === h.Ik.BUILT_IN) return 0;
    let L = null != r ? (0, E.wz)(r) : void 0;
    if (null == L || o.zy(m, p.xBc.ADMINISTRATOR) || (C && e.integration_types?.includes(a.b.USER_INSTALL))) return 0;
    if ((!y || !N) && v && (null == e.integration_types || e.integration_types.includes(a.b.GUILD_INSTALL))) return 5;
    if (r instanceof d.YB) {
        s()(void 0 !== R, "missing applicationAllowedForChannel");
        let t = A(e.permissions, r, L);
        if (!1 === t || (!0 !== t && !1 === R)) return 6;
    }
    let w = I(e.permissions, L, g, T, S);
    if (!0 === w) return 0;
    if (!1 === w) return 7;
    if (!1 === O) return 7;
    if (
        null != e.defaultMemberPermissions &&
        !(!o.aI(e.defaultMemberPermissions, f.Cq) && o.zy(m, e.defaultMemberPermissions))
    )
        return 7;
    return 0;
}
function A(e, t, n) {
    if (null == e) return null;
    let r = t.id;
    t.isThread() && (r = t.parent_id ?? t.id);
    let i = e[(0, u.Eu)(r, _.RA.CHANNEL)];
    if (null != i) return i.permission;
    let s = e[(0, u.Eu)((0, f.Ap)(n), _.RA.CHANNEL)];
    return null != s ? s.permission : null;
}
function I(e, t, n, r, i) {
    if (null == e) return null;
    if (!i) {
        let t = e[(0, u.Eu)(n, _.RA.USER)];
        if (null != t) return t.permission;
    }
    let s = !1;
    for (let t of r) {
        let n = e[(0, u.Eu)(t, _.RA.ROLE)];
        if (null != n) {
            if (n.permission) return !0;
            s = !0;
        }
    }
    if (s) return !1;
    let a = null != t ? e[(0, u.Eu)(t, _.RA.ROLE)] : null;
    return null != a ? a.permission : null;
}
