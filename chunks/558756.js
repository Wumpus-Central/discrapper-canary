n.d(t, { W: () => s });
var i = n(54381),
    r = n(442837),
    l = n(481060),
    a = n(9156),
    o = n(388032);
let s = (e) => {
    let { channel: t, user: s } = e,
        c = (0, r.e7)([a.ZP], () => a.ZP.isChannelMuted(null, t.id));
    return s.bot
        ? (0, i.jsx)(l.Button, {
              variant: c ? "secondary" : "critical-primary",
              size: "sm",
              text: c ? o.intl.string(o.t.YqAjXy) : o.intl.string(o.t.w4m945),
              onClick: function () {
                  (0, l.ZDy)(async () => {
                      let { default: e } = await n.e("83545").then(n.bind(n, 53149));
                      return (n) =>
                          (0, i.jsx)(
                              e,
                              (function (e) {
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
                              })({ channelId: t.id }, n),
                          );
                  });
              },
          })
        : null;
};
