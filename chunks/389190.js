t.d(n, { Z: () => h });
var l = t(951288),
    i = t(647438),
    r = t(481060),
    o = t(81897),
    s = t(906732),
    a = t(785717),
    c = t(806729),
    d = t(857302),
    u = t(892001),
    m = t(252417),
    p = t(388032),
    f = t(878449);
function h(e) {
    let { user: n, guildId: t, channelId: h, onClose: x } = e,
        { mutualFriends: j } = (0, c.Z)(n),
        { analyticsLocations: v } = (0, s.ZP)(),
        { context: g, trackUserProfileAction: b } = (0, a.KZ)(),
        I = (0, o.Z)();
    return (
        i.useEffect(() => {
            (0, d.Z)(n.id, I);
        }, [n.id, I]),
        (0, l.jsx)(r.zJl, {
            className: f.listScroller,
            fade: !0,
            children:
                null == j
                    ? (0, l.jsx)("div", {
                          className: f.empty,
                          children: (0, l.jsx)(r.$jN, {}),
                      })
                    : 0 === j.length
                      ? (0, l.jsxs)("div", {
                            className: f.empty,
                            children: [
                                (0, l.jsx)("div", { className: f.emptyIconFriends }),
                                (0, l.jsx)("div", {
                                    className: f.emptyText,
                                    children: p.intl.string(p.t["/5p4g4"]),
                                }),
                            ],
                        })
                      : j.map((e) => {
                            let { key: n, user: i, status: r } = e;
                            return (0, l.jsx)(
                                m.Z,
                                {
                                    user: i,
                                    status: r,
                                    guildId: t,
                                    channelId: h,
                                    onSelect: () => {
                                        var e, n, t;
                                        null == x || x(),
                                            b({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = i.id),
                                            (0, u.openUserProfileModal)(
                                                ((n = (function (e) {
                                                    for (var n = 1; n < arguments.length; n++) {
                                                        var t = null != arguments[n] ? arguments[n] : {},
                                                            l = Object.keys(t);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (l = l.concat(
                                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            l.forEach(function (n) {
                                                                var l;
                                                                (l = t[n]),
                                                                    n in e
                                                                        ? Object.defineProperty(e, n, {
                                                                              value: l,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[n] = l);
                                                            });
                                                    }
                                                    return e;
                                                })({}, g)),
                                                (t = t =
                                                    {
                                                        userId: e,
                                                        sourceAnalyticsLocations: v,
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                                                    : (function (e, n) {
                                                          var t = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var l = Object.getOwnPropertySymbols(e);
                                                              t.push.apply(t, l);
                                                          }
                                                          return t;
                                                      })(Object(t)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              n,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(t, e),
                                                          );
                                                      }),
                                                n),
                                            );
                                    },
                                },
                                n,
                            );
                        }),
        })
    );
}
