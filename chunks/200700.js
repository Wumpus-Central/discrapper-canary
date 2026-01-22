n.d(t, {
    DisableCommunicationDuration: () => s,
    MO: () => c,
    Rv: () => d,
    aZ: () => f,
    getFriendlyDurationString: () => o,
    hl: () => p,
    hs: () => u,
    ny: () => l,
});
var r = n(975571),
    i = n(652215),
    a = n(985018),
    s = (function (e) {
        return (
            (e[(e.DURATION_60_SEC = 60)] = "DURATION_60_SEC"),
            (e[(e.DURATION_5_MIN = 300)] = "DURATION_5_MIN"),
            (e[(e.DURATION_10_MIN = 600)] = "DURATION_10_MIN"),
            (e[(e.DURATION_1_HOUR = 3600)] = "DURATION_1_HOUR"),
            (e[(e.DURATION_1_DAY = 86400)] = "DURATION_1_DAY"),
            (e[(e.DURATION_1_WEEK = 604800)] = "DURATION_1_WEEK"),
            e
        );
    })({});

function o(e) {
    switch (e) {
        case 60:
            return a.intl.formatToPlainString(a.t["4zv/jq"], {
                secs: 60,
            });
        case 300:
            return a.intl.formatToPlainString(a.t.opVZ9q, {
                mins: 5,
            });
        case 600:
            return a.intl.formatToPlainString(a.t.opVZ9q, {
                mins: 10,
            });
        case 3600:
            return a.intl.formatToPlainString(a.t.xCjYxK, {
                hours: 1,
            });
        case 86400:
            return a.intl.formatToPlainString(a.t["k2UNz+"], {
                days: 1,
            });
        case 604800:
            return a.intl.formatToPlainString(a.t.EmoBD2, {
                weeks: 1,
            });
        default:
            return;
    }
}
let l = () =>
        Object.keys(s)
            .filter((e) => isNaN(Number(e)))
            .map((e) => {
                var t;
                let n = null != (t = o(s[e])) ? t : "";
                return {
                    id: e,
                    label: n,
                    value: s[e],
                };
            }),
    c = r.A.getArticleURL(i.MVz.DISABLE_GUILD_COMMUNICATION),
    u = "GuildCommunicationDisabledDismissedGuilds",
    d = "Set Communication Disabled Modal",
    f = "Clear Communication Disabled Modal",
    p = 512;
