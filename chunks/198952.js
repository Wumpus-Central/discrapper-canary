n.d(t, {
    Z: () => u,
    r: () => d
});
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(518950),
    a = n(998502),
    l = n(388032),
    o = n(202256);
let c = a.ZP.getEnableHardwareAcceleration() ? i.Xo$ : i.qEK,
    d = (e) => {
        var t, n;
        let { user: a, avatarSize: d = i.EFr.SIZE_48 } = e,
            {
                avatarSrc: u,
                avatarDecorationSrc: m,
                eventHandlers: g
            } = (0, s.Z)({
                user: a,
                size: d
            });
        return (0, r.jsx)(
            'div',
            ((t = (function (e) {
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
            })({}, g)),
            (n = n =
                {
                    children: (0, r.jsx)(c, {
                        className: o.__invalid_avatar,
                        src: u,
                        avatarDecoration: m,
                        size: d,
                        'aria-label': l.NW.formatToPlainString(l.t.kFj4h4, { name: a.username })
                    })
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
    },
    u = (e) => {
        let { currentUser: t, otherUser: n, children: i } = e;
        return (0, r.jsx)('div', {
            className: o.avatarPairContainer,
            children: (0, r.jsxs)('div', {
                className: o.avatarPair,
                children: [(0, r.jsx)(d, { user: t }), i, (0, r.jsx)(d, { user: n })]
            })
        });
    };
