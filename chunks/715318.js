r.d(t, { Z: () => u });
var n = r(200651),
    a = r(192379),
    o = r(481060),
    i = r(239091),
    l = r(299206),
    s = r(858042),
    c = r(388032);
function u(e) {
    let { applicationId: t, className: r, viewId: u } = e,
        d = a.useRef(null),
        p = (0, l.Z)({
            id: t,
            label: c.NW.string(c.t['FfCL+/'])
        }),
        f = (0, s.M)({
            applicationId: t,
            viewId: u
        });
    return null == p && null == f
        ? null
        : (0, n.jsx)(o.yRy, {
              targetElementRef: d,
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, n.jsx)(o.v2r, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, i.Zy)(), t();
                      },
                      'aria-label': c.NW.string(c.t.PNeFgY),
                      onSelect: () => {},
                      children: (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsx)(o.kSQ, { children: p }), (0, n.jsx)(o.kSQ, { children: f })]
                      })
                  });
              },
              children: (e) =>
                  (0, n.jsx)(o.ua7, {
                      text: c.NW.string(c.t.UKOtz8),
                      children: (t) => {
                          var a, i;
                          return (0, n.jsx)(
                              o.P3F,
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
                              (i = i =
                                  {
                                      children: (0, n.jsx)(o.xhG, {
                                          size: 'xs',
                                          color: o.TVs.colors.WHITE
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              a)
                          );
                      }
                  })
          });
}
