r.d(t, { Z: () => s });
var n = r(200651),
    i = r(192379),
    o = r(481060),
    l = r(528011),
    c = r(666657),
    a = r(533244),
    u = r(388032);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: s, isUnderLockdown: b, incidentData: O } = (0, l.mI)(e.id),
        f = i.useCallback(() => {
            let t = {
                source: c.Zu.CONTEXT_MENU,
                alertType: (0, a.T1)(O)
            };
            (0, o.ZDy)(async () => {
                let { default: i } = await r.e('61536').then(r.bind(r, 664452));
                return (r) => {
                    var o, l;
                    return (0, n.jsx)(
                        i,
                        ((o = (function (e) {
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
                        (l = l =
                            {
                                guildId: e.id,
                                analyticsData: t
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        o)
                    );
                };
            });
        }, [e.id, O]);
    return e.isCommunity() && s
        ? (0, n.jsx)(o.sNh, {
              id: 'server-lockdown',
              label: b ? u.NW.string(u.t['+tSVi4']) : u.NW.string(u.t.EPlEdn),
              icon: t ? (b ? o.d$P : o.mBM) : void 0,
              action: f,
              color: 'danger'
          })
        : null;
}
