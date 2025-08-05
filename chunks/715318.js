r.d(t, { Z: () => d });
var n = r(255367),
    a = r(73800),
    i = r(481060),
    l = r(239091),
    o = r(299206),
    s = r(858042),
    c = r(388032);
function d(e) {
    let { applicationId: t, className: r, viewId: d } = e,
        u = a.useRef(null),
        m = (0, o.Z)({
            id: t,
            label: c.intl.string(c.t['FfCL+/'])
        }),
        g = (0, s.M)({
            applicationId: t,
            viewId: d
        });
    return null == m && null == g
        ? null
        : (0, n.jsx)(i.yRy, {
              targetElementRef: u,
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, n.jsx)(i.v2r, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          ((0, l.Zy)(), t());
                      },
                      'aria-label': c.intl.string(c.t.PNeFgY),
                      onSelect: () => {},
                      children: (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsx)(i.kSQ, { children: m }), (0, n.jsx)(i.kSQ, { children: g })]
                      })
                  });
              },
              children: (e) =>
                  (0, n.jsx)(i.ua7, {
                      text: c.intl.string(c.t.UKOtz8),
                      children: (t) => {
                          var a, l;
                          return (0, n.jsx)(
                              i.P3F,
                              ((a = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              ((n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = n));
                                          }));
                                  }
                                  return e;
                              })(
                                  {
                                      innerRef: u,
                                      className: r
                                  },
                                  t,
                                  e
                              )),
                              (l = l =
                                  {
                                      children: (0, n.jsx)(i.xhG, {
                                          size: 'xs',
                                          color: i.TVs.colors.WHITE
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              a)
                          );
                      }
                  })
          });
}
