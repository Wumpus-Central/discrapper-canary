n.d(t, { Z: () => y });
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
    p = n(483517),
    h = n(502762),
    f = n(171368),
    m = n(389190),
    g = n(428927),
    b = n(638785),
    _ = n(388032),
    C = n(490312);
function y(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(),
        { context: y } = (0, c.KZ)(),
        x = (0, i.ZP)(),
        v = (0, l.Z)(),
        { mutualFriendsCount: j, mutualFriends: O, mutualGuilds: E } = (0, u.Z)(t),
        N = !t.bot && null != j && j > 0,
        I = null != E && E.length > 0;
    return N || I
        ? (0, r.jsxs)(h.Z.Overlay, {
              className: C.overlay,
              children: [
                  I &&
                      (0, r.jsx)(b.Z, {
                          section: 'MUTUAL_GUILDS',
                          header: _.NW.string(_.t['4lTDZm']),
                          listClassName: C.list,
                          items: E.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, r.jsx)(
                                  g.D,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: i,
                                      theme: x,
                                      onSelect: () => (0, s.X)(n.id)
                                  },
                                  n.id
                              );
                          })
                      }),
                  I && N && (0, r.jsx)(p.Z, { className: C.divider }),
                  N &&
                      (0, r.jsx)(b.Z, {
                          section: 'MUTUAL_FRIENDS',
                          header: _.NW.string(_.t['0mTJ3t']),
                          listClassName: C.list,
                          onExpand: () => (0, d.Z)(t.id, v),
                          items:
                              null == O
                                  ? Array.from({ length: j }).map((e, t) =>
                                        (0, r.jsxs)(
                                            'div',
                                            {
                                                className: C.loadingMutualFriend,
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
                                                    (0, f.openUserProfileModal)(
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
                                                        })({}, y)),
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
