n.d(t, { Z: () => x }), n(642613), n(388685);
var r = n(200651),
    l = n(192379),
    o = n(772848),
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
    g = n(256226),
    y = n(678738),
    v = n(314172),
    j = n(981631),
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
function Z(e, t) {
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
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function R(e) {
    let { user: t, currentUser: n, guild: c, guildMember: s, roles: a, highestRole: d, canManageRoles: f, onAddRole: b, onRemoveRole: O } = e,
        y = f && null != s,
        R = l.useRef(null),
        x = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        E = (0, i.ZP)({
            id: x,
            isEnabled: !0,
            scrollToStart: j.Cyb,
            scrollToEnd: j.Cyb,
            wrap: !0
        }),
        C = a.length,
        S = 0 === C ? h.intl.string(h.t['vR7M+/']) : h.intl.formatToPlainString(h.t.PCs0oq, { numRoles: C }),
        T = a.map((e) => {
            var l;
            return (0, r.jsx)(
                g.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => O(e),
                    canRemove: f ? p.r6(c, n.id, d, e) : (null == (l = e.tags) ? void 0 : l.guild_connections) === null && t.id === n.id
                },
                e.id
            );
        });
    return (0, r.jsx)(u.bG, {
        navigator: E,
        children: (0, r.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = w(e, ['ref']);
                return (0, r.jsxs)(
                    'div',
                    Z(
                        P(
                            {
                                className: m.root,
                                'aria-label': S,
                                ref: t
                            },
                            n
                        ),
                        {
                            children: [
                                T,
                                y &&
                                    (0, r.jsx)(v.Z, {
                                        buttonRef: R,
                                        guild: c,
                                        guildMember: s,
                                        numRoles: C,
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
function x(e) {
    var { user: t, currentUser: n, guild: o } = e,
        i = w(e, ['user', 'currentUser', 'guild']);
    let { trackUserProfileAction: u } = (0, O.KZ)(),
        g = (0, c.e7)([d.ZP], () => d.ZP.getMember(o.id, t.id)),
        v = (0, c.e7)([f.Z], () => f.Z.getRoles(o.id)),
        m = null == g ? void 0 : g.roles,
        x = l.useMemo(
            () =>
                null == m || 0 === m.length
                    ? []
                    : Object.values(v)
                          .filter((e) => m.includes(e.id))
                          .sort((e, t) => {
                              var n, r;
                              let l = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
                                  o = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
                              return l && !o ? 1 : !l && o ? -1 : 0;
                          }),
            [v, m]
        ),
        E = p.e9(o, n.id),
        [C] = (0, c.Wu)([b.Z], () => [b.Z.can(j.Plq.MANAGE_ROLES, o), null != o ? b.Z.getGuildVersion(o.id) : null]),
        S = l.useCallback(
            (e) => {
                var n, r;
                u({ action: 'REMOVE_ROLE' });
                let l = null != (r = null == m ? void 0 : m.filter((t) => t !== e.id)) ? r : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null ? s.Z.unassignGuildRoleConnection(o.id, e.id) : a.Z.updateMemberRoles(o.id, t.id, l, [], [e.id]);
            },
            [m, o.id, t.id, u]
        ),
        T = l.useCallback(
            (e) => {
                u({ action: 'ADD_ROLE' });
                let n = null != m ? m : [];
                -1 === n.indexOf(e) && (n = n.concat([e])), a.Z.updateMemberRoles(o.id, t.id, n, [e], []);
            },
            [m, o.id, t.id, u]
        ),
        I = C && null != g;
    return 0 !== x.length || I
        ? (0, r.jsx)(
              y.Z,
              Z(P({ heading: h.intl.string(h.t.LPJmLy) }, i), {
                  children: (0, r.jsx)(R, {
                      user: t,
                      currentUser: n,
                      guild: o,
                      guildMember: g,
                      roles: x,
                      highestRole: E,
                      canManageRoles: C,
                      onAddRole: T,
                      onRemoveRole: S
                  })
              })
          )
        : null;
}
