n.d(t, {
    Ft: () => g,
    ML: () => v,
    ZJ: () => y,
    mF: () => m
}),
    n(47120);
var r = n(512722),
    i = n.n(r),
    o = n(373793),
    a = n(149765),
    s = n(911969),
    l = n(399860),
    c = n(131704),
    u = n(430824),
    d = n(895924),
    f = n(581364),
    _ = n(807169),
    p = n(689079),
    h = n(981631),
    m = (function (e) {
        return (e[(e.ALLOWED = 0)] = 'ALLOWED'), (e[(e.NSFW_NOT_ALLOWED = 1)] = 'NSFW_NOT_ALLOWED'), (e[(e.WRONG_COMMAND_TYPE = 2)] = 'WRONG_COMMAND_TYPE'), (e[(e.PREDICATE_FAILED = 3)] = 'PREDICATE_FAILED'), (e[(e.CONTEXT_NOT_ALLOWED = 4)] = 'CONTEXT_NOT_ALLOWED'), (e[(e.MISSING_BASE_PERMISSIONS = 5)] = 'MISSING_BASE_PERMISSIONS'), (e[(e.CHANNEL_DENIED = 6)] = 'CHANNEL_DENIED'), (e[(e.USER_DENIED = 7)] = 'USER_DENIED'), e;
    })({});
function g(e, t, n) {
    var r;
    let { context: l, commandTypes: m, allowNsfw: g, computedPermissions: O, userId: I, roleIds: S, isImpersonating: T, hasBaseAccessPermissions: N } = t,
        { applicationAllowedForUser: A, applicationAllowedForChannel: C, isGuildInstalled: R, isUserInstalled: P, commandBotId: w } = n;
    if (!m.includes(e.type)) return 2;
    if (e.nsfw && !g) return 1;
    let D = null != l ? (0, _.Vh)(l, w) : void 0;
    if (null != e.contexts) {
        if (null != D && !e.contexts.includes(D)) return 4;
    } else if (e.inputType === d.iw.BOT && ((!1 === e.dmPermission && D === s.D.BOT_DM) || D === s.D.PRIVATE_CHANNEL)) return 4;
    if (null != e.predicate && l instanceof c.Sf) {
        let t = u.Z.getGuild(l.guild_id);
        if (
            !e.predicate({
                channel: l,
                guild: t
            })
        )
            return 3;
    }
    if (e.applicationId === p.bi.BUILT_IN) return 0;
    let L = null != l ? (0, _.ny)(l) : void 0;
    if (null == L || a.e$(O, h.Plq.ADMINISTRATOR) || (P && (null == (r = e.integration_types) ? void 0 : r.includes(o.Y.USER_INSTALL)))) return 0;
    if (!N && R && (null == e.integration_types || e.integration_types.includes(o.Y.GUILD_INSTALL))) return 5;
    if (l instanceof c.Sf) {
        i()(void 0 !== C, 'missing applicationAllowedForChannel');
        let t = y(e.permissions, l, L);
        if (b(t) || (!E(t) && b(C))) return 6;
    }
    let x = v(e.permissions, L, I, S, T);
    if (E(x)) return 0;
    if (b(x) || b(A)) return 7;
    if (null != e.defaultMemberPermissions && !(!a.fS(e.defaultMemberPermissions, f.BO) && a.e$(O, e.defaultMemberPermissions))) return 7;
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
    let o = e[(0, l.rE)(r, d.Kw.CHANNEL)];
    if (null != o) return o.permission;
    let a = e[(0, l.rE)((0, f.bD)(n), d.Kw.CHANNEL)];
    return null != a ? a.permission : null;
}
function v(e, t, n, r, i) {
    if (null == e) return null;
    if (!i) {
        let t = e[(0, l.rE)(n, d.Kw.USER)];
        if (null != t) return t.permission;
    }
    let o = !1;
    for (let t of r) {
        let n = e[(0, l.rE)(t, d.Kw.ROLE)];
        if (null != n) {
            if (n.permission) return !0;
            o = !0;
        }
    }
    if (o) return !1;
    let a = null != t ? e[(0, l.rE)(t, d.Kw.ROLE)] : null;
    return null != a ? a.permission : null;
}
