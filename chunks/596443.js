(t.d(e, { Z: () => V }), t(953529), t(388685), t(539854));
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(954955),
    a = t.n(s),
    o = t(399606),
    g = t(481060),
    f = t(605436),
    v = t(79712),
    c = t(285173),
    h = t(434404),
    E = t(422559),
    u = t(271383),
    d = t(485386),
    C = t(430824),
    B = t(496675),
    w = t(594174),
    D = t(233608),
    M = t(370595),
    I = t(351127),
    p = t(981631),
    H = t(388032),
    b = t(12740),
    Q = t(444021);
function O(A) {
    var e, t, l, s;
    let { permission: a, roleIds: u, guild: C, specMap: w, categoryTitle: D, userId: M } = A,
        b = (0, o.e7)([d.Z], () => d.Z.getRoles(C.id)),
        O = p.Plq[a],
        P = null != (l = null == (e = w[O.toString()]) ? void 0 : e.title) ? l : (0, E.wt)(O),
        V = null != (s = null == (t = w[O.toString()]) ? void 0 : t.description) ? s : '',
        j = I._o.has(O),
        T = I.Qn.includes(a),
        y = u.length,
        m = (0, o.e7)([B.Z], () => B.Z.can(p.Plq.MANAGE_ROLES, C), [C]),
        L = r.useCallback(
            async (A) => {
                m && (await h.Z.open(C.id, p.pNK.ROLES), await h.Z.selectRole(A));
            },
            [m, C.id]
        );
    return (0, n.jsxs)('div', {
        className: i()(Q.permissionItemContainer, { [Q.elevatedPermission]: j }),
        children: [
            (0, n.jsxs)('div', {
                className: Q.permissionItemHeader,
                children: [
                    (0, n.jsxs)('div', {
                        className: Q.permissionTitle,
                        children: [
                            (0, n.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: P
                            }),
                            null != D &&
                                (0, n.jsxs)('div', {
                                    className: Q.permissionItemSubheader,
                                    children: [
                                        (0, n.jsx)(g.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: D
                                        }),
                                        j &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(v.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: g.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, n.jsx)(g.ua7, {
                                                        text: H.intl.string(H.t.GZvXuL),
                                                        children: (A) => {
                                                            var e, t;
                                                            return (0, n.jsxs)(
                                                                g.P3F,
                                                                ((e = (function (A) {
                                                                    for (var e = 1; e < arguments.length; e++) {
                                                                        var t = null != arguments[e] ? arguments[e] : {},
                                                                            n = Object.keys(t);
                                                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                                                            (n = n.concat(
                                                                                Object.getOwnPropertySymbols(t).filter(function (A) {
                                                                                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                                                                                })
                                                                            )),
                                                                            n.forEach(function (e) {
                                                                                var n;
                                                                                ((n = t[e]),
                                                                                    e in A
                                                                                        ? Object.defineProperty(A, e, {
                                                                                              value: n,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0
                                                                                          })
                                                                                        : (A[e] = n));
                                                                            }));
                                                                    }
                                                                    return A;
                                                                })({ className: Q.elevatedPermissionContainer }, A)),
                                                                (t = t =
                                                                    {
                                                                        children: [
                                                                            (0, n.jsx)(g.tQf, {
                                                                                size: 'custom',
                                                                                width: 12,
                                                                                height: 12,
                                                                                color: g.TVs.colors.TEXT_BRAND
                                                                            }),
                                                                            (0, n.jsx)(g.Text, {
                                                                                variant: 'text-xs/normal',
                                                                                color: 'text-brand',
                                                                                children: H.intl.string(H.t.k7Kqj4)
                                                                            })
                                                                        ]
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                                    : (function (A, e) {
                                                                          var t = Object.keys(A);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var n = Object.getOwnPropertySymbols(A);
                                                                              t.push.apply(t, n);
                                                                          }
                                                                          return t;
                                                                      })(Object(t)).forEach(function (A) {
                                                                          Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
                                                                      }),
                                                                e)
                                                            );
                                                        }
                                                    })
                                                ]
                                            }),
                                        !j &&
                                            T &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(v.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: g.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, n.jsx)('div', {
                                                        className: Q.elevatedPermissionContainer,
                                                        children: (0, n.jsx)(g.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-muted',
                                                            children: H.intl.string(H.t.IfqUEB)
                                                        })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, n.jsx)(g.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-default',
                        children: H.intl.format(H.t.KmJI4O, { roleCount: y })
                    })
                ]
            }),
            null != V &&
                (0, n.jsx)('div', {
                    className: Q.permissionItemDescription,
                    children: (0, n.jsx)(g.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: V
                    })
                }),
            (0, n.jsx)('div', {
                className: Q.permissionItemRoleContainer,
                children: u.map((A) =>
                    (0, I.Ov)(A, M)
                        ? (0, n.jsx)(
                              'div',
                              {
                                  className: Q.roleTooltipItem,
                                  children: (0, n.jsx)('div', {
                                      className: Q.roleChiplet,
                                      children: (0, n.jsx)(g.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-default',
                                          children: H.intl.string(H.t.pclUFB)
                                      })
                                  })
                              },
                              A
                          )
                        : (0, n.jsx)(
                              g.P3F,
                              {
                                  className: i()(Q.roleTooltipItem, { [Q.editable]: m && !(0, f.pM)(C.id, A) }),
                                  onClick: () => L(A),
                                  children: (0, n.jsx)(c.Z, {
                                      role: b[A],
                                      guildId: C.id,
                                      className: Q.roleChiplet
                                  })
                              },
                              A
                          )
                )
            })
        ]
    });
}
function P(A, e) {
    return e.toLowerCase().includes(A.toLowerCase());
}
function V(A) {
    let { userId: e, guildId: t, location: l, className: s, onNavigate: f } = A,
        v = (0, o.e7)([w.default], () => w.default.getUser(e), [e]),
        c = (0, o.e7)([C.Z], () => C.Z.getGuild(t), [t]),
        h = (0, o.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]),
        d = (0, I.B2)(e, t, I.pd),
        B = Object.keys(d).length,
        V = r.useMemo(() => (null != c ? D.Z.getGuildPermissionSpecMap(c) : null), [c]),
        j = r.useMemo(() => (null != c ? D.Z.generateGuildPermissionSpec(c) : null), [c]),
        [T, y] = r.useState(''),
        [m, L] = r.useState(''),
        x = r.useMemo(() => a()(L, 300), []),
        Z = r.useCallback(
            (A) => {
                (y(A), x(A));
            },
            [x]
        ),
        N = r.useCallback(() => {
            (y(''), L(''));
        }, []),
        R = r.useMemo(() => {
            if (null == c || null == V || null == h) return null;
            if (0 === B)
                return (0, n.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    children: H.intl.string(H.t.DEBGqK)
                });
            let A = [];
            return (
                null == j ||
                    j.forEach((t) => {
                        t.permissions.forEach((r) => {
                            let l = r.flag,
                                i = I.pd.find((A) => p.Plq[A] === l);
                            if (null == i) return;
                            let s = d[i];
                            if (null != s) {
                                if (m.length > 0) {
                                    var a, o, g, f, v;
                                    let A = null != (f = null == (a = V[l.toString()]) ? void 0 : a.title) ? f : (0, E.wt)(l),
                                        e = null != (v = null == (g = V[l.toString()]) || null == (o = g.description) ? void 0 : o.toString()) ? v : '',
                                        n = t.title,
                                        r = I._o.has(l),
                                        s = I.Qn.includes(i),
                                        c = r ? H.intl.string(H.t.k7Kqj4) : s ? H.intl.string(H.t.IfqUEB) : null,
                                        h = P(m, A),
                                        u = P(m, e),
                                        d = P(m, n),
                                        C = null != c && P(m, c);
                                    if (!h && !u && !d && !C) return;
                                }
                                A.push(
                                    (0, n.jsx)(
                                        O,
                                        {
                                            permission: i,
                                            roleIds: s,
                                            guild: c,
                                            specMap: V,
                                            categoryTitle: t.title,
                                            userId: e
                                        },
                                        i
                                    )
                                );
                            }
                        });
                    }),
                A
            );
        }, [c, V, h, B, j, d, m, e]);
    return null == v || null == h
        ? null
        : (0, n.jsxs)('div', {
              className: i()(b.container, s),
              children: [
                  (0, n.jsx)(M.Z, {
                      guildId: t,
                      userId: e,
                      onNavigate: f
                  }),
                  (0, n.jsx)(g.Ttm, {
                      className: Q.permissionsGroupContainer,
                      children: (0, n.jsx)(g.xJW, {
                          title: H.intl.string(H.t.BBWnpq),
                          children: (0, n.jsxs)('div', {
                              className: Q.permissionsItemContainer,
                              children: [
                                  (0, n.jsx)(g.E1j, {
                                      className: Q.searchBar,
                                      query: T,
                                      placeholder: H.intl.string(H.t['yD9+dH']),
                                      onChange: Z,
                                      onClear: N,
                                      autoComplete: 'off',
                                      inputProps: {
                                          autoCapitalize: 'none',
                                          autoCorrect: 'off',
                                          spellCheck: 'false'
                                      }
                                  }),
                                  R
                              ]
                          })
                      })
                  })
              ]
          });
}
