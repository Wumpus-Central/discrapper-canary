n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(747545),
    o = n(131951),
    c = n(388032),
    d = n(959963);
let u = {
    width: 387,
    height: 218
};
function m() {
    let e = o.Z.getCameraComponent(),
        t = (0, s.e7)([o.Z], () => o.Z.getVideoDeviceId()),
        [n, m] = i.useState(!1),
        g = (0, s.e7)([o.Z], () => o.Z.isVideoAvailable());
    return n
        ? (0, r.jsx)('div', {
              className: d.cameraWrapper,
              children: (0, r.jsxs)('div', {
                  className: d.camera,
                  children: [
                      (0, r.jsx)(e, {
                          deviceId: t,
                          width: u.width,
                          height: u.height,
                          disabled: !n
                      }),
                      (0, r.jsx)(l.S, {})
                  ]
              })
          })
        : (0, r.jsxs)('div', {
              className: d.cameraWrapper,
              children: [
                  (0, r.jsx)('div', { className: d.previewImage }),
                  (0, r.jsx)(a.ua7, {
                      text: g ? null : c.NW.string(c.t['8jSzSU']),
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              a.zxk,
                              ((t = (function (e) {
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
                              (n = n =
                                  {
                                      onClick: () => m(!0),
                                      disabled: !g,
                                      children: c.NW.string(c.t.JIf4v7)
                                  }),
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
                              t)
                          );
                      }
                  })
              ]
          });
}
