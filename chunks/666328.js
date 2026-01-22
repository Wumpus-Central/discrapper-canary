n.d(t, { A: () => d }), n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(964404),
    s = n(469707),
    o = n(513963),
    c = n(951829),
    u = n(985018);
function d(e, t) {
    let [n, d, f] = (0, s.A)(e, t),
        p = (0, l.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, r.jsx)(i.sLh, {
              id: "self-stream-hide",
              label: u.intl.string(u.t.aol7iW),
              checked: !d,
              action: () => {
                  if (p || d) return f(!d);
                  (0, i.qfG)((e) => {
                      var t, n;
                      return (0, r.jsx)(
                          o.A,
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
                                  type: c.f.STREAM,
                                  onConfirm: () => f(!d),
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
