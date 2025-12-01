n.d(t, {
    Gw: () => m,
    Ob: () => p,
    XJ: () => _,
}),
    n(388685);
var r = n(473749),
    i = n(149765),
    a = n(442837),
    o = n(496675),
    s = n(594174),
    l = n(411198),
    c = n(85243),
    u = n(231338);
let d = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1,
    },
    f = (e, t, n, r) => {
        if (null == e) return !1;
        if (n) return !0;
        if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
        if ("userId" in e) return r && null != t && e.userId === t.id;
        if ("user" in e) {
            var i;
            return r && null != t && (null == (i = e.user) ? void 0 : i.id) === t.id;
        }
        return !1;
    },
    p = (e) => {
        if (null == e) return [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS];
        let t = c.TT;
        return (
            e.isGuildStageVoice() ? (t = c.LK) : e.isGuildVoice() && (t = c.AN),
            [i.$e(t, u.Pl.CREATE_EVENTS), i.$e(t, u.Pl.MANAGE_EVENTS)]
        );
    },
    _ = (e) => {
        let [t, n] = (0, l.lM)(e) ? [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS] : p(e),
            [i, c, _, m] = (0, a.Wu)([o.Z], () => [
                o.Z.can(u.Pl.CREATE_GUILD_EXPRESSIONS, e),
                o.Z.can(u.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                o.Z.can(t, e),
                o.Z.can(n, e),
            ]),
            h = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
            g = r.useCallback((e) => f(e, h, c, i), [i, c, h]),
            E = r.useCallback((e) => f(e, h, m, _), [m, _, h]);
        return null == e
            ? d
            : {
                  canCreateExpressions: i,
                  canCreateGuildEvent: _,
                  canManageAllExpressions: c,
                  canManageAllEvents: m,
                  canManageGuildExpression: g,
                  canManageGuildEvent: E,
              };
    },
    m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
            [r, i] = (0, l.lM)(e) ? [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS] : p(e),
            a = t.can(u.Pl.CREATE_GUILD_EXPRESSIONS, e),
            c = t.can(u.Pl.MANAGE_GUILD_EXPRESSIONS, e),
            _ = t.can(r, e),
            m = t.can(i, e),
            h = n.getCurrentUser();
        return null == e
            ? d
            : {
                  canCreateExpressions: a,
                  canCreateGuildEvent: _,
                  canManageAllExpressions: c,
                  canManageAllEvents: m,
                  canManageGuildExpression: (e) => f(e, h, c, a),
                  canManageGuildEvent: (e) => f(e, h, m, _),
              };
    };
