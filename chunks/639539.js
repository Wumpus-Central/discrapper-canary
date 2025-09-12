n.d(t, { J: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(164369),
    l = n(938288),
    c = n(481060),
    u = n(70956),
    d = n(388032),
    f = n(636433);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    if (null != e) {
        let t = new Date(),
            {
                hours: n,
                minutes: r,
                seconds: i,
            } = (0, s.Z)({
                start: t,
                end: e,
            });
        return {
            hours: String(n).padStart(2, "0"),
            minutes: String(r).padStart(2, "0"),
            seconds: String(i).padStart(2, "0"),
            countdownString: d.intl.formatToPlainString(d.t.U0Hhr6, { duration: new Date(0, 0, 0, n, r, i) }),
        };
    }
    return {
        hours: "",
        minutes: "",
        seconds: "",
        countdownString: "",
    };
}
let E = (e) => {
        let { digit: t } = e,
            n = (0, c.Yzy)(t, {
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
        return (0, r.jsx)("div", {
            className: f.animatedDigit,
            children: n((e, t) =>
                (0, r.jsx)(l.animated.div, {
                    style: m(p({}, e), {
                        position: "absolute",
                        width: "100%",
                        textAlign: "center",
                    }),
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-sm/bold",
                        children: t,
                    }),
                }),
            ),
        });
    },
    b = () => {
        let [e, t] = i.useState(!1);
        i.useEffect(() => {
            let e;
            function n() {
                let r = Date.now();
                e = setTimeout(
                    () => {
                        t((e) => !e), n();
                    },
                    Math.max(100, (Math.floor(r / u.Z.Millis.HALF_SECOND) + 1) * u.Z.Millis.HALF_SECOND - r),
                );
            }
            return (
                n(),
                () => {
                    clearTimeout(e);
                }
            );
        }, []);
        let n = (0, c.q_F)({
            opacity: e ? 0.5 : 1,
            config: { duration: 100 },
        });
        return (0, r.jsxs)(l.animated.div, {
            style: n,
            className: f.colonContainer,
            children: [(0, r.jsx)("div", { className: f.tinyDot }), (0, r.jsx)("div", { className: f.tinyDot })],
        });
    },
    y = (e) => {
        let { digits: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: f.digitContainer,
                    children: (0, r.jsx)(E, { digit: t[0] }),
                }),
                (0, r.jsx)("div", {
                    className: f.digitContainer,
                    children: (0, r.jsx)(E, { digit: t[1] }),
                }),
            ],
        });
    },
    O = (e) => {
        let { countdown: t } = e;
        return (0, r.jsxs)("div", {
            className: f.digitsContainer,
            children: [
                (0, r.jsx)(y, { digits: t.hours }),
                (0, r.jsx)(b, {}),
                (0, r.jsx)(y, { digits: t.minutes }),
                (0, r.jsx)(b, {}),
                (0, r.jsx)(y, { digits: t.seconds }),
            ],
        });
    };
function v(e) {
    let { textVariant: t, className: n, catalogUpdateTime: a, isScrolled: s } = e,
        [l, u] = i.useState(() => g(a));
    return (
        i.useEffect(() => {
            let e = setInterval(() => {
                u(() => g(a));
            }, 1000);
            return () => clearInterval(e);
        }, [a]),
        (0, r.jsxs)("div", {
            className: o()(n, f.countdownContainer, { [f.isScrolled]: s }),
            "aria-label": l.countdownString,
            children: [
                (0, r.jsxs)("div", {
                    className: f.iconContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: f.clockIconWrapper,
                            children: (0, r.jsx)(c.T39, {
                                size: "custom",
                                height: 16,
                                width: 16,
                                color: "currentColor",
                                colorClass: f.clockIcon,
                            }),
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: null != t ? t : "text-sm/medium",
                            color: "header-primary",
                            children: d.intl.string(d.t.VZsY3t),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: f.digitsContainer,
                    children: (0, r.jsx)(O, { countdown: l }),
                }),
            ],
        })
    );
}
