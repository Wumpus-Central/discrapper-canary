t.d(n, { Z: () => P }), t(642613), t(388685);
var l = t(200651),
    r = t(192379),
    i = t(772848),
    o = t(924826),
    s = t(91192),
    a = t(442837),
    d = t(749210),
    c = t(434404),
    u = t(271383),
    f = t(430824),
    h = t(496675),
    p = t(700785),
    g = t(785717),
    j = t(256226),
    m = t(678738),
    v = t(314172),
    x = t(981631),
    Z = t(388032),
    b = t(217919);
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
function E(e) {
    let { user: n, currentUser: t, guild: a, guildMember: d, roles: c, highestRole: u, canManageRoles: f, onAddRole: h, onRemoveRole: g } = e,
        m = f && null != d,
        E = r.useRef(null),
        P = r.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        T = (0, o.ZP)({
            id: P,
            isEnabled: !0,
            scrollToStart: x.Cyb,
            scrollToEnd: x.Cyb,
            wrap: !0
        }),
        N = c.length,
        A = 0 === N ? Z.intl.string(Z.t['vR7M+/']) : Z.intl.formatToPlainString(Z.t.PCs0oq, { numRoles: N }),
        S = c.map((e) => {
            var r;
            return (0, l.jsx)(
                j.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => g(e),
                    canRemove: f ? p.r6(a, t.id, u, e) : (null == (r = e.tags) ? void 0 : r.guild_connections) === null && n.id === t.id
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
                                className: b.root,
                                'aria-label': A,
                                ref: n
                            },
                            t
                        ),
                        {
                            children: [
                                S,
                                m &&
                                    (0, l.jsx)(v.Z, {
                                        buttonRef: E,
                                        guild: a,
                                        guildMember: d,
                                        numRoles: N,
                                        highestRole: u,
                                        onAddRole: h
                                    })
                            ]
                        }
                    )
                );
            }
        })
    });
}
function P(e) {
    var { user: n, currentUser: t, guild: i } = e,
        o = I(e, ['user', 'currentUser', 'guild']);
    let { trackUserProfileAction: s } = (0, g.KZ)(),
        j = (0, a.e7)([u.ZP], () => u.ZP.getMember(i.id, n.id)),
        v = (0, a.e7)([f.Z], () => f.Z.getRoles(i.id)),
        b = null == j ? void 0 : j.roles,
        P = r.useMemo(
            () =>
                null == b || 0 === b.length
                    ? []
                    : Object.values(v)
                          .filter((e) => b.includes(e.id))
                          .sort((e, n) => {
                              var t, l;
                              let r = (null == (t = e.tags) ? void 0 : t.guild_connections) !== null,
                                  i = (null == (l = n.tags) ? void 0 : l.guild_connections) !== null;
                              return r && !i ? 1 : !r && i ? -1 : 0;
                          }),
            [v, b]
        ),
        T = p.e9(i, t.id),
        [N] = (0, a.Wu)([h.Z], () => [h.Z.can(x.Plq.MANAGE_ROLES, i), null != i ? h.Z.getGuildVersion(i.id) : null]),
        A = r.useCallback(
            (e) => {
                var t, l;
                s({ action: 'REMOVE_ROLE' });
                let r = null != (l = null == b ? void 0 : b.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? d.Z.unassignGuildRoleConnection(i.id, e.id) : c.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [b, i.id, n.id, s]
        ),
        S = r.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != b ? b : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), c.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [b, i.id, n.id, s]
        ),
        C = N && null != j;
    return 0 !== P.length || C
        ? (0, l.jsx)(
              m.Z,
              y(O({ heading: Z.intl.string(Z.t.LPJmLy) }, o), {
                  children: (0, l.jsx)(E, {
                      user: n,
                      currentUser: t,
                      guild: i,
                      guildMember: j,
                      roles: P,
                      highestRole: T,
                      canManageRoles: N,
                      onAddRole: S,
                      onRemoveRole: A
                  })
              })
          )
        : null;
}
