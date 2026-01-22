n.d(t, { A: () => p }), n(896048);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(582754),
    c = n(397927),
    d = n(442433),
    u = n(665013),
    h = n(246199),
    g = n(967144),
    m = n(881762);
function f(e) {
    let { role: t, guild: r } = e,
        [a, o] = i.useState(!1);
    return (0, u.x)(r, t)
        ? (0, l.jsx)(c.DUT, {
              onClick: (e) => {
                  o(!0),
                      (0, d.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                              return (n) => {
                                  var i, s;
                                  return (0, l.jsx)(
                                      e,
                                      ((i = (function (e) {
                                          for (var t = 1; t < arguments.length; t++) {
                                              var n = null != arguments[t] ? arguments[t] : {},
                                                  l = Object.keys(n);
                                              "function" == typeof Object.getOwnPropertySymbols &&
                                                  (l = l.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                      }),
                                                  )),
                                                  l.forEach(function (t) {
                                                      var l;
                                                      (l = n[t]),
                                                          t in e
                                                              ? Object.defineProperty(e, t, {
                                                                    value: l,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0,
                                                                })
                                                              : (e[t] = l);
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
                                          ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var l = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, l);
                                                }
                                                return n;
                                            })(Object(s)).forEach(function (e) {
                                                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                            }),
                                      i),
                                  );
                              };
                          },
                          { onClose: () => o(!1) },
                      );
              },
              className: s()(m.X2, { [m.ho]: a }),
              children: (0, l.jsx)(c.jNK, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
              }),
          })
        : null;
}
function p(e) {
    let {
            color: t,
            id: i,
            role: r,
            guild: s,
            children: d,
            isDragging: u,
            selectedItem: p,
            onItemSelect: b,
            itemType: x,
            locked: j,
            lockTooltip: A,
            showContextMenu: y,
            theme: v,
            roleStyle: O,
            onContextMenu: C,
            "aria-label": N,
        } = e,
        E = (0, g.X_)(s.id, r, null == r ? void 0 : r.colorStrings);
    return u
        ? (0, l.jsx)("div", { className: m.rz })
        : (0, l.jsx)(c.VQ0.Item, {
              className: m.JC,
              id: i,
              selectedItem: p,
              onItemSelect: b,
              itemType: x,
              "aria-label": null != A ? "".concat(N, ", ").concat(A) : N,
              onContextMenu: C,
              children: (0, l.jsxs)("div", {
                  className: m.yl,
                  children: [
                      "dot" === O
                          ? (0, l.jsx)(c.WYI, {
                                color: null != t ? t : void 0,
                                colors: E,
                                className: m.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(c.RYH, {
                                color: null != t ? t : null,
                                colors: E,
                                className: m.Ni,
                            }),
                      (function () {
                          if (!j) return null;
                          let e = (0, o.Mw)(v) ? n(454554) : n(470474);
                          return (0, l.jsx)(a.m, {
                              text: A,
                              children: (0, l.jsx)(h.A, {
                                  className: m.s2,
                                  src: e,
                              }),
                          });
                      })(),
                      (0, l.jsx)("div", {
                          className: m.dD,
                          children: d,
                      }),
                      y && null != r
                          ? (0, l.jsx)(f, {
                                guild: s,
                                role: r,
                            })
                          : null,
                  ],
              }),
          });
}
