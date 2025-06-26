n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(81897),
    l = n(906732),
    o = n(566898),
    a = n(769654),
    s = n(785717),
    c = n(806729),
    u = n(857302),
    d = n(892001),
    p = n(483517),
    h = n(252417),
    f = n(821179),
    m = n(502762),
    g = n(686625),
    b = n(388032),
    _ = n(954767);
function y(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: y } = (0, l.ZP)(),
        { context: C } = (0, s.KZ)(),
        x = (0, i.Z)(),
        { mutualFriendsCount: v, mutualFriends: j, mutualGuilds: O } = (0, c.Z)(t),
        E = !t.bot && null != v && v > 0,
        I = null != O && O.length > 0;
    return E || I
        ? (0, r.jsxs)(m.Z.Overlay, {
              className: _.overlay,
              children: [
                  I &&
                      (0, r.jsx)(g.Z, {
                          section: 'MUTUAL_GUILDS',
                          header: b.intl.string(b.t['4lTDZm']),
                          listClassName: _.list,
                          items: O.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, r.jsx)(
                                  f.Z,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: i,
                                      onSelect: () => (0, a.X)(n.id)
                                  },
                                  n.id
                              );
                          })
                      }),
                  I && E && (0, r.jsx)(p.Z, { className: _.divider }),
                  E &&
                      (0, r.jsx)(g.Z, {
                          section: 'MUTUAL_FRIENDS',
                          header: b.intl.string(b.t['0mTJ3t']),
                          listClassName: _.list,
                          onExpand: () => (0, u.Z)(t.id, x),
                          items:
                              null == j
                                  ? Array.from({ length: v }).map((e, t) =>
                                        (0, r.jsxs)(
                                            'div',
                                            {
                                                className: _.loadingMutualFriend,
                                                children: [
                                                    (0, r.jsx)(o.ZT, {
                                                        width: 40,
                                                        opacity: 0.08
                                                    }),
                                                    (0, r.jsx)(o.ZT, {
                                                        width: 135,
                                                        opacity: 0.08
                                                    })
                                                ]
                                            },
                                            t
                                        )
                                    )
                                  : j.map((e) => {
                                        let { key: t, user: i, status: l } = e;
                                        return (0, r.jsx)(
                                            h.Z,
                                            {
                                                user: i,
                                                status: l,
                                                channelId: n,
                                                onSelect: () => {
                                                    var e, t;
                                                    (0, d.openUserProfileModal)(
                                                        ((e = (function (e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var n = null != arguments[t] ? arguments[t] : {},
                                                                    r = Object.keys(n);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                        })
                                                                    )),
                                                                    r.forEach(function (t) {
                                                                        var r;
                                                                        (r = n[t]),
                                                                            t in e
                                                                                ? Object.defineProperty(e, t, {
                                                                                      value: r,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[t] = r);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, C)),
                                                        (t = t =
                                                            {
                                                                userId: i.id,
                                                                sourceAnalyticsLocations: y
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(t)).forEach(function (n) {
                                                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                                              }),
                                                        e)
                                                    );
                                                }
                                            },
                                            t
                                        );
                                    })
                      })
              ]
          })
        : null;
}
