t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(772848),
    r = t(924826),
    s = t(91192),
    c = t(442837),
    a = t(749210),
    d = t(434404),
    u = t(271383),
    f = t(430824),
    m = t(496675),
    x = t(700785),
    I = t(785717),
    p = t(256226),
    h = t(678738),
    v = t(314172),
    Z = t(981631),
    g = t(388032),
    j = t(454302);
function _(e) {
    let { user: n, currentUser: t, guild: c, guildMember: a, roles: d, highestRole: u, canManageRoles: f, onAddRole: m, onRemoveRole: I } = e,
        h = f && null != a,
        _ = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        b = (0, r.ZP)({
            id: _,
            isEnabled: !0,
            scrollToStart: Z.Cyb,
            scrollToEnd: Z.Cyb,
            wrap: !0
        }),
        E = d.length,
        N = 0 === E ? g.intl.string(g.t['vR7M+/']) : g.intl.formatToPlainString(g.t.PCs0oq, { numRoles: E }),
        S = d.map((e) => {
            var l;
            return (0, i.jsx)(
                p.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => I(e),
                    canRemove: f ? x.r6(c, t.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, i.jsx)(s.bG, {
        navigator: b,
        children: (0, i.jsx)(s.SJ, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, i.jsxs)('div', {
                    className: j.root,
                    'aria-label': N,
                    ref: n,
                    ...t,
                    children: [
                        S,
                        h &&
                            (0, i.jsx)(v.Z, {
                                guild: c,
                                guildMember: a,
                                numRoles: E,
                                highestRole: u,
                                onAddRole: m
                            })
                    ]
                });
            }
        })
    });
}
function b(e) {
    let { user: n, currentUser: t, guild: o, scrollIntoView: r } = e,
        { trackUserProfileAction: s } = (0, I.KZ)(),
        p = (0, c.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
        v = (0, c.e7)([f.Z], () => f.Z.getRoles(o.id)),
        j = null == p ? void 0 : p.roles,
        b = l.useMemo(
            () =>
                null == j || 0 === j.length
                    ? []
                    : Object.values(v)
                          .filter((e) => j.includes(e.id))
                          .sort((e, n) => {
                              var t, i;
                              let l = (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) !== null,
                                  o = (null === (i = n.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                              return l && !o ? 1 : !l && o ? -1 : 0;
                          }),
            [v, j]
        ),
        E = x.e9(o, t.id),
        [N] = (0, c.Wu)([m.Z], () => [m.Z.can(Z.Plq.MANAGE_ROLES, o), null != o ? m.Z.getGuildVersion(o.id) : null]),
        S = l.useCallback(
            (e) => {
                var t, i;
                s({ action: 'REMOVE_ROLE' });
                let l = null !== (i = null == j ? void 0 : j.filter((n) => n !== e.id)) && void 0 !== i ? i : [];
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(o.id, e.id) : d.Z.updateMemberRoles(o.id, n.id, l, [], [e.id]);
            },
            [j, o.id, n.id, s]
        ),
        y = l.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let t = null != j ? j : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [j, o.id, n.id, s]
        ),
        T = N && null != p;
    return 0 !== b.length || T
        ? (0, i.jsx)(h.Z, {
              heading: g.intl.string(g.t.LPJmLy),
              scrollIntoView: r,
              children: (0, i.jsx)(_, {
                  user: n,
                  currentUser: t,
                  guild: o,
                  guildMember: p,
                  roles: b,
                  highestRole: E,
                  canManageRoles: N,
                  onAddRole: y,
                  onRemoveRole: S
              })
          })
        : null;
}
