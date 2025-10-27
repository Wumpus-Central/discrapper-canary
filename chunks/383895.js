n.d(t, { Z: () => a });
var r = n(951288),
    i = n(499493),
    l = n(810568);
function a(e) {
    var t, n;
    let { entry: a, viewId: s, officialGuildId: o } = e;
    return (0, r.jsx)(
        i.Z,
        ((t = (function (e) {
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
        })({}, e)),
        (n = n =
            {
                onReaction: () => {
                    (0, l.UE)({
                        action: l.as.SendMessageUser,
                        applicationId: a.extra.application_id,
                        gameName: a.extra.game_name,
                        recipientUserId: a.author_id,
                        viewId: s,
                        officialGuildId: o,
                    });
                },
                onRequestOpen: () => {
                    (0, l.UE)({
                        action: l.as.ClickMessageUser,
                        applicationId: a.extra.application_id,
                        gameName: a.extra.game_name,
                        recipientUserId: a.author_id,
                        viewId: s,
                        officialGuildId: o,
                    });
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
