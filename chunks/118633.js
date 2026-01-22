n.d(t, { A: () => g }), n(228524);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(58149),
    o = n(688810),
    c = n(362490),
    s = n(627363),
    u = n(587895),
    d = n(769015),
    m = n(954571),
    p = n(184952),
    h = n(652215),
    f = n(985018);
function g(e) {
    var t;
    let { connection: n, guildId: g, location: v } = e,
        y = (0, i.bG)([u.A], () => (null != n.application_id ? u.A.getApplication(n.application_id) : null), [
            n.application_id,
        ]),
        { analyticsLocations: j } = (0, o.Ay)(v);
    r.useEffect(() => {
        null != y ||
            null == n.application_id ||
            u.A.isFetchingApplication(n.application_id) ||
            u.A.didFetchingApplicationFail(n.application_id) ||
            (0, s.TA)(n.application_id).catch(() => {});
    }, [y, n.application_id]);
    let x = null != (t = null == y ? void 0 : y.name) ? t : f.intl.string(f.t.cgPbaZ),
        { hasAlreadyLinked: A, canStartAuthorization: b, startAuthorization: C, fetched: O } = (0, c.RD)(y),
        w = (0, l.jsx)(d.A, {
            game: y,
            size: d.M.MEDIUM,
        }),
        _ = r.useCallback(() => {
            var e, t, l;
            m.default.track(
                h.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED,
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
                })({}, (0, a.H$)(g))),
                (l = l =
                    {
                        connection_type: "application",
                        application_id: null != (e = n.application_id) ? e : void 0,
                        location: v,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                t),
            ),
                C({ analyticsLocations: j });
        }, [C, g, n.application_id, v, j]);
    return (0, l.jsx)(p.A, {
        displayName: x,
        description: n.description,
        icon: w,
        isLoading: !O,
        isConnected: A,
        canConnect: b,
        onConnect: _,
    });
}
