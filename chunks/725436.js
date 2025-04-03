n.d(t, { m: () => u });
var r = n(454585),
    l = n(551452),
    a = n(532901);
function i(e) {
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
}
function c(e, t) {
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
let s = c(i({}, r.Z.guildEventRules.link), {
        react: (0, a.Z)({
            enableBuildOverrides: !1,
            mustConfirmExternalLink: !0
        }).react
    }),
    o = c(i({}, r.Z.guildEventRules.channelMention), {
        react: (0, l.Z)({
            enableBuildOverrides: !1,
            shouldCloseDefaultModals: !0,
            shouldStopPropagation: !0
        }).react
    }),
    u = r.Z.reactParserFor(
        c(i({}, r.Z.guildEventRules), {
            link: s,
            channelMention: o
        })
    );
