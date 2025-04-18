n.d(t, { Z: () => f }), n(388685);
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(740492),
    u = n(27584),
    a = n(295510),
    c = n(394059),
    d = n(65154),
    s = n(388032);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        [n, f, _] = (0, u.Z)(e, t),
        g = (0, l.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, r.jsx)(i.S89, {
              id: 'self-video-hide',
              label: s.NW.string(s.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (g || f) return _(!f);
                  (0, i.h7j)((e) => {
                      var t, n;
                      return (0, r.jsx)(
                          a.Z,
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
                                  type: c.K.VIDEO,
                                  onConfirm: () => _(!f)
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
                  });
              }
          })
        : null;
}
