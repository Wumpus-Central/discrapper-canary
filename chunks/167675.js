n.d(t, { Z: () => p }), n(388685);
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(740492),
    o = n(27584),
    s = n(295510),
    c = n(394059),
    u = n(65154),
    d = n(388032);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        [n, p, h] = (0, o.Z)(e, t),
        f = (0, i.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, r.jsx)(l.S89, {
              id: "self-video-hide",
              label: d.intl.string(d.t.MH8ESU),
              checked: !p,
              action: () => {
                  if (f || p) return h(!p);
                  (0, l.h7j)((e) => {
                      var t, n;
                      return (0, r.jsx)(
                          s.Z,
                          ((t = (function (e) {
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
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (n = n =
                              {
                                  type: c.K.VIDEO,
                                  onConfirm: () => h(!p),
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
                          t),
                      );
                  });
              },
          })
        : null;
}
