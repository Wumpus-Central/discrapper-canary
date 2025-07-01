(n.d(t, { Z: () => x }), n(953529), n(388685), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(954955),
    o = n.n(a),
    u = n(399606),
    c = n(481060),
    d = n(605436),
    E = n(79712),
    _ = n(285173),
    A = n(434404),
    m = n(422559),
    T = n(271383),
    f = n(485386),
    g = n(430824),
    I = n(496675),
    h = n(594174),
    O = n(233608),
    N = n(370595),
    p = n(351127),
    R = n(981631),
    S = n(388032),
    C = n(12740),
    b = n(444021);
function v(e) {
    var t, n, i, a;
    let { permission: o, roleIds: T, guild: g, specMap: h, categoryTitle: O, userId: N } = e,
        C = (0, u.e7)([f.Z], () => f.Z.getRoles(g.id)),
        v = R.Plq[o],
        D = null != (i = null == (t = h[v.toString()]) ? void 0 : t.title) ? i : (0, m.wt)(v),
        x = null != (a = null == (n = h[v.toString()]) ? void 0 : n.description) ? a : '',
        M = p._o.has(v),
        L = p.Qn.includes(o),
        U = T.length,
        j = (0, u.e7)([I.Z], () => I.Z.can(R.Plq.MANAGE_ROLES, g), [g]),
        P = l.useCallback(
            async (e) => {
                j && (await A.Z.open(g.id, R.pNK.ROLES), await A.Z.selectRole(e));
            },
            [j, g.id]
        );
    return (0, r.jsxs)('div', {
        className: s()(b.permissionItemContainer, { [b.elevatedPermission]: M }),
        children: [
            (0, r.jsxs)('div', {
                className: b.permissionItemHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.permissionTitle,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: D
                            }),
                            null != O &&
                                (0, r.jsxs)('div', {
                                    className: b.permissionItemSubheader,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: O
                                        }),
                                        M &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(E.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: c.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, r.jsx)(c.ua7, {
                                                        text: S.intl.string(S.t.GZvXuL),
                                                        children: (e) => {
                                                            var t, n;
                                                            return (0, r.jsxs)(
                                                                c.P3F,
                                                                ((t = (function (e) {
                                                                    for (var t = 1; t < arguments.length; t++) {
                                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                                            r = Object.keys(n);
                                                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                                                            (r = r.concat(
                                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                })
                                                                            )),
                                                                            r.forEach(function (t) {
                                                                                var r;
                                                                                ((r = n[t]),
                                                                                    t in e
                                                                                        ? Object.defineProperty(e, t, {
                                                                                              value: r,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0
                                                                                          })
                                                                                        : (e[t] = r));
                                                                            }));
                                                                    }
                                                                    return e;
                                                                })({ className: b.elevatedPermissionContainer }, e)),
                                                                (n = n =
                                                                    {
                                                                        children: [
                                                                            (0, r.jsx)(c.tQf, {
                                                                                size: 'custom',
                                                                                width: 12,
                                                                                height: 12,
                                                                                color: c.TVs.colors.TEXT_BRAND
                                                                            }),
                                                                            (0, r.jsx)(c.Text, {
                                                                                variant: 'text-xs/normal',
                                                                                color: 'text-brand',
                                                                                children: S.intl.string(S.t.k7Kqj4)
                                                                            })
                                                                        ]
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                    : (function (e, t) {
                                                                          var n = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var r = Object.getOwnPropertySymbols(e);
                                                                              n.push.apply(n, r);
                                                                          }
                                                                          return n;
                                                                      })(Object(n)).forEach(function (e) {
                                                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                                      }),
                                                                t)
                                                            );
                                                        }
                                                    })
                                                ]
                                            }),
                                        !M &&
                                            L &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(E.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: c.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, r.jsx)('div', {
                                                        className: b.elevatedPermissionContainer,
                                                        children: (0, r.jsx)(c.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-muted',
                                                            children: S.intl.string(S.t.IfqUEB)
                                                        })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-default',
                        children: S.intl.format(S.t.KmJI4O, { roleCount: U })
                    })
                ]
            }),
            null != x &&
                (0, r.jsx)('div', {
                    className: b.permissionItemDescription,
                    children: (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: x
                    })
                }),
            (0, r.jsx)('div', {
                className: b.permissionItemRoleContainer,
                children: T.map((e) =>
                    (0, p.Ov)(e, N)
                        ? (0, r.jsx)(
                              'div',
                              {
                                  className: b.roleTooltipItem,
                                  children: (0, r.jsx)('div', {
                                      className: b.roleChiplet,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-default',
                                          children: S.intl.string(S.t.pclUFB)
                                      })
                                  })
                              },
                              e
                          )
                        : (0, r.jsx)(
                              c.P3F,
                              {
                                  className: s()(b.roleTooltipItem, { [b.editable]: j && !(0, d.pM)(g.id, e) }),
                                  onClick: () => P(e),
                                  children: (0, r.jsx)(_.Z, {
                                      role: C[e],
                                      guildId: g.id,
                                      className: b.roleChiplet
                                  })
                              },
                              e
                          )
                )
            })
        ]
    });
}
function D(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function x(e) {
    let { userId: t, guildId: n, location: i, className: a, onNavigate: d } = e,
        E = (0, u.e7)([h.default], () => h.default.getUser(t), [t]),
        _ = (0, u.e7)([g.Z], () => g.Z.getGuild(n), [n]),
        A = (0, u.e7)([T.ZP], () => T.ZP.getMember(n, t), [n, t]),
        f = (0, p.B2)(t, n, p.pd),
        I = Object.keys(f).length,
        x = l.useMemo(() => (null != _ ? O.Z.getGuildPermissionSpecMap(_) : null), [_]),
        M = l.useMemo(() => (null != _ ? O.Z.generateGuildPermissionSpec(_) : null), [_]),
        [L, U] = l.useState(''),
        [j, P] = l.useState(''),
        y = l.useMemo(() => o()(P, 300), []),
        w = l.useCallback(
            (e) => {
                (U(e), y(e));
            },
            [y]
        ),
        G = l.useCallback(() => {
            (U(''), P(''));
        }, []),
        k = l.useMemo(() => {
            if (null == _ || null == x || null == A) return null;
            if (0 === I)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: S.intl.string(S.t.DEBGqK)
                });
            let e = [];
            return (
                null == M ||
                    M.forEach((n) => {
                        n.permissions.forEach((l) => {
                            let i = l.flag,
                                s = p.pd.find((e) => R.Plq[e] === i);
                            if (null == s) return;
                            let a = f[s];
                            if (null != a) {
                                if (j.length > 0) {
                                    var o, u, c, d, E;
                                    let e = null != (d = null == (o = x[i.toString()]) ? void 0 : o.title) ? d : (0, m.wt)(i),
                                        t = null != (E = null == (c = x[i.toString()]) || null == (u = c.description) ? void 0 : u.toString()) ? E : '',
                                        r = n.title,
                                        l = p._o.has(i),
                                        a = p.Qn.includes(s),
                                        _ = l ? S.intl.string(S.t.k7Kqj4) : a ? S.intl.string(S.t.IfqUEB) : null,
                                        A = D(j, e),
                                        T = D(j, t),
                                        f = D(j, r),
                                        g = null != _ && D(j, _);
                                    if (!A && !T && !f && !g) return;
                                }
                                e.push(
                                    (0, r.jsx)(
                                        v,
                                        {
                                            permission: s,
                                            roleIds: a,
                                            guild: _,
                                            specMap: x,
                                            categoryTitle: n.title,
                                            userId: t
                                        },
                                        s
                                    )
                                );
                            }
                        });
                    }),
                e
            );
        }, [_, x, A, I, M, f, j, t]);
    return null == E || null == A
        ? null
        : (0, r.jsxs)('div', {
              className: s()(C.container, a),
              children: [
                  (0, r.jsx)(N.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: d
                  }),
                  (0, r.jsx)(c.Ttm, {
                      className: b.permissionsGroupContainer,
                      children: (0, r.jsx)(c.xJW, {
                          title: S.intl.string(S.t.BBWnpq),
                          children: (0, r.jsxs)('div', {
                              className: b.permissionsItemContainer,
                              children: [
                                  (0, r.jsx)(c.E1j, {
                                      className: b.searchBar,
                                      query: L,
                                      placeholder: S.intl.string(S.t['yD9+dH']),
                                      onChange: w,
                                      onClear: G,
                                      autoComplete: 'off',
                                      inputProps: {
                                          autoCapitalize: 'none',
                                          autoCorrect: 'off',
                                          spellCheck: 'false'
                                      }
                                  }),
                                  k
                              ]
                          })
                      })
                  })
              ]
          });
}
