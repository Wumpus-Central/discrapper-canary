n.d(t, { Z: () => m }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(747545),
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
        [n, m] = r.useState(!1),
        p = (0, s.e7)([o.Z], () => o.Z.isVideoAvailable());
    return n
        ? (0, i.jsx)('div', {
              className: d.cameraWrapper,
              children: (0, i.jsxs)('div', {
                  className: d.camera,
                  children: [
                      (0, i.jsx)(e, {
                          deviceId: t,
                          width: u.width,
                          height: u.height,
                          disabled: !n
                      }),
                      (0, i.jsx)(a.S, {})
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: d.cameraWrapper,
              children: [
                  (0, i.jsx)('div', { className: d.previewImage }),
                  (0, i.jsx)(l.ua7, {
                      text: p ? null : c.intl.string(c.t['8jSzSU']),
                      children: (e) => {
                          var t, n;
                          return (0, i.jsx)(
                              l.zxk,
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
                                      onClick: () => m(!0),
                                      disabled: !p,
                                      children: c.intl.string(c.t.JIf4v7)
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
