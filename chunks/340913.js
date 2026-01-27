n.d(t, {
    A: () => a,
});
var r = n(945810);

function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let o = {
        showPTTJoinTooltip: !1,
        showPTTIconIndicator: !1,
        showPTTNoKeybindWarning: !1,
        showPTTSpeakingIndicator: !1,
    },
    a = (0, r.mj)({
        name: "2025-12-09-ptt-education",
        kind: "user",
        defaultConfig: o,
        variations: {
            1: l(i({}, o), {
                showPTTJoinTooltip: !0,
                showPTTNoKeybindWarning: !0,
                showPTTSpeakingIndicator: !0,
            }),
            2: l(i({}, o), {
                showPTTIconIndicator: !0,
            }),
        },
    });
