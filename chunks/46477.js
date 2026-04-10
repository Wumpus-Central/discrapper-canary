"use strict";
n.d(t, { CA: () => m, _W: () => I, we: () => T, zl: () => E });
var r = n(284009),
    i = n.n(r),
    s = n(485845),
    a = n(136722),
    o = n(155718),
    l = n(200662),
    u = n(95701),
    c = n(71393),
    d = n(392054),
    _ = n(168186),
    f = n(240591),
    p = n(73510),
    h = n(652215),
    m = (function (e) {
        return (
            (e[(e.ALLOWED = 0)] = "ALLOWED"),
            (e[(e.NSFW_NOT_ALLOWED = 1)] = "NSFW_NOT_ALLOWED"),
            (e[(e.WRONG_COMMAND_TYPE = 2)] = "WRONG_COMMAND_TYPE"),
            (e[(e.PREDICATE_FAILED = 3)] = "PREDICATE_FAILED"),
            (e[(e.CONTEXT_NOT_ALLOWED = 4)] = "CONTEXT_NOT_ALLOWED"),
            (e[(e.MISSING_BASE_PERMISSIONS = 5)] = "MISSING_BASE_PERMISSIONS"),
            (e[(e.CHANNEL_DENIED = 6)] = "CHANNEL_DENIED"),
            (e[(e.USER_DENIED = 7)] = "USER_DENIED"),
            e
        );
    })({});
function E(e, t, n) {
    let {
            context: r,
            commandTypes: l,
            allowNsfw: m,
            computedPermissions: E,
            userId: S,
            roleIds: y,
            isImpersonating: v,
            hasBaseAccessPermissions: N,
            hasSendMessagesPermission: C,
        } = t,
        {
            applicationAllowedForUser: R,
            applicationAllowedForChannel: O,
            isGuildInstalled: b,
            isUserInstalled: D,
            commandBotId: L,
        } = n;
    if (!l.includes(e.type)) return 2;
    if (e.nsfw && !m) return 1;
    let w = null != r ? (0, f.ud)(r, L) : void 0;
    if (null != e.contexts) {
        if (null != w && !e.contexts.includes(w)) return 4;
    } else if (e.inputType === d.y$.BOT && ((!1 === e.dmPermission && w === o.OL.BOT_DM) || w === o.OL.PRIVATE_CHANNEL))
        return 4;
    if (null != e.predicate && r instanceof u.YB) {
        let t = c.A.getGuild(r.guild_id);
        if (!e.predicate({ channel: r, guild: t })) return 3;
    }
    if (e.applicationId === p.Ik.BUILT_IN) return 0;
    let M = null != r ? (0, f.wz)(r) : void 0;
    if (null == M || a.zy(E, h.xBc.ADMINISTRATOR) || (D && e.integration_types?.includes(s.b.USER_INSTALL))) return 0;
    if ((!N || !C) && b && (null == e.integration_types || e.integration_types.includes(s.b.GUILD_INSTALL))) return 5;
    if (r instanceof u.YB) {
        i()(void 0 !== O, "missing applicationAllowedForChannel");
        let t = I(e.permissions, r, M);
        if (A(t) || (!g(t) && A(O))) return 6;
    }
    let x = T(e.permissions, M, S, y, v);
    if (g(x)) return 0;
    if (A(x) || A(R)) return 7;
    if (
        null != e.defaultMemberPermissions &&
        !(!a.aI(e.defaultMemberPermissions, _.Cq) && a.zy(E, e.defaultMemberPermissions))
    )
        return 7;
    return 0;
}
function g(e) {
    return !0 === e;
}
function A(e) {
    return !1 === e;
}
function I(e, t, n) {
    if (null == e) return null;
    let r = t.id;
    t.isThread() && (r = t.parent_id ?? t.id);
    let i = e[(0, l.Eu)(r, d.RA.CHANNEL)];
    if (null != i) return i.permission;
    let s = e[(0, l.Eu)((0, _.Ap)(n), d.RA.CHANNEL)];
    return null != s ? s.permission : null;
}
function T(e, t, n, r, i) {
    if (null == e) return null;
    if (!i) {
        let t = e[(0, l.Eu)(n, d.RA.USER)];
        if (null != t) return t.permission;
    }
    let s = !1;
    for (let t of r) {
        let n = e[(0, l.Eu)(t, d.RA.ROLE)];
        if (null != n) {
            if (n.permission) return !0;
            s = !0;
        }
    }
    if (s) return !1;
    let a = null != t ? e[(0, l.Eu)(t, d.RA.ROLE)] : null;
    return null != a ? a.permission : null;
}
