n.d(t, { AF: () => c, WM: () => s });
let r = (0, n(945810).mj)({
    name: "2026-08-vq-remaining-time-truncation",
    kind: "user",
    defaultConfig: { truncateMoreThanSeconds: null },
    variations: { 1: { truncateMoreThanSeconds: 30 }, 2: { truncateMoreThanSeconds: 60 } },
});
var u = n(792620),
    i = n(221596),
    l = n(792996);
function o(e, t) {
    let { minutes: n, seconds: r } = (0, u.lG)(e),
        i = 60 * n + r,
        o = t?.truncate != null && i > t.truncate,
        a = o ? t.truncate : i;
    return a >= 60
        ? l.intl.formatToPlainString(o ? l.t.XTdnRd : l.t.PHhTXX, { count: Math.round(a / 60) })
        : l.intl.formatToPlainString(o ? l.t["spl/XS"] : l.t.rUfeQx, { count: a });
}
function a(e, t) {
    let { truncateMoreThanSeconds: n, hideDuration: r = !1 } = t,
        u = e.percentComplete > 0;
    return r
        ? u
            ? l.intl.string(l.t.pk9XKF)
            : l.intl.string(l.t.kfks9Y)
        : u
          ? l.intl.formatToPlainString(l.t["pF/deA"], { durationShort: o(e) })
          : l.intl.formatToPlainString(l.t.CHrvqg, { durationShort: o(e, { truncate: n }) });
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { truncateMoreThanSeconds: n } = r.getConfig({ location: i.rE.QUESTS_CARD });
    return a(e, { truncateMoreThanSeconds: n, hideDuration: t });
}
function c(e) {
    return a(e, { truncateMoreThanSeconds: null });
}
