l.d(t, {
    S: () => b,
});
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(108531),
    o = l(607399),
    c = l(946015),
    u = l(397927),
    d = l(854818),
    f = l(410885);
let b = r.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: l } = e,
        r = (0, u.zhh)({
            transform: "translateX(-50%) ".concat(l ? "translateY(-75%)" : "translateY(0%)"),
            opacity: +!!l,
            config: {
                tension: 120,
                friction: 12,
            },
        });
    return (0, n.jsxs)(i.animated.div, {
        className: a()([f.lP, o.Fr && f.yJ]),
        role: "status",
        style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(l);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(l).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = l[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {},
            r,
            null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: "url(".concat(t.bannerUrl, ")"),
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                },
        ),
        children: [
            (0, n.jsxs)(c.s, {
                direction: c.s.Direction.VERTICAL,
                children: [
                    (0, n.jsx)(u.Text, {
                        variant: "text-md/medium",
                        className: f.Wx,
                        style:
                            null != t.textColor && "" !== t.textColor
                                ? {
                                      color: t.textColor,
                                  }
                                : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, n.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: f.w9,
                            style:
                                null != t.textColor && "" !== t.textColor
                                    ? {
                                          color: t.textColor,
                                      }
                                    : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, n.jsx)(d.e, {
                endDate: t.endTime,
            }),
        ],
    });
});
