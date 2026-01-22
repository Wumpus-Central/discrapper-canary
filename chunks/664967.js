r.d(t, {
    A: () => b,
});
var n = r(627968),
    i = r(64700),
    l = r(397927),
    o = r(585510),
    c = r(834409),
    a = r(903093),
    u = r(652215),
    s = r(985018);

function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: b, isUnderLockdown: O, incidentData: p } = (0, o.Li)(e.id),
        d = i.useCallback(() => {
            let t = {
                source: c.Eo.CONTEXT_MENU,
                alertType: (0, a.$5)(p),
            };
            (0, l.mMO)(async () => {
                let { default: i } = await r.e("43233").then(r.bind(r, 671576));
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
        ? (0, n.jsx)(l.Drp, {
              id: "server-lockdown",
              label: O ? s.intl.string(s.t["+tSVi3"]) : s.intl.string(s.t.EPlEdu),
              icon: t ? (O ? l.wUM : l.XAi) : void 0,
              action: d,
              color: "danger",
          })
        : null;
}
