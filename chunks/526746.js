n.d(t, { Z: () => g }), n(953529);
var l = n(54381),
    i = n(473749),
    r = n(442837),
    o = n(367907),
    a = n(906732),
    c = n(524995),
    s = n(728345),
    u = n(812206),
    d = n(925329),
    m = n(626135),
    p = n(826380),
    h = n(981631),
    f = n(388032);
function g(e) {
    var t;
    let { connection: n, guildId: g, location: j } = e,
        x = (0, r.e7)([u.Z], () => (null != n.application_id ? u.Z.getApplication(n.application_id) : null), [
            n.application_id,
        ]),
        { analyticsLocations: v } = (0, a.ZP)(j);
    i.useEffect(() => {
        null != x ||
            null == n.application_id ||
            u.Z.isFetchingApplication(n.application_id) ||
            u.Z.didFetchingApplicationFail(n.application_id) ||
            (0, s.UM)(n.application_id).catch(() => {});
    }, [x, n.application_id]);
    let y = null != (t = null == x ? void 0 : x.name) ? t : f.intl.string(f.t.cgPbaZ),
        { hasAlreadyLinked: b, canStartAuthorization: C, startAuthorization: O, fetched: Z } = (0, c.F)(x),
        w = (0, l.jsx)(d.Z, {
            game: x,
            size: d.A.MEDIUM,
        }),
        _ = i.useCallback(() => {
            var e, t, l;
            m.default.track(
                h.rMx.GUILD_ONBOARDING_CONNECTION_CLICKED,
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
                })({}, (0, o.hH)(g))),
                (l = l =
                    {
                        connection_type: "application",
                        application_id: null != (e = n.application_id) ? e : void 0,
                        location: j,
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
                O({ analyticsLocations: v });
        }, [O, g, n.application_id, j, v]);
    return (0, l.jsx)(p.Z, {
        displayName: y,
        description: n.description,
        icon: w,
        isLoading: !Z,
        isConnected: b,
        canConnect: C,
        onConnect: _,
    });
}
