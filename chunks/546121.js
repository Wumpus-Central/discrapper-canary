n.d(t, { WM: () => s });
let r = (0, n(945810).mj)({
    name: "2026-08-vq-remaining-time-truncation",
    kind: "user",
    defaultConfig: { truncateMoreThanSeconds: null },
    variations: { 1: { truncateMoreThanSeconds: 30 }, 2: { truncateMoreThanSeconds: 60 } },
});
var u = n(792620),
    l = n(190107),
    i = n(375708);
function o(e, t) {
    let { minutes: n, seconds: r } = (0, u.lG)(e),
        l = 60 * n + r,
        o = t?.truncate != null && l > t.truncate,
        s = o ? t.truncate : l;
    return s >= 60
        ? i.intl.formatToPlainString(o ? i.t.XTdnRd : i.t.PHhTXX, { count: Math.round(s / 60) })
        : i.intl.formatToPlainString(o ? i.t["spl/XS"] : i.t.rUfeQx, { count: s });
}
function s(e) {
    let { truncateMoreThanSeconds: t } = r.getConfig({ location: l.rE.QUESTS_CARD });
    return (function (e, t) {
        let { truncateMoreThanSeconds: n } = t;
        return e.percentComplete > 0
            ? i.intl.formatToPlainString(i.t["pF/deA"], { durationShort: o(e) })
            : i.intl.formatToPlainString(i.t.CHrvqg, { durationShort: o(e, { truncate: n }) });
    })(e, { truncateMoreThanSeconds: t });
}
