n.d(t, { Z: () => j });
var l = n(255367),
    r = n(73800),
    i = n(481060),
    s = n(81897),
    o = n(906732),
    c = n(785717),
    a = n(806729),
    d = n(857302),
    u = n(892001),
    f = n(252417),
    p = n(388032),
    h = n(301150);
function j(e) {
    let { user: t, guildId: n, channelId: j, onClose: g } = e,
        { mutualFriends: v } = (0, a.Z)(t),
        { analyticsLocations: m } = (0, o.ZP)(),
        { context: x, trackUserProfileAction: b } = (0, c.KZ)(),
        O = (0, s.Z)();
    r.useEffect(() => {
        (0, d.Z)(t.id, O);
    }, [t.id, O]);
    let Z = (e) => {
        var t, n;
        g(),
            (0, u.openUserProfileModal)(
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, x)),
                (n = n =
                    {
                        userId: e,
                        sourceAnalyticsLocations: m
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
    };
    return (0, l.jsx)(i.zJl, {
        className: h.listScroller,
        fade: !0,
        children:
            null == v
                ? (0, l.jsx)('div', {
                      className: h.empty,
                      children: (0, l.jsx)(i.$jN, {})
                  })
                : 0 === v.length
                  ? (0, l.jsxs)('div', {
                        className: h.empty,
                        children: [
                            (0, l.jsx)('div', { className: h.emptyIconFriends }),
                            (0, l.jsx)('div', {
                                className: h.emptyText,
                                children: p.intl.string(p.t['/5p4g4'])
                            })
                        ]
                    })
                  : v.map((e) => {
                        let { key: t, user: r, status: i } = e;
                        return (0, l.jsx)(
                            f.Z,
                            {
                                user: r,
                                status: i,
                                guildId: n,
                                channelId: j,
                                onSelect: () => {
                                    b({ action: 'PRESS_MUTUAL_FRIEND' }), Z(r.id);
                                }
                            },
                            t
                        );
                    })
    });
}
