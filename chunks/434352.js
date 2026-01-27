t.d(n, {
    A: () => o,
});
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(494713),
    a = t(985018);

function o(e) {
    let { guildFriendsEnabled: n } = l.A.useExperiment(
        {
            location: "useFriendsItem",
        },
        {
            autoTrackExposure: !1,
        },
    );
    return n
        ? (0, i.jsx)(r.Drp, {
              id: "friends",
              label: a.intl.string(a.t.kYxEcH),
              icon: r.$yI,
              leadingAccessory: {
                  type: "icon",
                  icon: r.$yI,
              },
              action: () => {
                  (0, r.mMO)(async () => {
                      let { default: n } = await t.e("42048").then(t.bind(t, 151203));
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
                                      guild: e,
                                  },
                                  t,
                              ),
                          );
                  });
              },
          })
        : null;
}
