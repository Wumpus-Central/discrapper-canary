n.d(t, { Z: () => f }), n(388685);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(740492),
    o = n(27584),
    u = n(295510),
    d = n(394059),
    s = n(65154),
    c = n(388032);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [n, f, p] = (0, o.Z)(e, t),
        v = (0, r.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(l.S89, {
              id: 'self-video-hide',
              label: c.intl.string(c.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (v || f) return p(!f);
                  (0, l.h7j)((e) => {
                      var t, n;
                      return (0, i.jsx)(
                          u.Z,
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
                                  type: d.K.VIDEO,
                                  onConfirm: () => p(!f)
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
                  });
              }
          })
        : null;
}
