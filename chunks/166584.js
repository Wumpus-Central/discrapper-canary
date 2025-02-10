n.d(t, { Z: () => R }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(772848),
    s = n(924826),
    o = n(91192),
    l = n(442837),
    u = n(481060),
    c = n(749210),
    d = n(434404),
    f = n(271383),
    _ = n(430824),
    p = n(496675),
    h = n(259580),
    m = n(700785),
    g = n(785717),
    E = n(256226),
    v = n(314172),
    y = n(981631),
    I = n(388032),
    T = n(504172);
let b = 4,
    S = 268,
    A = 2,
    N = (e) => {
        if (null == e) return 0;
        let { width: t } = e.getBoundingClientRect();
        return t > 0 ? t + b : 0;
    };
function C(e) {
    let { user: t, currentUser: n, guild: l, guildMember: c, roles: d, highestRole: f, canManageRoles: _, onAddRole: p, onRemoveRole: C } = e,
        R = r.useRef({}),
        O = (e, t) => {
            null != t ? (R.current[e] = t) : delete R.current[e];
        },
        [D, L] = r.useState(d),
        [x, w] = r.useState(S),
        [P, M] = r.useState(!1),
        k = r.useRef(null),
        U = r.useRef(null),
        G = r.useRef(0);
    r.useLayoutEffect(() => {
        G.current = 0;
    }, [d]),
        r.useLayoutEffect(() => {
            if (P) return;
            let e = N(k.current),
                t = N(U.current),
                n = [],
                i = S - e - t;
            for (let e = 0; e < A; e++) {
                let t = e === A - 1 ? i : S;
                for (let e = 0, i = n.length; i < d.length; i++) {
                    let r = d[i],
                        a = R.current[r.id];
                    if (null == a) {
                        0 === G.current && n.push(r);
                        continue;
                    }
                    let s = Math.min(a.getBoundingClientRect().width, t);
                    if (e + s > t) break;
                    (e += s + b), n.push(r);
                }
            }
            L(n.length === D.length ? D : n), w(i), G.current++;
        }, [d, D, P]);
    let B = r.useMemo(() => 'roles-'.concat((0, a.Z)()), []),
        Z = (0, s.ZP)({
            id: B,
            isEnabled: !0,
            scrollToStart: y.Cyb,
            scrollToEnd: y.Cyb,
            wrap: !0
        }),
        F = d.length,
        V = 0 === F ? I.intl.string(I.t['vR7M+/']) : I.intl.formatToPlainString(I.t.PCs0oq, { numRoles: F }),
        j = (P ? d : D).map((e, r) => {
            var a;
            return (0, i.jsx)(
                E.Z,
                {
                    role: e,
                    guildId: l.id,
                    style: { maxWidth: P || r !== D.length - 1 ? S : x },
                    disableBorderColor: !0,
                    ref: (t) => O(e.id, t),
                    onRemove: () => C(e),
                    canRemove: _ ? m.r6(l, n.id, f, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === n.id
                },
                e.id
            );
        }),
        { trackUserProfileAction: H } = (0, g.KZ)(),
        Y = r.useCallback(() => {
            M(!0), H({ action: 'EXPAND_ROLES' });
        }, [H]),
        W = r.useCallback(() => {
            M(!1), H({ action: 'COLLAPSE_ROLES' });
        }, [H]);
    return (0, i.jsx)(o.bG, {
        navigator: Z,
        children: (0, i.jsx)(o.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)('div', {
                    className: T.root,
                    'aria-label': V,
                    ref: t,
                    ...n,
                    children: [
                        j,
                        D.length < d.length
                            ? P
                                ? (0, i.jsx)(u.DY3, {
                                      text: I.intl.string(I.t.XnXtCg),
                                      children: (0, i.jsx)(u.P3F, {
                                          onClick: W,
                                          className: T.collapseButton,
                                          children: (0, i.jsx)(h.Z, {
                                              direction: h.Z.Directions.LEFT,
                                              width: 12,
                                              height: 12
                                          })
                                      })
                                  })
                                : (0, i.jsx)(u.DY3, {
                                      text: I.intl.string(I.t.DY6n4u),
                                      children: (0, i.jsx)(u.P3F, {
                                          innerRef: k,
                                          onClick: Y,
                                          className: T.expandButton,
                                          children: (0, i.jsx)(u.Text, {
                                              variant: 'text-xs/medium',
                                              children: '+'.concat(d.length - D.length)
                                          })
                                      })
                                  })
                            : null,
                        _ && null != c
                            ? (0, i.jsx)(v.Z, {
                                  buttonRef: U,
                                  guild: l,
                                  guildMember: c,
                                  numRoles: F,
                                  highestRole: f,
                                  onAddRole: p
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function R(e) {
    let { user: t, currentUser: n, guild: a } = e,
        { trackUserProfileAction: s } = (0, g.KZ)(),
        o = (0, l.e7)([f.ZP], () => f.ZP.getMember(a.id, t.id)),
        u = (0, l.e7)([_.Z], () => _.Z.getRoles(a.id)),
        h = null == o ? void 0 : o.roles,
        E = r.useMemo(
            () =>
                null == h || 0 === h.length
                    ? []
                    : Object.values(u)
                          .filter((e) => h.includes(e.id))
                          .sort((e, t) => {
                              var n, i;
                              let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                                  a = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                              return r && !a ? 1 : !r && a ? -1 : 0;
                          }),
            [u, h]
        ),
        v = m.e9(a, n.id),
        [I] = (0, l.Wu)([p.Z], () => [p.Z.can(y.Plq.MANAGE_ROLES, a), null != a ? p.Z.getGuildVersion(a.id) : null]),
        T = r.useCallback(
            (e) => {
                var n, i;
                s({ action: 'REMOVE_ROLE' });
                let r = null !== (i = null == h ? void 0 : h.filter((t) => t !== e.id)) && void 0 !== i ? i : [];
                (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? c.Z.unassignGuildRoleConnection(a.id, e.id) : d.Z.updateMemberRoles(a.id, t.id, r, [], [e.id]);
            },
            [h, a.id, t.id, s]
        ),
        b = r.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let n = null != h ? h : [];
                -1 === n.indexOf(e) && (n = n.concat([e])), d.Z.updateMemberRoles(a.id, t.id, n, [e], []);
            },
            [h, a.id, t.id, s]
        ),
        S = I && null != o;
    return 0 !== E.length || S
        ? (0, i.jsx)(C, {
              user: t,
              currentUser: n,
              guild: a,
              guildMember: o,
              roles: E,
              highestRole: v,
              canManageRoles: I,
              onAddRole: b,
              onRemoveRole: T
          })
        : null;
}
