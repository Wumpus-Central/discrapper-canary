n.d(t, { Z: () => _ });
var r = n(255367),
    o = n(73800),
    c = n(481060),
    i = n(81897),
    l = n(906732),
    a = n(566898),
    s = n(785717),
    d = n(806729),
    u = n(857302),
    f = n(892001),
    p = n(252417),
    m = n(264481),
    b = n(274151);
function _(e) {
    let { user: t, guildId: n, channelId: _, onClose: y } = e,
        { analyticsLocations: x } = (0, l.ZP)(),
        { context: h, trackUserProfileAction: j } = (0, s.KZ)(),
        { mutualFriends: g, mutualFriendsCount: O } = (0, d.Z)(t),
        I = (0, i.Z)();
    return (
        o.useEffect(() => {
            (0, u.Z)(t.id, I);
        }, [t.id, I]),
        (0, r.jsx)(c.Ttm, {
            className: b.scroller,
            fade: !0,
            children:
                null == g
                    ? Array.from({ length: null != O ? O : 10 }).map((e, t) =>
                          (0, r.jsxs)(
                              'div',
                              {
                                  className: b.loadingItem,
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
                    : 0 === g.length
                      ? (0, r.jsx)(m.s_, {})
                      : g.map((e) => {
                            let { key: t, user: o, status: c } = e;
                            return (0, r.jsx)(
                                p.Z,
                                {
                                    user: o,
                                    status: c,
                                    guildId: n,
                                    channelId: _,
                                    onSelect: () => {
                                        var e, t;
                                        null == y || y(),
                                            j({ action: 'PRESS_MUTUAL_FRIEND' }),
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
                                                })({}, h)),
                                                (t = t =
                                                    {
                                                        userId: o.id,
                                                        sourceAnalyticsLocations: x
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
    );
}
