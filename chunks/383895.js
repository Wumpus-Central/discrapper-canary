n.d(t, { Z: () => l });
var a = n(54381),
    i = n(499493),
    r = n(810568);
function l(e) {
    var t, n;
    let { entry: l, viewId: o, officialGuildId: s } = e;
    return (0, a.jsx)(
        i.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })({}, e)),
        (n = n =
            {
                onReaction: () => {
                    (0, r.UE)({
                        action: r.as.SendMessageUser,
                        applicationId: l.extra.application_id,
                        gameName: l.extra.game_name,
                        recipientUserId: l.author_id,
                        viewId: o,
                        officialGuildId: s,
                    });
                },
                onRequestOpen: () => {
                    (0, r.UE)({
                        action: r.as.ClickMessageUser,
                        applicationId: l.extra.application_id,
                        gameName: l.extra.game_name,
                        recipientUserId: l.author_id,
                        viewId: o,
                        officialGuildId: s,
                    });
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
