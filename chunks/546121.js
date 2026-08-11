"use strict";
n.d(t, { WM: () => o });
let i = (0, n(945810).mj)({
    name: "2026-08-vq-remaining-time-truncation",
    kind: "user",
    defaultConfig: { truncateMoreThanSeconds: null },
    variations: { 1: { truncateMoreThanSeconds: 30 }, 2: { truncateMoreThanSeconds: 60 } },
});
var r = n(792620),
    a = n(190107),
    s = n(375708);
function l(e, t) {
    let { minutes: n, seconds: i } = (0, r.lG)(e),
        a = 60 * n + i,
        l = t?.truncate != null && a > t.truncate,
        o = l ? t.truncate : a;
    return o >= 60
        ? s.intl.formatToPlainString(l ? s.t.XTdnRd : s.t.PHhTXX, { count: Math.round(o / 60) })
        : s.intl.formatToPlainString(l ? s.t["spl/XS"] : s.t.rUfeQx, { count: o });
}
function o(e) {
    if (e.percentComplete > 0) return s.intl.formatToPlainString(s.t["pF/deA"], { durationShort: l(e) });
    let { truncateMoreThanSeconds: t } = i.getConfig({ location: a.rE.QUESTS_CARD });
    return s.intl.formatToPlainString(s.t.CHrvqg, { durationShort: l(e, { truncate: t }) });
}
