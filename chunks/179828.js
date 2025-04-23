t.d(n, { Z: () => I }), t(642613), t(388685);
var l = t(200651),
    r = t(192379),
    i = t(772848),
    o = t(924826),
    s = t(91192),
    u = t(442837),
    a = t(749210),
    c = t(434404),
    d = t(271383),
    f = t(430824),
    p = t(496675),
    g = t(700785),
    b = t(785717),
    v = t(256226),
    h = t(678738),
    j = t(314172),
    m = t(981631),
    O = t(388032),
    y = t(217919);
function Z(e) {
    let { user: n, currentUser: t, guild: u, guildMember: a, roles: c, highestRole: d, canManageRoles: f, onAddRole: p, onRemoveRole: b } = e,
        h = f && null != a,
        Z = r.useRef(null),
        I = r.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        x = (0, o.ZP)({
            id: I,
            isEnabled: !0,
            scrollToStart: m.Cyb,
            scrollToEnd: m.Cyb,
            wrap: !0
        }),
        P = c.length,
        E = 0 === P ? O.intl.string(O.t['vR7M+/']) : O.intl.formatToPlainString(O.t.PCs0oq, { numRoles: P }),
        T = c.map((e) => {
            var r;
            return (0, l.jsx)(
                v.Z,
                {
                    role: e,
                    guildId: u.id,
                    disableBorderColor: !0,
                    onRemove: () => b(e),
                    canRemove: f ? g.r6(u, t.id, d, e) : (null == (r = e.tags) ? void 0 : r.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, l.jsx)(s.bG, {
        navigator: x,
        children: (0, l.jsx)(s.SJ, {
            children: (e) => {
                var n,
                    t,
                    { ref: r } = e,
                    i = (function (e, n) {
                        if (null == e) return {};
                        var t,
                            l,
                            r = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    l,
                                    r = {},
                                    i = Object.keys(e);
                                for (l = 0; l < i.length; l++) (t = i[l]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, n);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (l = 0; l < i.length; l++) (t = i[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
                        }
                        return r;
                    })(e, ['ref']);
                return (0, l.jsxs)(
                    'div',
                    ((n = (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                l = Object.keys(t);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    })
                                )),
                                l.forEach(function (n) {
                                    var l;
                                    (l = t[n]),
                                        n in e
                                            ? Object.defineProperty(e, n, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[n] = l);
                                });
                        }
                        return e;
                    })(
                        {
                            className: y.root,
                            'aria-label': E,
                            ref: r
                        },
                        i
                    )),
                    (t = t =
                        {
                            children: [
                                T,
                                h &&
                                    (0, l.jsx)(j.Z, {
                                        buttonRef: Z,
                                        guild: u,
                                        guildMember: a,
                                        numRoles: P,
                                        highestRole: d,
                                        onAddRole: p
                                    })
                            ]
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                        : (function (e, n) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  t.push.apply(t, l);
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
function I(e) {
    let { user: n, currentUser: t, guild: i, scrollIntoView: o } = e,
        { trackUserProfileAction: s } = (0, b.KZ)(),
        v = (0, u.e7)([d.ZP], () => d.ZP.getMember(i.id, n.id)),
        j = (0, u.e7)([f.Z], () => f.Z.getRoles(i.id)),
        y = null == v ? void 0 : v.roles,
        I = r.useMemo(
            () =>
                null == y || 0 === y.length
                    ? []
                    : Object.values(j)
                          .filter((e) => y.includes(e.id))
                          .sort((e, n) => {
                              var t, l;
                              let r = (null == (t = e.tags) ? void 0 : t.guild_connections) !== null,
                                  i = (null == (l = n.tags) ? void 0 : l.guild_connections) !== null;
                              return r && !i ? 1 : !r && i ? -1 : 0;
                          }),
            [j, y]
        ),
        x = g.e9(i, t.id),
        [P] = (0, u.Wu)([p.Z], () => [p.Z.can(m.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]),
        E = r.useCallback(
            (e) => {
                var t, l;
                s({ action: 'REMOVE_ROLE' });
                let r = null != (l = null == y ? void 0 : y.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(i.id, e.id) : c.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [y, i.id, n.id, s]
        ),
        T = r.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != y ? y : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), c.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [y, i.id, n.id, s]
        ),
        N = P && null != v;
    return 0 !== I.length || N
        ? (0, l.jsx)(h.Z, {
              heading: O.intl.string(O.t.LPJmLy),
              scrollIntoView: o,
              children: (0, l.jsx)(Z, {
                  user: n,
                  currentUser: t,
                  guild: i,
                  guildMember: v,
                  roles: I,
                  highestRole: x,
                  canManageRoles: P,
                  onAddRole: T,
                  onRemoveRole: E
              })
          })
        : null;
}
