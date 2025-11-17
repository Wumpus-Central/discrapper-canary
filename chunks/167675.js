r.d(t, { Z: () => b }), r(388685);
var n = r(54381);
r(473749);
var o = r(442837),
    i = r(481060),
    l = r(740492),
    c = r(27584),
    a = r(295510),
    u = r(394059),
    s = r(65154),
    f = r(388032);
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [r, b, p] = (0, c.Z)(e, t),
        y = (0, o.e7)([l.ZP], () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return r
        ? (0, n.jsx)(i.S89, {
              id: "self-video-hide",
              label: f.intl.string(f.t.MH8ESU),
              checked: !b,
              action: () => {
                  if (y || b) return p(!b);
                  (0, i.h7j)((e) => {
                      var t, r;
                      return (0, n.jsx)(
                          a.Z,
                          ((t = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = null != arguments[t] ? arguments[t] : {},
                                      n = Object.keys(r);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (n = n.concat(
                                          Object.getOwnPropertySymbols(r).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                          }),
                                      )),
                                      n.forEach(function (t) {
                                          var n;
                                          (n = r[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: n,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = n);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (r = r =
                              {
                                  type: u.K.VIDEO,
                                  onConfirm: () => p(!b),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                              : (function (e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        r.push.apply(r, n);
                                    }
                                    return r;
                                })(Object(r)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                }),
                          t),
                      );
                  });
              },
          })
        : null;
}
