r.d(t, { Z: () => u });
var n = r(255367),
    i = r(73800),
    a = r(481060),
    l = r(239091),
    s = r(299206),
    o = r(858042),
    c = r(388032);
function u(e) {
    let { applicationId: t, className: r, viewId: u } = e,
        d = i.useRef(null),
        m = (0, s.Z)({
            id: t,
            label: c.intl.string(c.t['FfCL+/'])
        }),
        g = (0, o.M)({
            applicationId: t,
            viewId: u
        });
    return null == m && null == g
        ? null
        : (0, n.jsx)(a.yRy, {
              targetElementRef: d,
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, n.jsx)(a.v2r, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, l.Zy)(), t();
                      },
                      'aria-label': c.intl.string(c.t.PNeFgY),
                      onSelect: () => {},
                      children: (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsx)(a.kSQ, { children: m }), (0, n.jsx)(a.kSQ, { children: g })]
                      })
                  });
              },
              children: (e) =>
                  (0, n.jsx)(a.ua7, {
                      text: c.intl.string(c.t.UKOtz8),
                      children: (t) => {
                          var i, l;
                          return (0, n.jsx)(
                              a.P3F,
                              ((i = (function (e) {
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
                                      children: (0, n.jsx)(a.xhG, {
                                          size: 'xs',
                                          color: a.TVs.colors.WHITE
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i)
                          );
                      }
                  })
          });
}
