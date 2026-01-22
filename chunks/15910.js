n.d(t, {
    j: () => A,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(444058),
    o = n(108531),
    c = n(397927),
    u = n(927813),
    d = n(985018),
    f = n(626228);

function p(e) {
    if (null != e) {
        let t = new Date(),
            {
                hours: n,
                minutes: l,
                seconds: r,
            } = (0, s.A)({
                start: t,
                end: e,
            });
        return {
            hours: String(n).padStart(2, "0"),
            minutes: String(l).padStart(2, "0"),
            seconds: String(r).padStart(2, "0"),
            countdownString: d.intl.formatToPlainString(d.t.U0Hhr7, {
                duration: new Date(0, 0, 0, n, l, r),
            }),
        };
    }
    return {
        hours: "",
        minutes: "",
        seconds: "",
        countdownString: "",
    };
}
let b = (e) => {
        let { digit: t } = e,
            n = (0, c.pnh)(t, {
                from: {
                    opacity: 0,
                    translateY: "-100%",
                },
                enter: {
                    opacity: 1,
                    translateY: "0%",
                },
                leave: {
                    opacity: 0,
                    translateY: "100%",
                },
                config: {
                    tension: 210,
                    friction: 20,
                    duration: 200,
                },
            });
        return (0, l.jsx)("div", {
            className: f.z$,
            children: n((e, t) => {
                var n, r;
                return (0, l.jsx)(o.animated.div, {
                    style:
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (r = r =
                            {
                                position: "absolute",
                                width: "100%",
                                textAlign: "center",
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n),
                    children: (0, l.jsx)(c.Text, {
                        variant: "text-sm/bold",
                        children: t,
                    }),
                });
            }),
        });
    },
    g = () => {
        let [e, t] = r.useState(!1);
        r.useEffect(() => {
            let e;
            return (
                !(function n() {
                    let l = Date.now();
                    e = setTimeout(
                        () => {
                            t((e) => !e), n();
                        },
                        Math.max(100, (Math.floor(l / u.A.Millis.HALF_SECOND) + 1) * u.A.Millis.HALF_SECOND - l),
                    );
                })(),
                () => {
                    clearTimeout(e);
                }
            );
        }, []);
        let n = (0, c.zhh)({
            opacity: e ? 0.5 : 1,
            config: {
                duration: 100,
            },
        });
        return (0, l.jsxs)(o.animated.div, {
            style: n,
            className: f.Z5,
            children: [
                (0, l.jsx)("div", {
                    className: f.Cj,
                }),
                (0, l.jsx)("div", {
                    className: f.Cj,
                }),
            ],
        });
    },
    m = (e) => {
        let { digits: t } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: f.JA,
                    children: (0, l.jsx)(b, {
                        digit: t[0],
                    }),
                }),
                (0, l.jsx)("div", {
                    className: f.JA,
                    children: (0, l.jsx)(b, {
                        digit: t[1],
                    }),
                }),
            ],
        });
    },
    h = (e) => {
        let { countdown: t } = e;
        return (0, l.jsxs)("div", {
            className: f.eh,
            children: [
                (0, l.jsx)(m, {
                    digits: t.hours,
                }),
                (0, l.jsx)(g, {}),
                (0, l.jsx)(m, {
                    digits: t.minutes,
                }),
                (0, l.jsx)(g, {}),
                (0, l.jsx)(m, {
                    digits: t.seconds,
                }),
            ],
        });
    };

function A(e) {
    let { textVariant: t, className: n, catalogUpdateTime: i, isScrolled: s } = e,
        [o, u] = r.useState(() => p(i));
    return (
        r.useEffect(() => {
            let e = setInterval(() => {
                u(() => p(i));
            }, 1e3);
            return () => clearInterval(e);
        }, [i]),
        (0, l.jsxs)("div", {
            className: a()(n, f.Pc, {
                [f.NW]: s,
            }),
            "aria-label": o.countdownString,
            children: [
                (0, l.jsxs)("div", {
                    className: f.zc,
                    children: [
                        (0, l.jsx)("div", {
                            className: f.PG,
                            children: (0, l.jsx)(c.O4, {
                                size: "custom",
                                height: 16,
                                width: 16,
                                color: "currentColor",
                                colorClass: f.y,
                            }),
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: null != t ? t : "text-sm/medium",
                            color: "text-strong",
                            children: d.intl.string(d.t.VZsY3r),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: f.eh,
                    children: (0, l.jsx)(h, {
                        countdown: o,
                    }),
                }),
            ],
        })
    );
}
