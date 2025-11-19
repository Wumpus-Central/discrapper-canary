n.d(t, { Z: () => f }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    s = n.n(r),
    a = n(28664),
    o = n(780384),
    c = n(481060),
    d = n(239091),
    u = n(741247),
    h = n(75464),
    g = n(884902),
    p = n(350333);
function m(e) {
    let { role: t, guild: r } = e,
        [a, o] = l.useState(!1);
    return (0, u.e)(r, t)
        ? (0, i.jsx)(c.P3F, {
              onClick: (e) => {
                  o(!0),
                      (0, d.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                              return (n) => {
                                  var l, s;
                                  return (0, i.jsx)(
                                      e,
                                      ((l = (function (e) {
                                          for (var t = 1; t < arguments.length; t++) {
                                              var n = null != arguments[t] ? arguments[t] : {},
                                                  i = Object.keys(n);
                                              "function" == typeof Object.getOwnPropertySymbols &&
                                                  (i = i.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                      }),
                                                  )),
                                                  i.forEach(function (t) {
                                                      var i;
                                                      (i = n[t]),
                                                          t in e
                                                              ? Object.defineProperty(e, t, {
                                                                    value: i,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0,
                                                                })
                                                              : (e[t] = i);
                                                  });
                                          }
                                          return e;
                                      })({}, n)),
                                      (s = s =
                                          {
                                              role: t,
                                              guild: r,
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var i = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, i);
                                                }
                                                return n;
                                            })(Object(s)).forEach(function (e) {
                                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                                            }),
                                      l),
                                  );
                              };
                          },
                          { onClose: () => o(!1) },
                      );
              },
              className: s()(p.roleOverflow, { [p.open]: a }),
              children: (0, i.jsx)(c.xhG, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
              }),
          })
        : null;
}
function f(e) {
    let {
            color: t,
            id: l,
            role: r,
            guild: s,
            children: d,
            isDragging: u,
            selectedItem: f,
            onItemSelect: b,
            itemType: x,
            locked: j,
            lockTooltip: v,
            showContextMenu: y,
            theme: C,
            roleStyle: S,
            onContextMenu: N,
            "aria-label": O,
        } = e,
        Z = (0, g._f)(s.id, r, null == r ? void 0 : r.colorStrings);
    return u
        ? (0, i.jsx)("div", { className: p.dragged })
        : (0, i.jsx)(c.njP.Item, {
              className: p.role,
              id: l,
              selectedItem: f,
              onItemSelect: b,
              itemType: x,
              "aria-label": null != v ? "".concat(O, ", ").concat(v) : O,
              onContextMenu: N,
              children: (0, i.jsxs)("div", {
                  className: p.roleContent,
                  children: [
                      "dot" === S
                          ? (0, i.jsx)(c.FhE, {
                                color: null != t ? t : void 0,
                                colors: Z,
                                className: p.roleDot,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, i.jsx)(c.xko, {
                                color: null != t ? t : null,
                                colors: Z,
                                className: p.roleCircle,
                            }),
                      (function () {
                          if (!j) return null;
                          let e = (0, o.wj)(C) ? n(27377) : n(514811);
                          return (0, i.jsx)(a.u, {
                              text: v,
                              children: (0, i.jsx)(h.Z, {
                                  className: p.lock,
                                  src: e,
                              }),
                          });
                      })(),
                      (0, i.jsx)("div", {
                          className: p.roleInner,
                          children: d,
                      }),
                      y && null != r
                          ? (0, i.jsx)(m, {
                                guild: s,
                                role: r,
                            })
                          : null,
                  ],
              }),
          });
}
