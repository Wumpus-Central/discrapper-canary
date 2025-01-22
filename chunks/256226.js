var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(91192),
    u = r(866442),
    c = r(442837),
    d = r(692547),
    f = r(481060),
    p = r(239091),
    h = r(607070),
    _ = r(134433),
    m = r(111028),
    g = r(91218),
    E = r(518738),
    v = r(388032),
    y = r(756317);
n.Z = a.forwardRef(function (e, n) {
    var o, b, I;
    let T;
    let { canRemove: S, className: A, role: C, onRemove: N, guildId: R, disableBorderColor: O, onMouseDown: D } = e,
        { tabIndex: x, ...L } = (0, l.JA)(C.id),
        w = (0, E.p9)({
            roleId: C.id,
            size: 16,
            guildId: R
        }),
        P = (0, c.e7)([h.Z], () => h.Z.roleStyle),
        M = (null === (o = C.tags) || void 0 === o ? void 0 : o.guild_connections) === null,
        k = a.useCallback(
            (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await r.e('5396').then(r.bind(r, 731646));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            id: C.id,
                            label: v.intl.string(v.t.sMsaLi)
                        });
                });
            },
            [C.id]
        ),
        U = (0, f.useToken)(d.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        B = null !== (b = C.colorString) && void 0 !== b ? b : U,
        G = null !== (I = (0, u.wK)(B, 0.6)) && void 0 !== I ? I : void 0,
        Z = d.Z.unsafe_rawColors.WHITE_500.css,
        F = (0, u._i)(B);
    null != F && 0.3 > (0, u.Bd)(F) && (Z = d.Z.unsafe_rawColors.PRIMARY_630.css),
        (T = M
            ? (0, i.jsx)(_.Z, {
                  className: y.roleFlowerStar,
                  iconClassName: S ? y.roleVerifiedIcon : void 0,
                  color: B,
                  size: 14
              })
            : 'dot' === P
              ? (0, i.jsx)(f.RoleDot, {
                    className: y.roleDot,
                    color: B,
                    background: !1,
                    tooltip: !1
                })
              : (0, i.jsx)(f.RoleCircle, {
                    color: B,
                    className: y.roleCircle
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
                          className: s()(y.roleRemoveButtonCanRemove, y.roleRemoveButton),
                          onClick: N,
                          tabIndex: x,
                          focusProps: { focusClassName: y.roleRemoveIconFocused },
                          'aria-hidden': !1,
                          'aria-label': v.intl.formatToPlainString(v.t.QrxwhY, { roleName: C.name }),
                          children: [
                              T,
                              (0, i.jsx)(f.XSmallIcon, {
                                  size: 'md',
                                  color: Z,
                                  className: y.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                          ]
                      })
                  })
                : (0, i.jsx)(f.Clickable, {
                      className: y.roleRemoveButton,
                      tabIndex: -1,
                      focusProps: { focusClassName: y.roleRemoveIconFocused },
                      'aria-hidden': !0,
                      'aria-label': v.intl.formatToPlainString(v.t.QrxwhY, { roleName: C.name }),
                      children: T
                  });
    return (0, i.jsx)(f.FocusRing, {
        children: (0, i.jsxs)('div', {
            ref: n,
            className: s()(y.role, A),
            style: V,
            onContextMenu: k,
            onMouseDown: D,
            'aria-label': C.name,
            tabIndex: x,
            ...L,
            children: [
                j(),
                null != w
                    ? (0, i.jsx)(g.Z, {
                          className: y.roleIcon,
                          ...w,
                          enableTooltip: !1
                      })
                    : null,
                (0, i.jsx)('div', {
                    'aria-hidden': !0,
                    className: y.roleName,
                    children: (0, i.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        children: (0, i.jsx)(m.Z, { children: C.name })
                    })
                })
            ]
        })
    });
});
