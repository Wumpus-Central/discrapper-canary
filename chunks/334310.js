n.d(t, { A: () => u });
var l = n(405269),
    i = n(927813),
    a = n(403362),
    r = n(403918),
    s = n(985018);
let o = (e) => {
    let t = Date.now() + e;
    return (0, l.ro)(new Date(), new Date(t))
        ? s.intl.data.formatTime(t, { format: "short" })
        : s.intl.formatToPlainString(s.t.DN91Jz, { time: s.intl.data.formatTime(t, { format: "short" }) });
};
function u(e) {
    switch (e) {
        case r.yt.TODAY:
            return `${s.intl.formatToPlainString(s.t.Rea2gR, { hours: 24 })} (${o(i.A.Millis.DAY)})`;
        case r.yt.HOURS_4:
            return `${s.intl.formatToPlainString(s.t.Rea2gR, { hours: 4 })} (${o(4 * i.A.Millis.HOUR)})`;
        case r.yt.HOURS_1:
            return `${s.intl.formatToPlainString(s.t.Rea2gR, { hours: 1 })} (${o(i.A.Millis.HOUR)})`;
        case r.yt.MINUTES_30:
            return `${s.intl.formatToPlainString(s.t.TS3eJb, { minutes: 30 })} (${o(30 * i.A.Millis.MINUTE)})`;
        case r.yt.DONT_CLEAR:
            return s.intl.string(s.t.bRn8cq);
        default:
            (0, a.xb)(e);
    }
}
