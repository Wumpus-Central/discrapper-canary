r.d(n, {
    Z: function () {
        return x;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(772848),
    u = r(924826),
    c = r(91192),
    d = r(442837),
    f = r(481060),
    p = r(749210),
    h = r(434404),
    _ = r(271383),
    m = r(430824),
    g = r(496675),
    E = r(259580),
    v = r(700785),
    y = r(785717),
    b = r(256226),
    I = r(314172),
    T = r(981631),
    S = r(388032),
    A = r(730479);
let C = 4,
    N = 268,
    R = 2,
    O = (e) => {
        if (null == e) return 0;
        let { width: n } = e.getBoundingClientRect();
        return n > 0 ? n + C : 0;
    };
function D(e) {
    let { user: n, currentUser: r, guild: i, guildMember: a, roles: d, highestRole: p, canManageRoles: h, onAddRole: _, onRemoveRole: m } = e,
        g = s.useRef({}),
        D = (e, n) => {
            null != n ? (g.current[e] = n) : delete g.current[e];
        },
        [x, L] = s.useState(d),
        [w, P] = s.useState(N),
        [M, k] = s.useState(!1),
        U = s.useRef(null),
        B = s.useRef(null),
        G = s.useRef(0);
    s.useLayoutEffect(() => {
        G.current = 0;
    }, [d]),
        s.useLayoutEffect(() => {
            if (M) return;
            let e = O(U.current),
                n = O(B.current),
                r = [],
                i = N - e - n;
            for (let e = 0; e < R; e++) {
                let n = e === R - 1 ? i : N;
                for (let e = 0, i = r.length; i < d.length; i++) {
                    let a = d[i],
                        o = g.current[a.id];
                    if (null == o) {
                        0 === G.current && r.push(a);
                        continue;
                    }
                    let s = Math.min(o.getBoundingClientRect().width, n);
                    if (e + s > n) break;
                    (e += s + C), r.push(a);
                }
            }
            L(r.length === x.length ? x : r), P(i), G.current++;
        }, [d, x, M]);
    let Z = s.useMemo(() => 'roles-'.concat((0, l.Z)()), []),
        F = (0, u.ZP)({
            id: Z,
            isEnabled: !0,
            scrollToStart: T.Cyb,
            scrollToEnd: T.Cyb,
            wrap: !0
        }),
        V = d.length,
        j = 0 === V ? S.intl.string(S.t['vR7M+/']) : S.intl.formatToPlainString(S.t.PCs0oq, { numRoles: V }),
        H = (M ? d : x).map((e, a) => {
            var s;
            return (0, o.jsx)(
                b.Z,
                {
                    role: e,
                    guildId: i.id,
                    style: { maxWidth: M || a !== x.length - 1 ? N : w },
                    disableBorderColor: !0,
                    ref: (n) => D(e.id, n),
                    onRemove: () => m(e),
                    canRemove: h ? v.r6(i, r.id, p, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && n.id === r.id
                },
                e.id
            );
        }),
        { trackUserProfileAction: Y } = (0, y.KZ)(),
        W = s.useCallback(() => {
            k(!0), Y({ action: 'EXPAND_ROLES' });
        }, [Y]),
        K = s.useCallback(() => {
            k(!1), Y({ action: 'COLLAPSE_ROLES' });
        }, [Y]);
    return (0, o.jsx)(c.bG, {
        navigator: F,
        children: (0, o.jsx)(c.SJ, {
            children: (e) => {
                let { ref: n, ...r } = e;
                return (0, o.jsxs)('div', {
                    className: A.root,
                    'aria-label': j,
                    ref: n,
                    ...r,
                    children: [
                        H,
                        x.length < d.length
                            ? M
                                ? (0, o.jsx)(f.TooltipContainer, {
                                      text: S.intl.string(S.t.XnXtCg),
                                      children: (0, o.jsx)(f.Clickable, {
                                          onClick: K,
                                          className: A.collapseButton,
                                          children: (0, o.jsx)(E.Z, {
                                              direction: E.Z.Directions.LEFT,
                                              width: 12,
                                              height: 12
                                          })
                                      })
                                  })
                                : (0, o.jsx)(f.TooltipContainer, {
                                      text: S.intl.string(S.t.DY6n4u),
                                      children: (0, o.jsx)(f.Clickable, {
                                          innerRef: U,
                                          onClick: W,
                                          className: A.expandButton,
                                          children: (0, o.jsx)(f.Text, {
                                              variant: 'text-xs/medium',
                                              children: '+'.concat(d.length - x.length)
                                          })
                                      })
                                  })
                            : null,
                        h && null != a
                            ? (0, o.jsx)(I.Z, {
                                  buttonRef: B,
                                  guild: i,
                                  guildMember: a,
                                  numRoles: V,
                                  highestRole: p,
                                  onAddRole: _
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function x(e) {
    let { user: n, currentUser: r, guild: i } = e,
        { trackUserProfileAction: a } = (0, y.KZ)(),
        l = (0, d.e7)([_.ZP], () => _.ZP.getMember(i.id, n.id)),
        u = (0, d.e7)([m.Z], () => m.Z.getRoles(i.id)),
        c = null == l ? void 0 : l.roles,
        f = s.useMemo(
            () =>
                null == c || 0 === c.length
                    ? []
                    : Object.values(u)
                          .filter((e) => c.includes(e.id))
                          .sort((e, n) => {
                              var r, i;
                              let a = (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) !== null,
                                  o = (null === (i = n.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                              return a && !o ? 1 : !a && o ? -1 : 0;
                          }),
            [u, c]
        ),
        E = v.e9(i, r.id),
        [b] = (0, d.Wu)([g.Z], () => [g.Z.can(T.Plq.MANAGE_ROLES, i), null != i ? g.Z.getGuildVersion(i.id) : null]),
        I = s.useCallback(
            (e) => {
                var r, o;
                a({ action: 'REMOVE_ROLE' });
                let s = null !== (o = null == c ? void 0 : c.filter((n) => n !== e.id)) && void 0 !== o ? o : [];
                (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) === null ? p.Z.unassignGuildRoleConnection(i.id, e.id) : h.Z.updateMemberRoles(i.id, n.id, s, [], [e.id]);
            },
            [c, i.id, n.id, a]
        ),
        S = s.useCallback(
            (e) => {
                a({ action: 'ADD_ROLE' });
                let r = null != c ? c : [];
                -1 === r.indexOf(e) && (r = r.concat([e])), h.Z.updateMemberRoles(i.id, n.id, r, [e], []);
            },
            [c, i.id, n.id, a]
        ),
        A = b && null != l;
    return 0 !== f.length || A
        ? (0, o.jsx)(D, {
              user: n,
              currentUser: r,
              guild: i,
              guildMember: l,
              roles: f,
              highestRole: E,
              canManageRoles: b,
              onAddRole: S,
              onRemoveRole: I
          })
        : null;
}
