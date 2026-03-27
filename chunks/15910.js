n.d(t, { j: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(444058),
    o = n(880013),
    c = n(397927),
    d = n(927813),
    u = n(985018),
    h = n(487382);
function m(e) {
    if (null != e) {
        let t = new Date(),
            { hours: n, minutes: i, seconds: l } = (0, r.A)({ start: t, end: e });
        return {
            hours: String(n).padStart(2, "0"),
            minutes: String(i).padStart(2, "0"),
            seconds: String(l).padStart(2, "0"),
            countdownString: u.intl.formatToPlainString(u.t.U0Hhr7, { duration: new Date(0, 0, 0, n, i, l) }),
        };
    }
    return { hours: "", minutes: "", seconds: "", countdownString: "" };
}
let A = (e) => {
        let { digit: t } = e,
            n = (0, c.pnh)(t, {
                from: { opacity: 0, translateY: "-100%" },
                enter: { opacity: 1, translateY: "0%" },
                leave: { opacity: 0, translateY: "100%" },
                config: { tension: 210, friction: 20, duration: 200 },
            });
        return (0, i.jsx)("div", {
            className: h.z$,
            children: n((e, t) =>
                (0, i.jsx)(o.animated.div, {
                    style: { ...e, position: "absolute", width: "100%", textAlign: "center" },
                    children: (0, i.jsx)(c.Text, { variant: "text-sm/bold", children: t }),
                }),
            ),
        });
    },
    g = () => {
        let [e, t] = l.useState(!1);
        l.useEffect(() => {
            let e;
            return (
                !(function n() {
                    let i = Date.now();
                    e = setTimeout(
                        () => {
                            t((e) => !e), n();
                        },
                        Math.max(100, (Math.floor(i / d.A.Millis.HALF_SECOND) + 1) * d.A.Millis.HALF_SECOND - i),
                    );
                })(),
                () => {
                    clearTimeout(e);
                }
            );
        }, []);
        let n = (0, c.zhh)({ opacity: e ? 0.5 : 1, config: { duration: 100 } });
        return (0, i.jsxs)(o.animated.div, {
            style: n,
            className: h.Z5,
            children: [(0, i.jsx)("div", { className: h.Cj }), (0, i.jsx)("div", { className: h.Cj })],
        });
    },
    p = (e) => {
        let { digits: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: h.JA, children: (0, i.jsx)(A, { digit: t[0] }) }),
                (0, i.jsx)("div", { className: h.JA, children: (0, i.jsx)(A, { digit: t[1] }) }),
            ],
        });
    },
    f = (e) => {
        let { countdown: t } = e;
        return (0, i.jsxs)("div", {
            className: h.eh,
            children: [
                (0, i.jsx)(p, { digits: t.hours }),
                (0, i.jsx)(g, {}),
                (0, i.jsx)(p, { digits: t.minutes }),
                (0, i.jsx)(g, {}),
                (0, i.jsx)(p, { digits: t.seconds }),
            ],
        });
    };
function _(e) {
    let { textVariant: t, className: n, catalogUpdateTime: s, isScrolled: r } = e,
        [o, d] = l.useState(() => m(s));
    return (
        l.useEffect(() => {
            let e = setInterval(() => {
                d(() => m(s));
            }, 1e3);
            return () => clearInterval(e);
        }, [s]),
        (0, i.jsxs)("div", {
            className: a()(n, h.Pc, { [h.NW]: r }),
            "aria-label": o.countdownString,
            children: [
                (0, i.jsxs)("div", {
                    className: h.zc,
                    children: [
                        (0, i.jsx)("div", {
                            className: h.PG,
                            children: (0, i.jsx)(c.O4, {
                                size: "custom",
                                height: 16,
                                width: 16,
                                color: "currentColor",
                                colorClass: h.y,
                            }),
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: t ?? "text-sm/medium",
                            color: "text-strong",
                            children: u.intl.string(u.t.VZsY3r),
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: h.eh, children: (0, i.jsx)(f, { countdown: o }) }),
            ],
        })
    );
}
