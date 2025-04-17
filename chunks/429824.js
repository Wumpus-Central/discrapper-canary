r.d(t, { Z: () => s });
var n = r(200651),
    i = r(192379),
    l = r(481060),
    o = r(528011),
    c = r(666657),
    a = r(533244),
    u = r(388032);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: s, isUnderLockdown: b, incidentData: p } = (0, o.mI)(e.id),
        O = i.useCallback(() => {
            let t = {
                source: c.Zu.CONTEXT_MENU,
                alertType: (0, a.T1)(p)
            };
            (0, l.ZDy)(async () => {
                let { default: i } = await r.e('61536').then(r.bind(r, 664452));
                return (r) => {
                    var l, o;
                    return (0, n.jsx)(
                        i,
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, r)),
                        (o = o =
                            {
                                guildId: e.id,
                                analyticsData: t
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
                        l)
                    );
                };
            });
        }, [e.id, p]);
    return e.isCommunity() && s
        ? (0, n.jsx)(l.sNh, {
              id: 'server-lockdown',
              label: b ? u.NW.string(u.t['+tSVi4']) : u.NW.string(u.t.EPlEdn),
              icon: t ? (b ? l.d$P : l.mBM) : void 0,
              action: O,
              color: 'danger'
          })
        : null;
}
