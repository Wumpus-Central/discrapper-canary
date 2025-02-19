n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(392711),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(344185),
    s = n(665906),
    d = n(388032);
function u(e) {
    let t = (0, s.Xb)(e),
        r = (0, l.e7)([c.Z], () => !a().isEmpty(c.Z.getThreadsForGuild(e.id)));
    return t && r
        ? (0, i.jsx)(o.sNh, {
              id: 'active-threads',
              label: d.NW.string(d.t.TM6erq),
              icon: o.kBi,
              action: () => {
                  (0, o.ZDy)(async () => {
                      let { default: t } = await n.e('22482').then(n.bind(n, 157743));
                      return (n) =>
                          (0, i.jsx)(
                              t,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({ guildId: e.id }, n)
                          );
                  });
              }
          })
        : null;
}
