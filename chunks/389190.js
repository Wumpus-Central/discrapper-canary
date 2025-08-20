t.d(n, { Z: () => b });
var r = t(951288),
    o = t(647438),
    l = t(481060),
    i = t(81897),
    c = t(906732),
    a = t(785717),
    s = t(806729),
    d = t(857302),
    u = t(892001),
    f = t(252417),
    m = t(388032),
    p = t(878449);
function b(e) {
    let { user: n, guildId: t, channelId: b, onClose: g } = e,
        { mutualFriends: x } = (0, s.Z)(n),
        { analyticsLocations: h } = (0, c.ZP)(),
        { context: j, trackUserProfileAction: v } = (0, a.KZ)(),
        _ = (0, i.Z)();
    return (
        o.useEffect(() => {
            (0, d.Z)(n.id, _);
        }, [n.id, _]),
        (0, r.jsx)(l.zJl, {
            className: p.listScroller,
            fade: !0,
            children:
                null == x
                    ? (0, r.jsx)("div", {
                          className: p.empty,
                          children: (0, r.jsx)(l.$jN, {}),
                      })
                    : 0 === x.length
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
                      : x.map((e) => {
                            let { key: n, user: o, status: l } = e;
                            return (0, r.jsx)(
                                f.Z,
                                {
                                    user: o,
                                    status: l,
                                    guildId: t,
                                    channelId: b,
                                    onSelect: () => {
                                        var e, n, t;
                                        null == g || g(),
                                            v({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = o.id),
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
                                                })({}, j)),
                                                (t = t =
                                                    {
                                                        userId: e,
                                                        sourceAnalyticsLocations: h,
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
