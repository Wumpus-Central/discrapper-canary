"use strict";
n.d(t, { vi: () => h, uA: () => c, NQ: () => E });
var i,
    r = n(627968);
n(64700);
var s = n(683071),
    a = n(834730),
    o = n(403581),
    l = n(496431),
    d = n(788868),
    _ = n(985018),
    u = n(637650),
    c = (((i = {}).TRIAL = "trial"), (i.DEFAULT = "default"), (i.REVERSE_TRIAL = "reverse_trial"), i);
let E = (e) => {
    let { fractionalPremiumInfo: t, variant: n = "default", trialPeriod: i, trialEnd: r } = e,
        s = t.fractionalState === d.xc.FP_SUB_PAUSED,
        a = (function (e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = e.clone();
            return (
                n && (i = i.subtract(12e5, "milliseconds")),
                (t = (0, l.A)(i.toDate(), 6e4)).minutes > 0 || t.seconds > 0
                    ? 23 === t.hours
                        ? { days: t.days + 1, hours: 0, minutes: 0, seconds: 0 }
                        : { days: t.days, hours: t.hours + 1, minutes: 0, seconds: 0 }
                    : t
            );
        })(t.endsAt, s),
        o = "";
    if ("reverse_trial" === n) {
        let e = Math.max(1, a.days);
        return _.intl.format(_.t.rzTJXq, { days: e });
    }
    let u = {
        trial: { days_and_hours: _.t["8VIDrU"], days: _.t["5e2wY0"], hours: _.t.sQcCKt },
        default: { days_and_hours: _.t["6r9LLp"], days: _.t.c2BbVA, hours: _.t["8Xm6uL"] },
    };
    return (
        "trial" === n && null != i && null != r
            ? a.days > 0 && a.hours > 0
                ? (o = _.intl.format(u.trial.days_and_hours, {
                      days: a.days,
                      hours: a.hours,
                      trialPeriod: i,
                      trialEnd: r,
                  }))
                : a.days > 0
                  ? (o = _.intl.format(u.trial.days, { days: a.days, trialPeriod: i, trialEnd: r }))
                  : a.hours > 0 && (o = _.intl.format(u.trial.hours, { hours: a.hours, trialPeriod: i, trialEnd: r }))
            : a.days > 0 && a.hours > 0
              ? (o = _.intl.format(u.default.days_and_hours, { days: a.days, hours: a.hours }))
              : a.days > 0
                ? (o = _.intl.format(u.default.days, { days: a.days }))
                : a.hours > 0 && (o = _.intl.format(u.default.hours, { hours: a.hours })),
        o
    );
};
function h(e) {
    let {
            fractionalPremiumInfo: t,
            variant: n = "default",
            enablePremiumBrandRefresh: i = !1,
            style: l,
            trialPeriod: d,
            trialEnd: _,
        } = e,
        c = E({ fractionalPremiumInfo: t, variant: n, trialPeriod: d, trialEnd: _ });
    return "reverse_trial" === n
        ? "" === c
            ? null
            : (0, r.jsx)("div", { className: u.OK, children: (0, r.jsx)(s.w, { type: "info", children: c }) })
        : "trial" === n && null != d && null != _
          ? "" === c
              ? null
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.E, { variant: "text-sm/normal", className: u.OK, children: c }),
                        (0, r.jsx)("hr", { className: u.oz }),
                    ],
                })
          : "" === c
            ? null
            : i
              ? (0, r.jsxs)("div", {
                    className: u.bD,
                    style: l,
                    children: [
                        (0, r.jsx)("img", { src: "/assets/3a86a8f56102a71f.svg", alt: "Nitro Icon", className: u.Zb }),
                        (0, r.jsx)(a.E, { variant: "text-sm/medium", children: c }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: u.s2,
                    style: l,
                    children: [
                        (0, r.jsxs)("div", {
                            className: u.Dl,
                            children: [
                                (0, r.jsx)(o.t, { size: "md", color: "white", className: u.T8 }),
                                (0, r.jsx)(o.t, { size: "md", color: "currentColor", className: u.XI }),
                            ],
                        }),
                        (0, r.jsx)(a.E, { variant: "text-sm/normal", children: c }),
                        (0, r.jsx)("div", { className: u.WW }),
                    ],
                });
}
