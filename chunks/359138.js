n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(747545),
    l = n(131951),
    c = n(388032),
    u = n(766625);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = 387,
    m = 218;
function g() {
    let e = l.Z.getCameraComponent(),
        t = (0, a.e7)([l.Z], () => l.Z.getVideoDeviceId()),
        [n, d] = i.useState(!1),
        _ = (0, a.e7)([l.Z], () => l.Z.isVideoAvailable());
    return n
        ? (0, r.jsx)("div", {
              className: u.cameraWrapper,
              children: (0, r.jsxs)("div", {
                  className: u.camera,
                  children: [
                      (0, r.jsx)(e, {
                          deviceId: t,
                          width: h,
                          height: m,
                          disabled: !n,
                      }),
                      (0, r.jsx)(s.S, {}),
                  ],
              }),
          })
        : (0, r.jsx)("div", {
              className: u.cameraWrapper,
              children: (0, r.jsx)(o.ua7, {
                  text: _ ? null : c.intl.string(c.t["8jSzSU"]),
                  children: (e) =>
                      (0, r.jsx)(
                          o.zxk,
                          p(
                              f(
                                  {
                                      variant: "primary",
                                      text: c.intl.string(c.t.JIf4v7),
                                  },
                                  e,
                              ),
                              {
                                  onClick: () => d(!0),
                                  disabled: !_,
                              },
                          ),
                      ),
              }),
          });
}
