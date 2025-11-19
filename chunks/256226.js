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
    _ = n(481060),
    p = n(239091),
    h = n(607070),
    m = n(134433),
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
function I(e) {
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
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
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
    var a, v, T;
    let C,
        { canRemove: N, className: R, role: P, onRemove: D, guildId: w, disableBorderColor: L, onMouseDown: x } = e,
        M = (0, s.JA)(P.id),
        { tabIndex: k } = M,
        j = A(M, ["tabIndex"]),
        U = (0, g.p9)({
            roleId: P.id,
            size: 16,
            guildId: w,
        }),
        G = (0, c.e7)([h.Z], () => h.Z.roleStyle),
        B = (null == (a = P.tags) ? void 0 : a.guild_connections) === null,
        Z = i.useCallback(
            (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            S(I({}, t), {
                                id: P.id,
                                label: y.intl.string(y.t.sMsaLg),
                            }),
                        );
                });
            },
            [P.id],
        ),
        F = (0, _.dQu)(u.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        V = null != (v = P.colorString) ? v : F,
        H = null != (T = (0, l.wK)(V, 0.6)) ? T : void 0,
        Y = u.Z.unsafe_rawColors.WHITE_500.css,
        W = (0, l._i)(V);
    null != W && 0.3 > (0, l.Bd)(W) && (Y = u.Z.unsafe_rawColors.PRIMARY_630.css);
    let K = (0, E._f)(w, P, P.colorStrings);
    C = B
        ? (0, r.jsx)(m.Z, {
              className: O.roleFlowerStar,
              iconClassName: N ? O.roleVerifiedIcon : void 0,
              color: V,
              size: 14,
          })
        : "dot" === G
          ? (0, r.jsx)(_.FhE, {
                className: O.roleDot,
                color: V,
                background: !1,
                colors: K,
                tooltip: !1,
            })
          : (0, r.jsx)(_.xko, {
                color: V,
                colors: K,
                className: O.roleCircle,
            });
    let z = i.useMemo(() => {
            var t;
            return I({ borderColor: L ? void 0 : H }, null != (t = e.style) ? t : {});
        }, [H, L, e.style]),
        q = () =>
            N
                ? (0, r.jsx)(f.u, {
                      asContainer: !0,
                      text: y.intl.string(y.t.u3RVsH),
                      children: (0, r.jsxs)(_.P3F, {
                          className: o()(O.roleRemoveButtonCanRemove, O.roleRemoveButton),
                          onClick: D,
                          tabIndex: k,
                          focusProps: { focusClassName: O.roleRemoveIconFocused },
                          "aria-hidden": !1,
                          "aria-label": y.intl.formatToPlainString(y.t.QrxwhY, { roleName: P.name }),
                          children: [
                              C,
                              (0, r.jsx)(_.Dio, {
                                  size: "md",
                                  color: Y,
                                  className: O.roleRemoveIcon,
                                  "aria-hidden": !0,
                              }),
                          ],
                      }),
                  })
                : (0, r.jsx)(_.P3F, {
                      className: O.roleRemoveButton,
                      tabIndex: -1,
                      focusProps: { focusClassName: O.roleRemoveIconFocused },
                      "aria-hidden": !0,
                      "aria-label": y.intl.formatToPlainString(y.t.QrxwhY, { roleName: P.name }),
                      children: C,
                  });
    return (0, r.jsx)(_.tEY, {
        children: (0, r.jsxs)(
            "div",
            S(
                I(
                    {
                        ref: t,
                        className: o()(O.role, R),
                        style: z,
                        onContextMenu: Z,
                        onMouseDown: x,
                        "aria-label": P.name,
                        tabIndex: k,
                    },
                    j,
                ),
                {
                    children: [
                        q(),
                        null != U ? (0, r.jsx)(b.Z, S(I({ className: O.roleIcon }, U), { enableTooltip: !1 })) : null,
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: O.roleName,
                            children: (0, r.jsx)(_.Text, {
                                variant: "text-xs/medium",
                                children: (0, r.jsx)(d.Z, { children: P.name }),
                            }),
                        }),
                    ],
                },
            ),
        ),
    });
});
