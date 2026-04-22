"use strict";
n.d(t, {
    DisableCommunicationDuration: () => o,
    MO: () => d,
    Rv: () => _,
    aZ: () => f,
    getFriendlyDurationString: () => l,
    hl: () => E,
    hs: () => c,
    ny: () => u,
});
var r,
    i = n(975571),
    s = n(652215),
    a = n(985018),
    o =
        (((r = {})[(r.DURATION_60_SEC = 60)] = "DURATION_60_SEC"),
        (r[(r.DURATION_5_MIN = 300)] = "DURATION_5_MIN"),
        (r[(r.DURATION_10_MIN = 600)] = "DURATION_10_MIN"),
        (r[(r.DURATION_1_HOUR = 3600)] = "DURATION_1_HOUR"),
        (r[(r.DURATION_1_DAY = 86400)] = "DURATION_1_DAY"),
        (r[(r.DURATION_1_WEEK = 604800)] = "DURATION_1_WEEK"),
        r);
function l(e) {
    switch (e) {
        case 60:
            return a.intl.formatToPlainString(a.t["4zv/jq"], { secs: 60 });
        case 300:
            return a.intl.formatToPlainString(a.t.opVZ9q, { mins: 5 });
        case 600:
            return a.intl.formatToPlainString(a.t.opVZ9q, { mins: 10 });
        case 3600:
            return a.intl.formatToPlainString(a.t.xCjYxK, { hours: 1 });
        case 86400:
            return a.intl.formatToPlainString(a.t["k2UNz+"], { days: 1 });
        case 604800:
            return a.intl.formatToPlainString(a.t.EmoBD2, { weeks: 1 });
        default:
            return;
    }
}
let u = () =>
        Object.keys(o)
            .filter((e) => isNaN(Number(e)))
            .map((e) => {
                let t = l(o[e]) ?? "";
                return { id: e, label: t, value: o[e] };
            }),
    d = i.A.getArticleURL(s.MVz.DISABLE_GUILD_COMMUNICATION),
    c = "GuildCommunicationDisabledDismissedGuilds",
    _ = "Set Communication Disabled Modal",
    f = "Clear Communication Disabled Modal",
    E = 512;
