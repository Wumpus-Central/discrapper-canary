n.d(t, {
    I: () => u,
    n: () => d,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(886969),
    o = n(474936),
    s = n(388032),
    l = n(394682),
    c = n(774945),
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
        _ = t.fractionalState === o.a$.FP_SUB_PAUSED,
        h = (0, a.Z)(t.endsAt, _),
        m = "",
        g = {
            trial: {
                days_and_hours: s.t["8VIDrU"],
                days: s.t["5e2wY0"],
                hours: s.t.sQcCKt,
            },
            default: {
                days_and_hours: s.t["6r9LLp"],
                days: s.t.c2BbVA,
                hours: s.t["8Xm6uL"],
            },
        };
    return "trial" === n && null != f && null != p
        ? (h.days > 0 && h.hours > 0
              ? (m = s.intl.format(g.trial.days_and_hours, {
                    days: h.days,
                    hours: h.hours,
                    trialPeriod: f,
                    trialEnd: p,
                }))
              : h.days > 0
                ? (m = s.intl.format(g.trial.days, {
                      days: h.days,
                      trialPeriod: f,
                      trialEnd: p,
                  }))
                : h.hours > 0 &&
                  (m = s.intl.format(g.trial.hours, {
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
                          className: l.trialForAllHeader,
                          children: m,
                      }),
                      (0, r.jsx)("hr", { className: l.trialForAllSeparator }),
                  ],
              })
        : (h.days > 0 && h.hours > 0
                ? (m = s.intl.format(g.default.days_and_hours, {
                      days: h.days,
                      hours: h.hours,
                  }))
                : h.days > 0
                  ? (m = s.intl.format(g.default.days, { days: h.days }))
                  : h.hours > 0 && (m = s.intl.format(g.default.hours, { hours: h.hours })),
            "" === m)
          ? null
          : u
            ? (0, r.jsxs)("div", {
                  className: l.premiumBrandRefreshContainer,
                  style: d,
                  children: [
                      (0, r.jsx)("img", {
                          src: c,
                          alt: "Nitro Icon",
                          className: l.premiumBrandRefreshIcon,
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/medium",
                          children: m,
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: l.activeFractionalPremiumBannerContainer,
                  style: d,
                  children: [
                      (0, r.jsxs)("div", {
                          className: l.nitroIconContainer,
                          children: [
                              (0, r.jsx)(i.SrA, {
                                  size: "md",
                                  color: "white",
                                  className: l.iconFractional,
                              }),
                              (0, r.jsx)(i.SrA, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l.iconFractionalDark,
                              }),
                          ],
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          children: m,
                      }),
                      (0, r.jsx)("div", { className: l.activeFractionalPremiumBannerBackgroundImage }),
                  ],
              });
}
