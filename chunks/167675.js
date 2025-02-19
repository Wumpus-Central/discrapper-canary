n.d(t, { Z: () => f }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    l = n(740492),
    c = n(27584),
    a = n(295510),
    u = n(394059),
    s = n(65154),
    d = n(388032);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [n, f, b] = (0, c.Z)(e, t),
        g = (0, i.e7)([l.ZP], () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, r.jsx)(o.S89, {
              id: 'self-video-hide',
              label: d.NW.string(d.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (g || f) return b(!f);
                  (0, o.h7j)((e) => {
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
                                  type: u.K.VIDEO,
                                  onConfirm: () => b(!f)
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
