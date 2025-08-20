r.d(t, { Z: () => a });
var n = r(951288),
    i = r(499493),
    l = r(810568);
function a(e) {
    var t, r;
    let { entry: a, viewId: s, officialGuildId: o } = e;
    return (0, n.jsx)(
        i.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, e)),
        (r = r =
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
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
