r.d(t, { Z: () => u });
var n = r(200651),
    a = r(192379),
    i = r(481060),
    l = r(239091),
    s = r(299206),
    o = r(858042),
    c = r(388032);
function u(e) {
    let { applicationId: t, className: r, viewId: u } = e,
        d = a.useRef(null),
        m = (0, s.Z)({
            id: t,
            label: c.NW.string(c.t['FfCL+/'])
        }),
        g = (0, o.M)({
            applicationId: t,
            viewId: u
        });
    return null == m && null == g
        ? null
        : (0, n.jsx)(i.yRy, {
              targetElementRef: d,
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, n.jsx)(i.v2r, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, l.Zy)(), t();
                      },
                      'aria-label': c.NW.string(c.t.PNeFgY),
                      onSelect: () => {},
                      children: (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsx)(i.kSQ, { children: m }), (0, n.jsx)(i.kSQ, { children: g })]
                      })
                  });
              },
              children: (e) =>
                  (0, n.jsx)(i.ua7, {
                      text: c.NW.string(c.t.UKOtz8),
                      children: (t) => {
                          var a, l;
                          return (0, n.jsx)(
                              i.P3F,
                              ((a = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })(
                                  {
                                      innerRef: d,
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
