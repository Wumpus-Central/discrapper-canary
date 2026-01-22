n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(494713),
    a = n(985018);
function o(e) {
    let { guildFriendsEnabled: t } = l.A.useExperiment({ location: "useFriendsItem" }, { autoTrackExposure: !1 });
    return t
        ? (0, i.jsx)(r.Drp, {
              id: "friends",
              label: a.intl.string(a.t.kYxEcH),
              icon: r.$yI,
              action: () => {
                  (0, r.mMO)(async () => {
                      let { default: t } = await n.e("42048").then(n.bind(n, 151203));
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
                              })({ guild: e }, n),
                          );
                  });
              },
          })
        : null;
}
