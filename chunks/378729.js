i.d(e, {
    e8: () => r,
});
var n = i(600975),
    l = i(428835);
let s = (0, n.C)({
        id: "2025-11_game_update_notification",
        kind: "user",
        label: "Game Update Notification",
        defaultConfig: {
            showToggle: !1,
        },
        treatments: [
            {
                id: 1,
                label: "User can receive game update notifications. Show settings toggle.",
                config: {
                    showToggle: !0,
                },
            },
        ],
    }),
    r = (t) => {
        var e, i;
        return (0, l.u5)(
            s,
            ((e = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(i).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(i, t).enumerable;
                            }),
                        )),
                        n.forEach(function (e) {
                            var n;
                            (n = i[e]),
                                e in t
                                    ? Object.defineProperty(t, e, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (t[e] = n);
                        });
                }
                return t;
            })({}, t)),
            (i = i =
                {
                    autoTrackExposure: !1,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                : (function (t, e) {
                      var i = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(t);
                          i.push.apply(i, n);
                      }
                      return i;
                  })(Object(i)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                  }),
            e),
        );
    };
