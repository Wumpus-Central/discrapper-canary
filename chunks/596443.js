n.d(t, { Z: () => N }), n(953529), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(954955),
    s = n.n(a),
    c = n(399606),
    u = n(481060),
    d = n(605436),
    p = n(79712),
    h = n(285173),
    f = n(434404),
    m = n(422559),
    g = n(271383),
    b = n(485386),
    _ = n(430824),
    y = n(496675),
    C = n(594174),
    x = n(233608),
    v = n(370595),
    j = n(351127),
    O = n(981631),
    E = n(388032),
    I = n(12740),
    S = n(444021);
function P(e) {
    var t, n, l, a;
    let { permission: s, roleIds: g, guild: _, specMap: C, categoryTitle: x, userId: v } = e,
        I = (0, c.e7)([b.Z], () => b.Z.getRoles(_.id)),
        P = O.Plq[s],
        Z = null != (l = null == (t = C[P.toString()]) ? void 0 : t.title) ? l : (0, m.wt)(P),
        N = null != (a = null == (n = C[P.toString()]) ? void 0 : n.description) ? a : '',
        T = j._o.has(P),
        A = j.Qn.includes(s),
        w = g.length,
        R = (0, c.e7)([y.Z], () => y.Z.can(O.Plq.MANAGE_ROLES, _), [_]),
        k = i.useCallback(
            async (e) => {
                R && (await f.Z.open(_.id, O.pNK.ROLES), await f.Z.selectRole(e));
            },
            [R, _.id]
        );
    return (0, r.jsxs)('div', {
        className: o()(S.permissionItemContainer, { [S.elevatedPermission]: T }),
        children: [
            (0, r.jsxs)('div', {
                className: S.permissionItemHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.permissionTitle,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: Z
                            }),
                            null != x &&
                                (0, r.jsxs)('div', {
                                    className: S.permissionItemSubheader,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: x
                                        }),
                                        T &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(p.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: u.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, r.jsx)(u.ua7, {
                                                        text: E.intl.string(E.t.GZvXuL),
                                                        children: (e) => {
                                                            var t, n;
                                                            return (0, r.jsxs)(
                                                                u.P3F,
                                                                ((t = (function (e) {
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
                                                                                var r;
                                                                                (r = n[t]),
                                                                                    t in e
                                                                                        ? Object.defineProperty(e, t, {
                                                                                              value: r,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0
                                                                                          })
                                                                                        : (e[t] = r);
                                                                            });
                                                                    }
                                                                    return e;
                                                                })({ className: S.elevatedPermissionContainer }, e)),
                                                                (n = n =
                                                                    {
                                                                        children: [
                                                                            (0, r.jsx)(u.tQf, {
                                                                                size: 'custom',
                                                                                width: 12,
                                                                                height: 12,
                                                                                color: u.TVs.colors.TEXT_BRAND
                                                                            }),
                                                                            (0, r.jsx)(u.Text, {
                                                                                variant: 'text-xs/normal',
                                                                                color: 'text-brand',
                                                                                children: E.intl.string(E.t.k7Kqj4)
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
                                        !T &&
                                            A &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(p.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: u.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, r.jsx)('div', {
                                                        className: S.elevatedPermissionContainer,
                                                        children: (0, r.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-muted',
                                                            children: E.intl.string(E.t.IfqUEB)
                                                        })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-default',
                        children: E.intl.format(E.t.KmJI4O, { roleCount: w })
                    })
                ]
            }),
            null != N &&
                (0, r.jsx)('div', {
                    className: S.permissionItemDescription,
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: N
                    })
                }),
            (0, r.jsx)('div', {
                className: S.permissionItemRoleContainer,
                children: g.map((e) =>
                    (0, j.Ov)(e, v)
                        ? (0, r.jsx)(
                              'div',
                              {
                                  className: S.roleTooltipItem,
                                  children: (0, r.jsx)('div', {
                                      className: S.roleChiplet,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-default',
                                          children: E.intl.string(E.t.pclUFB)
                                      })
                                  })
                              },
                              e
                          )
                        : (0, r.jsx)(
                              u.P3F,
                              {
                                  className: o()(S.roleTooltipItem, { [S.editable]: R && !(0, d.pM)(_.id, e) }),
                                  onClick: () => k(e),
                                  children: (0, r.jsx)(h.Z, {
                                      role: I[e],
                                      guildId: _.id,
                                      className: S.roleChiplet
                                  })
                              },
                              e
                          )
                )
            })
        ]
    });
}
function Z(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function N(e) {
    let { userId: t, guildId: n, location: l, className: a, onNavigate: d } = e,
        p = (0, c.e7)([C.default], () => C.default.getUser(t), [t]),
        h = (0, c.e7)([_.Z], () => _.Z.getGuild(n), [n]),
        f = (0, c.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]),
        b = (0, j.B2)(t, n, j.pd),
        y = Object.keys(b).length,
        N = i.useMemo(() => (null != h ? x.Z.getGuildPermissionSpecMap(h) : null), [h]),
        T = i.useMemo(() => (null != h ? x.Z.generateGuildPermissionSpec(h) : null), [h]),
        [A, w] = i.useState(''),
        [R, k] = i.useState(''),
        M = i.useMemo(() => s()(k, 300), []),
        D = i.useCallback(
            (e) => {
                w(e), M(e);
            },
            [M]
        ),
        L = i.useCallback(() => {
            w(''), k('');
        }, []),
        U = i.useMemo(() => {
            if (null == h || null == N || null == f) return null;
            if (0 === y)
                return (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: E.intl.string(E.t.DEBGqK)
                });
            let e = [];
            return (
                null == T ||
                    T.forEach((n) => {
                        n.permissions.forEach((i) => {
                            let l = i.flag,
                                o = j.pd.find((e) => O.Plq[e] === l);
                            if (null == o) return;
                            let a = b[o];
                            if (null != a) {
                                if (R.length > 0) {
                                    var s, c, u, d, p;
                                    let e = null != (d = null == (s = N[l.toString()]) ? void 0 : s.title) ? d : (0, m.wt)(l),
                                        t = null != (p = null == (u = N[l.toString()]) || null == (c = u.description) ? void 0 : c.toString()) ? p : '',
                                        r = n.title,
                                        i = j._o.has(l),
                                        a = j.Qn.includes(o),
                                        h = i ? E.intl.string(E.t.k7Kqj4) : a ? E.intl.string(E.t.IfqUEB) : null,
                                        f = Z(R, e),
                                        g = Z(R, t),
                                        b = Z(R, r),
                                        _ = null != h && Z(R, h);
                                    if (!f && !g && !b && !_) return;
                                }
                                e.push(
                                    (0, r.jsx)(
                                        P,
                                        {
                                            permission: o,
                                            roleIds: a,
                                            guild: h,
                                            specMap: N,
                                            categoryTitle: n.title,
                                            userId: t
                                        },
                                        o
                                    )
                                );
                            }
                        });
                    }),
                e
            );
        }, [h, N, f, y, T, b, R, t]);
    return null == p || null == f
        ? null
        : (0, r.jsxs)('div', {
              className: o()(I.container, a),
              children: [
                  (0, r.jsx)(v.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: d
                  }),
                  (0, r.jsx)(u.Ttm, {
                      className: S.permissionsGroupContainer,
                      children: (0, r.jsx)(u.xJW, {
                          title: E.intl.string(E.t.BBWnpq),
                          children: (0, r.jsxs)('div', {
                              className: S.permissionsItemContainer,
                              children: [
                                  (0, r.jsx)(u.E1j, {
                                      className: S.searchBar,
                                      query: A,
                                      placeholder: E.intl.string(E.t['yD9+dH']),
                                      onChange: D,
                                      onClear: L,
                                      autoComplete: 'off',
                                      inputProps: {
                                          autoCapitalize: 'none',
                                          autoCorrect: 'off',
                                          spellCheck: 'false'
                                      }
                                  }),
                                  U
                              ]
                          })
                      })
                  })
              ]
          });
}
