n.d(t, { Z: () => h }), n(953529);
var l = n(951288),
    r = n(647438),
    i = n(442837),
    o = n(481060),
    a = n(367907),
    c = n(535139),
    s = n(812206),
    u = n(626135),
    d = n(826380),
    m = n(981631),
    p = n(388032);
function h(e) {
    var t;
    let { connection: n, guildId: h, location: f } = e,
        g = (0, i.e7)([s.Z], () => (null != n.application_id ? s.Z.getApplication(n.application_id) : null), [
            n.application_id,
        ]),
        j = null != (t = null == g ? void 0 : g.name) ? t : p.intl.string(p.t.cgPbaZ),
        { hasAlreadyLinked: v, canStartAuthorization: x, startAuthorization: y, fetched: b } = (0, c.F)(g),
        C = r.useCallback(() => {
            var e, t, l;
            u.default.track(
                m.rMx.GUILD_ONBOARDING_CONNECTION_CLICKED,
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
                })({}, (0, a.hH)(h))),
                (l = l =
                    {
                        connection_type: "application",
                        application_id: null != (e = n.application_id) ? e : void 0,
                        location: f,
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
                y();
        }, [y, h, n.application_id, f]),
        O = (0, l.jsx)(o.xPt, {
            size: "custom",
            width: 40,
            height: 40,
            color: "currentColor",
        });
    return (0, l.jsx)(d.Z, {
        displayName: j,
        description: n.description,
        icon: O,
        isLoading: !b,
        isConnected: v,
        canConnect: x,
        onConnect: C,
    });
}
