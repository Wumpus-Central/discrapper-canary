(n.d(t, { Z: () => v }), n(953529), n(388685), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(954955),
    o = n.n(a),
    u = n(399606),
    c = n(481060),
    E = n(79712),
    d = n(285173),
    _ = n(434404),
    A = n(422559),
    T = n(345162),
    I = n(271383),
    g = n(485386),
    m = n(430824),
    N = n(496675),
    O = n(594174),
    f = n(233608),
    R = n(370595),
    S = n(351127),
    C = n(981631),
    h = n(388032),
    p = n(12740),
    D = n(444021);
function U(e) {
    var t, n, i, a;
    let { permission: o, roleIds: I, guild: m, specMap: O, categoryTitle: f, userId: R } = e,
        p = (0, u.Wu)([g.Z], () => g.Z.getManyRoles(m.id, I)),
        U = C.Plq[o],
        L = null != (i = null == (t = O[U.toString()]) ? void 0 : t.title) ? i : (0, A.wt)(U),
        v = null != (a = null == (n = O[U.toString()]) ? void 0 : n.description) ? a : '',
        b = S._o.has(U),
        M = S.Qn.includes(o),
        x = I.length,
        P = (0, u.e7)([N.Z], () => N.Z.can(C.Plq.MANAGE_ROLES, m), [m]),
        j = l.useCallback(
            async (e) => {
                P && (await _.Z.open(m.id, C.pNK.ROLES), await _.Z.selectRole(e));
            },
            [P, m.id]
        );
    return (0, r.jsxs)('div', {
        className: s()(D.permissionItemContainer, { [D.elevatedPermission]: b }),
        children: [
            (0, r.jsxs)('div', {
                className: D.permissionItemHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.permissionTitle,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: L
                            }),
                            null != f &&
                                (0, r.jsxs)('div', {
                                    className: D.permissionItemSubheader,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: f
                                        }),
                                        b &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(E.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: c.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, r.jsx)(c.ua7, {
                                                        text: h.intl.string(h.t.GZvXuL),
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
                                                                })({ className: D.elevatedPermissionContainer }, e)),
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
                                                                                children: h.intl.string(h.t.k7Kqj4)
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
                                        !b &&
                                            M &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(E.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: c.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, r.jsx)('div', {
                                                        className: D.elevatedPermissionContainer,
                                                        children: (0, r.jsx)(c.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-muted',
                                                            children: h.intl.string(h.t.IfqUEB)
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
                        children: h.intl.format(h.t.KmJI4O, { roleCount: x })
                    })
                ]
            }),
            null != v &&
                (0, r.jsx)('div', {
                    className: D.permissionItemDescription,
                    children: (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: v
                    })
                }),
            (0, r.jsx)('div', {
                className: D.permissionItemRoleContainer,
                children: p.map((e) =>
                    (0, S.Ov)(e.id, R)
                        ? (0, r.jsx)(
                              'div',
                              {
                                  className: D.roleTooltipItem,
                                  children: (0, r.jsx)('div', {
                                      className: D.roleChiplet,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-default',
                                          children: h.intl.string(h.t.pclUFB)
                                      })
                                  })
                              },
                              e.id
                          )
                        : (0, r.jsx)(
                              c.P3F,
                              {
                                  className: s()(D.roleTooltipItem, { [D.editable]: P && !(0, T.fI)(e) }),
                                  onClick: () => j(e.id),
                                  children: (0, r.jsx)(d.Z, {
                                      role: e,
                                      guildId: m.id,
                                      className: D.roleChiplet
                                  })
                              },
                              e.id
                          )
                )
            })
        ]
    });
}
function L(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function v(e) {
    let { userId: t, guildId: n, location: i, className: a, onNavigate: E } = e,
        d = (0, u.e7)([O.default], () => O.default.getUser(t), [t]),
        _ = (0, u.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        T = (0, u.e7)([I.ZP], () => I.ZP.getMember(n, t), [n, t]),
        g = (0, S.B2)(t, n, S.pd),
        N = Object.keys(g).length,
        v = l.useMemo(() => (null != _ ? f.Z.getGuildPermissionSpecMap(_) : null), [_]),
        b = l.useMemo(() => (null != _ ? f.Z.generateGuildPermissionSpec(_) : null), [_]),
        [M, x] = l.useState(''),
        [P, j] = l.useState(''),
        y = l.useMemo(() => o()(j, 300), []),
        G = l.useCallback(
            (e) => {
                (x(e), y(e));
            },
            [y]
        ),
        w = l.useCallback(() => {
            (x(''), j(''));
        }, []),
        F = l.useMemo(() => {
            if (null == _ || null == v || null == T) return null;
            if (0 === N)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: h.intl.string(h.t.DEBGqK)
                });
            let e = [];
            return (
                null == b ||
                    b.forEach((n) => {
                        n.permissions.forEach((l) => {
                            let i = l.flag,
                                s = S.pd.find((e) => C.Plq[e] === i);
                            if (null == s) return;
                            let a = g[s];
                            if (null != a) {
                                if (P.length > 0) {
                                    var o, u, c, E, d;
                                    let e = null != (E = null == (o = v[i.toString()]) ? void 0 : o.title) ? E : (0, A.wt)(i),
                                        t = null != (d = null == (c = v[i.toString()]) || null == (u = c.description) ? void 0 : u.toString()) ? d : '',
                                        r = n.title,
                                        l = S._o.has(i),
                                        a = S.Qn.includes(s),
                                        _ = l ? h.intl.string(h.t.k7Kqj4) : a ? h.intl.string(h.t.IfqUEB) : null,
                                        T = L(P, e),
                                        I = L(P, t),
                                        g = L(P, r),
                                        m = null != _ && L(P, _);
                                    if (!T && !I && !g && !m) return;
                                }
                                e.push(
                                    (0, r.jsx)(
                                        U,
                                        {
                                            permission: s,
                                            roleIds: a,
                                            guild: _,
                                            specMap: v,
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
        }, [_, v, T, N, b, g, P, t]);
    return null == d || null == T
        ? null
        : (0, r.jsxs)('div', {
              className: s()(p.container, a),
              children: [
                  (0, r.jsx)(R.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: E
                  }),
                  (0, r.jsx)(c.Ttm, {
                      className: D.permissionsGroupContainer,
                      children: (0, r.jsx)(c.xJW, {
                          title: h.intl.string(h.t.BBWnpq),
                          children: (0, r.jsxs)('div', {
                              className: D.permissionsItemContainer,
                              children: [
                                  (0, r.jsx)(c.E1j, {
                                      size: 'sm',
                                      className: D.searchBar,
                                      query: M,
                                      placeholder: h.intl.string(h.t['yD9+dH']),
                                      onChange: G,
                                      onClear: w,
                                      autoComplete: 'off',
                                      inputProps: {
                                          autoCapitalize: 'none',
                                          autoCorrect: 'off',
                                          spellCheck: 'false'
                                      }
                                  }),
                                  F
                              ]
                          })
                      })
                  })
              ]
          });
}
