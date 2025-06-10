t.d(n, { Z: () => E }), t(388685), t(642613);
var l = t(255367),
    r = t(73800),
    i = t(772848),
    o = t(924826),
    s = t(91192),
    a = t(442837),
    c = t(749210),
    u = t(434404),
    d = t(271383),
    f = t(430824),
    p = t(496675),
    g = t(700785),
    v = t(785717),
    j = t(256226),
    h = t(678738),
    m = t(314172),
    b = t(981631),
    x = t(388032),
    O = t(217919);
function y(e) {
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
}
function Z(e, n) {
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
function I(e, n) {
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
}
function P(e) {
    let { user: n, currentUser: t, guild: a, guildMember: c, roles: u, highestRole: d, canManageRoles: f, onAddRole: p, onRemoveRole: v } = e,
        h = f && null != c,
        P = r.useRef(null),
        E = r.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        S = (0, o.ZP)({
            id: E,
            isEnabled: !0,
            scrollToStart: b.Cyb,
            scrollToEnd: b.Cyb,
            wrap: !0
        }),
        T = u.length,
        N = 0 === T ? x.intl.string(x.t['vR7M+/']) : x.intl.formatToPlainString(x.t.PCs0oq, { numRoles: T }),
        A = u.map((e) => {
            var r;
            return (0, l.jsx)(
                j.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => v(e),
                    canRemove: (null == (r = e.tags) ? void 0 : r.guild_connections) === null ? n.id === t.id : f && g.r6(a, t.id, d, e)
                },
                e.id
            );
        });
    return (0, l.jsx)(s.bG, {
        navigator: S,
        children: (0, l.jsx)(s.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = I(e, ['ref']);
                return (0, l.jsxs)(
                    'div',
                    Z(
                        y(
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
                                h &&
                                    (0, l.jsx)(m.Z, {
                                        buttonRef: P,
                                        guild: a,
                                        guildMember: c,
                                        numRoles: T,
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
function E(e) {
    var { user: n, currentUser: t, guildId: i } = e,
        o = I(e, ['user', 'currentUser', 'guildId']);
    let { trackUserProfileAction: s } = (0, v.KZ)(),
        [j, m] = (0, a.Wu)([f.Z], () => [f.Z.getGuild(i), f.Z.getRoles(i)]),
        O = (0, a.e7)([d.ZP], () => d.ZP.getMember(i, n.id)),
        E = null == O ? void 0 : O.roles,
        S = r.useMemo(
            () =>
                null == E || 0 === E.length
                    ? []
                    : Object.values(m)
                          .filter((e) => E.includes(e.id))
                          .sort((e, n) => {
                              var t, l;
                              let r = (null == (t = e.tags) ? void 0 : t.guild_connections) !== null,
                                  i = (null == (l = n.tags) ? void 0 : l.guild_connections) !== null;
                              return r && !i ? 1 : !r && i ? -1 : 0;
                          }),
            [m, E]
        ),
        [T] = (0, a.Wu)([p.Z], () => [p.Z.can(b.Plq.MANAGE_ROLES, j), p.Z.getGuildVersion(i)]),
        N = r.useCallback(
            (e) => {
                var t, l;
                s({ action: 'REMOVE_ROLE' });
                let r = null != (l = null == E ? void 0 : E.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? c.Z.unassignGuildRoleConnection(i, e.id) : u.Z.updateMemberRoles(i, n.id, r, [], [e.id]);
            },
            [E, i, n.id, s]
        ),
        A = r.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != E ? E : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), u.Z.updateMemberRoles(i, n.id, t, [e], []);
            },
            [E, i, n.id, s]
        );
    if (null == j) return null;
    let C = T && null != O;
    return 0 !== S.length || C
        ? (0, l.jsx)(
              h.Z,
              Z(y({ heading: x.intl.string(x.t.LPJmLy) }, o), {
                  children: (0, l.jsx)(P, {
                      user: n,
                      currentUser: t,
                      guild: j,
                      guildMember: O,
                      roles: S,
                      highestRole: g.e9(j, t.id),
                      canManageRoles: T,
                      onAddRole: A,
                      onRemoveRole: N
                  })
              })
          )
        : null;
}
