n.d(t, { Z: () => Z }), n(953529), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(399606),
    u = n(481060),
    d = n(605436),
    p = n(79712),
    h = n(480505),
    f = n(434404),
    m = n(422559),
    g = n(271383),
    b = n(430824),
    _ = n(496675),
    x = n(594174),
    C = n(233608),
    y = n(370595),
    v = n(351127),
    j = n(981631),
    O = n(388032),
    E = n(649986),
    I = n(850489);
function P(e) {
    var t, n, l, o;
    let { permission: s, roleIds: g, guild: x, specMap: C, categoryTitle: y, userId: E } = e,
        P = (0, c.e7)([b.Z], () => b.Z.getRoles(x.id)),
        S = j.Plq[s],
        Z = null != (l = null == (t = C[S.toString()]) ? void 0 : t.title) ? l : (0, m.wt)(S),
        N = null != (o = null == (n = C[S.toString()]) ? void 0 : n.description) ? o : '',
        T = v._o.has(S),
        A = v.Qn.includes(s),
        w = g.length,
        R = (0, c.e7)([_.Z], () => _.Z.can(j.Plq.MANAGE_ROLES, x), [x]),
        M = i.useCallback(
            async (e) => {
                R && (await f.Z.open(x.id, j.pNK.ROLES), await f.Z.selectRole(e));
            },
            [R, x.id]
        );
    return (0, r.jsxs)('div', {
        className: a()(I.permissionItemContainer, { [I.elevatedPermission]: T }),
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
                            null != y &&
                                (0, r.jsxs)('div', {
                                    className: I.permissionItemSubheader,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: y
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
                                  className: a()(I.roleTooltipItem, { [I.editable]: R && !(0, d.pM)(x.id, e) }),
                                  onClick: () => M(e),
                                  children: (0, r.jsx)(h.Z, {
                                      role: P[e],
                                      guildId: x.id,
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
function S(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function Z(e) {
    let { userId: t, guildId: n, location: l, className: o, onNavigate: d } = e,
        p = (0, c.e7)([x.default], () => x.default.getUser(t), [t]),
        h = (0, c.e7)([b.Z], () => b.Z.getGuild(n), [n]),
        f = (0, c.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]),
        _ = (0, v.B2)(t, n, v.pd),
        Z = Object.keys(_).length,
        N = i.useMemo(() => (null != h ? C.Z.getGuildPermissionSpecMap(h) : null), [h]),
        T = i.useMemo(() => (null != h ? C.Z.generateGuildPermissionSpec(h) : null), [h]),
        [A, w] = i.useState(''),
        [R, M] = i.useState(''),
        k = i.useMemo(() => s()(M, 300), []),
        L = i.useCallback(
            (e) => {
                w(e), k(e);
            },
            [k]
        ),
        D = i.useCallback(() => {
            w(''), M('');
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
                                a = v.pd.find((e) => j.Plq[e] === l);
                            if (null == a) return;
                            let o = _[a];
                            if (null != o) {
                                if (R.length > 0) {
                                    var s, c, u, d, p;
                                    let e = null != (d = null == (s = N[l.toString()]) ? void 0 : s.title) ? d : (0, m.wt)(l),
                                        t = null != (p = null == (u = N[l.toString()]) || null == (c = u.description) ? void 0 : c.toString()) ? p : '',
                                        r = n.title,
                                        i = v._o.has(l),
                                        o = v.Qn.includes(a),
                                        h = i ? O.intl.string(O.t.k7Kqj4) : o ? O.intl.string(O.t.IfqUEB) : null,
                                        f = S(R, e),
                                        g = S(R, t),
                                        b = S(R, r),
                                        _ = null != h && S(R, h);
                                    if (!f && !g && !b && !_) return;
                                }
                                e.push(
                                    (0, r.jsx)(
                                        P,
                                        {
                                            permission: a,
                                            roleIds: o,
                                            guild: h,
                                            specMap: N,
                                            categoryTitle: n.title,
                                            userId: t
                                        },
                                        a
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
              className: a()(E.container, o),
              children: [
                  (0, r.jsx)(y.Z, {
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
