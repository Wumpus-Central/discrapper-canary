"use strict";
n.d(t, { NQ: () => p, uA: () => f, vi: () => h });
var r,
    i = n(627968);
n(64700);
var s = n(683071),
    a = n(834730),
    o = n(403581),
    l = n(709917),
    u = n(788868),
    c = n(985018),
    d = n(637650),
    _ = n(694414),
    f = (((r = {}).TRIAL = "trial"), (r.DEFAULT = "default"), (r.REVERSE_TRIAL = "reverse_trial"), r);
let p = (e) => {
    let { fractionalPremiumInfo: t, variant: n = "default", trialPeriod: r, trialEnd: i } = e,
        s = t.fractionalState === u.xc.FP_SUB_PAUSED,
        a = (0, l.A)(t.endsAt, s),
        o = "";
    if ("reverse_trial" === n) {
        let e = Math.max(1, a.days);
        return c.intl.format(c.t.rzTJXq, { days: e });
    }
    let d = {
        trial: { days_and_hours: c.t["8VIDrU"], days: c.t["5e2wY0"], hours: c.t.sQcCKt },
        default: { days_and_hours: c.t["6r9LLp"], days: c.t.c2BbVA, hours: c.t["8Xm6uL"] },
    };
    return (
        "trial" === n && null != r && null != i
            ? a.days > 0 && a.hours > 0
                ? (o = c.intl.format(d.trial.days_and_hours, {
                      days: a.days,
                      hours: a.hours,
                      trialPeriod: r,
                      trialEnd: i,
                  }))
                : a.days > 0
                  ? (o = c.intl.format(d.trial.days, { days: a.days, trialPeriod: r, trialEnd: i }))
                  : a.hours > 0 && (o = c.intl.format(d.trial.hours, { hours: a.hours, trialPeriod: r, trialEnd: i }))
            : a.days > 0 && a.hours > 0
              ? (o = c.intl.format(d.default.days_and_hours, { days: a.days, hours: a.hours }))
              : a.days > 0
                ? (o = c.intl.format(d.default.days, { days: a.days }))
                : a.hours > 0 && (o = c.intl.format(d.default.hours, { hours: a.hours })),
        o
    );
};
function h(e) {
    let {
            fractionalPremiumInfo: t,
            variant: n = "default",
            enablePremiumBrandRefresh: r = !1,
            style: l,
            trialPeriod: u,
            trialEnd: c,
        } = e,
        f = p({ fractionalPremiumInfo: t, variant: n, trialPeriod: u, trialEnd: c });
    return "reverse_trial" === n
        ? "" === f
            ? null
            : (0, i.jsx)("div", { className: d.OK, children: (0, i.jsx)(s.w, { type: "info", children: f }) })
        : "trial" === n && null != u && null != c
          ? "" === f
              ? null
              : (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(a.E, { variant: "text-sm/normal", className: d.OK, children: f }),
                        (0, i.jsx)("hr", { className: d.oz }),
                    ],
                })
          : "" === f
            ? null
            : r
              ? (0, i.jsxs)("div", {
                    className: d.bD,
                    style: l,
                    children: [
                        (0, i.jsx)("img", { src: _, alt: "Nitro Icon", className: d.Zb }),
                        (0, i.jsx)(a.E, { variant: "text-sm/medium", children: f }),
                    ],
                })
              : (0, i.jsxs)("div", {
                    className: d.s2,
                    style: l,
                    children: [
                        (0, i.jsxs)("div", {
                            className: d.Dl,
                            children: [
                                (0, i.jsx)(o.t, { size: "md", color: "white", className: d.T8 }),
                                (0, i.jsx)(o.t, { size: "md", color: "currentColor", className: d.XI }),
                            ],
                        }),
                        (0, i.jsx)(a.E, { variant: "text-sm/normal", children: f }),
                        (0, i.jsx)("div", { className: d.WW }),
                    ],
                });
}
