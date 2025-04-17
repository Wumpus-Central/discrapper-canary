t.d(n, { Z: () => _ }), t(642613), t(388685);
var o = t(200651),
    r = t(192379),
    i = t(772848),
    l = t(924826),
    s = t(91192),
    c = t(442837),
    a = t(749210),
    d = t(434404),
    u = t(271383),
    f = t(430824),
    p = t(496675),
    b = t(700785),
    m = t(785717),
    I = t(256226),
    h = t(678738),
    g = t(314172),
    y = t(981631),
    j = t(388032),
    v = t(217919);
function x(e) {
    let { user: n, currentUser: t, guild: c, guildMember: a, roles: d, highestRole: u, canManageRoles: f, onAddRole: p, onRemoveRole: m } = e,
        h = f && null != a,
        x = r.useRef(null),
        _ = r.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        Z = (0, l.ZP)({
            id: _,
            isEnabled: !0,
            scrollToStart: y.Cyb,
            scrollToEnd: y.Cyb,
            wrap: !0
        }),
        O = d.length,
        N = 0 === O ? j.NW.string(j.t['vR7M+/']) : j.NW.formatToPlainString(j.t.PCs0oq, { numRoles: O }),
        E = d.map((e) => {
            var r;
            return (0, o.jsx)(
                I.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => m(e),
                    canRemove: f ? b.r6(c, t.id, u, e) : (null == (r = e.tags) ? void 0 : r.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, o.jsx)(s.bG, {
        navigator: Z,
        children: (0, o.jsx)(s.SJ, {
            children: (e) => {
                var n,
                    t,
                    { ref: r } = e,
                    i = (function (e, n) {
                        if (null == e) return {};
                        var t,
                            o,
                            r = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, n);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (o = 0; o < i.length; o++) (t = i[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
                        }
                        return r;
                    })(e, ['ref']);
                return (0, o.jsxs)(
                    'div',
                    ((n = (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                o = Object.keys(t);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (o = o.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    })
                                )),
                                o.forEach(function (n) {
                                    var o;
                                    (o = t[n]),
                                        n in e
                                            ? Object.defineProperty(e, n, {
                                                  value: o,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[n] = o);
                                });
                        }
                        return e;
                    })(
                        {
                            className: v.root,
                            'aria-label': N,
                            ref: r
                        },
                        i
                    )),
                    (t = t =
                        {
                            children: [
                                E,
                                h &&
                                    (0, o.jsx)(g.Z, {
                                        buttonRef: x,
                                        guild: c,
                                        guildMember: a,
                                        numRoles: O,
                                        highestRole: u,
                                        onAddRole: p
                                    })
                            ]
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                        : (function (e, n) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var o = Object.getOwnPropertySymbols(e);
                                  t.push.apply(t, o);
                              }
                              return t;
                          })(Object(t)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                          }),
                    n)
                );
            }
        })
    });
}
function _(e) {
    let { user: n, currentUser: t, guild: i, scrollIntoView: l } = e,
        { trackUserProfileAction: s } = (0, m.KZ)(),
        I = (0, c.e7)([u.ZP], () => u.ZP.getMember(i.id, n.id)),
        g = (0, c.e7)([f.Z], () => f.Z.getRoles(i.id)),
        v = null == I ? void 0 : I.roles,
        _ = r.useMemo(
            () =>
                null == v || 0 === v.length
                    ? []
                    : Object.values(g)
                          .filter((e) => v.includes(e.id))
                          .sort((e, n) => {
                              var t, o;
                              let r = (null == (t = e.tags) ? void 0 : t.guild_connections) !== null,
                                  i = (null == (o = n.tags) ? void 0 : o.guild_connections) !== null;
                              return r && !i ? 1 : !r && i ? -1 : 0;
                          }),
            [g, v]
        ),
        Z = b.e9(i, t.id),
        [O] = (0, c.Wu)([p.Z], () => [p.Z.can(y.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]),
        N = r.useCallback(
            (e) => {
                var t, o;
                s({ action: 'REMOVE_ROLE' });
                let r = null != (o = null == v ? void 0 : v.filter((n) => n !== e.id)) ? o : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(i.id, e.id) : d.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [v, i.id, n.id, s]
        ),
        E = r.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != v ? v : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [v, i.id, n.id, s]
        ),
        P = O && null != I;
    return 0 !== _.length || P
        ? (0, o.jsx)(h.Z, {
              heading: j.NW.string(j.t.LPJmLy),
              scrollIntoView: l,
              children: (0, o.jsx)(x, {
                  user: n,
                  currentUser: t,
                  guild: i,
                  guildMember: I,
                  roles: _,
                  highestRole: Z,
                  canManageRoles: O,
                  onAddRole: E,
                  onRemoveRole: N
              })
          })
        : null;
}
