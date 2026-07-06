n.d(t, { vi: () => h, uA: () => p, NQ: () => m });
var l,
    i = n(627968);
n(64700);
var r = n(683071),
    a = n(834730),
    s = n(403581),
    o = n(496431),
    u = n(202541),
    c = n(375708),
    d = n(637650),
    p = (((l = {}).TRIAL = "trial"), (l.DEFAULT = "default"), (l.REVERSE_TRIAL = "reverse_trial"), l);
function m(e) {
    let { fractionalPremiumInfo: t, variant: n = "default", trialPeriod: l, trialEnd: i } = e,
        r = t.fractionalState === u.xc.FP_SUB_PAUSED,
        a = (function (e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                l = e.clone();
            return (
                n && (l = l.subtract(12e5, "milliseconds")),
                (t = (0, o.A)(l.toDate(), 6e4)).minutes > 0 || t.seconds > 0
                    ? 23 === t.hours
                        ? { days: t.days + 1, hours: 0, minutes: 0, seconds: 0 }
                        : { days: t.days, hours: t.hours + 1, minutes: 0, seconds: 0 }
                    : t
            );
        })(t.endsAt, r),
        s = "";
    if ("reverse_trial" === n) {
        let e = Math.max(1, a.days);
        return c.intl.format(c.t.rzTJXq, { days: e });
    }
    let d = {
        trial: { days_and_hours: c.t["8VIDrU"], days: c.t["5e2wY0"], hours: c.t.sQcCKt },
        default: { days_and_hours: c.t["6r9LLp"], days: c.t.c2BbVA, hours: c.t["8Xm6uL"] },
    };
    return (
        "trial" === n && null != l && null != i
            ? a.days > 0 && a.hours > 0
                ? (s = c.intl.format(d.trial.days_and_hours, {
                      days: a.days,
                      hours: a.hours,
                      trialPeriod: l,
                      trialEnd: i,
                  }))
                : a.days > 0
                  ? (s = c.intl.format(d.trial.days, { days: a.days, trialPeriod: l, trialEnd: i }))
                  : a.hours > 0 && (s = c.intl.format(d.trial.hours, { hours: a.hours, trialPeriod: l, trialEnd: i }))
            : a.days > 0 && a.hours > 0
              ? (s = c.intl.format(d.default.days_and_hours, { days: a.days, hours: a.hours }))
              : a.days > 0
                ? (s = c.intl.format(d.default.days, { days: a.days }))
                : a.hours > 0 && (s = c.intl.format(d.default.hours, { hours: a.hours })),
        s
    );
}
function h(e) {
    let {
            fractionalPremiumInfo: t,
            variant: n = "default",
            enablePremiumBrandRefresh: l = !1,
            style: o,
            trialPeriod: u,
            trialEnd: c,
        } = e,
        p = m({ fractionalPremiumInfo: t, variant: n, trialPeriod: u, trialEnd: c });
    return "reverse_trial" === n
        ? "" === p
            ? null
            : (0, i.jsx)("div", { className: d.OK, children: (0, i.jsx)(r.w, { type: "info", children: p }) })
        : "trial" === n && null != u && null != c
          ? "" === p
              ? null
              : (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(a.E, { variant: "text-sm/normal", className: d.OK, children: p }),
                        (0, i.jsx)("hr", { className: d.oz }),
                    ],
                })
          : "" === p
            ? null
            : l
              ? (0, i.jsxs)("div", {
                    className: d.bD,
                    style: o,
                    children: [
                        (0, i.jsx)("img", { src: "/assets/3a86a8f56102a71f.svg", alt: "Nitro Icon", className: d.Zb }),
                        (0, i.jsx)(a.E, { variant: "text-sm/medium", children: p }),
                    ],
                })
              : (0, i.jsxs)("div", {
                    className: d.s2,
                    style: o,
                    children: [
                        (0, i.jsxs)("div", {
                            className: d.Dl,
                            children: [
                                (0, i.jsx)(s.t, { size: "md", color: "white", className: d.T8 }),
                                (0, i.jsx)(s.t, { size: "md", color: "currentColor", className: d.XI }),
                            ],
                        }),
                        (0, i.jsx)(a.E, { variant: "text-sm/normal", children: p }),
                        (0, i.jsx)("div", { className: d.WW }),
                    ],
                });
}
