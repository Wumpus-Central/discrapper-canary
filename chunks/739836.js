n.d(t, { A: () => f }), n(228524);
var l = n(627968),
    r = n(64700),
    i = n(582754),
    a = n(397927),
    o = n(736653),
    c = n(573648),
    s = n(58149),
    u = n(749403),
    d = n(954571),
    m = n(184952),
    p = n(652215),
    h = n(985018);
function f(e) {
    var t, n;
    let { connection: f, guildId: g, location: v } = e,
        y = (0, o.Ay)(),
        j =
            null != (t = null != f.provider_id ? (null == (n = c.A.get(f.provider_id)) ? void 0 : n.name) : null)
                ? t
                : h.intl.string(h.t.NzCoRx),
        { hasConnection: x, canConnect: A, startConnection: b, loading: C } = (0, u.p)(f.provider_id),
        O = r.useCallback(async () => {
            var e, t, n;
            d.default.track(
                p.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED,
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
                })({}, (0, s.H$)(g))),
                (n = n =
                    {
                        connection_type: "provider",
                        provider_id: null != (e = f.provider_id) ? e : void 0,
                        location: v,
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
            ),
                await b(v);
        }, [b, g, f.provider_id, v]),
        w = r.useMemo(() => {
            if (null != f.provider_id) {
                let e = c.A.get(f.provider_id),
                    t =
                        (null == e ? void 0 : e.icon) != null
                            ? (0, i.Mw)(y)
                                ? e.icon.darkPNG
                                : e.icon.lightPNG
                            : null;
                if (null != t)
                    return (0, l.jsx)("img", {
                        src: t,
                        alt: j,
                        width: 40,
                        height: 40,
                    });
            }
            return (0, l.jsx)(a.qYV, {
                size: "custom",
                width: 40,
                height: 40,
                color: "currentColor",
            });
        }, [f.provider_id, y, j]);
    return (0, l.jsx)(m.A, {
        displayName: j,
        description: f.description,
        icon: w,
        isLoading: C,
        isConnected: x,
        canConnect: A,
        onConnect: O,
    });
}
