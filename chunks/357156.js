n.d(t, {
    Gw: () => h,
    Ob: () => _,
    XJ: () => p
}),
    n(47120);
var r = n(192379),
    i = n(149765),
    o = n(442837),
    a = n(601964),
    s = n(496675),
    l = n(594174),
    c = n(85243),
    u = n(231338);
let d = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1
    },
    f = (e, t, n, r) => {
        if (null == e) return !1;
        if (n) return !0;
        if ('creator_id' in e) return r && null != t && e.creator_id === t.id;
        if ('userId' in e) return r && null != t && e.userId === t.id;
        if ('user' in e) {
            var i;
            return r && null != t && (null == (i = e.user) ? void 0 : i.id) === t.id;
        }
        return !1;
    },
    _ = (e) => {
        if (null == e) return [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS];
        let t = c.TT;
        return e.isGuildStageVoice() ? (t = c.LK) : e.isGuildVoice() && (t = c.AN), [i.$e(t, u.Pl.CREATE_EVENTS), i.$e(t, u.Pl.MANAGE_EVENTS)];
    },
    p = (e) => {
        let [t, n] = e instanceof a.ZP ? [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS] : _(e),
            [i, c, p, h] = (0, o.Wu)([s.Z], () => [s.Z.can(u.Pl.CREATE_GUILD_EXPRESSIONS, e), s.Z.can(u.Pl.MANAGE_GUILD_EXPRESSIONS, e), s.Z.can(t, e), s.Z.can(n, e)]),
            m = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
            g = r.useCallback((e) => f(e, m, c, i), [i, c, m]),
            E = r.useCallback((e) => f(e, m, h, p), [h, p, m]);
        return null == e
            ? d
            : {
                  canCreateExpressions: i,
                  canCreateGuildEvent: p,
                  canManageAllExpressions: c,
                  canManageAllEvents: h,
                  canManageGuildExpression: g,
                  canManageGuildEvent: E
              };
    },
    h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
            [r, i] = e instanceof a.ZP ? [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS] : _(e),
            o = t.can(u.Pl.CREATE_GUILD_EXPRESSIONS, e),
            c = t.can(u.Pl.MANAGE_GUILD_EXPRESSIONS, e),
            p = t.can(r, e),
            h = t.can(i, e),
            m = n.getCurrentUser();
        return null == e
            ? d
            : {
                  canCreateExpressions: o,
                  canCreateGuildEvent: p,
                  canManageAllExpressions: c,
                  canManageAllEvents: h,
                  canManageGuildExpression: (e) => f(e, m, c, o),
                  canManageGuildEvent: (e) => f(e, m, h, p)
              };
    };
