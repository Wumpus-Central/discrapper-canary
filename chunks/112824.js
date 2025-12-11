n.d(t, {
    R: () => x,
    Z: () => j,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(149765),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(485386),
    u = n(496675),
    g = n(700785),
    f = n(647086),
    m = n(135899),
    b = n(388032),
    p = n(146473);
function h(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e) {
    return m.$X.filter((t) => (null == e ? void 0 : e.id) !== f._ && g.oz(t, e));
}
function j(e) {
    let { guild: t } = e,
        i = (0, s.e7)([d.Z], () => d.Z.getEveryoneRole(t)),
        g = x(t),
        f = g.length > 0,
        j = m.$X.some((e) => {
            var n, r;
            return !u.Z.can(e, t, null, {
                [i.id]:
                    ((n = h({}, i)),
                    (r = r = { permissions: a.Od(i.permissions, e) }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n),
            });
        }),
        v = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: p.itemContent,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: b.intl.string(b.t["+vaUlM"]),
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: b.intl.format(b.t.RXAtdO, { numPerms: g.length }),
                        }),
                    ],
                }),
                f
                    ? (0, r.jsx)(c.Mgn, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                          width: 24,
                          className: p.warning,
                          "aria-label": b.intl.string(b.t["bG7Gu+"]),
                      })
                    : (0, r.jsx)(c.owK, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                          width: 24,
                          className: p.check,
                          "aria-label": b.intl.string(b.t.YQix8y),
                      }),
            ],
        });
    return f
        ? j
            ? (0, r.jsx)(o.u, {
                  text: b.intl.string(b.t["E5v/a/"]),
                  children: (0, r.jsx)("div", {
                      className: l()(p.simpleItemWrapper, p.disabled),
                      children: v,
                  }),
              })
            : (0, r.jsx)(c.P3F, {
                  onClick: () => {
                      (0, c.ZDy)(async () => {
                          let { default: e } = await n.e("39627").then(n.bind(n, 193845));
                          return (n) => (0, r.jsx)(e, h({ guild: t }, n));
                      });
                  },
                  className: l()(p.simpleItemWrapper, p.clickable),
                  children: v,
              })
        : (0, r.jsx)("div", {
              className: p.simpleItemWrapper,
              children: v,
          });
}
