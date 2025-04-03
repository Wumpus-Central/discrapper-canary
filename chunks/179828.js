t.d(n, { Z: () => x }), t(230036), t(47120);
var r = t(200651),
    o = t(192379),
    i = t(772848),
    l = t(924826),
    s = t(91192),
    c = t(442837),
    a = t(749210),
    d = t(434404),
    u = t(271383),
    f = t(430824),
    p = t(496675),
    b = t(700785),
    y = t(785717),
    m = t(256226),
    g = t(678738),
    I = t(314172),
    j = t(981631),
    v = t(388032),
    h = t(217919);
function _(e) {
    let { user: n, currentUser: t, guild: c, guildMember: a, roles: d, highestRole: u, canManageRoles: f, onAddRole: p, onRemoveRole: y } = e,
        g = f && null != a,
        _ = o.useRef(null),
        x = o.useMemo(() => 'roles-'.concat((0, i.Z)()), []),
        O = (0, l.ZP)({
            id: x,
            isEnabled: !0,
            scrollToStart: j.Cyb,
            scrollToEnd: j.Cyb,
            wrap: !0
        }),
        Z = d.length,
        P = 0 === Z ? v.NW.string(v.t['vR7M+/']) : v.NW.formatToPlainString(v.t.PCs0oq, { numRoles: Z }),
        N = d.map((e) => {
            var o;
            return (0, r.jsx)(
                m.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => y(e),
                    canRemove: f ? b.r6(c, t.id, u, e) : (null == (o = e.tags) ? void 0 : o.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, r.jsx)(s.bG, {
        navigator: O,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var n,
                    t,
                    { ref: o } = e,
                    i = (function (e, n) {
                        if (null == e) return {};
                        var t,
                            r,
                            o = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                return o;
                            })(e, n);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
                        }
                        return o;
                    })(e, ['ref']);
                return (0, r.jsxs)(
                    'div',
                    ((n = (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    })
                                )),
                                r.forEach(function (n) {
                                    var r;
                                    (r = t[n]),
                                        n in e
                                            ? Object.defineProperty(e, n, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[n] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            className: h.root,
                            'aria-label': P,
                            ref: o
                        },
                        i
                    )),
                    (t = t =
                        {
                            children: [
                                N,
                                g &&
                                    (0, r.jsx)(I.Z, {
                                        buttonRef: _,
                                        guild: c,
                                        guildMember: a,
                                        numRoles: Z,
                                        highestRole: u,
                                        onAddRole: p
                                    })
                            ]
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                        : (function (e, n) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  t.push.apply(t, r);
                              }
                              return t;
                          })(Object(t)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                          }),
                    n)
                );
            }
        })
    });
}
function x(e) {
    let { user: n, currentUser: t, guild: i, scrollIntoView: l } = e,
        { trackUserProfileAction: s } = (0, y.KZ)(),
        m = (0, c.e7)([u.ZP], () => u.ZP.getMember(i.id, n.id)),
        I = (0, c.e7)([f.Z], () => f.Z.getRoles(i.id)),
        h = null == m ? void 0 : m.roles,
        x = o.useMemo(
            () =>
                null == h || 0 === h.length
                    ? []
                    : Object.values(I)
                          .filter((e) => h.includes(e.id))
                          .sort((e, n) => {
                              var t, r;
                              let o = (null == (t = e.tags) ? void 0 : t.guild_connections) !== null,
                                  i = (null == (r = n.tags) ? void 0 : r.guild_connections) !== null;
                              return o && !i ? 1 : !o && i ? -1 : 0;
                          }),
            [I, h]
        ),
        O = b.e9(i, t.id),
        [Z] = (0, c.Wu)([p.Z], () => [p.Z.can(j.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]),
        P = o.useCallback(
            (e) => {
                var t, r;
                s({ action: 'REMOVE_ROLE' });
                let o = null != (r = null == h ? void 0 : h.filter((n) => n !== e.id)) ? r : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(i.id, e.id) : d.Z.updateMemberRoles(i.id, n.id, o, [], [e.id]);
            },
            [h, i.id, n.id, s]
        ),
        N = o.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != h ? h : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [h, i.id, n.id, s]
        ),
        E = Z && null != m;
    return 0 !== x.length || E
        ? (0, r.jsx)(g.Z, {
              heading: v.NW.string(v.t.LPJmLy),
              scrollIntoView: l,
              children: (0, r.jsx)(_, {
                  user: n,
                  currentUser: t,
                  guild: i,
                  guildMember: m,
                  roles: x,
                  highestRole: O,
                  canManageRoles: Z,
                  onAddRole: N,
                  onRemoveRole: P
              })
          })
        : null;
}
