n.d(t, { Z: () => y });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(866442),
    u = n(442837),
    c = n(692547),
    d = n(481060),
    f = n(239091),
    _ = n(607070),
    p = n(134433),
    h = n(111028),
    m = n(91218),
    g = n(518738),
    E = n(388032),
    v = n(756317);
let y = r.forwardRef(function (e, t) {
    var a, y, I;
    let b;
    let { canRemove: T, className: S, role: A, onRemove: N, guildId: C, disableBorderColor: R, onMouseDown: O } = e,
        { tabIndex: D, ...x } = (0, o.JA)(A.id),
        L = (0, g.p9)({
            roleId: A.id,
            size: 16,
            guildId: C
        }),
        P = (0, u.e7)([_.Z], () => _.Z.roleStyle),
        w = (null === (a = A.tags) || void 0 === a ? void 0 : a.guild_connections) === null,
        M = r.useCallback(
            (e) => {
                (0, f.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            id: A.id,
                            label: E.intl.string(E.t.sMsaLi)
                        });
                });
            },
            [A.id]
        ),
        k = (0, d.dQu)(c.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        U = null !== (y = A.colorString) && void 0 !== y ? y : k,
        G = null !== (I = (0, l.wK)(U, 0.6)) && void 0 !== I ? I : void 0,
        B = c.Z.unsafe_rawColors.WHITE_500.css,
        Z = (0, l._i)(U);
    null != Z && 0.3 > (0, l.Bd)(Z) && (B = c.Z.unsafe_rawColors.PRIMARY_630.css),
        (b = w
            ? (0, i.jsx)(p.Z, {
                  className: v.roleFlowerStar,
                  iconClassName: T ? v.roleVerifiedIcon : void 0,
                  color: U,
                  size: 14
              })
            : 'dot' === P
              ? (0, i.jsx)(d.FhE, {
                    className: v.roleDot,
                    color: U,
                    background: !1,
                    tooltip: !1
                })
              : (0, i.jsx)(d.xko, {
                    color: U,
                    className: v.roleCircle
                }));
    let F = r.useMemo(() => {
            var t;
            return {
                borderColor: R ? void 0 : G,
                ...(null !== (t = e.style) && void 0 !== t ? t : {})
            };
        }, [G, R, e.style]),
        V = () =>
            T
                ? (0, i.jsx)(d.DY3, {
                      text: E.intl.string(E.t.u3RVsL),
                      children: (0, i.jsxs)(d.P3F, {
                          className: s()(v.roleRemoveButtonCanRemove, v.roleRemoveButton),
                          onClick: N,
                          tabIndex: D,
                          focusProps: { focusClassName: v.roleRemoveIconFocused },
                          'aria-hidden': !1,
                          'aria-label': E.intl.formatToPlainString(E.t.QrxwhY, { roleName: A.name }),
                          children: [
                              b,
                              (0, i.jsx)(d.Dio, {
                                  size: 'md',
                                  color: B,
                                  className: v.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                          ]
                      })
                  })
                : (0, i.jsx)(d.P3F, {
                      className: v.roleRemoveButton,
                      tabIndex: -1,
                      focusProps: { focusClassName: v.roleRemoveIconFocused },
                      'aria-hidden': !0,
                      'aria-label': E.intl.formatToPlainString(E.t.QrxwhY, { roleName: A.name }),
                      children: b
                  });
    return (0, i.jsx)(d.tEY, {
        children: (0, i.jsxs)('div', {
            ref: t,
            className: s()(v.role, S),
            style: F,
            onContextMenu: M,
            onMouseDown: O,
            'aria-label': A.name,
            tabIndex: D,
            ...x,
            children: [
                V(),
                null != L
                    ? (0, i.jsx)(m.Z, {
                          className: v.roleIcon,
                          ...L,
                          enableTooltip: !1
                      })
                    : null,
                (0, i.jsx)('div', {
                    'aria-hidden': !0,
                    className: v.roleName,
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-xs/medium',
                        children: (0, i.jsx)(h.Z, { children: A.name })
                    })
                })
            ]
        })
    });
});
