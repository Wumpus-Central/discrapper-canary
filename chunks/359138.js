n.d(t, { Z: () => g }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(844168),
    a = n(481060),
    o = n(747545),
    c = n(131951),
    d = n(388032),
    u = n(959963);
let m = {
    width: 387,
    height: 218
};
function g() {
    let e = c.Z.getCameraComponent(),
        t = (0, s.e7)([c.Z], () => c.Z.getVideoDeviceId()),
        n = (0, l.C)('user-settings-camera-preview'),
        [g, p] = r.useState(!1),
        h = (0, s.e7)([c.Z], () => c.Z.isVideoAvailable());
    return g
        ? (0, i.jsx)('div', {
              className: u.cameraWrapper,
              children: (0, i.jsxs)('div', {
                  className: u.camera,
                  children: [
                      (0, i.jsx)(e, {
                          deviceId: t,
                          width: m.width,
                          height: m.height,
                          disabled: !g
                      }),
                      (0, i.jsx)(o.S, {})
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: u.cameraWrapper,
              children: [
                  !n && (0, i.jsx)('div', { className: u.previewImage }),
                  (0, i.jsx)(a.ua7, {
                      text: h ? null : d.intl.string(d.t['8jSzSU']),
                      children: (e) => {
                          var t, n;
                          return (0, i.jsx)(
                              a.zxk,
                              ((t = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (n = n =
                                  {
                                      onClick: () => p(!0),
                                      disabled: !h,
                                      children: d.intl.string(d.t.JIf4v7)
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
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
