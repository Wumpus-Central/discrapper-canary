n.d(t, {
    Z: () => m,
    r: () => u
});
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(518950),
    a = n(998502),
    l = n(916723),
    o = n(388032),
    c = n(538631);
let d = a.ZP.getEnableHardwareAcceleration() ? r.Xo$ : r.qEK,
    u = (e) => {
        var t, n;
        let { user: a, avatarSize: c = r.EFr.SIZE_48 } = e,
            {
                avatarSrc: u,
                avatarDecorationSrc: m,
                eventHandlers: p
            } = (0, s.Z)({
                userId: null == a ? void 0 : a.id,
                size: c
            });
        return (0, i.jsx)(
            'div',
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            ((i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i));
                        }));
                }
                return e;
            })({}, p)),
            (n = n =
                {
                    children: (0, i.jsx)(d, {
                        src: u,
                        avatarDecoration: m,
                        size: c,
                        'aria-label': o.intl.formatToPlainString(l.default.kFj4h4, { name: a.username })
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    },
    m = (e) => {
        let { currentUser: t, otherUser: n, children: r } = e;
        return (0, i.jsx)('div', {
            className: c.avatarPairContainer,
            children: (0, i.jsxs)('div', {
                className: c.avatarPair,
                children: [(0, i.jsx)(u, { user: t }), r, (0, i.jsx)(u, { user: n })]
            })
        });
    };
