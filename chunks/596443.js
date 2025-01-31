n.d(t, { Z: () => A }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(954955),
    o = n.n(s),
    c = n(399606),
    d = n(481060),
    u = n(605436),
    h = n(79712),
    p = n(285173),
    m = n(434404),
    f = n(422559),
    g = n(271383),
    _ = n(430824),
    C = n(496675),
    x = n(594174),
    v = n(233608),
    E = n(370595),
    I = n(351127),
    b = n(981631),
    Z = n(388032),
    N = n(758570),
    T = n(227893);
function S(e) {
    var t, n, a, s;
    let { permission: o, roleIds: g, guild: x, specMap: v, categoryTitle: E, userId: N } = e,
        S = (0, c.e7)([_.Z], () => _.Z.getRoles(x.id)),
        j = b.Plq[o],
        A = null !== (a = null === (t = v[j.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== a ? a : (0, f.wt)(j),
        y = null !== (s = null === (n = v[j.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== s ? s : '',
        P = I._o.has(j),
        R = I.Qn.includes(o),
        M = g.length,
        L = (0, c.e7)([C.Z], () => C.Z.can(b.Plq.MANAGE_ROLES, x), [x]),
        k = l.useCallback(
            async (e) => {
                L && (await m.Z.open(x.id, b.pNK.ROLES), await m.Z.selectRole(e));
            },
            [L, x.id]
        );
    return (0, i.jsxs)('div', {
        className: r()(T.permissionItemContainer, { [T.elevatedPermission]: P }),
        children: [
            (0, i.jsxs)('div', {
                className: T.permissionItemHeader,
                children: [
                    (0, i.jsxs)('div', {
                        className: T.permissionTitle,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: A
                            }),
                            null != E &&
                                (0, i.jsxs)('div', {
                                    className: T.permissionItemSubheader,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: E
                                        }),
                                        P &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: d.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, i.jsx)(d.ua7, {
                                                        text: Z.intl.string(Z.t.GZvXuL),
                                                        children: (e) =>
                                                            (0, i.jsxs)(d.P3F, {
                                                                className: T.elevatedPermissionContainer,
                                                                ...e,
                                                                children: [
                                                                    (0, i.jsx)(d.tQf, {
                                                                        size: 'custom',
                                                                        width: 12,
                                                                        height: 12,
                                                                        color: d.TVs.colors.TEXT_BRAND
                                                                    }),
                                                                    (0, i.jsx)(d.Text, {
                                                                        variant: 'text-xs/normal',
                                                                        color: 'text-brand',
                                                                        children: Z.intl.string(Z.t.k7Kqj4)
                                                                    })
                                                                ]
                                                            })
                                                    })
                                                ]
                                            }),
                                        !P &&
                                            R &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Z, {
                                                        height: 4,
                                                        width: 4,
                                                        'aria-hidden': 'true',
                                                        color: d.TVs.colors.INTERACTIVE_MUTED.css
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: T.elevatedPermissionContainer,
                                                        children: (0, i.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-muted',
                                                            children: Z.intl.string(Z.t.IfqUEB)
                                                        })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: Z.intl.format(Z.t.KmJI4O, { roleCount: M })
                    })
                ]
            }),
            null != y &&
                (0, i.jsx)('div', {
                    className: T.permissionItemDescription,
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: y
                    })
                }),
            (0, i.jsx)('div', {
                className: T.permissionItemRoleContainer,
                children: g.map((e) =>
                    (0, I.Ov)(e, N)
                        ? (0, i.jsx)(
                              'div',
                              {
                                  className: T.roleTooltipItem,
                                  children: (0, i.jsx)('div', {
                                      className: T.roleChiplet,
                                      children: (0, i.jsx)(d.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'text-normal',
                                          children: Z.intl.string(Z.t.pclUFB)
                                      })
                                  })
                              },
                              e
                          )
                        : (0, i.jsx)(
                              d.P3F,
                              {
                                  className: r()(T.roleTooltipItem, { [T.editable]: L && !(0, u.pM)(x.id, e) }),
                                  onClick: () => k(e),
                                  children: (0, i.jsx)(p.Z, {
                                      role: S[e],
                                      guildId: x.id,
                                      className: T.roleChiplet
                                  })
                              },
                              e
                          )
                )
            })
        ]
    });
}
function j(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function A(e) {
    let { userId: t, guildId: n, location: a, className: s, onNavigate: u } = e,
        h = (0, c.e7)([x.default], () => x.default.getUser(t), [t]),
        p = (0, c.e7)([_.Z], () => _.Z.getGuild(n), [n]),
        m = (0, c.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]),
        C = (0, I.B2)(t, n, I.pd),
        A = Object.keys(C).length,
        y = l.useMemo(() => (null != p ? v.Z.getGuildPermissionSpecMap(p) : null), [p]),
        P = l.useMemo(() => (null != p ? v.Z.generateGuildPermissionSpec(p) : null), [p]),
        [R, M] = l.useState(''),
        [L, k] = l.useState(''),
        O = l.useMemo(() => o()(k, 300), []),
        D = l.useCallback(
            (e) => {
                M(e), O(e);
            },
            [O]
        ),
        w = l.useCallback(() => {
            M(''), k('');
        }, []),
        U = l.useMemo(() => {
            if (null == p || null == y || null == m) return null;
            if (0 === A)
                return (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: Z.intl.string(Z.t.DEBGqK)
                });
            let e = [];
            return (
                null == P ||
                    P.forEach((n) => {
                        n.permissions.forEach((l) => {
                            let a = l.flag,
                                r = I.pd.find((e) => b.Plq[e] === a);
                            if (null == r) return;
                            let s = C[r];
                            if (null != s) {
                                if (L.length > 0) {
                                    var o, c, d, u, h;
                                    let e = null !== (u = null === (o = y[a.toString()]) || void 0 === o ? void 0 : o.title) && void 0 !== u ? u : (0, f.wt)(a),
                                        t = null !== (h = null === (d = y[a.toString()]) || void 0 === d ? void 0 : null === (c = d.description) || void 0 === c ? void 0 : c.toString()) && void 0 !== h ? h : '',
                                        i = n.title,
                                        l = I._o.has(a),
                                        s = I.Qn.includes(r),
                                        p = l ? Z.intl.string(Z.t.k7Kqj4) : s ? Z.intl.string(Z.t.IfqUEB) : null,
                                        m = j(L, e),
                                        g = j(L, t),
                                        _ = j(L, i),
                                        C = null != p && j(L, p);
                                    if (!m && !g && !_ && !C) return;
                                }
                                e.push(
                                    (0, i.jsx)(
                                        S,
                                        {
                                            permission: r,
                                            roleIds: s,
                                            guild: p,
                                            specMap: y,
                                            categoryTitle: n.title,
                                            userId: t
                                        },
                                        r
                                    )
                                );
                            }
                        });
                    }),
                e
            );
        }, [p, y, m, A, P, C, L, t]);
    return null == h || null == m
        ? null
        : (0, i.jsxs)('div', {
              className: r()(N.container, s),
              children: [
                  (0, i.jsx)(E.Z, {
                      guildId: n,
                      userId: t,
                      onNavigate: u
                  }),
                  (0, i.jsx)(d.Ttm, {
                      className: T.permissionsGroupContainer,
                      children: (0, i.jsx)(d.xJW, {
                          title: Z.intl.string(Z.t.BBWnpq),
                          children: (0, i.jsxs)('div', {
                              className: T.permissionsItemContainer,
                              children: [
                                  (0, i.jsx)(d.E1j, {
                                      className: T.searchBar,
                                      query: R,
                                      placeholder: Z.intl.string(Z.t['yD9+dH']),
                                      onChange: D,
                                      onClear: w,
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
