n.d(e, { A: () => p, S: () => v });
var r = n(477900),
    s = n(582128),
    l = n(503698),
    i = n.n(l),
    c = n(317097),
    a = n(52133),
    o = n(417098),
    u = n(43990),
    d = n(406810),
    m = n(834730),
    x = n(396583),
    f = n(421108),
    h = n(818348),
    k = n(105292),
    j = n(395822);
function p(t) {
    let { className: e, color: n = "default", sticky: s = !1, children: l } = t,
        a = s ? j.qf : void 0;
    function d() {
        let {
            className: t,
            noticeColor: e,
            customStyle: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsx)(o.$T, { className: t, color: e, style: n, children: l });
    }
    if ("nitro-pink" === n)
        return d({
            className: i()(j.cI, j.p3, a, e),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, c.qt)(n)) {
        let t = (0, c.OK)((0, c.LX)(n)) > 0.5 ? h.NJ.DARK : h.NJ.LIGHT;
        return (0, r.jsx)(u.N, {
            theme: t,
            children: (t) =>
                d({
                    className: i()(t, j.cI, a, e),
                    customStyle: {
                        "--custom-notice-background": n,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": n,
                    },
                }),
        });
    }
    return (0, r.jsx)(u.N, {
        theme: h.NJ.DARK,
        children: (t) => d({ className: i()(t, j.cI, a, e), noticeColor: o.Hv.BRAND }),
    });
}
function v(t) {
    let { endDatetime: e } = t,
        [n, l] = s.useState(() => (0, f.ZH)(e));
    return ((0, x.A)(() => {
        let t = (0, f.ZH)(e);
        l((e) => (null == t ? null : null != e && (0, a.A)(e, t) ? e : t));
    }, 1e3),
    null == n)
        ? null
        : n.days > 0
          ? (0, r.jsx)(g, { days: n.days })
          : (0, r.jsx)(A, { timeLeft: n });
}
function g(t) {
    let { days: e } = t;
    return (0, r.jsxs)("div", {
        className: j.S5,
        children: [
            (0, r.jsx)(d.ClockIcon, { size: "sm", color: "currentColor" }),
            (0, r.jsx)(m.E, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: k.intl.formatToPlainString(k.t.BXpdIg, { days: e }),
            }),
        ],
    });
}
function A(t) {
    let {
        timeLeft: { days: e, hours: n, minutes: s, seconds: l },
    } = t;
    function c(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = String(t).padStart(2, "0").split("");
        return (0, r.jsx)(r.Fragment, {
            children: n.map((t, n) =>
                (0, r.jsx)(
                    m.E,
                    {
                        className: i()(j.g2, { [j.$2]: e }),
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: t,
                    },
                    n,
                ),
            ),
        });
    }
    function a() {
        return (0, r.jsx)(m.E, { className: j.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, r.jsxs)("div", {
        className: j.kz,
        children: [e > 0 && c(e), e > 0 && a(), c(n), a(), c(s), a(), c(l, !0)],
    });
}
