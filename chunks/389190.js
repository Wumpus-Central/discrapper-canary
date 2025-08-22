t.d(n, { Z: () => h });
var r = t(951288),
    l = t(647438),
    o = t(481060),
    i = t(81897),
    c = t(906732),
    s = t(785717),
    a = t(806729),
    d = t(857302),
    u = t(892001),
    f = t(252417),
    m = t(388032),
    p = t(878449);
function h(e) {
    let { user: n, guildId: t, channelId: h, onClose: x } = e,
        { mutualFriends: b } = (0, a.Z)(n),
        { analyticsLocations: j } = (0, c.ZP)(),
        { context: g, trackUserProfileAction: v } = (0, s.KZ)(),
        y = (0, i.Z)();
    return (
        l.useEffect(() => {
            (0, d.Z)(n.id, y);
        }, [n.id, y]),
        (0, r.jsx)(o.zJl, {
            className: p.listScroller,
            fade: !0,
            children:
                null == b
                    ? (0, r.jsx)("div", {
                          className: p.empty,
                          children: (0, r.jsx)(o.$jN, {}),
                      })
                    : 0 === b.length
                      ? (0, r.jsxs)("div", {
                            className: p.empty,
                            children: [
                                (0, r.jsx)("div", { className: p.emptyIconFriends }),
                                (0, r.jsx)("div", {
                                    className: p.emptyText,
                                    children: m.intl.string(m.t["/5p4g4"]),
                                }),
                            ],
                        })
                      : b.map((e) => {
                            let { key: n, user: l, status: o } = e;
                            return (0, r.jsx)(
                                f.Z,
                                {
                                    user: l,
                                    status: o,
                                    guildId: t,
                                    channelId: h,
                                    onSelect: () => {
                                        var e, n, t;
                                        null == x || x(),
                                            v({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = l.id),
                                            (0, u.openUserProfileModal)(
                                                ((n = (function (e) {
                                                    for (var n = 1; n < arguments.length; n++) {
                                                        var t = null != arguments[n] ? arguments[n] : {},
                                                            r = Object.keys(t);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            r.forEach(function (n) {
                                                                var r;
                                                                (r = t[n]),
                                                                    n in e
                                                                        ? Object.defineProperty(e, n, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[n] = r);
                                                            });
                                                    }
                                                    return e;
                                                })({}, g)),
                                                (t = t =
                                                    {
                                                        userId: e,
                                                        sourceAnalyticsLocations: j,
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                                                    : (function (e, n) {
                                                          var t = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              t.push.apply(t, r);
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
