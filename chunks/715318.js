r.d(t, { Z: () => c });
var n = r(200651);
r(192379);
var a = r(481060),
    o = r(239091),
    i = r(299206),
    s = r(858042),
    l = r(388032);
function c(e) {
    let { applicationId: t, className: r, viewId: c } = e,
        u = (0, i.Z)({
            id: t,
            label: l.NW.string(l.t['FfCL+/'])
        }),
        d = (0, s.M)({
            applicationId: t,
            viewId: c
        });
    return null == u && null == d
        ? null
        : (0, n.jsx)(a.yRy, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, n.jsx)(a.v2r, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, o.Zy)(), t();
                      },
                      'aria-label': l.NW.string(l.t.PNeFgY),
                      onSelect: () => {},
                      children: (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsx)(a.kSQ, { children: u }), (0, n.jsx)(a.kSQ, { children: d })]
                      })
                  });
              },
              children: (e) =>
                  (0, n.jsx)(a.ua7, {
                      text: l.NW.string(l.t.UKOtz8),
                      children: (t) => {
                          var o, i;
                          return (0, n.jsx)(
                              a.P3F,
                              ((o = (function (e) {
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
                              })({ className: r }, t, e)),
                              (i = i =
                                  {
                                      children: (0, n.jsx)(a.xhG, {
                                          size: 'xs',
                                          color: a.TVs.colors.WHITE
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              o)
                          );
                      }
                  })
          });
}
