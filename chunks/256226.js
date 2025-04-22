n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(866442),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(239091),
    _ = n(607070),
    p = n(134433),
    h = n(111028),
    m = n(91218),
    g = n(518738),
    E = n(884902),
    b = n(388032),
    y = n(577604);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = i.forwardRef(function (e, t) {
    var a, v, I;
    let A,
        { canRemove: N, className: C, role: R, onRemove: P, guildId: w, disableBorderColor: D, onMouseDown: L } = e,
        x = (0, s.JA)(R.id),
        { tabIndex: M } = x,
        k = T(x, ['tabIndex']),
        j = (0, g.p9)({
            roleId: R.id,
            size: 16,
            guildId: w
        }),
        U = (0, c.e7)([_.Z], () => _.Z.roleStyle),
        G = (null == (a = R.tags) ? void 0 : a.guild_connections) === null,
        B = i.useCallback(
            (e) => {
                (0, f.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            S(O({}, t), {
                                id: R.id,
                                label: b.intl.string(b.t.sMsaLi)
                            })
                        );
                });
            },
            [R.id]
        ),
        V = (0, d.dQu)(u.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        F = null != (v = R.colorString) ? v : V,
        Z = null != (I = (0, l.wK)(F, 0.6)) ? I : void 0,
        H = u.Z.unsafe_rawColors.WHITE_500.css,
        Y = (0, l._i)(F);
    null != Y && 0.3 > (0, l.Bd)(Y) && (H = u.Z.unsafe_rawColors.PRIMARY_630.css);
    let W = (0, E.X)(w, R.colorStrings);
    A = G
        ? (0, r.jsx)(p.Z, {
              className: y.roleFlowerStar,
              iconClassName: N ? y.roleVerifiedIcon : void 0,
              color: F,
              size: 14
          })
        : 'dot' === U
          ? (0, r.jsx)(d.FhE, {
                className: y.roleDot,
                color: F,
                background: !1,
                colors: W,
                tooltip: !1
            })
          : (0, r.jsx)(d.xko, {
                color: F,
                colors: W,
                className: y.roleCircle
            });
    let K = i.useMemo(() => {
            var t;
            return O({ borderColor: D ? void 0 : Z }, null != (t = e.style) ? t : {});
        }, [Z, D, e.style]),
        z = () =>
            N
                ? (0, r.jsx)(d.DY3, {
                      text: b.intl.string(b.t.u3RVsL),
                      children: (0, r.jsxs)(d.P3F, {
                          className: o()(y.roleRemoveButtonCanRemove, y.roleRemoveButton),
                          onClick: P,
                          tabIndex: M,
                          focusProps: { focusClassName: y.roleRemoveIconFocused },
                          'aria-hidden': !1,
                          'aria-label': b.intl.formatToPlainString(b.t.QrxwhY, { roleName: R.name }),
                          children: [
                              A,
                              (0, r.jsx)(d.Dio, {
                                  size: 'md',
                                  color: H,
                                  className: y.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                          ]
                      })
                  })
                : (0, r.jsx)(d.P3F, {
                      className: y.roleRemoveButton,
                      tabIndex: -1,
                      focusProps: { focusClassName: y.roleRemoveIconFocused },
                      'aria-hidden': !0,
                      'aria-label': b.intl.formatToPlainString(b.t.QrxwhY, { roleName: R.name }),
                      children: A
                  });
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(
            'div',
            S(
                O(
                    {
                        ref: t,
                        className: o()(y.role, C),
                        style: K,
                        onContextMenu: B,
                        onMouseDown: L,
                        'aria-label': R.name,
                        tabIndex: M
                    },
                    k
                ),
                {
                    children: [
                        z(),
                        null != j ? (0, r.jsx)(m.Z, S(O({ className: y.roleIcon }, j), { enableTooltip: !1 })) : null,
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            className: y.roleName,
                            children: (0, r.jsx)(d.Text, {
                                variant: 'text-xs/medium',
                                children: (0, r.jsx)(h.Z, { children: R.name })
                            })
                        })
                    ]
                }
            )
        )
    });
});
