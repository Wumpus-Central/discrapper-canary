n.d(t, {
    u: () => u,
    v: () => d,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(709917),
    s = n(788868),
    o = n(985018),
    l = n(857365),
    c = n(694414),
    u = (function (e) {
        return (e.TRIAL = "trial"), (e.DEFAULT = "default"), e;
    })({});
function d(e) {
    let {
            fractionalPremiumInfo: t,
            variant: n = "default",
            enablePremiumBrandRefresh: u = !1,
            style: d,
            trialPeriod: f,
            trialEnd: p,
        } = e,
        _ = t.fractionalState === s.xc.FP_SUB_PAUSED,
        h = (0, a.A)(t.endsAt, _),
        m = "",
        g = {
            trial: {
                days_and_hours: o.t["8VIDrU"],
                days: o.t["5e2wY0"],
                hours: o.t.sQcCKt,
            },
            default: {
                days_and_hours: o.t["6r9LLp"],
                days: o.t.c2BbVA,
                hours: o.t["8Xm6uL"],
            },
        };
    return "trial" === n && null != f && null != p
        ? (h.days > 0 && h.hours > 0
              ? (m = o.intl.format(g.trial.days_and_hours, {
                    days: h.days,
                    hours: h.hours,
                    trialPeriod: f,
                    trialEnd: p,
                }))
              : h.days > 0
                ? (m = o.intl.format(g.trial.days, {
                      days: h.days,
                      trialPeriod: f,
                      trialEnd: p,
                  }))
                : h.hours > 0 &&
                  (m = o.intl.format(g.trial.hours, {
                      days: h.days,
                      hours: h.hours,
                      trialPeriod: f,
                      trialEnd: p,
                  })),
          "" === m)
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          className: l.OK,
                          children: m,
                      }),
                      (0, r.jsx)("hr", { className: l.oz }),
                  ],
              })
        : (h.days > 0 && h.hours > 0
                ? (m = o.intl.format(g.default.days_and_hours, {
                      days: h.days,
                      hours: h.hours,
                  }))
                : h.days > 0
                  ? (m = o.intl.format(g.default.days, { days: h.days }))
                  : h.hours > 0 && (m = o.intl.format(g.default.hours, { hours: h.hours })),
            "" === m)
          ? null
          : u
            ? (0, r.jsxs)("div", {
                  className: l.bD,
                  style: d,
                  children: [
                      (0, r.jsx)("img", {
                          src: c,
                          alt: "Nitro Icon",
                          className: l.Zb,
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/medium",
                          children: m,
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: l.s2,
                  style: d,
                  children: [
                      (0, r.jsxs)("div", {
                          className: l.Dl,
                          children: [
                              (0, r.jsx)(i.tvc, {
                                  size: "md",
                                  color: "white",
                                  className: l.T8,
                              }),
                              (0, r.jsx)(i.tvc, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l.XI,
                              }),
                          ],
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          children: m,
                      }),
                      (0, r.jsx)("div", { className: l.WW }),
                  ],
              });
}
