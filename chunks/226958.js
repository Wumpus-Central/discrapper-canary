t.d(n, {
    A: () => u,
});
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    a = t(311907),
    o = t(397927),
    c = t(970278),
    d = t(406704),
    s = t(985018);

function u(e) {
    let n = (0, d.H_)(e),
        r = (0, a.bG)([c.A], () => !l().isEmpty(c.A.getThreadsForGuild(e.id)));
    return n && r
        ? (0, i.jsx)(o.Drp, {
              id: "active-threads",
              label: s.intl.string(s.t.TM6err),
              icon: o.oyn,
              leadingAccessory: {
                  type: "icon",
                  icon: o.oyn,
              },
              action: () => {
                  (0, o.mMO)(async () => {
                      let { default: n } = await t.e("70215").then(t.bind(t, 400954));
                      return (t) =>
                          (0, i.jsx)(
                              n,
                              (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          i = Object.keys(t);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              }),
                                          )),
                                          i.forEach(function (n) {
                                              var i;
                                              (i = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[n] = i);
                                          });
                                  }
                                  return e;
                              })(
                                  {
                                      guildId: e.id,
                                  },
                                  t,
                              ),
                          );
                  });
              },
          })
        : null;
}
