var s = n(477900),
    r = n(582128),
    o = n(503698),
    c = n.n(o),
    i = n(317097),
    l = n(52133),
    a = n(417098),
    u = n(43990),
    d = n(406810),
    m = n(834730),
    x = n(396583),
    h = n(421108),
    j = n(818348),
    f = n(792996),
    v = n(395822);
function k(t) {
    let { days: e } = t;
    return (0, s.jsxs)("div", {
        className: v.S5,
        children: [
            (0, s.jsx)(d.ClockIcon, { size: "sm", color: "currentColor" }),
            (0, s.jsx)(m.E, {
                variant: "body-sm/medium",
                color: "currentColor",
                children: f.intl.formatToPlainString(f.t.BXpdIg, { days: e }),
            }),
        ],
    });
}
function p(t) {
    let {
        timeLeft: { days: e, hours: n, minutes: r, seconds: o },
    } = t;
    function i(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = String(t).padStart(2, "0").split("");
        return (0, s.jsx)(s.Fragment, {
            children: n.map((t, n) =>
                (0, s.jsx)(
                    m.E,
                    {
                        className: c()(v.g2, { [v.$2]: e }),
                        variant: "body-sm/semibold",
                        color: "currentColor",
                        children: t,
                    },
                    n,
                ),
            ),
        });
    }
    function l() {
        return (0, s.jsx)(m.E, { className: v.At, variant: "body-lg/semibold", children: ":" });
    }
    return (0, s.jsxs)("div", {
        className: v.kz,
        children: [e > 0 && i(e), e > 0 && l(), i(n), l(), i(r), l(), i(o, !0)],
    });
}
n.d(
    e,
    {},
    {
        A: function (t) {
            let { className: e, color: n = "default", sticky: r = !1, children: o } = t,
                l = r ? v.qf : void 0;
            function d() {
                let {
                    className: t,
                    noticeColor: e,
                    customStyle: n,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, s.jsx)(a.$T, { className: t, color: e, style: n, children: o });
            }
            if ("nitro-pink" === n)
                return d({
                    className: c()(v.cI, v.p3, l, e),
                    customStyle: {
                        "--custom-notice-background": "var(--background-surface-highest)",
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": "var(--background-surface-highest)",
                    },
                });
            if ((0, i.qt)(n)) {
                let t = (0, i.OK)((0, i.LX)(n)) > 0.5 ? j.NJ.DARK : j.NJ.LIGHT;
                return (0, s.jsx)(u.N, {
                    theme: t,
                    children: (t) =>
                        d({
                            className: c()(t, v.cI, l, e),
                            customStyle: {
                                "--custom-notice-background": n,
                                "--custom-notice-text": "var(--text-strong)",
                                "--custom-notice-button-hover": n,
                            },
                        }),
                });
            }
            return (0, s.jsx)(u.N, {
                theme: j.NJ.DARK,
                children: (t) => d({ className: c()(t, v.cI, l, e), noticeColor: a.Hv.BRAND }),
            });
        },
        S: function (t) {
            let { endDatetime: e } = t,
                [n, o] = r.useState(() => (0, h.ZH)(e));
            return ((0, x.A)(() => {
                let t = (0, h.ZH)(e);
                o((e) => (null == t ? null : null != e && (0, l.A)(e, t) ? e : t));
            }, 1e3),
            null == n)
                ? null
                : n.days > 0
                  ? (0, s.jsx)(k, { days: n.days })
                  : (0, s.jsx)(p, { timeLeft: n });
        },
    },
);
