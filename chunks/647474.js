var r = n(477900),
    s = n(582128),
    o = n(503698),
    c = n.n(o),
    l = n(317097),
    i = n(52133),
    a = n(417098),
    u = n(43990),
    d = n(406810),
    m = n(834730),
    x = n(396583),
    h = n(421108),
    j = n(818348),
    f = n(792996),
    k = n(395822);
function v(t) {
    let { days: e } = t;
    return (0, r.jsxs)("div", {
        className: k.S5,
        children: [
            (0, r.jsx)(d.ClockIcon, { size: "sm", color: "currentColor" }),
            (0, r.jsx)(m.E, {
                variant: "body-sm/medium",
                color: "currentColor",
                children: f.intl.formatToPlainString(f.t.BXpdIg, { days: e }),
            }),
        ],
    });
}
function N(t) {
    let {
        timeLeft: { days: e, hours: n, minutes: s, seconds: o },
    } = t;
    function l(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = String(t).padStart(2, "0").split("");
        return (0, r.jsx)(r.Fragment, {
            children: n.map((t, n) =>
                (0, r.jsx)(
                    m.E,
                    {
                        className: c()(k.g2, { [k.$2]: e }),
                        variant: "body-sm/semibold",
                        color: "currentColor",
                        children: t,
                    },
                    n,
                ),
            ),
        });
    }
    function i() {
        return (0, r.jsx)(m.E, { className: k.At, variant: "body-lg/semibold", children: ":" });
    }
    return (0, r.jsxs)("div", {
        className: k.kz,
        children: [e > 0 && l(e), e > 0 && i(), l(n), i(), l(s), i(), l(o, !0)],
    });
}
n.d(
    e,
    {},
    {
        A: function (t) {
            let { className: e, color: n = "default", sticky: s = !1, children: o } = t,
                i = s ? k.qf : void 0;
            function d() {
                let {
                    className: t,
                    noticeColor: e,
                    customStyle: n,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, r.jsx)(a.$T, { className: t, color: e, style: n, children: o });
            }
            if ("nitro-pink" === n)
                return d({
                    className: c()(k.cI, k.p3, i, e),
                    customStyle: {
                        "--custom-notice-background": "var(--background-surface-highest)",
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": "var(--background-surface-highest)",
                    },
                });
            if ((0, l.qt)(n)) {
                let t = (0, l.OK)((0, l.LX)(n)) > 0.5 ? j.NJ.DARK : j.NJ.LIGHT;
                return (0, r.jsx)(u.N, {
                    theme: t,
                    children: (t) =>
                        d({
                            className: c()(t, k.cI, i, e),
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
                children: (t) => d({ className: c()(t, k.cI, i, e), noticeColor: a.Hv.BRAND }),
            });
        },
        S: function (t) {
            let { endDatetime: e } = t,
                [n, o] = s.useState(() => (0, h.ZH)(e));
            return ((0, x.A)(() => {
                let t = (0, h.ZH)(e);
                o((e) => (null == t ? null : null != e && (0, i.A)(e, t) ? e : t));
            }, 1e3),
            null == n)
                ? null
                : n.days > 0
                  ? (0, r.jsx)(v, { days: n.days })
                  : (0, r.jsx)(N, { timeLeft: n });
        },
    },
);
