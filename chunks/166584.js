n.d(t, { Z: () => x }), n(388685), n(539854), n(642613);
var r = n(200651),
    i = n(192379),
    a = n(772848),
    o = n(924826),
    s = n(91192),
    l = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(434404),
    f = n(271383),
    _ = n(430824),
    p = n(496675),
    h = n(259580),
    m = n(700785),
    g = n(785717),
    E = n(256226),
    b = n(314172),
    y = n(981631),
    v = n(388032),
    O = n(701991);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = 4,
    P = 268,
    w = 2,
    D = (e) => {
        if (null == e) return 0;
        let { width: t } = e.getBoundingClientRect();
        return t > 0 ? t + R : 0;
    };
function L(e) {
    let { user: t, currentUser: n, guild: l, guildMember: u, roles: d, highestRole: f, canManageRoles: _, onAddRole: p, onRemoveRole: I } = e,
        T = i.useRef({}),
        C = (e, t) => {
            null != t ? (T.current[e] = t) : delete T.current[e];
        },
        [L, x] = i.useState(d),
        [M, k] = i.useState(P),
        [j, U] = i.useState(!1),
        G = i.useRef(null),
        B = i.useRef(null),
        F = i.useRef(0);
    i.useLayoutEffect(() => {
        F.current = 0;
    }, [d]),
        i.useLayoutEffect(() => {
            if (j) return;
            let e = D(G.current),
                t = D(B.current),
                n = [],
                r = P - e - t;
            for (let e = 0; e < w; e++) {
                let t = e === w - 1 ? r : P;
                for (let e = 0, r = n.length; r < d.length; r++) {
                    let i = d[r],
                        a = T.current[i.id];
                    if (null == a) {
                        0 === F.current && n.push(i);
                        continue;
                    }
                    let o = Math.min(a.getBoundingClientRect().width, t);
                    if (e + o > t) break;
                    (e += o + R), n.push(i);
                }
            }
            x(n.length === L.length ? L : n), k(r), F.current++;
        }, [d, L, j]);
    let V = i.useMemo(() => 'roles-'.concat((0, a.Z)()), []),
        Z = (0, o.ZP)({
            id: V,
            isEnabled: !0,
            scrollToStart: y.Cyb,
            scrollToEnd: y.Cyb,
            wrap: !0
        }),
        H = d.length,
        Y = 0 === H ? v.intl.string(v.t['vR7M+/']) : v.intl.formatToPlainString(v.t.PCs0oq, { numRoles: H }),
        W = (j ? d : L).map((e, i) => {
            var a;
            return (0, r.jsx)(
                E.Z,
                {
                    role: e,
                    guildId: l.id,
                    style: { maxWidth: j || i !== L.length - 1 ? P : M },
                    disableBorderColor: !0,
                    ref: (t) => C(e.id, t),
                    onRemove: () => I(e),
                    canRemove: _ ? m.r6(l, n.id, f, e) : (null == (a = e.tags) ? void 0 : a.guild_connections) === null && t.id === n.id
                },
                e.id
            );
        }),
        { trackUserProfileAction: K } = (0, g.KZ)(),
        z = i.useCallback(() => {
            U(!0), K({ action: 'EXPAND_ROLES' });
        }, [K]),
        q = i.useCallback(() => {
            U(!1), K({ action: 'COLLAPSE_ROLES' });
        }, [K]);
    return (0, r.jsx)(s.bG, {
        navigator: Z,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = N(e, ['ref']);
                return (0, r.jsxs)(
                    'div',
                    A(
                        S(
                            {
                                className: O.root,
                                'aria-label': Y,
                                ref: t
                            },
                            n
                        ),
                        {
                            children: [
                                W,
                                L.length < d.length
                                    ? j
                                        ? (0, r.jsx)(c.DY3, {
                                              text: v.intl.string(v.t.XnXtCg),
                                              children: (0, r.jsx)(c.P3F, {
                                                  onClick: q,
                                                  className: O.collapseButton,
                                                  children: (0, r.jsx)(h.Z, {
                                                      direction: h.Z.Directions.LEFT,
                                                      width: 12,
                                                      height: 12
                                                  })
                                              })
                                          })
                                        : (0, r.jsx)(c.DY3, {
                                              text: v.intl.string(v.t.DY6n4u),
                                              children: (0, r.jsx)(c.P3F, {
                                                  innerRef: G,
                                                  onClick: z,
                                                  className: O.expandButton,
                                                  children: (0, r.jsx)(c.Text, {
                                                      variant: 'text-xs/medium',
                                                      children: '+'.concat(d.length - L.length)
                                                  })
                                              })
                                          })
                                    : null,
                                _ && null != u
                                    ? (0, r.jsx)(b.Z, {
                                          buttonRef: B,
                                          guild: l,
                                          guildMember: u,
                                          numRoles: H,
                                          highestRole: f,
                                          onAddRole: p
                                      })
                                    : null
                            ]
                        }
                    )
                );
            }
        })
    });
}
function x(e) {
    let { user: t, currentUser: n, guild: a } = e,
        { trackUserProfileAction: o } = (0, g.KZ)(),
        s = (0, l.e7)([f.ZP], () => f.ZP.getMember(a.id, t.id)),
        c = (0, l.e7)([_.Z], () => _.Z.getRoles(a.id)),
        h = null == s ? void 0 : s.roles,
        E = i.useMemo(
            () =>
                null == h || 0 === h.length
                    ? []
                    : Object.values(c)
                          .filter((e) => h.includes(e.id))
                          .sort((e, t) => {
                              var n, r;
                              let i = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
                                  a = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
                              return i && !a ? 1 : !i && a ? -1 : 0;
                          }),
            [c, h]
        ),
        b = m.e9(a, n.id),
        [v] = (0, l.Wu)([p.Z], () => [p.Z.can(y.Plq.MANAGE_ROLES, a), null != a ? p.Z.getGuildVersion(a.id) : null]),
        O = i.useCallback(
            (e) => {
                var n, r;
                o({ action: 'REMOVE_ROLE' });
                let i = null != (r = null == h ? void 0 : h.filter((t) => t !== e.id)) ? r : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null ? u.Z.unassignGuildRoleConnection(a.id, e.id) : d.Z.updateMemberRoles(a.id, t.id, i, [], [e.id]);
            },
            [h, a.id, t.id, o]
        ),
        I = i.useCallback(
            (e) => {
                o({ action: 'ADD_ROLE' });
                let n = null != h ? h : [];
                -1 === n.indexOf(e) && (n = n.concat([e])), d.Z.updateMemberRoles(a.id, t.id, n, [e], []);
            },
            [h, a.id, t.id, o]
        ),
        S = v && null != s;
    return 0 !== E.length || S
        ? (0, r.jsx)(L, {
              user: t,
              currentUser: n,
              guild: a,
              guildMember: s,
              roles: E,
              highestRole: b,
              canManageRoles: v,
              onAddRole: I,
              onRemoveRole: O
          })
        : null;
}
