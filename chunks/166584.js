r.d(n, {
    Z: function () {
        return L;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(772848),
    u = r(924826),
    c = r(91192),
    d = r(442837),
    f = r(481060),
    _ = r(749210),
    h = r(434404),
    p = r(271383),
    m = r(430824),
    g = r(496675),
    E = r(259580),
    v = r(700785),
    I = r(785717),
    T = r(256226),
    b = r(314172),
    y = r(981631),
    S = r(388032),
    A = r(730479);
let N = 4,
    C = 268,
    R = 2,
    O = (e) => {
        if (null == e) return 0;
        let { width: n } = e.getBoundingClientRect();
        return n > 0 ? n + N : 0;
    };
function D(e) {
    let { user: n, currentUser: r, guild: i, guildMember: a, roles: d, highestRole: _, canManageRoles: h, onAddRole: p, onRemoveRole: m } = e,
        g = o.useRef({}),
        D = (e, n) => {
            null != n ? (g.current[e] = n) : delete g.current[e];
        },
        [L, x] = o.useState(d),
        [w, P] = o.useState(C),
        [M, k] = o.useState(!1),
        U = o.useRef(null),
        B = o.useRef(null),
        G = o.useRef(0);
    o.useLayoutEffect(() => {
        G.current = 0;
    }, [d]),
        o.useLayoutEffect(() => {
            if (M) return;
            let e = O(U.current),
                n = O(B.current),
                r = [],
                i = C - e - n;
            for (let e = 0; e < R; e++) {
                let n = e === R - 1 ? i : C;
                for (let e = 0, i = r.length; i < d.length; i++) {
                    let a = d[i],
                        s = g.current[a.id];
                    if (null == s) {
                        0 === G.current && r.push(a);
                        continue;
                    }
                    let o = Math.min(s.getBoundingClientRect().width, n);
                    if (e + o > n) break;
                    (e += o + N), r.push(a);
                }
            }
            x(r.length === L.length ? L : r), P(i), G.current++;
        }, [d, L, M]);
    let Z = o.useMemo(() => 'roles-'.concat((0, l.Z)()), []),
        F = (0, u.ZP)({
            id: Z,
            isEnabled: !0,
            scrollToStart: y.Cyb,
            scrollToEnd: y.Cyb,
            wrap: !0
        }),
        V = d.length,
        j = 0 === V ? S.intl.string(S.t['vR7M+/']) : S.intl.formatToPlainString(S.t.PCs0oq, { numRoles: V }),
        H = (M ? d : L).map((e, a) => {
            var o;
            return (0, s.jsx)(
                T.Z,
                {
                    role: e,
                    guildId: i.id,
                    style: { maxWidth: M || a !== L.length - 1 ? C : w },
                    disableBorderColor: !0,
                    ref: (n) => D(e.id, n),
                    onRemove: () => m(e),
                    canRemove: h ? v.r6(i, r.id, _, e) : (null === (o = e.tags) || void 0 === o ? void 0 : o.guild_connections) === null && n.id === r.id
                },
                e.id
            );
        }),
        { trackUserProfileAction: Y } = (0, I.KZ)(),
        W = o.useCallback(() => {
            k(!0), Y({ action: 'EXPAND_ROLES' });
        }, [Y]),
        K = o.useCallback(() => {
            k(!1), Y({ action: 'COLLAPSE_ROLES' });
        }, [Y]);
    return (0, s.jsx)(c.bG, {
        navigator: F,
        children: (0, s.jsx)(c.SJ, {
            children: (e) => {
                let { ref: n, ...r } = e;
                return (0, s.jsxs)('div', {
                    className: A.root,
                    'aria-label': j,
                    ref: n,
                    ...r,
                    children: [
                        H,
                        L.length < d.length
                            ? M
                                ? (0, s.jsx)(f.TooltipContainer, {
                                      text: S.intl.string(S.t.XnXtCg),
                                      children: (0, s.jsx)(f.Clickable, {
                                          onClick: K,
                                          className: A.collapseButton,
                                          children: (0, s.jsx)(E.Z, {
                                              direction: E.Z.Directions.LEFT,
                                              width: 12,
                                              height: 12
                                          })
                                      })
                                  })
                                : (0, s.jsx)(f.TooltipContainer, {
                                      text: S.intl.string(S.t.DY6n4u),
                                      children: (0, s.jsx)(f.Clickable, {
                                          innerRef: U,
                                          onClick: W,
                                          className: A.expandButton,
                                          children: (0, s.jsx)(f.Text, {
                                              variant: 'text-xs/medium',
                                              children: '+'.concat(d.length - L.length)
                                          })
                                      })
                                  })
                            : null,
                        h && null != a
                            ? (0, s.jsx)(b.Z, {
                                  buttonRef: B,
                                  guild: i,
                                  guildMember: a,
                                  numRoles: V,
                                  highestRole: _,
                                  onAddRole: p
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function L(e) {
    let { user: n, currentUser: r, guild: i } = e,
        { trackUserProfileAction: a } = (0, I.KZ)(),
        l = (0, d.e7)([p.ZP], () => p.ZP.getMember(i.id, n.id)),
        u = (0, d.e7)([m.Z], () => m.Z.getRoles(i.id)),
        c = null == l ? void 0 : l.roles,
        f = o.useMemo(
            () =>
                null == c || 0 === c.length
                    ? []
                    : Object.values(u)
                          .filter((e) => c.includes(e.id))
                          .sort((e, n) => {
                              var r, i;
                              let a = (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) !== null,
                                  s = (null === (i = n.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                              return a && !s ? 1 : !a && s ? -1 : 0;
                          }),
            [u, c]
        ),
        E = v.e9(i, r.id),
        [T] = (0, d.Wu)([g.Z], () => [g.Z.can(y.Plq.MANAGE_ROLES, i), null != i ? g.Z.getGuildVersion(i.id) : null]),
        b = o.useCallback(
            (e) => {
                var r, s;
                a({ action: 'REMOVE_ROLE' });
                let o = null !== (s = null == c ? void 0 : c.filter((n) => n !== e.id)) && void 0 !== s ? s : [];
                (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) === null ? _.Z.unassignGuildRoleConnection(i.id, e.id) : h.Z.updateMemberRoles(i.id, n.id, o, [], [e.id]);
            },
            [c, i.id, n.id, a]
        ),
        S = o.useCallback(
            (e) => {
                a({ action: 'ADD_ROLE' });
                let r = null != c ? c : [];
                -1 === r.indexOf(e) && (r = r.concat([e])), h.Z.updateMemberRoles(i.id, n.id, r, [e], []);
            },
            [c, i.id, n.id, a]
        ),
        A = T && null != l;
    return 0 !== f.length || A
        ? (0, s.jsx)(D, {
              user: n,
              currentUser: r,
              guild: i,
              guildMember: l,
              roles: f,
              highestRole: E,
              canManageRoles: T,
              onAddRole: S,
              onRemoveRole: b
          })
        : null;
}
