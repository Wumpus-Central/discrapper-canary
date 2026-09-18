n.d(t, { WM: () => a });
let i = (0, n(945810).mj)({
    name: "2026-08-vq-remaining-time-truncation",
    kind: "user",
    defaultConfig: { truncateMoreThanSeconds: null },
    variations: { 1: { truncateMoreThanSeconds: 30 }, 2: { truncateMoreThanSeconds: 60 } },
});
var r = n(792620),
    s = n(190107),
    o = n(375708);
function u(e, t) {
    let { minutes: n, seconds: i } = (0, r.lG)(e),
        s = 60 * n + i,
        u = t?.truncate != null && s > t.truncate,
        a = u ? t.truncate : s;
    return a >= 60
        ? o.intl.formatToPlainString(u ? o.t.XTdnRd : o.t.PHhTXX, { count: Math.round(a / 60) })
        : o.intl.formatToPlainString(u ? o.t["spl/XS"] : o.t.rUfeQx, { count: a });
}
function a(e) {
    let { truncateMoreThanSeconds: t } = i.getConfig({ location: s.rE.QUESTS_CARD });
    return (function (e, t) {
        let { truncateMoreThanSeconds: n } = t;
        return e.percentComplete > 0
            ? o.intl.formatToPlainString(o.t["pF/deA"], { durationShort: u(e) })
            : o.intl.formatToPlainString(o.t.CHrvqg, { durationShort: u(e, { truncate: n }) });
    })(e, { truncateMoreThanSeconds: t });
}
