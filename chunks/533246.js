n.d(t, {
    TV: () => u,
    YF: () => c,
    h$: () => d,
    kj: () => l,
}),
    n(415506);
var r = n(774078),
    i = n(706454),
    a = n(474936),
    o = n(388032);
let s = 1000;
function l(e, t) {
    switch (e) {
        case a.Si.TIER_0:
            return t.days > 0
                ? o.intl.formatToPlainString(o.t.sP5OqK, { days: t.days })
                : t.hours > 0
                  ? o.intl.formatToPlainString(o.t["7Lhfu7"], { hours: t.hours })
                  : o.intl.formatToPlainString(o.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case a.Si.TIER_2:
            return t.days > 0
                ? o.intl.formatToPlainString(o.t["4prs5e"], { days: t.days })
                : t.hours > 0
                  ? o.intl.formatToPlainString(o.t.OD5nIS, { hours: t.hours })
                  : o.intl.formatToPlainString(o.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
let c = (e) => {
    var t;
    let n = e.expires_at,
        i = (0, r.Z)(null != n ? Date.parse(n) : 0, s),
        a = null == e || null == (t = e.subscription_trial) ? void 0 : t.sku_id;
    return null == n || null == a ? null : l(a, i);
};
function u(e, t) {
    let n = new Intl.NumberFormat(i.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? o.intl.formatToPlainString(o.t["7mw8CQ"], {
              days: e.days,
              discountPercentage: n,
          })
        : e.hours > 0
          ? o.intl.formatToPlainString(o.t["0hYT6u"], {
                hours: e.hours,
                discountPercentage: n,
            })
          : o.intl.formatToPlainString(o.t["2rh7r6"], {
                minutes: Math.max(e.minutes, 1),
                discountPercentage: n,
            });
}
let d = (e) => {
    let t = e.expires_at,
        n = (0, r.Z)(null != t ? Date.parse(t) : 0, s);
    return null == t ? null : u(n, Number(e.discount.amount));
};
