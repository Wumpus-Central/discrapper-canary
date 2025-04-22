n.d(t, { Z: () => Z }), n(953529), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
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
    b = n(430824),
    _ = n(496675),
    y = n(594174),
    C = n(233608),
    x = n(370595),
    v = n(351127),
    j = n(981631),
    O = n(388032),
    E = n(12740),
    I = n(444021);
function S(e) {
    var t, n, l, a;
    let { permission: s, roleIds: g, guild: y, specMap: C, categoryTitle: x, userId: E } = e,
        S = (0, c.e7)([b.Z], () => b.Z.getRoles(y.id)),
        P = j.Plq[s],
        Z = null != (l = null == (t = C[P.toString()]) ? void 0 : t.title) ? l : (0, m.wt)(P),
        N = null != (a = null == (n = C[P.toString()]) ? void 0 : n.description) ? a : '',
        T = v._o.has(P),
        A = v.Qn.includes(s),
        w = g.length,
        R = (0, c.e7)([_.Z], () => _.Z.can(j.Plq.MANAGE_ROLES, y), [y]),
        k = i.useCallback(
            async (e) => {
                R && (await f.Z.open(y.id, j.pNK.ROLES), await f.Z.selectRole(e));
            },
            [R, y.id]
        );
    return (0, r.jsxs)('div', {
        className: o()(I.permissionItemContainer, { [I.elevatedPermission]: T }),
        children: [
            (0, r.jsxs)('div', {
                className: I.permissionItemHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: I.permissionTitle,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: Z
                            }),
                            null != x &&
                                (0, r.jsxs)('div', {
                                    className: I.permissionItemSubheader,
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
                                                        text: O.intl.string(O.t.GZvXuL),
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
                                                                })({ className: I.elevatedPermissionContainer }, e)),
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
                                                                                children: O.intl.string(O.t.k7Kqj4)
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
                                                        className: I.elevatedPermissionContainer,
                                                        children: (0, r.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-muted',
                                                            children: O.intl.string(O.t.IfqUEB)
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
                        color: 'text-normal',
                        children: O.intl.format(O.t.KmJI4O, { roleCount: w })
                    })
                ]
            }),
            null != N &&
                (0, r.jsx)('div', {
                    className: I.permissionItemDescription,
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: N
                    })
                }),
            (0, r.jsx)('div', {
                className: I.permissionItemRoleContainer,
                children: g.map((e) =>
                    (0, v.Ov)(e, E)
                        ? (0, r.jsx)(
                              'div',
                              {
                                  className: I.roleTooltipItem,
                                  children: (0, r.jsx)('div', {
                                      className: I.roleChiplet,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-normal',
                                          children: O.intl.string(O.t.pclUFB)
                                      })
                                  })
                              },
                              e
                          )
                        : (0, r.jsx)(
                              u.P3F,
                              {
                                  className: o()(I.roleTooltipItem, { [I.editable]: R && !(0, d.pM)(y.id, e) }),
                                  onClick: () => k(e),
                                  children: (0, r.jsx)(h.Z, {
                                      role: S[e],
                                      guildId: y.id,
                                      className: I.roleChiplet
                                  })
                              },
                              e
                          )
                )
            })
        ]
    });
}
function P(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function Z(e) {
    let { userId: t, guildId: n, location: l, className: a, onNavigate: d } = e,
        p = (0, c.e7)([y.default], () => y.default.getUser(t), [t]),
        h = (0, c.e7)([b.Z], () => b.Z.getGuild(n), [n]),
        f = (0, c.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]),
        _ = (0, v.B2)(t, n, v.pd),
        Z = Object.keys(_).length,
        N = i.useMemo(() => (null != h ? C.Z.getGuildPermissionSpecMap(h) : null), [h]),
        T = i.useMemo(() => (null != h ? C.Z.generateGuildPermissionSpec(h) : null), [h]),
        [A, w] = i.useState(''),
        [R, k] = i.useState(''),
        M = i.useMemo(() => s()(k, 300), []),
        L = i.useCallback(
            (e) => {
                w(e), M(e);
            },
            [M]
        ),
        D = i.useCallback(() => {
            w(''), k('');
        }, []),
        U = i.useMemo(() => {
            if (null == h || null == N || null == f) return null;
            if (0 === Z)
                return (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: O.intl.string(O.t.DEBGqK)
                });
            let e = [];
            return (
                null == T ||
                    T.forEach((n) => {
                        n.permissions.forEach((i) => {
                            let l = i.flag,
                                o = v.pd.find((e) => j.Plq[e] === l);
                            if (null == o) return;
                            let a = _[o];
                            if (null != a) {
                                if (R.length > 0) {
                                    var s, c, u, d, p;
                                    let e = null != (d = null == (s = N[l.toString()]) ? void 0 : s.title) ? d : (0, m.wt)(l),
                                        t = null != (p = null == (u = N[l.toString()]) || null == (c = u.description) ? void 0 : c.toString()) ? p : '',
                                        r = n.title,
                                        i = v._o.has(l),
                                        a = v.Qn.includes(o),
                                        h = i ? O.intl.string(O.t.k7Kqj4) : a ? O.intl.string(O.t.IfqUEB) : null,
                                        f = P(R, e),
                                        g = P(R, t),
                                        b = P(R, r),
                                        _ = null != h && P(R, h);
                                    if (!f && !g && !b && !_) return;
                                }
                                e.push(
                                    (0, r.jsx)(
                                        S,
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
        }, [h, N, f, Z, T, _, R, t]);
    return null == p || null == f
        ? null
        : (0, r.jsxs)('div', {
              className: o()(E.container, a),
              children: [
                  (0, r.jsx)(x.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: d
                  }),
                  (0, r.jsx)(u.Ttm, {
                      className: I.permissionsGroupContainer,
                      children: (0, r.jsx)(u.xJW, {
                          title: O.intl.string(O.t.BBWnpq),
                          children: (0, r.jsxs)('div', {
                              className: I.permissionsItemContainer,
                              children: [
                                  (0, r.jsx)(u.E1j, {
                                      className: I.searchBar,
                                      query: A,
                                      placeholder: O.intl.string(O.t['yD9+dH']),
                                      onChange: L,
                                      onClear: D,
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
