var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(91192),
    u = r(866442),
    c = r(442837),
    d = r(692547),
    f = r(481060),
    _ = r(239091),
    h = r(607070),
    p = r(134433),
    m = r(111028),
    g = r(91218),
    E = r(518738),
    v = r(388032),
    I = r(756317);
n.Z = a.forwardRef(function (e, n) {
    var s, T, b;
    let y;
    let { canRemove: S, className: A, role: N, onRemove: C, guildId: R, disableBorderColor: O, onMouseDown: D } = e,
        { tabIndex: L, ...x } = (0, l.JA)(N.id),
        w = (0, E.p9)({
            roleId: N.id,
            size: 16,
            guildId: R
        }),
        P = (0, c.e7)([h.Z], () => h.Z.roleStyle),
        M = (null === (s = N.tags) || void 0 === s ? void 0 : s.guild_connections) === null,
        k = a.useCallback(
            (e) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await r.e('5396').then(r.bind(r, 731646));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            id: N.id,
                            label: v.intl.string(v.t.sMsaLi)
                        });
                });
            },
            [N.id]
        ),
        U = (0, f.useToken)(d.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        B = null !== (T = N.colorString) && void 0 !== T ? T : U,
        G = null !== (b = (0, u.wK)(B, 0.6)) && void 0 !== b ? b : void 0,
        Z = d.Z.unsafe_rawColors.WHITE_500.css,
        F = (0, u._i)(B);
    null != F && 0.3 > (0, u.Bd)(F) && (Z = d.Z.unsafe_rawColors.PRIMARY_630.css),
        (y = M
            ? (0, i.jsx)(p.Z, {
                  className: I.roleFlowerStar,
                  iconClassName: S ? I.roleVerifiedIcon : void 0,
                  color: B,
                  size: 14
              })
            : 'dot' === P
              ? (0, i.jsx)(f.RoleDot, {
                    className: I.roleDot,
                    color: B,
                    background: !1,
                    tooltip: !1
                })
              : (0, i.jsx)(f.RoleCircle, {
                    color: B,
                    className: I.roleCircle
                }));
    let V = a.useMemo(() => {
            var n;
            return {
                borderColor: O ? void 0 : G,
                ...(null !== (n = e.style) && void 0 !== n ? n : {})
            };
        }, [G, O, e.style]),
        j = () =>
            S
                ? (0, i.jsx)(f.TooltipContainer, {
                      text: v.intl.string(v.t.u3RVsL),
                      children: (0, i.jsxs)(f.Clickable, {
                          className: o()(I.roleRemoveButtonCanRemove, I.roleRemoveButton),
                          onClick: C,
                          tabIndex: L,
                          focusProps: { focusClassName: I.roleRemoveIconFocused },
                          'aria-hidden': !1,
                          'aria-label': v.intl.formatToPlainString(v.t.QrxwhY, { roleName: N.name }),
                          children: [
                              y,
                              (0, i.jsx)(f.XSmallIcon, {
                                  size: 'md',
                                  color: Z,
                                  className: I.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                          ]
                      })
                  })
                : (0, i.jsx)(f.Clickable, {
                      className: I.roleRemoveButton,
                      tabIndex: -1,
                      focusProps: { focusClassName: I.roleRemoveIconFocused },
                      'aria-hidden': !0,
                      'aria-label': v.intl.formatToPlainString(v.t.QrxwhY, { roleName: N.name }),
                      children: y
                  });
    return (0, i.jsx)(f.FocusRing, {
        children: (0, i.jsxs)('div', {
            ref: n,
            className: o()(I.role, A),
            style: V,
            onContextMenu: k,
            onMouseDown: D,
            'aria-label': N.name,
            tabIndex: L,
            ...x,
            children: [
                j(),
                null != w
                    ? (0, i.jsx)(g.Z, {
                          className: I.roleIcon,
                          ...w,
                          enableTooltip: !1
                      })
                    : null,
                (0, i.jsx)('div', {
                    'aria-hidden': !0,
                    className: I.roleName,
                    children: (0, i.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        children: (0, i.jsx)(m.Z, { children: N.name })
                    })
                })
            ]
        })
    });
});
