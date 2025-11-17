n.d(t, { Z: () => f }), n(953529);
var l = n(54381),
    i = n(473749),
    r = n(780384),
    o = n(481060),
    a = n(410030),
    c = n(726542),
    s = n(367907),
    u = n(298692),
    d = n(626135),
    m = n(826380),
    p = n(981631),
    h = n(388032);
function f(e) {
    var t, n;
    let { connection: f, guildId: g, location: j } = e,
        v = (0, a.ZP)(),
        x =
            null != (n = null != f.provider_id ? (null == (t = c.Z.get(f.provider_id)) ? void 0 : t.name) : null)
                ? n
                : h.intl.string(h.t.NzCoRx),
        { hasConnection: y, canConnect: b, startConnection: C, loading: O } = (0, u.B)(f.provider_id),
        Z = i.useCallback(async () => {
            var e, t, n;
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
                })({}, (0, s.hH)(g))),
                (n = n =
                    {
                        connection_type: "provider",
                        provider_id: null != (e = f.provider_id) ? e : void 0,
                        location: j,
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
                await C(j);
        }, [C, g, f.provider_id, j]),
        w = i.useMemo(() => {
            if (null != f.provider_id) {
                let e = c.Z.get(f.provider_id),
                    t =
                        (null == e ? void 0 : e.icon) != null
                            ? (0, r.wj)(v)
                                ? e.icon.darkPNG
                                : e.icon.lightPNG
                            : null;
                if (null != t)
                    return (0, l.jsx)("img", {
                        src: t,
                        alt: x,
                        width: 40,
                        height: 40,
                    });
            }
            return (0, l.jsx)(o.xPt, {
                size: "custom",
                width: 40,
                height: 40,
                color: "currentColor",
            });
        }, [f.provider_id, v, x]);
    return (0, l.jsx)(m.Z, {
        displayName: x,
        description: f.description,
        icon: w,
        isLoading: O,
        isConnected: y,
        canConnect: b,
        onConnect: Z,
    });
}
