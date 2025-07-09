n.d(t, { W: () => c });
var r = n(255367),
    i = n(442837),
    l = n(755721),
    a = n(481060),
    o = n(9156),
    s = n(388032);
let c = (e) => {
    let { className: t, channel: c, user: u } = e,
        d = (0, i.e7)([o.ZP], () => o.ZP.isChannelMuted(null, c.id));
    return u.bot
        ? (0, r.jsx)(l.zx, {
              className: t,
              size: l.Ph.SMALL,
              color: d ? l.zx.Colors.PRIMARY : l.zx.Colors.RED,
              onClick: function () {
                  (0, a.ZDy)(async () => {
                      let { default: e } = await n.e('83545').then(n.bind(n, 53149));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({ channelId: c.id }, t)
                          );
                  });
              },
              children: d ? s.intl.string(s.t.YqAjX1) : s.intl.string(s.t['w4m94+'])
          })
        : null;
};
