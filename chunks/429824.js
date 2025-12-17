r.d(t, { Z: () => b });
var n = r(54381),
    i = r(473749),
    l = r(481060),
    o = r(528011),
    c = r(666657),
    a = r(533244),
    u = r(981631),
    s = r(388032);
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: b, isUnderLockdown: O, incidentData: p } = (0, o.mI)(e.id),
        f = i.useCallback(() => {
            let t = {
                source: c.Zu.CONTEXT_MENU,
                alertType: (0, a.T1)(p),
            };
            (0, l.ZDy)(async () => {
                let { default: i } = await r.e("58175").then(r.bind(r, 664452));
                return (r) => {
                    var l, o;
                    return (0, n.jsx)(
                        i,
                        ((l = (function (e) {
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
                        })({}, r)),
                        (o = o =
                            {
                                guildId: e.id,
                                analyticsData: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        l),
                    );
                };
            });
        }, [e.id, p]);
    return e.features.has(u.GuildFeatures.COMMUNITY) && b
        ? (0, n.jsx)(l.sNh, {
              id: "server-lockdown",
              label: O ? s.intl.string(s.t["+tSVi3"]) : s.intl.string(s.t.EPlEdu),
              icon: t ? (O ? l.d$P : l.mBM) : void 0,
              action: f,
              color: "danger",
          })
        : null;
}
