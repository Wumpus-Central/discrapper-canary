n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(410030),
    l = n(81897),
    o = n(906732),
    a = n(566898),
    s = n(769654),
    c = n(785717),
    u = n(806729),
    d = n(857302),
    p = n(892001),
    h = n(483517),
    f = n(502762),
    m = n(389190),
    g = n(428927),
    b = n(787439),
    _ = n(388032),
    y = n(396285);
function x(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(),
        { context: x } = (0, c.KZ)(),
        C = (0, i.ZP)(),
        v = (0, l.Z)(),
        { mutualFriendsCount: j, mutualFriends: O, mutualGuilds: E } = (0, u.Z)(t),
        I = !t.bot && null != j && j > 0,
        P = null != E && E.length > 0;
    return I || P
        ? (0, r.jsxs)(f.Z.Overlay, {
              className: y.overlay,
              children: [
                  P &&
                      (0, r.jsx)(b.Z, {
                          section: 'MUTUAL_GUILDS',
                          header: _.intl.string(_.t['4lTDZm']),
                          listClassName: y.list,
                          items: E.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, r.jsx)(
                                  g.D,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: i,
                                      theme: C,
                                      onSelect: () => (0, s.X)(n.id)
                                  },
                                  n.id
                              );
                          })
                      }),
                  P && I && (0, r.jsx)(h.Z, { className: y.divider }),
                  I &&
                      (0, r.jsx)(b.Z, {
                          section: 'MUTUAL_FRIENDS',
                          header: _.intl.string(_.t['0mTJ3t']),
                          listClassName: y.list,
                          onExpand: () => (0, d.Z)(t.id, v),
                          items:
                              null == O
                                  ? Array.from({ length: j }).map((e, t) =>
                                        (0, r.jsxs)(
                                            'div',
                                            {
                                                className: y.loadingMutualFriend,
                                                children: [
                                                    (0, r.jsx)(a.ZT, {
                                                        width: 40,
                                                        opacity: 0.08
                                                    }),
                                                    (0, r.jsx)(a.ZT, {
                                                        width: 135,
                                                        opacity: 0.08
                                                    })
                                                ]
                                            },
                                            t
                                        )
                                    )
                                  : O.map((e) => {
                                        let { key: t, user: i, status: l } = e;
                                        return (0, r.jsx)(
                                            m.T,
                                            {
                                                user: i,
                                                status: l,
                                                onSelect: () => {
                                                    var e, t;
                                                    (0, p.openUserProfileModal)(
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
                                                        })({}, x)),
                                                        (t = t =
                                                            {
                                                                userId: i.id,
                                                                sourceAnalyticsLocations: n
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
