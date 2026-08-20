n.d(e, { A: () => k, e: () => N });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    c = n.n(s),
    o = n(317097),
    i = n(43990),
    a = n(406810),
    u = n(834730),
    d = n(52133),
    m = n(417098),
    x = n(396583),
    h = n(421108),
    v = n(818348),
    j = n(375708),
    f = n(395822);
function k(t) {
    let { className: e, color: n = "default", sticky: l = !1, children: s } = t,
        a = l ? f.qf : void 0;
    function u() {
        let {
            className: t,
            noticeColor: e,
            customStyle: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsx)(m.$T, { className: t, color: e, style: n, children: s });
    }
    if ("nitro-pink" === n)
        return u({
            className: c()(f.cI, f.p3, a, e),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, o.qt)(n)) {
        let t = (0, o.OK)((0, o.LX)(n)) > 0.5 ? v.NJ.DARK : v.NJ.LIGHT;
        return (0, r.jsx)(i.N, {
            theme: t,
            children: (t) =>
                u({
                    className: c()(t, f.cI, a, e),
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
        children: (t) => u({ className: c()(t, f.cI, a, e), noticeColor: m.Hv.BRAND }),
    });
}
function N(t) {
    let { Icon: e, children: n, endDatetime: s, ...c } = t,
        [o, i] = l.useState(() => (0, h.ZH)(s));
    function a() {
        return (0, r.jsxs)("div", {
            className: f.lt,
            children: [null != e && (0, r.jsx)(e, { size: "xs", color: "currentColor", className: f.Kk }), n],
        });
    }
    return ((0, x.A)(() => {
        let t = (0, h.ZH)(s);
        i((e) => (null == t ? null : null != e && (0, d.A)(e, t) ? e : t));
    }, 1e3),
    null != o)
        ? o.days > 0
            ? (0, r.jsxs)(k, { ...c, children: [a(), (0, r.jsx)(p, { days: o.days })] })
            : (0, r.jsxs)(k, { ...c, children: [a(), (0, r.jsx)(g, { timeLeft: o })] })
        : null != s
          ? null
          : (0, r.jsx)(k, { ...c, children: a() });
}
function p(t) {
    let { days: e } = t;
    return (0, r.jsxs)("div", {
        className: f.S5,
        children: [
            (0, r.jsx)(a.ClockIcon, { size: "sm", color: "currentColor" }),
            (0, r.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: j.intl.formatToPlainString(j.t.BXpdIg, { days: e }),
            }),
        ],
    });
}
function g(t) {
    let {
        timeLeft: { days: e, hours: n, minutes: l, seconds: s },
    } = t;
    function o(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = String(t).padStart(2, "0").split("");
        return (0, r.jsx)(r.Fragment, {
            children: n.map((t, n) =>
                (0, r.jsx)(
                    u.E,
                    {
                        className: c()(f.g2, { [f.$2]: e }),
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
        children: [e > 0 && o(e), e > 0 && i(), o(n), i(), o(l), i(), o(s, !0)],
    });
}
