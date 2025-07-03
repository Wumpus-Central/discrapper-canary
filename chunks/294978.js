n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var a = n(392711),
    r = n.n(a),
    l = n(442837),
    d = n(481060),
    o = n(344185),
    s = n(665906),
    c = n(388032);
function u(e) {
    let t = (0, s.Xb)(e),
        a = (0, l.e7)([o.Z], () => !r().isEmpty(o.Z.getThreadsForGuild(e.id)));
    return t && a
        ? (0, i.jsx)(d.sNh, {
              id: 'active-threads',
              label: c.intl.string(c.t.TM6erq),
              icon: d.kBi,
              action: () => {
                  (0, d.ZDy)(async () => {
                      let { default: t } = await n.e('22482').then(n.bind(n, 157743));
                      return (n) =>
                          (0, i.jsx)(
                              t,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              ((i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i));
                                          }));
                                  }
                                  return e;
                              })({ guildId: e.id }, n)
                          );
                  });
              }
          })
        : null;
}
