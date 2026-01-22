n.d(t, { A: () => p }), n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(964404),
    a = n(121046),
    c = n(513963),
    s = n(951829),
    d = n(731854),
    u = n(985018);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        [n, p, b] = (0, a.A)(e, t),
        f = (0, l.bG)([o.Ay], () => o.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, r.jsx)(i.sLh, {
              id: "self-video-hide",
              label: u.intl.string(u.t.MH8ESU),
              checked: !p,
              action: () => {
                  if (f || p) return b(!p);
                  (0, i.qfG)((e) => {
                      var t, n;
                      return (0, r.jsx)(
                          c.A,
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
                                  type: s.f.VIDEO,
                                  onConfirm: () => b(!p),
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
