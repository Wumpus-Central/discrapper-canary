n.d(t, {
    Vn: () => c,
    e8: () => o,
});
var i = n(600975),
    s = n(428835);

function l(e) {
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
}

function r(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let a = (0, i.C)({
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
    o = (e) =>
        (0, s.u5)(
            a,
            r(l({}, e), {
                autoTrackExposure: !1,
            }),
        ),
    c = (e) =>
        (0, s.P2)(
            a,
            r(l({}, e), {
                autoTrackExposure: !1,
            }),
        ).showToggle;
