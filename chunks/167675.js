t.d(n, { Z: () => f }), t(388685);
var r = t(255367);
t(73800);
var i = t(442837),
    l = t(481060),
    o = t(740492),
    a = t(27584),
    c = t(295510),
    s = t(394059),
    u = t(65154),
    d = t(388032);
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        [t, f, h] = (0, a.Z)(e, n),
        p = (0, i.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, r.jsx)(l.S89, {
              id: 'self-video-hide',
              label: d.intl.string(d.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (p || f) return h(!f);
                  (0, l.h7j)((e) => {
                      var n, t;
                      return (0, r.jsx)(
                          c.Z,
                          ((n = (function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = null != arguments[n] ? arguments[n] : {},
                                      r = Object.keys(t);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (n) {
                                          var r;
                                          (r = t[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[n] = r);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (t = t =
                              {
                                  type: s.K.VIDEO,
                                  onConfirm: () => h(!f)
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                              : (function (e, n) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, r);
                                    }
                                    return t;
                                })(Object(t)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                                }),
                          n)
                      );
                  });
              }
          })
        : null;
}
