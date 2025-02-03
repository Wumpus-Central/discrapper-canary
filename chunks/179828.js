i.d(n, { Z: () => E }), i(47120);
var t = i(200651),
    l = i(192379),
    o = i(772848),
    s = i(924826),
    r = i(91192),
    a = i(442837),
    d = i(749210),
    c = i(434404),
    u = i(271383),
    m = i(430824),
    x = i(496675),
    p = i(700785),
    f = i(785717),
    I = i(256226),
    h = i(678738),
    v = i(314172),
    g = i(981631),
    Z = i(388032),
    _ = i(454302);
function j(e) {
    let { user: n, currentUser: i, guild: a, guildMember: d, roles: c, highestRole: u, canManageRoles: m, onAddRole: x, onRemoveRole: f } = e,
        h = m && null != d,
        j = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        E = (0, s.ZP)({
            id: j,
            isEnabled: !0,
            scrollToStart: g.Cyb,
            scrollToEnd: g.Cyb,
            wrap: !0
        }),
        N = c.length,
        y = 0 === N ? Z.intl.string(Z.t['vR7M+/']) : Z.intl.formatToPlainString(Z.t.PCs0oq, { numRoles: N }),
        T = c.map((e) => {
            var l;
            return (0, t.jsx)(
                I.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => f(e),
                    canRemove: m ? p.r6(a, i.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && n.id === i.id
                },
                e.id
            );
        });
    return (0, t.jsx)(r.bG, {
        navigator: E,
        children: (0, t.jsx)(r.SJ, {
            children: (e) => {
                let { ref: n, ...i } = e;
                return (0, t.jsxs)('div', {
                    className: _.root,
                    'aria-label': y,
                    ref: n,
                    ...i,
                    children: [
                        T,
                        h &&
                            (0, t.jsx)(v.Z, {
                                guild: a,
                                guildMember: d,
                                numRoles: N,
                                highestRole: u,
                                onAddRole: x
                            })
                    ]
                });
            }
        })
    });
}
function E(e) {
    let { user: n, currentUser: i, guild: o, scrollIntoView: s } = e,
        { trackUserProfileAction: r } = (0, f.KZ)(),
        I = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
        v = (0, a.e7)([m.Z], () => m.Z.getRoles(o.id)),
        _ = null == I ? void 0 : I.roles,
        E = l.useMemo(
            () =>
                null == _ || 0 === _.length
                    ? []
                    : Object.values(v)
                          .filter((e) => _.includes(e.id))
                          .sort((e, n) => {
                              var i, t;
                              let l = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null,
                                  o = (null === (t = n.tags) || void 0 === t ? void 0 : t.guild_connections) !== null;
                              return l && !o ? 1 : !l && o ? -1 : 0;
                          }),
            [v, _]
        ),
        N = p.e9(o, i.id),
        [y] = (0, a.Wu)([x.Z], () => [x.Z.can(g.Plq.MANAGE_ROLES, o), null != o ? x.Z.getGuildVersion(o.id) : null]),
        T = l.useCallback(
            (e) => {
                var i, t;
                r({ action: 'REMOVE_ROLE' });
                let l = null !== (t = null == _ ? void 0 : _.filter((n) => n !== e.id)) && void 0 !== t ? t : [];
                (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, n.id, l, [], [e.id]);
            },
            [_, o.id, n.id, r]
        ),
        P = l.useCallback(
            (e) => {
                r({ action: 'ADD_ROLE' });
                let i = null != _ ? _ : [];
                -1 === i.indexOf(e) && (i = i.concat([e])), c.Z.updateMemberRoles(o.id, n.id, i, [e], []);
            },
            [_, o.id, n.id, r]
        ),
        b = y && null != I;
    return 0 !== E.length || b
        ? (0, t.jsx)(h.Z, {
              heading: Z.intl.string(Z.t.LPJmLy),
              scrollIntoView: s,
              children: (0, t.jsx)(j, {
                  user: n,
                  currentUser: i,
                  guild: o,
                  guildMember: I,
                  roles: E,
                  highestRole: N,
                  canManageRoles: y,
                  onAddRole: P,
                  onRemoveRole: T
              })
          })
        : null;
}
