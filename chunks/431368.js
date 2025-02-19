n.d(t, { Z: () => d }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(740492),
    a = n(984014),
    s = n(295510),
    c = n(394059),
    u = n(388032);
function d(e, t) {
    let [n, d, p] = (0, a.Z)(e, t),
        h = (0, i.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, r.jsx)(l.S89, {
              id: 'self-stream-hide',
              label: u.NW.string(u.t.aol7iY),
              checked: !d,
              action: () => {
                  if (h || d) return p(!d);
                  (0, l.h7j)((e) => {
                      var t, n;
                      return (0, r.jsx)(
                          s.Z,
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
                                  type: c.K.STREAM,
                                  onConfirm: () => p(!d)
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
