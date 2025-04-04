n.d(t, {
    Cl: () => f,
    GN: () => _,
    L9: () => s,
    UK: () => a,
    av: () => d,
    cu: () => c,
    hL: () => u,
    tr: () => l
});
var r = n(63063),
    i = n(981631),
    o = n(388032),
    a = (function (e) {
        return (e[(e.DURATION_60_SEC = 60)] = 'DURATION_60_SEC'), (e[(e.DURATION_5_MIN = 300)] = 'DURATION_5_MIN'), (e[(e.DURATION_10_MIN = 600)] = 'DURATION_10_MIN'), (e[(e.DURATION_1_HOUR = 3600)] = 'DURATION_1_HOUR'), (e[(e.DURATION_1_DAY = 86400)] = 'DURATION_1_DAY'), (e[(e.DURATION_1_WEEK = 604800)] = 'DURATION_1_WEEK'), e;
    })({});
function s(e) {
    switch (e) {
        case 60:
            return o.NW.formatToPlainString(o.t['4zv/jo'], { secs: 60 });
        case 300:
            return o.NW.formatToPlainString(o.t.opVZ9v, { mins: 5 });
        case 600:
            return o.NW.formatToPlainString(o.t.opVZ9v, { mins: 10 });
        case 3600:
            return o.NW.formatToPlainString(o.t.xCjYxM, { hours: 1 });
        case 86400:
            return o.NW.formatToPlainString(o.t.k2UNz8, { days: 1 });
        case 604800:
            return o.NW.formatToPlainString(o.t.EmoBDw, { weeks: 1 });
        default:
            return;
    }
}
let l = () =>
        Object.keys(a)
            .filter((e) => isNaN(Number(e)))
            .map((e) => {
                var t;
                return {
                    label: null != (t = s(a[e])) ? t : '',
                    value: a[e]
                };
            }),
    c = r.Z.getArticleURL(i.BhN.DISABLE_GUILD_COMMUNICATION),
    u = 'GuildCommunicationDisabledDismissedGuilds',
    d = 'Set Communication Disabled Modal',
    f = 'Clear Communication Disabled Modal',
    _ = 512;
