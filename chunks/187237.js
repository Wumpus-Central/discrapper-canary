n.d(t, { v: () => d });
var r = n(255367),
    i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(641360),
    s = n(140106),
    c = n(388032),
    u = n(639041);
function d(e) {
    let { channel: t, children: n, className: i, editable: d, location: p } = e;
    return (0, o.I3)('HeaderBarMaybeClickableGdmIcon', t.id, { autoTrackExposure: d }) && d
        ? (0, r.jsx)(a.ua7, {
              position: 'bottom',
              text: c.intl.string(c.t['0qPSMT']),
              children: (e) => {
                  var o, c;
                  return (0, r.jsxs)(
                      a.P3F,
                      ((o = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (c = c =
                          {
                              className: l()(u.editableGdmIcon, i),
                              onClick: () => (0, s.P5)(t.id, p),
                              children: [
                                  n,
                                  (0, r.jsx)('div', {
                                      className: u.editableGdmIconIndicator,
                                      children: (0, r.jsx)(a.vdY, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(c)).forEach(function (e) {
                                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                            }),
                      o)
                  );
              }
          })
        : (0, r.jsx)('div', {
              className: i,
              children: n
          });
}
