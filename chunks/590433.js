n.d(t, {
    Cl: () => f,
    GN: () => _,
    L9: () => o,
    UK: () => s,
    av: () => d,
    cu: () => u,
    hL: () => c,
    tr: () => l
});
var i = n(63063),
    r = n(981631),
    a = n(388032),
    s = (function (e) {
        return (e[(e.DURATION_60_SEC = 60)] = 'DURATION_60_SEC'), (e[(e.DURATION_5_MIN = 300)] = 'DURATION_5_MIN'), (e[(e.DURATION_10_MIN = 600)] = 'DURATION_10_MIN'), (e[(e.DURATION_1_HOUR = 3600)] = 'DURATION_1_HOUR'), (e[(e.DURATION_1_DAY = 86400)] = 'DURATION_1_DAY'), (e[(e.DURATION_1_WEEK = 604800)] = 'DURATION_1_WEEK'), e;
    })({});
function o(e) {
    switch (e) {
        case 60:
            return a.intl.formatToPlainString(a.t['4zv/jo'], { secs: 60 });
        case 300:
            return a.intl.formatToPlainString(a.t.opVZ9v, { mins: 5 });
        case 600:
            return a.intl.formatToPlainString(a.t.opVZ9v, { mins: 10 });
        case 3600:
            return a.intl.formatToPlainString(a.t.xCjYxM, { hours: 1 });
        case 86400:
            return a.intl.formatToPlainString(a.t.k2UNz8, { days: 1 });
        case 604800:
            return a.intl.formatToPlainString(a.t.EmoBDw, { weeks: 1 });
        default:
            return;
    }
}
let l = () =>
        Object.keys(s)
            .filter((e) => isNaN(Number(e)))
            .map((e) => {
                var t;
                return {
                    label: null !== (t = o(s[e])) && void 0 !== t ? t : '',
                    value: s[e]
                };
            }),
    u = i.Z.getArticleURL(r.BhN.DISABLE_GUILD_COMMUNICATION),
    c = 'GuildCommunicationDisabledDismissedGuilds',
    d = 'Set Communication Disabled Modal',
    f = 'Clear Communication Disabled Modal',
    _ = 512;
