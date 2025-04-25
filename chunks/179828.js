n.d(t, { Z: () => E }), n(642613), n(388685);
var r = n(200651),
    o = n(192379),
    l = n(772848),
    i = n(924826),
    u = n(91192),
    c = n(442837),
    s = n(749210),
    a = n(434404),
    d = n(271383),
    f = n(430824),
    b = n(496675),
    p = n(700785),
    O = n(785717),
    y = n(256226),
    g = n(678738),
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
function Z(e, t) {
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
function w(e) {
    let { user: t, currentUser: n, guild: c, guildMember: s, roles: a, highestRole: d, canManageRoles: f, onAddRole: b, onRemoveRole: O } = e,
        g = f && null != s,
        w = o.useRef(null),
        E = o.useMemo(() => 'roles-'.concat((0, l.Z)()), []),
        R = (0, i.ZP)({
            id: E,
            isEnabled: !0,
            scrollToStart: v.Cyb,
            scrollToEnd: v.Cyb,
            wrap: !0
        }),
        I = a.length,
        C = 0 === I ? h.intl.string(h.t['vR7M+/']) : h.intl.formatToPlainString(h.t.PCs0oq, { numRoles: I }),
        S = a.map((e) => {
            var o;
            return (0, r.jsx)(
                y.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => O(e),
                    canRemove: f ? p.r6(c, n.id, d, e) : (null == (o = e.tags) ? void 0 : o.guild_connections) === null && t.id === n.id
                },
                e.id
            );
        });
    return (0, r.jsx)(u.bG, {
        navigator: R,
        children: (0, r.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = Z(e, ['ref']);
                return (0, r.jsxs)(
                    'div',
                    x(
                        P(
                            {
                                className: m.root,
                                'aria-label': C,
                                ref: t
                            },
                            n
                        ),
                        {
                            children: [
                                S,
                                g &&
                                    (0, r.jsx)(j.Z, {
                                        buttonRef: w,
                                        guild: c,
                                        guildMember: s,
                                        numRoles: I,
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
        i = Z(e, ['user', 'currentUser', 'guild']);
    let { trackUserProfileAction: u } = (0, O.KZ)(),
        y = (0, c.e7)([d.ZP], () => d.ZP.getMember(l.id, t.id)),
        j = (0, c.e7)([f.Z], () => f.Z.getRoles(l.id)),
        m = null == y ? void 0 : y.roles,
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
        [I] = (0, c.Wu)([b.Z], () => [b.Z.can(v.Plq.MANAGE_ROLES, l), null != l ? b.Z.getGuildVersion(l.id) : null]),
        C = o.useCallback(
            (e) => {
                var n, r;
                u({ action: 'REMOVE_ROLE' });
                let o = null != (r = null == m ? void 0 : m.filter((t) => t !== e.id)) ? r : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null ? s.Z.unassignGuildRoleConnection(l.id, e.id) : a.Z.updateMemberRoles(l.id, t.id, o, [], [e.id]);
            },
            [m, l.id, t.id, u]
        ),
        S = o.useCallback(
            (e) => {
                u({ action: 'ADD_ROLE' });
                let n = null != m ? m : [];
                -1 === n.indexOf(e) && (n = n.concat([e])), a.Z.updateMemberRoles(l.id, t.id, n, [e], []);
            },
            [m, l.id, t.id, u]
        ),
        N = I && null != y;
    return 0 !== E.length || N
        ? (0, r.jsx)(
              g.Z,
              x(P({ heading: h.intl.string(h.t.LPJmLy) }, i), {
                  children: (0, r.jsx)(w, {
                      user: t,
                      currentUser: n,
                      guild: l,
                      guildMember: y,
                      roles: E,
                      highestRole: R,
                      canManageRoles: I,
                      onAddRole: S,
                      onRemoveRole: C
                  })
              })
          )
        : null;
}
