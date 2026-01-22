n.d(t, { A: () => a });
var l = n(627968),
    r = n(942528),
    i = n(409626);
function a(e) {
    var t, n;
    let { entry: a, viewId: s, officialGuildId: o } = e;
    return (0, l.jsx)(
        r.A,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })({}, e)),
        (n = n =
            {
                onReaction: () => {
                    (0, i.Tn)({
                        action: i.Ws.SendMessageUser,
                        applicationId: a.extra.application_id,
                        gameName: a.extra.game_name,
                        recipientUserId: a.author_id,
                        viewId: s,
                        officialGuildId: o,
                    });
                },
                onRequestOpen: () => {
                    (0, i.Tn)({
                        action: i.Ws.ClickMessageUser,
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
