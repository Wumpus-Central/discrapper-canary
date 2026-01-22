n.d(t, {
    CA: () => m,
    _W: () => y,
    we: () => O,
    zl: () => g,
}),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(485845),
    s = n(136722),
    o = n(155718),
    l = n(200662),
    c = n(95701),
    u = n(71393),
    d = n(392054),
    f = n(168186),
    p = n(240591),
    _ = n(73510),
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

function g(e, t, n) {
    var r;
    let {
            context: l,
            commandTypes: m,
            allowNsfw: g,
            computedPermissions: A,
            userId: v,
            roleIds: S,
            isImpersonating: I,
            hasBaseAccessPermissions: T,
        } = t,
        {
            applicationAllowedForUser: C,
            applicationAllowedForChannel: N,
            isGuildInstalled: R,
            isUserInstalled: w,
            commandBotId: P,
        } = n;
    if (!m.includes(e.type)) return 2;
    if (e.nsfw && !g) return 1;
    let D = null != l ? (0, p.ud)(l, P) : void 0;
    if (null != e.contexts) {
        if (null != D && !e.contexts.includes(D)) return 4;
    } else if (e.inputType === d.y$.BOT && ((!1 === e.dmPermission && D === o.OL.BOT_DM) || D === o.OL.PRIVATE_CHANNEL))
        return 4;
    if (null != e.predicate && l instanceof c.YB) {
        let t = u.A.getGuild(l.guild_id);
        if (
            !e.predicate({
                channel: l,
                guild: t,
            })
        )
            return 3;
    }
    if (e.applicationId === _.Ik.BUILT_IN) return 0;
    let x = null != l ? (0, p.wz)(l) : void 0;
    if (
        null == x ||
        s.zy(A, h.xBc.ADMINISTRATOR) ||
        (w && (null == (r = e.integration_types) ? void 0 : r.includes(a.b.USER_INSTALL)))
    )
        return 0;
    if (!T && R && (null == e.integration_types || e.integration_types.includes(a.b.GUILD_INSTALL))) return 5;
    if (l instanceof c.YB) {
        i()(void 0 !== N, "missing applicationAllowedForChannel");
        let t = y(e.permissions, l, x);
        if (b(t) || (!E(t) && b(N))) return 6;
    }
    let L = O(e.permissions, x, v, S, I);
    if (E(L)) return 0;
    if (b(L) || b(C)) return 7;
    if (
        null != e.defaultMemberPermissions &&
        !(!s.aI(e.defaultMemberPermissions, f.Cq) && s.zy(A, e.defaultMemberPermissions))
    )
        return 7;
    return 0;
}

function E(e) {
    return !0 === e;
}

function b(e) {
    return !1 === e;
}

function y(e, t, n) {
    if (null == e) return null;
    let r = t.id;
    if (t.isThread()) {
        var i;
        r = null != (i = t.parent_id) ? i : t.id;
    }
    let a = e[(0, l.Eu)(r, d.RA.CHANNEL)];
    if (null != a) return a.permission;
    let s = e[(0, l.Eu)((0, f.Ap)(n), d.RA.CHANNEL)];
    return null != s ? s.permission : null;
}

function O(e, t, n, r, i) {
    if (null == e) return null;
    if (!i) {
        let t = e[(0, l.Eu)(n, d.RA.USER)];
        if (null != t) return t.permission;
    }
    let a = !1;
    for (let t of r) {
        let n = e[(0, l.Eu)(t, d.RA.ROLE)];
        if (null != n) {
            if (n.permission) return !0;
            a = !0;
        }
    }
    if (a) return !1;
    let s = null != t ? e[(0, l.Eu)(t, d.RA.ROLE)] : null;
    return null != s ? s.permission : null;
}
