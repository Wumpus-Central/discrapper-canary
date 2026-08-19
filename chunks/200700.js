"use strict";
n.d(t, {
    DisableCommunicationDuration: () => l,
    MO: () => c,
    Rv: () => _,
    aZ: () => E,
    getFriendlyDurationString: () => o,
    hl: () => A,
    hs: () => u,
    ny: () => d,
});
var i,
    r = n(975571),
    a = n(652215),
    s = n(375708),
    l =
        (((i = {})[(i.DURATION_60_SEC = 60)] = "DURATION_60_SEC"),
        (i[(i.DURATION_5_MIN = 300)] = "DURATION_5_MIN"),
        (i[(i.DURATION_10_MIN = 600)] = "DURATION_10_MIN"),
        (i[(i.DURATION_1_HOUR = 3600)] = "DURATION_1_HOUR"),
        (i[(i.DURATION_1_DAY = 86400)] = "DURATION_1_DAY"),
        (i[(i.DURATION_1_WEEK = 604800)] = "DURATION_1_WEEK"),
        i);
function o(e) {
    switch (e) {
        case 60:
            return s.intl.formatToPlainString(s.t["4zv/jq"], { secs: 60 });
        case 300:
            return s.intl.formatToPlainString(s.t.opVZ9q, { mins: 5 });
        case 600:
            return s.intl.formatToPlainString(s.t.opVZ9q, { mins: 10 });
        case 3600:
            return s.intl.formatToPlainString(s.t.xCjYxK, { hours: 1 });
        case 86400:
            return s.intl.formatToPlainString(s.t["k2UNz+"], { days: 1 });
        case 604800:
            return s.intl.formatToPlainString(s.t.EmoBD2, { weeks: 1 });
        default:
            return;
    }
}
let d = () =>
        Object.keys(l)
            .filter((e) => isNaN(Number(e)))
            .map((e) => {
                let t = o(l[e]) ?? "";
                return { id: e, label: t, value: l[e] };
            }),
    c = r.A.getArticleURL(a.MVz.DISABLE_GUILD_COMMUNICATION),
    u = "GuildCommunicationDisabledDismissedGuilds",
    _ = "Set Communication Disabled Modal",
    E = "Clear Communication Disabled Modal",
    A = 512;
