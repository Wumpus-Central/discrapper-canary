n.d(t, { NQ: () => _, uA: () => p, vi: () => f });
var a,
    r = n(627968);
n(64700);
var l = n(683071),
    i = n(834730),
    s = n(403581),
    o = n(709917),
    u = n(788868),
    c = n(985018),
    d = n(637650),
    m = n(694414),
    p = (((a = {}).TRIAL = "trial"), (a.DEFAULT = "default"), (a.REVERSE_TRIAL = "reverse_trial"), a);
let _ = (e) => {
    let { fractionalPremiumInfo: t, variant: n = "default", trialPeriod: a, trialEnd: r } = e,
        l = t.fractionalState === u.xc.FP_SUB_PAUSED,
        i = (0, o.A)(t.endsAt, l),
        s = "";
    if ("reverse_trial" === n) {
        let e = Math.max(1, i.days);
        return c.intl.format(c.t.rzTJXq, { days: e });
    }
    let d = {
        trial: { days_and_hours: c.t["8VIDrU"], days: c.t["5e2wY0"], hours: c.t.sQcCKt },
        default: { days_and_hours: c.t["6r9LLp"], days: c.t.c2BbVA, hours: c.t["8Xm6uL"] },
    };
    return (
        "trial" === n && null != a && null != r
            ? i.days > 0 && i.hours > 0
                ? (s = c.intl.format(d.trial.days_and_hours, {
                      days: i.days,
                      hours: i.hours,
                      trialPeriod: a,
                      trialEnd: r,
                  }))
                : i.days > 0
                  ? (s = c.intl.format(d.trial.days, { days: i.days, trialPeriod: a, trialEnd: r }))
                  : i.hours > 0 && (s = c.intl.format(d.trial.hours, { hours: i.hours, trialPeriod: a, trialEnd: r }))
            : i.days > 0 && i.hours > 0
              ? (s = c.intl.format(d.default.days_and_hours, { days: i.days, hours: i.hours }))
              : i.days > 0
                ? (s = c.intl.format(d.default.days, { days: i.days }))
                : i.hours > 0 && (s = c.intl.format(d.default.hours, { hours: i.hours })),
        s
    );
};
function f(e) {
    let {
            fractionalPremiumInfo: t,
            variant: n = "default",
            enablePremiumBrandRefresh: a = !1,
            style: o,
            trialPeriod: u,
            trialEnd: c,
        } = e,
        p = _({ fractionalPremiumInfo: t, variant: n, trialPeriod: u, trialEnd: c });
    return "reverse_trial" === n
        ? "" === p
            ? null
            : (0, r.jsx)("div", { className: d.OK, children: (0, r.jsx)(l.w, { type: "info", children: p }) })
        : "trial" === n && null != u && null != c
          ? "" === p
              ? null
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(i.E, { variant: "text-sm/normal", className: d.OK, children: p }),
                        (0, r.jsx)("hr", { className: d.oz }),
                    ],
                })
          : "" === p
            ? null
            : a
              ? (0, r.jsxs)("div", {
                    className: d.bD,
                    style: o,
                    children: [
                        (0, r.jsx)("img", { src: m, alt: "Nitro Icon", className: d.Zb }),
                        (0, r.jsx)(i.E, { variant: "text-sm/medium", children: p }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: d.s2,
                    style: o,
                    children: [
                        (0, r.jsxs)("div", {
                            className: d.Dl,
                            children: [
                                (0, r.jsx)(s.t, { size: "md", color: "white", className: d.T8 }),
                                (0, r.jsx)(s.t, { size: "md", color: "currentColor", className: d.XI }),
                            ],
                        }),
                        (0, r.jsx)(i.E, { variant: "text-sm/normal", children: p }),
                        (0, r.jsx)("div", { className: d.WW }),
                    ],
                });
}
