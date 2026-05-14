"use strict";
n.d(t, { we: () => y, _W: () => N, CA: () => T, zl: () => S });
var i,
    r = n(284009),
    s = n.n(r),
    a = n(853811),
    o = n(381438),
    l = n(485845),
    u = n(136722),
    c = n(155718),
    d = n(587895),
    _ = n(200662),
    f = n(95701),
    h = n(71393);
let p = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-05-age-restricted-application-commands",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E = n(392054),
    m = n(168186),
    g = n(240591),
    A = n(73510),
    I = n(652215),
    T =
        (((i = {})[(i.ALLOWED = 0)] = "ALLOWED"),
        (i[(i.NSFW_NOT_ALLOWED = 1)] = "NSFW_NOT_ALLOWED"),
        (i[(i.WRONG_COMMAND_TYPE = 2)] = "WRONG_COMMAND_TYPE"),
        (i[(i.PREDICATE_FAILED = 3)] = "PREDICATE_FAILED"),
        (i[(i.CONTEXT_NOT_ALLOWED = 4)] = "CONTEXT_NOT_ALLOWED"),
        (i[(i.MISSING_BASE_PERMISSIONS = 5)] = "MISSING_BASE_PERMISSIONS"),
        (i[(i.CHANNEL_DENIED = 6)] = "CHANNEL_DENIED"),
        (i[(i.USER_DENIED = 7)] = "USER_DENIED"),
        i);
function S(e, t, n) {
    let {
            context: i,
            commandTypes: r,
            allowNsfw: _,
            computedPermissions: T,
            userId: S,
            roleIds: C,
            isImpersonating: v,
            hasBaseAccessPermissions: O,
            hasSendMessagesPermission: R,
        } = t,
        {
            applicationAllowedForUser: b,
            applicationAllowedForChannel: D,
            isGuildInstalled: L,
            isUserInstalled: w,
            commandBotId: M,
        } = n;
    if (!r.includes(e.type)) return 2;
    if (
        (e.nsfw ||
            (function (e) {
                if (!p.getConfig({ location: "isApplicationAgeRestricted" }).enabled) return !1;
                let t = d.A.getApplication(e);
                return (
                    t?.contentClassification != null &&
                    (0, a.U1)({ type: a.fS.MINIMAL, data: t.contentClassification }) === o.Y.ADULT
                );
            })(e.applicationId)) &&
        !_
    )
        return 1;
    let P = null != i ? (0, g.ud)(i, M) : void 0;
    if (null != e.contexts) {
        if (null != P && !e.contexts.includes(P)) return 4;
    } else if (e.inputType === E.y$.BOT && ((!1 === e.dmPermission && P === c.OL.BOT_DM) || P === c.OL.PRIVATE_CHANNEL))
        return 4;
    if (null != e.predicate && i instanceof f.YB) {
        let t = h.A.getGuild(i.guild_id);
        if (!e.predicate({ channel: i, guild: t })) return 3;
    }
    if (e.applicationId === A.Ik.BUILT_IN) return 0;
    let x = null != i ? (0, g.wz)(i) : void 0;
    if (null == x || u.zy(T, I.xBc.ADMINISTRATOR) || (w && e.integration_types?.includes(l.b.USER_INSTALL))) return 0;
    if ((!O || !R) && L && (null == e.integration_types || e.integration_types.includes(l.b.GUILD_INSTALL))) return 5;
    if (i instanceof f.YB) {
        s()(void 0 !== D, "missing applicationAllowedForChannel");
        let t = N(e.permissions, i, x);
        if (!1 === t || (!0 !== t && !1 === D)) return 6;
    }
    let U = y(e.permissions, x, S, C, v);
    if (!0 === U) return 0;
    if (!1 === U) return 7;
    if (!1 === b) return 7;
    if (
        null != e.defaultMemberPermissions &&
        !(!u.aI(e.defaultMemberPermissions, m.Cq) && u.zy(T, e.defaultMemberPermissions))
    )
        return 7;
    return 0;
}
function N(e, t, n) {
    if (null == e) return null;
    let i = t.id;
    t.isThread() && (i = t.parent_id ?? t.id);
    let r = e[(0, _.Eu)(i, E.RA.CHANNEL)];
    if (null != r) return r.permission;
    let s = e[(0, _.Eu)((0, m.Ap)(n), E.RA.CHANNEL)];
    return null != s ? s.permission : null;
}
function y(e, t, n, i, r) {
    if (null == e) return null;
    if (!r) {
        let t = e[(0, _.Eu)(n, E.RA.USER)];
        if (null != t) return t.permission;
    }
    let s = !1;
    for (let t of i) {
        let n = e[(0, _.Eu)(t, E.RA.ROLE)];
        if (null != n) {
            if (n.permission) return !0;
            s = !0;
        }
    }
    if (s) return !1;
    let a = null != t ? e[(0, _.Eu)(t, E.RA.ROLE)] : null;
    return null != a ? a.permission : null;
}
