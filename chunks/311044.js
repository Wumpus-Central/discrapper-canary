t.d(n, { Z: () => _ });
var o = t(200651),
    r = t(192379),
    c = t(481060),
    i = t(81897),
    a = t(906732),
    l = t(566898),
    s = t(785717),
    d = t(806729),
    u = t(857302),
    f = t(892001),
    p = t(252417),
    m = t(388032),
    b = t(274151);
function _(e) {
    let { user: n, guildId: t, channelId: _, onClose: y } = e,
        { analyticsLocations: h } = (0, a.ZP)(),
        { context: j, trackUserProfileAction: x } = (0, s.KZ)(),
        { mutualFriends: g, mutualFriendsCount: I } = (0, d.Z)(n),
        O = (0, i.Z)();
    return (
        r.useEffect(() => {
            (0, u.Z)(n.id, O);
        }, [n.id, O]),
        (0, o.jsx)(c.Ttm, {
            className: b.scroller,
            fade: !0,
            children:
                null == g
                    ? Array.from({ length: null != I ? I : 10 }).map((e, n) =>
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
                              n
                          )
                      )
                    : 0 === g.length
                      ? (0, o.jsxs)('div', {
                            className: b.empty,
                            children: [
                                (0, o.jsx)('div', { className: b.emptyImage }),
                                (0, o.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-primary',
                                    children: m.intl.string(m.t['ru+2j4'])
                                })
                            ]
                        })
                      : g.map((e) => {
                            let { key: n, user: r, status: c } = e;
                            return (0, o.jsx)(
                                p.Z,
                                {
                                    user: r,
                                    status: c,
                                    guildId: t,
                                    channelId: _,
                                    onSelect: () => {
                                        var e, n;
                                        y(),
                                            x({ action: 'PRESS_MUTUAL_FRIEND' }),
                                            (0, f.openUserProfileModal)(
                                                ((e = (function (e) {
                                                    for (var n = 1; n < arguments.length; n++) {
                                                        var t = null != arguments[n] ? arguments[n] : {},
                                                            o = Object.keys(t);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (o = o.concat(
                                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                })
                                                            )),
                                                            o.forEach(function (n) {
                                                                var o;
                                                                (o = t[n]),
                                                                    n in e
                                                                        ? Object.defineProperty(e, n, {
                                                                              value: o,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[n] = o);
                                                            });
                                                    }
                                                    return e;
                                                })({}, j)),
                                                (n = n =
                                                    {
                                                        userId: r.id,
                                                        sourceAnalyticsLocations: h
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, n) {
                                                          var t = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var o = Object.getOwnPropertySymbols(e);
                                                              t.push.apply(t, o);
                                                          }
                                                          return t;
                                                      })(Object(n)).forEach(function (t) {
                                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                      }),
                                                e)
                                            );
                                    }
                                },
                                n
                            );
                        })
        })
    );
}
