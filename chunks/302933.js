r.d(t, { J: () => g });
var n = r(951288),
    l = r(647438),
    a = r(120356),
    i = r.n(a),
    o = r(202841),
    s = r(873546),
    c = r(435935),
    u = r(481060),
    d = r(168020),
    p = r(779485);
let g = l.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: r, isFullScreen: l } = e,
        a = (0, u.q_F)({
            transform: "translateX(-50%) ".concat(r ? "translateY(-75%)" : "translateY(0%)"),
            opacity: +!!r,
            config: {
                tension: 120,
                friction: 12,
            },
        });
    return (0, n.jsxs)(o.animated.div, {
        className: i()([p.countDownWrapper, l && p.fullScreenWrapper, s.tq && p.mobileWrapper]),
        role: "status",
        style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
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
            a,
            null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: "url(".concat(t.bannerUrl, ")"),
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                },
        ),
        children: [
            (0, n.jsxs)(c.k, {
                direction: c.k.Direction.VERTICAL,
                children: [
                    (0, n.jsx)(u.Text, {
                        variant: "text-md/medium",
                        className: p.countdownLabel,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, n.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: p.countdownBody,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, n.jsx)(d.R, { endDate: t.endTime }),
        ],
    });
});
