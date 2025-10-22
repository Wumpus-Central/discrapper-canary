n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(13941),
    c = n(91192),
    s = n(481060),
    u = n(996435),
    d = n(910557);
function f(e) {
    var t;
    let { category: n, onClick: l, active: o } = e,
        { useTitle: a, useNavigationTitle: u, key: f } = n,
        b = null == a ? void 0 : a(),
        p = null != (t = null == u ? void 0 : u()) ? t : b;
    return null == p
        ? null
        : (0, r.jsx)(c.mh, {
              id: f,
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(
                      s.P3F,
                      ((t = (function (e) {
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
                      })(
                          {
                              onClick: l,
                              tag: "li",
                              className: i()({ [d.active]: o }),
                          },
                          e,
                      )),
                      (n = n = { children: p }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            }),
                      t),
                      f,
                  );
              },
          });
}
function b(e) {
    let { categories: t } = e,
        [n, o] = l.useState(t[0].key),
        [i, c] = (0, s.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        }));
    return (
        l.useEffect(() => {
            c({
                y:
                    36 *
                    Math.max(
                        t.findIndex((e) => e.key === n),
                        0,
                    ),
            });
        }, [t, n, c]),
        (0, r.jsxs)("div", {
            className: d.subnav,
            children: [
                (0, r.jsx)("div", {
                    className: d.track,
                    children: (0, r.jsx)(a.animated.div, {
                        className: d.thumb,
                        style: i,
                    }),
                }),
                (0, r.jsx)("ul", {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            f,
                            {
                                onClick: () => {
                                    var t;
                                    o((t = e.key)),
                                        u.Z.setState({
                                            targetKey: t,
                                            showNavigationMobile: !1,
                                        });
                                },
                                active: e.key === n,
                                category: e,
                            },
                            e.key,
                        ),
                    ),
                }),
            ],
        })
    );
}
