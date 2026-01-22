n.d(t, {
    A: () => u,
});
var i = n(627968);
n(64700);
var r = n(735438),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    c = n(970278),
    d = n(406704),
    s = n(985018);

function u(e) {
    let t = (0, d.H_)(e),
        r = (0, a.bG)([c.A], () => !l().isEmpty(c.A.getThreadsForGuild(e.id)));
    return t && r
        ? (0, i.jsx)(o.Drp, {
              id: "active-threads",
              label: s.intl.string(s.t.TM6err),
              icon: o.oyn,
              action: () => {
                  (0, o.mMO)(async () => {
                      let { default: t } = await n.e("70215").then(n.bind(n, 400954));
                      return (n) =>
                          (0, i.jsx)(
                              t,
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
                              })(
                                  {
                                      guildId: e.id,
                                  },
                                  n,
                              ),
                          );
                  });
              },
          })
        : null;
}
