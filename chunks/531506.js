n.d(t, { vi: () => m, uA: () => p, NQ: () => _ });
var a,
    r = n(627968);
n(64700);
var l = n(683071),
    i = n(834730),
    s = n(403581),
    o = n(496431),
    c = n(788868),
    d = n(985018),
    u = n(637650),
    p = (((a = {}).TRIAL = "trial"), (a.DEFAULT = "default"), (a.REVERSE_TRIAL = "reverse_trial"), a);
let _ = (e) => {
    let { fractionalPremiumInfo: t, variant: n = "default", trialPeriod: a, trialEnd: r } = e,
        l = t.fractionalState === c.xc.FP_SUB_PAUSED,
        i = (function (e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = e.clone();
            return (
                n && (a = a.subtract(12e5, "milliseconds")),
                (t = (0, o.A)(a.toDate(), 6e4)).minutes > 0 || t.seconds > 0
                    ? 23 === t.hours
                        ? { days: t.days + 1, hours: 0, minutes: 0, seconds: 0 }
                        : { days: t.days, hours: t.hours + 1, minutes: 0, seconds: 0 }
                    : t
            );
        })(t.endsAt, l),
        s = "";
    if ("reverse_trial" === n) {
        let e = Math.max(1, i.days);
        return d.intl.format(d.t.rzTJXq, { days: e });
    }
    let u = {
        trial: { days_and_hours: d.t["8VIDrU"], days: d.t["5e2wY0"], hours: d.t.sQcCKt },
        default: { days_and_hours: d.t["6r9LLp"], days: d.t.c2BbVA, hours: d.t["8Xm6uL"] },
    };
    return (
        "trial" === n && null != a && null != r
            ? i.days > 0 && i.hours > 0
                ? (s = d.intl.format(u.trial.days_and_hours, {
                      days: i.days,
                      hours: i.hours,
                      trialPeriod: a,
                      trialEnd: r,
                  }))
                : i.days > 0
                  ? (s = d.intl.format(u.trial.days, { days: i.days, trialPeriod: a, trialEnd: r }))
                  : i.hours > 0 && (s = d.intl.format(u.trial.hours, { hours: i.hours, trialPeriod: a, trialEnd: r }))
            : i.days > 0 && i.hours > 0
              ? (s = d.intl.format(u.default.days_and_hours, { days: i.days, hours: i.hours }))
              : i.days > 0
                ? (s = d.intl.format(u.default.days, { days: i.days }))
                : i.hours > 0 && (s = d.intl.format(u.default.hours, { hours: i.hours })),
        s
    );
};
function m(e) {
    let {
            fractionalPremiumInfo: t,
            variant: n = "default",
            enablePremiumBrandRefresh: a = !1,
            style: o,
            trialPeriod: c,
            trialEnd: d,
        } = e,
        p = _({ fractionalPremiumInfo: t, variant: n, trialPeriod: c, trialEnd: d });
    return "reverse_trial" === n
        ? "" === p
            ? null
            : (0, r.jsx)("div", { className: u.OK, children: (0, r.jsx)(l.w, { type: "info", children: p }) })
        : "trial" === n && null != c && null != d
          ? "" === p
              ? null
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(i.E, { variant: "text-sm/normal", className: u.OK, children: p }),
                        (0, r.jsx)("hr", { className: u.oz }),
                    ],
                })
          : "" === p
            ? null
            : a
              ? (0, r.jsxs)("div", {
                    className: u.bD,
                    style: o,
                    children: [
                        (0, r.jsx)("img", { src: "/assets/3a86a8f56102a71f.svg", alt: "Nitro Icon", className: u.Zb }),
                        (0, r.jsx)(i.E, { variant: "text-sm/medium", children: p }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: u.s2,
                    style: o,
                    children: [
                        (0, r.jsxs)("div", {
                            className: u.Dl,
                            children: [
                                (0, r.jsx)(s.t, { size: "md", color: "white", className: u.T8 }),
                                (0, r.jsx)(s.t, { size: "md", color: "currentColor", className: u.XI }),
                            ],
                        }),
                        (0, r.jsx)(i.E, { variant: "text-sm/normal", children: p }),
                        (0, r.jsx)("div", { className: u.WW }),
                    ],
                });
}
