t.d(n, { Z: () => E }), t(642613), t(388685);
var l = t(255367),
    r = t(73800),
    i = t(772848),
    o = t(924826),
    s = t(91192),
    a = t(442837),
    u = t(749210),
    c = t(434404),
    d = t(271383),
    f = t(430824),
    p = t(496675),
    g = t(700785),
    v = t(785717),
    h = t(256226),
    j = t(678738),
    m = t(314172),
    b = t(981631),
    x = t(388032),
    O = t(217919);
function Z(e) {
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
function y(e, n) {
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
            for (l = 0; l < i.length; l++) (t = i[l]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) (t = i[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
    }
    return r;
}
function I(e) {
    let { user: n, currentUser: t, guild: a, guildMember: u, roles: c, highestRole: d, canManageRoles: f, onAddRole: p, onRemoveRole: v } = e,
        j = f && null != u,
        I = r.useRef(null),
        E = r.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        S = (0, o.ZP)({
            id: E,
            isEnabled: !0,
            scrollToStart: b.Cyb,
            scrollToEnd: b.Cyb,
            wrap: !0
        }),
        T = c.length,
        N = 0 === T ? x.intl.string(x.t['vR7M+/']) : x.intl.formatToPlainString(x.t.PCs0oq, { numRoles: T }),
        A = c.map((e) => {
            var r;
            return (0, l.jsx)(
                h.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => v(e),
                    canRemove: f ? g.r6(a, t.id, d, e) : (null == (r = e.tags) ? void 0 : r.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, l.jsx)(s.bG, {
        navigator: S,
        children: (0, l.jsx)(s.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = P(e, ['ref']);
                return (0, l.jsxs)(
                    'div',
                    y(
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
                                j &&
                                    (0, l.jsx)(m.Z, {
                                        buttonRef: I,
                                        guild: a,
                                        guildMember: u,
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
    var { user: n, currentUser: t, guild: i } = e,
        o = P(e, ['user', 'currentUser', 'guild']);
    let { trackUserProfileAction: s } = (0, v.KZ)(),
        h = (0, a.e7)([d.ZP], () => d.ZP.getMember(i.id, n.id)),
        m = (0, a.e7)([f.Z], () => f.Z.getRoles(i.id)),
        O = null == h ? void 0 : h.roles,
        E = r.useMemo(
            () =>
                null == O || 0 === O.length
                    ? []
                    : Object.values(m)
                          .filter((e) => O.includes(e.id))
                          .sort((e, n) => {
                              var t, l;
                              let r = (null == (t = e.tags) ? void 0 : t.guild_connections) !== null,
                                  i = (null == (l = n.tags) ? void 0 : l.guild_connections) !== null;
                              return r && !i ? 1 : !r && i ? -1 : 0;
                          }),
            [m, O]
        ),
        S = g.e9(i, t.id),
        [T] = (0, a.Wu)([p.Z], () => [p.Z.can(b.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]),
        N = r.useCallback(
            (e) => {
                var t, l;
                s({ action: 'REMOVE_ROLE' });
                let r = null != (l = null == O ? void 0 : O.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? u.Z.unassignGuildRoleConnection(i.id, e.id) : c.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [O, i.id, n.id, s]
        ),
        A = r.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != O ? O : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), c.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [O, i.id, n.id, s]
        ),
        C = T && null != h;
    return 0 !== E.length || C
        ? (0, l.jsx)(
              j.Z,
              y(Z({ heading: x.intl.string(x.t.LPJmLy) }, o), {
                  children: (0, l.jsx)(I, {
                      user: n,
                      currentUser: t,
                      guild: i,
                      guildMember: h,
                      roles: E,
                      highestRole: S,
                      canManageRoles: T,
                      onAddRole: A,
                      onRemoveRole: N
                  })
              })
          )
        : null;
}
