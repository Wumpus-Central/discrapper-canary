n.d(t, { Z: () => E }), n(642613), n(388685);
var r = n(200651),
    o = n(192379),
    l = n(772848),
    i = n(924826),
    c = n(91192),
    u = n(442837),
    s = n(749210),
    a = n(434404),
    d = n(271383),
    f = n(430824),
    b = n(496675),
    p = n(700785),
    O = n(785717),
    g = n(256226),
    y = n(678738),
    j = n(314172),
    v = n(981631),
    h = n(388032),
    m = n(217919);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    }
    return o;
}
function Z(e) {
    let { user: t, currentUser: n, guild: u, guildMember: s, roles: a, highestRole: d, canManageRoles: f, onAddRole: b, onRemoveRole: O } = e,
        y = f && null != s,
        Z = o.useRef(null),
        E = o.useMemo(() => 'roles-'.concat((0, l.Z)()), []),
        R = (0, i.ZP)({
            id: E,
            isEnabled: !0,
            scrollToStart: v.Cyb,
            scrollToEnd: v.Cyb,
            wrap: !0
        }),
        S = a.length,
        N = 0 === S ? h.intl.string(h.t['vR7M+/']) : h.intl.formatToPlainString(h.t.PCs0oq, { numRoles: S }),
        C = a.map((e) => {
            var o;
            return (0, r.jsx)(
                g.Z,
                {
                    role: e,
                    guildId: u.id,
                    disableBorderColor: !0,
                    onRemove: () => O(e),
                    canRemove: f ? p.r6(u, n.id, d, e) : (null == (o = e.tags) ? void 0 : o.guild_connections) === null && t.id === n.id
                },
                e.id
            );
        });
    return (0, r.jsx)(c.bG, {
        navigator: R,
        children: (0, r.jsx)(c.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = w(e, ['ref']);
                return (0, r.jsxs)(
                    'div',
                    x(
                        P(
                            {
                                className: m.root,
                                'aria-label': N,
                                ref: t
                            },
                            n
                        ),
                        {
                            children: [
                                C,
                                y &&
                                    (0, r.jsx)(j.Z, {
                                        buttonRef: Z,
                                        guild: u,
                                        guildMember: s,
                                        numRoles: S,
                                        highestRole: d,
                                        onAddRole: b
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
    var { user: t, currentUser: n, guild: l } = e,
        i = w(e, ['user', 'currentUser', 'guild']);
    let { trackUserProfileAction: c } = (0, O.KZ)(),
        g = (0, u.e7)([d.ZP], () => d.ZP.getMember(l.id, t.id)),
        j = (0, u.e7)([f.Z], () => f.Z.getRoles(l.id)),
        m = null == g ? void 0 : g.roles,
        E = o.useMemo(
            () =>
                null == m || 0 === m.length
                    ? []
                    : Object.values(j)
                          .filter((e) => m.includes(e.id))
                          .sort((e, t) => {
                              var n, r;
                              let o = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
                                  l = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
                              return o && !l ? 1 : !o && l ? -1 : 0;
                          }),
            [j, m]
        ),
        R = p.e9(l, n.id),
        [S] = (0, u.Wu)([b.Z], () => [b.Z.can(v.Plq.MANAGE_ROLES, l), null != l ? b.Z.getGuildVersion(l.id) : null]),
        N = o.useCallback(
            (e) => {
                var n, r;
                c({ action: 'REMOVE_ROLE' });
                let o = null != (r = null == m ? void 0 : m.filter((t) => t !== e.id)) ? r : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null ? s.Z.unassignGuildRoleConnection(l.id, e.id) : a.Z.updateMemberRoles(l.id, t.id, o, [], [e.id]);
            },
            [m, l.id, t.id, c]
        ),
        C = o.useCallback(
            (e) => {
                c({ action: 'ADD_ROLE' });
                let n = null != m ? m : [];
                -1 === n.indexOf(e) && (n = n.concat([e])), a.Z.updateMemberRoles(l.id, t.id, n, [e], []);
            },
            [m, l.id, t.id, c]
        ),
        I = S && null != g;
    return 0 !== E.length || I
        ? (0, r.jsx)(
              y.Z,
              x(P({ heading: h.intl.string(h.t.LPJmLy) }, i), {
                  children: (0, r.jsx)(Z, {
                      user: t,
                      currentUser: n,
                      guild: l,
                      guildMember: g,
                      roles: E,
                      highestRole: R,
                      canManageRoles: S,
                      onAddRole: C,
                      onRemoveRole: N
                  })
              })
          )
        : null;
}
