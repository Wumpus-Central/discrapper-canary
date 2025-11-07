n.d(t, { Z: () => f }), n(953529);
var l = n(951288),
    i = n(647438),
    r = n(442837),
    o = n(367907),
    a = n(535139),
    c = n(728345),
    s = n(812206),
    u = n(925329),
    d = n(626135),
    m = n(826380),
    p = n(981631),
    h = n(388032);
function f(e) {
    var t;
    let { connection: n, guildId: f, location: g } = e,
        j = (0, r.e7)([s.Z], () => (null != n.application_id ? s.Z.getApplication(n.application_id) : null), [
            n.application_id,
        ]);
    i.useEffect(() => {
        null != j ||
            null == n.application_id ||
            s.Z.isFetchingApplication(n.application_id) ||
            s.Z.didFetchingApplicationFail(n.application_id) ||
            (0, c.UM)(n.application_id).catch(() => {});
    }, [j, n.application_id]);
    let v = null != (t = null == j ? void 0 : j.name) ? t : h.intl.string(h.t.cgPbaZ),
        { hasAlreadyLinked: x, canStartAuthorization: y, startAuthorization: b, fetched: C } = (0, a.F)(j),
        O = (0, l.jsx)(u.Z, {
            game: j,
            size: u.A.MEDIUM,
        }),
        Z = i.useCallback(() => {
            var e, t, l;
            d.default.track(
                p.rMx.GUILD_ONBOARDING_CONNECTION_CLICKED,
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
                })({}, (0, o.hH)(f))),
                (l = l =
                    {
                        connection_type: "application",
                        application_id: null != (e = n.application_id) ? e : void 0,
                        location: g,
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
                b();
        }, [b, f, n.application_id, g]);
    return (0, l.jsx)(m.Z, {
        displayName: v,
        description: n.description,
        icon: O,
        isLoading: !C,
        isConnected: x,
        canConnect: y,
        onConnect: Z,
    });
}
