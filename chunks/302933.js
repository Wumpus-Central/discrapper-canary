n.d(t, { J: () => g });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(636606),
    o = n(873546),
    c = n(435935),
    u = n(481060),
    d = n(168020),
    f = n(535123);
let g = l.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, u.q_F)({
            transform: "translateX(-50%) ".concat(n ? "translateY(-75%)" : "translateY(0%)"),
            opacity: +!!n,
            config: {
                tension: 120,
                friction: 12,
            },
        });
    return (0, r.jsxs)(s.animated.div, {
        className: a()([f.countDownWrapper, o.tq && f.mobileWrapper]),
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
            (0, r.jsxs)(c.k, {
                direction: c.k.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: "text-md/medium",
                        className: f.countdownLabel,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: f.countdownBody,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, r.jsx)(d.R, { endDate: t.endTime }),
        ],
    });
});
