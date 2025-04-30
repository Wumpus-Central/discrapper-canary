n.d(t, { Z: () => E }), n(642613), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(772848),
    s = n(924826),
    o = n(91192),
    c = n(442837),
    a = n(749210),
    d = n(434404),
    u = n(271383),
    f = n(430824),
    p = n(496675),
    h = n(700785),
    j = n(785717),
    g = n(256226),
    v = n(678738),
    m = n(314172),
    x = n(981631),
    b = n(388032),
    O = n(217919);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        l,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                i = Object.keys(e);
            for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function P(e) {
    let { user: t, currentUser: n, guild: c, guildMember: a, roles: d, highestRole: u, canManageRoles: f, onAddRole: p, onRemoveRole: j } = e,
        v = f && null != a,
        P = r.useRef(null),
        E = r.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        N = (0, s.ZP)({
            id: E,
            isEnabled: !0,
            scrollToStart: x.Cyb,
            scrollToEnd: x.Cyb,
            wrap: !0
        }),
        T = d.length,
        S = 0 === T ? b.intl.string(b.t['vR7M+/']) : b.intl.formatToPlainString(b.t.PCs0oq, { numRoles: T }),
        A = d.map((e) => {
            var r;
            return (0, l.jsx)(
                g.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => j(e),
                    canRemove: f ? h.r6(c, n.id, u, e) : (null == (r = e.tags) ? void 0 : r.guild_connections) === null && t.id === n.id
                },
                e.id
            );
        });
    return (0, l.jsx)(o.bG, {
        navigator: N,
        children: (0, l.jsx)(o.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = I(e, ['ref']);
                return (0, l.jsxs)(
                    'div',
                    y(
                        Z(
                            {
                                className: O.root,
                                'aria-label': S,
                                ref: t
                            },
                            n
                        ),
                        {
                            children: [
                                A,
                                v &&
                                    (0, l.jsx)(m.Z, {
                                        buttonRef: P,
                                        guild: c,
                                        guildMember: a,
                                        numRoles: T,
                                        highestRole: u,
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
    var { user: t, currentUser: n, guild: i } = e,
        s = I(e, ['user', 'currentUser', 'guild']);
    let { trackUserProfileAction: o } = (0, j.KZ)(),
        g = (0, c.e7)([u.ZP], () => u.ZP.getMember(i.id, t.id)),
        m = (0, c.e7)([f.Z], () => f.Z.getRoles(i.id)),
        O = null == g ? void 0 : g.roles,
        E = r.useMemo(
            () =>
                null == O || 0 === O.length
                    ? []
                    : Object.values(m)
                          .filter((e) => O.includes(e.id))
                          .sort((e, t) => {
                              var n, l;
                              let r = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
                                  i = (null == (l = t.tags) ? void 0 : l.guild_connections) !== null;
                              return r && !i ? 1 : !r && i ? -1 : 0;
                          }),
            [m, O]
        ),
        N = h.e9(i, n.id),
        [T] = (0, c.Wu)([p.Z], () => [p.Z.can(x.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]),
        S = r.useCallback(
            (e) => {
                var n, l;
                o({ action: 'REMOVE_ROLE' });
                let r = null != (l = null == O ? void 0 : O.filter((t) => t !== e.id)) ? l : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null ? a.Z.unassignGuildRoleConnection(i.id, e.id) : d.Z.updateMemberRoles(i.id, t.id, r, [], [e.id]);
            },
            [O, i.id, t.id, o]
        ),
        A = r.useCallback(
            (e) => {
                o({ action: 'ADD_ROLE' });
                let n = null != O ? O : [];
                -1 === n.indexOf(e) && (n = n.concat([e])), d.Z.updateMemberRoles(i.id, t.id, n, [e], []);
            },
            [O, i.id, t.id, o]
        ),
        C = T && null != g;
    return 0 !== E.length || C
        ? (0, l.jsx)(
              v.Z,
              y(Z({ heading: b.intl.string(b.t.LPJmLy) }, s), {
                  children: (0, l.jsx)(P, {
                      user: t,
                      currentUser: n,
                      guild: i,
                      guildMember: g,
                      roles: E,
                      highestRole: N,
                      canManageRoles: T,
                      onAddRole: A,
                      onRemoveRole: S
                  })
              })
          )
        : null;
}
