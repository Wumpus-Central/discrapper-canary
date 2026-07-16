n.d(e, { A: () => p, e: () => N });
var r = n(627968),
    l = n(64700),
    s = n(503698),
    o = n.n(s),
    c = n(317097),
    i = n(43990),
    a = n(406810),
    u = n(834730),
    d = n(52133),
    x = n(417098),
    m = n(396583),
    h = n(421108),
    v = n(818348),
    j = n(375708),
    f = n(569901);
function p(t) {
    let { className: e, color: n = "default", sticky: l = !1, children: s } = t,
        a = l ? f.qf : void 0;
    function u() {
        let {
            className: t,
            noticeColor: e,
            customStyle: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsx)(x.$T, { className: t, color: e, style: n, children: s });
    }
    if ("nitro-pink" === n)
        return u({
            className: o()(f.cI, f.p3, a, e),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, c.qt)(n)) {
        let t = (0, c.OK)((0, c.LX)(n)) > 0.5 ? v.NJ.DARK : v.NJ.LIGHT;
        return (0, r.jsx)(i.N, {
            theme: t,
            children: (t) =>
                u({
                    className: o()(t, f.cI, a, e),
                    customStyle: {
                        "--custom-notice-background": n,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": n,
                    },
                }),
        });
    }
    return (0, r.jsx)(i.N, {
        theme: v.NJ.DARK,
        children: (t) => u({ className: o()(t, f.cI, a, e), noticeColor: x.Hv.BRAND }),
    });
}
function N(t) {
    let { Icon: e, children: n, endDatetime: s, ...o } = t,
        [c, i] = l.useState(() => (0, h.Z)(s));
    function a() {
        return (0, r.jsxs)("div", {
            className: f.lt,
            children: [null != e && (0, r.jsx)(e, { size: "xs", color: "currentColor" }), n],
        });
    }
    return ((0, m.A)(() => {
        let t = (0, h.Z)(s);
        i((e) => (null == t ? null : null != e && (0, d.A)(e, t) ? e : t));
    }, 1e3),
    null != c)
        ? c.days > 0
            ? (0, r.jsxs)(p, { ...o, children: [a(), (0, r.jsx)(g, { days: c.days })] })
            : (0, r.jsxs)(p, { ...o, children: [a(), (0, r.jsx)(k, { timeLeft: c })] })
        : null != s
          ? null
          : (0, r.jsx)(p, { ...o, children: a() });
}
function g(t) {
    let { days: e } = t;
    return (0, r.jsxs)("div", {
        className: f.S5,
        children: [
            (0, r.jsx)(a.O, { size: "sm", color: "currentColor" }),
            (0, r.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: j.intl.formatToPlainString(j.t.BXpdIg, { days: e }),
            }),
        ],
    });
}
function k(t) {
    let {
        timeLeft: { days: e, hours: n, minutes: l, seconds: s },
    } = t;
    function c(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = String(t).padStart(2, "0").split("");
        return (0, r.jsx)(r.Fragment, {
            children: n.map((t, n) =>
                (0, r.jsx)(
                    u.E,
                    {
                        className: o()(f.g2, { [f.$2]: e }),
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: t,
                    },
                    n,
                ),
            ),
        });
    }
    function i() {
        return (0, r.jsx)(u.E, { className: f.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, r.jsxs)("div", {
        className: f.kz,
        children: [e > 0 && c(e), e > 0 && i(), c(n), i(), c(l), i(), c(s, !0)],
    });
}
