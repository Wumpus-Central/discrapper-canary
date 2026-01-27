n.d(t, {
    A: () => _,
    H: () => u,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(854627),
    s = n(837921),
    a = n(842130),
    o = n(985018),
    c = n(241938);
let d = s.Ay.getEnableHardwareAcceleration() ? i.JsQ : i.euF,
    u = (e) => {
        var t, n;
        let { user: s, avatarSize: c = i._3J.SIZE_48 } = e,
            {
                avatarSrc: u,
                avatarDecorationSrc: _,
                eventHandlers: p,
            } = (0, l.A)({
                userId: null == s ? void 0 : s.id,
                size: c,
            });
        return (0, r.jsx)(
            "div",
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, p)),
            (n = n =
                {
                    children: (0, r.jsx)(d, {
                        src: u,
                        avatarDecoration: _,
                        size: c,
                        "aria-label": o.intl.formatToPlainString(a.default.kFj4h1, {
                            name: s.username,
                        }),
                    }),
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
            t),
        );
    },
    _ = (e) => {
        let { currentUser: t, otherUser: n, children: i } = e;
        return (0, r.jsx)("div", {
            className: c.b,
            children: (0, r.jsxs)("div", {
                className: c.M,
                children: [
                    (0, r.jsx)(u, {
                        user: t,
                    }),
                    i,
                    (0, r.jsx)(u, {
                        user: n,
                    }),
                ],
            }),
        });
    };
