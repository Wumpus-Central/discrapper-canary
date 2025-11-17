n.d(t, { Z: () => d }), n(388685);
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(740492),
    o = n(984014),
    s = n(295510),
    c = n(394059),
    u = n(388032);
function d(e, t) {
    let [n, d, p] = (0, o.Z)(e, t),
        h = (0, r.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(l.S89, {
              id: "self-stream-hide",
              label: u.intl.string(u.t.aol7iW),
              checked: !d,
              action: () => {
                  if (h || d) return p(!d);
                  (0, l.h7j)((e) => {
                      var t, n;
                      return (0, i.jsx)(
                          s.Z,
                          ((t = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = i);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (n = n =
                              {
                                  type: c.K.STREAM,
                                  onConfirm: () => p(!d),
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
                          t),
                      );
                  });
              },
          })
        : null;
}
