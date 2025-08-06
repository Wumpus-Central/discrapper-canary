n.d(t, { Z: () => g });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(81897),
    a = n(906732),
    c = n(785717),
    s = n(806729),
    d = n(857302),
    u = n(892001),
    f = n(252417),
    p = n(388032),
    m = n(301150);
function g(e) {
    let { user: t, guildId: n, channelId: g, onClose: b } = e,
        { mutualFriends: j } = (0, s.Z)(t),
        { analyticsLocations: h } = (0, a.ZP)(),
        { context: y, trackUserProfileAction: v } = (0, c.KZ)(),
        O = (0, i.Z)();
    l.useEffect(() => {
        (0, d.Z)(t.id, O);
    }, [t.id, O]);
    let x = (e) => {
        var t, n;
        (0, u.openUserProfileModal)(
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, y)),
            (n = n =
                {
                    userId: e,
                    sourceAnalyticsLocations: h
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    };
    return (0, r.jsx)(o.zJl, {
        className: m.listScroller,
        fade: !0,
        children:
            null == j
                ? (0, r.jsx)('div', {
                      className: m.empty,
                      children: (0, r.jsx)(o.$jN, {})
                  })
                : 0 === j.length
                  ? (0, r.jsxs)('div', {
                        className: m.empty,
                        children: [
                            (0, r.jsx)('div', { className: m.emptyIconFriends }),
                            (0, r.jsx)('div', {
                                className: m.emptyText,
                                children: p.intl.string(p.t['/5p4g4'])
                            })
                        ]
                    })
                  : j.map((e) => {
                        let { key: t, user: l, status: o } = e;
                        return (0, r.jsx)(
                            f.Z,
                            {
                                user: l,
                                status: o,
                                guildId: n,
                                channelId: g,
                                onSelect: () => {
                                    (null == b || b(), v({ action: 'PRESS_MUTUAL_FRIEND' }), x(l.id));
                                }
                            },
                            t
                        );
                    })
    });
}
