(t.d(n, { Z: () => S }), t(642613), t(388685));
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
    j = t(496675),
    g = t(700785),
    h = t(785717),
    v = t(635042),
    m = t(256226),
    b = t(678738),
    x = t(314172),
    y = t(981631),
    O = t(388032),
    Z = t(217919);
function I(e) {
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
function P(e, n) {
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
function E(e, n) {
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
function T(e) {
    let { user: n, currentUser: t, guild: c, guildMember: a, roles: u, highestRole: d, canManageRoles: f, onAddRole: p, onRemoveRole: j } = e,
        h = f && null != a,
        v = r.useRef(null),
        b = r.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        T = (0, o.ZP)({
            id: b,
            isEnabled: !0,
            scrollToStart: y.Cyb,
            scrollToEnd: y.Cyb,
            wrap: !0
        }),
        S = u.length,
        N = 0 === S ? O.intl.string(O.t['vR7M+/']) : O.intl.formatToPlainString(O.t.PCs0oq, { numRoles: S }),
        A = u.map((e) => {
            var r;
            return (0, l.jsx)(
                m.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => j(e),
                    canRemove: (null == (r = e.tags) ? void 0 : r.guild_connections) === null ? n.id === t.id : f && g.r6(c, t.id, d, e)
                },
                e.id
            );
        });
    return (0, l.jsx)(s.bG, {
        navigator: T,
        children: (0, l.jsx)(s.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = E(e, ['ref']);
                return (0, l.jsxs)(
                    'div',
                    P(
                        I(
                            {
                                className: Z.root,
                                'aria-label': N,
                                ref: n
                            },
                            t
                        ),
                        {
                            children: [
                                A,
                                h &&
                                    (0, l.jsx)(x.Z, {
                                        buttonRef: v,
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
function S(e) {
    var { user: n, currentUser: t, guildId: i } = e,
        o = E(e, ['user', 'currentUser', 'guildId']);
    let { trackUserProfileAction: s } = (0, h.KZ)(),
        m = (0, c.e7)([p.Z], () => p.Z.getGuild(i)),
        x = (0, c.e7)([d.ZP], () => d.ZP.getMember(i, n.id)),
        Z = null == x ? void 0 : x.roles,
        S = (0, c.Wu)([f.Z], () => f.Z.getManyRoles(i, null != Z ? Z : []).sort(v.Z), [Z, i]),
        [N] = (0, c.Wu)([j.Z], () => [j.Z.can(y.Plq.MANAGE_ROLES, m), j.Z.getGuildVersion(i)]),
        A = r.useCallback(
            (e) => {
                var t, l;
                s({ action: 'REMOVE_ROLE' });
                let r = null != (l = null == Z ? void 0 : Z.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(i, e.id) : u.Z.updateMemberRoles(i, n.id, r, [], [e.id]);
            },
            [Z, i, n.id, s]
        ),
        C = r.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != Z ? Z : [];
                (t.includes(e) || (t = [...t, e]), u.Z.updateMemberRoles(i, n.id, t, [e], []));
            },
            [Z, i, n.id, s]
        );
    if (null == m) return null;
    let w = N && null != x;
    return 0 !== S.length || w
        ? (0, l.jsx)(
              b.Z,
              P(I({ heading: O.intl.string(O.t.LPJmLy) }, o), {
                  children: (0, l.jsx)(T, {
                      user: n,
                      currentUser: t,
                      guild: m,
                      guildMember: x,
                      roles: S,
                      highestRole: g.e9(m, t.id),
                      canManageRoles: N,
                      onAddRole: C,
                      onRemoveRole: A
                  })
              })
          )
        : null;
}
