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
function l(e, t) {
    let { minutes: n, seconds: i } = (0, r.lG)(e),
        s = 60 * n + i,
        l = t?.truncate != null && s > t.truncate,
        a = l ? t.truncate : s;
    return a >= 60
        ? o.intl.formatToPlainString(l ? o.t.XTdnRd : o.t.PHhTXX, { count: Math.round(a / 60) })
        : o.intl.formatToPlainString(l ? o.t["spl/XS"] : o.t.rUfeQx, { count: a });
}
function a(e) {
    if (e.percentComplete > 0) return o.intl.formatToPlainString(o.t["pF/deA"], { durationShort: l(e) });
    let { truncateMoreThanSeconds: t } = i.getConfig({ location: s.rE.QUESTS_CARD });
    return o.intl.formatToPlainString(o.t.CHrvqg, { durationShort: l(e, { truncate: t }) });
}
