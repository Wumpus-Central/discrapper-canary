t.d(n, { Z: () => E }), t(642613), t(388685);
var l = t(255367),
    r = t(73800),
    i = t(772848),
    o = t(924826),
    s = t(91192),
    c = t(442837),
    u = t(749210),
    a = t(434404),
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
    Z = t(217919);
function O(e) {
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
    let { user: n, currentUser: t, guild: c, guildMember: u, roles: a, highestRole: d, canManageRoles: f, onAddRole: p, onRemoveRole: v } = e,
        j = f && null != u,
        P = r.useRef(null),
        E = r.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        T = (0, o.ZP)({
            id: E,
            isEnabled: !0,
            scrollToStart: b.Cyb,
            scrollToEnd: b.Cyb,
            wrap: !0
        }),
        S = a.length,
        N = 0 === S ? x.intl.string(x.t['vR7M+/']) : x.intl.formatToPlainString(x.t.PCs0oq, { numRoles: S }),
        C = a.map((e) => {
            var r;
            return (0, l.jsx)(
                h.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => v(e),
                    canRemove: f ? g.r6(c, t.id, d, e) : (null == (r = e.tags) ? void 0 : r.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, l.jsx)(s.bG, {
        navigator: T,
        children: (0, l.jsx)(s.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = I(e, ['ref']);
                return (0, l.jsxs)(
                    'div',
                    y(
                        O(
                            {
                                className: Z.root,
                                'aria-label': N,
                                ref: n
                            },
                            t
                        ),
                        {
                            children: [
                                C,
                                j &&
                                    (0, l.jsx)(m.Z, {
                                        buttonRef: P,
                                        guild: c,
                                        guildMember: u,
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
function E(e) {
    var { user: n, currentUser: t, guild: i } = e,
        o = I(e, ['user', 'currentUser', 'guild']);
    let { trackUserProfileAction: s } = (0, v.KZ)(),
        h = (0, c.e7)([d.ZP], () => d.ZP.getMember(i.id, n.id)),
        m = (0, c.e7)([f.Z], () => f.Z.getRoles(i.id)),
        Z = null == h ? void 0 : h.roles,
        E = r.useMemo(
            () =>
                null == Z || 0 === Z.length
                    ? []
                    : Object.values(m)
                          .filter((e) => Z.includes(e.id))
                          .sort((e, n) => {
                              var t, l;
                              let r = (null == (t = e.tags) ? void 0 : t.guild_connections) !== null,
                                  i = (null == (l = n.tags) ? void 0 : l.guild_connections) !== null;
                              return r && !i ? 1 : !r && i ? -1 : 0;
                          }),
            [m, Z]
        ),
        T = g.e9(i, t.id),
        [S] = (0, c.Wu)([p.Z], () => [p.Z.can(b.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]),
        N = r.useCallback(
            (e) => {
                var t, l;
                s({ action: 'REMOVE_ROLE' });
                let r = null != (l = null == Z ? void 0 : Z.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? u.Z.unassignGuildRoleConnection(i.id, e.id) : a.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [Z, i.id, n.id, s]
        ),
        C = r.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != Z ? Z : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), a.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [Z, i.id, n.id, s]
        ),
        A = S && null != h;
    return 0 !== E.length || A
        ? (0, l.jsx)(
              j.Z,
              y(O({ heading: x.intl.string(x.t.LPJmLy) }, o), {
                  children: (0, l.jsx)(P, {
                      user: n,
                      currentUser: t,
                      guild: i,
                      guildMember: h,
                      roles: E,
                      highestRole: T,
                      canManageRoles: S,
                      onAddRole: C,
                      onRemoveRole: N
                  })
              })
          )
        : null;
}
