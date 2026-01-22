n.d(t, {
    X: () => o,
});
var r = n(627968),
    l = n(311907),
    i = n(397927),
    a = n(543465),
    s = n(985018);
let o = (e) => {
    let { channel: t, user: o } = e,
        c = (0, l.bG)([a.Ay], () => a.Ay.isChannelMuted(null, t.id));
    return o.bot
        ? (0, r.jsx)(i.Button, {
              variant: c ? "secondary" : "critical-primary",
              size: "sm",
              text: c ? s.intl.string(s.t.YqAjXy) : s.intl.string(s.t.w4m945),
              onClick: function () {
                  (0, i.mMO)(async () => {
                      let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              (function (e) {
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
                              })(
                                  {
                                      channelId: t.id,
                                  },
                                  n,
                              ),
                          );
                  });
              },
          })
        : null;
};
