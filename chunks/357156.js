n.d(t, {
    Gw: () => h,
    Ob: () => _,
    XJ: () => p
}),
    n(47120);
var i = n(192379),
    r = n(149765),
    a = n(442837),
    s = n(601964),
    o = n(496675),
    l = n(594174),
    u = n(85243),
    c = n(231338);
let d = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1
    },
    f = (e, t, n, i) => {
        if (null == e) return !1;
        if (n) return !0;
        if ('creator_id' in e) return i && null != t && e.creator_id === t.id;
        if ('userId' in e) return i && null != t && e.userId === t.id;
        if ('user' in e) {
            var r;
            return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id;
        }
        return !1;
    },
    _ = (e) => {
        if (null == e) return [c.Pl.CREATE_EVENTS, c.Pl.MANAGE_EVENTS];
        let t = u.TT;
        return e.isGuildStageVoice() ? (t = u.LK) : e.isGuildVoice() && (t = u.AN), [r.$e(t, c.Pl.CREATE_EVENTS), r.$e(t, c.Pl.MANAGE_EVENTS)];
    },
    p = (e) => {
        let [t, n] = e instanceof s.ZP ? [c.Pl.CREATE_EVENTS, c.Pl.MANAGE_EVENTS] : _(e),
            [r, u, p, h] = (0, a.Wu)([o.Z], () => [o.Z.can(c.Pl.CREATE_GUILD_EXPRESSIONS, e), o.Z.can(c.Pl.MANAGE_GUILD_EXPRESSIONS, e), o.Z.can(t, e), o.Z.can(n, e)]),
            m = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
            g = i.useCallback((e) => f(e, m, u, r), [r, u, m]),
            E = i.useCallback((e) => f(e, m, h, p), [h, p, m]);
        return null == e
            ? d
            : {
                  canCreateExpressions: r,
                  canCreateGuildEvent: p,
                  canManageAllExpressions: u,
                  canManageAllEvents: h,
                  canManageGuildExpression: g,
                  canManageGuildEvent: E
              };
    },
    h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
            [i, r] = e instanceof s.ZP ? [c.Pl.CREATE_EVENTS, c.Pl.MANAGE_EVENTS] : _(e),
            a = t.can(c.Pl.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.Pl.MANAGE_GUILD_EXPRESSIONS, e),
            p = t.can(i, e),
            h = t.can(r, e),
            m = n.getCurrentUser();
        return null == e
            ? d
            : {
                  canCreateExpressions: a,
                  canCreateGuildEvent: p,
                  canManageAllExpressions: u,
                  canManageAllEvents: h,
                  canManageGuildExpression: (e) => f(e, m, u, a),
                  canManageGuildEvent: (e) => f(e, m, h, p)
              };
    };
