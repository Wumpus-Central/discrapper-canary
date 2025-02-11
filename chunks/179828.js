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
    I = t(430824),
    f = t(496675),
    p = t(700785),
    x = t(785717),
    m = t(256226),
    _ = t(678738),
    h = t(314172),
    Z = t(981631),
    v = t(388032),
    g = t(263457);
function j(e) {
    let { user: n, currentUser: t, guild: a, guildMember: d, roles: c, highestRole: u, canManageRoles: I, onAddRole: f, onRemoveRole: x } = e,
        _ = I && null != d,
        j = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        E = (0, s.ZP)({
            id: j,
            isEnabled: !0,
            scrollToStart: Z.Cyb,
            scrollToEnd: Z.Cyb,
            wrap: !0
        }),
        y = c.length,
        N = 0 === y ? v.intl.string(v.t['vR7M+/']) : v.intl.formatToPlainString(v.t.PCs0oq, { numRoles: y }),
        T = c.map((e) => {
            var l;
            return (0, i.jsx)(
                m.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => x(e),
                    canRemove: I ? p.r6(a, t.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && n.id === t.id
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
                    className: g.root,
                    'aria-label': N,
                    ref: n,
                    ...t,
                    children: [
                        T,
                        _ &&
                            (0, i.jsx)(h.Z, {
                                guild: a,
                                guildMember: d,
                                numRoles: y,
                                highestRole: u,
                                onAddRole: f
                            })
                    ]
                });
            }
        })
    });
}
function E(e) {
    let { user: n, currentUser: t, guild: o, scrollIntoView: s } = e,
        { trackUserProfileAction: r } = (0, x.KZ)(),
        m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
        h = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)),
        g = null == m ? void 0 : m.roles,
        E = l.useMemo(
            () =>
                null == g || 0 === g.length
                    ? []
                    : Object.values(h)
                          .filter((e) => g.includes(e.id))
                          .sort((e, n) => {
                              var t, i;
                              let l = (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) !== null,
                                  o = (null === (i = n.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                              return l && !o ? 1 : !l && o ? -1 : 0;
                          }),
            [h, g]
        ),
        y = p.e9(o, t.id),
        [N] = (0, a.Wu)([f.Z], () => [f.Z.can(Z.Plq.MANAGE_ROLES, o), null != o ? f.Z.getGuildVersion(o.id) : null]),
        T = l.useCallback(
            (e) => {
                var t, i;
                r({ action: 'REMOVE_ROLE' });
                let l = null !== (i = null == g ? void 0 : g.filter((n) => n !== e.id)) && void 0 !== i ? i : [];
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, n.id, l, [], [e.id]);
            },
            [g, o.id, n.id, r]
        ),
        b = l.useCallback(
            (e) => {
                r({ action: 'ADD_ROLE' });
                let t = null != g ? g : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), c.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [g, o.id, n.id, r]
        ),
        P = N && null != m;
    return 0 !== E.length || P
        ? (0, i.jsx)(_.Z, {
              heading: v.intl.string(v.t.LPJmLy),
              scrollIntoView: s,
              children: (0, i.jsx)(j, {
                  user: n,
                  currentUser: t,
                  guild: o,
                  guildMember: m,
                  roles: E,
                  highestRole: y,
                  canManageRoles: N,
                  onAddRole: b,
                  onRemoveRole: T
              })
          })
        : null;
}
