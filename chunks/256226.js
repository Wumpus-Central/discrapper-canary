n.d(t, { Z: () => R });
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
    m = n(559475),
    g = n(134433),
    E = n(518738),
    b = n(884902),
    y = n(48950),
    O = n(388032),
    v = n(787185);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = i.forwardRef(function (e, t) {
    var a, I, S;
    let N,
        {
            canRemove: R,
            className: P,
            role: D,
            onRemove: w,
            guildId: x,
            disableBorderColor: L,
            onMouseDown: M,
            onRoleClick: k,
        } = e,
        j = (0, s.JA)(D.id),
        { tabIndex: U } = j,
        G = C(j, ["tabIndex"]),
        B = (0, E.p9)({
            roleId: D.id,
            size: 16,
            guildId: x,
        }),
        Z = (0, c.e7)([h.Z], () => h.Z.roleStyle),
        F = (0, m.t)("user_profile_member_role"),
        V = (null == (a = D.tags) ? void 0 : a.guild_connections) === null,
        H = i.useCallback(
            (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await n.e("5396").then(n.bind(n, 999588));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            A(T({}, t), {
                                id: D.id,
                                label: O.intl.string(O.t.sMsaLg),
                            }),
                        );
                });
            },
            [D.id],
        ),
        Y = i.useCallback(() => {
            if (F) {
                if (null != k) return void k(D.id);
                (0, _.ZDy)(async () => {
                    let { default: e } = await n.e("88146").then(n.bind(n, 501171));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            A(T({}, t), {
                                guildId: x,
                                roleId: D.id,
                                channelId: void 0,
                            }),
                        );
                });
            }
        }, [F, x, D.id, k]),
        W = (0, _.dQu)(u.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        K = null != (I = D.colorString) ? I : W,
        z = null != (S = (0, l.wK)(K, 0.6)) ? S : void 0,
        q = u.Z.unsafe_rawColors.WHITE_500.css,
        X = (0, l._i)(K);
    null != X && 0.3 > (0, l.Bd)(X) && (q = u.Z.unsafe_rawColors.PRIMARY_630.css);
    let Q = (0, b._f)(x, D, D.colorStrings);
    N = V
        ? (0, r.jsx)(g.Z, {
              className: v.roleFlowerStar,
              iconClassName: R ? v.roleVerifiedIcon : void 0,
              color: K,
              size: 14,
          })
        : "dot" === Z
          ? (0, r.jsx)(_.FhE, {
                className: v.roleDot,
                color: K,
                background: !1,
                colors: Q,
                tooltip: !1,
            })
          : (0, r.jsx)(_.xko, {
                color: K,
                colors: Q,
                className: v.roleCircle,
            });
    let J = i.useMemo(() => {
            var t;
            return T({ borderColor: L ? void 0 : z }, null != (t = e.style) ? t : {});
        }, [z, L, e.style]),
        $ = () =>
            R
                ? (0, r.jsx)(f.u, {
                      asContainer: !0,
                      text: O.intl.string(O.t.u3RVsH),
                      children: (0, r.jsxs)(_.P3F, {
                          className: o()(v.roleRemoveButtonCanRemove, v.roleRemoveButton),
                          onClick: (e) => {
                              e.stopPropagation(), w(e);
                          },
                          tabIndex: U,
                          focusProps: { focusClassName: v.roleRemoveIconFocused },
                          "aria-hidden": !1,
                          "aria-label": O.intl.formatToPlainString(O.t.QrxwhY, { roleName: D.name }),
                          children: [
                              N,
                              (0, r.jsx)(_.Dio, {
                                  size: "md",
                                  color: q,
                                  className: v.roleRemoveIcon,
                                  "aria-hidden": !0,
                              }),
                          ],
                      }),
                  })
                : (0, r.jsx)("div", {
                      className: v.roleRemoveButton,
                      children: N,
                  }),
        ee = (0, r.jsxs)(r.Fragment, {
            children: [
                $(),
                null != B ? (0, r.jsx)(y.Z, A(T({ className: v.roleIcon }, B), { enableTooltip: !1 })) : null,
                (0, r.jsx)("div", {
                    className: v.roleName,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(_.Text, {
                        variant: "text-xs/medium",
                        children: (0, r.jsx)(d.Z, { children: D.name }),
                    }),
                }),
            ],
        });
    return (0, r.jsx)(_.tEY, {
        children: F
            ? (0, r.jsx)(
                  _.P3F,
                  A(
                      T(
                          {
                              innerRef: t,
                              onClick: Y,
                              className: o()(v.role, v.clickable, P),
                              style: J,
                              onContextMenu: H,
                              "aria-label": D.name,
                              tabIndex: U,
                          },
                          G,
                      ),
                      { children: ee },
                  ),
              )
            : (0, r.jsx)(
                  "div",
                  A(
                      T(
                          {
                              ref: t,
                              onMouseDown: M,
                              className: o()(v.role, P),
                              style: J,
                              onContextMenu: H,
                              "aria-label": D.name,
                              tabIndex: U,
                          },
                          G,
                      ),
                      { children: ee },
                  ),
              ),
    });
});
