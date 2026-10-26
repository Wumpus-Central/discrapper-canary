n.d(e, { A: () => k, S: () => N });
var r = n(477900),
    s = n(582128),
    c = n(503698),
    l = n.n(c),
    o = n(317097),
    i = n(52133),
    a = n(417098),
    u = n(43990),
    d = n(406810),
    m = n(834730),
    x = n(396583),
    h = n(421108),
    j = n(818348),
    v = n(105292),
    f = n(395822);
function k(t) {
    let { className: e, color: n = "default", sticky: s = !1, children: c } = t,
        i = s ? f.qf : void 0;
    function d() {
        let {
            className: t,
            noticeColor: e,
            customStyle: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsx)(a.$T, { className: t, color: e, style: n, children: c });
    }
    if ("nitro-pink" === n)
        return d({
            className: l()(f.cI, f.p3, i, e),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, o.qt)(n)) {
        let t = (0, o.OK)((0, o.LX)(n)) > 0.5 ? j.NJ.DARK : j.NJ.LIGHT;
        return (0, r.jsx)(u.N, {
            theme: t,
            children: (t) =>
                d({
                    className: l()(t, f.cI, i, e),
                    customStyle: {
                        "--custom-notice-background": n,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": n,
                    },
                }),
        });
    }
    return (0, r.jsx)(u.N, {
        theme: j.NJ.DARK,
        children: (t) => d({ className: l()(t, f.cI, i, e), noticeColor: a.Hv.BRAND }),
    });
}
function N(t) {
    let { endDatetime: e } = t,
        [n, c] = s.useState(() => (0, h.ZH)(e));
    return ((0, x.A)(() => {
        let t = (0, h.ZH)(e);
        c((e) => (null == t ? null : null != e && (0, i.A)(e, t) ? e : t));
    }, 1e3),
    null == n)
        ? null
        : n.days > 0
          ? (0, r.jsx)(p, { days: n.days })
          : (0, r.jsx)(g, { timeLeft: n });
}
function p(t) {
    let { days: e } = t;
    return (0, r.jsxs)("div", {
        className: f.S5,
        children: [
            (0, r.jsx)(d.ClockIcon, { size: "sm", color: "currentColor" }),
            (0, r.jsx)(m.E, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: v.intl.formatToPlainString(v.t.BXpdIg, { days: e }),
            }),
        ],
    });
}
function g(t) {
    let {
        timeLeft: { days: e, hours: n, minutes: s, seconds: c },
    } = t;
    function o(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = String(t).padStart(2, "0").split("");
        return (0, r.jsx)(r.Fragment, {
            children: n.map((t, n) =>
                (0, r.jsx)(
                    m.E,
                    {
                        className: l()(f.g2, { [f.$2]: e }),
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
        return (0, r.jsx)(m.E, { className: f.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, r.jsxs)("div", {
        className: f.kz,
        children: [e > 0 && o(e), e > 0 && i(), o(n), i(), o(s), i(), o(c, !0)],
    });
}
