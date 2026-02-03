n.d(t, {
    S: () => f,
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(92674),
    o = n(607399),
    c = n(946015),
    u = n(397927),
    d = n(854818),
    g = n(410885);
let f = l.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, u.zhh)({
            transform: "translateX(-50%) ".concat(n ? "translateY(-75%)" : "translateY(0%)"),
            opacity: +!!n,
            config: {
                tension: 120,
                friction: 12,
            },
        });
    return (0, r.jsxs)(i.animated.div, {
        className: a()([g.lP, o.Fr && g.yJ]),
        role: "status",
        style: (function (e) {
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
        })(
            {},
            l,
            null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: "url(".concat(t.bannerUrl, ")"),
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                },
        ),
        children: [
            (0, r.jsxs)(c.s, {
                direction: c.s.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: "text-md/medium",
                        className: g.Wx,
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
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: g.w9,
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
            (0, r.jsx)(d.e, {
                endDate: t.endTime,
            }),
        ],
    });
});
