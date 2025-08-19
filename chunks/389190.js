n.d(t, { Z: () => b });
var r = n(951288),
    o = n(647438),
    i = n(481060),
    l = n(81897),
    a = n(906732),
    c = n(785717),
    s = n(806729),
    d = n(857302),
    u = n(892001),
    f = n(252417),
    p = n(388032),
    m = n(878449);
function b(e) {
    let { user: t, guildId: n, channelId: b, onClose: g } = e,
        { mutualFriends: h } = (0, s.Z)(t),
        { analyticsLocations: x } = (0, a.ZP)(),
        { context: _, trackUserProfileAction: j } = (0, c.KZ)(),
        v = (0, l.Z)();
    return (
        o.useEffect(() => {
            (0, d.Z)(t.id, v);
        }, [t.id, v]),
        (0, r.jsx)(i.zJl, {
            className: m.listScroller,
            fade: !0,
            children:
                null == h
                    ? (0, r.jsx)("div", {
                          className: m.empty,
                          children: (0, r.jsx)(i.$jN, {}),
                      })
                    : 0 === h.length
                      ? (0, r.jsxs)("div", {
                            className: m.empty,
                            children: [
                                (0, r.jsx)("div", { className: m.emptyIconFriends }),
                                (0, r.jsx)("div", {
                                    className: m.emptyText,
                                    children: p.intl.string(p.t["/5p4g4"]),
                                }),
                            ],
                        })
                      : h.map((e) => {
                            let { key: t, user: o, status: i } = e;
                            return (0, r.jsx)(
                                f.Z,
                                {
                                    user: o,
                                    status: i,
                                    guildId: n,
                                    channelId: b,
                                    onSelect: () => {
                                        var e, t, n;
                                        null == g || g(),
                                            j({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = o.id),
                                            (0, u.openUserProfileModal)(
                                                ((t = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })({}, _)),
                                                (n = n =
                                                    {
                                                        userId: e,
                                                        sourceAnalyticsLocations: x,
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(n)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              t,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(n, e),
                                                          );
                                                      }),
                                                t),
                                            );
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
