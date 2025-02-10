n.d(t, {
    Ft: () => g,
    ML: () => I,
    ZJ: () => y,
    mF: () => m
}),
    n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(373793),
    s = n(149765),
    o = n(911969),
    l = n(399860),
    u = n(131704),
    c = n(430824),
    d = n(895924),
    f = n(581364),
    _ = n(807169),
    p = n(689079),
    h = n(981631),
    m = (function (e) {
        return (e[(e.ALLOWED = 0)] = 'ALLOWED'), (e[(e.NSFW_NOT_ALLOWED = 1)] = 'NSFW_NOT_ALLOWED'), (e[(e.WRONG_COMMAND_TYPE = 2)] = 'WRONG_COMMAND_TYPE'), (e[(e.PREDICATE_FAILED = 3)] = 'PREDICATE_FAILED'), (e[(e.CONTEXT_NOT_ALLOWED = 4)] = 'CONTEXT_NOT_ALLOWED'), (e[(e.MISSING_BASE_PERMISSIONS = 5)] = 'MISSING_BASE_PERMISSIONS'), (e[(e.CHANNEL_DENIED = 6)] = 'CHANNEL_DENIED'), (e[(e.USER_DENIED = 7)] = 'USER_DENIED'), e;
    })({});
function g(e, t, n) {
    var i;
    let { context: l, commandTypes: m, allowNsfw: g, computedPermissions: T, userId: b, roleIds: S, isImpersonating: A, hasBaseAccessPermissions: N } = t,
        { applicationAllowedForUser: C, applicationAllowedForChannel: R, isGuildInstalled: O, isUserInstalled: D, commandBotId: L } = n;
    if (!m.includes(e.type)) return 2;
    if (e.nsfw && !g) return 1;
    let x = null != l ? (0, _.Vh)(l, L) : void 0;
    if (null != e.contexts) {
        if (null != x && !e.contexts.includes(x)) return 4;
    } else if (e.inputType === d.iw.BOT && ((!1 === e.dmPermission && x === o.D.BOT_DM) || x === o.D.PRIVATE_CHANNEL)) return 4;
    if (null != e.predicate && l instanceof u.Sf) {
        let t = c.Z.getGuild(l.guild_id);
        if (
            !e.predicate({
                channel: l,
                guild: t
            })
        )
            return 3;
    }
    if (e.applicationId === p.bi.BUILT_IN) return 0;
    let P = null != l ? (0, _.ny)(l) : void 0;
    if (null == P || s.e$(T, h.Plq.ADMINISTRATOR) || (D && (null === (i = e.integration_types) || void 0 === i ? void 0 : i.includes(a.Y.USER_INSTALL)))) return 0;
    if (!N && O && (null == e.integration_types || e.integration_types.includes(a.Y.GUILD_INSTALL))) return 5;
    if (l instanceof u.Sf) {
        r()(void 0 !== R, 'missing applicationAllowedForChannel');
        let t = y(e.permissions, l, P);
        if (v(t) || (!E(t) && v(R))) return 6;
    }
    let w = I(e.permissions, P, b, S, A);
    return E(w) ? 0 : v(w) ? 7 : v(C) || (null != e.defaultMemberPermissions && !(!s.fS(e.defaultMemberPermissions, f.BO) && s.e$(T, e.defaultMemberPermissions))) ? 7 : 0;
}
function E(e) {
    return !0 === e;
}
function v(e) {
    return !1 === e;
}
function y(e, t, n) {
    if (null == e) return null;
    let i = t.id;
    if (t.isThread()) {
        var r;
        i = null !== (r = t.parent_id) && void 0 !== r ? r : t.id;
    }
    let a = e[(0, l.rE)(i, d.Kw.CHANNEL)];
    if (null != a) return a.permission;
    let s = e[(0, l.rE)((0, f.bD)(n), d.Kw.CHANNEL)];
    return null != s ? s.permission : null;
}
function I(e, t, n, i, r) {
    if (null == e) return null;
    if (!r) {
        let t = e[(0, l.rE)(n, d.Kw.USER)];
        if (null != t) return t.permission;
    }
    let a = !1;
    for (let t of i) {
        let n = e[(0, l.rE)(t, d.Kw.ROLE)];
        if (null != n) {
            if (n.permission) return !0;
            a = !0;
        }
    }
    if (a) return !1;
    let s = null != t ? e[(0, l.rE)(t, d.Kw.ROLE)] : null;
    return null != s ? s.permission : null;
}
