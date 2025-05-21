n.d(t, { Z: () => _ });
var o = n(255367),
    r = n(73800),
    c = n(481060),
    i = n(81897),
    a = n(906732),
    l = n(566898),
    s = n(785717),
    d = n(806729),
    u = n(857302),
    f = n(892001),
    p = n(252417),
    m = n(264481),
    b = n(274151);
function _(e) {
    let { user: t, guildId: n, channelId: _, onClose: y } = e,
        { analyticsLocations: h } = (0, a.ZP)(),
        { context: g, trackUserProfileAction: x } = (0, s.KZ)(),
        { mutualFriends: j, mutualFriendsCount: I } = (0, d.Z)(t),
        O = (0, i.Z)();
    return (
        r.useEffect(() => {
            (0, u.Z)(t.id, O);
        }, [t.id, O]),
        (0, o.jsx)(c.Ttm, {
            className: b.scroller,
            fade: !0,
            children:
                null == j
                    ? Array.from({ length: null != I ? I : 10 }).map((e, t) =>
                          (0, o.jsxs)(
                              'div',
                              {
                                  className: b.loadingItem,
                                  children: [
                                      (0, o.jsx)(l.ZT, {
                                          width: 40,
                                          opacity: 0.08
                                      }),
                                      (0, o.jsx)(l.ZT, {
                                          width: 135,
                                          opacity: 0.08
                                      })
                                  ]
                              },
                              t
                          )
                      )
                    : 0 === j.length
                      ? (0, o.jsx)(m.s_, {})
                      : j.map((e) => {
                            let { key: t, user: r, status: c } = e;
                            return (0, o.jsx)(
                                p.Z,
                                {
                                    user: r,
                                    status: c,
                                    guildId: n,
                                    channelId: _,
                                    onSelect: () => {
                                        var e, t;
                                        y(),
                                            x({ action: 'PRESS_MUTUAL_FRIEND' }),
                                            (0, f.openUserProfileModal)(
                                                ((e = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            o = Object.keys(n);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (o = o.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            o.forEach(function (t) {
                                                                var o;
                                                                (o = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: o,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = o);
                                                            });
                                                    }
                                                    return e;
                                                })({}, g)),
                                                (t = t =
                                                    {
                                                        userId: r.id,
                                                        sourceAnalyticsLocations: h
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var o = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, o);
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
    );
}
