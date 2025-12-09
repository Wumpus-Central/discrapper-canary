n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(866442),
    c = n(442837),
    u = n(692547),
    d = n(194983),
    f = n(28664),
    p = n(481060),
    _ = n(239091),
    m = n(607070),
    h = n(134433),
    g = n(518738),
    E = n(884902),
    b = n(48950),
    y = n(388032),
    O = n(787185);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function T(e, t) {
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
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
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
    let C,
        { canRemove: N, className: P, role: R, onRemove: D, guildId: w, disableBorderColor: x, onMouseDown: L } = e,
        j = (0, s.JA)(R.id),
        { tabIndex: M } = j,
        k = A(j, ["tabIndex"]),
        U = (0, g.p9)({
            roleId: R.id,
            size: 16,
            guildId: w,
        }),
        G = (0, c.e7)([m.Z], () => m.Z.roleStyle),
        Z = (null == (a = R.tags) ? void 0 : a.guild_connections) === null,
        B = i.useCallback(
            (e) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            T(S({}, t), {
                                id: R.id,
                                label: y.intl.string(y.t.sMsaLg),
                            }),
                        );
                });
            },
            [R.id],
        ),
        F = (0, p.dQu)(u.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        V = null != (v = R.colorString) ? v : F,
        H = null != (I = (0, l.wK)(V, 0.6)) ? I : void 0,
        Y = u.Z.unsafe_rawColors.WHITE_500.css,
        W = (0, l._i)(V);
    null != W && 0.3 > (0, l.Bd)(W) && (Y = u.Z.unsafe_rawColors.PRIMARY_630.css);
    let K = (0, E._f)(w, R, R.colorStrings);
    C = Z
        ? (0, r.jsx)(h.Z, {
              className: O.roleFlowerStar,
              iconClassName: N ? O.roleVerifiedIcon : void 0,
              color: V,
              size: 14,
          })
        : "dot" === G
          ? (0, r.jsx)(p.FhE, {
                className: O.roleDot,
                color: V,
                background: !1,
                colors: K,
                tooltip: !1,
            })
          : (0, r.jsx)(p.xko, {
                color: V,
                colors: K,
                className: O.roleCircle,
            });
    let z = i.useMemo(() => {
            var t;
            return S({ borderColor: x ? void 0 : H }, null != (t = e.style) ? t : {});
        }, [H, x, e.style]),
        q = () =>
            N
                ? (0, r.jsx)(f.u, {
                      asContainer: !0,
                      text: y.intl.string(y.t.u3RVsH),
                      children: (0, r.jsxs)(p.P3F, {
                          className: o()(O.roleRemoveButtonCanRemove, O.roleRemoveButton),
                          onClick: D,
                          tabIndex: M,
                          focusProps: { focusClassName: O.roleRemoveIconFocused },
                          "aria-hidden": !1,
                          "aria-label": y.intl.formatToPlainString(y.t.QrxwhY, { roleName: R.name }),
                          children: [
                              C,
                              (0, r.jsx)(p.Dio, {
                                  size: "md",
                                  color: Y,
                                  className: O.roleRemoveIcon,
                                  "aria-hidden": !0,
                              }),
                          ],
                      }),
                  })
                : (0, r.jsx)(p.P3F, {
                      className: O.roleRemoveButton,
                      tabIndex: -1,
                      focusProps: { focusClassName: O.roleRemoveIconFocused },
                      "aria-hidden": !0,
                      "aria-label": y.intl.formatToPlainString(y.t.QrxwhY, { roleName: R.name }),
                      children: C,
                  });
    return (0, r.jsx)(p.tEY, {
        children: (0, r.jsxs)(
            "div",
            T(
                S(
                    {
                        ref: t,
                        className: o()(O.role, P),
                        style: z,
                        onContextMenu: B,
                        onMouseDown: L,
                        "aria-label": R.name,
                        tabIndex: M,
                    },
                    k,
                ),
                {
                    children: [
                        q(),
                        null != U ? (0, r.jsx)(b.Z, T(S({ className: O.roleIcon }, U), { enableTooltip: !1 })) : null,
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: O.roleName,
                            children: (0, r.jsx)(p.Text, {
                                variant: "text-xs/medium",
                                children: (0, r.jsx)(d.Z, { children: R.name }),
                            }),
                        }),
                    ],
                },
            ),
        ),
    });
});
