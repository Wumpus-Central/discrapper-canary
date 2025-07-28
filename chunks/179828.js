(t.d(n, { Z: () => T }), t(642613), t(388685));
var l = t(255367),
    r = t(73800),
    i = t(772848),
    o = t(924826),
    s = t(91192),
    c = t(442837),
    a = t(749210),
    u = t(434404),
    d = t(271383),
    f = t(485386),
    p = t(430824),
    g = t(496675),
    j = t(700785),
    v = t(785717),
    h = t(256226),
    m = t(678738),
    b = t(314172),
    x = t(981631),
    y = t(388032),
    O = t(217919);
function Z(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                ((l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l));
            }));
    }
    return e;
}
function I(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function P(e, n) {
    if (null == e) return {};
    var t,
        l,
        r = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                r = {},
                i = Object.keys(e);
            for (l = 0; l < i.length; l++) ((t = i[l]), n.indexOf(t) >= 0 || (r[t] = e[t]));
            return r;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) ((t = i[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
}
function E(e) {
    let { user: n, currentUser: t, guild: c, guildMember: a, roles: u, highestRole: d, canManageRoles: f, onAddRole: p, onRemoveRole: g } = e,
        v = f && null != a,
        m = r.useRef(null),
        E = r.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        T = (0, o.ZP)({
            id: E,
            isEnabled: !0,
            scrollToStart: x.Cyb,
            scrollToEnd: x.Cyb,
            wrap: !0
        }),
        S = u.length,
        N = 0 === S ? y.intl.string(y.t['vR7M+/']) : y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: S }),
        A = u.map((e) => {
            var r;
            return (0, l.jsx)(
                h.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => g(e),
                    canRemove: (null == (r = e.tags) ? void 0 : r.guild_connections) === null ? n.id === t.id : f && j.r6(c, t.id, d, e)
                },
                e.id
            );
        });
    return (0, l.jsx)(s.bG, {
        navigator: T,
        children: (0, l.jsx)(s.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = P(e, ['ref']);
                return (0, l.jsxs)(
                    'div',
                    I(
                        Z(
                            {
                                className: O.root,
                                'aria-label': N,
                                ref: n
                            },
                            t
                        ),
                        {
                            children: [
                                A,
                                v &&
                                    (0, l.jsx)(b.Z, {
                                        buttonRef: m,
                                        guild: c,
                                        guildMember: a,
                                        numRoles: S,
                                        highestRole: d,
                                        onAddRole: p
                                    })
                            ]
                        }
                    )
                );
            }
        })
    });
}
function T(e) {
    var { user: n, currentUser: t, guildId: i } = e,
        o = P(e, ['user', 'currentUser', 'guildId']);
    let { trackUserProfileAction: s } = (0, v.KZ)(),
        h = (0, c.e7)([p.Z], () => p.Z.getGuild(i)),
        b = (0, c.e7)([f.Z], () => f.Z.getRoles(i)),
        O = (0, c.e7)([d.ZP], () => d.ZP.getMember(i, n.id)),
        T = null == O ? void 0 : O.roles,
        S = r.useMemo(
            () =>
                null == T || 0 === T.length
                    ? []
                    : Object.values(b)
                          .filter((e) => T.includes(e.id))
                          .sort((e, n) => {
                              var t, l;
                              let r = (null == (t = e.tags) ? void 0 : t.guild_connections) !== null,
                                  i = (null == (l = n.tags) ? void 0 : l.guild_connections) !== null;
                              return r && !i ? 1 : !r && i ? -1 : 0;
                          }),
            [b, T]
        ),
        [N] = (0, c.Wu)([g.Z], () => [g.Z.can(x.Plq.MANAGE_ROLES, h), g.Z.getGuildVersion(i)]),
        A = r.useCallback(
            (e) => {
                var t, l;
                s({ action: 'REMOVE_ROLE' });
                let r = null != (l = null == T ? void 0 : T.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(i, e.id) : u.Z.updateMemberRoles(i, n.id, r, [], [e.id]);
            },
            [T, i, n.id, s]
        ),
        C = r.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != T ? T : [];
                (-1 === t.indexOf(e) && (t = t.concat([e])), u.Z.updateMemberRoles(i, n.id, t, [e], []));
            },
            [T, i, n.id, s]
        );
    if (null == h) return null;
    let w = N && null != O;
    return 0 !== S.length || w
        ? (0, l.jsx)(
              m.Z,
              I(Z({ heading: y.intl.string(y.t.LPJmLy) }, o), {
                  children: (0, l.jsx)(E, {
                      user: n,
                      currentUser: t,
                      guild: h,
                      guildMember: O,
                      roles: S,
                      highestRole: j.e9(h, t.id),
                      canManageRoles: N,
                      onAddRole: C,
                      onRemoveRole: A
                  })
              })
          )
        : null;
}
