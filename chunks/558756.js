n.d(t, { W: () => s });
var r = n(200651),
    i = n(442837),
    l = n(481060),
    o = n(9156),
    a = n(388032);
let s = (e) => {
    let { className: t, channel: s, user: c } = e,
        u = (0, i.e7)([o.ZP], () => o.ZP.isChannelMuted(null, s.id));
    return c.bot
        ? (0, r.jsx)(l.zxk, {
              className: t,
              size: l.PhG.SMALL,
              color: u ? l.zxk.Colors.PRIMARY : l.zxk.Colors.RED,
              onClick: function () {
                  (0, l.ZDy)(async () => {
                      let { default: e } = await n.e('83545').then(n.bind(n, 53149));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              (function (e) {
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
                              })({ channelId: s.id }, t)
                          );
                  });
              },
              children: u ? a.NW.string(a.t.YqAjX1) : a.NW.string(a.t['w4m94+'])
          })
        : null;
};
