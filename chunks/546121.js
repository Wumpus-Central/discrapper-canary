n.d(t, { WM: () => s });
let r = (0, n(945810).mj)({
    name: "2026-08-vq-remaining-time-truncation",
    kind: "user",
    defaultConfig: { truncateMoreThanSeconds: null },
    variations: { 1: { truncateMoreThanSeconds: 30 }, 2: { truncateMoreThanSeconds: 60 } },
});
var u = n(792620),
    i = n(190107),
    o = n(105292);
function l(e, t) {
    let { minutes: n, seconds: r } = (0, u.lG)(e),
        i = 60 * n + r,
        l = t?.truncate != null && i > t.truncate,
        s = l ? t.truncate : i;
    return s >= 60
        ? o.intl.formatToPlainString(l ? o.t.XTdnRd : o.t.PHhTXX, { count: Math.round(s / 60) })
        : o.intl.formatToPlainString(l ? o.t["spl/XS"] : o.t.rUfeQx, { count: s });
}
function s(e) {
    let { truncateMoreThanSeconds: t } = r.getConfig({ location: i.rE.QUESTS_CARD });
    return (function (e, t) {
        let { truncateMoreThanSeconds: n } = t;
        return e.percentComplete > 0
            ? o.intl.formatToPlainString(o.t["pF/deA"], { durationShort: l(e) })
            : o.intl.formatToPlainString(o.t.CHrvqg, { durationShort: l(e, { truncate: n }) });
    })(e, { truncateMoreThanSeconds: t });
}
