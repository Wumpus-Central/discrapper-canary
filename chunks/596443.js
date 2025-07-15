(n.d(t, { Z: () => U }), n(953529), n(388685), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(954955),
    o = n.n(a),
    u = n(399606),
    c = n(481060),
    E = n(605436),
    d = n(79712),
    _ = n(285173),
    A = n(434404),
    T = n(422559),
    I = n(271383),
    g = n(485386),
    m = n(430824),
    f = n(496675),
    O = n(594174),
    N = n(233608),
    h = n(370595),
    R = n(351127),
    p = n(981631),
    S = n(388032),
    C = n(12740),
    b = n(444021);
function D(e) {
    var t, n, i, a;
    let { permission: o, roleIds: I, guild: m, specMap: O, categoryTitle: N, userId: h } = e,
        C = (0, u.e7)([g.Z], () => g.Z.getRoles(m.id)),
        D = p.Plq[o],
        v = null != (i = null == (t = O[D.toString()]) ? void 0 : t.title) ? i : (0, T.wt)(D),
        U = null != (a = null == (n = O[D.toString()]) ? void 0 : n.description) ? a : '',
        L = R._o.has(D),
        M = R.Qn.includes(o),
        x = I.length,
        P = (0, u.e7)([f.Z], () => f.Z.can(p.Plq.MANAGE_ROLES, m), [m]),
        j = l.useCallback(
            async (e) => {
                P && (await A.Z.open(m.id, p.pNK.ROLES), await A.Z.selectRole(e));
            },
            [P, m.id]
        );
    return (0, r.jsxs)('div', {
        className: s()(b.permissionItemContainer, { [b.elevatedPermission]: L }),
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
                                children: v
                            }),
                            null != N &&
                                (0, r.jsxs)('div', {
                                    className: b.permissionItemSubheader,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: N
                                        }),
                                        L &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(d.Z, {
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
                                        !L &&
                                            M &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(d.Z, {
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
                        children: S.intl.format(S.t.KmJI4O, { roleCount: x })
                    })
                ]
            }),
            null != U &&
                (0, r.jsx)('div', {
                    className: b.permissionItemDescription,
                    children: (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: U
                    })
                }),
            (0, r.jsx)('div', {
                className: b.permissionItemRoleContainer,
                children: I.map((e) =>
                    (0, R.Ov)(e, h)
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
                                  className: s()(b.roleTooltipItem, { [b.editable]: P && !(0, E.pM)(m.id, e) }),
                                  onClick: () => j(e),
                                  children: (0, r.jsx)(_.Z, {
                                      role: C[e],
                                      guildId: m.id,
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
function v(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function U(e) {
    let { userId: t, guildId: n, location: i, className: a, onNavigate: E } = e,
        d = (0, u.e7)([O.default], () => O.default.getUser(t), [t]),
        _ = (0, u.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        A = (0, u.e7)([I.ZP], () => I.ZP.getMember(n, t), [n, t]),
        g = (0, R.B2)(t, n, R.pd),
        f = Object.keys(g).length,
        U = l.useMemo(() => (null != _ ? N.Z.getGuildPermissionSpecMap(_) : null), [_]),
        L = l.useMemo(() => (null != _ ? N.Z.generateGuildPermissionSpec(_) : null), [_]),
        [M, x] = l.useState(''),
        [P, j] = l.useState(''),
        y = l.useMemo(() => o()(j, 300), []),
        w = l.useCallback(
            (e) => {
                (x(e), y(e));
            },
            [y]
        ),
        G = l.useCallback(() => {
            (x(''), j(''));
        }, []),
        z = l.useMemo(() => {
            if (null == _ || null == U || null == A) return null;
            if (0 === f)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: S.intl.string(S.t.DEBGqK)
                });
            let e = [];
            return (
                null == L ||
                    L.forEach((n) => {
                        n.permissions.forEach((l) => {
                            let i = l.flag,
                                s = R.pd.find((e) => p.Plq[e] === i);
                            if (null == s) return;
                            let a = g[s];
                            if (null != a) {
                                if (P.length > 0) {
                                    var o, u, c, E, d;
                                    let e = null != (E = null == (o = U[i.toString()]) ? void 0 : o.title) ? E : (0, T.wt)(i),
                                        t = null != (d = null == (c = U[i.toString()]) || null == (u = c.description) ? void 0 : u.toString()) ? d : '',
                                        r = n.title,
                                        l = R._o.has(i),
                                        a = R.Qn.includes(s),
                                        _ = l ? S.intl.string(S.t.k7Kqj4) : a ? S.intl.string(S.t.IfqUEB) : null,
                                        A = v(P, e),
                                        I = v(P, t),
                                        g = v(P, r),
                                        m = null != _ && v(P, _);
                                    if (!A && !I && !g && !m) return;
                                }
                                e.push(
                                    (0, r.jsx)(
                                        D,
                                        {
                                            permission: s,
                                            roleIds: a,
                                            guild: _,
                                            specMap: U,
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
        }, [_, U, A, f, L, g, P, t]);
    return null == d || null == A
        ? null
        : (0, r.jsxs)('div', {
              className: s()(C.container, a),
              children: [
                  (0, r.jsx)(h.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: E
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
                                      query: M,
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
                                  z
                              ]
                          })
                      })
                  })
              ]
          });
}
