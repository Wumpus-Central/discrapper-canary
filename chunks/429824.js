n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    o = n(528011),
    a = n(666657),
    c = n(533244),
    u = n(981631),
    s = n(388032);
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: b, isUnderLockdown: p, incidentData: d } = (0, o.mI)(e.id),
        O = i.useCallback(() => {
            let t = {
                source: a.Zu.CONTEXT_MENU,
                alertType: (0, c.T1)(d),
            };
            (0, l.ZDy)(async () => {
                let { default: i } = await n.e("58175").then(n.bind(n, 664452));
                return (n) => {
                    var l, o;
                    return (0, r.jsx)(
                        i,
                        ((l = (function (e) {
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
                        })({}, n)),
                        (o = o =
                            {
                                guildId: e.id,
                                analyticsData: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        l),
                    );
                };
            });
        }, [e.id, d]);
    return e.features.has(u.GuildFeatures.COMMUNITY) && b
        ? (0, r.jsx)(l.sNh, {
              id: "server-lockdown",
              label: p ? s.intl.string(s.t["+tSVi3"]) : s.intl.string(s.t.EPlEdu),
              icon: t ? (p ? l.d$P : l.mBM) : void 0,
              action: O,
              color: "danger",
          })
        : null;
}
