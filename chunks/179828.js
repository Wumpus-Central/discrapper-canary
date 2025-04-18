t.d(n, { Z: () => _ }), t(642613), t(388685);
var r = t(200651),
    o = t(192379),
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
    h = t(256226),
    g = t(678738),
    y = t(314172),
    I = t(981631),
    j = t(388032),
    v = t(217919);
function x(e) {
    let { user: n, currentUser: t, guild: c, guildMember: a, roles: d, highestRole: u, canManageRoles: f, onAddRole: p, onRemoveRole: m } = e,
        g = f && null != a,
        x = o.useRef(null),
        _ = o.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        Z = (0, l.ZP)({
            id: _,
            isEnabled: !0,
            scrollToStart: I.Cyb,
            scrollToEnd: I.Cyb,
            wrap: !0
        }),
        O = d.length,
        N = 0 === O ? j.NW.string(j.t['vR7M+/']) : j.NW.formatToPlainString(j.t.PCs0oq, { numRoles: O }),
        P = d.map((e) => {
            var o;
            return (0, r.jsx)(
                h.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => m(e),
                    canRemove: f ? b.r6(c, t.id, u, e) : (null == (o = e.tags) ? void 0 : o.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, r.jsx)(s.bG, {
        navigator: Z,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var n,
                    t,
                    { ref: o } = e,
                    i = (function (e, n) {
                        if (null == e) return {};
                        var t,
                            r,
                            o = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                return o;
                            })(e, n);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
                        }
                        return o;
                    })(e, ['ref']);
                return (0, r.jsxs)(
                    'div',
                    ((n = (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    })
                                )),
                                r.forEach(function (n) {
                                    var r;
                                    (r = t[n]),
                                        n in e
                                            ? Object.defineProperty(e, n, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[n] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            className: v.root,
                            'aria-label': N,
                            ref: o
                        },
                        i
                    )),
                    (t = t =
                        {
                            children: [
                                P,
                                g &&
                                    (0, r.jsx)(y.Z, {
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
                                  var r = Object.getOwnPropertySymbols(e);
                                  t.push.apply(t, r);
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
        h = (0, c.e7)([u.ZP], () => u.ZP.getMember(i.id, n.id)),
        y = (0, c.e7)([f.Z], () => f.Z.getRoles(i.id)),
        v = null == h ? void 0 : h.roles,
        _ = o.useMemo(
            () =>
                null == v || 0 === v.length
                    ? []
                    : Object.values(y)
                          .filter((e) => v.includes(e.id))
                          .sort((e, n) => {
                              var t, r;
                              let o = (null == (t = e.tags) ? void 0 : t.guild_connections) !== null,
                                  i = (null == (r = n.tags) ? void 0 : r.guild_connections) !== null;
                              return o && !i ? 1 : !o && i ? -1 : 0;
                          }),
            [y, v]
        ),
        Z = b.e9(i, t.id),
        [O] = (0, c.Wu)([p.Z], () => [p.Z.can(I.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]),
        N = o.useCallback(
            (e) => {
                var t, r;
                s({ action: 'REMOVE_ROLE' });
                let o = null != (r = null == v ? void 0 : v.filter((n) => n !== e.id)) ? r : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(i.id, e.id) : d.Z.updateMemberRoles(i.id, n.id, o, [], [e.id]);
            },
            [v, i.id, n.id, s]
        ),
        P = o.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != v ? v : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [v, i.id, n.id, s]
        ),
        E = O && null != h;
    return 0 !== _.length || E
        ? (0, r.jsx)(g.Z, {
              heading: j.NW.string(j.t.LPJmLy),
              scrollIntoView: l,
              children: (0, r.jsx)(x, {
                  user: n,
                  currentUser: t,
                  guild: i,
                  guildMember: h,
                  roles: _,
                  highestRole: Z,
                  canManageRoles: O,
                  onAddRole: P,
                  onRemoveRole: N
              })
          })
        : null;
}
