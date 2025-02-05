t.d(n, { Z: () => E }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(772848),
    s = t(924826),
    r = t(91192),
    a = t(442837),
    d = t(749210),
    c = t(434404),
    u = t(271383),
    m = t(430824),
    x = t(496675),
    p = t(700785),
    I = t(785717),
    f = t(256226),
    h = t(678738),
    v = t(314172),
    Z = t(981631),
    g = t(388032),
    _ = t(454302);
function j(e) {
    let { user: n, currentUser: t, guild: a, guildMember: d, roles: c, highestRole: u, canManageRoles: m, onAddRole: x, onRemoveRole: I } = e,
        h = m && null != d,
        j = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        E = (0, s.ZP)({
            id: j,
            isEnabled: !0,
            scrollToStart: Z.Cyb,
            scrollToEnd: Z.Cyb,
            wrap: !0
        }),
        N = c.length,
        y = 0 === N ? g.intl.string(g.t['vR7M+/']) : g.intl.formatToPlainString(g.t.PCs0oq, { numRoles: N }),
        T = c.map((e) => {
            var l;
            return (0, i.jsx)(
                f.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => I(e),
                    canRemove: m ? p.r6(a, t.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, i.jsx)(r.bG, {
        navigator: E,
        children: (0, i.jsx)(r.SJ, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, i.jsxs)('div', {
                    className: _.root,
                    'aria-label': y,
                    ref: n,
                    ...t,
                    children: [
                        T,
                        h &&
                            (0, i.jsx)(v.Z, {
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
    let { user: n, currentUser: t, guild: o, scrollIntoView: s } = e,
        { trackUserProfileAction: r } = (0, I.KZ)(),
        f = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
        v = (0, a.e7)([m.Z], () => m.Z.getRoles(o.id)),
        _ = null == f ? void 0 : f.roles,
        E = l.useMemo(
            () =>
                null == _ || 0 === _.length
                    ? []
                    : Object.values(v)
                          .filter((e) => _.includes(e.id))
                          .sort((e, n) => {
                              var t, i;
                              let l = (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) !== null,
                                  o = (null === (i = n.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                              return l && !o ? 1 : !l && o ? -1 : 0;
                          }),
            [v, _]
        ),
        N = p.e9(o, t.id),
        [y] = (0, a.Wu)([x.Z], () => [x.Z.can(Z.Plq.MANAGE_ROLES, o), null != o ? x.Z.getGuildVersion(o.id) : null]),
        T = l.useCallback(
            (e) => {
                var t, i;
                r({ action: 'REMOVE_ROLE' });
                let l = null !== (i = null == _ ? void 0 : _.filter((n) => n !== e.id)) && void 0 !== i ? i : [];
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, n.id, l, [], [e.id]);
            },
            [_, o.id, n.id, r]
        ),
        P = l.useCallback(
            (e) => {
                r({ action: 'ADD_ROLE' });
                let t = null != _ ? _ : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), c.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [_, o.id, n.id, r]
        ),
        S = y && null != f;
    return 0 !== E.length || S
        ? (0, i.jsx)(h.Z, {
              heading: g.intl.string(g.t.LPJmLy),
              scrollIntoView: s,
              children: (0, i.jsx)(j, {
                  user: n,
                  currentUser: t,
                  guild: o,
                  guildMember: f,
                  roles: E,
                  highestRole: N,
                  canManageRoles: y,
                  onAddRole: P,
                  onRemoveRole: T
              })
          })
        : null;
}
