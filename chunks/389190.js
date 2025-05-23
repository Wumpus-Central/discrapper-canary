t.d(n, { Z: () => h });
var l = t(255367),
    r = t(73800),
    i = t(481060),
    o = t(81897),
    s = t(906732),
    c = t(785717),
    u = t(806729),
    a = t(857302),
    d = t(892001),
    f = t(252417),
    p = t(388032),
    g = t(596938);
function h(e) {
    let { user: n, guildId: t, channelId: h } = e,
        { mutualFriends: v } = (0, u.Z)(n),
        { analyticsLocations: j } = (0, s.ZP)(),
        { context: m, trackUserProfileAction: b } = (0, c.KZ)(),
        x = (0, o.Z)();
    r.useEffect(() => {
        (0, a.Z)(n.id, x);
    }, [n.id, x]);
    let Z = (e) => {
        var n, t;
        (0, d.openUserProfileModal)(
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        l.forEach(function (n) {
                            var l;
                            (l = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = l);
                        });
                }
                return e;
            })({}, m)),
            (t = t =
                {
                    userId: e,
                    sourceAnalyticsLocations: j
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, l);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n)
        );
    };
    return (0, l.jsx)(i.zJl, {
        className: g.listScroller,
        fade: !0,
        children:
            null == v
                ? (0, l.jsx)('div', {
                      className: g.empty,
                      children: (0, l.jsx)(i.$jN, {})
                  })
                : 0 === v.length
                  ? (0, l.jsxs)('div', {
                        className: g.empty,
                        children: [
                            (0, l.jsx)('div', { className: g.emptyIconFriends }),
                            (0, l.jsx)('div', {
                                className: g.emptyText,
                                children: p.intl.string(p.t['/5p4g4'])
                            })
                        ]
                    })
                  : v.map((e) => {
                        let { key: n, user: r, status: i } = e;
                        return (0, l.jsx)(
                            f.Z,
                            {
                                user: r,
                                status: i,
                                guildId: t,
                                channelId: h,
                                onSelect: () => {
                                    b({ action: 'PRESS_MUTUAL_FRIEND' }), Z(r.id);
                                }
                            },
                            n
                        );
                    })
    });
}
