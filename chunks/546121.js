n.d(t, { WM: () => l });
let i = (0, n(945810).mj)({
    name: "2026-08-vq-remaining-time-truncation",
    kind: "user",
    defaultConfig: { truncateMoreThanSeconds: null },
    variations: { 1: { truncateMoreThanSeconds: 30 }, 2: { truncateMoreThanSeconds: 60 } },
});
var r = n(792620),
    s = n(190107),
    o = n(375708);
function a(e, t) {
    let { minutes: n, seconds: i } = (0, r.lG)(e),
        s = 60 * n + i,
        a = t?.truncate != null && s > t.truncate,
        l = a ? t.truncate : s;
    return l >= 60
        ? o.intl.formatToPlainString(a ? o.t.XTdnRd : o.t.PHhTXX, { count: Math.round(l / 60) })
        : o.intl.formatToPlainString(a ? o.t["spl/XS"] : o.t.rUfeQx, { count: l });
}
function l(e) {
    if (e.percentComplete > 0) return o.intl.formatToPlainString(o.t["pF/deA"], { durationShort: a(e) });
    let { truncateMoreThanSeconds: t } = i.getConfig({ location: s.rE.QUESTS_CARD });
    return o.intl.formatToPlainString(o.t.CHrvqg, { durationShort: a(e, { truncate: t }) });
}
